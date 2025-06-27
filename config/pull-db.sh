#!/bin/bash
# Pull database from Bluehost production
# Usage: ./config/pull-db.sh (from project root)

set -e

# Configuration
SERVER="bluehost" # Using your SSH config alias
REMOTE_PATH="~/pyr-staging.gilliantunney.com"
LOCAL_DUMP="production-dump-$(date +%Y%m%d-%H%M%S).sql"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🔽 Pulling database from production...${NC}"

echo -e "${YELLOW}🔄 Exporting production database...${NC}"
ssh $SERVER "cd $REMOTE_PATH && wp db export $LOCAL_DUMP"

echo -e "${YELLOW}⬇️ Downloading database...${NC}"
scp $SERVER:$REMOTE_PATH/$LOCAL_DUMP ./

echo -e "${YELLOW}📥 Importing to local database...${NC}"
pnpm exec lando wp db import $LOCAL_DUMP

echo -e "${YELLOW}🔗 Updating URLs for local development...${NC}"
pnpm exec lando wp search-replace 'pyr-staging.gilliantunney.com' 'localhost:8080'
pnpm exec lando wp search-replace 'https://' 'http://'

echo -e "${YELLOW}🧹 Cleaning up remote file...${NC}"
ssh $SERVER "rm $REMOTE_PATH/$LOCAL_DUMP"

echo -e "${GREEN}✅ Database pull complete!${NC}"
echo -e "${GREEN}💾 Local dump saved as: $LOCAL_DUMP${NC}"
