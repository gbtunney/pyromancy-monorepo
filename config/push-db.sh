#!/bin/bash
# Push database to Bluehost production
# Usage: ./config/push-db.sh (from project root)

set -e

# Configuration
SERVER="bluehost" # Using your SSH config alias
REMOTE_PATH="~/pyr-staging.gilliantunney.com"
LOCAL_DUMP="local-backup-$(date +%Y%m%d-%H%M%S).sql"
REMOTE_DUMP="imported-backup-$(date +%Y%m%d-%H%M%S).sql"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${RED}⚠️  WARNING: This will overwrite the production database!${NC}"
echo -e "${YELLOW}Are you sure you want to continue? (y/N)${NC}"
read -r confirmation

if [[ ! $confirmation =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Aborted.${NC}"
    exit 0
fi

echo -e "${YELLOW}📤 Exporting local database...${NC}"
pnpm exec lando wp db export $LOCAL_DUMP

echo -e "${YELLOW}⬆️  Uploading database to server...${NC}"
scp $LOCAL_DUMP $SERVER:$REMOTE_PATH/$LOCAL_DUMP

echo -e "${YELLOW}💾 Backing up production database...${NC}"
ssh $SERVER "cd $REMOTE_PATH && wp db export $REMOTE_DUMP"

echo -e "${YELLOW}📥 Importing database to production...${NC}"
ssh $SERVER "cd $REMOTE_PATH && wp db import $LOCAL_DUMP"

echo -e "${YELLOW}🔗 Updating URLs for production...${NC}"
ssh $SERVER "cd $REMOTE_PATH && wp search-replace 'localhost:8080' 'pyr-staging.gilliantunney.com'"
ssh $SERVER "cd $REMOTE_PATH && wp search-replace 'http://pyr-staging.gilliantunney.com' 'https://pyr-staging.gilliantunney.com'"

echo -e "${YELLOW}🧹 Cleaning up temporary files...${NC}"
rm $LOCAL_DUMP
ssh $SERVER "rm $REMOTE_PATH/$LOCAL_DUMP"

echo -e "${GREEN}✅ Database push complete!${NC}"
echo -e "${GREEN}🔗 Production URL: https://pyr-staging.gilliantunney.com${NC}"
echo -e "${YELLOW}💾 Production backup saved as: $REMOTE_DUMP${NC}"
