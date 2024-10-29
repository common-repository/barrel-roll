<?php
/* 
Plugin Name: Barrel Roll
Plugin URI: http://bryan.co.il/barrelroll
Description: Make your WordPress page do a barrel roll
Author: Bryan Appleby
Version: 1.0 
Author URI: http://bryan.co.il

/*  Copyright 2012  bryan  (email : barrelroll@bryan.co.il)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as 
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/  

function barrel_roll_script(){
    wp_register_script( 'barrel_roll', '/wp-content/plugins/barrel-roll/functions.js');
    wp_enqueue_script( 'barrel_roll' );
}

add_action('wp_print_scripts', 'barrel_roll_script');

?>