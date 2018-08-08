/**
 * Broadcast class - a programmable casting event function
 * @author topgallant
 * @version 1.0
 * @requires Debug Event Element
 */

define( [ "module/event", "module/element", "module/core/object" ], function( EventUtil, ElementUtil, ObjectUtil ) {
    "use strict";

	function handle( $elm, selector, options ) {

        let properties = ObjectUtil.extend( {}, { eventname: "start", listener: "click keypress" }, options ),
        events = EventUtil.multiple( properties.eventname, options );

        ElementUtil.addListener(  $elm, properties.listener, function( evnt ) {
    		for ( let $node of ElementUtil.nodes( $elm, selector ) ) {
                for (let evt of events )
                {
                    $node.dispatchEvent( evt );
                }
    		}
        });

	}

	return {
		handle: handle
	};
} );
