---
published: true
layout: default-theme-wet-boew-en
title: Combobox prototype 2 - Datalist JSON suggestion - Research and finding
description: Prototype async loading
languages: false
hide_breadcrumb: false
date_modified: 2020-02-10
script_src: //wet-boew.github.io/themes-dist/GCWeb/GCWeb/js/theme.min.js
script_src2: 2018-assets/1-datalist-combobox.js
script_src3: //wet-boew.github.io/themes-dist/GCWeb/wet-boew/js/deps/jsonpointer.js
---

Prototype of an ```select``` box transformed into a customized ```combobox``` with the listbox pattern.


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

<p>Prototype with async loading and different templating way</p>

<p>Note: The above example may a little bit buggy during initialisation, that is because this prototype need GCWeb theme.js. To get around it, you need to move focus in the input between two of the above example.</p>

<h2>Show the loaded autofill options</h2>

<label for="id_select5">Please choose an option</label>
<select id="id_select5" class="wb-combobox" name="selLoremIpsum" data-wb5-template="id_select5_template" data-wb-filter-type="any" data-wb-limit="7" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions">
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="ipsum">ipsum</option>
	<option value="dolor">dolor</option>
	<option value="sit">sit</option>
</select>

<template id="id_select5_template">
	<ul class="list-unstyled">
		<li style="border-bottom: 1px dotted black" role="option" data-wb5-for="autofillItem in wbLoad" data-wb5-selectvalue="{{autofillItem.toUpperCase()}}">{{ autofillItem }}</li>
	</ul>
	<p role="option" data-wb5-selectvalue="my default value">Default persistent option</p>
</template>

<p><a href="#">A dummy link for tab sequence testing</a></p>

<pre><code>&lt;label for="id_select5"&gt;Please choose an option&lt;/label&gt;
&lt;select id="id_select5" class="wb-combobox" name="selLoremIpsum" data-wb5-template="id_select5_template" data-wb-filter-type="any" data-wb-limit="4" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions"&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="ipsum"&gt;ipsum&lt;/option&gt;
	&lt;option value="dolor"&gt;dolor&lt;/option&gt;
	&lt;option value="sit"&gt;sit&lt;/option&gt;
&lt;/select&gt;

&lt;template id="id_select5_template"&gt;
	&lt;ul class="list-unstyled"&gt;
		&lt;li style="border-bottom: 1px dotted black" role="option" data-wb5-for="autofillItem in wbLoad" data-wb5-selectvalue="{{autofillItem.toUpperCase()}}"&gt;{{ autofillItem }}&lt;/li&gt;
	&lt;/ul&gt;
	&lt;p role="option" data-wb5-selectvalue="my default value"&gt;Default persistent option&lt;/p&gt;
&lt;/template&gt;</code></pre>


<h2>Show the option from select, limit at 2 results</h2>

<label for="id_select2">Please choose an option</label>
<select id="id_select2" class="wb-combobox" name="selLoremIpsum" data-wb5-template="id_select2_template" data-wb-filter-type="any" data-wb-limit="2">
	<option value="Lorem">Lorem</option>
	<option value="ipsum">ipsum</option>
	<option value="dolor">dolor</option>
	<option value="sit">sit</option>
</select>

<template id="id_select2_template">
	<ul class="list-unstyled">
		<li role="option" data-wb5-for="autofillItem in select.options" data-wb5-selectvalue="{{autofillItem.textContent.toUpperCase()}}">{{ autofillItem.textContent }}</li>
	</ul>
	<hr class="brdr-bttm mrgn-tp-sm mrgn-bttm-sm">
	<p role="option" data-wb5-selectvalue="my default value">Default persistent option</p>
</template>

<p><a href="#">A dummy link for tab sequence testing</a></p>


<pre><code>
&lt;label for="id_select2"&gt;Please choose an option&lt;/label&gt;
&lt;select id="id_select2" class="wb-combobox" name="selLoremIpsum" data-wb5-template="id_select2_template" data-wb-filter-type="any" data-wb-limit="4"&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="ipsum"&gt;ipsum&lt;/option&gt;
	&lt;option value="dolor"&gt;dolor&lt;/option&gt;
	&lt;option value="sit"&gt;sit&lt;/option&gt;
&lt;/select&gt;

&lt;template id="id_select2_template"&gt;
	&lt;ul class="list-unstyled"&gt;
		&lt;li role="option" data-wb5-for="autofillItem in select.options" data-wb5-selectvalue="{{autofillItem.textContent.toUpperCase()}}"&gt;{{ autofillItem.textContent }}&lt;/li&gt;
	&lt;/ul&gt;
	&lt;hr class="brdr-bttm mrgn-tp-sm mrgn-bttm-sm"&gt;
	&lt;p role="option" data-wb5-selectvalue="my default value"&gt;Default persistent option&lt;/p&gt;
&lt;/template&gt;</code></pre>


<h2>Show the option from select (limit number of result)</h2>

<label for="id_select3">Please choose an option</label>
<select id="id_select3" class="wb-combobox" name="selLoremIpsum" data-wb5-template="id_select3_template" data-wb-filter-type="any" data-wb-limit="4">
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="Lorem">Lorem</option>
	<option value="ipsum">ipsum</option>
	<option value="dolor">dolor</option>
	<option value="sit">sit</option>
</select>

<template id="id_select3_template">
	<ul class="list-unstyled">
		<li role="option" data-wb5-for="autofillItem in select.options" data-wb5-selectvalue="{{autofillItem.textContent.toUpperCase()}}">{{ autofillItem.textContent }}</li>
	</ul>
	<p role="option" data-wb5-selectvalue="my default value">Default persistent option</p>
</template>

<p><a href="#">A dummy link for tab sequence testing</a></p>

<pre><code>&lt;label for="id_select3"&gt;Please choose an option&lt;/label&gt;
&lt;select id="id_select3" class="wb-combobox" name="selLoremIpsum" data-wb5-template="id_select3_template" data-wb-filter-type="any" data-wb-limit="4"&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="ipsum"&gt;ipsum&lt;/option&gt;
	&lt;option value="dolor"&gt;dolor&lt;/option&gt;
	&lt;option value="sit"&gt;sit&lt;/option&gt;
&lt;/select&gt;

&lt;template id="id_select3_template"&gt;
	&lt;ul class="list-unstyled"&gt;
		&lt;li role="option" data-wb5-for="autofillItem in select.options" data-wb5-selectvalue="{{autofillItem.textContent.toUpperCase()}}"&gt;{{ autofillItem.textContent }}&lt;/li&gt;
	&lt;/ul&gt;
	&lt;p role="option" data-wb5-selectvalue="my default value"&gt;Default persistent option&lt;/p&gt;
&lt;/template&gt;</code></pre>



<h2>Show both, loaded and from the select</h2>

<label for="id_select4">Please choose an option</label>
<select id="id_select4" class="wb-combobox" name="selLoremIpsum" data-wb5-template="id_select4_template" data-wb-filter-type="any" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions">
	<option value="Lorem">Lorem</option>
	<option value="ipsum">ipsum</option>
	<option value="dolor">dolor</option>
	<option value="sit">sit</option>
</select>

<template id="id_select4_template">
	<ul class="list-unstyled">
		<li style="border-bottom: 1px solid blue" class="mrgn-bttm-sm" role="option" data-wb5-for="autofillItem in select.options" data-wb5-selectvalue="{{autofillItem.textContent}}">{{ autofillItem.textContent }}</li>
		<li style="border-bottom: 1px dotted black" role="option" data-wb5-for="autofillItem in wbLoad" data-wb5-selectvalue="{{autofillItem}}">{{ autofillItem }}</li>
	</ul>
	<p role="option" data-wb5-selectvalue="my default value">Default persistent option</p>
</template>


<pre><code>&lt;label for="id_select4"&gt;Please choose an option&lt;/label&gt;
&lt;select id="id_select4" class="wb-combobox" name="selLoremIpsum" data-wb5-template="id_select4_template" data-wb-filter-type="any" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions"&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="ipsum"&gt;ipsum&lt;/option&gt;
	&lt;option value="dolor"&gt;dolor&lt;/option&gt;
	&lt;option value="sit"&gt;sit&lt;/option&gt;
&lt;/select&gt;

&lt;template id="id_select4_template"&gt;
	&lt;ul class="list-unstyled"&gt;
		&lt;li style="border-bottom: 1px solid blue" class="mrgn-bttm-sm" role="option" data-wb5-for="autofillItem in select.options" data-wb5-selectvalue="{{autofillItem.textContent}}"&gt;{{ autofillItem.textContent }}&lt;/li&gt;
		&lt;li style="border-bottom: 1px dotted black" role="option" data-wb5-for="autofillItem in wbLoad" data-wb5-selectvalue="{{autofillItem}}"&gt;{{ autofillItem }}&lt;/li&gt;
	&lt;/ul&gt;
	&lt;p role="option" data-wb5-selectvalue="my default value"&gt;Default persistent option&lt;/p&gt;
&lt;/template&gt;</code></pre>

<p><a href="#">A dummy link for tab sequence testing</a></p>

{% endraw %}
{:/}
