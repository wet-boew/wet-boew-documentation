---
published: true
layout: default-theme-wet-boew-en
title: 2019-15 - Exploration of a chat like design pattern
description: Exploration of a chat like design pattern
modified: 2019-01-29
---

Prototype 2: Includes most of the styles, and an advanced look & feel.

{::nomarkdown}

{% raw %}

<!-- Chatbot -->
<style>
	.chtbt-container {
		max-height: 50%;
	}
	button.chtbot-close {
		overflow: visible;
		color: #fff;
		background: transparent;
		border: 0;
		-webkit-appearance: none;
		display: block;
		outline: none;
		padding: 0;
		z-index: 1046;
		-webkit-box-shadow: none;
		box-shadow: none;
		font-weight: 700;
		width: 44px;
		height: 44px;
		line-height: 44px;
		position: absolute;
		right: 0;
		top: 0;
		text-decoration: none;
		text-align: center;
		opacity: 0.65;
		filter: alpha(opacity=65);
		padding: 0 0;
		font-style: normal;
		font-size: 28px;
		font-family: Arial, Baskerville, monospace;
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
	.chtbt-container form {
		max-height: 50%;
	}
</style>
<div class="container">
	<div class="row">
		<div class="col-md-5 col-sm-6 col-xs-12">
			<!-- Chat bot -->
			<aside class="chtbt-container modal-content overlay-def">
				<header class="chtbt-header modal-header">
					<div class="row">
						<div class="col-xs-10">
							<h2 class="modal-title">I can help you find the information you need</h2>
						</div>
						<div class="col-xs-2">
							<button type="button" class="chtbot-close" title="minimize help wizard"><span class="wb-inv">Minimize help wizard</span><span class=""></span></button>
							<button type="button" class="chtbot-close" title="Close help wizard">×</button>
						</div>
					</div>
				</header>
				<div class="chtbt-body modal-body">
					<section>
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
												an employeror or ganization looking for funding to support youth
											</label>
										</li>
									</ul>
								</div>
							</div>
						</fieldset>
						<div class="row">
							<div class="col-xs-6">
								<button type="submit" class="btn btn-default btn-block" rel="prev"><span class="glyphicon glyphicon-chevron-left small"></span> Back</button>
							</div>
							<div class="col-xs-6">
								<button type="submit" class="btn btn-primary btn-block" rel="next">Next step <span class="glyphicon glyphicon-chevron-right small"></span></button>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12">
								<button type="submit" class="btn btn-sm btn-link btn-block">Skip this step</button>
							</div>
						</div>
					</form>
				</div>
			</aside>
		</div>
	</div>
</div>

{% endraw %}
{:/}