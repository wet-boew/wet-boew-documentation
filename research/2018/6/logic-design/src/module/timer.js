/**
 * timer.js - a timer module that will create a repetative timer on an element
 * @returns {void}
 */
define( [ "module/core/debug", "module/event" ], function( lDebug, lEvent ) {

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

		var tid = setInterval( function( event, node ) {
			node.dispatchEvent( event ), lDebug.log( "recieved :: " +  event.type );
        }, properties.speed*1000 , lEvent.create( properties.name ), this );
	}

	return {
		handle: handle
	};
} );
