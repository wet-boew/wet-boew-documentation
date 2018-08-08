/**
 * Store class
 * @author topgallant
 * @version 1.0
 */

define( function() {
    "use strict";

	function bless( $elm, path, value ) {

        let levels = path.split("."),
            curLevel = $elm,
            i = 0;

        while (i < levels.length-1) {
          if( typeof curLevel[levels[i]] === 'undefined')
          {
            curLevel[levels[i]] = {};
          }

          curLevel = curLevel[levels[i]];
          i++;
        }

        if ( value )
        {
            curLevel[levels[levels.length-1]] = value;
            console.log( "set :: " + value);
        }

        console.log( "get only :: " + curLevel[levels[levels.length-1]] );
        return curLevel[levels[levels.length-1]];
	}


	return {
		bless: bless
	};
} );
