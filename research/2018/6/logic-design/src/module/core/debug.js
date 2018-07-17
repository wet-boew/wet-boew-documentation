/**
 * Debug tools
 */
define( [ "module/core/time" ], function( lTime ) {
	"use strict"

	function log( message ) {
		console.log( "[ " + lTime.stamp() + " ] " + message );
    }

    return {
        log : log
    }

} );
