#!/usr/bin/env node

/**
 * Creates a distributable ZIP file of the WordPress plugin
 * Includes only necessary files for distribution
 */

import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pluginDir = join(__dirname, '..');
const pluginsDir = join(pluginDir, '..');
const packagesDir = join(pluginsDir, 'packages');

// Plugin name
const PLUGIN_NAME = 'g-wp-plugin';

// Create packages directory if it doesn't exist
if (!existsSync(packagesDir)) {
    mkdirSync(packagesDir, { recursive: true });
}

// Generate timestamp for unique filename
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
const zipName = `${PLUGIN_NAME}-${timestamp}.zip`;
const zipPath = join(packagesDir, zipName);

// Check if dist folder exists
const distExists = existsSync(join(pluginDir, 'dist'));
if (!distExists) {
    console.warn('Warning: dist folder not found. Run "pnpm build" first to include built assets.');
    console.warn('Continuing with source files only...\n');
}

// Files and directories to include
const includePatterns = [
    'plugin.php',
    'composer.json',
    'inc/',
    'public/',
    'graphql/types/',
    'README.md',
];

// Add dist if it exists
if (distExists) {
    includePatterns.push('dist/');
}

// Add vendor if it exists
const vendorExists = existsSync(join(pluginDir, 'vendor'));
if (vendorExists) {
    includePatterns.push('vendor/');
}

// Files and directories to exclude
const excludePatterns = [
    '*/node_modules/*',
    '*.git*',
    '*/src/*',
    '*.ts',
    '*.tsx',
    '*tsconfig*',
    '*vite.config*',
    '*unocss.config*',
    '*.eslintrc*',
    '*prettier*',
    '*codegen.ts',
    '*/scripts/*',
    '*.map',
    '*/tests/*',
    '*/test/*',
    '*/Test/*',
    '*/Tests/*',
    '*/.github/*',
    '*/.changeset/*',
    '*/.vscode/*',
    '*/phpunit.xml*',
    '*/phpcs.xml*',
    '*/.editorconfig',
    '*/composer.lock',
    '*/package.json',
    '*/pnpm-lock.yaml',
    '*/eslint.config.js',
];

try {
    console.log(`Creating distributable ZIP for ${PLUGIN_NAME}...`);
    console.log(`Output: ${zipPath}\n`);

    // Change to plugins directory
    process.chdir(pluginsDir);

    // Build zip command
    const includeArgs = includePatterns.map(pattern => `"${PLUGIN_NAME}/${pattern}"`).join(' ');
    const excludeArgs = excludePatterns.map(pattern => `-x "${pattern}"`).join(' ');
    
    const zipCommand = `zip -r "${zipPath}" ${includeArgs} ${excludeArgs}`;
    
    console.log('Executing:', zipCommand, '\n');
    execSync(zipCommand, { stdio: 'inherit' });

    console.log(`\n✓ Successfully created: ${zipPath}`);
    console.log(`\nPackage includes:`);
    includePatterns.forEach(pattern => {
        console.log(`  - ${pattern}`);
    });
    
    if (!distExists) {
        console.log('\n⚠ Note: Built assets (dist/) not included. Run "pnpm build" first for a complete package.');
    }
    if (!vendorExists) {
        console.log('\n⚠ Note: Composer dependencies (vendor/) not included. Run "pnpm composer:install" first.');
    }

} catch (error) {
    console.error('Error creating ZIP file:', error.message);
    process.exit(1);
}
