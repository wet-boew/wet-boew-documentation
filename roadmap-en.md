---
published: true
layout: default-theme-wet-boew-en
filename_fr: index-fr
title: Roadmap - Web Experience Toolkit (WET) documentation
description: Web Experience Toolkit (WET) documentation
modified: 2018-02-09
---


## Release of WET

[Nightly build](https://github.com/wet-boew/wet-boew-dist/archive/v4.0-dist.zip)

Notes:

* 2018-02-23 - Major update on the build script.
	* **Github related PR and issue**: 
		* [#8295](https://github.com/wet-boew/wet-boew/pull/8295)
		* [#8253](https://github.com/wet-boew/wet-boew/pull/8253)
		* [#8247](https://github.com/wet-boew/wet-boew/issues/8247)
		* [#8228](https://github.com/wet-boew/wet-boew/pull/8228)
		* [#8147](https://github.com/wet-boew/wet-boew/pull/8147)
	* **What that means?:** WET developer would need to re-run "script/setup" on each of their local instance.
	* **Know issue:** GCWeb build script, and other theme, need to be updated. Their build script are currently broken.
		* [#8296 - Package WET 4 on NPM](https://github.com/wet-boew/wet-boew/issues/8296)

### Roadmap

[Looking to download stable release of WET?](http://wet-boew.github.io/wet-boew/docs/versions/dwnld-en.html)

Latest version: 4.0.27 released on 2017-12-14

{::nomarkdown}


<table class="table table-bordered">
	<tr>
		<th>Version</th>
		<th>Planned for</th>
		<th>Summary</th>
		<th>Notes</th>
	</tr>
	<tr>
		<th>4.0.28 (dev)</th>
		<td>2018-03-06</td>
		<td>Bug fixes</td>
		<td></td>
	</tr>
	<tr>
		<th>4.1</th>
		<td>TBD</td>
		<td>Not defined</td>
		<td></td>
	</tr>
	<tr>
		<th>5.0 (alpha)</th>
		<td>alpha mid/end of 2018</td>
		<td></td>
		<td></td>
	</tr>
</table>

{:/}


## Release of GCWeb

Release of GCWeb include fixes / improvement made to wet-boew.

Latest released version: 4.0.27 on

{::nomarkdown}

<table class="table table-bordered">
	<tr>
		<th>Version</th>
		<th>Planned for</th>
		<th>Summary</th>
		<th>Notes</th>
	</tr>
	<tr>
		<th>4.0.28 (dev)</th>
		<td>2018-03-06</td>
		<td>Bug fixes and a new plugin</td>
		<td>Datalist JSON suggestion</td>
	</tr>
</table>

{:/}


## WET Features (Plugins)

{::nomarkdown}

<table class="table table-bordered">
	<tr>
		<th>Name</th>
		<th>Version</th>
		<th>Dependancies</th>
		<th>Next release</th>
		<th>Todo / Issues</th>
	</tr>

	<tr>
		<td>Calendar of events</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Charts and graph</td>
		<td>3.0</td>
		<td>
			<ul>
				<li>Flot - v0.7</li>
				<li>tblParser - v1.0</li>
			</ul>
		</td>
		<td>
			<p><a href="https://github.com/wet-boew/wet-boew/projects/1">Project 1 - Charts and graph - Powered by RDF</a></p>
		</td>
		<td>
			<p><a href="https://github.com/wet-boew/wet-boew/labels/Plugin%3A%20Charts%20and%20graphs">Github open issue</a></p>
		</td>
	</tr>
	<tr>
		<td>Collapsible alerts</td>
		<td></td>
		<td></td>
		<td>AT do not have good support of heading in <code>&lt;summary&gt;</code> element</td>
		<td>Consider it's removal</td>
	</tr>
	<tr>
		<td>Country content</td>
		<td></td>
		<td></td>
		<td>GCWeb unique feature</td>
		<td>Consider to move into GCWeb</td>
	</tr>
	<tr>
		<td>Ajax fetch</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Data ajax</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Data inview</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Data picture</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Equal height</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Facebook embedded pages</td>
		<td></td>
		<td></td>
		<td></td>
		<td>New 2017</td>
	</tr>
	<tr>
		<td>Favicon</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Feeds</td>
		<td></td>
		<td>Bypass reading a feed by a third party.</td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Footnotes</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Form validation</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Geomap</td>
		<td></td>
		<td>Use openlayer 3. There is still some backward compatibility issue.</td>
		<td></td>
		<td>See <a href="https://github.com/wet-boew/wet-boew/pull/7889">https://github.com/wet-boew/wet-boew/pull/7889</a></td>
	</tr>
	<tr>
		<td>Lightbox</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Menu</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Multimedia player</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Overlay</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Prettify</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Session timeout</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Share widget</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Tabbed interface</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Tables</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Text highlighting</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Toggle</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Twitter embedded timeline</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>Zebra stripping</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>

	<tr>
		<th>JSON fetch</th>
		<td>GCWeb</td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<th>Data JSON</th>
		<td>GCWeb</td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<th>Do action</th>
		<td>GCWeb</td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<th>Action manager</th>
		<td>GCWeb</td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<th>Fieldflow</th>
		<td>GCWeb</td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<th>JSON manager</th>
		<td>GCWeb</td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<th>URL mapping</th>
		<td>GCWeb</td>
		<td></td>
		<td></td>
		<td></td>
	</tr>

</table>




<h2>Polyfill</h2>

<p>General note: Each polyfill need to be re-evaluated to know if they are still relevant, and if they are still conform to the latest HTML5 specification.</p>

<table class="table table-bordered">
	<tr>
		<th>Name</th>
		<th>Status</th>
		<th>Version</th>
		<th>Specification</th>
		<th>Up to spec</th>
		<th>Notes</th>
	</tr>

	<tr>
		<td><a href="http://wet-boew.github.io/wet-boew/docs/ref/datalist/datalist-en.html">Datalist (auto-complete)</a></td>
		<td></td>
		<td></td>
		<td>
			<ul>
				<li><a href="https://www.w3.org/TR/html/sec-forms.html#the-datalist-element">HTML 5.1, 4.10.8. <code>datalist</code></a></li>
			</ul>
		</td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td><a href="http://wet-boew.github.io/wet-boew/docs/ref/details/details-en.html">Details/summary (expandable/collapsible content)</a></td>
		<td></td>
		<td></td>
		<td>
			<ul>
				<li><a href="https://www.w3.org/TR/html/interactive-elements.html#the-details-element">HTML 5.1, 4.11.1. <code>details</code></a></li>
				<li><a href="https://www.w3.org/TR/html/interactive-elements.html#the-summary-element">HTML 5.1, 4.11.2. <code>summary</code></a></li>
			</ul>
		</td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td><a href="http://wet-boew.github.io/wet-boew/docs/ref/datepicker/datepicker-en.html">Input type="date" (date picker)</a></td>
		<td></td>
		<td></td>
		<td>
			<ul>
				<li><a href="https://www.w3.org/TR/html/sec-forms.html#date-state-typedate">HTML 5.1, 4.10.5.1.7. <code>type=date</code></a></li>
			</ul>
		</td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td><a href="http://wet-boew.github.io/wet-boew/docs/ref/slider/slider-en.html">Input type="range" (slider control)</a></td>
		<td></td>
		<td></td>
		<td>
			<ul>
				<li><a href="https://www.w3.org/TR/html/sec-forms.html#range-state-typerange">HTML 5.1, 4.10.5.1.13. <code>type=range</code></a></li>
			</ul>
		</td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td><a href="http://wet-boew.github.io/wet-boew/docs/ref/mathml/mathml-en.html">MathML</a></td>
		<td></td>
		<td></td>
		<td>
			<ul>
				<li><a href="https://www.w3.org/TR/html/semantics-embedded-content.html#mathml">HTML 5.1, 4.7.8. MathML</a></li>
				<li><a href="https://www.w3.org/TR/MathML/">MathML 3.0 2nd edition</a></li>
			</ul>
		</td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td><a href="http://wet-boew.github.io/wet-boew/docs/ref/meter/meter-en.html">Meter</a></td>
		<td></td>
		<td></td>
		<td>
			<ul>
				<li><a href="https://www.w3.org/TR/html/sec-forms.html#the-meter-element">HTML 5.1, 4.10.15. <code>meter</code></a></li>
				<li><a href="https://www.w3.org/TR/html/rendering.html#the-meter-element-rendering">HTML 5.1, 10.5.12. Rendering (Bindings)</a></li>
			</ul>
		</td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td><a href="http://wet-boew.github.io/wet-boew/docs/ref/progress/progress-en.html">Progress (progress bar)</a></td>
		<td></td>
		<td></td>
		<td>
			<ul>
				<li><a href="https://www.w3.org/TR/html/sec-forms.html#the-progress-element">HTML 5.1, 4.10.14. <code>progress</code></a></li>
				<li><a href="https://www.w3.org/TR/html/rendering.html#the-progress-element-rendering">HTML 5.1, 10.5.13. Rendering (Bindings)</a></li>
			</ul>
		</td>
		<td></td>
		<td></td>
	</tr>
</table>

<h2>Developer tools</h2>

<ul>
	<li><a href="http://wet-boew.github.io/v4.0-ci/demos/tablevalidator/tablevalidator-en.html">Table Validator</a> - <a href="http://wet-boew.github.io/v4.0-ci/docs/ref/tablevalidator/tablevalidator-en.html">Documentation</a></li>
</ul>

<p>The <a href="https://github.com/wet-boew/wet-boew-drupal">Drupal variant</a> may contain some developer tools</p>

<h2>Others component</h2>

<p>The following may have their own independant roadmap and documentation may are incomplete.</p>

<ul>
	<li>[Other] <a href="http://wet-boew.github.io/v4.0-ci/demos/arb-rra/arb-rra-en.html">Accessibility responsibility breakdown (WCAG 2.0)</a></li>
	<li>[Other - UI Design example] <a href="http://wet-boew.github.io/v4.0-ci/demos/archived/archived-en.html">Archived - Archived information</a></li>
	<li>[Other - UI Design example] <a href="http://wet-boew.github.io/v4.0-ci/demos/feedback/feedback-en.html">Feedback form</a></li>
	<li>[Other] <a href="http://wet-boew.github.io/v4.0-ci/demos/transitions/transitions-en.html">Transitions</a></li>
	<li>[Other] <a href="http://wet-boew.github.io/v4.0-ci/demos/wamethod/wamethod-AA-en.html">Web Accessibility Assessment Methodology (Level AA)</a></li>
	<li>[Other] <a href="http://wet-boew.github.io/v4.0-ci/demos/wamethod/wamethod-AAA-en.html">Web Accessibility Assessment Methodology (Level AAA)</a></li>
	<li>[Themes and style] <a href="http://wet-boew.github.io/themes-dist/theme-base/index-en.html">Base theme</a> - <a href="https://github.com/wet-boew/theme-base">Github project</a></li>
	<li>[Themes and style] <a href="http://wet-boew.github.io/themes-dist/GCWeb/index-en.html">Canada.ca theme</a> - <a href="https://github.com/wet-boew/GCWeb">Github project</a></li>
	<li>[Themes and style] <a href="http://wet-boew.github.io/themes-dist/theme-gc-intranet/index-en.html">Government of Canada Intranet theme</a> - <a href="">Documentation</a> - <a href="https://github.com/wet-boew/theme-gc-intranet">Github project</a></li>
	<li>[Themes and style] <a href="http://wet-boew.github.io/themes-dist/theme-gcwu-fegc/index-en.html">Government of Canada Web Usability theme</a> - <a href="https://github.com/wet-boew/theme-gcwu-fegc">Github project</a></li>
	<li>[Themes and style] <a href="http://wet-boew.github.io/themes-dist/theme-ogpl/index-en.html">Open Government Platform (OGPL) theme</a> - <a href="https://github.com/wet-boew/theme-ogpl">Github project</a></li>
	<li>[Themes and style] <a href="http://wet-boew.github.io/v4.0-ci/theme/index-en.html">WET theme</a></li>
	<li>[Variants] <a href="http://wet-boew.github.io/wet-boew-jekyll/index-en.html">Jekyll variant</a> - <a href="https://github.com/wet-boew/wet-boew-jekyll">Github project</a></li>
	<li>[Variants] <a href="http://wiki.drupalwxt.org/">Drupal WxT</a> - <a href="https://github.com/wet-boew/wet-boew-drupal">Github project</a></li>
</ul>



<h2>Detailled feature roadmap</h2>

<section>
	<h3>Table parser</h3>
	<p>(The following informatoin was updated on June 15, 2016)</p>
	<ul>
		<li>Github issue
			<ul>
				<li><a href="https://github.com/wet-boew/wet-boew/issues?q=is%3Aopen+is%3Aissue+label%3A%22Content%3A+Table+validator%22">Table validator</a></li>
				<li><a href="https://github.com/wet-boew/wet-boew/issues?q=is%3Aissue+label%3A%22Plugin%3A+Zebra+striping%22+is%3Aopen">Zebra stripping</a></li>
				<li><a href="https://github.com/wet-boew/wet-boew/issues?q=is%3Aopen+is%3Aissue+label%3A%22Plugin%3A+Charts+and+graphs%22">Chart and graph</a></li>
			</ul>
		</li>
		<li><a href="https://github.com/duboisp/Table-Usability-Concept">Documentation</a></li>
		<li><a href="http://wet-boew.github.io/wet-boew/demos/zebra/zebra-en.html">Examples</a></li>
	</ul>

	<p>Plan</p>
	<ul>
		<li>Review the output data structure in a way it is standardized either if the data is viewed by row or by column</li>
		<li>Separate the data validation vs the data processing, move the tabular data validation into a developer version of the plugin</li>
		<li>Create a complete test suite with pre-defined expected output and error (Include at least the tables example in the 12 techniques for complex tables)</li>
	</ul>
</section>

{:/}

