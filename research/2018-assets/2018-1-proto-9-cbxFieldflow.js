
/**
 * @title WET-BOEW fieldflow with combobox plugin
 * @overview Use combobox with fieldflow
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
( function( $, window, document, wb ) {
"use strict";
var $doc = wb.doc,
	localData = {};


// Work around for the integration with Fieldflow
// Extend jQuery selector ":checked" and return the input element
// The extend will return the input box.

var jQueryCheckedFn = $.expr[":"].checked;


var parserFieldflowUI = function( elm, dataObj ) {

	// console.log( "I am called" );
	console.log( dataObj );
	console.log( localData );

	if ( !elm.id ) {
		elm.id = wb.getId();
	}

	for( var i = 0; i < localData.items.length; i++) {
		var i_cache = localData.items[ i ];

		var optionObj = $.extend( {}, i_cache, {
				value: i_cache.label,
				textContent: i_cache.label
			} );

		if ( !optionObj.source ) {
			optionObj.source = elm.id;
		}

		dataObj.data.options.push( optionObj );
		console.log( optionObj );
	}
/*
		var options = elm.options,
			i, i_cache,
			i_len = options.length;

		for( i = 0; i < i_len; i ++ ) {
			i_cache = options[ i ];

			dataObj.data.options.push( 
				{
					value: i_cache.value,
					textContent: i_cache.textContent
				}
			);
		}

		dataObj.data.fieldId = elm.id || wb.getId();
		dataObj.data.fieldName = elm.name;
*/
};


// Just support for the datalist with the default submission????? and leave the combobox for later.
$doc.on( "combobox.createctrl.wb2-fieldflow", ".wb2-fieldflow", function( event, data ) {

	console.log( data );
	console.log( event );
	
	localData = data;
	if ( !window[ "wb-combobox" ]) {
		window[ "wb-combobox" ] = {};
	}
	window[ "wb-combobox" ].parserUI = parserFieldflowUI;
	window[ "wb-combobox" ].hideSourceUI = true;


	event.target.classList.add( "wb-combobox" );
	$( event.target ).trigger( "wb-init.wb-combobox" );

	console.log( $( event.target ).before().get(0).id );

	// $( event.target ).attr( "data-wb-fieldflow-register", $( event.target ).before().get(0).id );
	$( event.target ).data().wb2FieldflowRegister = [ $( event.target ).before().get(0).id ];
	$( event.target ).attr( "data-wb2-fieldflow-origin", $( event.target ).before().get(0).id );

/*
	// If it is not "datalist", then enhance select after
	$( event.target ).trigger( "select.createctrl.wb-fieldflow", data );
	
	
	var select = document.getElementById( data.outputctnrid ).getElementsByTagName( "select" )[ 0 ];
	// Remove the empty option
	var emptyOption = select.querySelector( "[value='']" );
	select.removeChild( emptyOption );
	select.classList.add( "wb-combobox" );
	select.dataset.wb5Template = "tmpl-fieldflow";
	$( select ).trigger( "wb-init.wb-combobox" );
	// Get the generated combobox and add the CSS class wb-fieldflow-init
	// Monitor on "Change" and trigger "fieldflow on change event"
	
*/
	
});
$doc.on( "wb.change", "[role=combobox]:not(.wb2-fieldflow-init)", function( event, data ) {
	console.log( "-- Change event on combobox" );

	console.log( data );
	console.log( data.item );

	var elm = event.currentTarget,
		$elm = $( elm ),
		currentItem = data.item,
		sourceID;

	if ( !elm.id ) {
		elm.id = wb.getId();
	}

	var origin = $( "#" + currentItem.bind ).parentsUntil( ".wb2-fieldflow" ).parent(),
		originID;

	if ( !origin.length ) {
		return;
	}

	originID = origin.get( 0 ).id;

	sourceID = currentItem.source || originID;


	var $linkedElm = $( "#" + currentItem.bind );

	console.log( $linkedElm.data() );

	var actions = $linkedElm.data().wbFieldflow;


	if ( !$.isArray( actions ) ) {
		actions = [ actions ];
	}


	if ( actions ) {

		console.log( "ACTIONS" );
		console.log( actions );
	}

	for( var i = 0; i < actions.length ; i ++ ) {
		var i_cache = actions[ i ];

		

		var eventNameToBeTrigger = i_cache.action + ".action.wb2-fieldflow"
		// "redir.action.wb-fieldflow"

		i_cache.provEvt = "#" + originID;

		$( "#" + originID ).trigger( eventNameToBeTrigger, i_cache );

	}

/*
	$elm.addClass( "wb-fieldflow-init" ); // add crtlSelectClass 

	$elm.attr( "data-wb-fieldflow-source", sourceID ) // If defined by "data.source"
	$elm.attr( "data-wb-fieldflow-origin", originID )
	$elm.attr( "data-wb-fieldflow-push", $linkedElm.attr( "data-wb-fieldflow" ) );


	console.log( $( "#" + sourceID ).data() );
	console.log( $( "#" + originID ).data() );

	// Trigger a change event.
	// $elm.trigger( "change" );

	$elm.removeClass( "wb-fieldflow-init" );
	
*/

	// Try to call the action

	// $orgin.trigger( dtCached.action + "." + actionEvent, dtCached );


});
} )( jQuery, window, document, wb );