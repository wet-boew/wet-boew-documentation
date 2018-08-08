/**
 * Timer class - a programmable timer
 * @author topgallant
 * @version 1.0
 * @requires Debug Event Element
 */

define( [ "module/event", "module/element", "module/core/object" ], function( EventUtil, ElementUtil, ObjectUtil ) {
    "use strict";

    function prime( $elm ) {
        ElementUtil.addListener( $elm, "stop", function( event ) {
            ElementUtil.store( $elm, "timer.state", "off" );
        } );

        ElementUtil.addListener( $elm, "start", function( event ) {
            ElementUtil.store( $elm, "timer.state", "on"  );
        } );

        return $elm;
    }

	function handle( $elm, selector, options ) {

        var properties = ObjectUtil.extend( {}, { eventname: "timerpoke", speed: 3 }, options );

        $elm = prime( $elm );

		for ( let $node of ElementUtil.nodes( $elm, selector ) ) {

			var tid = setInterval( function( event, node ) {
                if ( ElementUtil.store( $elm, "timer.state" ) !== "off" ) {
                    node.dispatchEvent( event );
                }
	        }, properties.speed * 1000, EventUtil.create( properties.eventname ), $node );

            var clearTimer = function(e) {
                clearInterval(tid)
                $elm = null;
                window.removeEventListener( "PJAX",clearTimer, false );
            };
            window.addEventListener( "PJAX", clearTimer, false );
            

		}

	}

	return {
		handle: handle
	};
} );
