<?php
if (!defined('ABSPATH')) {
    exit;
}

class GCalendarElement extends \Bricks\Element {
    public $category = 'general';
    public $name = 'g-calendar';
    public $icon = 'fa-calendar';

    public function get_label() {
        return 'G Calendar';
    }

    public function set_controls() {
        $this->controls['height'] = [
            'tab' => 'content',
            'label' => 'Height',
            'type' => 'text',
            'default' => '600px'
        ];

        $this->controls['initial_view'] = [
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
        
        \Kucrut\Vite\enqueue_asset(__DIR__ . '/../../dist', 'src/main.tsx', [
            'handle' => 'g-calendar-bricks-' . $this->id,
            'dependencies' => ['react', 'react-dom'],
            'in-footer' => true,
        ]);

        printf(
            '<div class="g-calendar-container" data-height="%s" data-initial-view="%s"></div>',
            esc_attr($settings['height'] ?? '600px'),
            esc_attr($settings['initial_view'] ?? 'dayGridMonth')
        );
    }
}