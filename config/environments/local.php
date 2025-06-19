<?php
/**
 * Configuration overrides for WP_ENV === 'local'
 * Use this for local development with Lando or similar
 */

use Roots\WPConfig\Config;
use function Env\env;

/**
 * Local development settings - similar to development but more permissive
 */
Config::define('SAVEQUERIES', true);
Config::define('WP_DEBUG', true);
Config::define('WP_DEBUG_DISPLAY', true);
Config::define('WP_DEBUG_LOG', env('WP_DEBUG_LOG') ?? true);
Config::define('WP_DISABLE_FATAL_ERROR_HANDLER', true);
Config::define('SCRIPT_DEBUG', true);
Config::define('DISALLOW_INDEXING', true);

/**
 * GraphQL debugging for development
 */
Config::define('GRAPHQL_DEBUG', env('GRAPHQL_DEBUG') ?? true);

/**
 * Allow all file modifications in local development
 */
Config::define('DISALLOW_FILE_MODS', false);
Config::define('DISALLOW_FILE_EDIT', false);

/**
 * Enable auto-updates in local for testing
 */
Config::define('WP_AUTO_UPDATE_CORE', true);
Config::define('AUTOMATIC_UPDATER_DISABLED', false);

/**
 * Show errors for debugging
 */
ini_set('display_errors', '1');
ini_set('error_reporting', E_ALL);

/**
 * Increase memory for local development
 */
Config::define('WP_MEMORY_LIMIT', '512M');
