---
published: true
layout: default-theme-wet-boew-en
title: Combobox test 5 - Datalist JSON suggestion - Research and finding
description: Prototype showing validation and form integration
modified: 2018-04-09

script_pgbttm_src: //wet-boew.github.io/themes-dist/GCWeb/GCWeb/js/theme.min.js
script_pgbttm2_src: 2018-assets/1-datalist-combobox.js
script_pgbttm3_src: //wet-boew.github.io/themes-dist/GCWeb/wet-boew/js/deps/jsonpointer.js
---

Combobox with limiting number of result and type of filter.

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

<p>Note: The template need to be defined outside the <code>select</code> element because of IE11 don't support the template element</p>

<h2>Limit to 4 item</h2>
<div class="wb-frmvld">
	<form action="#" method="get" id="validation-example1">
		<div class="form-group">
			<label for="ex_field_id_1">Please choose a task:</label>
			<select id="ex_field_id_1" class="wb-combobox" required name="selectName" data-wb5-template="ex_template_id_1" data-wb-limit="4" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions">
				<option value="Lorem">Lorem</option>
				<option value="ipsum">ipsum</option>
				<option value="dolor">dolor</option>
				<option value="sit">sit</option>
			</select>
			<template id="ex_template_id_1">
				<ul class="list-unstyled">
					<li class="brdr-bttm" role="option" data-wb5-for="option in select.options" data-wb5-selectvalue="{{option.value}}">{{ option.textContent }}</li>
					<li class="brdr-bttm" role="option" data-wb5-for="autofillItem in wbLoad" data-wb5-selectvalue="{{autofillItem.task}}">{{ autofillItem.task }}</li>
				</ul>
				<p role="option" data-wb5-selectvalue="my default value">Default persistent option</p>
			</template>
		</div>
		<button type="submit">Submit</button>
	</form>
</div>

<h2>Limit to 10 items</h2>
<div class="wb-frmvld">
	<form action="#" method="get" id="validation-example2">
		<div class="form-group">
			<label for="ex_field_id_2">Please choose a task:</label>
			<select id="ex_field_id_2" class="wb-combobox" required name="selectName" data-wb5-template="ex_template_id_2" data-wb-limit="10" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions">
				<option value="Lorem">Lorem</option>
				<option value="ipsum">ipsum</option>
				<option value="dolor">dolor</option>
				<option value="sit">sit</option>
			</select>
			<template id="ex_template_id_2">
				<ul class="list-unstyled">
					<li class="brdr-bttm" role="option" data-wb5-for="option in select.options" data-wb5-selectvalue="{{option.value}}">{{ option.textContent }}</li>
					<li class="brdr-bttm" role="option" data-wb5-for="autofillItem in wbLoad" data-wb5-selectvalue="{{autofillItem.task}}">{{ autofillItem.task }}</li>
				</ul>
				<p role="option" data-wb5-selectvalue="my default value">Default persistent option</p>
			</template>
		</div>
		<button type="submit">Submit</button>
	</form>
</div>

<h2>Any - Filter type</h2>
<div class="wb-frmvld">
	<form action="#" method="get" id="validation-example3">
		<div class="form-group">
			<label for="ex_field_id_3">Please choose a task:</label>
			<select id="ex_field_id_3" class="wb-combobox" required name="selectName" data-wb5-template="ex_template_id_3" data-wb-filter-type="any" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions">
				<option value="Lorem">Lorem</option>
				<option value="ipsum">ipsum</option>
				<option value="dolor">dolor</option>
				<option value="sit">sit</option>
			</select>
			<template id="ex_template_id_3">
				<ul class="list-unstyled">
					<li class="brdr-bttm" role="option" data-wb5-for="option in select.options" data-wb5-selectvalue="{{option.value}}">{{ option.textContent }}</li>
					<li class="brdr-bttm" role="option" data-wb5-for="autofillItem in wbLoad" data-wb5-selectvalue="{{autofillItem.task}}">{{ autofillItem.task }}</li>
				</ul>
				<p role="option" data-wb5-selectvalue="my default value">Default persistent option</p>
			</template>
		</div>
		<button type="submit">Submit</button>
	</form>
</div>

<h2>Start with - Filter type</h2>
<div class="wb-frmvld">
	<form action="#" method="get" id="validation-example4">
		<div class="form-group">
			<label for="ex_field_id_4">Please choose a task:</label>
			<select id="ex_field_id_4" class="wb-combobox" required name="selectName" data-wb5-template="ex_template_id_4" data-wb-filter-type="startWith" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions">
				<option value="Lorem">Lorem</option>
				<option value="ipsum">ipsum</option>
				<option value="dolor">dolor</option>
				<option value="sit">sit</option>
			</select>
			<template id="ex_template_id_4">
				<ul class="list-unstyled">
					<li class="brdr-bttm" role="option" data-wb5-for="option in select.options" data-wb5-selectvalue="{{option.value}}">{{ option.textContent }}</li>
					<li class="brdr-bttm" role="option" data-wb5-for="autofillItem in wbLoad" data-wb5-selectvalue="{{autofillItem.task}}">{{ autofillItem.task }}</li>
				</ul>
				<p role="option" data-wb5-selectvalue="my default value">Default persistent option</p>
			</template>
		</div>
		<button type="submit">Submit</button>
	</form>
</div>

<h2>Word - Filter type</h2>
<div class="wb-frmvld">
	<form action="#" method="get" id="validation-example5">
		<div class="form-group">
			<label for="ex_field_id_5">Please choose a task:</label>
			<select id="ex_field_id_5" class="wb-combobox" required name="selectName" data-wb5-template="ex_template_id_5" data-wb-filter-type="word" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions">
				<option value="Lorem">Lorem</option>
				<option value="ipsum">ipsum</option>
				<option value="dolor">dolor</option>
				<option value="sit">sit</option>
			</select>
			<template id="ex_template_id_5">
				<ul class="list-unstyled">
					<li class="brdr-bttm" role="option" data-wb5-for="option in select.options" data-wb5-selectvalue="{{option.value}}">{{ option.textContent }}</li>
					<li class="brdr-bttm" role="option" data-wb5-for="autofillItem in wbLoad" data-wb5-selectvalue="{{autofillItem.task}}">{{ autofillItem.task }}</li>
				</ul>
				<p role="option" data-wb5-selectvalue="my default value">Default persistent option</p>
			</template>
		</div>
		<button type="submit">Submit</button>
	</form>
</div>

<h2>Source code</h2>

<pre><code>&lt;h2&gt;Limit to 4 item&lt;/h2&gt;
&lt;div class="wb-frmvld"&gt;
	&lt;form action="#" method="get" id="validation-example1"&gt;
		&lt;div class="form-group"&gt;
			&lt;label for="ex_field_id_1"&gt;Please choose a task:&lt;/label&gt;
			&lt;select id="ex_field_id_1" class="wb-combobox" required name="selectName" data-wb5-template="ex_template_id_1" data-wb-limit="4" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions"&gt;
				&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
				&lt;option value="ipsum"&gt;ipsum&lt;/option&gt;
				&lt;option value="dolor"&gt;dolor&lt;/option&gt;
				&lt;option value="sit"&gt;sit&lt;/option&gt;
			&lt;/select&gt;
			&lt;template id="ex_template_id_1"&gt;
				&lt;ul class="list-unstyled"&gt;
					&lt;li class="brdr-bttm" role="option" data-wb5-for="option in select.options" data-wb5-selectvalue="{{option.value}}"&gt;{{ option.textContent }}&lt;/li&gt;
					&lt;li class="brdr-bttm" role="option" data-wb5-for="autofillItem in wbLoad" data-wb5-selectvalue="{{autofillItem.task}}"&gt;{{ autofillItem.task }}&lt;/li&gt;
				&lt;/ul&gt;
				&lt;p role="option" data-wb5-selectvalue="my default value"&gt;Default persistent option&lt;/p&gt;
			&lt;/template&gt;
		&lt;/div&gt;
		&lt;button type="submit"&gt;Submit&lt;/button&gt;
	&lt;/form&gt;
&lt;/div&gt;

&lt;h2&gt;Limit to 10 items&lt;/h2&gt;
&lt;div class="wb-frmvld"&gt;
	&lt;form action="#" method="get" id="validation-example2"&gt;
		&lt;div class="form-group"&gt;
			&lt;label for="ex_field_id_2"&gt;Please choose a task:&lt;/label&gt;
			&lt;select id="ex_field_id_2" class="wb-combobox" required name="selectName" data-wb5-template="ex_template_id_2" data-wb-limit="10" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions"&gt;
				&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
				&lt;option value="ipsum"&gt;ipsum&lt;/option&gt;
				&lt;option value="dolor"&gt;dolor&lt;/option&gt;
				&lt;option value="sit"&gt;sit&lt;/option&gt;
			&lt;/select&gt;
			&lt;template id="ex_template_id_2"&gt;
				&lt;ul class="list-unstyled"&gt;
					&lt;li class="brdr-bttm" role="option" data-wb5-for="option in select.options" data-wb5-selectvalue="{{option.value}}"&gt;{{ option.textContent }}&lt;/li&gt;
					&lt;li class="brdr-bttm" role="option" data-wb5-for="autofillItem in wbLoad" data-wb5-selectvalue="{{autofillItem.task}}"&gt;{{ autofillItem.task }}&lt;/li&gt;
				&lt;/ul&gt;
				&lt;p role="option" data-wb5-selectvalue="my default value"&gt;Default persistent option&lt;/p&gt;
			&lt;/template&gt;
		&lt;/div&gt;
		&lt;button type="submit"&gt;Submit&lt;/button&gt;
	&lt;/form&gt;
&lt;/div&gt;

&lt;h2&gt;Any - Filter type&lt;/h2&gt;
&lt;div class="wb-frmvld"&gt;
	&lt;form action="#" method="get" id="validation-example3"&gt;
		&lt;div class="form-group"&gt;
			&lt;label for="ex_field_id_3"&gt;Please choose a task:&lt;/label&gt;
			&lt;select id="ex_field_id_3" class="wb-combobox" required name="selectName" data-wb5-template="ex_template_id_3" data-wb-filter-type="any" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions"&gt;
				&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
				&lt;option value="ipsum"&gt;ipsum&lt;/option&gt;
				&lt;option value="dolor"&gt;dolor&lt;/option&gt;
				&lt;option value="sit"&gt;sit&lt;/option&gt;
			&lt;/select&gt;
			&lt;template id="ex_template_id_3"&gt;
				&lt;ul class="list-unstyled"&gt;
					&lt;li class="brdr-bttm" role="option" data-wb5-for="option in select.options" data-wb5-selectvalue="{{option.value}}"&gt;{{ option.textContent }}&lt;/li&gt;
					&lt;li class="brdr-bttm" role="option" data-wb5-for="autofillItem in wbLoad" data-wb5-selectvalue="{{autofillItem.task}}"&gt;{{ autofillItem.task }}&lt;/li&gt;
				&lt;/ul&gt;
				&lt;p role="option" data-wb5-selectvalue="my default value"&gt;Default persistent option&lt;/p&gt;
			&lt;/template&gt;
		&lt;/div&gt;
		&lt;button type="submit"&gt;Submit&lt;/button&gt;
	&lt;/form&gt;
&lt;/div&gt;

&lt;h2&gt;Start with - Filter type&lt;/h2&gt;
&lt;div class="wb-frmvld"&gt;
	&lt;form action="#" method="get" id="validation-example4"&gt;
		&lt;div class="form-group"&gt;
			&lt;label for="ex_field_id_4"&gt;Please choose a task:&lt;/label&gt;
			&lt;select id="ex_field_id_4" class="wb-combobox" required name="selectName" data-wb5-template="ex_template_id_4" data-wb-filter-type="startWith" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions"&gt;
				&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
				&lt;option value="ipsum"&gt;ipsum&lt;/option&gt;
				&lt;option value="dolor"&gt;dolor&lt;/option&gt;
				&lt;option value="sit"&gt;sit&lt;/option&gt;
			&lt;/select&gt;
			&lt;template id="ex_template_id_4"&gt;
				&lt;ul class="list-unstyled"&gt;
					&lt;li class="brdr-bttm" role="option" data-wb5-for="option in select.options" data-wb5-selectvalue="{{option.value}}"&gt;{{ option.textContent }}&lt;/li&gt;
					&lt;li class="brdr-bttm" role="option" data-wb5-for="autofillItem in wbLoad" data-wb5-selectvalue="{{autofillItem.task}}"&gt;{{ autofillItem.task }}&lt;/li&gt;
				&lt;/ul&gt;
				&lt;p role="option" data-wb5-selectvalue="my default value"&gt;Default persistent option&lt;/p&gt;
			&lt;/template&gt;
		&lt;/div&gt;
		&lt;button type="submit"&gt;Submit&lt;/button&gt;
	&lt;/form&gt;
&lt;/div&gt;

&lt;h2&gt;Word - Filter type&lt;/h2&gt;
&lt;div class="wb-frmvld"&gt;
	&lt;form action="#" method="get" id="validation-example5"&gt;
		&lt;div class="form-group"&gt;
			&lt;label for="ex_field_id_5"&gt;Please choose a task:&lt;/label&gt;
			&lt;select id="ex_field_id_5" class="wb-combobox" required name="selectName" data-wb5-template="ex_template_id_5" data-wb-filter-type="word" data-wb-load="//wet-boew.github.io/themes-dist/GCWeb/demos/suggest/demo/suggest-en.json#/suggestions"&gt;
				&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
				&lt;option value="ipsum"&gt;ipsum&lt;/option&gt;
				&lt;option value="dolor"&gt;dolor&lt;/option&gt;
				&lt;option value="sit"&gt;sit&lt;/option&gt;
			&lt;/select&gt;
			&lt;template id="ex_template_id_5"&gt;
				&lt;ul class="list-unstyled"&gt;
					&lt;li class="brdr-bttm" role="option" data-wb5-for="option in select.options" data-wb5-selectvalue="{{option.value}}"&gt;{{ option.textContent }}&lt;/li&gt;
					&lt;li class="brdr-bttm" role="option" data-wb5-for="autofillItem in wbLoad" data-wb5-selectvalue="{{autofillItem.task}}"&gt;{{ autofillItem.task }}&lt;/li&gt;
				&lt;/ul&gt;
				&lt;p role="option" data-wb5-selectvalue="my default value"&gt;Default persistent option&lt;/p&gt;
			&lt;/template&gt;
		&lt;/div&gt;
		&lt;button type="submit"&gt;Submit&lt;/button&gt;
	&lt;/form&gt;
&lt;/div&gt;</code></pre>

{% endraw %}
{:/}
