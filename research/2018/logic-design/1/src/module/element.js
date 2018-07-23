/**
 * Element class
 * @author topgallant
 * @version 1.0
 */

define( ["module/core/store"], function( StoreUtil ) {
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

    function addClass( $elm, classname ) {
		if ( !$elm.classList.contains( classname ) ) {
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

    function removeClass( $elm, classname ) {
		if ( $elm.classList.contains( classname ) ) {
			$elm.classList.remove( classname );
		}

    }

    function store( $elm, key, value ){

        return StoreUtil.bless( $elm, key, value);

    }

	/**
	 * check if an element has a classname
	 * @private
	 * @param {DOMElement) $elm DOM element to inspect
	 * @param {String) classname the classname to check for
	 * @returns true or false
	 * @type Boolean
	 */

	function hasClass( $elm, classname ) {
		return $elm.classList.contains( classname );
	}

    /**
     * parse the data-wb5 attribute for action stack
     * @public
     * @param {String} attr the attribute text
     * @returns action object
     * @type Object
     */

	function parse( attr ) {
		let parts = attr.split( "@" ),
			action = { command: parts[ 0 ] };

		if ( parts.length > 1 ) {
			action.selector = parts[ 1 ];
		}

		if ( parts.length > 2 ) {
			action.options = JSON.parse( parts[ 2 ] );
		}

		return action;
    }

    /**
     * take the selector node and queries again DOM
     * @public
     * @param {DOMElement} node the context node
     * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
     * @returns Describe what it returns
     * @type String|Object|Array|Boolean|Number
     */

	function nodes( node, selector ) {
		if ( selector == null || selector == '' ) {
			return [ node ];
		}

		let context = ( selector && selector.startsWith( "#" ) ) ? document : node;

        // run the query against the required context
		return context.querySelectorAll( selector );
	}

	/**
	* Add one or more listeners to an element
	* @public
	* @param {Object} $elm - DOM element to add listeners to
	* @param {String} names - space separated list of event names, e.g. 'click change'
	* @param {Function} listener - function to attach for each event as a listener
	*/
	function addListener( $elm, names, listener ) {

		let events = names.split( " " );

		for ( let evnt of events)
		{
			$elm.addEventListener( evnt, listener, false );
		}
    }


    return {
        parse: parse,
		nodes: nodes,
        toggle: toggle,
        store: store,
		addClass: addClass,
		hasClass: hasClass,
		removeClass: removeClass,
		addListener: addListener
    };
} );
