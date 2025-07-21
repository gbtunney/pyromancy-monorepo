#!/bin/bash
# SSH Deployment Script for Bluehost
# Usage: ./config/deploy.sh (run from project root)

# Get the project root directory (parent of config folder)
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Configuration
REMOTE_HOST="bluehost" # Using your SSH config alias
REMOTE_USER=""         # Empty since it's in your SSH config
REMOTE_PATH="~/pyr-staging.gilliantunney.com/"
LOCAL_PATH="$PROJECT_ROOT/"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Starting deployment to Bluehost...${NC}"

# Exclude files/folders that shouldn't be deployed
EXCLUDE_LIST=(
    ".git/"
    ".history/"
    "node_modules/"
    ".env"
    ".env.local"
    "*.log"
    ".DS_Store"
    "config/deploy.sh"
    "README.md"
    "notes/"
    "apps/prisma-api/"
    "packages/"
)

# Build exclude arguments for rsync
EXCLUDE_ARGS=""
for item in "${EXCLUDE_LIST[@]}"; do
    EXCLUDE_ARGS="$EXCLUDE_ARGS --exclude=$item"
done

echo -e "${YELLOW}📦 Syncing files via rsync...${NC}"

# Sync files to server
rsync -avz --delete \
    $EXCLUDE_ARGS \
    --progress \
    $LOCAL_PATH \
    $REMOTE_HOST:$REMOTE_PATH

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Files synced successfully!${NC}"
else
    echo -e "${RED}❌ File sync failed!${NC}"
    exit 1
fi

echo -e "${YELLOW}🔧 Setting up environment file...${NC}"

# Copy production env file to .env
ssh $REMOTE_HOST "cd $REMOTE_PATH && cp .env.production .env"

echo -e "${YELLOW}🔐 Setting file permissions...${NC}"

# Set proper permissions
ssh $REMOTE_HOST "
    cd $REMOTE_PATH
    find . -type d -exec chmod 755 {} \;
    find . -type f -exec chmod 644 {} \;
    chmod 600 .env
    chmod 600 wp-config.php 2>/dev/null || true
"

echo -e "${GREEN}🎉 Deployment complete!${NC}"
echo -e "${GREEN}Visit: https://pyr-staging.gilliantunney.com${NC}"
