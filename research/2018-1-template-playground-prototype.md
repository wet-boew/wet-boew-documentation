---
published: true
layout: default-theme-wet-boew-en
title: Template playground prototype - Datalist JSON suggestion - Research and finding
description: Playground to test the template system in the combobox plugin
languages: false
hide_breadcrumb: false
date_modified: 2020-01-13
script_src: //wet-boew.github.io/themes-dist/GCWeb/GCWeb/js/theme.min.js
script_src2: 2018-assets/2018-1-combobox4-with-playground.js
script_src3: 2018-assets/2018-1-combobox-fieldflow.js
---

{::nomarkdown}

{% raw %}


<p>Note:</p>
<ul>
	<li>Reactive binding only work "data-wb5-bind" and "data-wb5-text"</li>
	<li>Conditional "data-wb5-if" only work for loop, but it can call function (like .indexOf()), can navigate down to property (like .lenght ) and can contains logical operator (like  &amp;&amp; and || )</li>
</ul>

<label for="jsobj">Javascript Object</label><br />
<textarea id="jsobj" rows="10" style="width:100%">{
	prop: "test",
	showSecondList: false, // Set it to true to show the second list
	placeholderText: "Here some placeholder text", // change it from the console like:  window.playground.placeholderText = "new value"
	arrayOfSomething: [
		"Value 1",
		"value 2",
		"Value 3"
	]
}</textarea><br />

<label for="tmpl">Template</label><br />
<textarea id="tmpl" rows="10" style="width:100%">&lt;p&gt;{{prop}}&lt;/p&gt;
&lt;ul&gt;
	&lt;li data-wb5-for="itm in arrayOfSomething">{{itm}}&lt;/li&gt;
&lt;/ul&gt;

&lt;p data-wb5-text="placeholderText"&gt;&lt;/p&gt;

&lt;p&gt;The following list depends of the value of &lt;code&gt;showSecondList&lt;/code&gt;&lt;/p&gt;
&lt;ul&gt;
	&lt;li data-wb5-for="iterator in arrayOfSomething" data-wb5-if="parent.showSecondList">{{iterator}}&lt;/li&gt;
&lt;/ul&gt;


&lt;input data-wb5-bind="placeholder@placeholderText" style="width:100%" /&gt;
</textarea><br />

<button id="render">Render</button>

<h2>Results</h2>
<div id="results">(Nothing to show)</div>


{% endraw %}
{:/}
