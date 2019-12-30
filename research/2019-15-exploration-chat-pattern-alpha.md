---
published: true
layout: default-theme-wet-boew-en
title: 2019-15 - Chat Wizard Alpha Version
description: Chat Wizard Alpha Version
languages: false
hide_breadcrumb: false
date_modified: 2020-01-13
---

{::nomarkdown}

{% raw %}

<!-- Chat wizard -->
<link rel="stylesheet" type="text/css" href="2019-assets/chtwzrd/css/chtwzrd.css">
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
		<section class="wb-chtwzrd">
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
<script src="2019-assets/chtwzrd/js/chtwzrd.js"></script>

{% endraw %}

{:/}
