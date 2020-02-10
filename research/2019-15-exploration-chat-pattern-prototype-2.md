---
published: true
layout: default-theme-wet-boew-en
title: 2019-15 - Exploration of a chat like design pattern
description: Exploration of a chat like design pattern
languages: false
hide_breadcrumb: false
date_modified: 2020-02-10
---

Prototype 2: Includes most of the styles, and an advanced look & feel.

{::nomarkdown}

{% raw %}

<!-- Chatbot -->
<style>
	.chtbt-link {
		width: 60px;
		height: 60px;
		position: fixed;
		bottom: 30px;
		right: 30px;
		background: #fff url('bot/assets/bot-default-avatar.png') center no-repeat;
		border-radius: 50%;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.45);
		text-indent:-9999px;
		overflow: hidden;
		white-space: nowrap;
		z-index: 1049;
	}
	.chtbt-container {
		display: none;
		position: fixed;
		bottom: 20px;
		right: 20px;
		z-index: 1050;
		background-color: #fff;
		width: 30%;
		max-height: 600px;
		overflow: hidden;
	}
	@media screen and (max-width: 992px) {
		.chtbt-container {
			width: 40%;
		}
	}
	@media screen and (max-width: 768px) {
		.chtbt-container {
			width: 100%;
			padding: 0;
			margin: 0;
			bottom: 0;
			right: 0;
			height: 100%;
		}
	}
	.chtbt-min {
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
	}
	.chtbt-message, .chtbt-container label {
		background-color: #dfdfdf;
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
	.pppppp {
		overflow-y: auto;
		overflow-x: hidden;
		max-height: 60%;
		max-height: 200px;
	}
	.pppppp + form {
		position: static;
		bottom: 0px;
	}
</style>
<a href="#chtbt-container" aria-controls="chtbt-container" class="chtbt-link" role="button">Toggle help wizard</a>
<aside class="modal-content overlay-def chtbt-container">
	<header class="modal-header chtbt-header">
		<h2 class="modal-title chtbt-title">I can help you find the information you need</h2>
		<button type="button" class="chtbt-min" title="Minimize help wizard"><span class="glyphicon glyphicon-chevron-down"></span></button>
	</header>
	<div class="modal-body chtbt-body">
		<section class="pppppp">
			<h3 class="wb-inv">Conversation history</h3>
			<div class="row mrgn-bttm-sm">
				<div class="col-xs-9">
					<h4 class="mrgn-tp-0 mrgn-bttm-sm"><span class="chtbt-avatar"></span><span class="chtbt-question">Hi! I can help direct you to programs and services you might be interested in. Would you like to get started by answering a few questions?</span></h4>
				</div>
			</div>
			<div class="row mrgn-bttm-md">
				<div class="col-xs-9 col-xs-offset-3">
					<div class="chtbt-message text-right pull-right">
						<p class="mrgn-bttm-sm">Yes, I am ready.</p>
						<p class="chtbt-rollback small mrgn-bttm-0"><a href="#">Edit</a></p>
					</div>
				</div>
			</div>
			<div class="row mrgn-bttm-sm">
				<div class="col-xs-9">
					<h4 class="mrgn-tp-0 mrgn-bttm-sm"><span class="chtbt-avatar"></span><span class="chtbt-question">Hi! I can help direct you to programs and services you might be interested in. Would you like to get started by answering a few questions?</span></h4>
				</div>
			</div>
			<div class="row mrgn-bttm-md">
				<div class="col-xs-9 col-xs-offset-3">
					<div class="chtbt-message text-right pull-right">
						<p class="mrgn-bttm-sm">Yes, I am ready.</p>
						<p class="chtbt-rollback small mrgn-bttm-0"><a href="#">Edit</a></p>
					</div>
				</div>
			</div>
			<div class="row mrgn-bttm-sm">
				<div class="col-xs-9">
					<h4 class="mrgn-tp-0 mrgn-bttm-sm"><span class="chtbt-avatar"></span><span class="chtbt-question">Hi! I can help direct you to programs and services you might be interested in. Would you like to get started by answering a few questions?</span></h4>
				</div>
			</div>
			<div class="row mrgn-bttm-md">
				<div class="col-xs-9 col-xs-offset-3">
					<div class="chtbt-message text-right pull-right">
						<p class="mrgn-bttm-sm">Yes, I am ready.</p>
						<p class="chtbt-rollback small mrgn-bttm-0"><a href="#">Edit</a></p>
					</div>
				</div>
			</div>
		</section>
		<form>
			<h3 class="wb-inv">Conversation interactions</h3>
			<fieldset class="mrgn-tp-md">
				<legend class="mrgn-bttm-sm"><span class="chtbt-avatar"></span><span class="chtbt-question">Are you:</span></legend>
				<div class="row">
					<div class="col-xs-12">
						<ul class="list-inline mrgn-tp-md">
							<li>
								<label>
									<input type="radio" value="young" name="q2" />
									a young Canadian
								</label>
							</li>
							<li>
								<label>
									<input type="radio" value="emloyer" name="q2" />
									an employer or organization looking for funding to support youth
								</label>
							</li>
						</ul>
					</div>
				</div>
			</fieldset>
			<div class="chtbt-buttons">
				<div class="row">
					<div class="col-xs-6">
						<button type="submit" class="btn btn-default btn-block" rel="prev"><span class="glyphicon glyphicon-chevron-left small"></span> Back</button>
					</div>
					<div class="col-xs-6">
						<button type="submit" class="btn btn-primary btn-block" rel="next">Next step <span class="glyphicon glyphicon-chevron-right small"></span></button>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 text-center mrgn-tp-sm">
						<button type="submit" class="btn btn-sm btn-link">Start over</button> &middot; 
						<button type="submit" class="btn btn-sm btn-link">Switch to basic form</button> &middot; 
						<button type="submit" class="btn btn-sm btn-link">Skip this step</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</aside>
<script>
$('.chtbt-history').scrollTop($('.chtbt-history')[0].scrollHeight);
$(".chtbt-link").on("click", function(event) {
	event.preventDefault();
	$('.chtbt-container').stop().show();
	$(this).stop().hide();
});
$(".chtbt-min").on("click", function(event) {
	event.preventDefault();
	$('.chtbt-container').stop().hide();
	$(".chtbt-link").stop().show();
});
</script>
<code>
<pre>
&lt;!-- Chatbot --&gt;
&lt;style&gt;
	.chtbt-link {
		width: 60px;
		height: 60px;
		position: fixed;
		bottom: 30px;
		right: 30px;
		background: #fff url('bot/assets/bot-default-avatar.png') center no-repeat;
		border-radius: 50%;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.45);
		text-indent:-9999px;
		overflow: hidden;
		white-space: nowrap;
		z-index: 1049;
	}
	.chtbt-container {
		display: none;
		position: fixed;
		bottom: 20px;
		right: 20px;
		z-index: 1050;
		background-color: #fff;
		width: 30%;
		max-height: 600px;
		overflow: hidden;
	}
	@media screen and (max-width: 992px) {
		.chtbt-container {
			width: 40%;
		}
	}
	@media screen and (max-width: 768px) {
		.chtbt-container {
			width: 100%;
			padding: 0;
			margin: 0;
			bottom: 0;
			right: 0;
			height: 100%;
		}
	}
	.chtbt-min {
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
	}
	.chtbt-message, .chtbt-container label {
		background-color: #dfdfdf;
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
	.pppppp {
		overflow-y: auto;
		overflow-x: hidden;
		max-height: 60%;
		max-height: 200px;
	}
	.pppppp + form {
		position: static;
		bottom: 0px;
	}
&lt;/style&gt;
&lt;a href="#chtbt-container" aria-controls="chtbt-container" class="chtbt-link" role="button"&gt;Toggle help wizard&lt;/a&gt;
&lt;aside class="modal-content overlay-def chtbt-container"&gt;
	&lt;header class="modal-header chtbt-header"&gt;
		&lt;h2 class="modal-title chtbt-title"&gt;I can help you find the information you need&lt;/h2&gt;
		&lt;button type="button" class="chtbt-min" title="Minimize help wizard"&gt;&lt;span class="glyphicon glyphicon-chevron-down"&gt;&lt;/span&gt;&lt;/button&gt;
	&lt;/header&gt;
	&lt;div class="modal-body chtbt-body"&gt;
		&lt;section class="pppppp"&gt;
			&lt;h3 class="wb-inv"&gt;Conversation history&lt;/h3&gt;
			&lt;div class="row mrgn-bttm-sm"&gt;
				&lt;div class="col-xs-9"&gt;
					&lt;h4 class="mrgn-tp-0 mrgn-bttm-sm"&gt;&lt;span class="chtbt-avatar"&gt;&lt;/span&gt;&lt;span class="chtbt-question"&gt;Hi! I can help direct you to programs and services you might be interested in. Would you like to get started by answering a few questions?&lt;/span&gt;&lt;/h4&gt;
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="row mrgn-bttm-md"&gt;
				&lt;div class="col-xs-9 col-xs-offset-3"&gt;
					&lt;div class="chtbt-message text-right pull-right"&gt;
						&lt;p class="mrgn-bttm-sm"&gt;Yes, I am ready.&lt;/p&gt;
						&lt;p class="chtbt-rollback small mrgn-bttm-0"&gt;&lt;a href="#"&gt;Edit&lt;/a&gt;&lt;/p&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="row mrgn-bttm-sm"&gt;
				&lt;div class="col-xs-9"&gt;
					&lt;h4 class="mrgn-tp-0 mrgn-bttm-sm"&gt;&lt;span class="chtbt-avatar"&gt;&lt;/span&gt;&lt;span class="chtbt-question"&gt;Hi! I can help direct you to programs and services you might be interested in. Would you like to get started by answering a few questions?&lt;/span&gt;&lt;/h4&gt;
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="row mrgn-bttm-md"&gt;
				&lt;div class="col-xs-9 col-xs-offset-3"&gt;
					&lt;div class="chtbt-message text-right pull-right"&gt;
						&lt;p class="mrgn-bttm-sm"&gt;Yes, I am ready.&lt;/p&gt;
						&lt;p class="chtbt-rollback small mrgn-bttm-0"&gt;&lt;a href="#"&gt;Edit&lt;/a&gt;&lt;/p&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="row mrgn-bttm-sm"&gt;
				&lt;div class="col-xs-9"&gt;
					&lt;h4 class="mrgn-tp-0 mrgn-bttm-sm"&gt;&lt;span class="chtbt-avatar"&gt;&lt;/span&gt;&lt;span class="chtbt-question"&gt;Hi! I can help direct you to programs and services you might be interested in. Would you like to get started by answering a few questions?&lt;/span&gt;&lt;/h4&gt;
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="row mrgn-bttm-md"&gt;
				&lt;div class="col-xs-9 col-xs-offset-3"&gt;
					&lt;div class="chtbt-message text-right pull-right"&gt;
						&lt;p class="mrgn-bttm-sm"&gt;Yes, I am ready.&lt;/p&gt;
						&lt;p class="chtbt-rollback small mrgn-bttm-0"&gt;&lt;a href="#"&gt;Edit&lt;/a&gt;&lt;/p&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/section&gt;
		&lt;form&gt;
			&lt;h3 class="wb-inv"&gt;Conversation interactions&lt;/h3&gt;
			&lt;fieldset class="mrgn-tp-md"&gt;
				&lt;legend class="mrgn-bttm-sm"&gt;&lt;span class="chtbt-avatar"&gt;&lt;/span&gt;&lt;span class="chtbt-question"&gt;Are you:&lt;/span&gt;&lt;/legend&gt;
				&lt;div class="row"&gt;
					&lt;div class="col-xs-12"&gt;
						&lt;ul class="list-inline mrgn-tp-md"&gt;
							&lt;li&gt;
								&lt;label&gt;
									&lt;input type="radio" value="young" name="q2" /&gt;
									a young Canadian
								&lt;/label&gt;
							&lt;/li&gt;
							&lt;li&gt;
								&lt;label&gt;
									&lt;input type="radio" value="emloyer" name="q2" /&gt;
									an employer or organization looking for funding to support youth
								&lt;/label&gt;
							&lt;/li&gt;
						&lt;/ul&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/fieldset&gt;
			&lt;div class="chtbt-buttons"&gt;
				&lt;div class="row"&gt;
					&lt;div class="col-xs-6"&gt;
						&lt;button type="submit" class="btn btn-default btn-block" rel="prev"&gt;&lt;span class="glyphicon glyphicon-chevron-left small"&gt;&lt;/span&gt; Back&lt;/button&gt;
					&lt;/div&gt;
					&lt;div class="col-xs-6"&gt;
						&lt;button type="submit" class="btn btn-primary btn-block" rel="next"&gt;Next step &lt;span class="glyphicon glyphicon-chevron-right small"&gt;&lt;/span&gt;&lt;/button&gt;
					&lt;/div&gt;
				&lt;/div&gt;
				&lt;div class="row"&gt;
					&lt;div class="col-xs-12 text-center mrgn-tp-sm"&gt;
						&lt;button type="submit" class="btn btn-sm btn-link"&gt;Start over&lt;/button&gt; &middot; 
						&lt;button type="submit" class="btn btn-sm btn-link"&gt;Switch to basic form&lt;/button&gt; &middot; 
						&lt;button type="submit" class="btn btn-sm btn-link"&gt;Skip this step&lt;/button&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/form&gt;
	&lt;/div&gt;
&lt;/aside&gt;
&lt;script&gt;
$('.chtbt-history').scrollTop($('.chtbt-history')[0].scrollHeight);
$(".chtbt-link").on("click", function(event) {
	event.preventDefault();
	$('.chtbt-container').stop().show();
	$(this).stop().hide();
});
$(".chtbt-min").on("click", function(event) {
	event.preventDefault();
	$('.chtbt-container').stop().hide();
	$(".chtbt-link").stop().show();
});
&lt;/script&gt;
</code>
</pre>

{% endraw %}

{:/}