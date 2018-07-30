/**
 * Classlist class
 * @author topgallant
 * @version 1.0
 */

define( function() {
    "use strict";

    /**
     * toggle a class on an element
     * @private
     * @param {DOMElement} $elm the element to toggle the class to
     * @param {String} classname the class to toggle with
     * @returns void
     */

    function toggle( $elm, classname ) {
        $elm.classList.toggle( classname );
    }

    /**
     * add a class to an element
     * @private
     * @param {DOMElement} $elm the element to toggle the class to
     * @param {String} classname add
     * @returns void
     */

    function add( $elm, classname ) {
		if ( !has( $elm, classname ) ) {
			$elm.classList.add( classname );
		}
    }

    /**
     * removes a class to an element
     * @private
     * @param {DOMElement} $elm the element to toggle the class to
     * @param {String} classname to remove
     * @returns void
     */

    function remove( $elm, classname ) {
		if ( has( $elm, classname ) ) {
			$elm.classList.remove( classname );
		}
    }

	/**
	* check if an element has a classname
	* @private
	* @param {DOMElement) $elm DOM element to inspect
	* @param {String) classname the classname to check for
	* @returns true or false
	* @type Boolean
	*/

	function has( $elm, classname ) {
		return $elm.classList.contains( classname );
	}

	return {
		toggle: toggle,
		add: add,
		has: has,
		remove: remove
	};
} );
