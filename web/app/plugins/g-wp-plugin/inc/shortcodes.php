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
	add_shortcode('you-tube', __NAMESPACE__ . '\\youtube_handler');
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
