//
//  wb5.js
//  wet-boew-next generation research approach
//
//

// =============
// = Polyfills =
// =============

let polyfills = [];

if ( !window.hasOwnProperty( "fetch" ) ) {
	polyfills.push( "polyfills/fetch" );
}

if ( !window.hasOwnProperty( "Promise" ) ) {
	polyfills.push( "polyfills/promise" );
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
require( [ "module/element"  ].concat( polyfills ), function( ElementUtil ) {

	var insertListener = function( event ) {
		if ( event.animationName === "nodeInserted" ) {
			let node = event.target,
				action = ElementUtil.parse( node.dataset.wb5 );

			require( [ "module/" + action.command ], function( worker ) {
				worker.handle( node, action.selector, action.options );
			} );
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


