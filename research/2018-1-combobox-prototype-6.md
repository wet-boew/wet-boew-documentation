---
published: true
layout: default-theme-wet-boew-en
title: Combobox test 6 - Datalist JSON suggestion - Research and finding
description: Combobox and fieldflow integration, early prototype
modified: 2018-04-09

script_pgbttm_src: //wet-boew.github.io/themes-dist/GCWeb/GCWeb/js/theme.min.js
script_pgbttm2_src: 2018-assets/1-datalist-combobox.js
script_pgbttm3_src: //wet-boew.github.io/themes-dist/GCWeb/wet-boew/js/deps/jsonpointer.js
---

Combobox and fieldflow integration, early prototype. It include the fake arrow beside the input.

{::nomarkdown}

{% raw %}

<div class="wb-prettify all-pre linenums"></div>

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
		<div data-wb5-bind="id@dynamicId" id="" role="listbox" class="hidden">
			<template id="sub-template-listbox">
			</template>
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

<h2>Require the following javascript code</h2>
<pre><code>&lt;script&gt;


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


&lt;/script&gt;
</code></pre>


<h2>HTML Source code</h2>

<pre><code>
&lt;style&gt;

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

	Ideally it should be set to 1, but the &lt;footer id="wb-info"&gt; has a z-index set to 5,
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
&lt;/style&gt;

&lt;div class="wb-fieldflow" data-wb-fieldflow='{ "renderas":"combobox" }'&gt;
	&lt;p&gt;Find the plugin for the action you need:&lt;/p&gt;

	&lt;ul&gt;
		&lt;li&gt;&lt;a href="http://wet-boew.github.io/v4.0-ci/demos/data-ajax/data-ajax-en.html"&gt;Inserting content&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href="http://wet-boew.github.io/v4.0-ci/demos/lightbox/lightbox-en.html"&gt;Photo galery&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href="http://wet-boew.github.io/v4.0-ci/demos/charts/charts-en.html"&gt;Draw charts&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href="http://wet-boew.github.io/v4.0-ci/demos/details/details-en.html"&gt;Expand and collapse content&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href="http://wet-boew.github.io/v4.0-ci/demos/equalheight/equalheight-en.html"&gt;Set a consistant height&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href="http://wet-boew.github.io/v4.0-ci/demos/overlay/overlay-en.html"&gt;Popup content&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt;
&lt;/div&gt;


&lt;!-- Main template --&gt;
&lt;template id="combobox_template"&gt;
	&lt;div class="combobox-wrapper"&gt;
		&lt;div class="wb-fieldflow-init" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="" data-wb5-bind="aria-owns@dynamicId, data-source-elm@selectNewId" data-source-elm=""&gt;
			&lt;input autocomplete="off" data-rule-fromListbox="true" data-wb5-bind="id@select.id, aria-controls@dynamicId, name@select.name" id="" aria-autocomplete="list" aria-controls="" name="" aria-activedescendant='' /&gt;
		&lt;/div&gt;
		&lt;div data-wb5-bind="id@dynamicId" id="" role="listbox" class="hidden"&gt;
			&lt;template id="sub-template-listbox"&gt;
			&lt;/template&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;

&lt;!--

Need to be set on the "combobox"

  data-wb-fieldflow-origin="{{option.dataset.wbFieldFlowOrigin}}" data-wb-fieldflow-source="{{option.dataset.wbFieldFlowSource}}" 

--&gt;

&lt;template id="tmpl-fieldflow"&gt;
	&lt;ul class="list-unstyled"&gt;
		&lt;li class="brdr-bttm" role="option" data-wb-fieldflow='{{option.dataset.wbFieldflow}}' data-wb5-for="option in select.options" data-wb5-selectvalue="{{option.value}}"&gt;{{ option.textContent }}&lt;/li&gt;
	&lt;/ul&gt;
&lt;/template&gt;</code></pre>

{% endraw %}
{:/}
