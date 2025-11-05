#!/usr/bin/env node

/**
 * Lists all available plugin packages
 */

import { readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pluginDir = join(__dirname, '..');
const pluginsDir = join(pluginDir, '..');
const packagesDir = join(pluginsDir, 'packages');

try {
    const files = readdirSync(packagesDir);
    const zipFiles = files.filter(file => file.endsWith('.zip'));

    if (zipFiles.length === 0) {
        console.log('No packages found.');
        console.log(`Run "pnpm package:zip" to create a distributable package.\n`);
        process.exit(0);
    }

    console.log(`\nAvailable packages in ${packagesDir}:\n`);
    
    zipFiles.forEach(file => {
        const filePath = join(packagesDir, file);
        const stats = statSync(filePath);
        const size = (stats.size / 1024).toFixed(2);
        const date = stats.mtime.toLocaleString();
        
        console.log(`  ${file}`);
        console.log(`    Size: ${size} KB`);
        console.log(`    Created: ${date}\n`);
    });

    console.log(`Total: ${zipFiles.length} package(s)\n`);
    console.log(`To create a new package, run: pnpm package:zip`);

} catch (error) {
    if (error.code === 'ENOENT') {
        console.log('No packages directory found.');
        console.log(`Run "pnpm package:zip" to create a distributable package.\n`);
    } else {
        console.error('Error listing packages:', error.message);
        process.exit(1);
    }
}
