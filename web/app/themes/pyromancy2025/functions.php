<?php
/**
 * Register/enqueue custom scripts and styles
 */
add_action('wp_enqueue_scripts', function () {
    // Enqueue your files on the canvas & frontend, not the builder panel. Otherwise custom CSS might affect builder)
    if (!bricks_is_builder_main()) {
        wp_enqueue_style(
            'bricks-child',
            get_stylesheet_uri(),
            ['bricks-frontend'],
            filemtime(get_stylesheet_directory() . '/style.css')
        );
    }
});
require_once __DIR__ . '/vendor/autoload.php';
use Kucrut\Vite;

add_action('wp_enqueue_scripts', function (): void {
    Vite\enqueue_asset(__DIR__ . '/dist', 'src/index.ts', [
        'handle' => 'my-script-handle',
        //'dependencies' => [ 'wp-components', 'some-registered-script-handle' ], // Optional script dependencies. Defaults to empty array.
        ///'css-dependencies' => [ 'wp-components', 'some-registered-style-handle' ], // Optional style dependencies. Defaults to empty array.
        'css-media' => 'all', // Optional.
        'css-only' => false, // Optional. Set to true to only load style assets in production mode.
        'in-footer' => true, // Optional. Defaults to false.
    ]);
});

/**
 * Register custom elements
 */
add_action(
    'init',
    function () {
        $element_files = [__DIR__ . '/elements/title.php'];

        foreach ($element_files as $file) {
            \Bricks\Elements::register_element($file);
        }
    },
    11
);

/**
 * Add text strings to builder
 */
add_filter('bricks/builder/i18n', function ($i18n) {
    // For element category 'custom'
    $i18n['custom'] = esc_html__('Custom', 'bricks');

    return $i18n;
});
