#!/bin/zsh
# Database manager for local export and Bluehost pulls
# Usage: ./config/db-manager.sh [local|staging|production|both] [--import] (from project root)
#
# Options:
#   local      - Export current local database to backups/
#   staging    - Pull staging database from bluehost pyr-staging.gilliantunney.com
#   production - Pull production database from bluehost pyromancy.org
#   both       - Pull both staging and production databases
#   --import   - Import downloaded database to local (optional second argument)
#
# Examples:
#   ./config/db-manager.sh local
#   ./config/db-manager.sh staging --import
#   ./config/db-manager.sh both

set -e

# Configuration
SERVER="bluehost"
STAGING_PATH="~/pyr-staging.gilliantunney.com"
PRODUCTION_PATH="~/public_html/pyromancy.org/"

# Parse arguments
DB_TYPE="${1:-both}"
IMPORT_FLAG="${2}"

# Show help
if [[ "$1" == "--help" || "$1" == "-h" ]]; then
    echo "Usage: $0 [local|staging|production|both] [--import]"
    echo ""
    echo "Options:"
    echo "  local      - Export current local database to backups/"
    echo "  staging    - Pull staging database from bluehost pyr-staging.gilliantunney.com"
    echo "  production - Pull production database from bluehost pyromancy.org"
    echo "  both       - Pull both staging and production databases (default)"
    echo "  --import   - Import downloaded database to local (optional second argument)"
    echo ""
    echo "Examples:"
    echo "  $0 local"
    echo "  $0 staging --import"
    echo "  $0 both"
    exit 0
fi

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

export_local() {
    local local_dump="./backups/localdb-$(date +%Y%m%d-%H%M%S).sql"

    echo -e "${YELLOW}📤 Exporting local database...${NC}"
    pnpm exec lando wp db export "$local_dump"

    echo -e "${GREEN}✅ Local database exported as: $local_dump${NC}"
}

pull_staging() {
    local staging_dump="./backups/staging-pyromancy-$(date +%Y%m%d-%H%M%S).sql"
    local remote_filename="staging-pyromancy-$(date +%Y%m%d-%H%M%S).sql"

    echo -e "${YELLOW}⚠️  WARNING: This will download staging database!${NC}"
    echo -e "${YELLOW}Continue? (y/N)${NC}"
    read -r confirmation

    if [[ ! $confirmation =~ ^[Yy]$ ]]; then
        echo -e "${YELLOW}Aborted.${NC}"
        return
    fi

    echo -e "${YELLOW}🔄 Exporting staging database...${NC}"
    ssh $SERVER "cd $STAGING_PATH && wp db export $remote_filename"

    echo -e "${YELLOW}⬇️ Downloading staging database...${NC}"
    scp $SERVER:$STAGING_PATH/$remote_filename $staging_dump

    if [[ "$IMPORT_FLAG" == "--import" ]]; then
        echo -e "${RED}⚠️  WARNING: This will import and replace your local database!${NC}"
        echo -e "${YELLOW}Continue with import? (y/N)${NC}"
        read -r import_confirmation

        if [[ $import_confirmation =~ ^[Yy]$ ]]; then
            echo -e "${YELLOW}📥 Importing staging database...${NC}"
            pnpm exec lando wp db import $staging_dump

            echo -e "${YELLOW}🔗 Updating URLs for local development...${NC}"
            pnpm exec lando wp search-replace 'pyr-staging.gilliantunney.com' 'localhost:8080'
            pnpm exec lando wp search-replace 'https://' 'http://'
        else
            echo -e "${YELLOW}Skipped import.${NC}"
        fi
    fi

    echo -e "${YELLOW}🧹 Cleaning up remote staging file...${NC}"
    ssh $SERVER "rm $STAGING_PATH/$remote_filename"

    echo -e "${GREEN}✅ Staging database saved as: $staging_dump${NC}"
}

pull_old() {
    local old_dump="./backups/production-pyromancy-$(date +%Y%m%d-%H%M%S).sql"

    echo -e "${YELLOW}🔄 Exporting production database...${NC}"
    ssh $SERVER "cd $PRODUCTION_PATH && wp db export production-pyromancy-$(date +%Y%m%d-%H%M%S).sql"

    echo -e "${YELLOW}⬇️ Downloading production database...${NC}"
    scp "$SERVER:$PRODUCTION_PATH/production-pyromancy-*.sql" "$old_dump"

    if [[ "$IMPORT_FLAG" == "--import" ]]; then
        echo -e "${RED}⚠️  WARNING: This will import and replace your local database!${NC}"
        echo -e "${YELLOW}Continue with import? (y/N)${NC}"
        read -r import_confirmation

        if [[ $import_confirmation =~ ^[Yy]$ ]]; then
            echo -e "${YELLOW}📥 Importing production database...${NC}"
            pnpm exec lando wp db import $old_dump

            echo -e "${YELLOW}🔗 Updating URLs for local development...${NC}"
            pnpm exec lando wp search-replace 'pyromancy.org' 'localhost:8080'
            pnpm exec lando wp search-replace 'https://' 'http://'
        else
            echo -e "${YELLOW}Skipped import.${NC}"
        fi
    fi

    echo -e "${YELLOW}🧹 Cleaning up remote production file...${NC}"
    ssh $SERVER "rm $PRODUCTION_PATH/production-pyromancy-*.sql"

    echo -e "${GREEN}✅ Production database saved as: $old_dump${NC}"
}

case $DB_TYPE in
    "local")
        echo -e "${YELLOW}📤 Exporting local database...${NC}"
        export_local
        ;;
    "staging")
        echo -e "${YELLOW}🔽 Pulling staging database...${NC}"
        pull_staging
        ;;
    "production")
        echo -e "${RED}⚠️  WARNING: This will download production database!${NC}"
        echo -e "${YELLOW}Continue? (y/N)${NC}"
        read -r confirmation
        if [[ $confirmation =~ ^[Yy]$ ]]; then
            pull_old
        else
            echo -e "${YELLOW}Aborted.${NC}"
            exit 0
        fi
        ;;
    "both")
        echo -e "${YELLOW}🔽 Pulling both databases...${NC}"
        pull_staging

        echo -e "${RED}⚠️  WARNING: This will also download production database!${NC}"
        echo -e "${YELLOW}Continue? (y/N)${NC}"
        read -r confirmation
        if [[ $confirmation =~ ^[Yy]$ ]]; then
            pull_old
        else
            echo -e "${YELLOW}Skipped production database.${NC}"
        fi
        ;;
    *)
        echo -e "${RED}Usage: $0 [local|staging|production|both] [--import]${NC}"
        exit 1
        ;;
esac

echo -e "${GREEN}✅ Database pull complete!${NC}"
