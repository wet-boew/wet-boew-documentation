---
published: true
layout: default-theme-wet-boew-en
title: 2019-15 - Exploration of a chat like design pattern
description: Exploration of a chat like design pattern
languages: false
hide_breadcrumb: false
date_modified: 2020-01-13
---

Prototype 3: Actually needs to understand data at this point.

{::nomarkdown}

{% raw %}

<!-- Chatbot -->
<style>
	@-webkit-keyframes grow {
		0% {
			-ms-transform: scale(0, 1);
			-webkit-transform: scale(0, 1);
			transform: scale(0, 1);
		}
		38% {
			-ms-transform: scale(0, 1);
			-webkit-transform: scale(0, 1);
			transform: scale(0, 1);
		}
		40% {
			-ms-transform: scale(1, 1);
			-webkit-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		88% {
			-ms-transform: scale(1, 1);
			-webkit-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		90% {
			-ms-transform: scale(0, 1);
			-webkit-transform: scale(0, 1);
			transform: scale(0, 1);
		}
		100% {
			-ms-transform: scale(0, 1);
			-webkit-transform: scale(0, 1);
			transform: scale(0, 1);
		}
	}
	@keyframes slideInFromRight {
		0% {
			-ms-transform: scale(0, 1);
			-webkit-transform: scale(0, 1);
			transform: scale(0, 1);
		}
		38% {
			-ms-transform: scale(0, 1);
			-webkit-transform: scale(0, 1);
			transform: scale(0, 1);
		}
		40% {
			-ms-transform: scale(1, 1);
			-webkit-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		88% {
			-ms-transform: scale(1, 1);
			-webkit-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		90% {
			-ms-transform: scale(0, 1);
			-webkit-transform: scale(0, 1);
			transform: scale(0, 1);
		}
		100% {
			-ms-transform: scale(0, 1);
			-webkit-transform: scale(0, 1);
			transform: scale(0, 1);
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
	.chtbt-trans-left {
		will-change:  scroll-position;
		animation: 15s ease-out 0s 1 slideInFromRight;
		transform-origin: 100% 50%;
	}
	.chtbt-trans-pulse {
		will-change: transform;
		animation: 0.5s linear 4s 1 pulseIn, 0.5s linear 11s 1 pulseIn, 0.5s linear 30s 1 pulseIn;
	}
	.chtbt-bubble-wrap {
		width: 60px;
		height: 60px;
		position: fixed;
		bottom: 30px;
		right: 30px;
		z-index: 1049;
	}
	.chtbt-bubble-wrap p {
		position: relative;
		top: 5px;
		right: 190px;
		width: 220px;
		font-size: 0.9em;
		background: #335075;
		color: #fff;
		padding: 5px 50px 5px 25px;
		line-height: 20px;
		height: 50px;
		border-top-left-radius: 25px;
		border-bottom-left-radius: 25px;
	}
	.chtbt-bubble {
		width: 100%;
		height: 100%;
		position: absolute;
		bottom: 0;
		right: 0;
		background: #fff url('bot/assets/bot-default-avatar.png') center no-repeat;
		border-radius: 50%;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.45);
		text-indent: -9999px;
		overflow: hidden;
		white-space: nowrap;
	}
	.chtbt-container {
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
		.chtbt-container {
			width: 35%;
		}
	}
	@media screen and (max-width: 992px) {
		.chtbt-container {
			width: 45%;
		}
	}
	@media screen and (max-width: 768px) {
		.chtbt-container {
			width: 100%;
			height: 100%;
			padding: 0;
			margin: 0;
			bottom: 0;
			right: 0;
		}
		.chtbt-conversation {
			max-height: 350px;
		}
		.chtbt-noscroll {
			overflow: hidden !important;
		}
	}
	.chtbt-min {
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
	.chtbt-min:focus {
		outline: 1px dotted #fff;
		outline-offset: -2px;
		opacity: 1;
	}
	.chtbt-conversation {
		overflow-y: auto;
		overflow-x: hidden;
		max-height: 500px;
		min-height: 200px;
	}
	.chtbt-history {
		padding-top: 15px;
	}
	.chtbt-history::before {
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
	.chtbt-inputs fieldset:first-child {
		border-top: 1px solid #e5e5e5;
	}
	.chtbt-inputs ul:last-child {
		margin-bottom: 0;
	}
	.chtbt-container h4, .chtbt-container legend {
		font-size: 1em;
	}
	.chtbt-question, .chtbt-message, .chtbt-container label {
		padding: 8px 12px;
		border-radius: 15px;
		color: #595a5a;
		width: auto;
		font-weight: normal;
	}
	.chtbt-question {
		background-color: #ececec;
		min-width: 60px;
		position: relative;
	}
	.chtbt-message, .chtbt-container label {
		background-color: #dfdfdf;
	}
	.chtbt-message {
		margin-right: 15px;
	}
	.chtbt-container label {
		border: 1px solid #aaa;
		font-weight: bold;
	}
	.chtbt-avatar, .chtbt-question {
		display: table-cell;
		vertical-align: middle;
	}
	.chtbt-avatar {
		width: 30px;
		height: 30px;
		background-color: #fff;
		background-image: url('bot/assets/bot-default-avatar.png');
		background-size: 25px;
		background-repeat: no-repeat;
		background-position: center;
	}
	.chtbt-basic-link {
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
	.chtbt-loader {
		width: 26px;
		height: 6px;
		position: absolute;
		top: 50%;
		left: 30px;
		-webkit-transform: translateX(-50%) translateY(-50%);
		transform: translateX(-50%) translateY(-50%);
	}
	.chtbt-loader-dot {
		will-change: transform;
		height: 6px;
		width: 6px;
		border-radius: 50%;
		background-color: #444;
		position: absolute;
		-webkit-animation: grow 0.5s ease-in-out infinite alternate;
		animation: grow 0.5s ease-in-out infinite alternate;
	}
	.chtbt-loader-dot.dot1 {
		left: 0;
		-webkit-transform-origin: 100% 50%;
		transform-origin: 100% 50%;
	}
	.chtbt-loader-dot.dot2 {
		left: 50%;
		-webkit-transform: translateX(-50%) scale(1);
		transform: translateX(-50%) scale(1);
		-webkit-animation-delay: 0.1s;
		animation-delay: 0.1s;
	}
	.chtbt-loader-dot.dot3 {
		right: 0;
		-webkit-animation-delay: 0.2s;
		animation-delay: 0.2s;
	}
</style>

<div class="container wb-chtbt chtbt-basic">
	<div class="row">
		<section class="col-md-12">
			<h2>Help us help you</h2>
			<form class="mrgn-bttm-xl" data-wb-chtbt='{"action":"search", "send":"Show results"}'>
				<fieldset>
					<legend id="q1" data-wb-chtbt-q="Are you:">What would you describe yourself as?</legend>
					<ul class="list-unstyled mrgn-tp-md">
						<li>
							<label data-wb-chtbt-a='{"next":"#q2","url":"page1.html"}'>
								<input type="radio" value="young-canadian" name="q1" />
								a young Canadian
							</label>
						</li>
						<li>
							<label data-wb-chtbt-a='{"url":"page2.html"}'>
								<input type="radio" value="employer-organization-funding-support-youth" name="q1" />
								an employer or organization looking for funding to support youth
							</label>
						</li>
					</ul>
				</fieldset>
				<fieldset>
					<legend id="q2" data-wb-chtbt-q="Great! And are you:">In what situation are you?</legend>
					<ul class="list-unstyled mrgn-tp-md">
						<li>
							<label data-wb-chtbt-a='{"next":"#q3","url":"page1.html"}'>
								<input type="radio" value="high-school" name="q2" />
								a high school student
							</label>
						</li>
						<li>
							<label data-wb-chtbt-a='{"next":"#q3","url":"page1.html"}'>
								<input type="radio" value="cegep-student" name="q2" />
								a CÉGEP student
							</label>
						</li>
						<li>
							<label data-wb-chtbt-a='{"next":"#q3","url":"page1.html"}'>
								<input type="radio" value="post-secondary" name="q2" />
								a post-secondary school student
							</label>
						</li>
						<li>
							<label data-wb-chtbt-a='{"next":"#q3","url":"page1.html"}'>
								<input type="radio" value="ready-start-career" name="q2" />
								ready to start a career
							</label>
						</li>
						<li>
							<label data-wb-chtbt-a='{"next":"#q3","url":"page1.html"}'>
								<input type="radio" value="not-school-not-working" name="q2" />
								not in school and not working
							</label>
						</li>
						<li>
							<label data-wb-chtbt-a='{"next":"#q3","url":"page1.html"}'>
								<input type="radio" value="none" name="q2" />
								none of these
							</label>
						</li>
					</ul>
				</fieldset>
				<fieldset>
					<legend data-wb-chtbt-q="Awesome! And would you like to:">What is your goal?</legend>
					<ul class="list-unstyled mrgn-tp-md">
						<li>
							<label data-wb-chtbt-a='{"url":"page3.html"}'>
								<input type="radio" value="get-job" name="q3" />
								get a job
							</label>
						</li>
						<li>
							<label data-wb-chtbt-a='{"url":"page4.html"}'>
								<input type="radio" value="develop-skills" name="q3" />
								develop skills
							</label>
						</li>
						<li>
							<label data-wb-chtbt-a='{"url":"page5.html"}'>
								<input type="radio" value="explore-careers" name="q3" />
								explore careers
							</label>
						</li>
						<li>
							<label data-wb-chtbt-a='{"url":"page6.html"}'>
								<input type="radio" value="post-secondary-education" name="q3" />
								attend post-secondary education
							</label>
						</li>
						<li>
							<label data-wb-chtbt-a='{"url":"page7.html"}'>
								<input type="radio" value="serve-community" name="q3" />
								serve your community
							</label>
						</li>
						<li>
							<label data-wb-chtbt-a='{"url":"page8.html"}'>
								<input type="radio" value="get-experience" name="q3" />
								get an experience
							</label>
						</li>
						<li>
							<label data-wb-chtbt-a='{"url":"page1.html"}'>
								<input type="radio" value="everything" name="q3" />
								see everything
							</label>
						</li>
					</ul>
				</fieldset>
				<button type="submit" class="btn btn-sm btn-default chtbt-link">Switch to help wizard</button>
				<button type="submit" class="btn btn-sm btn-primary" data-chtbt-end="Thank you. I have built a built a page with results you may find resourceful.">Search</button>
			</form>
		</section>
	</div>
</div>

<!-- Chat bot -->
<script>
// If chatbot is found, initiate
function initiateChtbt($selector) {
	buildChtbt($selector);

	var $basic = $(".chtbt-basic"),
		$bubble = $(".chtbt-bubble-wrap"),
		$container = $(".chtbt-container");

	$basic.hide();
	$bubble.fadeIn('slow');

	setTimeout(function () {
		$bubble.find('p').hide();
	}, 14850);

	// Show basic form and hide chatbot
	$(".chtbt-basic-link").on("click", function(event) {
		event.preventDefault();
		$container.stop().hide();

		$basic.stop().show();
		$basic.find("input:first").focus();
		$("body").removeClass("chtbt-noscroll");
	});

	// Show chatbot and hide basic form
	$(".chtbt-link").on("click", function(event) {
		event.preventDefault();
		$basic.stop().hide();

		$bubble.find(".chtbt-bubble").removeClass("chtbt-trans-pulse");
		$bubble.find("p").hide().removeClass("chtbt-trans-left");

		$container.stop().show();
		$bubble.stop().hide();
		$(".chtbt-conversation").scrollTop($('.chtbt-history')[0].scrollHeight);
		$("body").addClass("chtbt-noscroll");
	});

	// Minimize chatbot
	$(".chtbt-min").on("click", function(event) {
		event.preventDefault();
		$container.stop().hide();
		$bubble.stop().show();
		$("body").removeClass("chtbt-noscroll");
	});
}

// Builds the chatbot skeleton
function buildChtbt($selector) {
	$selector.after('<div class="chtbt-bubble-wrap"><p class="chtbt-trans-left">I can help you find the information you need</p><a href="#chtbt-container" aria-controls="chtbt-container" class="chtbt-link chtbt-bubble chtbt-trans-pulse" role="button">Toggle help wizard</a></div>');
	$selector.next('.chtbt-bubble-wrap').after('<aside class="modal-content overlay-def chtbt-container"></a>');

	$container = $(".chtbt-container");
	$container.append('<header class="modal-header chtbt-header"><h2 class="modal-title chtbt-title">I can help you find the information you need</h2><button type="button" class="chtbt-min" title="Minimize help wizard"><span class="glyphicon glyphicon-chevron-down"></span></button></header>');
	$container.append('<form class="modal-body chtbt-body"></form>');

	$form = $(".chtbt-body");
	$form.append('<div class="chtbt-conversation mrgn-bttm-md"><section class="chtbt-history"><h3 class="wb-inv">Conversation history</h3></section><section class="chtbt-reply"><h3 class="wb-inv">Reply</h3><div class="chtbt-inputs"></div></section></div>');
	$form.append('<section class="chtbt-controls"><h3 class="wb-inv">Controls</h3><div class="row"><div class="col-xs-12"><button type="submit" class="btn btn-primary btn-block" type="button">Send</button></div></div><div class="row"><div class="col-xs-12 text-center mrgn-tp-sm"><a href="#chtbt-basic" class="btn btn-sm btn-link chtbt-basic-link" role="button">Switch to basic form</a></div></div></section>');

	appendInteraction($form, 'Hi! I can help direct you to programs and services you might be interested in. Would you like to get started by answering a few questions?');
	$(".chtbt-conversation").scrollTop($('.chtbt-history')[0].scrollHeight);
}

// Manage new back'n'forth
function appendInteraction($selector, content, interactions) {
	$dropspot = $selector.find(".chtbt-history");
	$dropspot.append('<div class="row mrgn-bttm-sm"><div class="col-xs-9"><h4 class="mrgn-tp-0 mrgn-bttm-sm"><span class="chtbt-avatar"></span><span class="chtbt-question"><span class="chtbt-loader"><span class="chtbt-loader-dot dot1"></span><span class="chtbt-loader-dot dot2"></span><span class="chtbt-loader-dot dot3"></span></span></span></h4></div></div>');
	setTimeout(function () {
		$dropspot.find(".chtbt-question:last-child").html(content);
		setTimeout(function () {
			$selector.find(".chtbt-inputs").append('<fieldset><legend class="wb-inv">Are you:</legend><div class="row"><div class="col-xs-12"><ul class="list-inline mrgn-tp-sm"><li><label><input type="radio" value="young" name="q2" /> a young Canadian</label></li><li><label><input type="radio" value="emloyer" name="q2" /> an employer or organization looking for funding to support youth</label></li></ul></div></div></fieldset>');
			if($(".chtbt-reply").outerHeight() > ($(".chtbt-conversation").innerHeight() - $(".chtbt-question:last")[0].scrollHeight)) {
				$(".chtbt-conversation").stop().animate({scrollTop:$(".chtbt-history").outerHeight() - $(".chtbt-question:last")[0].scrollHeight - 30}, 500, 'swing');
			} else {
				$(".chtbt-conversation").scrollTop($(".chtbt-history")[0].scrollHeight);
			}
		}, 1500);
		$(".chtbt-conversation").scrollTop($(".chtbt-history")[0].scrollHeight);
	}, 3000);
}
function appendReply($selector, content) {
	$dropspot = $selector.find(".chtbt-history");
	$dropspot.append('<div class="row mrgn-bttm-md"><div class="col-xs-9 col-xs-offset-3"><div class="chtbt-message text-right pull-right"><p class="mrgn-bttm-0">Yes, I am ready.</p></div></div></div>');
}

var qdata = [
	{
		question: "q1",
		label: "Are you:",
		choices: [
			{
				content: "a young Canadian",
				value: "young-canadian",
				next: "#q2",
				url: "page1.html"
			},
			{
				content: "an employer or organization looking for funding to support youth",
				value: "employer-organization-funding-support-youth",
				next: false,
				url: "page2.html"
			}
		]
	}
];

var qdata2 = {
	question: "q1",
	label: "Are you:",
	choices: [
		{
			content: "a young Canadian",
			value: "young-canadian",
			next: "#q2",
			url: "page1.html"
		},
		{
			content: "an employer or organization looking for funding to support youth",
			value: "employer-organization-funding-support-youth",
			next: false,
			url: "page2.html"
		}
	]
};


if($(".wb-chtbt").length) {
	$chtbt = $(".wb-chtbt");
	initiateChtbt($chtbt);
}
</script>
<code>
<pre>
&lt;!-- Chatbot --&gt;
&lt;style&gt;
	@-webkit-keyframes grow {
		0% {
			-ms-transform: scale(0, 1);
			-webkit-transform: scale(0, 1);
			transform: scale(0, 1);
		}
		38% {
			-ms-transform: scale(0, 1);
			-webkit-transform: scale(0, 1);
			transform: scale(0, 1);
		}
		40% {
			-ms-transform: scale(1, 1);
			-webkit-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		88% {
			-ms-transform: scale(1, 1);
			-webkit-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		90% {
			-ms-transform: scale(0, 1);
			-webkit-transform: scale(0, 1);
			transform: scale(0, 1);
		}
		100% {
			-ms-transform: scale(0, 1);
			-webkit-transform: scale(0, 1);
			transform: scale(0, 1);
		}
	}
	@keyframes slideInFromRight {
		0% {
			-ms-transform: scale(0, 1);
			-webkit-transform: scale(0, 1);
			transform: scale(0, 1);
		}
		38% {
			-ms-transform: scale(0, 1);
			-webkit-transform: scale(0, 1);
			transform: scale(0, 1);
		}
		40% {
			-ms-transform: scale(1, 1);
			-webkit-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		88% {
			-ms-transform: scale(1, 1);
			-webkit-transform: scale(1, 1);
			transform: scale(1, 1);
		}
		90% {
			-ms-transform: scale(0, 1);
			-webkit-transform: scale(0, 1);
			transform: scale(0, 1);
		}
		100% {
			-ms-transform: scale(0, 1);
			-webkit-transform: scale(0, 1);
			transform: scale(0, 1);
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
	.chtbt-trans-left {
		will-change:  scroll-position;
		animation: 15s ease-out 0s 1 slideInFromRight;
		transform-origin: 100% 50%;
	}
	.chtbt-trans-pulse {
		will-change: transform;
		animation: 0.5s linear 4s 1 pulseIn, 0.5s linear 11s 1 pulseIn, 0.5s linear 30s 1 pulseIn;
	}
	.chtbt-bubble-wrap {
		width: 60px;
		height: 60px;
		position: fixed;
		bottom: 30px;
		right: 30px;
		z-index: 1049;
	}
	.chtbt-bubble-wrap p {
		position: relative;
		top: 5px;
		right: 190px;
		width: 220px;
		font-size: 0.9em;
		background: #335075;
		color: #fff;
		padding: 5px 50px 5px 25px;
		line-height: 20px;
		height: 50px;
		border-top-left-radius: 25px;
		border-bottom-left-radius: 25px;
	}
	.chtbt-bubble {
		width: 100%;
		height: 100%;
		position: absolute;
		bottom: 0;
		right: 0;
		background: #fff url('bot/assets/bot-default-avatar.png') center no-repeat;
		border-radius: 50%;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.45);
		text-indent: -9999px;
		overflow: hidden;
		white-space: nowrap;
	}
	.chtbt-container {
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
		.chtbt-container {
			width: 35%;
		}
	}
	@media screen and (max-width: 992px) {
		.chtbt-container {
			width: 45%;
		}
	}
	@media screen and (max-width: 768px) {
		.chtbt-container {
			width: 100%;
			height: 100%;
			padding: 0;
			margin: 0;
			bottom: 0;
			right: 0;
		}
		.chtbt-conversation {
			max-height: 350px;
		}
		.chtbt-noscroll {
			overflow: hidden !important;
		}
	}
	.chtbt-min {
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
	.chtbt-min:focus {
		outline: 1px dotted #fff;
		outline-offset: -2px;
		opacity: 1;
	}
	.chtbt-conversation {
		overflow-y: auto;
		overflow-x: hidden;
		max-height: 500px;
		min-height: 200px;
	}
	.chtbt-history {
		padding-top: 15px;
	}
	.chtbt-history::before {
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
	.chtbt-inputs fieldset:first-child {
		border-top: 1px solid #e5e5e5;
	}
	.chtbt-inputs ul:last-child {
		margin-bottom: 0;
	}
	.chtbt-container h4, .chtbt-container legend {
		font-size: 1em;
	}
	.chtbt-question, .chtbt-message, .chtbt-container label {
		padding: 8px 12px;
		border-radius: 15px;
		color: #595a5a;
		width: auto;
		font-weight: normal;
	}
	.chtbt-question {
		background-color: #ececec;
		min-width: 60px;
		position: relative;
	}
	.chtbt-message, .chtbt-container label {
		background-color: #dfdfdf;
	}
	.chtbt-message {
		margin-right: 15px;
	}
	.chtbt-container label {
		border: 1px solid #aaa;
		font-weight: bold;
	}
	.chtbt-avatar, .chtbt-question {
		display: table-cell;
		vertical-align: middle;
	}
	.chtbt-avatar {
		width: 30px;
		height: 30px;
		background-color: #fff;
		background-image: url('bot/assets/bot-default-avatar.png');
		background-size: 25px;
		background-repeat: no-repeat;
		background-position: center;
	}
	.chtbt-basic-link {
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
	.chtbt-loader {
		width: 26px;
		height: 6px;
		position: absolute;
		top: 50%;
		left: 30px;
		-webkit-transform: translateX(-50%) translateY(-50%);
		transform: translateX(-50%) translateY(-50%);
	}
	.chtbt-loader-dot {
		will-change: transform;
		height: 6px;
		width: 6px;
		border-radius: 50%;
		background-color: #444;
		position: absolute;
		-webkit-animation: grow 0.5s ease-in-out infinite alternate;
		animation: grow 0.5s ease-in-out infinite alternate;
	}
	.chtbt-loader-dot.dot1 {
		left: 0;
		-webkit-transform-origin: 100% 50%;
		transform-origin: 100% 50%;
	}
	.chtbt-loader-dot.dot2 {
		left: 50%;
		-webkit-transform: translateX(-50%) scale(1);
		transform: translateX(-50%) scale(1);
		-webkit-animation-delay: 0.1s;
		animation-delay: 0.1s;
	}
	.chtbt-loader-dot.dot3 {
		right: 0;
		-webkit-animation-delay: 0.2s;
		animation-delay: 0.2s;
	}
&lt;/style&gt;

&lt;div class="container wb-chtbt chtbt-basic"&gt;
	&lt;div class="row"&gt;
		&lt;section class="col-md-12"&gt;
			&lt;h2&gt;Help us help you&lt;/h2&gt;
			&lt;form class="mrgn-bttm-xl" data-wb-chtbt='{"action":"search", "send":"Show results"}'&gt;
				&lt;fieldset&gt;
					&lt;legend id="q1" data-wb-chtbt-q="Are you:"&gt;What would you describe yourself as?&lt;/legend&gt;
					&lt;ul class="list-unstyled mrgn-tp-md"&gt;
						&lt;li&gt;
							&lt;label data-wb-chtbt-a='{"next":"#q2","url":"page1.html"}'&gt;
								&lt;input type="radio" value="young-canadian" name="q1" /&gt;
								a young Canadian
							&lt;/label&gt;
						&lt;/li&gt;
						&lt;li&gt;
							&lt;label data-wb-chtbt-a='{"url":"page2.html"}'&gt;
								&lt;input type="radio" value="employer-organization-funding-support-youth" name="q1" /&gt;
								an employer or organization looking for funding to support youth
							&lt;/label&gt;
						&lt;/li&gt;
					&lt;/ul&gt;
				&lt;/fieldset&gt;
				&lt;fieldset&gt;
					&lt;legend id="q2" data-wb-chtbt-q="Great! And are you:"&gt;In what situation are you?&lt;/legend&gt;
					&lt;ul class="list-unstyled mrgn-tp-md"&gt;
						&lt;li&gt;
							&lt;label data-wb-chtbt-a='{"next":"#q3","url":"page1.html"}'&gt;
								&lt;input type="radio" value="high-school" name="q2" /&gt;
								a high school student
							&lt;/label&gt;
						&lt;/li&gt;
						&lt;li&gt;
							&lt;label data-wb-chtbt-a='{"next":"#q3","url":"page1.html"}'&gt;
								&lt;input type="radio" value="cegep-student" name="q2" /&gt;
								a CÉGEP student
							&lt;/label&gt;
						&lt;/li&gt;
						&lt;li&gt;
							&lt;label data-wb-chtbt-a='{"next":"#q3","url":"page1.html"}'&gt;
								&lt;input type="radio" value="post-secondary" name="q2" /&gt;
								a post-secondary school student
							&lt;/label&gt;
						&lt;/li&gt;
						&lt;li&gt;
							&lt;label data-wb-chtbt-a='{"next":"#q3","url":"page1.html"}'&gt;
								&lt;input type="radio" value="ready-start-career" name="q2" /&gt;
								ready to start a career
							&lt;/label&gt;
						&lt;/li&gt;
						&lt;li&gt;
							&lt;label data-wb-chtbt-a='{"next":"#q3","url":"page1.html"}'&gt;
								&lt;input type="radio" value="not-school-not-working" name="q2" /&gt;
								not in school and not working
							&lt;/label&gt;
						&lt;/li&gt;
						&lt;li&gt;
							&lt;label data-wb-chtbt-a='{"next":"#q3","url":"page1.html"}'&gt;
								&lt;input type="radio" value="none" name="q2" /&gt;
								none of these
							&lt;/label&gt;
						&lt;/li&gt;
					&lt;/ul&gt;
				&lt;/fieldset&gt;
				&lt;fieldset&gt;
					&lt;legend data-wb-chtbt-q="Awesome! And would you like to:"&gt;What is your goal?&lt;/legend&gt;
					&lt;ul class="list-unstyled mrgn-tp-md"&gt;
						&lt;li&gt;
							&lt;label data-wb-chtbt-a='{"url":"page3.html"}'&gt;
								&lt;input type="radio" value="get-job" name="q3" /&gt;
								get a job
							&lt;/label&gt;
						&lt;/li&gt;
						&lt;li&gt;
							&lt;label data-wb-chtbt-a='{"url":"page4.html"}'&gt;
								&lt;input type="radio" value="develop-skills" name="q3" /&gt;
								develop skills
							&lt;/label&gt;
						&lt;/li&gt;
						&lt;li&gt;
							&lt;label data-wb-chtbt-a='{"url":"page5.html"}'&gt;
								&lt;input type="radio" value="explore-careers" name="q3" /&gt;
								explore careers
							&lt;/label&gt;
						&lt;/li&gt;
						&lt;li&gt;
							&lt;label data-wb-chtbt-a='{"url":"page6.html"}'&gt;
								&lt;input type="radio" value="post-secondary-education" name="q3" /&gt;
								attend post-secondary education
							&lt;/label&gt;
						&lt;/li&gt;
						&lt;li&gt;
							&lt;label data-wb-chtbt-a='{"url":"page7.html"}'&gt;
								&lt;input type="radio" value="serve-community" name="q3" /&gt;
								serve your community
							&lt;/label&gt;
						&lt;/li&gt;
						&lt;li&gt;
							&lt;label data-wb-chtbt-a='{"url":"page8.html"}'&gt;
								&lt;input type="radio" value="get-experience" name="q3" /&gt;
								get an experience
							&lt;/label&gt;
						&lt;/li&gt;
						&lt;li&gt;
							&lt;label data-wb-chtbt-a='{"url":"page1.html"}'&gt;
								&lt;input type="radio" value="everything" name="q3" /&gt;
								see everything
							&lt;/label&gt;
						&lt;/li&gt;
					&lt;/ul&gt;
				&lt;/fieldset&gt;
				&lt;button type="submit" class="btn btn-sm btn-default chtbt-link"&gt;Switch to help wizard&lt;/button&gt;
				&lt;button type="submit" class="btn btn-sm btn-primary" data-chtbt-end="Thank you. I have built a built a page with results you may find resourceful."&gt;Search&lt;/button&gt;
			&lt;/form&gt;
		&lt;/section&gt;
	&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Chat bot --&gt;
&lt;script&gt;
// If chatbot is found, initiate
function initiateChtbt($selector) {
	buildChtbt($selector);

	var $basic = $(".chtbt-basic"),
		$bubble = $(".chtbt-bubble-wrap"),
		$container = $(".chtbt-container");

	$basic.hide();
	$bubble.fadeIn('slow');

	setTimeout(function () {
		$bubble.find('p').hide();
	}, 14850);

	// Show basic form and hide chatbot
	$(".chtbt-basic-link").on("click", function(event) {
		event.preventDefault();
		$container.stop().hide();

		$basic.stop().show();
		$basic.find("input:first").focus();
		$("body").removeClass("chtbt-noscroll");
	});

	// Show chatbot and hide basic form
	$(".chtbt-link").on("click", function(event) {
		event.preventDefault();
		$basic.stop().hide();

		$bubble.find(".chtbt-bubble").removeClass("chtbt-trans-pulse");
		$bubble.find("p").hide().removeClass("chtbt-trans-left");

		$container.stop().show();
		$bubble.stop().hide();
		$(".chtbt-conversation").scrollTop($('.chtbt-history')[0].scrollHeight);
		$("body").addClass("chtbt-noscroll");
	});

	// Minimize chatbot
	$(".chtbt-min").on("click", function(event) {
		event.preventDefault();
		$container.stop().hide();
		$bubble.stop().show();
		$("body").removeClass("chtbt-noscroll");
	});
}

// Builds the chatbot skeleton
function buildChtbt($selector) {
	$selector.after('&lt;div class="chtbt-bubble-wrap"&gt;&lt;p class="chtbt-trans-left"&gt;I can help you find the information you need&lt;/p&gt;&lt;a href="#chtbt-container" aria-controls="chtbt-container" class="chtbt-link chtbt-bubble chtbt-trans-pulse" role="button"&gt;Toggle help wizard&lt;/a&gt;&lt;/div&gt;');
	$selector.next('.chtbt-bubble-wrap').after('&lt;aside class="modal-content overlay-def chtbt-container"&gt;&lt;/a&gt;');

	$container = $(".chtbt-container");
	$container.append('&lt;header class="modal-header chtbt-header"&gt;&lt;h2 class="modal-title chtbt-title"&gt;I can help you find the information you need&lt;/h2&gt;&lt;button type="button" class="chtbt-min" title="Minimize help wizard"&gt;&lt;span class="glyphicon glyphicon-chevron-down"&gt;&lt;/span&gt;&lt;/button&gt;&lt;/header&gt;');
	$container.append('&lt;form class="modal-body chtbt-body"&gt;&lt;/form&gt;');

	$form = $(".chtbt-body");
	$form.append('&lt;div class="chtbt-conversation mrgn-bttm-md"&gt;&lt;section class="chtbt-history"&gt;&lt;h3 class="wb-inv"&gt;Conversation history&lt;/h3&gt;&lt;/section&gt;&lt;section class="chtbt-reply"&gt;&lt;h3 class="wb-inv"&gt;Reply&lt;/h3&gt;&lt;div class="chtbt-inputs"&gt;&lt;/div&gt;&lt;/section&gt;&lt;/div&gt;');
	$form.append('&lt;section class="chtbt-controls"&gt;&lt;h3 class="wb-inv"&gt;Controls&lt;/h3&gt;&lt;div class="row"&gt;&lt;div class="col-xs-12"&gt;&lt;button type="submit" class="btn btn-primary btn-block" type="button"&gt;Send&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class="row"&gt;&lt;div class="col-xs-12 text-center mrgn-tp-sm"&gt;&lt;a href="#chtbt-basic" class="btn btn-sm btn-link chtbt-basic-link" role="button"&gt;Switch to basic form&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;&lt;/section&gt;');

	appendInteraction($form, 'Hi! I can help direct you to programs and services you might be interested in. Would you like to get started by answering a few questions?');
	$(".chtbt-conversation").scrollTop($('.chtbt-history')[0].scrollHeight);
}

// Manage new back'n'forth
function appendInteraction($selector, content, interactions) {
	$dropspot = $selector.find(".chtbt-history");
	$dropspot.append('&lt;div class="row mrgn-bttm-sm"&gt;&lt;div class="col-xs-9"&gt;&lt;h4 class="mrgn-tp-0 mrgn-bttm-sm"&gt;&lt;span class="chtbt-avatar"&gt;&lt;/span&gt;&lt;span class="chtbt-question"&gt;&lt;span class="chtbt-loader"&gt;&lt;span class="chtbt-loader-dot dot1"&gt;&lt;/span&gt;&lt;span class="chtbt-loader-dot dot2"&gt;&lt;/span&gt;&lt;span class="chtbt-loader-dot dot3"&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/h4&gt;&lt;/div&gt;&lt;/div&gt;');
	setTimeout(function () {
		$dropspot.find(".chtbt-question:last-child").html(content);
		setTimeout(function () {
			$selector.find(".chtbt-inputs").append('&lt;fieldset&gt;&lt;legend class="wb-inv"&gt;Are you:&lt;/legend&gt;&lt;div class="row"&gt;&lt;div class="col-xs-12"&gt;&lt;ul class="list-inline mrgn-tp-sm"&gt;&lt;li&gt;&lt;label&gt;&lt;input type="radio" value="young" name="q2" /&gt; a young Canadian&lt;/label&gt;&lt;/li&gt;&lt;li&gt;&lt;label&gt;&lt;input type="radio" value="emloyer" name="q2" /&gt; an employer or organization looking for funding to support youth&lt;/label&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;/div&gt;&lt;/fieldset&gt;');
			if($(".chtbt-reply").outerHeight() &gt; ($(".chtbt-conversation").innerHeight() - $(".chtbt-question:last")[0].scrollHeight)) {
				$(".chtbt-conversation").stop().animate({scrollTop:$(".chtbt-history").outerHeight() - $(".chtbt-question:last")[0].scrollHeight - 30}, 500, 'swing');
			} else {
				$(".chtbt-conversation").scrollTop($(".chtbt-history")[0].scrollHeight);
			}
		}, 1500);
		$(".chtbt-conversation").scrollTop($(".chtbt-history")[0].scrollHeight);
	}, 3000);
}
function appendReply($selector, content) {
	$dropspot = $selector.find(".chtbt-history");
	$dropspot.append('&lt;div class="row mrgn-bttm-md"&gt;&lt;div class="col-xs-9 col-xs-offset-3"&gt;&lt;div class="chtbt-message text-right pull-right"&gt;&lt;p class="mrgn-bttm-0"&gt;Yes, I am ready.&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;');
}

var qdata = [
	{
		question: "q1",
		label: "Are you:",
		choices: [
			{
				content: "a young Canadian",
				value: "young-canadian",
				next: "#q2",
				url: "page1.html"
			},
			{
				content: "an employer or organization looking for funding to support youth",
				value: "employer-organization-funding-support-youth",
				next: false,
				url: "page2.html"
			}
		]
	}
];

var qdata2 = {
	question: "q1",
	label: "Are you:",
	choices: [
		{
			content: "a young Canadian",
			value: "young-canadian",
			next: "#q2",
			url: "page1.html"
		},
		{
			content: "an employer or organization looking for funding to support youth",
			value: "employer-organization-funding-support-youth",
			next: false,
			url: "page2.html"
		}
	]
};


if($(".wb-chtbt").length) {
	$chtbt = $(".wb-chtbt");
	initiateChtbt($chtbt);
}
&lt;/script&gt;
</code>
</pre>

{% endraw %}

{:/}
