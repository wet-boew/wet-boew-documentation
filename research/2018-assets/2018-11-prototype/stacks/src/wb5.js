//
//  wb5.js
//  wet-boew-next generation research approach
//
//

// =============
// = Polyfills =
// =============

let polyfills = [];

if ( !'fetch' in window ) {
	polyfills.push( "polyfills/fetch" );
}

if ( !'Promise' in window ) {
	polyfills.push( "polyfills/promise" );
}

if ( typeof Object.assign != 'function' ) {
	polyfills.push( "polyfills/assign" );
}

require.config( {
    paths: {
        mustache: "vendor/mustache/mustache"
    },
    shim: {
        "mustache": {
            exports: "Mustache"
        }
    }
} );

// =======================
// = Stage the logic set =
// =======================
require( [ "module/element"  ].concat( polyfills ), function( wbElement ) {

	var insertListener = function( event ) {
		if ( event.animationName === "nodeInserted" ) {
			let node = event.target,
				actions = wbElement.inspect( node );
				wbElement.addClass(node, "wb5-inited");
				for (var idx = 0; idx < actions.length; idx++) {
					let action = actions[idx];
					require( [ "module/" + action.command ], function( worker ) {
						worker.handle( node, action.selector, action.options );
					} );
				}

		}
	};

	document.addEventListener( "animationstart", insertListener, false ); // standard+ firefox
	document.addEventListener( "MSAnimationStart", insertListener, false ); // IE
	document.addEventListener( "webkitAnimationStart", insertListener, false ); // Chrome + Safari

} );

// Lets now add the listeners to the DOM
require( [ "css!module/core/observer" ], function() {
	console.log( "[wb5] loaded" );
} );


