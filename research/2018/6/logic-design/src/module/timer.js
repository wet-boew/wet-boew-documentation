/**
 * timer.js - a timer module that will create a repetative timer on an element
 * @returns {void}
 */
define( [ "module/core/debug", "module/event" , "module/element"], function( lDebug, lEvent, element ) {

    var defaults = {
        name: "timerpoke",
        speed: 2
    };

    function getProperties( defaults, options ){

        if ( options )
        {
            if ( options.speed )
            {
                defaults.speed = options.speed;
            }

            if ( options.name )
            {
                defaults.name = options.name;
            }
        }

        return defaults;
    }

	function handle( selector, options ) {

        var properties = getProperties( defaults, options );

		for ( let node of element.nodes( this, selector ) ) {

			var tid = setInterval( function( event, nde ) {
				nde.dispatchEvent( event );
	        }, properties.speed*1000 , lEvent.create( properties.name ), node );
		}

	}

	return {
		handle: handle
	};
} );
