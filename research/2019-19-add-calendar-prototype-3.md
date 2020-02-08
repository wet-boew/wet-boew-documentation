---
published: true
layout: default-theme-wet-boew-en
title: Add to Calendar prototype 2 - Details summary and schema.org/event
description: Prototype 2
modified: 2020-02-08

script_pgbttm_src: //wet-boew.github.io/themes-dist/GCWeb/GCWeb/js/theme.min.js
script_pgbttm2_src: 2019-assets/add-to-calendar/add-to-calendar.js
script_pgbttm3_src: //wet-boew.github.io/themes-dist/GCWeb/wet-boew/js/deps/jsonpointer.js
---

Prototype of an ```Add to Calendar``` with the details summary pattern and Schema.org/Event RDFa markup.


{::nomarkdown}

{% raw %}

<div class="wb-prettify all-pre linenums"></div>
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
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

.max-content {
    display: inline-block;
    position: relative;
}



</style>

<h1 property="name" id="wb-cont">Add to calendar</h1>
<div class="container">
	<div class="row">
		<section class="col-md-12">
			<div vocab="http://schema.org/" class="wb-addcal mrgn-bttm-md" typeof="Event">
				<h2 property="name">Canux20</h2>
				<p property="description">CanUX (pronounced “canucks”, like the hockey team) is an independent, locally-grown, non-profit, volunteer-driven event created for people who want to learn and share their expertise about user experience, and how our profession contributes to making things work better for everyone.</p>
				<h3>Date and time</h3>	
				<p>Start date: <time property="startDate" content="20200127T120000Z" datetime="2020-01-27 7:00">Mon, 27 Jan 2020, 7:00 AM EST</time><br>
				End date: <time property="endDate" content="20200127T170000Z" datetime="2020-01-29 12:00">Wed, 29 Jan 2020, 12:00 PM EST</time></p>
				<h3>Location</h3>
				<div class="event-venue mrgn-bttm-md" property="location" typeof="Place">
					<span property="name">Shaw Centre</span>
					<div class="address" property="address" typeof="PostalAddress">
						<span property="streetAddress">55 Colonel By Drive</span><br>
						<span property="addressLocality">Ottawa</span>,
						<span property="addressRegion">ON</span>
						<span property="postalCode">K1N 9J2</span>
					</div>
				</div>
			</div>
		</section>	
	</div>
</div>


{% endraw %}
{:/}
