#!/bin/zsh

set -e

DATE=$(date +"%Y%m%d-%H%M%S")
BACKUP_DIR="backups"
ZIP_NAME="wp-backup-$DATE.zip"

# Ensure backup dir exists
mkdir -p $BACKUP_DIR

# Run DB manager script to create a new local dump
zsh config/db-manager.sh local

# Find latest local SQL dump
LATEST_SQL=$(ls -t $BACKUP_DIR/localdb-*.sql | head -n 1)

# Collect files

# Collect env files and config
FILES=()
ENV_FILES=(.env*)
for f in $ENV_FILES; do
    [[ -f "$f" ]] && FILES+=("$f")
done
FILES+=(bluehost-config.php)
[[ -f "$LATEST_SQL" ]] && FILES+=("$LATEST_SQL")

# Output backed up env files
echo "Env files included in backup:"
for f in $ENV_FILES; do
    [[ -f "$f" ]] && echo "  $f"
done

# Zip files
zip -j "$BACKUP_DIR/$ZIP_NAME" $FILES

echo "Backup created: $BACKUP_DIR/$ZIP_NAME"
