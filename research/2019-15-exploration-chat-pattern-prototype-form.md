---
published: true
layout: default-theme-wet-boew-en
title: 2019-15 - Chat Wizard
description: Chat Wizard Demo
modified: 2019-02-12
---

{::nomarkdown}

{% raw %}

<!-- Chat wizard -->
<style>
@keyframes slideInFromRight {
	0% {
		-ms-transform: scale(0, 1);
		-webkit-transform: scale(0, 1);
		transform: scale(0, 1);
	}
	95% {
		-ms-transform: scale(0, 1);
		-webkit-transform: scale(0, 1);
		transform: scale(0, 1);
	}
	100% {
		-ms-transform: scale(1, 1);
		-webkit-transform: scale(1, 1);
		transform: scale(1, 1);
	}
}
@-webkit-keyframes grow {
	0% {
		-ms-transform: scale(1, 1);
		-webkit-transform: scale(1, 1);
		transform: scale(1, 1);
	}
	15% {
		-ms-transform: scale(1.15, 1.15);
		-webkit-transform: scale(1.15, 1.15);
		transform: scale(1.15, 1.15);
	}
	30% {
		-ms-transform: scale(1, 1);
		-webkit-transform: scale(1, 1);
		transform: scale(1, 1);
	}
	65% {
		-ms-transform: scale(1.3, 1.3);
		-webkit-transform: scale(1.3, 1.3);
		transform: scale(1.3, 1.3);
	}
	100% {
		-ms-transform: scale(1, 1);
		-webkit-transform: scale(1, 1);
		transform: scale(1, 1);
	}
}
@keyframes pulseIn {
	0% {
		-ms-transform: scale(1, 1);
		-webkit-transform: scale(1, 1);
		transform: scale(1, 1);
	}
	15% {
		-ms-transform: scale(1.15, 1.15);
		-webkit-transform: scale(1.15, 1.15);
		transform: scale(1.15, 1.15);
	}
	30% {
		-ms-transform: scale(1, 1);
		-webkit-transform: scale(1, 1);
		transform: scale(1, 1);
	}
	65% {
		-ms-transform: scale(1.3, 1.3);
		-webkit-transform: scale(1.3, 1.3);
		transform: scale(1.3, 1.3);
	}
	100% {
		-ms-transform: scale(1, 1);
		-webkit-transform: scale(1, 1);
		transform: scale(1, 1);
	}
}
.chtwzrd-trans-left {
	will-change:  scroll-position;
	animation: 5s ease-out 0s 1 slideInFromRight;
	transform-origin: 100% 50%;
}
.chtwzrd-trans-pulse {
	will-change: transform;
	animation: 0.5s linear 3.5s 1 pulseIn, 0.5s linear 15s 1 pulseIn, 0.5s linear 30s 1 pulseIn;
}
.chtwzrd-bubble-wrap {
	width: 60px;
	height: 60px;
	position: fixed;
	bottom: 30px;
	right: 30px;
	z-index: 1049;
}
.chtwzrd-bubble-wrap p {
	position: relative;
	top: 5px;
	right: 190px;
	width: 220px;
	font-size: 14.4px;
	background: #335075;
	color: #fff;
	padding: 5px 45px 5px 30px;
	line-height: 20px;
	height: 50px;
	border-top-left-radius: 25px;
	border-bottom-left-radius: 25px;
}
.chtwzrd-bubble-wrap p .chtwzrd-notif-close {
	position: absolute;
	top: 0;
	left: -5px;
	width: 20px;
	height: 20px;
	font-size: 18px;
	line-height: 20px;
	background: #333;
	color: #fff;
	border-radius: 50%;
	text-align: center;
	text-decoration: none;
}
.chtwzrd-bubble {
	width: 100%;
	height: 100%;
	position: absolute;
	bottom: 0;
	right: 0;
	background: #fff url('2019-assets/bot-default-avatar.png') center no-repeat;
	border-radius: 50%;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.45);
	text-indent: -9999px;
	overflow: hidden;
	white-space: nowrap;
}
.chtwzrd-container {
	display: none;
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 1050;
	background-color: #fff;
	width: 25%;
	overflow: hidden;
	font-size: 0.9em;
}
@media screen and (max-width: 1199px) {
	.chtwzrd-container {
		width: 35%;
	}
}
@media screen and (max-width: 992px) {
	.chtwzrd-container {
		width: 45%;
	}
}
@media screen and (max-width: 768px) {
	.chtwzrd-bubble-wrap {
		bottom: 20px;
		right: 20px;
	}
	.chtwzrd-container {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		bottom: 0;
		right: 0;
	}
	.chtwzrd-conversation {
		max-height: 350px;
	}
	.chtwzrd-noscroll {
		overflow: hidden !important;
	}
	.chtwzrd-bubble-wrap p .chtwzrd-notif-close {
		width: 25px;
		height: 25px;
		font-size: 1.5em;
		line-height: 25px;
	}
}
.chtwzrd-min {
	overflow: visible;
	color: #fff;
	background: transparent;
	border: 0;
	-webkit-appearance: none;
	font-weight: 700;
	width: 44px;
	height: 44px;
	line-height: 50px;
	text-decoration: none;
	opacity: 0.65;
	filter: alpha(opacity=65);
	position: absolute;
	right: 0;
	top: 0;
	padding: 0;
	margin: 0;
	font-size: 1.1em;
}
.chtwzrd-min:focus {
	outline: 1px dotted #fff;
	outline-offset: -2px;
	opacity: 1;
}
.chtwzrd-conversation {
	overflow-y: auto;
	overflow-x: hidden;
	max-height: 500px;
	min-height: 200px;
}
.chtwzrd-history {
	padding-top: 15px;
}
.chtwzrd-history::before {
	content: "";
	width: 100%;
	height: 40px;
	pointer-events: none;
	background: linear-gradient(to bottom,#fff 20%, rgba(255,255,255,0) 100%);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1051;
}
.chtwzrd-inputs fieldset:first-child {
	border-top: 1px solid #e5e5e5;
}
.chtwzrd-inputs ul:last-child {
	margin-bottom: 0;
}
.chtwzrd-container h4, .chtwzrd-container legend, .chtwzrd-container h4 .chtwzrd-question a {
	font-size: 1em;
}
.chtwzrd-question, .chtwzrd-message, .chtwzrd-container label {
	padding: 8px 12px;
	border-radius: 15px;
	color: #5a5a5a;
	width: auto;
	font-weight: normal;
}
.chtwzrd-question {
	background-color: #efefef;
	min-width: 60px;
	position: relative;
}
.chtwzrd-message, .chtwzrd-container label {
	background-color: #ddd;
}
.chtwzrd-message {
	margin-right: 15px;
}
.chtwzrd-container label {
	border: 1px solid #aaa;
	font-weight: bold;
}
.chtwzrd-avatar, .chtwzrd-question {
	display: table-cell;
	vertical-align: middle;
}
.chtwzrd-validate {
	display: none;
	height: 25px;
	font-size: 1em;
	background: #fcc;
	line-height: 25px;
	text-indent: 10px;
}
.chtwzrd-validate p {
	margin: 0;
}
.chtwzrd-avatar {
	width: 30px;
	height: 30px;
	background-color: #fff;
	background-image: url('2019-assets/bot-default-avatar.png');
	background-size: 25px;
	background-repeat: no-repeat;
	background-position: center;
}
.chtwzrd-basic-link {
	min-height: inherit;
}
@-webkit-keyframes grow {
	to {
		-webkit-transform: translateX(-50%) scale(0);
		transform: translateX(-50%) scale(0);
	}
}
@keyframes grow {
	to {
		-webkit-transform: translateX(-50%) scale(0);
		transform: translateX(-50%) scale(0);
	}
}
.chtwzrd-loader {
	width: 26px;
	height: 6px;
	position: absolute;
	top: 50%;
	left: 30px;
	-webkit-transform: translateX(-50%) translateY(-50%);
	transform: translateX(-50%) translateY(-50%);
}
.chtwzrd-loader-dot {
	will-change: transform;
	height: 6px;
	width: 6px;
	border-radius: 50%;
	background-color: #444;
	position: absolute;
	-webkit-animation: grow 0.5s ease-in-out infinite alternate;
	animation: grow 0.5s ease-in-out infinite alternate;
}
.chtwzrd-loader-dot.dot1 {
	left: 0;
	-webkit-transform-origin: 100% 50%;
	transform-origin: 100% 50%;
}
.chtwzrd-loader-dot.dot2 {
	left: 50%;
	-webkit-transform: translateX(-50%) scale(1);
	transform: translateX(-50%) scale(1);
	-webkit-animation-delay: 0.1s;
	animation-delay: 0.1s;
}
.chtwzrd-loader-dot.dot3 {
	right: 0;
	-webkit-animation-delay: 0.2s;
	animation-delay: 0.2s;
}
.chtbt-mrgn {
	margin-top: 80px;
}
</style>

<div class="row profile">
	<div class="col-md-6">
		<h1 property="name" id="wb-cont">[Topic title]</h1>
		<p>1-2 sentences that describe the topics and top tasks that can be accessed on this page.</p>
	</div>
	<div class="col-md-6 mrgn-tp-sm hidden-sm hidden-xs">
		<img src="./img/520x200.png" alt="" class="pull-right img-responsive thumbnail"/>
	</div>
</div>
<div class="row">
	<section class="col-md-8 pull-left">
		<div class="container wb-chtwzrd chtwzrd-basic">
			<div class="row">
				<section class="col-md-12">
					<h2>Help us help you</h2>
					<form class="mrgn-bttm-xl" data-wb-chtwzrd='{"action":"search", "send":"Show results", "first":"q1", "starttext":"Hi! I can help direct you to programs and services you might be interested in. Let&apos;s begin...", "endtext":"Thank you. I have built a page with results you may find resourceful."}' action="page1.html">
						<p data-wb-chtwzrd-intro='First, if you are an employer or organization looking for funding, you can find relevant information on the <a href="pagex.html">funding page</a>'>If you are an employer or organization looking for funding, you can find relevant information on the <a href="pagex.html">funding page</a>.</p>
						<fieldset>
							<legend data-wb-chtwzrd-q='{"labelwizard":"Are you:", "queryName":"describe", "input":"radio"}'>What would you describe yourself as?</legend>
							<ul class="list-unstyled mrgn-tp-md">
								<li>
									<label data-wb-chtwzrd-a='{"next":"q2", "url":"page1.html"}'>
										<input type="radio" value="young-canadian" name="q1" />
										<span>a young Canadian</span>
									</label>
								</li>
								<li>
									<label data-wb-chtwzrd-a='{"next":"none", "url":"page2.html"}'>
										<input type="radio" value="employer-organization-funding-support-youth" name="q1" />
										<span>an employer or organization looking for funding to support youth</span>
									</label>
								</li>
							</ul>
						</fieldset>
						<fieldset>
							<legend data-wb-chtwzrd-q='{"labelwizard":"Great! And are you:", "queryName":"situation", "input":"radio"}'>In what situation are you?</legend>
							<ul class="list-unstyled mrgn-tp-md">
								<li>
									<label data-wb-chtwzrd-a='{"next":"q3","url":"page1.html"}'>
										<input type="radio" value="high-school" name="q2" />
										<span>a high school student</span>
									</label>
								</li>
								<li>
									<label data-wb-chtwzrd-a='{"next":"q3","url":"page1.html"}'>
										<input type="radio" value="cegep-student" name="q2" />
										<span>a CÉGEP student</span>
									</label>
								</li>
								<li>
									<label data-wb-chtwzrd-a='{"next":"q3","url":"page1.html"}'>
										<input type="radio" value="post-secondary" name="q2" />
										<span>a post-secondary school student</span>
									</label>
								</li>
								<li>
									<label data-wb-chtwzrd-a='{"next":"q3","url":"page1.html"}'>
										<input type="radio" value="ready-start-career" name="q2" />
										<span>ready to start a career</span>
									</label>
								</li>
								<li>
									<label data-wb-chtwzrd-a='{"next":"q3","url":"page1.html"}'>
										<input type="radio" value="not-school-not-working" name="q2" />
										<span>not in school and not working</span>
									</label>
								</li>
								<li>
									<label data-wb-chtwzrd-a='{"next":"q3","url":"page1.html"}'>
										<input type="radio" value="none" name="q2" />
										<span>none of these</span>
									</label>
								</li>
							</ul>
						</fieldset>
						<fieldset>
							<legend data-wb-chtwzrd-q='{"labelwizard":"Awesome! And would you like to:", "queryName":"goal", "input":"radio"}'>What is your goal?</legend>
							<ul class="list-unstyled mrgn-tp-md">
								<li>
									<label data-wb-chtwzrd-a='{"next":"none", "url":"page3.html"}'>
										<input type="radio" value="get-job" name="q3" />
										<span>get a job</span>
									</label>
								</li>
								<li>
									<label data-wb-chtwzrd-a='{"next":"none", "url":"page4.html"}'>
										<input type="radio" value="develop-skills" name="q3" />
										<span>develop skills</span>
									</label>
								</li>
								<li>
									<label data-wb-chtwzrd-a='{"next":"none", "url":"page5.html"}'>
										<input type="radio" value="explore-careers" name="q3" />
										<span>explore careers</span>
									</label>
								</li>
								<li>
									<label data-wb-chtwzrd-a='{"next":"none", "url":"page6.html"}'>
										<input type="radio" value="post-secondary-education" name="q3" />
										<span>attend post-secondary education</span>
									</label>
								</li>
								<li>
									<label data-wb-chtwzrd-a='{"next":"none", "url":"page7.html"}'>
										<input type="radio" value="serve-community" name="q3" />
										<span>serve your community</span>
									</label>
								</li>
								<li>
									<label data-wb-chtwzrd-a='{"next":"none", "url":"page8.html"}'>
										<input type="radio" value="get-experience" name="q3" />
										<span>get an experience</span>
									</label>
								</li>
								<li>
									<label data-wb-chtwzrd-a='{"next":"none", "url":"page1.html"}'>
										<input type="radio" value="everything" name="q3" />
										<span>see everything</span>
									</label>
								</li>
							</ul>
						</fieldset>
						<button type="submit" class="btn btn-sm btn-primary">Search</button>
					</form>
				</section>
			</div>
		</div>
	</section>
</div>
<section class="whtwedo">
	<h2>What we are doing</h2>
	<div class="row wb-eqht">
		<section class="col-lg-4 col-md-6">
			<h3>Research</h3>
			<ul>
				<li><a href="#">[Research report 1]</a></li>
				<li><a href="#">[Research report 2]</a></li>
				<li><a href="#">[Launched research study]</a></li>
				<li><a href="#">[Preliminary research result 1]</a></li>
			</ul>
			<p><a href="#">All related research</a></p>
		</section>
		<section class="col-lg-4 col-md-6">
			<h3>Surveys</h3>
			<ul>
					<li><a href="#">[Survey 1]</a></li>
				<li><a href="#">[Survey 2 with a long heading]</a></li>
				<li><a href="#">[Survey 3]</a></li>
				<li><a href="#">[Survey 4]</a></li>
			</ul>
			<p><a href="#">All related surveys</a></p>
		</section>
		<section class="col-lg-4 col-md-6">
			<h3>Consultations</h3>
			<ul>
				<li><a href="#">[Consultation 1]</a></li>
				<li><a href="#">[Consultation 2 with a long heading]</a></li>
				<li><a href="#">[Consultation 3]</a></li>
				<li><a href="#">[Consultation 4 with a long heading]</a></li>
			</ul>
			<p><a href="#">All related consultations</a></p>
		</section>
	</div>
</section>
<section class="gc-prtts">
	<h2>Features</h2>
	<div class="row">
		<div class="col-lg-4 col-md-6 mrgn-bttm-md">
			<a href="#">
				<figure>
					<figcaption>[Feature hyperlink text]</figcaption>
					<img src="2019-assets/360x203.png" alt="" class="img-responsive thumbnail mrgn-bttm-sm"/>
					<p>Brief description of the feature being promoted.</p>
				</figure>
			</a>
		</div>
		<div class="col-lg-4 col-md-6 mrgn-bttm-md">
			<a href="#">
				<figure>
					<figcaption>[Feature hyperlink text]</figcaption>
					<img src="2019-assets/360x203.png" alt="" class="img-responsive thumbnail mrgn-bttm-sm"/>
					<p>Brief description of the feature being promoted.</p>
				</figure>
			</a>
		</div>
		<div class="col-lg-4 col-md-6 mrgn-bttm-md">
			<a href="#">
				<figure>
					<figcaption>[Feature hyperlink text]</figcaption>
					<img src="2019-assets/360x203.png" alt="" class="img-responsive thumbnail mrgn-bttm-sm"/>
					<p>Brief description of the feature being promoted.</p>
				</figure>
			</a>
		</div>
	</div>
</section>
<div class="pagedetails">
	<dl id="wb-dtmd">
		<dt>Date modified:&#32;</dt>
		<dd><time property="dateModified">2017-12-05</time></dd>
	</dl>
	<div class="row">
		<div class="col-sm-6 col-md-5 col-lg-4">
			<details class="brdr-0">
				<summary class="btn btn-default text-center">Report a problem on this page</summary>
				<div class="well row">
					<div class="gc-rprt-prblm">
						<div class="gc-rprt-prblm-frm gc-rprt-prblm-tggl">
							<form action="#">
								<fieldset>
									<legend><span class="field-name">Please select all that apply: </span></legend>
										<div class="checkbox">
											<label for="problem1"><input type="checkbox" data-reveal="#broken" name="problem" value="Something is broken" id="problem1" />Something is broken</label>
										</div>
								</fieldset>
								<button type="submit" class="btn btn-primary wb-toggle" data-toggle='{"stateOff": "hide", "stateOn": "show", "selector": ".gc-rprt-prblm-tggl"}'>Submit</button>
							</form>
						</div>
						<div class="gc-rprt-prblm-thnk gc-rprt-prblm-tggl hide">
							<h3>Thank you for your help!</h3>
							<p>You will not receive a reply. For enquiries, please <a href="https://www.canada.ca/en/contact.html">contact us</a>.</p>
						</div>
					</div>
				</div>
			</details>
		</div>
		<div class="wb-share col-sm-4 col-md-3 col-sm-offset-2 col-md-offset-4 col-lg-offset-5" data-wb-share='{"lnkClass": "btn btn-default btn-block"}'></div>
	</div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
<!-- Chat wizard -->
<script src="2019-assets/botapi.js"></script>
<script type="text/javascript">
// Create the data that is sent as an output + check if user has answered
var dataoutput = [], 
	datainput = {},
	hasAnswered = true, 
	redirurl = "", 
	first = "", 
	intro = "", 
	current = "";

// If chat wizard initiator is found, then initiate
// input possibilities are: JSON and Form
var initiatechtwzrd = function($selector, input) {		
	// initiate depending on the input type
	if(input == 'form') {
		datainput = translateToObject($selector);
	} else {
		// Stringify the JavaScipt Object Array
		datainput = botapi();
		var datajson = JSON.stringify(datainput);
		datainput = JSON.parse(datajson);
	}

	// Set answer to true for the messages before the first question
	hasAnswered = true, 
	first = datainput.header.first,
	intro = (datainput.header.introtext ? datainput.header.introtext : ""),
	current = datainput.questions[datainput.header.first];
	
	// Build chat wizard
	buildchtwzrd($selector);

	// All the commonly used elements
	var $basic = $(".chtwzrd-basic"), 
		$bubble = $(".chtwzrd-bubble-wrap"), 
		$container = $(".chtwzrd-container"), 
		$form = $(".chtwzrd-body"),
		$minimize = $(".chtwzrd-min"),
		$basiclink = $(".chtwzrd-basic-link"),
		$focusedBeforechtwzrd = "";

	// Hide basic form on load, show chat bubble instead
	$basic.hide();
	$bubble.fadeIn('slow');

	// Add link to chat from the basic form and add some white space over the footer for the bubble to sit
	$basic.find("input[type=submit], button[type=submit]").before('<button type="submit" class="btn btn-sm btn-default chtwzrd-link mrgn-rght-sm">Switch to help wizard</button>');
	$("footer#wb-info").addClass("chtbt-mrgn");

	if($('footer#wb-info').length) {
		// Correct bubble positionning on load if necessary
		$(document).ready(function(event) {
			stickyUntilFooter($bubble);
		});

		// Correct bubble positionning on resize
		$(window).on("resize", function(e) {
			stickyUntilFooter($bubble);
		});

		// Monitor Y position for the bubble
		$(window).on("scroll", function(e) {
			stickyUntilFooter($bubble);
		});
	}

	// Keep the bubble sticky while scrolling Y until user reaches the footer
	var stickyUntilFooter = function($selector) {
		// Equals to bubble default bottom value in CSS
		var bottomY = 30;

		if ($(window).scrollTop() >= $(document).outerHeight() - $(window).outerHeight() - $('footer#wb-info').outerHeight()) {
			$selector.css({	
				bottom: ($('footer#wb-info').outerHeight() - ($(document).outerHeight() - $(window).outerHeight() - $(window).scrollTop()) + bottomY)
			});
		} else {
			$selector.css({	
				bottom: bottomY
			});
		}
	}

	// Close notification aside bubble
	$(".chtwzrd-notif-close").on("click", function (event) {
		event.preventDefault();
		$(this).parent().hide();
		$bubble.focus();
	});

	// Show basic form and hide chat wizard
	$basiclink.on("click", function(event) {
		event.preventDefault();
		$container.stop().hide();

		$basic.stop().show();
		$basic.find("input:first").focus();
		$("body").removeClass("chtwzrd-noscroll");
	});

	// Show chat wizard and hide basic form
	$(".chtwzrd-link").on("click", function(event) {
		event.preventDefault();
		$basic.stop().hide();

		$focusedBeforechtwzrd = $(':focus');

		$bubble.find(".chtwzrd-bubble").removeClass("chtwzrd-trans-pulse");
		$bubble.find("p").hide().removeClass("chtwzrd-trans-left");

		$container.stop().show();
		$bubble.stop().hide();
		$(".chtwzrd-conversation").scrollTop($('.chtwzrd-history')[0].scrollHeight);
		$("body").addClass("chtwzrd-noscroll");

		var $firstTabStop = $minimize,
			$lastTabStop = $basiclink;

		// Listen for and trap the keyboard
		$container.on('keydown', function(event) {
			// Check for TAB key press, cycle through
			if(event.keyCode === 9) {
				if(event.shiftKey) {
					if($firstTabStop.is(':focus')) {
						event.preventDefault();
						$lastTabStop.focus();
					}
				} else {
					if($lastTabStop.is(':focus')) {
						event.preventDefault();
						$firstTabStop.focus();
					}
				}
			}
			// ESCAPE, close
			if (event.keyCode === 27) {
				$(".chtwzrd-min").click();
			}
		});

		$firstTabStop.focus();

		if(hasAnswered) {
			appendInteraction($form);
		}
	});

	// On button pressed: append answer, and on submit: redirect
	$(".chtwzrd-send").on("click", function(event) {
		if($(this).attr('type') != "submit") {
			event.preventDefault();
			var $choiceselected = $form.find("input:checked");
			if(!$choiceselected.length) {
				$choiceselected = $form.find('input:first');
				$choiceselected.attr('checked', true);
			}
			appendReply($form, $choiceselected);
		}
	});

	// Minimize chat wizard
	$minimize.on("click", function(event) {
		event.preventDefault();
		$container.stop().hide();
		$bubble.stop().show();
		$("body").removeClass("chtwzrd-noscroll");

		// Set focus back to element that had it before the modal was opened
		$focusedBeforechtwzrd.focus();
	});
}

// Builds the chat wizard skeleton
var buildchtwzrd = function($selector) {
	var title = 'I can help you find the information you need';

	$selector.after('<div class="chtwzrd-bubble-wrap"><p class="chtwzrd-trans-left">' + title + ' <a href="#" class="chtwzrd-notif-close" title="Close chat notification" role="button">×</a></p><a href="#chtwzrd-container" aria-controls="chtwzrd-container" class="chtwzrd-link chtwzrd-bubble chtwzrd-trans-pulse" role="button">Open chat wizard</a></div>');
	$selector.next('.chtwzrd-bubble-wrap').after('<aside class="modal-content overlay-def chtwzrd-container" aria-live="assertive"></a>');

	$container = $(".chtwzrd-container");
	$container.append('<header class="modal-header chtwzrd-header"><h2 class="modal-title chtwzrd-title">' + title + '</h2><button type="button" class="chtwzrd-min" title="Minimize chat wizard"><span class="glyphicon glyphicon-chevron-down"></span></button></header>');
	$container.append('<form class="modal-body chtwzrd-body" method="GET"></form>');

	$form = $(".chtwzrd-body");
	$form.append('<div class="chtwzrd-conversation mrgn-bttm-md"><section class="chtwzrd-history"><h3 class="wb-inv">Conversation history</h3></section><section class="chtwzrd-reply"><h3 class="wb-inv">Reply</h3><div class="chtwzrd-inputs"></div><div class="chtwzrd-validate"><p>Please select an option to continue.</p></div></section></div>');
	$form.append('<section class="chtwzrd-controls"><h3 class="wb-inv">Controls</h3><div class="row"><div class="col-xs-12"><button class="btn btn-primary btn-block chtwzrd-send" type="button">Send<span class="wb-inv"> reply and next</span></button></div></div><div class="row"><div class="col-xs-12 text-center mrgn-tp-sm"><a href="#chtwzrd-basic" class="btn btn-sm btn-link chtwzrd-basic-link" role="button">Switch to basic form</a></div></div></section>');

	$(".chtwzrd-conversation").scrollTop($('.chtwzrd-history')[0].scrollHeight);
}

// Adds new question from bot and add inputs accordingly
var appendInteraction = function($selector) {
	var $dropspot = $selector.find(".chtwzrd-history"),
		$inputsSpot = $selector.find(".chtwzrd-inputs"),
		$chtwzrdConvo = $(".chtwzrd-conversation"),
		questionnaire = datainput.header,
		$btnnext = $selector.find(".chtwzrd-send"),
		markup = (first != "" || intro != "" ? "p" : "h4");

	hasAnswered = false;
	$btnnext.prop('disabled', true);
	$inputsSpot.html('');

	// Faking delay and type time
	waitingBot($dropspot, markup);

	setTimeout(function () {
		// Show greetings on first occurence
		if(first != "") {
			$dropspot.find(".chtwzrd-question").last().html(questionnaire.starttext);
			first = "";
			appendInteraction($selector, false);
		} 
		// If intro is provided, show it before the first question
		else if(intro != "") {
			$dropspot.find(".chtwzrd-question").last().html(questionnaire.introtextwizard);
			intro = "";
			appendInteraction($selector);
		}
		// If it is the last question, then change the button to submit the form
		else if(current == "last") {
			var paramStr = "", 
				btnclasses = $btnnext.attr('class'); // For demo purposes

			for(var i=0; i<dataoutput.length; i++) {
				paramStr += dataoutput[i].qId + "=" + dataoutput[i].answer + '&';
			}
			paramStr = paramStr.slice(0, -1);
			$dropspot.find(".chtwzrd-question").last().html(questionnaire.endtext);
			//$btnnext.attr("type", "submit").prop('disabled', false).html(questionnaire.send + ' <span class="glyphicon glyphicon-chevron-right small"></span>');
			redirurl = "2019-15-exploration-chat-pattern-prototype-results.html";		// For demo purposes
			$btnnext.replaceWith('<a class="' + btnclasses + '" href="' + redirurl + '?' + paramStr + '">' + questionnaire.send + ' <span class="glyphicon glyphicon-chevron-right small"></span></a>');		// For demo purposes
			$selector.attr('action', redirurl + '?' + paramStr);
		} 
		// On every other occurences, append the question and its possible answers
		else {
			$dropspot.find(".chtwzrd-question").last().html(current.labelwizard);
			setTimeout(function () {
				$inputsSpot.append('<fieldset><legend class="wb-inv">' + current.labelwizard + '</legend><div class="row"><div class="col-xs-12"><ul class="list-inline mrgn-tp-sm chtwzrd-choices"></ul></div></div></fieldset>');
				for(var i=0; i<current.choices.length; i++) {
					iQuestion = current.choices[i];	
					$inputsSpot.find(".chtwzrd-choices").append('<li><label><input type="' + current.input + '" value="' + iQuestion.queryParam + '" name="' + current.queryName + '" data-chtwzrd-next="' + iQuestion.next + '"' + (typeof iQuestion.url === "undefined" ? '' : 'data-chtwzrd-url="' + iQuestion.url + '"') + ' /> <span>' + iQuestion.content + '</span></label></li>');
				}
				if($(".chtwzrd-reply").outerHeight() > ($chtwzrdConvo.innerHeight() - $(".chtwzrd-question:last")[0].scrollHeight)) {
					$chtwzrdConvo.stop().animate({scrollTop:$(".chtwzrd-history").outerHeight() - $(".chtwzrd-question:last")[0].scrollHeight - 30}, 500, 'swing');
				} else {
					$chtwzrdConvo.scrollTop($(".chtwzrd-history")[0].scrollHeight);
				}
				$inputsSpot.find('input:first').focus();
				$btnnext.prop('disabled', false);
			}, 750);
		}
		$chtwzrdConvo.scrollTop($(".chtwzrd-history")[0].scrollHeight);
	}, 1750);
}

// Waiting for the bot to type animation
var waitingBot = function($selector, markup){
	$selector.append('<div class="row mrgn-bttm-sm"><div class="col-xs-9"><' + markup + ' class="mrgn-tp-0 mrgn-bttm-sm"><span class="chtwzrd-avatar"></span><span class="chtwzrd-question"><span class="chtwzrd-loader" aria-label="Waiting for message"><span class="chtwzrd-loader-dot dot1"></span><span class="chtwzrd-loader-dot dot2"></span><span class="chtwzrd-loader-dot dot3"></span></span></span></' + markup + '></div></div>');
}

// Add reply from human and calls next question
var appendReply = function($selector, $answer) {
	$selector.find(".chtwzrd-send").prop('disabled', true);
	dataoutput.push({qId: current.queryName, answer: $answer.next().html()});	// Should be $answer.val()
	$dropspot = $selector.find(".chtwzrd-history");
	$dropspot.append('<div class="row mrgn-bttm-md"><div class="col-xs-9 col-xs-offset-3"><div class="chtwzrd-message text-right pull-right"><p class="mrgn-bttm-0">' + $answer.next("span").html() + '</p></div></div></div>');
	hasAnswered = true;
	setTimeout(function () {
		var next = $answer.data('chtwzrd-next');
		if(next == "none") {
			current = "last";
			//redirurl = $answer.data('chtwzrd-url');
			redirurl = $answer.data('chtwzrd-url');		// For demo purposes
		} else {
			current = datainput.questions[next];
		}
		$selector.find(".chtwzrd-inputs").remove("fieldset");
		appendInteraction($selector);
	}, 500);
}

// Translate Data attributes from the form and returns a Javascript Object
var translateToObject = function($selector) {
	var $form = $selector.find("form"),
		$intro = $form.children("p").first();
	var databuilt = {};

	databuilt.header = $form.data('wb-chtwzrd');

	/*if($intro.length) {
		databuilt.header.introtextwizard = $intro.data('wb-chtwzrd-intro');
		databuilt.header.introtextform = $intro.html();
	}*/
	databuilt.questions = {};

	$selector.find("fieldset").each(function() {
		var $question = $(this).find("legend"),
			$choices = $(this).find("li"),
			choices = [],
			qdata = $question.data('wb-chtwzrd-q'),
			questionID = 0;

		$choices.each(function(index) {
			var $choice = $(this).find("label"),
				$input = $choice.find("input"),
				textval = $input.next().html();

			if(!index) {
				questionID = $input.attr("name");
			}

			var choice = $choice.data('wb-chtwzrd-a');
			choice.content = textval;
			choice.queryParam = $input.val();
			choices.push(choice);
		});
		databuilt.questions[questionID] = qdata;
		databuilt.questions[questionID].labelform = $question.html();
		databuilt.questions[questionID].choices = choices;
	});
	return databuilt;
}

// Initiator here, let's go!
if($(".wb-chtwzrd").length) {
	$chtwzrd = $(".wb-chtwzrd");
	initiatechtwzrd($chtwzrd, 'form');
}
</script>

{% endraw %}

{:/}