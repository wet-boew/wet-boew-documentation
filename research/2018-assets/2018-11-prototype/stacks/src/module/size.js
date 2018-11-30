/**
* Size gear - Keeps track of viewport size
* @author Government of Canada
* @version 1.0
*/

define( [ "module/element", "module/aria", "module/event"], function( ElementUtil, AriaUtil, EventUtil ) {
	"use strict";

	/**
	* the main function body
	* @public
	* @param {DOMElement} $elm the element for which the data-wb5 attribute is located
	* @returns void
	*/
	function handle( elm ) {       
		let width = window.innerWidth,
			currSize;

			if ( width < 767){
				currSize = "1";
			}
			else if (width < 991){
				currSize = "2";
			}
			else if (width < 1199){
				currSize = "3";
			}
			else if (width < 1599){
				currSize = "4";
			}
			else if (width > 1600){
				currSize = "5";
			}
			elm.size = currSize;

			window.addEventListener( 'resize', function ( event ){

				let prevSize = currSize;

				width = window.innerWidth;
				if ( width < 767){
					currSize = "1";
				}
				else if (width < 991){
					currSize = "2";
				}
				else if (width < 1199){
					currSize = "3";
				}
				else if (width < 1599){
					currSize = "4";
				}
				else{
					currSize = "5";
				}

				if (prevSize != currSize){
					console.log("Change detected. New size:",currSize)
					elm.size = currSize;
				}

			} );
	}
	
	function check( size ){
		let compare = size[0];
		size = size[1];
		if (compare == ">"){
			return (document.body.size > size)
		}
		else if (compare == "<"){
			return (document.body.size < size)
		}
		else if (compare == "="){
			return (document.body.size == size)
		}
	}

	function notify (subject, observers){
		
	}

	return {
		handle: handle,
		check: check
	};
} );
