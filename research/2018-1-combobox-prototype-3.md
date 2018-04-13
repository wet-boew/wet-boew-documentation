---
published: true
layout: default-theme-wet-boew-en
title: Combobox test 3 - Datalist JSON suggestion - Research and finding
description: Prototype showing validation and form integration
modified: 2018-04-09

script_pgbttm_src: //wet-boew.github.io/themes-dist/GCWeb/GCWeb/js/theme.min.js
script_pgbttm2_src: 2018-assets/1-datalist-combobox.js
script_pgbttm3_src: //wet-boew.github.io/themes-dist/GCWeb/wet-boew/js/deps/jsonpointer.js
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

<h2>Integrated in a form with the WET form validation plugin</h2>
<div class="wb-frmvld">
	<form action="#" method="get" id="validation-example">
		<div class="form-group">
			<label for="id_select">Please choose an option</label>
			<select id="id_select" class="wb-combobox" name="selLoremIpsum" data-wb5-template="id_select_template" data-wb-filter-type="any" data-wb-limit="7" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions">
				<option value="Lorem">Lorem</option>
				<option value="ipsum">ipsum</option>
				<option value="dolor">dolor</option>
				<option value="sit">sit</option>
			</select>
			<template id="id_select_template">
				<ul class="list-unstyled">
					<li style="border-bottom: 1px dotted black" role="option" data-wb5-for="alias in wbLoad" data-wb5-selectvalue="{{alias}}">{{ alias }}</li>
				</ul>
				<p role="option" data-wb5-selectvalue="my default value">Default persistent option</p>
			</template>
		</div>
		<input name="sss"/>
		<button type="submit">Submit</button>
	</form>
</div>


<h2>Field required and integrated in a form with the WET form validation plugin</h2>
<div class="wb-frmvld">
	<form action="#" method="get" id="validation-example2">
		<div class="form-group">
			<label for="id_select2">Please choose an option</label>
			<select id="id_select2" class="wb-combobox" required name="selLoremIpsum" data-wb5-template="id_select2_template" data-wb-filter-type="any" data-wb-limit="7" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions">
				<option value="Lorem">Lorem</option>
				<option value="ipsum">ipsum</option>
				<option value="dolor">dolor</option>
				<option value="sit">sit</option>
			</select>

			<template id="id_select2_template">
				<ul class="list-unstyled">
					<li style="border-bottom: 1px dotted black" role="option" data-wb5-for="alias2 in wbLoad" data-wb5-selectvalue="{{alias2}}">{{ alias2 }}</li>
				</ul>
				<p role="option" data-wb5-selectvalue="my default value">Default persistent option</p>
			</template>
		</div>
		<input name="sss" />
		<button type="submit">Submit</button>
	</form>
</div>


<h2>In a form</h2>
<form action="#" method="get" id="validation-example3">
	<div class="form-group">
		<label for="id_select3">Please choose an option</label>
		<select id="id_select3" class="wb-combobox" name="selLoremIpsum" data-wb5-template="id_select3_template" data-wb-filter-type="any" data-wb-limit="7" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions">
			<option value="Lorem">Lorem</option>
			<option value="ipsum">ipsum</option>
			<option value="dolor">dolor</option>
			<option value="sit">sit</option>
		</select>
		<template id="id_select3_template">
			<ul class="list-unstyled">
				<li style="border-bottom: 1px dotted black" role="option" data-wb5-for="autofillItem in wbLoad" data-wb5-selectvalue="{{autofillItem.toUpperCase()}}">{{ autofillItem }}</li>
			</ul>
			<p role="option" data-wb5-selectvalue="my default value">Default persistent option</p>
		</template>
	</div>
	<input name="sss" />
	<button type="submit">Submit</button>
</form>

<h2>In page only</h2>
<label for="id_select4">Please choose an option</label>
<select id="id_select4" class="wb-combobox" required name="selLoremIpsum" data-wb5-template="id_select3_template" data-wb-filter-type="any" data-wb-limit="7" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions">
	<option value="Lorem">Lorem</option>
	<option value="ipsum">ipsum</option>
	<option value="dolor">dolor</option>
	<option value="sit">sit</option>
</select>
<p><a href="#">Dummy link</a></p>

<h2>Source code</h2>

<pre><code>&lt;h2&gt;Integrated in a form with the WET form validation plugin&lt;/h2&gt;
&lt;div class="wb-frmvld"&gt;
	&lt;form action="#" method="get" id="validation-example"&gt;
		&lt;div class="form-group"&gt;
			&lt;label for="id_select"&gt;Please choose an option&lt;/label&gt;
			&lt;select id="id_select" class="wb-combobox" name="selLoremIpsum" data-wb5-template="id_select_template" data-wb-filter-type="any" data-wb-limit="7" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions"&gt;
				&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
				&lt;option value="ipsum"&gt;ipsum&lt;/option&gt;
				&lt;option value="dolor"&gt;dolor&lt;/option&gt;
				&lt;option value="sit"&gt;sit&lt;/option&gt;
			&lt;/select&gt;
			&lt;template id="id_select_template"&gt;
				&lt;ul class="list-unstyled"&gt;
					&lt;li style="border-bottom: 1px dotted black" role="option" data-wb5-for="alias in wbLoad" data-wb5-selectvalue="{{alias}}"&gt;{{ alias }}&lt;/li&gt;
				&lt;/ul&gt;
				&lt;p role="option" data-wb5-selectvalue="my default value"&gt;Default persistent option&lt;/p&gt;
			&lt;/template&gt;
		&lt;/div&gt;
		&lt;input name="sss"/&gt;
		&lt;button type="submit"&gt;Submit&lt;/button&gt;
	&lt;/form&gt;
&lt;/div&gt;


&lt;h2&gt;Field required and integrated in a form with the WET form validation plugin&lt;/h2&gt;
&lt;div class="wb-frmvld"&gt;
	&lt;form action="#" method="get" id="validation-example2"&gt;
		&lt;div class="form-group"&gt;
			&lt;label for="id_select2"&gt;Please choose an option&lt;/label&gt;
			&lt;select id="id_select2" class="wb-combobox" required name="selLoremIpsum" data-wb5-template="id_select2_template" data-wb-filter-type="any" data-wb-limit="7" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions"&gt;
				&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
				&lt;option value="ipsum"&gt;ipsum&lt;/option&gt;
				&lt;option value="dolor"&gt;dolor&lt;/option&gt;
				&lt;option value="sit"&gt;sit&lt;/option&gt;
			&lt;/select&gt;

			&lt;template id="id_select2_template"&gt;
				&lt;ul class="list-unstyled"&gt;
					&lt;li style="border-bottom: 1px dotted black" role="option" data-wb5-for="alias2 in wbLoad" data-wb5-selectvalue="{{alias2}}"&gt;{{ alias2 }}&lt;/li&gt;
				&lt;/ul&gt;
				&lt;p role="option" data-wb5-selectvalue="my default value"&gt;Default persistent option&lt;/p&gt;
			&lt;/template&gt;
		&lt;/div&gt;
		&lt;input name="sss" /&gt;
		&lt;button type="submit"&gt;Submit&lt;/button&gt;
	&lt;/form&gt;
&lt;/div&gt;


&lt;h2&gt;In a form&lt;/h2&gt;
&lt;form action="#" method="get" id="validation-example3"&gt;
	&lt;div class="form-group"&gt;
		&lt;label for="id_select3"&gt;Please choose an option&lt;/label&gt;
		&lt;select id="id_select3" class="wb-combobox" name="selLoremIpsum" data-wb5-template="id_select3_template" data-wb-filter-type="any" data-wb-limit="7" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions"&gt;
			&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
			&lt;option value="ipsum"&gt;ipsum&lt;/option&gt;
			&lt;option value="dolor"&gt;dolor&lt;/option&gt;
			&lt;option value="sit"&gt;sit&lt;/option&gt;
		&lt;/select&gt;
		&lt;template id="id_select3_template"&gt;
			&lt;ul class="list-unstyled"&gt;
				&lt;li style="border-bottom: 1px dotted black" role="option" data-wb5-for="autofillItem in wbLoad" data-wb5-selectvalue="{{autofillItem.toUpperCase()}}"&gt;{{ autofillItem }}&lt;/li&gt;
			&lt;/ul&gt;
			&lt;p role="option" data-wb5-selectvalue="my default value"&gt;Default persistent option&lt;/p&gt;
		&lt;/template&gt;
	&lt;/div&gt;
	&lt;input name="sss" /&gt;
	&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;

&lt;h2&gt;In page only&lt;/h2&gt;
&lt;label for="id_select4"&gt;Please choose an option&lt;/label&gt;
&lt;select id="id_select4" class="wb-combobox" required name="selLoremIpsum" data-wb5-template="id_select3_template" data-wb-filter-type="any" data-wb-limit="7" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions"&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="ipsum"&gt;ipsum&lt;/option&gt;
	&lt;option value="dolor"&gt;dolor&lt;/option&gt;
	&lt;option value="sit"&gt;sit&lt;/option&gt;
&lt;/select&gt;
&lt;p&gt;&lt;a href="#"&gt;Dummy link&lt;/a&gt;&lt;/p&gt;</code></pre>

{% endraw %}
{:/}
