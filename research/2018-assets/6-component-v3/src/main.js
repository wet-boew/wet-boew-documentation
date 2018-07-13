
require( [ "modules/wrench" ], function( wrench ) {

    let nodes = document.querySelectorAll( "[data-wb5]" );

    for ( let node of nodes ) {

        let cmd = wrench.parse( node.dataset.wb5 ),
            module = "modules/" + cmd.command;

        require( [ module ], function( mod ) {
            mod.handle.call( node, cmd.selector, cmd.options );
        } );
    }

} );