<?php
/*
Plugin Name: Go Decentralized
Plugin URI: https://github.com/imabutahersiddik/Go-Decentralized/plugins/wordpress
Description: Decentralize your website pages in one-click.
Version: 1.0.0
Author: Abu Taher Siddik
*/

function go_decentralized_enqueue_scripts() {
    wp_enqueue_script('one-click-go-decentralized', 'https://cdn.jsdelivr.net/gh/imabutahersiddik/decentralized-web@main/public/js/d-web.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'go_decentralized_enqueue_scripts');

function go_decentralized_shortcode() {
    return '<div id="encrypted-html"></div>
            <a href="#" id="d-web-link">Open Decentralized Page</a>';
}
add_shortcode('decentralized', 'go_decentralized_shortcode');