/**
 * Broadcast gear - a programmable casting event function
 * @author Government of Canada
 * @version 1.0
 * @requires Debug Event Element
 */

define( [ "module/event", "module/element" ], function( EventUtil, ElementUtil ) {
	"use strict";

	function handle( $elm, selector, options ) {

		let properties = Object.assign({ eventname: "start", listener: "click keydown", key: "13" }, options ),
		events = EventUtil.multiple( properties.eventname, options );

		ElementUtil.addListener(  $elm, properties.listener, function( evnt ) {
			if ( properties.listener == "keydown" ) {
				if ( evnt.keyCode != properties.key ){
					return;
				}
			}
			for ( let $node of ElementUtil.nodes( $elm, selector ) ) {
				for ( let evt of events ) {
					$node.dispatchEvent( evt );
				}
			}
		});

	}

	return {
		handle: handle
	};
} );
