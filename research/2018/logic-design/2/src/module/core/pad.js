/**
 * Pad class
 * @author topgallant
 * @version 1.0
 */

define( function() {
    "use strict" ;

	function start( text, targetLength, padString ) {

        text = "" + text ;

		if ( !padString || text.length >= targetLength ) {
            return text ;
          }
          let max = ( targetLength - text.length ) / padString.length ;
          for ( var i = 0 ;i < max ;i++ ) {
            text = padString + text ;
          }
          return text ;
	}

	function end( text, targetLength, padString ) {

        text = "" + text ;

		if ( !padString || text.length >= targetLength ) {
            return text ;
          }
          var max = ( targetLength - text.length ) / padString.length ;
          for ( var i = 0 ;i < max ;i++ ) {
            text += padString ;
          }

          return text ;
	}


	return {
		start: start,
		end: end
	} ;
} ) ;
