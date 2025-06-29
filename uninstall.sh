#!/bin/bash

# uninstall WordPress directories script
# Usage: ./uninstall.sh [preview|all|plugins|mu-plugins|themes|vendor]

set -e # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to uninstall plugins
uninstall_plugins() {
    echo -e "${YELLOW}uninstalling plugins...${NC}"
    if [ -d "web/app/plugins" ]; then
        cd web/app/plugins
        find . -maxdepth 1 -type d ! -name 'g-wp-plugin' ! -name 'pyromancy-bricks-calendar' ! -name '.' ! -name '.gitkeep' -exec rm -rf {} + 2> /dev/null || true
        cd - > /dev/null
        echo -e "${GREEN}✓ Plugins Uninstalled${NC}"
    else
        echo -e "${RED}✗ Plugins directory not found${NC}"
    fi
}

# Function to uninstall mu-plugins
uninstall_mu_plugins() {
    echo -e "${YELLOW}uninstalling mu-plugins...${NC}"
    if [ -d "web/app/mu-plugins" ]; then
        cd web/app/mu-plugins
        find . -maxdepth 1 -type d ! -name 'g-wp-plugin' ! -name '.' ! -name '.gitkeep' -exec rm -rf {} + 2> /dev/null || true
        cd - > /dev/null
        echo -e "${GREEN}✓ MU-Plugins Uninstalled${NC}"
    else
        echo -e "${RED}✗ MU-Plugins directory not found${NC}"
    fi
}

# Function to uninstall themes
uninstall_themes() {
    echo -e "${YELLOW}Uninstalling themes...${NC}"
    if [ -d "web/app/themes" ]; then
        cd web/app/themes
        find . -maxdepth 1 -type d ! -name 'pyromancy*' ! -name '.' ! -name '.gitkeep' -exec rm -rf {} + 2> /dev/null || true
        cd - > /dev/null
        echo -e "${GREEN}✓ Themes uninstalled${NC}"
    else
        echo -e "${RED}✗ Themes directory not found${NC}"
    fi
}

# Function to uninstall vendor directory
uninstall_vendor() {
    echo -e "${YELLOW}Uninstalling vendor directory...${NC}"
    if [ -d "vendor" ]; then
        rm -rf vendor
        echo -e "${GREEN}✓ Vendor directory removed${NC}"
    else
        echo -e "${RED}✗ Vendor directory not found${NC}"
    fi
}

# Function to preview what would be deleted
preview_uninstall() {
    echo -e "${YELLOW}=== PREVIEW MODE ===${NC}"

    echo -e "\n${YELLOW}Plugins to delete:${NC}"
    if [ -d "web/app/plugins" ]; then
        cd web/app/plugins
        find . -maxdepth 1 -type d ! -name 'g-wp-plugin' ! -name 'pyromancy-calendar' ! -name '.' ! -name '.gitkeep' -print || echo "None"
        cd - > /dev/null
    else
        echo "No plugins directory"
    fi

    echo -e "\n${YELLOW}MU-Plugins to delete:${NC}"
    if [ -d "web/app/mu-plugins" ]; then
        cd web/app/mu-plugins
        find . -maxdepth 1 -type d ! -name 'g-wp-plugin' ! -name '.' ! -name '.gitkeep' -print || echo "None"
        cd - > /dev/null
    else
        echo "No mu-plugins directory"
    fi

    echo -e "\n${YELLOW}Themes to delete:${NC}"
    if [ -d "web/app/themes" ]; then
        cd web/app/themes
        find . -maxdepth 1 -type d ! -name 'pyromancy*' ! -name '.' ! -name '.gitkeep' -print || echo "None"
        cd - > /dev/null
    else
        echo "No themes directory"
    fi

    echo -e "\n${YELLOW}Vendor directory:${NC}"
    if [ -d "vendor" ]; then
        echo "vendor/ (will be removed)"
    else
        echo "No vendor directory found"
    fi
}

# Main script logic
case "${1:-preview}" in
    "preview")
        preview_uninstall
        ;;
    "plugins")
        uninstall_plugins
        ;;
    "mu-plugins")
        uninstall_mu_plugins
        ;;
    "themes")
        uninstall_themes
        ;;
    "vendor")
        uninstall_vendor
        ;;
    "all")
        uninstall_plugins
        uninstall_mu_plugins
        uninstall_themes
        uninstall_vendor
        ;;
    *)
        echo "Usage: $0 [preview|all|plugins|mu-plugins|themes|vendor]"
        exit 1
        ;;
esac
