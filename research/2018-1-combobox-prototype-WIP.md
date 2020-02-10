---
published: true
layout: default-theme-wet-boew-en
title: Combobox prototype WIP (Work in progress) - Datalist JSON suggestion - Research and finding
description: See the source code for all the notes
languages: false
hide_breadcrumb: false
date_modified: 2020-02-10
script_src: //wet-boew.github.io/themes-dist/GCWeb/GCWeb/js/theme.min.js
script_src2: 2018-assets/1-datalist-combobox.js
script_src3: //wet-boew.github.io/themes-dist/GCWeb/wet-boew/js/deps/jsonpointer.js
---

Working in progress prototype. See the source code for all the inline informal notes.

{::nomarkdown}

{% raw %}


<style>
/* Overlay default style */
[role=listbox] {
	min-width: 230px;
	background: white;
	border: 1px solid #ccc;
	list-style: none;
	margin: 0;
	padding: 0;
	position: absolute;
	top: 1.7em;
	z-index: 9999;
	/* Note about z-index
	Ideally it should be set to 1, but the <footer id="wb-info"> has a z-index set to 5,
	 */
}
/* Active state style */
[role=option][aria-selected=true] {
	background: rgb(139, 189, 225); /* #8bbde1 */
}
[role=option]:hover {
	cursor: default;
	background: #719AB9;
}
/* Have the input and the overlay together */
.combobox-wrapper {
    display: inline-block;
    position: relative;
}
/*[role=combobox]:after {
	content: "\25BC\a0";
}*/
</style>




<div class="wb-frmvld">
              <form action="submited-contact-us-page.html">
                <div id="test1" class="wb-fieldflow" data-wb-fieldflow='{ "noreqlabel": true, "isoptional": true, "noForm": true, "defaultselectedlabel":"Popular cannabis questions", "renderas":"combobox",


                "defaultIfNone": { "action": "query", "name": "question" }



                 }'>
                  <p>If you have questions about, ask away!</p>
                  <ul>
                    <li data-wb-fieldflow="{&quot;action&quot;:&quot;redir&quot;, &quot;url&quot;: &quot;http://www.example.ca/page1.html&quot;}">Page 1</li>
                    <li data-wb-fieldflow="{&quot;action&quot;:&quot;redir&quot;, &quot;url&quot;: &quot;http://www.example.ca/page2.html&quot;}">Page 2</li>
                    <li data-wb-fieldflow="{&quot;action&quot;:&quot;redir&quot;, &quot;url&quot;: &quot;http://www.example.ca/page3.html&quot;}">Page 3</li>
                  </ul>
                </div>
                <div class="row">
                  <div class="col-sm-3 col-md-2">
                    <input class="btn btn-default mrgn-bttm-md" type="submit" value="Submit">
                  </div>
                  <p class="mrgn-tp-sm">Can't find an answer? <a href="submited-contact-us-page.html">Send us your question</a>.</p>
                </div>
              </form>
 </div>



<!--
<div class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"combobox" }'>
	<p>Find the plugin for the action you need:</p>

	<ul>
		<li><a href="http://wet-boew.github.io/v4.0-ci/demos/data-ajax/data-ajax-en.html">Inserting content</a></li>
		<li><a href="http://wet-boew.github.io/v4.0-ci/demos/lightbox/lightbox-en.html">Photo galery</a></li>
		<li><a href="http://wet-boew.github.io/v4.0-ci/demos/charts/charts-en.html">Draw charts</a></li>
		<li><a href="http://wet-boew.github.io/v4.0-ci/demos/details/details-en.html">Expand and collapse content</a></li>
		<li><a href="http://wet-boew.github.io/v4.0-ci/demos/equalheight/equalheight-en.html">Set a consistant height</a></li>
		<li><a href="http://wet-boew.github.io/v4.0-ci/demos/overlay/overlay-en.html">Popup content</a></li>
	</ul>
</div>
-->

<!--
<label for="id_select">Please choose an option</label>
<select id="id_select" class="wb-combobox" name="selLoremIpsum" data-wb5-template="sub-template-listbox@tmplItems">
	<option value="Lorem">Lorem</option>
	<option value="ipsum">ipsum</option>
	<option value="dolor">dolor</option>
	<option value="sit">sit</option>
</select>

<template id="tmplItems">
	<ul class="list-unstyled">
		<li role="option" data-wb5-for="autofillItem in select.options" data-wb5-selectvalue="{{autofillItem.textContent.toUpperCase()}}">{{ autofillItem.textContent }}</li>
	</ul>
	<hr class="brdr-bttm mrgn-tp-sm mrgn-bttm-sm">
	<p role="option" data-wb5-selectvalue="my default value">Default persistent option</p>
</template>
-->
<!--

{
	popupId: "Auto generated ID during the plugin initialization to be used by the Popup",
	srcElmId: "Auto generated ID that would be assigned at to the host element"

	src: { } // Object refering to the host elements. In this example, "src" object is an select box
}

data-wb5-bind="[elm attribute]@[JSON property], [elm attribute]@[JSON property]"



data-slot-elm => Name of the slot element. All of it's content can be overwridden by an external template defined in the host element.

ex: data-wb5-template="[Slot name].[Modifier (HTML basic, mobile....)]@[ID | URL], "

// Use comma or space or comma follow by a space as the separator.

data-wb5-template => Name of the template to use


					<li
						class="brdr-bttm"
						role="option"
						data-wb5-if="data"
						data-wb5-for="item in data"
						data-wb5-on="select@selectValue = item" >{{ item }}</li>


	Priority

	1.	data-wb5-for
	2.	data-wb5-if (include else-if and else)
	3.	data-wb5-show (Just a toggle with show/hide)

	Then - Process innerHTML

	4. ~ data-wb5-pre (preformated)
	5. Parse and replace handlebar content

	Then - Content binding

	6.	data-wb5-bind (Attribute binding)
	7. 	data-wb5-text (TextContent binding)
	8. 	data-wb5-html (innerHTML binding)
	9. 	data-wb5-model (two way binding for the input and the data)

	Then - Events binding

	9.	data-wb5-on
	10.	data-wb5-once

	Then - DOM object render finish

	11. data-wb5-cloak (Get remove after the instance is ready)


-->
<template id="combobox_simple_template_test">
	<div>
		{{ test }}
	</div>
</template>

<template id="combobox_simple_template">

	<div class="combobox-wrapper">
		<div role="combobox" aria-expanded="false" aria-haspopup="listbox" data-wb5-bind="aria-owns@popupId">
			<input autocomplete="off" data-rule-fromListbox="true" data-wb5-bind="id@fieldId, aria-controls@popupId, value@selectValue" aria-autocomplete="list" aria-activedescendant="" />
		</div>
		<div data-wb5-bind="id@popupId" role="listbox" class="hidden">
			<template data-slot-elm="" data-wb5-template="sub-template-listbox">
				<ul class="list-unstyled">
					<li
						class="brdr-bttm"
						role="option"
						data-wb5-for="option in options"
						data-wb5-if="!parent.filter.length || option.value.indexOf(parent.filter) !== -1"
						data-wb5-on="select@select(option.value); live@parent.nbdispItem(wb-nbNode)" >{{ option.textContent }}</li>
				</ul>
				<p role="option" data-wb5-on="select@select('default')">Default</p>
			</template>
		</div>
	</div>
</template>

<!--
	The hook for the input@focus is already setup by the plugin

-->



<!--
VueJS template equivalent

<div class="combobox-wrapper">
	<div
		role="combobox"
		aria-expanded="false"
		aria-haspopup="listbox"
		v-bind:aria-owns="popupId"
		v-bind:data-source-elm="sourceElmId">		
		<input
			autocomplete="off"
			data-rule-fromListbox="true"
			v-bind:id="src.id"
			v-bind:aria-controls="popupId"
			v-bind:name="src.name"
			aria-autocomplete="list"
			aria-activedescendant="" />
	</div>
	<div
		v-bind:id="popupId"
		role="listbox"
		class="hidden">
		<div data-slot-elm="sub-template-listbox">
			<ul class="list-unstyled">
				<li
					class="brdr-bttm"
					role="option"
					v-if="src.tagName === 'SELECT'"
					v-for="option in src.options"
					v-on:select="selectValue = option.value">{{ option.textContent }}</li>
			</ul>
		</div>
	</div>
</div>
-->

<!--
<div class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"combobox" }'>
	<p>Find the plugin for the action you need:</p>
	<ul>
		<li><a href="http://wet-boew.github.io/v4.0-ci/demos/data-ajax/data-ajax-en.html">Inserting content</a></li>
		<li><a href="http://wet-boew.github.io/v4.0-ci/demos/lightbox/lightbox-en.html">Photo galery</a></li>
		<li><a href="http://wet-boew.github.io/v4.0-ci/demos/charts/charts-en.html">Draw charts</a></li>
		<li><a href="http://wet-boew.github.io/v4.0-ci/demos/details/details-en.html">Expand and collapse content</a></li>
		<li><a href="http://wet-boew.github.io/v4.0-ci/demos/equalheight/equalheight-en.html">Set a consistant height</a></li>
		<li><a href="http://wet-boew.github.io/v4.0-ci/demos/overlay/overlay-en.html">Popup content</a></li>
	</ul>
</div>
-->

<!-- Main template -->
<template id="combobox_template">
	<div class="combobox-wrapper">
		<div class="wb-fieldflow-init" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="" data-wb5-bind="aria-owns@dynamicId, data-source-elm@selectNewId" data-source-elm="">
			<input autocomplete="off" data-rule-fromListbox="true" data-wb5-bind="id@select.id, aria-controls@dynamicId, name@select.name" id="" aria-autocomplete="list" aria-controls="" name="" aria-activedescendant="" />
		</div>
		<div data-wb5-bind="id@dynamicId" id="" role="listbox" class="hidden">
			<div data-slot-elm="sub-template-listbox" data-wb5-template="tmpl-fieldflow">
				<ul class="list-unstyled">
					<li class="brdr-bttm" role="option" data-wb-fieldflow='{{option.dataset.wbFieldflow}}' data-wb5-for="option in select.options" data-wb5-on="select@selectValue = option.value" >{{ option.textContent }}</li>
				</ul>
			</div>
			<!--
				We are not using a template because the semantic of the <slot> element fit the purpose here.

				<slot> element is a placeholder element that are going to be replaced but can contains a default if it didn't.

				<template id="sub-template-listbox"></template>
			-->
		</div>
	</div>
</template>
<!--
Need to be set on the "combobox"
  data-wb-fieldflow-origin="{{option.dataset.wbFieldFlowOrigin}}" data-wb-fieldflow-source="{{option.dataset.wbFieldFlowSource}}"
-->
<template id="tmpl-fieldflow">
	<ul class="list-unstyled">
		<li class="brdr-bttm" role="option" data-wb-fieldflow='{{option.dataset.wbFieldflow}}' data-wb5-for="option in select.options" data-wb5-selectvalue="{{option.value}}">{{ option.textContent }}</li>
	</ul>
</template>





<template id="combobox_template2">
	<div class="combobox-wrapper">
		<div class="wb-fieldflow-init" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="" data-wb5-bind="aria-owns@dynamicId, data-source-elm@selectNewId" data-source-elm="">
			<input autocomplete="off" data-rule-fromListbox="true" data-wb5-bind="id@select.id, aria-controls@dynamicId, name@select.name" id="" aria-autocomplete="list" aria-controls="" name="" aria-activedescendant="" />
		</div>
		<div data-wb5-bind="id@dynamicId" id="" role="listbox" class="hidden">
			<div data-slot-elm="sub-template-listbox" data-wb5-template="tmpl-fieldflow">
				<ul class="list-unstyled">
					<li class="brdr-bttm" role="option" data-wb-fieldflow='{{option.dataset.wbFieldflow}}' data-wb5-for="option in select.options" data-wb5-on="select@selectValue = option.value" >{{ option.textContent }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>



<script>
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

	console.log( "I am called" );
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
$doc.on( "combobox.createctrl.wb-fieldflow", ".wb-fieldflow", function( event, data ) {

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
	$( event.target ).data().wbFieldflowRegister = [ $( event.target ).before().get(0).id ];
	$( event.target ).attr( "data-wb-fieldflow-origin", $( event.target ).before().get(0).id );

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
$doc.on( "wb.change", "[role=combobox]:not(.wb-fieldflow-init)", function( event, data ) {
	console.log( "-- Change event on combobox" );

	console.log( data );

	var elm = event.currentTarget,
		$elm = $( elm ),
		currentItem = data.item,
		sourceID;

	if ( !elm.id ) {
		elm.id = wb.getId();
	}

	var origin = $( "#" + currentItem.bind ).parentsUntil( ".wb-fieldflow" ).parent(),
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



		var eventNameToBeTrigger = i_cache.action + ".action.wb-fieldflow"
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
</script>



{% endraw %}
{:/}
