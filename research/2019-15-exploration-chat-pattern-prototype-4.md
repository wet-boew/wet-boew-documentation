---
published: true
layout: default-theme-wet-boew-en
title: 2019-15 - Exploration of a chat like design pattern
description: Exploration of a chat like design pattern
languages: false
hide_breadcrumb: false
date_modified: 2020-02-10
---

Prototype 4: With Data.

{::nomarkdown}

{% raw %}

<code>
<pre>
&lt;!DOCTYPE html&gt;
&lt;!--[if lt IE 9]&gt;&lt;html class="no-js lt-ie9" lang="en" dir="ltr"&gt;&lt;![endif]--&gt;
&lt;!--[if gt IE 8]&gt;&lt;!--&gt;
&lt;html class="no-js" lang="en" dir="ltr"&gt;
&lt;!--&lt;![endif]--&gt;
	&lt;head&gt;
		&lt;meta charset="utf-8" /&gt;
		&lt;!-- Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
		wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html --&gt;
		&lt;title&gt;[Topic title]	-	Canada.ca&lt;/title&gt;
		&lt;meta content="width=device-width, initial-scale=1" name="viewport" /&gt;
		&lt;meta name="description" content="Web Experience Toolkit (WET) includes reusable components for building and maintaining innovative Web sites that are accessible, usable, and interoperable. These reusable components are open source software and free for use by departments and external Web communities" /&gt;
		&lt;!--[if gte IE 9 | !IE ]&gt;&lt;!--&gt;
		&lt;link href="./../GCWeb/assets/favicon.ico" rel="icon" type="image/x-icon" /&gt;
		&lt;link rel="stylesheet" href="./../GCWeb/css/theme.css" /&gt;
		&lt;!--&lt;![endif]--&gt;
		
		&lt;!--[if lt IE 9]&gt;
		&lt;link href="./../GCWeb/assets/favicon.ico" rel="shortcut icon" /&gt;
		
		&lt;link rel="stylesheet" href="./../GCWeb/css/ie8-theme.css" /&gt;
		&lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.js"&gt;&lt;/script&gt;
		&lt;script src="./../wet-boew/js/ie8-wet-boew.js"&gt;&lt;/script&gt;
		&lt;![endif]--&gt;
		&lt;!--[if lte IE 9]&gt;
		
		
		&lt;![endif]--&gt;
		
		&lt;noscript&gt;&lt;link rel="stylesheet" href="./../wet-boew/css/noscript.css" /&gt;&lt;/noscript&gt;
		
		&lt;!-- Google Tag Manager DO NOT REMOVE OR MODIFY - NE PAS SUPPRIMER OU MODIFIER --&gt;
		&lt;script&gt;dataLayer1 = [];&lt;/script&gt;
		&lt;!-- End Google Tag Manager --&gt;
		
		
		
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
		
	&lt;/head&gt;
	&lt;body class="secondary" vocab="http://schema.org/" typeof="WebPage"&gt;
		
&lt;!-- Google Tag Manager DO NOT REMOVE OR MODIFY - NE PAS SUPPRIMER OU MODIFIER --&gt;
&lt;noscript&gt;&lt;iframe title="Google Tag Manager" src="//www.googletagmanager.com/ns.html?id=GTM-TLGQ9K" height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;&lt;/noscript&gt;
&lt;script&gt;(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer1'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer1','GTM-TLGQ9K');&lt;/script&gt;
&lt;!-- End Google Tag Manager --&gt;
&lt;ul id="wb-tphp"&gt;
	&lt;li class="wb-slc"&gt;
		&lt;a class="wb-sl" href="#wb-cont"&gt;Skip to main content&lt;/a&gt;
	&lt;/li&gt;
	&lt;li class="wb-slc"&gt;
		&lt;a class="wb-sl" href="#wb-info"&gt;Skip to "About government"&lt;/a&gt;
	&lt;/li&gt;
&lt;/ul&gt;&lt;header role="banner"&gt;
	&lt;div id="wb-bnr" class="container"&gt;
	&lt;section id="wb-lng" class="visible-md visible-lg text-right"&gt;
		&lt;h2 class="wb-inv"&gt;Language selection&lt;/h2&gt;
		&lt;div class="row"&gt;
			&lt;div class="col-md-12"&gt;
				&lt;ul class="list-inline margin-bottom-none"&gt;
					&lt;li&gt;&lt;a lang="fr" href="topic-fr.html"&gt;Français&lt;/a&gt;&lt;/li&gt;
				&lt;/ul&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/section&gt;
		&lt;div class="row"&gt;
				&lt;div class="brand col-xs-8 col-sm-9 col-md-6"&gt;
					&lt;a href="https://www.canada.ca/en.html"&gt;&lt;img src="./../GCWeb/assets/sig-blk-en.svg" alt="" /&gt;&lt;span class="wb-inv"&gt; Government of Canada / &lt;span lang="fr"&gt;Gouvernement du Canada&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;
				&lt;/div&gt;
	&lt;section class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs" id="wb-glb-mn"&gt;
		&lt;h2&gt;Search and menus&lt;/h2&gt;
		&lt;ul class="list-inline text-right chvrn"&gt;
			&lt;li&gt;&lt;a href="#mb-pnl" title="Search and menus" aria-controls="mb-pnl" class="overlay-lnk" role="button"&gt;&lt;span class="glyphicon glyphicon-search"&gt;&lt;span class="glyphicon glyphicon-th-list"&gt;&lt;span class="wb-inv"&gt;Search and menus&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
		&lt;/ul&gt;
		&lt;div id="mb-pnl"&gt;&lt;/div&gt;
	&lt;/section&gt;
	&lt;section id="wb-srch" class="col-xs-6 text-right visible-md visible-lg"&gt;
		&lt;h2&gt;Search&lt;/h2&gt;
		&lt;form action="#" method="post" name="cse-search-box" role="search" class="form-inline"&gt;
			&lt;div class="form-group"&gt;
				&lt;label for="wb-srch-q" class="wb-inv"&gt;Search website&lt;/label&gt;
				&lt;input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="27" maxlength="150" placeholder="Search Canada.ca" /&gt;
				&lt;datalist id="wb-srch-q-ac"&gt;
					&lt;!--[if lte IE 9]&gt;&lt;select&gt;&lt;![endif]--&gt;
					&lt;!--[if lte IE 9]&gt;&lt;/select&gt;&lt;![endif]--&gt;
				&lt;/datalist&gt;
			&lt;/div&gt;
			&lt;div class="form-group submit"&gt;
				&lt;button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"&gt;&lt;span class="glyphicon-search glyphicon"&gt;&lt;/span&gt;&lt;span class="wb-inv"&gt;Search&lt;/span&gt;&lt;/button&gt;
			&lt;/div&gt;
		&lt;/form&gt;
	&lt;/section&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;nav role="navigation" id="wb-sm" data-ajax-replace="./ajax/sitemenu-en.html" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"&gt;
		&lt;div class="container nvbar"&gt;
			&lt;h2&gt;Topics menu&lt;/h2&gt;
			&lt;div class="row"&gt;
				&lt;ul class="list-inline menu"&gt;
					&lt;li&gt;&lt;a href="https://www.canada.ca/en/services/jobs.html"&gt;Jobs&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="https://www.canada.ca/en/services/immigration-citizenship.html"&gt;Immigration&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="https://travel.gc.ca/"&gt;Travel&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="https://www.canada.ca/en/services/business.html"&gt;Business&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="https://www.canada.ca/en/services/benefits.html"&gt;Benefits&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="https://www.canada.ca/en/services/health.html"&gt;Health&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="https://www.canada.ca/en/services/taxes.html"&gt;Taxes&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="https://www.canada.ca/en/services.html"&gt;More services&lt;/a&gt;&lt;/li&gt;
				&lt;/ul&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/nav&gt;
	&lt;nav role="navigation" id="wb-bc" property="breadcrumb"&gt;
		&lt;h2&gt;You are here:&lt;/h2&gt;
		&lt;div class="container"&gt;
			&lt;div class="row"&gt;
				&lt;ol class="breadcrumb"&gt;
									&lt;li&gt;&lt;a href="https://www.canada.ca/en.html"&gt;Home&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href="theme-en.html"&gt;[Theme Name]&lt;/a&gt;&lt;/li&gt;
					
				&lt;/ol&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/nav&gt;
&lt;/header&gt;
&lt;main role="main" property="mainContentOfPage" class="container"&gt;	
			
&lt;div class="row profile"&gt;
	&lt;div class="col-md-6"&gt;
		&lt;h1 property="name" id="wb-cont"&gt;[Topic title]&lt;/h1&gt;
		&lt;p&gt;1-2 sentences that describe the topics and top tasks that can be accessed on this page.&lt;/p&gt;
		&lt;section class="followus"&gt;
			&lt;h2&gt;Follow:&lt;/h2&gt;
			&lt;ul&gt;
				&lt;li&gt;&lt;a href="#facebook" class="facebook wb-lbx"&gt;&lt;span class="wb-inv"&gt;Facebook&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#" class="twitter" rel="external"&gt;&lt;span class="wb-inv"&gt;Twitter&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#youtube" class="youtube wb-lbx"&gt;&lt;span class="wb-inv"&gt;YouTube&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#" class="flickr" rel="external"&gt;&lt;span class="wb-inv"&gt;Flickr&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#" class="googleplus" rel="external"&gt;&lt;span class="wb-inv"&gt;Google+&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#" class="pinterest" rel="external"&gt;&lt;span class="wb-inv"&gt;Pinterest&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#" class="linkedin" rel="external"&gt;&lt;span class="wb-inv"&gt;LinkedIn&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#" class="instagram" rel="external"&gt;&lt;span class="wb-inv"&gt;Instagram&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#" class="rss" rel="external"&gt;&lt;span class="wb-inv"&gt;RSS Feed&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#" class="email" rel="external"&gt;&lt;span class="wb-inv"&gt;Email subscription&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#" class="periscope" rel="external"&gt;&lt;span class="wb-inv"&gt;Periscope&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
			&lt;/ul&gt;
		&lt;/section&gt;
		&lt;section id="facebook" class="mfp-hide modal-dialog modal-content overlay-def"&gt;
			&lt;header class="modal-header"&gt;
				&lt;h2 class="modal-title"&gt;Facebook&lt;/h2&gt;
			&lt;/header&gt;
			&lt;div class="modal-body"&gt;
				&lt;ul class="list-unstyled lst-spcd"&gt;
					&lt;li&gt;&lt;a href="#" rel="external"&gt;[First Facebook account title]&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="#" rel="external"&gt;[Second Facebook account title]&lt;/a&gt;&lt;/li&gt;
				&lt;/ul&gt;
			&lt;/div&gt;
		&lt;/section&gt;
		&lt;section id="youtube" class="mfp-hide modal-dialog modal-content overlay-def"&gt;
			&lt;header class="modal-header"&gt;
				&lt;h2 class="modal-title"&gt;YouTube&lt;/h2&gt;
			&lt;/header&gt;
			&lt;div class="modal-body"&gt;
				&lt;ul class="list-unstyled lst-spcd"&gt;
					&lt;li&gt;&lt;a href="#" rel="external"&gt;[First YouTube account title]&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="#" rel="external"&gt;[Second YouTube account title]&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="#" rel="external"&gt;[Third YouTube account title]&lt;/a&gt;&lt;/li&gt;
				&lt;/ul&gt;
			&lt;/div&gt;
		&lt;/section&gt;
	&lt;/div&gt;
	&lt;div class="col-md-6 mrgn-tp-sm hidden-sm hidden-xs"&gt;
		&lt;img src="./img/520x200.png" alt="" class="pull-right img-responsive thumbnail"/&gt;
	&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
	&lt;div class="col-md-4 col-xs-12 pull-right"&gt;
		&lt;section class="lnkbx"&gt;
			&lt;h2&gt;
			Most requested
			&lt;/h2&gt;
			&lt;ul&gt;
				&lt;li&gt;&lt;a href="#"&gt;		[Top task hyperlink text]
				&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;		[Top task hyperlink text]
				&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;		[Top task hyperlink text]
				&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;		[Top task hyperlink text]
				&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;		[Top task hyperlink text]
				&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;		[Top task hyperlink text]
				&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;		[Top task hyperlink text]
				&lt;/a&gt;&lt;/li&gt;
			&lt;/ul&gt;
		&lt;/section&gt;	&lt;/div&gt;
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
	&lt;section class="col-md-8 pull-left"&gt;
		&lt;h2&gt;Services and information&lt;/h2&gt;
		&lt;div class="wb-eqht row"&gt;
			&lt;div class="col-md-6"&gt;
				&lt;section&gt;
					&lt;h3 class="h5"&gt;&lt;a href="#"&gt;
					[Subtopic hyperlink text]
					&lt;/a&gt;&lt;/h3&gt;
					&lt;p&gt;
					Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.
					&lt;/p&gt;
				&lt;/section&gt;
			&lt;/div&gt;			&lt;div class="col-md-6"&gt;
				&lt;section&gt;
					&lt;h3 class="h5"&gt;&lt;a href="#"&gt;
					[Subtopic hyperlink text]
					&lt;/a&gt;&lt;/h3&gt;
					&lt;p&gt;
					Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.
					&lt;/p&gt;
				&lt;/section&gt;
			&lt;/div&gt;			&lt;div class="col-md-6"&gt;
				&lt;section&gt;
					&lt;h3 class="h5"&gt;&lt;a href="#"&gt;
					[Subtopic hyperlink text]
					&lt;/a&gt;&lt;/h3&gt;
					&lt;p&gt;
					Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.
					&lt;/p&gt;
				&lt;/section&gt;
			&lt;/div&gt;			&lt;div class="col-md-6"&gt;
				&lt;section&gt;
					&lt;h3 class="h5"&gt;&lt;a href="#"&gt;
					[Subtopic hyperlink text]
					&lt;/a&gt;&lt;/h3&gt;
					&lt;p&gt;
					Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.
					&lt;/p&gt;
				&lt;/section&gt;
			&lt;/div&gt;			&lt;div class="col-md-6"&gt;
				&lt;section&gt;
					&lt;h3 class="h5"&gt;&lt;a href="#"&gt;
					[Subtopic hyperlink text]
					&lt;/a&gt;&lt;/h3&gt;
					&lt;p&gt;
					Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.
					&lt;/p&gt;
				&lt;/section&gt;
			&lt;/div&gt;			&lt;div class="col-md-6"&gt;
				&lt;section&gt;
					&lt;h3 class="h5"&gt;&lt;a href="#"&gt;
					[Subtopic hyperlink text]
					&lt;/a&gt;&lt;/h3&gt;
					&lt;p&gt;
					Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.
					&lt;/p&gt;
				&lt;/section&gt;
			&lt;/div&gt;			&lt;div class="col-md-6"&gt;
				&lt;section&gt;
					&lt;h3 class="h5"&gt;&lt;a href="#"&gt;
					[Subtopic hyperlink text]
					&lt;/a&gt;&lt;/h3&gt;
					&lt;p&gt;
					Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.
					&lt;/p&gt;
				&lt;/section&gt;
			&lt;/div&gt;			&lt;div class="col-md-6"&gt;
				&lt;section&gt;
					&lt;h3 class="h5"&gt;&lt;a href="#"&gt;
					[Subtopic hyperlink text]
					&lt;/a&gt;&lt;/h3&gt;
					&lt;p&gt;
					Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.
					&lt;/p&gt;
				&lt;/section&gt;
			&lt;/div&gt;			&lt;div class="col-md-6"&gt;
				&lt;section&gt;
					&lt;h3 class="h5"&gt;&lt;a href="#"&gt;
					[Subtopic hyperlink text]
					&lt;/a&gt;&lt;/h3&gt;
					&lt;p&gt;
					Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.
					&lt;/p&gt;
				&lt;/section&gt;
			&lt;/div&gt;			&lt;div class="col-md-6"&gt;
				&lt;section&gt;
					&lt;h3 class="h5"&gt;&lt;a href="#"&gt;
					[Subtopic hyperlink text]
					&lt;/a&gt;&lt;/h3&gt;
					&lt;p&gt;
					Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.
					&lt;/p&gt;
				&lt;/section&gt;
			&lt;/div&gt;			&lt;div class="col-md-6"&gt;
				&lt;section&gt;
					&lt;h3 class="h5"&gt;&lt;a href="#"&gt;
					[Subtopic hyperlink text]
					&lt;/a&gt;&lt;/h3&gt;
					&lt;p&gt;
					Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.
					&lt;/p&gt;
				&lt;/section&gt;
			&lt;/div&gt;			&lt;div class="col-md-6"&gt;
				&lt;section&gt;
					&lt;h3 class="h5"&gt;&lt;a href="#"&gt;
					[Subtopic hyperlink text]
					&lt;/a&gt;&lt;/h3&gt;
					&lt;p&gt;
					Summary of the information or tasks that can be accomplished on the sub-topic page. Remove prose or promotional messaging. Use action verbs.
					&lt;/p&gt;
				&lt;/section&gt;
			&lt;/div&gt;		&lt;/div&gt;
	&lt;/section&gt;
	&lt;div class="pull-right col-xs-12 col-md-4"&gt;
		&lt;section class="lnkbx"&gt;
			&lt;h2&gt;
			Contributors
			&lt;/h2&gt;
			&lt;ul&gt;
				&lt;li&gt;&lt;a href="#"&gt;[Institution name]&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;[Institution name]&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;[Institution name]&lt;/a&gt;&lt;/li&gt;
			&lt;/ul&gt;
		&lt;/section&gt;
		&lt;section class="lnkbx"&gt;
			&lt;h2&gt;More information for&lt;/h2&gt;
			&lt;ul&gt;
				&lt;li&gt;&lt;a href="#"&gt;[Audience hyperlink text]&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;[Audience hyperlink text]&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;[Audience hyperlink text]&lt;/a&gt;&lt;/li&gt;
			&lt;/ul&gt;
		&lt;/section&gt;
	&lt;/div&gt;
&lt;/div&gt;
&lt;section class="whtwedo"&gt;
	&lt;h2&gt;What we are doing&lt;/h2&gt;
	&lt;div class="row wb-eqht"&gt;
		&lt;section class="col-lg-4 col-md-6"&gt;
			&lt;h3&gt;Research&lt;/h3&gt;
			&lt;ul&gt;
				&lt;li&gt;&lt;a href="#"&gt;[Research report 1]&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;[Research report 2]&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;[Launched research study]&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;[Preliminary research result 1]&lt;/a&gt;&lt;/li&gt;
			&lt;/ul&gt;
			&lt;p&gt;&lt;a href="#"&gt;All related research&lt;/a&gt;&lt;/p&gt;
		&lt;/section&gt;
		&lt;section class="col-lg-4 col-md-6"&gt;
			&lt;h3&gt;Surveys&lt;/h3&gt;
			&lt;ul&gt;
					&lt;li&gt;&lt;a href="#"&gt;[Survey 1]&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;[Survey 2 with a long heading]&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;[Survey 3]&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;[Survey 4]&lt;/a&gt;&lt;/li&gt;
			&lt;/ul&gt;
			&lt;p&gt;&lt;a href="#"&gt;All related surveys&lt;/a&gt;&lt;/p&gt;
		&lt;/section&gt;
		&lt;section class="col-lg-4 col-md-6"&gt;
			&lt;h3&gt;Consultations&lt;/h3&gt;
			&lt;ul&gt;
				&lt;li&gt;&lt;a href="#"&gt;[Consultation 1]&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;[Consultation 2 with a long heading]&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;[Consultation 3]&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#"&gt;[Consultation 4 with a long heading]&lt;/a&gt;&lt;/li&gt;
			&lt;/ul&gt;
			&lt;p&gt;&lt;a href="#"&gt;All related consultations&lt;/a&gt;&lt;/p&gt;
		&lt;/section&gt;
	&lt;/div&gt;
&lt;/section&gt;

	&lt;section class="gc-prtts"&gt;
		&lt;h2&gt;Features&lt;/h2&gt;
		&lt;div class="row"&gt;
			&lt;div class="col-lg-4 col-md-6 mrgn-bttm-md"&gt;
				&lt;a href="#"&gt;
					&lt;figure&gt;
						&lt;figcaption&gt;[Feature hyperlink text]&lt;/figcaption&gt;
						&lt;img src="./img/360x203.png" alt="" class="img-responsive thumbnail mrgn-bttm-sm"/&gt;
						&lt;p&gt;Brief description of the feature being promoted.&lt;/p&gt;
					&lt;/figure&gt;
				&lt;/a&gt;
			&lt;/div&gt;
			&lt;div class="col-lg-4 col-md-6 mrgn-bttm-md"&gt;
				&lt;a href="#"&gt;
					&lt;figure&gt;
						&lt;figcaption&gt;[Feature hyperlink text]&lt;/figcaption&gt;
						&lt;img src="./img/360x203.png" alt="" class="img-responsive thumbnail mrgn-bttm-sm"/&gt;
						&lt;p&gt;Brief description of the feature being promoted.&lt;/p&gt;
					&lt;/figure&gt;
				&lt;/a&gt;
			&lt;/div&gt;
			&lt;div class="col-lg-4 col-md-6 mrgn-bttm-md"&gt;
				&lt;a href="#"&gt;
					&lt;figure&gt;
						&lt;figcaption&gt;[Feature hyperlink text]&lt;/figcaption&gt;
						&lt;img src="./img/360x203.png" alt="" class="img-responsive thumbnail mrgn-bttm-sm"/&gt;
						&lt;p&gt;Brief description of the feature being promoted.&lt;/p&gt;
					&lt;/figure&gt;
				&lt;/a&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/section&gt;
	&lt;div class="pagedetails"&gt;
		&lt;dl id="wb-dtmd"&gt;
			&lt;dt&gt;Date modified:&#32;&lt;/dt&gt;
			&lt;dd&gt;&lt;time property="dateModified"&gt;2017-12-05&lt;/time&gt;&lt;/dd&gt;
		&lt;/dl&gt;
		&lt;div class="row"&gt;
			&lt;div class="col-sm-6 col-md-5 col-lg-4"&gt;
				&lt;details class="brdr-0"&gt;
					&lt;summary class="btn btn-default text-center"&gt;Report a problem on this page&lt;/summary&gt;
					&lt;div class="well row"&gt;
						&lt;div class="gc-rprt-prblm"&gt;
							&lt;div class="gc-rprt-prblm-frm gc-rprt-prblm-tggl"&gt;
								&lt;form action="#"&gt;
									&lt;fieldset&gt;
										&lt;legend&gt;&lt;span class="field-name"&gt;Please select all that apply: &lt;/span&gt;&lt;/legend&gt;
											&lt;div class="checkbox"&gt;
												&lt;label for="problem1"&gt;&lt;input type="checkbox" data-reveal="#broken" name="problem" value="Something is broken" id="problem1" /&gt;Something is broken&lt;/label&gt;
											&lt;/div&gt;
											&lt;div class="form-group hide" id="broken"&gt;
												&lt;label for="problem1-detail"&gt;Provide more details (optional):&lt;/label&gt;
												&lt;input type="text" class="form-control full-width" id="problem1-detail"&gt;
											&lt;/div&gt;
											&lt;div class="checkbox"&gt;
												&lt;label for="problem2"&gt;&lt;input type="checkbox" data-reveal="#spelling" name="problem" value="It has spelling or grammar mistakes" id="problem2" /&gt;The page has spelling or grammar mistakes&lt;/label&gt;
											&lt;/div&gt;
											&lt;div class="form-group hide" id="spelling"&gt;
												&lt;label for="problem2-detail"&gt;Provide more details (optional):&lt;/label&gt;
												&lt;input type="text" class="form-control full-width" id="problem2-detail"&gt;
											&lt;/div&gt;
											&lt;div class="checkbox"&gt;
												&lt;label for="problem3"&gt;&lt;input type="checkbox" data-reveal="#wrong" name="problem" value="The information is wrong" id="problem3" /&gt;The information is wrong&lt;/label&gt;
											&lt;/div&gt;
											&lt;div class="form-group hide" id="wrong"&gt;
												&lt;label for="problem3-detail"&gt;Provide more details (optional):&lt;/label&gt;
												&lt;input type="text" class="form-control full-width" id="problem3-detail"&gt;
											&lt;/div&gt;
											&lt;div class="checkbox"&gt;
												&lt;label for="problem4"&gt;&lt;input type="checkbox" data-reveal="#outdated" name="problem" value="The information is outdated" id="problem4" /&gt;The information is outdated&lt;/label&gt;
											&lt;/div&gt;
											&lt;div class="form-group hide" id="outdated"&gt;
												&lt;label for="problem4-detail"&gt;Provide more details (optional):&lt;/label&gt;
												&lt;input type="text" class="form-control full-width" id="problem4-detail"&gt;
											&lt;/div&gt;
											&lt;div class="checkbox"&gt;
												&lt;label for="problem5"&gt;&lt;input type="checkbox" data-reveal="#find" name="problem" value="I can’t find what I’m looking for" id="problem5" /&gt;I can’t find what I’m looking for&lt;/label&gt;
											&lt;/div&gt;
											&lt;div class="form-group hide" id="find"&gt;
												&lt;label for="problem5-detail"&gt;Describe what you’re looking for (optional):&lt;/label&gt;
												&lt;input type="text" class="form-control full-width" id="problem5-detail"&gt;
											&lt;/div&gt;
											&lt;div class="checkbox"&gt;
												&lt;label for="problem6"&gt;&lt;input type="checkbox" data-reveal="#confusing" name="problem" value="It’s confusing" id="problem6" /&gt;Other&lt;/label&gt;
											&lt;/div&gt;
											&lt;div class="form-group hide" id="confusing"&gt;
												&lt;label for="problem6-detail"&gt;Provide more details (optional):&lt;/label&gt;
												&lt;input type="text" class="form-control full-width" id="problem6-detail"&gt;
											&lt;/div&gt;
						
									&lt;/fieldset&gt;
									&lt;button type="submit" class="btn btn-primary wb-toggle" data-toggle='{"stateOff": "hide", "stateOn": "show", "selector": ".gc-rprt-prblm-tggl"}'&gt;Submit&lt;/button&gt;
								&lt;/form&gt;
							&lt;/div&gt;
							&lt;div class="gc-rprt-prblm-thnk gc-rprt-prblm-tggl hide"&gt;
								&lt;h3&gt;Thank you for your help!&lt;/h3&gt;
								&lt;p&gt;You will not receive a reply. For enquiries, please &lt;a href="https://www.canada.ca/en/contact.html"&gt;contact us&lt;/a&gt;.&lt;/p&gt;
							&lt;/div&gt;
						&lt;/div&gt;
					&lt;/div&gt;
				&lt;/details&gt;
			&lt;/div&gt;
			&lt;div class="wb-share col-sm-4 col-md-3 col-sm-offset-2 col-md-offset-4 col-lg-offset-5" data-wb-share='{"lnkClass": "btn btn-default btn-block"}'&gt;&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/main&gt;
		
	&lt;footer role="contentinfo" id="wb-info"&gt;
		&lt;nav role="navigation" class="container wb-navcurr"&gt;
			&lt;h2 class="wb-inv"&gt;About government&lt;/h2&gt;
			&lt;ul class="list-unstyled colcount-sm-2 colcount-md-3"&gt;
				&lt;li&gt;&lt;a href="https://www.canada.ca/en/contact.html"&gt;Contact us&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="https://www.canada.ca/en/government/dept.html"&gt;Departments and agencies&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="https://www.canada.ca/en/government/publicservice.html"&gt;Public service and military&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="https://www.canada.ca/en/news.html"&gt;News&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="https://www.canada.ca/en/government/system/laws.html"&gt;Treaties, laws and regulations&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="https://www.canada.ca/en/transparency/reporting.html"&gt;Government-wide reporting&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="https://pm.gc.ca/eng"&gt;Prime Minister&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="https://www.canada.ca/en/government/system.html"&gt;How government works&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="https://open.canada.ca/en/"&gt;Open government&lt;/a&gt;&lt;/li&gt;
			&lt;/ul&gt;	&lt;/nav&gt;
		&lt;div class="brand"&gt;
			&lt;div class="container"&gt;
				&lt;div class="row "&gt;
					&lt;nav class="col-md-9 col-lg-10 ftr-urlt-lnk"&gt;
						&lt;h2 class="wb-inv"&gt;About this site&lt;/h2&gt;
						&lt;ul&gt;
							&lt;li&gt;&lt;a href="https://www.canada.ca/en/social.html"&gt;Social media&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a href="https://www.canada.ca/en/mobile.html"&gt;Mobile applications&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a href="https://www1.canada.ca/en/newsite.html"&gt;About Canada.ca&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a href="https://www.canada.ca/en/transparency/terms.html"&gt;Terms and conditions&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a href="https://www.canada.ca/en/transparency/privacy.html"&gt;Privacy&lt;/a&gt;&lt;/li&gt;
						&lt;/ul&gt;
					&lt;/nav&gt;
					&lt;div class="col-xs-6 visible-sm visible-xs tofpg"&gt;
						&lt;a href="#wb-cont"&gt;Top of Page &lt;span class="glyphicon glyphicon-chevron-up"&gt;&lt;/span&gt;&lt;/a&gt;
					&lt;/div&gt;
					&lt;div class="col-xs-6 col-md-3 col-lg-2 text-right"&gt;
						&lt;img src="./../GCWeb/assets/wmms-blk.svg" alt="Symbol of the Government of Canada" /&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/footer&gt;
		&lt;!--[if gte IE 9 | !IE ]&gt;&lt;!--&gt;
		&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.js"&gt;&lt;/script&gt;
		&lt;script src="./../wet-boew/js/wet-boew.js"&gt;&lt;/script&gt;
		&lt;!--&lt;![endif]--&gt;
		
		&lt;!--[if lt IE 9]&gt;
		&lt;script src="./../wet-boew/js/ie8-wet-boew2.js"&gt;&lt;/script&gt;
		
		&lt;![endif]--&gt;
		&lt;script src="./../GCWeb/js/theme.js"&gt;&lt;/script&gt;
		
		&lt;!-- Chat bot --&gt;
		&lt;script&gt;
		// Data structure for a working chatbot
		var datainput = [
			{
				header: {
					action: "search", 
					send: "Show results",
					endtext: "Thank you. I have built a built a page with results you may find resourceful."
				}, 
				questions: [
					{
						question: "q1",
						labelform: "What would you describe yourself as?",
						labelwizard: "Are you:",
						input: "radio",
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
					}, 
					{
						question: "q2",
						labelform: "In what situation are you?",
						labelwizard: "Great! And are you:",
						input: "radio",
						choices: [
							{ 
								content: "a high school student",
								value: "high-school",
								next: "#q3",
								url: "page1.html"
							},
							{ 
								content: "a CÉGEP student",
								value: "cegep-student",
								next: "#q3",
								url: "page2.html"
							},
							{ 
								content: "a post-secondary school student",
								value: "post-secondary",
								next: "#q3",
								url: "page1.html"
							},
							{ 
								content: "ready to start a career",
								value: "ready-start-career",
								next: "#q3",
								url: "page2.html"
							},
							{ 
								content: "not in school and not working",
								value: "not-school-not-working",
								next: "#q3",
								url: "page1.html"
							},
							{ 
								content: "none of these",
								value: "none",
								next: "#q3",
								url: "page2.html"
							}
						]
					}, 
					{
						question: "q3",
						labelform: "What is your goal?",
						labelwizard: "Awesome! And would you like to:",
						input: "radio",
						choices: [
							{ 
								content: "get a job",
								value: "get-job",
								next: false,
								url: "page1.html"
							},
							{ 
								content: "develop skills",
								value: "develop-skills",
								next: false,
								url: "page2.html"
							},
							{ 
								content: "explore careers",
								value: "explore-careers",
								next: false,
								url: "page3.html"
							},
							{ 
								content: "attend post-secondary education",
								value: "post-secondary-education",
								next: false,
								url: "page4.html"
							},
							{ 
								content: "serve your community",
								value: "serve-community",
								next: false,
								url: "page5.html"
							},
							{ 
								content: "get an experience",
								value: "get-experience",
								next: false,
								url: "page6.html"
							},
							{ 
								content: "see everything",
								value: "everything",
								next: false,
								url: "page7.html"
							}
						]
					}
				]
			}
		];
			
		// Now the JSON version of it
		var datajson = "[{\"header\":{\"action\":\"search\",\"send\":\"Show results\",\"endtext\":\"Thank you. I have built a built a page with results you may find resourceful.\"},\"questions\":[{\"question\":\"q1\",\"labelform\":\"What would you describe yourself as?\",\"labelwizard\":\"Are you:\",\"input\":\"radio\",\"choices\":[{\"content\":\"a young Canadian\",\"value\":\"young-canadian\",\"next\":\"#q2\",\"url\":\"page1.html\"},{\"content\":\"an employer or organization looking for funding to support youth\",\"value\":\"employer-organization-funding-support-youth\",\"next\":false,\"url\":\"page2.html\"}]},{\"question\":\"q2\",\"labelform\":\"In what situation are you?\",\"labelwizard\":\"Great! And are you:\",\"input\":\"radio\",\"choices\":[{\"content\":\"a high school student\",\"value\":\"high-school\",\"next\":\"#q3\",\"url\":\"page1.html\"},{\"content\":\"a CÉGEP student\",\"value\":\"cegep-student\",\"next\":\"#q3\",\"url\":\"page2.html\"},{\"content\":\"a post-secondary school student\",\"value\":\"post-secondary\",\"next\":\"#q3\",\"url\":\"page1.html\"},{\"content\":\"ready to start a career\",\"value\":\"ready-start-career\",\"next\":\"#q3\",\"url\":\"page2.html\"},{\"content\":\"not in school and not working\",\"value\":\"not-school-not-working\",\"next\":\"#q3\",\"url\":\"page1.html\"},{\"content\":\"none of these\",\"value\":\"none\",\"next\":\"#q3\",\"url\":\"page2.html\"}]},{\"question\":\"q3\",\"labelform\":\"What is your goal?\",\"labelwizard\":\"Awesome! And would you like to:\",\"input\":\"radio\",\"choices\":[{\"content\":\"get a job\",\"value\":\"get-job\",\"next\":false,\"url\":\"page1.html\"},{\"content\":\"develop skills\",\"value\":\"develop-skills\",\"next\":false,\"url\":\"page2.html\"},{\"content\":\"explore careers\",\"value\":\"explore-careers\",\"next\":false,\"url\":\"page3.html\"},{\"content\":\"attend post-secondary education\",\"value\":\"post-secondary-education\",\"next\":false,\"url\":\"page4.html\"},{\"content\":\"serve your community\",\"value\":\"serve-community\",\"next\":false,\"url\":\"page5.html\"},{\"content\":\"get an experience\",\"value\":\"get-experience\",\"next\":false,\"url\":\"page6.html\"},{\"content\":\"see everything\",\"value\":\"everything\",\"next\":false,\"url\":\"page7.html\"}]}]}]";
		
		// For testing purposes, overwrite the datainput by the parsed JSON
		datainput = JSON.parse(datajson);
			
		// Create the data that is sent as an output, if needed
		dataoutput = 
			
		// If chatbot is found, initiate
		function initiateChtbt($selector, $input="JSON") {
			buildChtbt($selector);

			var $basic = $(".chtbt-basic"), 
				$bubble = $(".chtbt-bubble-wrap"), 
				$container = $(".chtbt-container"), 
				$form = $(".chtbt-body"), 
				hasAnswered = true, 
				qIndex = 0;

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
				
				if(hasAnswered) {
					appendInteraction($form, datainput[0].questions[qIndex].labelwizard);
					qIndex++;
				}
			});
			
			// On Submit answer
			$form.on("submit", function(event) {
				event.preventDefault();
				appendReply($form, $("input:checked").val());
			})

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

			$(".chtbt-conversation").scrollTop($('.chtbt-history')[0].scrollHeight);
		}

		// Adds new question from bot and inputs
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
			
		// Adds raply from human
		function appendReply($selector, content) {
			$dropspot = $selector.find(".chtbt-history");
			$dropspot.append('&lt;div class="row mrgn-bttm-md"&gt;&lt;div class="col-xs-9 col-xs-offset-3"&gt;&lt;div class="chtbt-message text-right pull-right"&gt;&lt;p class="mrgn-bttm-0"&gt;' + content + '&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;');
		}
			
			
		if($(".wb-chtbt").length) {
			$chtbt = $(".wb-chtbt");
			initiateChtbt($chtbt);
		}
		&lt;/script&gt;
	&lt;/body&gt;
&lt;/html&gt;

</code>
</pre>

{% endraw %}

{:/}