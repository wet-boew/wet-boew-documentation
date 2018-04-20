---
published: true
layout: default-theme-wet-boew-en
title: Combobox WIP prototype - Datalist JSON suggestion - Research and finding
description: Working in progress prototype
modified: 2018-04-09

script_pgbttm_src: //wet-boew.github.io/themes-dist/GCWeb/GCWeb/js/theme.min.js
script_pgbttm2_src: 2018-assets/1-datalist-combobox.js
script_pgbttm3_src: //wet-boew.github.io/themes-dist/GCWeb/wet-boew/js/deps/jsonpointer.js
---

Working in progress prototype

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
	background: rgb(139, 189, 225);
}
[role=option]:hover {
	cursor: default;
}

/* Have the input and the overlay together */
.combobox-wrapper {
    display: inline-block;
    position: relative;
}

[role=combobox]:after {
	content: "\25BC\a0";
}
</style>

<p>Todo:</p>
<ul>
	<li><del>Add different filter type, like "any", "word", "startWith" like datalist suggest</del> Tested and work <code>data-wb-filter-type="startWith"</code></li>
	<li><del>Make it work with a datalist and let the text box be open</del></li>
	<li>Add a callback for filtering, this will open the door for soundEx matching</li>
	<li>Do the integration with Fieldflow</li>
	<li><del>Align with "suggest" plugin or make "suggest" plugin deprecated and change it to fallback on this one.</del> - I am dropping wb-suggest and provide example how to do it with this plugin, unless requested by the communauty.</li>
</ul>

<h2>Early testing</h2>

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


<!-- Main template -->
<template id="combobox_template">
	<div class="combobox-wrapper">
		<div class="wb-fieldflow-init" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="" data-wb5-bind="aria-owns@dynamicId, data-source-elm@selectNewId" data-source-elm="">
			<input autocomplete="off" data-rule-fromListbox="true" data-wb5-bind="id@select.id, aria-controls@dynamicId, name@select.name" id="" aria-autocomplete="list" aria-controls="" name="" aria-activedescendant='' />
		</div>
		<div data-wb5-bind="id@dynamicId" id="" role="listbox" class="hidden"></div>
	</div>;
</template>

<div class="wb-frmvld">
	<form action="#" method="get" id="validation-example">

<div class="form-group">

<label for="id_select5">Please choose a task:</label>
<select id="id_select5" class="wb-combobox" required name="selectName" data-wb5-template="id_select5_template" data-wb-filter-type="startWith" data-wb-limit="7" data-wb-load="test.json#/tasks">
	<option value="Lorem">Lorem</option>
	<option value="ipsum">ipsum</option>
	<option value="dolor">dolor</option>
	<option value="sit">sit</option>
</select>

<template id="id_select5_template">
	<ul class="list-unstyled">
		<li class="brdr-bttm" role="option" data-wb5-for="option in select.options" data-wb5-selectvalue="{{option.value}}">{{ option.textContent }}</li>
		<li class="brdr-bttm" role="option" data-wb5-for="autofillItem in wbLoad" data-wb5-selectvalue="{{autofillItem.task}}">{{ autofillItem.task }}</li>
	</ul>
	<p role="option" data-wb5-selectvalue="my default value">Default persistent option</p>
</template>
</div>


<button type="submit">Submit</button>
</form></div>






<p><a href="#">Dummy link</a></p>



<!-- To be inserted after the WET plugin -->

<script>


/**
 * @title WET-BOEW fieldflow with combobox plugin
 * @overview Use combobox with fieldflow
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
( function( $, window, document, wb ) {
"use strict";

var $doc = wb.doc;

// Just support for the datalist with the default submission????? and leave the combobox for later.


$doc.on( "combobox.createctrl.wb-fieldflow", ".wb-fieldflow", function( event, data ) {



	console.log( data );

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


});

$doc.on( "change", "[role=combobox]", function( event, data ) {
	console.log( "-- Change event on combobox" );

});



} )( jQuery, window, document, wb );


</script>
<!--

Need to be set on the "combobox"

  data-wb-fieldflow-origin="{{option.dataset.wbFieldFlowOrigin}}" data-wb-fieldflow-source="{{option.dataset.wbFieldFlowSource}}" 

-->

<template id="tmpl-fieldflow">
	<ul class="list-unstyled">
		<li class="brdr-bttm" role="option" data-wb-fieldflow='{{option.dataset.wbFieldflow}}' data-wb5-for="option in select.options" data-wb5-selectvalue="{{option.value}}">{{ option.textContent }}</li>
	</ul>
</template>


{% endraw %}
{:/}