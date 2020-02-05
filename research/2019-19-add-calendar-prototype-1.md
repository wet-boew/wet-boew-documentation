---
published: true
layout: default-theme-wet-boew-en
title: Add to Calendar prototype 1 - schema.org/event - Details summary or Input type checkbox
description: Prototype 1
modified: 2019-11-21

script_pgbttm_src: //wet-boew.github.io/themes-dist/GCWeb/GCWeb/js/theme.min.js
script_pgbttm3_src: //wet-boew.github.io/themes-dist/GCWeb/wet-boew/js/deps/jsonpointer.js
---

Prototype of an ```Add to Calendar``` with two options: Details summary pattern  or Input type checkox / Schema.org/Event RDFa markup.


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
		<section class="col-md-6">
			<div vocab="http://schema.org/" class="event-wrapper" typeof="Event">
				<div class="event-title" property="name"><h2>Cannux20</h2></div>	
				<h3>Date and Time</h3>
				<div class="event-date" property="startDate" content="2020-01-27T12:00:00Z">Mon, 27 Jan 2020, 7:00 AM - </div>
				<div class="event-date" property="endDate" content="2020-01-29T17:00:00Z">Wed, 29 Jan 2020, 12:00 PM EST</div>
				<h3>Location</h3>	
				<div class="event-venue" property="location" typeof="Place">
					<span property="name">Shaw Centre</span>
					<div class="address" property="address" typeof="PostalAddress">
						<span property="streetAddress">55 Colonel By Drive</span><br>
						<span property="addressLocality">Ottawa</span>,
						<span property="addressRegion">ON</span>
						<span property="postalCode">K1N 9J2</span>
					</div>
				</div>
				<!--<div class="event-time">7:00 AM</div>-->
				<div property="offers" typeof="Offer" class="mrgn-bttm-md">
					<div class="event-price">
						<meta property="priceCurrency" content="CND" />$
						<meta property="price" content="165.00-1900.00" />165 - 1,900
					</div>
					<p><a property="url" href="https://www.eventbrite.ca/e/cannexus20-regular-registration-62525190528?aff=ebdssbdestsearch">Tickets</a></p>
				</div>
				<input type="checkbox" id="wb-addcal-1" class="wb-inv">
				<label for="wb-addcal-1" class="btn btn-default wb-addcal">Add to calendar</label>
				<ul class="list-unstyled mrgn-bttm-0">
					<li><a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Cannexus20&dates=20200127T120000Z/20200129T170000Z&details=Get%20on%20the%20front%20page%20of%20HN,%20then%20prepare%20for%20world%20domination.&location=Shaw%20Centre%2055%20Colonel%20By%20Dr,%20Ottawa,%20ON%20K1N%209J2&sprop=&sprop=name"><span class="fab fa-google mrgn-rght-md"></span>Google<span class="sr-only"> calendar</span></a></li>
					<li><a href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:http://carlsednaoui.github.io/add-to-calendar-buttons/example.html%0ADTSTART:20200127T120000Z %0ADTEND:20200127T170000Z%0ASUMMARY:Cannux20%0ADESCRIPTION: We%20offer%20a%20variety%20of%20packages%20at%20very%20competitive%20rates.%20Both%203-day%20and%201-day%20packages%20are%20available.%20Take%20advantage%20of%20special%20rates%20for%20presenters,%20members%20of%20supporting%20organizations,%20students%20and%20groups.%0ALOCATION:Shaw%20Centre%2055%20Colonel%20By%20Dr,%20Ottawa,%20ON%20K1N%209J2%0AEND:VEVENT%0AEND:VCALENDAR"><span class="fab fa-apple mrgn-rght-md"></span>Apple<span class="sr-only"> calendar</span></a></li>
					<li><a href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:http://carlsednaoui.github.io/add-to-calendar-buttons/example.html%0ADTSTART:20200127T120000Z %0ADTEND:20200127T170000Z%0ASUMMARY:Cannux20%0ADESCRIPTION: We%20offer%20a%20variety%20of%20packages%20at%20very%20competitive%20rates.%20Both%203-day%20and%201-day%20packages%20are%20available.%20Take%20advantage%20of%20special%20rates%20for%20presenters,%20members%20of%20supporting%20organizations,%20students%20and%20groups.%0ALOCATION:Shaw%20Centre%2055%20Colonel%20By%20Dr,%20Ottawa,%20ON%20K1N%209J2%0AEND:VEVENT%0AEND:VCALENDAR"><span class="fa fa-calendar mrgn-rght-md"></span>Other<span class="sr-only"> calendar</span></a></li>
				</ul>
			</div>
		</section>
		<section class="col-md-6">
		<div vocab="http://schema.org/" class="event-wrapper" typeof="Event">
			<div class="event-title" property="name">
				<h2>Cannux20</h2>
			</div>	
			<h3>Date and Time</h3>
			<div class="event-date" property="startDate" content="2020-01-27T12:00:00Z">Mon, 27 Jan 2020, 7:00 AM - </div>
			<div class="event-date" property="endDate" content="2020-01-29T17:00:00Z">Wed, 29 Jan 2020, 12:00 PM EST</div>
			<h3>Location</h3>	
				<div class="event-venue" property="location" typeof="Place">
					<span property="name">Shaw Centre</span>
					<div class="address" property="address" typeof="PostalAddress">
						<span property="streetAddress">55 Colonel By Drive</span><br>
						<span property="addressLocality">Ottawa</span>,
						<span property="addressRegion">ON</span>
						<span property="postalCode">K1N 9J2</span>
					</div>
				</div>
				<!--<div class="event-time">7:00 AM</div>-->
				<div property="offers" typeof="Offer" class="mrgn-bttm-md">
					<div class="event-price">
						<meta property="priceCurrency" content="CND" />$
						<meta property="price" content="165.00-1900.00" />165 - 1,900
					</div>
					<p><a property="url" href="https://www.eventbrite.ca/e/cannexus20-regular-registration-62525190528?aff=ebdssbdestsearch">Tickets</a></p>
				</div>
				<details>
					<summary>Add to calendar</summary>
					<ul class="list-unstyled mrgn-bttm-0">
						<li><a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Cannexus20&dates=20200127T120000Z/20200129T170000Z&details=Get%20on%20the%20front%20page%20of%20HN,%20then%20prepare%20for%20world%20domination.&location=Shaw%20Centre%2055%20Colonel%20By%20Dr,%20Ottawa,%20ON%20K1N%209J2&sprop=&sprop=name"><span class="fab fa-google mrgn-rght-md"></span>Google<span class="sr-only"> calendar</span></a></li>
						<li><a href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:http://carlsednaoui.github.io/add-to-calendar-buttons/example.html%0ADTSTART:20200127T120000Z %0ADTEND:20200127T170000Z%0ASUMMARY:Cannux20%0ADESCRIPTION: We%20offer%20a%20variety%20of%20packages%20at%20very%20competitive%20rates.%20Both%203-day%20and%201-day%20packages%20are%20available.%20Take%20advantage%20of%20special%20rates%20for%20presenters,%20members%20of%20supporting%20organizations,%20students%20and%20groups.%0ALOCATION:Shaw%20Centre%2055%20Colonel%20By%20Dr,%20Ottawa,%20ON%20K1N%209J2%0AEND:VEVENT%0AEND:VCALENDAR"><span class="fab fa-apple mrgn-rght-md"></span>Apple<span class="sr-only"> calendar</span></a></li>
						<li><a href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:http://carlsednaoui.github.io/add-to-calendar-buttons/example.html%0ADTSTART:20200127T120000Z %0ADTEND:20200127T170000Z%0ASUMMARY:Cannux20%0ADESCRIPTION: We%20offer%20a%20variety%20of%20packages%20at%20very%20competitive%20rates.%20Both%203-day%20and%201-day%20packages%20are%20available.%20Take%20advantage%20of%20special%20rates%20for%20presenters,%20members%20of%20supporting%20organizations,%20students%20and%20groups.%0ALOCATION:Shaw%20Centre%2055%20Colonel%20By%20Dr,%20Ottawa,%20ON%20K1N%209J2%0AEND:VEVENT%0AEND:VCALENDAR"><span class="fa fa-calendar mrgn-rght-md"></span>Other<span class="sr-only"> calendar</span></a></li>
					</ul>
				</details>
			</div>
		</section>
	</div>
</div>

{% endraw %}
{:/}
