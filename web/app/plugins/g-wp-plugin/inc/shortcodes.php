<?php

declare(strict_types=1);

namespace GPlugin\ShortCodes;

use Kucrut\Vite;

/**
 * Shortcode bootstrapper
 *
 * @return void
 */
function bootstrap(): void
{
	add_shortcode('recent-posts', __NAMESPACE__ . '\\recent_posts_function');
	add_shortcode('g-calendar', __NAMESPACE__ . '\\g_calendar_shortcode');
	add_shortcode('pyromancy_calendar', __NAMESPACE__ . '\\g_calendar_shortcode');
}

function youtube_handlerbk($atts, $content = null)
{
	//run function that actually does the work of the plugin
	if (strlen($content) > 4) {
		return '<iframe  title="YouTube video player" width="500" height="390" src="http://www.youtube.com/embed/' .
			$content .
			'" frameborder="0" allowfullscreen></iframe>';
	} else {
		return '[youtube]';
	}
}
/**
 * Recent Posts Shortcode
 */
function recent_posts_function()
{
	query_posts(['orderby' => 'date', 'order' => 'DESC']);
	if (have_posts()):
		while (have_posts()):
			the_post();
			$return_string =
				'<li><a href="' .
				get_permalink() .
				'">' .
				get_the_title() .
				'</li></a>';
		endwhile;
	endif;
	wp_reset_query();
	return '<ul class="gillian">' . $return_string . '</ul>';
}

function shortcode_render_function($atts, $content)
{
	//set shortcode attributes
	$custom_atts = shortcode_atts(
		[
			'id' => '',
		],
		$atts
	);

	//check if attribute is set
	if (!empty($custom_atts[id])) {
		$id = $custom_atts[id];
	}
}

function g_calendar_shortcode($atts, $content = null)
{
    $atts = shortcode_atts([
        'height' => '600px',
        'initial_view' => 'dayGridMonth',
        'initial_date' => '2017-06-01',
        'google_calendar_id' => 'k835hjhh885m3s2h77mochjtcc@group.calendar.google.com',
        'api_key' => 'AIzaSyCnp0CB97FKH0bCHa_e5k3rbVT_f9rZpXI'
    ], $atts, 'g-calendar');

    Vite\enqueue_asset(__DIR__ . '/../dist', 'src/main.tsx', [
        'handle' => 'g-calendar-' . uniqid(),
        'dependencies' => ['react', 'react-dom'],
        'in-footer' => true,
    ]);

    $calendar_id = 'g-calendar-' . uniqid();
    
    return sprintf(
        '<div id="%s" class="g-calendar-container" data-height="%s" data-initial-view="%s" data-initial-date="%s" data-google-calendar-id="%s" data-api-key="%s"></div>',
        esc_attr($calendar_id),
        esc_attr($atts['height']),
        esc_attr($atts['initial_view']),
        esc_attr($atts['initial_date']),
        esc_attr($atts['google_calendar_id']),
        esc_attr($atts['api_key'])
    );
}
