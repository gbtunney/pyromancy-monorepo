#!/bin/zsh
# Pull uploads from old Bluehost pyromancy.org site
# Usage: ./config/pull-uploads.sh (from project root)

set -e

# Configuration
SERVER="bluehost"
OLD_REMOTE_PATH="~/public_html/pyromancy.org/wp-content/uploads"
LOCAL_UPLOADS_PATH="./web/app/uploads"
BACKUP_PATH="./backups/uploads-backup-$(date +%Y%m%d-%H%M%S)"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${RED}⚠️  WARNING: This will download and merge old uploads!${NC}"
echo -e "${YELLOW}Continue? (y/N)${NC}"
read -r confirmation

if [[ ! $confirmation =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Aborted.${NC}"
    exit 0
fi

echo -e "${YELLOW}📁 Creating backup of current uploads...${NC}"
if [ -d "$LOCAL_UPLOADS_PATH" ]; then
    cp -r "$LOCAL_UPLOADS_PATH" "$BACKUP_PATH"
    echo -e "${GREEN}✅ Backup created: $BACKUP_PATH${NC}"
else
    echo -e "${YELLOW}📁 No existing uploads directory found${NC}"
fi

echo -e "${YELLOW}⬇️ Downloading old uploads from pyromancy.org...${NC}"
mkdir -p "$LOCAL_UPLOADS_PATH"
rsync -avz --progress "$SERVER:$OLD_REMOTE_PATH/" "$LOCAL_UPLOADS_PATH/"

echo -e "${YELLOW}🔧 Setting proper permissions...${NC}"
chmod -R 755 "$LOCAL_UPLOADS_PATH"

echo -e "${GREEN}✅ Uploads merge complete!${NC}"
echo -e "${GREEN}📁 Uploads synced to: $LOCAL_UPLOADS_PATH${NC}"
echo -e "${GREEN}💾 Backup available at: $BACKUP_PATH${NC}"
