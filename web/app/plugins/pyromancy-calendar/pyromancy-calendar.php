<?php
/**
 * Plugin Name: Pyromancy Calendar
 * Description: React-based FullCalendar component for Bricks Builder
 * Version: 1.0.0
 * Author: Gillian Tunney
 */

if (!defined('ABSPATH')) {
    exit;
}

class PyromancyCalendar {
    
    public function __construct() {
        error_log('PyromancyCalendar: Constructor called');
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
        add_action('init', [$this, 'register_bricks_element']);
        add_shortcode('pyromancy_calendar', [$this, 'render_calendar_shortcode']);
    }

    public function enqueue_scripts() {
        // Enqueue React from CDN
        wp_enqueue_script(
            'react',
            'https://unpkg.com/react@18/umd/react.production.min.js',
            [],
            '18.3.1',
            true
        );
        
        wp_enqueue_script(
            'react-dom',
            'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
            ['react'],
            '18.3.1',
            true
        );

        // Enqueue compiled calendar component
        wp_enqueue_script(
            'pyromancy-calendar',
            plugin_dir_url(__FILE__) . 'dist/pyromancy-calendar.iife.js',
            ['react', 'react-dom'],
            '1.0.0',
            true
        );

        wp_enqueue_style(
            'pyromancy-calendar-style',
            plugin_dir_url(__FILE__) . 'dist/style.css',
            [],
            '1.0.0'
        );
    }

    public function register_bricks_element() {
        error_log('PyromancyCalendar: register_bricks_element called');
        if (!class_exists('Bricks\Elements\Base')) {
            error_log('PyromancyCalendar: Bricks Elements Base class not found');
            return;
        }

        error_log('PyromancyCalendar: Loading Bricks element');
        require_once plugin_dir_path(__FILE__) . 'includes/bricks-calendar-element.php';
    }

    public function render_calendar_shortcode($atts) {
        $atts = shortcode_atts([
            'height' => 'auto',
            'initial_view' => 'dayGridMonth',
            'events' => '[]'
        ], $atts);

        $calendar_id = 'pyromancy-calendar-' . uniqid();
        
        ob_start();
        ?>
        <div id="<?php echo esc_attr($calendar_id); ?>" class="pyromancy-calendar-container"></div>
        <script>
        document.addEventListener('DOMContentLoaded', function() {
            if (window.PyromancyCalendar) {
                window.PyromancyCalendar.init('<?php echo esc_js($calendar_id); ?>', {
                    height: '<?php echo esc_js($atts['height']); ?>',
                    initialView: '<?php echo esc_js($atts['initial_view']); ?>',
                    events: <?php echo wp_kses_post($atts['events']); ?>
                });
            }
        });
        </script>
        <?php
        return ob_get_clean();
    }
}

new PyromancyCalendar();
