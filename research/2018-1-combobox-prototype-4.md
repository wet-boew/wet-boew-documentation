---
published: true
layout: default-theme-wet-boew-en
title: Combobox test 4 - Datalist JSON suggestion - Research and finding
description: Prototype showing validation and form integration
modified: 2018-04-09

script_pgbttm_src: //wet-boew.github.io/themes-dist/GCWeb/GCWeb/js/theme.min.js
script_pgbttm2_src: 2018-assets/1-datalist-combobox.js
script_pgbttm3_src: //wet-boew.github.io/themes-dist/GCWeb/wet-boew/js/deps/jsonpointer.js
---

Prototype of an ```input``` with a ```datalist``` transformed into a customized ```combobox``` with the listbox pattern.

According to spec a ```datalist``` is an implementation of a listbox as emulated by this combobox. But by using the combobox you are able to have consistant behaviour across browser.

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

</style>


<p>To understand better the example bellow, you need to separate the data source (list of suggestion) with the behaviour you expect when interacting with that data source</p>

<h2>Default</h2>
<form action="#">
	<div class="form-group">
		<label for="input-id-1">Surveys</label>
		<input class="wb-combobox" id="input-id-1" list="datalist-id-1" />
	</div>
	<datalist id="datalist-id-1" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions">
		<option value="horay"></option>
		<template>
			<option data-wb5-for="opt in datalist.options" data-wb5-selectvalue="{{ opt.value }}">{{ opt.value }}</option>
			<option data-wb5-for="opt in wbLoad" data-wb5-selectvalue="{{ opt }}">{{ opt }}</option>
		</template>
	</datalist>
</form>

<h2>Default - Template outside the datalist</h2>
<form action="#">
	<div class="form-group">
		<label for="input-id-1">Surveys</label>
		<input class="wb-combobox" id="input-id-1" list="datalist-id-1" />
	</div>
	<datalist id="datalist-id-1" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions" data-wb5-template="template-id-1">
		<option value="horay"></option>
	</datalist>
	<template id="template-id-1">
		<option data-wb5-for="opt in datalist.options" data-wb5-selectvalue="{{ opt.value }}">{{ opt.value }}</option>
		<option data-wb5-for="opt in wbLoad" data-wb5-selectvalue="{{ opt }}">{{ opt }}</option>
	</template>
</form>


<h2>Default - Template customized</h2>
<form action="#">
	<div class="form-group">
		<label for="input-id-1a">Surveys</label>
		<input class="wb-combobox" id="input-id-1" list="datalist-id-1a" />
	</div>
	<datalist id="datalist-id-1a" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions" data-wb5-template="template-id-1a">
		<option value="horay"></option>
	</datalist>
	<template id="template-id-1a">
		<ul>
			<li data-wb5-for="opt in datalist.options" data-wb5-selectvalue="{{ opt.value }}">{{ opt.value }}</li>
			<li data-wb5-for="opt in wbLoad" data-wb5-selectvalue="{{ opt }}">{{ opt }}</li>
		</ul>
	</template>
</form>

<h2>With a limit</h2>

<form action="#">
	<div class="form-group">
		<label for="input-id-2">Surveys</label>
		<input class="wb-combobox" data-wb-limit="4" id="input-id-2" list="datalist-id-2">
	</div>
	<datalist id="datalist-id-2" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions">
		<template>
			<ul>
				<li data-wb5-for="opt in wbLoad" data-wb5-selectvalue="{{ opt }}">{{ opt }}</li>
			</ul>
		</template>
	</datalist>
</form>

<h2>Any - Filter type</h2>

<form action="#">
	<div class="form-group">
		<label for="input-id-3">Surveys</label>
		<input class="wb-combobox" data-wb-filter-type="any" id="input-id-3" list="datalist-id-3">
	</div>
	<datalist id="datalist-id-3" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions">
		<template>
			<ul>
				<li data-wb5-for="opt in wbLoad" data-wb5-selectvalue="{{ opt }}">{{ opt }}</li>
			</ul>
		</template>
	</datalist>
</form>

<h2>start with - Filter type</h2>
<form action="#">
	<div class="form-group">
		<label for="input-id-4">Surveys</label>
		<input class="wb-combobox" data-wb-filter-type="startWith" id="input-id-4" list="datalist-id-4">
	</div>
	<datalist id="datalist-id-4" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions">
		<template>
			<ul>
				<li data-wb5-for="opt in wbLoad" data-wb5-selectvalue="{{ opt }}">{{ opt }}</li>
			</ul>
		</template>
	</datalist>
</form>


<h2>word - Filter type</h2>
<form action="#">
	<div class="form-group">
		<label for="input-id-5">Surveys</label>
		<input class="wb-combobox" data-wb-filter-type="word" id="input-id-5" list="datalist-id-5">
	</div>
	<datalist id="datalist-id-5" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions">
		<template>
			<ul>
				<li data-wb5-for="opt in wbLoad" data-wb5-selectvalue="{{ opt }}">{{ opt }}</li>
			</ul>
		</template>
	</datalist>
</form>

<h2>Comparaison with wb-suggest feature</h2>

<p>This is very quite the simlar of the wb-suggest feature as it was published on march 2018 on gcweb. The difference is the user interaction behaviours is better controled with the combobox across browser. With the availibility of this plugins and considering the wb-suggest has not be released with an official release of WET, it is at high risk be dropped. Here how to reproduce the basic of the wb-suggest plugin.</p>

<div class="row">
	<div class="col-md-6">
		<h3><code>wb-suggest</code></h3>
		<pre><code>&lt;form action="#"&gt;
	&lt;div class="form-group"&gt;
		&lt;label for="input-id-1"&gt;Surveys&lt;/label&gt;
		&lt;input id="input-id-1" list="datalist-id-1" /&gt;
	&lt;/div&gt;
	&lt;datalist id="datalist-id-1" data-wb-suggest="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions"&gt;
		&lt;template&gt;
			&lt;option&gt;&lt;/option&gt;
		&lt;/template&gt;
	&lt;/datalist&gt;
&lt;/form&gt;</code></pre>
	</div>
<div class="col-md-6">
		<h3>With the <code>data-json</code></h3>
		<pre><code>&lt;form action="#"&gt;
	&lt;div class="form-group"&gt;
		&lt;label for="input-id-1"&gt;Surveys&lt;/label&gt;
		&lt;input id="input-id-1" list="datalist-id-1" /&gt;
	&lt;/div&gt;
	&lt;datalist id="datalist-id-1"  data-wb-json='{
		"url": "//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions",
		"mapping": [
			{ "selector": "option", "value": "/@value" },
			{ "selector": "option", "attr": "value", "value": "/@value" },
			{ "selector": "option", "attr": "label", "value": "/@value" }
		]
	}'&gt;
		&lt;template&gt;
			&lt;option&gt;&lt;/option&gt;
		&lt;/template&gt;
	&lt;/datalist&gt;
&lt;/form&gt;</code></pre>

	</div>
</div>

<h2>Source code</h2>

<pre><code>&lt;h2&gt;Default&lt;/h2&gt;
&lt;form action="#"&gt;
	&lt;div class="form-group"&gt;
		&lt;label for="input-id-1"&gt;Surveys&lt;/label&gt;
		&lt;input class="wb-combobox" id="input-id-1" list="datalist-id-1" /&gt;
	&lt;/div&gt;
	&lt;datalist id="datalist-id-1" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions"&gt;
		&lt;option value="horay"&gt;&lt;/option&gt;
		&lt;template&gt;
			&lt;option data-wb5-for="opt in datalist.options" data-wb5-selectvalue="{{ opt.value }}"&gt;{{ opt.value }}&lt;/option&gt;
			&lt;option data-wb5-for="opt in wbLoad" data-wb5-selectvalue="{{ opt }}"&gt;{{ opt }}&lt;/option&gt;
		&lt;/template&gt;
	&lt;/datalist&gt;
&lt;/form&gt;

&lt;h2&gt;Default - Template outside the datalist&lt;/h2&gt;
&lt;form action="#"&gt;
	&lt;div class="form-group"&gt;
		&lt;label for="input-id-1"&gt;Surveys&lt;/label&gt;
		&lt;input class="wb-combobox" id="input-id-1" list="datalist-id-1" /&gt;
	&lt;/div&gt;
	&lt;datalist id="datalist-id-1" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions" data-wb5-template="template-id-1"&gt;
		&lt;option value="horay"&gt;&lt;/option&gt;
	&lt;/datalist&gt;
	&lt;template id="template-id-1"&gt;
		&lt;option data-wb5-for="opt in datalist.options" data-wb5-selectvalue="{{ opt.value }}"&gt;{{ opt.value }}&lt;/option&gt;
		&lt;option data-wb5-for="opt in wbLoad" data-wb5-selectvalue="{{ opt }}"&gt;{{ opt }}&lt;/option&gt;
	&lt;/template&gt;
&lt;/form&gt;


&lt;h2&gt;Default - Template customized&lt;/h2&gt;
&lt;form action="#"&gt;
	&lt;div class="form-group"&gt;
		&lt;label for="input-id-1a"&gt;Surveys&lt;/label&gt;
		&lt;input class="wb-combobox" id="input-id-1" list="datalist-id-1a" /&gt;
	&lt;/div&gt;
	&lt;datalist id="datalist-id-1a" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions" data-wb5-template="template-id-1a"&gt;
		&lt;option value="horay"&gt;&lt;/option&gt;
	&lt;/datalist&gt;
	&lt;template id="template-id-1a"&gt;
		&lt;ul&gt;
			&lt;li data-wb5-for="opt in datalist.options" data-wb5-selectvalue="{{ opt.value }}"&gt;{{ opt.value }}&lt;/li&gt;
			&lt;li data-wb5-for="opt in wbLoad" data-wb5-selectvalue="{{ opt }}"&gt;{{ opt }}&lt;/li&gt;
		&lt;/ul&gt;
	&lt;/template&gt;
&lt;/form&gt;

&lt;h2&gt;With a limit&lt;/h2&gt;

&lt;form action="#"&gt;
	&lt;div class="form-group"&gt;
		&lt;label for="input-id-2"&gt;Surveys&lt;/label&gt;
		&lt;input class="wb-combobox" data-wb-limit="4" id="input-id-2" list="datalist-id-2"&gt;
	&lt;/div&gt;
	&lt;datalist id="datalist-id-2" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions"&gt;
		&lt;template&gt;
			&lt;ul&gt;
				&lt;li data-wb5-for="opt in wbLoad" data-wb5-selectvalue="{{ opt }}"&gt;{{ opt }}&lt;/li&gt;
			&lt;/ul&gt;
		&lt;/template&gt;
	&lt;/datalist&gt;
&lt;/form&gt;

&lt;h2&gt;Any - Filter type&lt;/h2&gt;

&lt;form action="#"&gt;
	&lt;div class="form-group"&gt;
		&lt;label for="input-id-3"&gt;Surveys&lt;/label&gt;
		&lt;input class="wb-combobox" data-wb-filter-type="any" id="input-id-3" list="datalist-id-3"&gt;
	&lt;/div&gt;
	&lt;datalist id="datalist-id-3" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions"&gt;
		&lt;template&gt;
			&lt;ul&gt;
				&lt;li data-wb5-for="opt in wbLoad" data-wb5-selectvalue="{{ opt }}"&gt;{{ opt }}&lt;/li&gt;
			&lt;/ul&gt;
		&lt;/template&gt;
	&lt;/datalist&gt;
&lt;/form&gt;

&lt;h2&gt;start with - Filter type&lt;/h2&gt;
&lt;form action="#"&gt;
	&lt;div class="form-group"&gt;
		&lt;label for="input-id-4"&gt;Surveys&lt;/label&gt;
		&lt;input class="wb-combobox" data-wb-filter-type="startWith" id="input-id-4" list="datalist-id-4"&gt;
	&lt;/div&gt;
	&lt;datalist id="datalist-id-4" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions"&gt;
		&lt;template&gt;
			&lt;ul&gt;
				&lt;li data-wb5-for="opt in wbLoad" data-wb5-selectvalue="{{ opt }}"&gt;{{ opt }}&lt;/li&gt;
			&lt;/ul&gt;
		&lt;/template&gt;
	&lt;/datalist&gt;
&lt;/form&gt;


&lt;h2&gt;word - Filter type&lt;/h2&gt;
&lt;form action="#"&gt;
	&lt;div class="form-group"&gt;
		&lt;label for="input-id-5"&gt;Surveys&lt;/label&gt;
		&lt;input class="wb-combobox" data-wb-filter-type="word" id="input-id-5" list="datalist-id-5"&gt;
	&lt;/div&gt;
	&lt;datalist id="datalist-id-5" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions"&gt;
		&lt;template&gt;
			&lt;ul&gt;
				&lt;li data-wb5-for="opt in wbLoad" data-wb5-selectvalue="{{ opt }}"&gt;{{ opt }}&lt;/li&gt;
			&lt;/ul&gt;
		&lt;/template&gt;
	&lt;/datalist&gt;
&lt;/form&gt;</code></pre>

{% endraw %}
{:/}
