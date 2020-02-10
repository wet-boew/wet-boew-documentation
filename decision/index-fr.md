---
published: true
layout: default-theme-wet-boew-en
title: Design decision
description: Design decision followed by WET.
written_lang: en
hide_breadcrumb: false
date_modified: 2020-02-10
---

The following are design decision for WET. Those decision are used for providing guidance on how to design content, features and theme. Design decision are subject for review by every wet-boew contributor and its official approval is made by participant of the WET-BOEW Roadmap monthly meeting, WET expert and WET administrator. Any propose changes to an approved design design, except to trivial editorial fixes, are subject to go through the whole approval process.

If you have any questions in regards of one of the above design decision, please [open an issue](https://github.com/wet-boew/wet-boew/issues) in the wet-boew repository.

{::nomarkdown}
<div class="wb-filter">
<section>
	<h2>Current</h2>
	<ul>
		<li><a href="1-fr.html">Design decision 1: Use SVG with img element instead of object</a> (Pattern)</li>
		<li><a href="2-fr.html">Design decision 2: Browser supported</a> (Support scope)</li>
		<li><a href="3-fr.html">Design decision 3: WET API/Blueprint</a></li>
		<li><a href="4-fr.html">Design decision 4: Basic HTML mode and progressive enhancement</a></li>
		<li><a href="5-fr.html">Design Decision 5: Decision on repository migration</a></li>
		<li><a href="6-fr.html">Design Decision 6: Versioning</a></li>
		<li><a href="8.html">Design decision 8: Dual implementation of structured data with JSON-LD and RDFa Lite in a single web page</a></li>
		<li><a href="9.html">Design decision 9: Release early, release often (<abbr title="Short-term release">STR</abbr>)</a></li>
		<li><a href="10.html">Design decision 10: Provisional feature</a></li>
	</ul>
</section>

<!--
<section>
	<h2>Presented</h2>
	<ul>
	</ul>
</section>
-->

<section>
	<h2>Proposed (Going to be presented)</h2>
	<ul>
		<li><a href="11.html">Design decision 11 - Resize text testing methodology</a></li>
	</ul>
</section>

<!--
<section>
	<h2>Limited AT support</h2>

	<p>Design decision to provide better support to assistive technologies.</p>

</section>

<section>
	<h2>Usability finding</h2>

	<p>Design decision issued from usability research.</p>

</section>
-->

<section>
	<h2>Ready</h2>

<!--
	<ul>
		<li><a href="9.html">Design decision 9: Release early, release often (<abbr title="Short-term release">STR</abbr>)</a></li>
	</ul>
 -->

	<p>Design decision ready to be presented at the roadmap WET-BOEW meeting.</p>

</section>

<section>
	<h2>Draft</h2>

		<p>Design decision that required some additional testing or information before to be officially submited</p>


	<ul>
		<li><a href="draft-2018-2.html">Avoid to use heading in summary element.</a>, todos:
			<ul>
				<li>Write test case with and without an heading in summary</li>
				<li>Need AT testing</li>
				<li>Github related issue <a href="https://github.com/wet-boew/wet-boew/issues/7314">wet-boew/wet-boew#7314</a></li>
			</ul>
		</li>
	</ul>

</section>

<section>
	<h2>Future design decision idea</h2>

	<ul>
		<li>Web page meaningful sequence, focus order, consistent navigation conforming for a specific view port but not between view port.</li>
		<li>Long term release and doing more frequent releases (~weekly)</li>
	</ul>
</section>

<section>
	<h2>Obsolete</h2>
	<ul>
		<li><a href="7-fr.html">Design Decision 7: Experimental feature</a> (Replaced by <a href="10.html">Design decision 10: Provisional feature</a>)</li>
	</ul>
	<p>Process overview to obsolete a design decision. It can be obsoleted if they are not valid when considering the latest common and best practice. In order to obsolete a decision, an evidence would need to be documented and presented explaining why it is not valid accompanied with recommendation of a process to migrate content that was following the obsoleted design decision. You can initiate the conversation by submitting a new issue on Github in the wet-boew main repository.</p>

</section>
</div>
{:/}


## Approval process

The approval process consist in the following steps:
* A wet-boew contributor publish a draft of a design decision document.
* The design decision draft is presented at one of the monthly WET-BOEW Roadmap meeting.
* Sponsorship by a WET expert could required.
* The author must address all comments, do the research and clarify the design decision documents as needed.
* The document is presented again at a subsequent WET-BOEW Roadmap meeting.
* Upon satisfaction of the WET-BOEW Roadmap meeting participant, WET expert and WET administration, the document get it's approval
* The Design Decision is then published and considered as a new best practice by the wet-boew community.
