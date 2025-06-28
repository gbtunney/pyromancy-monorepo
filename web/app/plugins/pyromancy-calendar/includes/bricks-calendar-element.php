<?php

if (!defined('ABSPATH')) {
    exit;
}

class PyromancyCalendarElement extends \Bricks\Element {
    public $category = 'general';
    public $name = 'pyromancy-calendar';
    public $icon = 'fa-calendar';

    public function get_label() {
        return 'Pyromancy Calendar';
    }

    public function set_controls() {
        $this->controls['height'] = [
            'tab' => 'content',
            'label' => 'Height',
            'type' => 'text',
            'default' => 'auto'
        ];

        $this->controls['initialView'] = [
            'tab' => 'content',
            'label' => 'Initial View',
            'type' => 'select',
            'options' => [
                'dayGridMonth' => 'Month',
                'timeGridWeek' => 'Week',
                'timeGridDay' => 'Day'
            ],
            'default' => 'dayGridMonth'
        ];
    }

    public function render() {
        $settings = $this->settings;
        $calendar_id = 'pyromancy-calendar-' . $this->id;
        
        echo "<div id='{$calendar_id}' class='pyromancy-calendar-container'></div>";
        echo "<script>
            document.addEventListener('DOMContentLoaded', function() {
                if (window.PyromancyCalendar) {
                    window.PyromancyCalendar.init('{$calendar_id}', {
                        height: '{$settings['height']}',
                        initialView: '{$settings['initialView']}',
                        events: []
                    });
                }
            });
        </script>";
    }
}

// Register the element
\Bricks\Elements::register_element(__FILE__, 'PyromancyCalendarElement');
