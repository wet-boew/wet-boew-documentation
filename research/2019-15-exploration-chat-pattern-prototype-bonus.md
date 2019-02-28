---
published: true
layout: default-theme-wet-boew-en
title: 2019-15 - Chat Wizard
description: Chat Wizard Up-to-date
modified: 2019-02-14
---

{::nomarkdown}

{% raw %}

<!-- Chat wizard -->
<style>
/* Animations */
@-webkit-keyframes slideInFromRight {
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
@-webkit-keyframes pulseIn {
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

/* Styling */
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
	font-size: 0.9em;
	background: #335075;
	color: #fff;
	padding: 5px 45px 5px 30px;
	line-height: 20px;
	min-height: 50px;
	border-top-left-radius: 25px;
	border-bottom-left-radius: 25px;
}
.chtwzrd-bubble-wrap p .chtwzrd-notif-close {
	position: absolute;
	top: 0;
	right: 92.5%;
	width: 1.25em;
	height: 1.25em;
	font-size: 19px;
	line-height: 1.25em;
	background: #333;
	color: #fff;
	border-radius: 50%;
	text-align: center;
	text-decoration: none;
}
.chtwzrd-notif {
	cursor: pointer;
}
.chtwzrd-bubble {
	width: 100%;
	height: 100%;
	position: absolute;
	bottom: 0;
	right: 0;
	background: #fff url('2019-assets/bonus-avatar.jpg') center no-repeat;
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
.chtwzrd-header {
	max-height: 70px;
}
.chtwzrd-title {
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	display: -webkit-box;
	-webkit-box-orient: vertical;
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
	margin-bottom: 15px;
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
	z-index: 1054;
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
.chtwzrd-message:focus {
    box-shadow: 0 0 4px #666;
}
.chtwzrd-message, .chtwzrd-container label {
	background-color: #ddd;
}
.chtwzrd-message {
	margin-right: 15px;
}
.chtwzrd-container label {
	border: 1px solid #c1c1c1;
	font-weight: bold;
	padding: 6px 10px;
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
	background-image: url('2019-assets/bonus-avatar.png');
	background-size: 25px;
	background-repeat: no-repeat;
	background-position: center;
}
.chtwzrd-basic-link {
	min-height: inherit;
}
.chtwzrd-loader {
	width: 26px;
	height: 6px;
	position: absolute;
	bottom: 30%;
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
	margin-left: -3px;
	transform: scale(0.99);
	-webkit-transform: scale(.99);
	-webkit-animation-delay: 0.1s;
	animation-delay: 0.1s;
}
.chtwzrd-loader-dot.dot3 {
	right: 0;
	-webkit-animation-delay: 0.2s;
	animation-delay: 0.2s;
}
.chtwzrd-mrgn {
	margin-top: 80px;
}
.wb-chtwzrd legend:focus {
    outline: 1px dotted #666;
}

/* Media queries */
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
	.chtwzrd-body {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		padding-bottom: 4em;
	}
	.chtwzrd-conversation {
		flex-grow: 1;
		min-height: 2em;
		max-height: none;
	}
	.chtwzrd-controls {
		flex-shrink: 0;
		height: 75px;
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
</style>
<div class="row profile">
	<div class="col-md-6">
		<h1 property="name" id="wb-cont">[Topic title]</h1>
		<p>1-2 sentences that describe the topics and top tasks that can be accessed on this page.</p>
	</div>
	<div class="col-md-6 mrgn-tp-sm hidden-sm hidden-xs">
		<img src="2019-assets/520x200.png" alt="" class="pull-right img-responsive thumbnail"/>
	</div>
</div>
<div class="row">
	<div class="col-md-8 pull-left">
		<div class="container wb-chtwzrd">
			<div class="row">
				<section class="col-md-12">
					<h2>Help us help you</h2>
					<form class="mrgn-bttm-xl" data-chtwzrd='{"sendWizard":"Show results", "first":"q1", "titleWizard":"I can help you find the information you need", "startText":"Hi! I can help direct you to programs and services you might be interested in. Let&apos;s begin...", "endText":"Thank you. I have built a page with results you may find resourceful."}' action="page1.html">
						<p data-chtwzrd-intro='First, if you are an employer or organization looking for funding, you can find relevant information on the <a href="pagex.html">funding page</a>.'>If you are an employer or organization looking for funding, you can find relevant information on the <a href="pagex.html">funding page</a>.</p>
						<fieldset>
							<legend data-chtwzrd-q='{"labelWizard":"Are you:", "qId":"q1"}'>What would you describe yourself as?</legend>
							<ul class="list-unstyled mrgn-tp-md">
								<li>
									<label>
										<input type="radio" value="young-canadian" name="describe" data-chtwzrd-a='{"next":"q2"}' />
										<span>a young Canadian</span>
									</label>
								</li>
								<li>
									<label>
										<input type="radio" value="employer-organization-funding-support-youth" name="describe" data-chtwzrd-a='{"next":"none", "url":"page2.html"}' />
										<span>an employer or organization looking for funding to support youth</span>
									</label>
								</li>
								<li>
									<label>
										<input type="radio" value="none-above" name="describe" data-chtwzrd-a='{"next":"q3"}' />
										<span>None of the above</span>
									</label>
								</li>
							</ul>
						</fieldset>
						<fieldset>
							<legend data-chtwzrd-q='{"labelWizard":"Great! And are you:", "qId":"q2"}'>In what situation are you?</legend>
							<ul class="list-unstyled mrgn-tp-md">
								<li>
									<label>
										<input type="radio" value="high-school" name="situation" data-chtwzrd-a='{"next":"q3"}' />
										<span>a high school student</span>
									</label>
								</li>
								<li>
									<label>
										<input type="radio" value="cegep-student" name="situation" data-chtwzrd-a='{"next":"q3"}' />
										<span>a CÉGEP student</span>
									</label>
								</li>
								<li>
									<label>
										<input type="radio" value="post-secondary" name="situation" data-chtwzrd-a='{"next":"q3"}' />
										<span>a post-secondary school student</span>
									</label>
								</li>
								<li>
									<label>
										<input type="radio" value="ready-start-career" name="situation" data-chtwzrd-a='{"next":"q3"}' />
										<span>ready to start a career</span>
									</label>
								</li>
								<li>
									<label>
										<input type="radio" value="not-school-not-working" name="situation" data-chtwzrd-a='{"next":"q3"}' />
										<span>not in school and not working</span>
									</label>
								</li>
								<li>
									<label>
										<input type="radio" value="none" name="situation" data-chtwzrd-a='{"next":"q3"}' />
										<span>none of these</span>
									</label>
								</li>
							</ul>
						</fieldset>
						<fieldset>
							<legend data-chtwzrd-q='{"labelWizard":"Awesome! And would you like to:", "qId":"q3"}'>What is your goal?</legend>
							<ul class="list-unstyled mrgn-tp-md">
								<li>
									<label>
										<input type="radio" value="get-job" name="goal" data-chtwzrd-a='{"next":"none", "url":"page3.html"}' />
										<span>get a job</span>
									</label>
								</li>
								<li>
									<label>
										<input type="radio" value="develop-skills" name="goal" data-chtwzrd-a='{"next":"none", "url":"page4.html"}' />
										<span>develop skills</span>
									</label>
								</li>
								<li>
									<label>
										<input type="radio" value="explore-careers" name="goal" data-chtwzrd-a='{"next":"none", "url":"page5.html"}' />
										<span>explore careers</span>
									</label>
								</li>
								<li>
									<label>
										<input type="radio" value="post-secondary-education" name="goal" data-chtwzrd-a='{"next":"none", "url":"page6.html"}' />
										<span>attend post-secondary education</span>
									</label>
								</li>
								<li>
									<label>
										<input type="radio" value="serve-community" name="goal" data-chtwzrd-a='{"next":"none", "url":"page7.html"}' />
										<span>serve your community</span>
									</label>
								</li>
								<li>
									<label>
										<input type="radio" value="get-experience" name="goal" data-chtwzrd-a='{"next":"none", "url":"page8.html"}' />
										<span>get an experience</span>
									</label>
								</li>
								<li>
									<label>
										<input type="radio" value="everything" name="goal" data-chtwzrd-a='{"next":"none"}' />
										<span>see everything</span>
									</label>
								</li>
							</ul>
						</fieldset>
						<br/>
						<button type="submit" class="btn btn-sm btn-primary">Search</button>
					</form>
				</section>
			</div>
		</div>
	</div>
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
		<dd><time property="dateModified">2019-02-12</time></dd>
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
		var datainput = {},
			input = "JSON",
			hasAnswered = true, 
			redirurl = "", 
			first = "", 
			intro = "", 
			redirurlCopy = redirurl,
			firstCopy = first,
			introCopy = intro,
			formType = "dynamic",
			sendButton = '<button class="btn btn-primary btn-block chtwzrd-send" type="button">Send<span class="wb-inv"> reply and next</span></button>',
			current = "",
			botTime = "", 
			inputsTime = "", 
			replyTime = "";
			
		// If chat wizard initiator is found, then initiate
		// input possibilities are: JSON and Form
		var initiatechtwzrd = function($selector, input) {		
			// initiate depending on the input type
			if(input == 'form') {
				datainput = translateToObject($selector);
				$selector.addClass("chtwzrd-basic");
			} else {
				// Stringify the JavaScipt Object Array
				datainput = botapi();
				var datajson = JSON.stringify(datainput);
				datainput = JSON.parse(datajson);
				$selector = $("main");
			}
			
			// Initiate default values
			firstCopy = first = datainput.header.first;
			introCopy = intro = (datainput.header.introTextWizard ? datainput.header.introTextWizard : "");
			redirurlCopy = redirurl = datainput.header.defaultDestination;
			current = datainput.questions[first];
				
			// Build chat wizard
			buildchtwzrd($selector, datainput.header.titleWizard);
			
			// All the commonly used elements
			var $basic = $(".chtwzrd-basic"), 
				$bubble = $(".chtwzrd-bubble-wrap"), 
				$container = $(".chtwzrd-container"), 
				$form = $(".chtwzrd-body"),
				$conversation = $(".chtwzrd-history"),
				$minimize = $(".chtwzrd-min"),
				$basiclink = $(".chtwzrd-basic-link"),
				$focusedBeforechtwzrd = "",
				$firstTabStop = $minimize,
				$lastTabStop = $basiclink;
			
			// Initiate basic form
			initiateBasicForm($basic);
			// Restart fresh on reload
			$("input", $basic).prop("checked", false);
			// Hide basic form on load, show chat bubble instead
			$basic.hide();
			$bubble.fadeIn('slow');
			
			// Add link to chat from the basic form and add some white space over the footer for the bubble to sit
			if(input != "JSON") {
				$("input[type=submit], button[type=submit]", $basic).addClass("mrgn-bttm-sm").before('<button class="btn btn-sm btn-default chtwzrd-link mrgn-bttm-sm mrgn-rght-sm">Switch to chat wizard</button>');
			}
			$("footer#wb-info").addClass("chtwzrd-mrgn");
			
			// Ensure that the bubble does not go passed the footer. THIS BLOCK CAN BE REMOVED IF THE BUBBLE IS GLITCHING 
			if($('footer#wb-info').length) {
				// Correct bubble positionning on load, on resize an on Y scroll if necessary
				$(window).on("load resize scroll", function(e) {
					stickyUntilFooter($bubble);
				});

				// Keep the bubble sticky while scrolling Y until user reaches the footer
				var stickyUntilFooter = function($element) {
					// Equals to bubble default bottom value in CSS
					var bottomY = 30;

					if ($(window).scrollTop() >= $(document).outerHeight() - $(window).outerHeight() - $('footer#wb-info').outerHeight()) {
						$element.css({	
							bottom: ($('footer#wb-info').outerHeight() - ($(document).outerHeight() - $(window).outerHeight() - $(window).scrollTop()) + bottomY)
						});
					} else {
						$element.css({	
							bottom: bottomY
						});
					}
				}
			}
			
			// Open Chat from the notification message
			$(".chtwzrd-notif", $bubble).on("click", function(event) {
				$(".chtwzrd-link", $bubble).click();
			});
			
			// Close notification aside bubble
			$(".chtwzrd-notif-close").on("click", function (event) {
				event.preventDefault();
				$(this).parent().hide();
				$bubble.focus();
			});

			// Show basic form and hide chat wizard
			$basiclink.on("click", function(event) {
				event.preventDefault();
				
				var $legendFocus = $("legend:first", $basic);
				$legendFocus.attr("id", "chtwzrd-1-basic");
				$legendFocus.attr("tabindex", "0");
				
				$conversation.attr("aria-live", "");
				resumeOnSwitch($basic, "form");
				
				$container.stop().hide();
				$basic.stop().show(function(){
					$legendFocus.focus();
					$legendFocus.attr("tabindex", "-1");
				});
				
				$("body").removeClass("chtwzrd-noscroll");
			});

			// Show chat wizard and hide basic form
			$(".chtwzrd-link").on("click", function(event) {
				event.preventDefault();
				
				$basic.stop().hide();
				$focusedBeforechtwzrd = $(':focus');
				
				if(!$(this).hasClass("chtwzrd-bubble")) {
					resumeOnSwitch($container, "chat");
				}
				$(".chtwzrd-bubble", $bubble).removeClass("chtwzrd-trans-pulse");
				$("p", $bubble).hide().removeClass("chtwzrd-trans-left");

				$container.stop().show();
				$bubble.stop().hide();
				$("body").addClass("chtwzrd-noscroll");
				if($conversation.length){
					$(".chtwzrd-conversation").scrollTop($conversation[0].scrollHeight);
				}
				if(hasAnswered) {
					appendInteraction($form);
				}
			});
			
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
			
			// On chat button pressed: append answer, and on submit: redirect
			$(document).on("click", ".chtwzrd-send", function(event) {
				if($(this).attr('type') != "submit") {
					event.preventDefault();
					var $choiceselected = $("input:checked", $form);
					if(!$choiceselected.length) {
						$choiceselected = $('input:first', $form);
						$choiceselected.attr('checked', true);
					}
					appendReply($form, buildAnswerObj($choiceselected), false);
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
		
		// Iniate basic form
		var initiateBasicForm = function($selector) {
			$basicForm = $("form", $selector);
			if(formType == "dynamic") {
				var $allQuestions = $("fieldset", $selector),
					$firstQuestion = $allQuestions.first();

				$firstQuestion.addClass("chtwzrd-first-q");
				$allQuestions.not(".chtwzrd-first-q").hide();

				$allQuestions.each(function(){
					var qParams = $(this).find("legend").data("chtwzrd-q");
					$(this).attr("id", "chtwzrd-q-" + qParams.qId);
				});
			}
			
			// On input change in the basic form
			$("input", $basicForm).on("change", function(event) {
				var answerData = buildAnswerObj($(this)),
					$qNext = $("#chtwzrd-q-" + answerData.qNext);
				
				if(formType == "dynamic") {
					var $fieldset = $(this).closest("fieldset");
					if($qNext.is(":hidden") || $fieldset.next().attr("id") != $qNext.attr("id") || answerData.qNext == "none") {
						$fieldset.nextAll("fieldset").hide().find("input").prop("checked", false);
					}
					if(answerData.qNext != "none") {
						$("#chtwzrd-q-" + answerData.qNext).show();
					}
					if(answerData.url != "") {
						$basicForm.attr("action", answerData.url);
					}
				}
			});
		}
			
		// Builds the chat wizard skeleton
		var buildchtwzrd = function($selector, title) {
			$selector.after('<div class="chtwzrd-bubble-wrap"><p class="chtwzrd-trans-left"><span class="chtwzrd-notif">' + title + '</span> <a href="#" class="chtwzrd-notif-close" title="Close chat notification" aria-label="Close chat notification" role="button">×</a></p><a href="#chtwzrd-container" aria-controls="chtwzrd-container" class="chtwzrd-link chtwzrd-bubble chtwzrd-trans-pulse" role="button">Open chat wizard</a></div>');
			$selector.next('.chtwzrd-bubble-wrap').after('<aside class="modal-content overlay-def chtwzrd-container"></aside>');

			$container = $(".chtwzrd-container");
			$container.append('<header class="modal-header chtwzrd-header"><h2 class="modal-title chtwzrd-title">' + title + '</h2><button type="button" class="chtwzrd-min" title="Minimize chat wizard"><span class="glyphicon glyphicon-chevron-down"></span></button></header>');
			$container.append('<form class="modal-body chtwzrd-body" method="GET"></form>');

			$form = $(".chtwzrd-body");
			$form.append('<div class="chtwzrd-conversation"><section class="chtwzrd-history" aria-live="assertive"><h3 class="wb-inv">Conversation history</h3></section><section class="chtwzrd-reply"><h3 class="wb-inv">Reply</h3><div class="chtwzrd-inputs"></div><div class="chtwzrd-validate"><p>Please select an option to continue.</p></div></section><div class="chtwzrd-form-params"></div></div>');
			$form.append('<section class="chtwzrd-controls"><h3 class="wb-inv">Controls</h3><div class="row"><div class="col-xs-12">' + sendButton + '</div></div><div class="row"><div class="col-xs-12 text-center mrgn-tp-sm"><a href="#chtwzrd-basic" class="btn btn-sm btn-link chtwzrd-basic-link" role="button">Switch to basic form</a></div></div></section>');

			$(".chtwzrd-conversation").scrollTop($('.chtwzrd-history')[0].scrollHeight);
		}
			
		// Translate Data attributes from the form and returns a Javascript Object
		var translateToObject = function($selector) {
			var $form = $("form", $selector),
				$intro = $("p", $form).first();
			var datacook = {};
			
			datacook.header = $form.data('chtwzrd');
			datacook.header.defaultDestination = $form.attr("action");
			datacook.header.titleForm = $form.prev("h2");
			datacook.header.sendForm = ($("input[type=submit]", $form).length ? $("input[type=submit]", $form).val() : $("button[type=submit]", $form).html());
			
			if($intro.length) {
				datacook.header.introTextForm = $intro.html();
				datacook.header.introTextWizard = (typeof $intro.data('chtwzrd-intro') === "undefined" ? datacook.header.introTextForm : $intro.data('chtwzrd-intro'));
			}
			datacook.questions = {};
				
			$("fieldset", $selector).each(function() {
				var $question = $(this).find("legend"),
					$choices = $(this).find("li"),
					choices = [],
					qdata = $question.data('chtwzrd-q'),
					qName = "",
					questionID = qdata.qId;
				
				$choices.each(function(index) {
					var $choice = $(this).find("input"),
						name = $choice.attr("name"),
						textval = $choice.next().html();
					
					if(!index) {
						qName = name;
					}
					var choice = $choice.data('chtwzrd-a');
					choice.content = textval;
					choice.queryParam = $choice.val();
					choices.push(choice);
				});
				datacook.questions[questionID] = qdata;
				datacook.questions[questionID].queryName = qName;
				datacook.questions[questionID].labelForm = $question.html();
				datacook.questions[questionID].choices = choices;
			});
			return datacook;
		}
		
		// Resume to question X, by switching between the form and the chat wizard
		var resumeOnSwitch = function($selector, toggle) {
			// Redraw Chat and start over
			if(toggle == "chat") {
				var $conversation = $(".chtwzrd-conversation", $selector);
				
				window.clearTimeout(botTime);
				window.clearTimeout(inputsTime);
				window.clearTimeout(replyTime);
				redirurl = redirurlCopy;
				first = firstCopy;
				intro = introCopy;
				hasAnswered = true;
				current = datainput.questions[first];
				$(".chtwzrd-history, .chtwzrd-form-params", $conversation).html("");
				$(".chtwzrd-send", $selector).replaceWith(sendButton);
				$(".chtwzrd-history", $conversation).attr("aria-live", "assertive");
				if(hasAnswered) {
					appendInteraction($form);
				}
			} 
			// Redraw Form and start over
			else {
				var $allQuestions = $("fieldset", $selector);
				$allQuestions.not(":first").hide();
				$("input", $allQuestions).prop("checked", false);
			}
		}

		// Adds new question from bot and add inputs accordingly
		var appendInteraction = function($selector) {
			var $dropSpot = $(".chtwzrd-history", $selector),
				$inputsSpot = $(".chtwzrd-inputs", $selector),
				$chtwzrdConvo = $(".chtwzrd-conversation"),
				questionnaire = datainput.header,
				$btnnext = $(".chtwzrd-send", $selector),
				markup = (first != "" || intro != "" ? "p" : "h4");
			
			hasAnswered = false;
			$btnnext.prop('disabled', true);
			$inputsSpot.html('');
			$dropSpot.append('<div class="row mrgn-bttm-sm"><div class="col-xs-9"><' + markup + ' class="mrgn-tp-0 mrgn-bttm-sm"><span class="chtwzrd-avatar"></span><span class="chtwzrd-question"></span></' + markup + '></div></div>');
			
			var $lastQuestion = $(".chtwzrd-question:last", $dropSpot);
			
			// Faking delay and type time
			waitingBot($lastQuestion);
			
			botTime = setTimeout(function () {
				// Show greetings on first occurence
				if(first != "") {
					$lastQuestion.html(questionnaire.startText);
					first = "";
					appendInteraction($selector);
				} 
				// If intro is provided, show it before the first question
				else if(intro != "") { 
					$lastQuestion.html(intro);
					intro = "";
					appendInteraction($selector);
				}
				// If it is the last question, then change the button to submit the form
				else if(current == "last") {
					$lastQuestion.html(questionnaire.endText);
					$btnnext.attr("type", "submit").prop('disabled', false).html(questionnaire.sendWizard + '&nbsp;<span class="glyphicon glyphicon-chevron-right small"></span>');
					$selector.attr('action', redirurl);
				} 
				// On every other occurences, append the question and its possible answers
				else {
					$lastQuestion.html(current.labelWizard);
					current.input = "radio";
					inputsTime = setTimeout(function () {
						$inputsSpot.append('<fieldset><legend class="wb-inv">' + current.labelWizard + '</legend><div class="row"><div class="col-xs-12"><ul class="list-inline mrgn-tp-sm chtwzrd-choices"></ul></div></div></fieldset>');
						for(var i=0; i<current.choices.length; i++) {
							iQuestion = current.choices[i];	
							$(".chtwzrd-choices", $inputsSpot).append('<li><label><input type="' + current.input + '" value="' + iQuestion.queryParam + '" name="' + current.queryName + '" data-chtwzrd-a=\'{"next":"' + iQuestion.next + '"' + (typeof iQuestion.url === "undefined" ? '' : ', "url":"' + iQuestion.url + '"') + '}\' /> <span>' + iQuestion.content + '</span></label></li>');
						}
						var tresholdHeight = $chtwzrdConvo[0].scrollHeight;
						if($(".chtwzrd-reply").length && ($(".chtwzrd-reply").outerHeight() + $lastQuestion.outerHeight() > $chtwzrdConvo.innerHeight())) {
							tresholdHeight = $lastQuestion[0].scrollHeight + $chtwzrdConvo.innerHeight();
						}
						$chtwzrdConvo.scrollTop(tresholdHeight);
						$btnnext.prop('disabled', false);
					}, 750);
				}
				$chtwzrdConvo.scrollTop($chtwzrdConvo[0].scrollHeight);
			}, 1750);
		}
			
		// Waiting for the bot to type animation
		var waitingBot = function($selector) {
			$selector.html('<span class="chtwzrd-loader" aria-label="Waiting for message"><span class="chtwzrd-loader-dot dot1"></span><span class="chtwzrd-loader-dot dot2"></span><span class="chtwzrd-loader-dot dot3"></span></span>');
		}
		
		// Add reply from human and calls next question
		var appendReply = function($selector, answerObj) {
			var randID = Math.floor((Math.random() * 1000000) + 1000);
			$dropSpot = $(".chtwzrd-history", $selector);
			$dropSpot.append('<div class="row mrgn-bttm-md"><div class="col-xs-9 col-xs-offset-3"><div class="chtwzrd-message text-right pull-right" id="chtwzrd-reply-' + answerObj.queryName + '-' + randID + '"><p class="mrgn-bttm-0"><span class="wb-inv">You have answered: </span>' + answerObj.value + '</p></div></div></div>');
			$(".chtwzrd-form-params", $form).append('<input type="hidden" name="' + answerObj.queryName + '" value="' + answerObj.queryParam + '" />');
			hasAnswered = true;
			if(answerObj.url != "") {
				redirurl = answerObj.url; 
			}
			
			var next = answerObj.qNext,
				$reply = $("#chtwzrd-reply-" + answerObj.queryName + "-" + randID, $dropSpot);
			
			$reply.attr("tabindex", "0");
			if(next == "none") {
				current = "last";
			} else {
				current = datainput.questions[next];
			}
			$(".chtwzrd-send", $selector).prop('disabled', true);
			replyTime = setTimeout(function () {
				$(".chtwzrd-inputs", $selector).remove("fieldset");
				$reply.focus();
				$reply.attr("tabindex", "-1");
				appendInteraction($selector);
			}, 500);
		}
		
		// Builds an object that is suitable for answer, and returns it
		var buildAnswerObj = function($selector) {
			// The way of taking text value for input is weak at this moment, needs improvement
			var answerData = $selector.data("chtwzrd-a");
			return {
				qNext: answerData.next, 
				queryName: $selector.attr("name"), 
				queryParam: $selector.val(), 
				url: (answerData.url ? answerData.url : ""), 
				value: $selector.next().html()
			};
		}
			
		// Initiator here, let's go!
		if($(".wb-chtwzrd").length) {
			$chtwzrd = $(".wb-chtwzrd");
			initiatechtwzrd($chtwzrd, 'form');
		}
		</script>

{% endraw %}

{:/}