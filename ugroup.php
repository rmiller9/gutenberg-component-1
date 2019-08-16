<?php
/**
 * Plugin Name: Ugroup Test
 * Author: Rick Miller
*  Description: Creates a custom block for testing purposes
*  Version: 1.0.0
 */
  
function enqueueBlock() {
  wp_enqueue_script(
    'ugroup-new-block',
    plugin_dir_url(__FILE__) . 'ugroup-test.js',
    array('wp-blocks','wp-editor'),
    true
  );
}
   
add_action('enqueue_block_editor_assets', 'enqueueBlock');
