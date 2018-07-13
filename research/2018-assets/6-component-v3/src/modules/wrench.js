// Timer function
define( function() {

    function parse( text ) {
        var components = text.split( "@" ),
            command = { command: components.shift() };

        if ( components.length ) {
            command.selector = components.shift();
        }

        if ( components.length ) {
            command.options = JSON.parse( components.shift() );
        }

        return command;
    }

    return {
        parse: parse
    };
} );
