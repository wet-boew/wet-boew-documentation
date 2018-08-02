/**
 * Aria class
 * @author topgallant
 * @version 1.0
 */

define( function() {
    "use strict" ;

	function add( $elm, key, value ) {
        let aria = "aria-" + key;
        $elm.setAttribute( aria, value );
	}

	return {
		add: add
	};
} ) ;
