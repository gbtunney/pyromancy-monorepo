<?php

if (!defined('ABSPATH')) {
    exit;
}

class Bricks_Calendar_Element extends \Bricks\Element {
    
    echo "hjkhkhk";
    public $category = 'pyromancy';
    public $name = 'pyromancy-calendar';
    public $icon = 'fas fa-calendar-alt';

    public function get_label() {
        return esc_html__('Pyromancy Calendar', 'pyromancy');
    }

    public function set_controls() {
        $this->controls['height'] = [
            'tab' => 'content',
            'label' => esc_html__('Height', 'pyromancy'),
            'type' => 'text',
            'default' => 'auto',
            'placeholder' => 'auto, 600px, 50vh'
        ];

        $this->controls['initialView'] = [
            'tab' => 'content',
            'label' => esc_html__('Initial View', 'pyromancy'),
            'type' => 'select',
            'options' => [
                'dayGridMonth' => 'Month',
                'timeGridWeek' => 'Week',
                'timeGridDay' => 'Day'
            ],
            'default' => 'dayGridMonth'
        ];

        $this->controls['events'] = [
            'tab' => 'content',
            'label' => esc_html__('Events JSON', 'pyromancy'),
            'type' => 'textarea',
            'default' => '[]',
            'description' => 'Events in JSON format'
        ];
    }

    public function render() {
        $settings = $this->settings;
        $calendar_id = 'pyromancy-calendar-' . $this->id;
        
        echo '<div ' . $this->render_attributes('_root') . '>';
        echo '<div id="' . esc_attr($calendar_id) . '" class="pyromancy-calendar-container"></div>';
        
        $events = !empty($settings['events']) ? $settings['events'] : '[]';
        $height = !empty($settings['height']) ? $settings['height'] : 'auto';
        $initialView = !empty($settings['initialView']) ? $settings['initialView'] : 'dayGridMonth';
        
        ?>
        <script>
        document.addEventListener('DOMContentLoaded', function() {
            if (window.PyromancyCalendar) {
                window.PyromancyCalendar.init('<?php echo esc_js($calendar_id); ?>', {
                    height: '<?php echo esc_js($height); ?>',
                    initialView: '<?php echo esc_js($initialView); ?>',
                    events: <?php echo wp_kses_post($events); ?>
                });
            }
        });
        </script>
        <?php
        
        echo '</div>';
    }
}

// Register the element
\Bricks\Elements::register_element(__FILE__, 'Bricks_Calendar_Element');
