---
published: true
layout: default-theme-wet-boew-en
title: Prototype 1 - 2018-7 Checkbox filtering - Research and finding
description: Prototype 1 that propose a solution and expose the use case
languages: false
hide_breadcrumb: false
date_modified: 2020-01-13
script_src: //wet-boew.github.io/themes-dist/GCWeb/GCWeb/js/theme.min.js
script_src2: 2018-assets/2018-7-filter-interface-filtre.js
---

{::nomarkdown}
{% raw %}

<div class="row">
<div class="col-lg-9 col-md-8">
<h1 property="name" id="wb-cont">6. Use open standards and solutions (draft)
</h1>
</div>
<div class="col-lg-3 col-md-4">
<ul class="list-unstyled text-right">
<li><a href="#feedback-popup" aria-controls="feedback-popup" class="wb-lbx" role="button">Give feedback about this page</a></li>
<li><a href="https://github.com/canada-ca/digital-playbook-guide-numerique/tree/master/en/6-use-open-standards-solutions.md">View content source on GitHub</a></li>
<li><a href="https://github.com/canada-ca/digital-playbook-guide-numerique/tree/master/views-vues/standards-normes/en/6-use-open-standards-solutions.md">View template source on GitHub</a></li>
<li><a href="#filter-panel" aria-controls="filter-panel" class="overlay-lnk btn btn-primary" role="button">Show filters</a></li>
</ul>

</div>
</div>

<section id="feedback-popup" class="mfp-hide modal-dialog modal-content overlay-def">
<header class="modal-header">
<h2 class="modal-title">Give feedback about this page</h2>
</header>
<div class="modal-body">
<p>We encourage you to submit feedback using one of the following open feedback options:</p>
<ul>
<li><a href="https://github.com/canada-ca/digital-playbook-guide-numerique/issues/new?title=(Page%3A+)"><strong>GitHub:</strong> Submit an issue on GitHub</a> (<a href="https://github.com/canada-ca/digital-playbook-guide-numerique/issues">view current issues on GitHub</a>)</li>
<li><a href="https://gccollab.ca/discussion/view/645986/feedback-on-the-digital-playbook-retroaction-sur-le-guide-numerique"><strong>GCcollab:</strong> Submit a comment in the OneGC GCcollab group</a></li>
</ul>

<p>If you encounter issues with the open feedback options then please contact us through the <a href="mailto:zzOneGC@tbs-sct.gc.ca?subject=Government%20of%20Canada%20Digital%20Playbook%20(draft)%20(Page%3A%20)">OneGC email account</a>.</p>
</div>
</section>


<section id="filter-panel" class="wb-overlay modal-content overlay-def wb-panel-r">
<header class="modal-header">
<h2 class="modal-title">Filters</h2>
</header>
<div class="modal-body">
<form action="#" method="post" class="wb-contentfilter">
<fieldset>
<legend>Content details</legend>
<div class="btn-group mrgn-bttm-md">
<button type="button" class="btn btn-default wb-toggle" data-toggle='{"selector": ".dpgn-content-details", "type": "on", "stateOn": "show", "stateOff": "hide"}'>Show</button>
<button type="button" class="btn btn-default wb-toggle" data-toggle='{"selector": ".dpgn-content-details", "type": "off", "stateOn": "show", "stateOff": "hide"}'>Hide</button>
</div>
</fieldset>

<fieldset>
<legend>Development stage</legend>
<ul class="list-unstyled">
<li><input type="checkbox" id="dpgn-stage-alpha" /> <label for="dpgn-stage-alpha">Alpha</label></li>
<li><input type="checkbox" id="dpgn-stage-beta" /> <label for="dpgn-stage-beta">Beta</label></li>
<li><input type="checkbox" id="dpgn-stage-live" /> <label for="dpgn-stage-live">Live</label></li>
</ul>
</fieldset>

<fieldset>
<legend>Section type</legend>
<ul class="list-unstyled">
<li><input type="checkbox" id="dpgn-section-intro-standard" /> <label for="dpgn-section-intro-standard">Introduction (for a standard)</label></li>
<li><input type="checkbox" id="dpgn-section-guidelines" /> <label for="dpgn-section-guidelines">Guidelines (list for a standard)</label></li>
<li><input type="checkbox" id="dpgn-section-guidelines-related" /> <label for="dpgn-section-guidelines-related">Related guidelines (list for a standard)</label></li>
<li><input type="checkbox" id="dpgn-section-guideline" /> <label for="dpgn-section-guideline">Guideline (for a standard)</label>
<ul class="lst-none">
<li><input type="checkbox" id="dpgn-section-intro-guideline" /> <label for="dpgn-section-intro-guideline">Introduction (for a guideline)</label></li>
<li><input type="checkbox" id="dpgn-section-checklist" /> <label for="dpgn-section-checklist">Checklist (for a guideline)</label></li>
<li><input type="checkbox" id="dpgn-section-guides" /> <label for="dpgn-section-guides">Implementation guides (for a guideline)</label></li>
<li><input type="checkbox" id="dpgn-section-solutions" /> <label for="dpgn-section-solutions">Reusable solutions (for a guideline)</label></li>
<li><input type="checkbox" id="dpgn-section-similar" /> <label for="dpgn-section-similar">Similar resources (for a guideline)</label></li>
</ul>
</li>
</ul>
</fieldset>
<fieldset class="dpgn-exclusive-filters">
<legend>Exclusive filters</legend>
<ul class="list-unstyled">
<li><input type="checkbox" id="dpgn-digital-architectural" /> <label for="dpgn-digital-architectural">Build It Right Principles (draft)</label></li>
</ul>
</fieldset>
<hr />
<div><input type="checkbox" id="filters-remember" /> <label for="filters-remember">Remember my filters next time</label></div>
<input type="button" value="Apply filters" class="btn btn-primary contentfilter-button" />
</form>
</div>
</section>

<div class="text-center">
<ul class="pagination">
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/5-work-in-open-by-default.html" rel="prev">Previous<span class="wb-inv"> - 5. Work in the open by default (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/1-design-with-users.html">1<span class="wb-inv"> - Go to 1. Design with users (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/2-build-in-accessibility-from-start.html">2<span class="wb-inv"> - Go to 2. Build in accessibility from the start (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/3-collaborate-widely.html">3<span class="wb-inv"> - Go to 3. Collaborate widely (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/4-empower-staff-deliver-better-services.html">4<span class="wb-inv"> - Go to 4. Empower staff to deliver better services (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/5-work-in-open-by-default.html">5<span class="wb-inv"> - Go to 5. Work in the open by default (draft)</span></a></li>
<li class="active"><a href="#">6<span class="wb-inv"> - Go to 6. Use open standards and solutions (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/7-iterate-improve-frequently.html">7<span class="wb-inv"> - Go to 7. Iterate and improve frequently (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/8-design-ethical-services.html">8<span class="wb-inv"> - Go to 8. Design ethical services (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/9-address-security-privacy-risks.html">9<span class="wb-inv"> - Go to 9. Address security and privacy risks (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/10-be-good-data-stewards.html">10<span class="wb-inv"> - Go to 10. Be good data stewards (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/7-iterate-improve-frequently.html" rel="next">Next<span class="wb-inv"> - 7. Iterate and improve frequently (draft)</span></a></li>
</ul>
</div>


<div class="dpgn-section-intro-standard">

<p>
<strong>[TODO: Add/revise introductory text]</strong>
</p>

</div>

<div class="dpgn-section-guidelines">
<details open="open">
<summary><strong>Guidelines</strong></summary>
<ul class="list-unstyled mrgn-bttm-0">
<li><a href="#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate" class="btn btn-md btn-link"><span class="btn-block text-left">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</span></a></li>
<li><a href="#use-and-reuse-common-proven-government-solutions-approaches-and-platforms" class="btn btn-md btn-link"><span class="btn-block text-left">6.2 Use and reuse common, proven government solutions, approaches, and platforms</span></a></li>
<li><a href="#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community" class="btn btn-md btn-link"><span class="btn-block text-left">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</span></a></li>
<li><a href="#open-up-the-data-transactions-and-business-rules-that-underpin-a-service" class="btn btn-md btn-link"><span class="btn-block text-left">6.4 Open up the data, transactions, and business rules that underpin a service</span></a></li>
</ul>

</details>
</div>

<div class="dpgn-section-guidelines-related">
<details>
<summary>Related guidelines</summary>
<ul data-guidelines="1.3,3.4,5.1,10.3" class="list-unstyled mrgn-bttm-0">
<li><a href="1-design-with-users.html#understand-the-context-in-which-people-are-interacting-and-design-appropriate-solutions-that-meet-their-needs" class="btn btn-md btn-link"><span class="btn-block text-left">1.3 Understand the context in which people are interacting and design appropriate solutions that meet their needs (1. Design with users (draft))</span></a></li>
<li><a href="3-collaborate-widely.html#share-and-collaborate-in-the-open-link-to-the-work-of-others-and-provide-resources-that-others-can-reuse" class="btn btn-md btn-link"><span class="btn-block text-left">3.4 Share and collaborate in the open, link to the work of others, and provide resources that others can reuse (3. Collaborate widely (draft))</span></a></li>
<li><a href="5-work-in-open-by-default.html#make-all-non-sensitive-data-information-and-new-source-code-open-to-the-outside-world-for-sharing-and-reuse-under-an-open-licence" class="btn btn-md btn-link"><span class="btn-block text-left">5.1 Make all non-sensitive data, information and new source code open to the outside world for sharing and reuse under an open licence (5. Work in the open by default (draft))</span></a></li>
<li><a href="10-be-good-data-stewards.html#ensure-that-data-is-collected-in-a-standard-way-so-that-it-can-easily-be-integrated-and-reused-by-others" class="btn btn-md btn-link"><span class="btn-block text-left">10.3 Ensure that data is collected in a standard way so that it can easily be integrated and reused by others (10. Be good data stewards (draft))</span></a></li>
</ul>

</details>
</div>

<section class="dpgn-section-guideline">
<h2 id="leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</h2>

<div class="dpgn-section-intro-guideline">

<p>
<strong>[TODO: Add/revise introductory text]</strong>
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<p>
Build technology that uses open standards to ensure your system works and communicates with other products or systems, and can easily be upgraded and expanded.
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<p>
Adopting and using open standards means you can:
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<ul class="lst-spcd">
<li>
move between different technologies when you need to, avoiding vendor lock-in

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
quickly and easily change your service when you need to

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
increase compatibility with all stakeholders

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
open up the range of companies you can purchase from as more of them are likely to use the same standard as you

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
access a wider range of both open source and proprietary software vendors

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
</ul>
<p>
Our choices for hosting infrastructure, databases, software frameworks, programming languages and the rest of the technology stack should seek to avoid vendor lock-in and match what successful modern consumer and enterprise software companies would choose today. In particular, digital services teams should consider using open source software, cloud-based, and commodity solutions across the technology stack, because of their widespread adoption and support by successful consumer and enterprise technology companies in the private sector.
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<p>
Open source software (OSS) tends to use and help define open standards and publicly available specifications. OSS products are, by their nature, publicly available specifications, and the availability of their source code promotes open, democratic debate around their specifications, making them both more robust and interoperable.
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<p>
Using open source software means you can benefit from:
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<ul class="lst-spcd">
<li>
solving common problems with readily available open source technology

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
more time and resource for customised solutions to solve the rare or unique problems

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
lower implementation and running costs

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
</ul>
<p>
There are many potential benefits from the greater use of digital services, including greater convenience for users, quicker and more responsive service delivery, increased security and reliability and reduced costs. To maximize these potential benefits and avoid user reliance on less convenient ways of interacting with government, services should be designed to be digital from end-to-end.
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>

</div>

<section class="dpgn-section-checklist">

<h3><span class="glyphicon glyphicon-check text-success" aria-hidden="true"></span>
Checklist</h3>

<p>
<strong>[TODO: Add/revise checklist items]</strong>
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<ul class="lst-spcd">
<li>
Use open standards and open source software at every layer of the technology stack

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Factor in the use of open Standards and open source software when calculating total cost of ownership of a solutions including exit or transition costs

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Avoiding lock-in to any proprietary solutions where open source software and/or open standards are available

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Ensure that software can be deployed on a variety of commodity hardware types

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural-open-standards-solutions-1 dpgn-digital-architectural">
Use open source standards, solutions, components, and leading practices.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-open-standards-solutions-1, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural-open-standards-solutions-2 dpgn-digital-architectural">
Enforce this order of preference: open source first, then platform-agnostic COTS, then proprietary COTS, and lastly custom-built.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-open-standards-solutions-2, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural-performance-availability-scalability-1 dpgn-digital-architectural">
Design for resiliency.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-performance-availability-scalability-1, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural-performance-availability-scalability-2 dpgn-digital-architectural">
Ensure response times meet user needs, and critical services are highly available.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-performance-availability-scalability-2, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural-performance-availability-scalability-3 dpgn-digital-architectural">
Support zero-downtime deployments for planned and unplanned maintenance.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-performance-availability-scalability-3, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural-performance-availability-scalability-4 dpgn-digital-architectural">
Use distributed architectures, assume failure will happen, handle errors gracefully, and monitor actively.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-performance-availability-scalability-4, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
<li>
Design, build and test end-to-end digital services

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
ensure prototypes incorporate the end-to-end user experience <strong>(4. Design the service from start to finish, Digital Service Standard (Ontario))</strong>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
design and test your service to work with the devices and browsers your users use - find out the browsers you must test with <strong>(Digital Service Standard (UK))</strong>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
test the service in an environment that is as similar to the live environment as possible <strong>(Digital Service Standard (Ontario))</strong>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
have a process for testing changes made to the service <strong>(Digital Service Standard (Ontario))</strong>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
have a process for monitoring and testing the service frequently even when changes are not being made <strong>(Digital Service Standard (Ontario))</strong>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Create automated tests that verify all user-facing functionality <strong>(Digital Services Playbook (US))</strong>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Create unit and integration tests to verify modules and components <strong>(Digital Services Playbook (US))</strong>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Run tests automatically as part of the build process <strong>(Digital Services Playbook (US))</strong>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Perform deployments automatically with deployment scripts, continuous delivery services, or similar techniques <strong>(Digital Services Playbook (US))</strong>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Conduct load and performance tests at regular intervals, including before public launch <strong>(Digital Services Playbook (US))</strong>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Determine how users would be affected if your service was unavailable for any length of time and how that’s changed since beta <strong>(Digital Service Standard (UK))</strong>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Determine the most likely ways the service could go offline and how you plan to stop them <strong>(Digital Service Standard (UK))</strong>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Determine your strategy for dealing with outages, including who’s responsible and the decisions they can make <strong>(Digital Service Standard (UK))</strong>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li class="dpgn-automated-decision-deployment-operation dpgn-automated-decision">
Before going into production, develop the appropriate processes to ensure that training data is tested for unintended biases and other factors that may unfairly impact outcomes.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code>dpgn-automated-decision-deployment-operation, dpgn-automated-decision</code></li>
<li><strong>Content source:</strong> <a href="https://docs.google.com/document/d/1LdciG-UYeokx3U7ZzRng3u4T3IHrBXXk9JddjjueQok">Section 6.3.1, Directive on Automated Decision-Making (draft) (GC)</a></li>
</ul>
</details>
</li>
</ul>

</section>

<section class="dpgn-section-guides">

<h3><span class="glyphicon glyphicon-book text-info" aria-hidden="true"></span>
Implementation guides</h3>

<p>
<strong>[TODO: Add/revise implementation guide items]</strong>
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<ul class="lst-spcd">
<li>
<a href="https://references.modernisation.gouv.fr/socle-logiciels-libres">Socle Logiciels Libres (France)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.tresor.gouv.qc.ca/fileadmin/PDF/ressources_informationnelles/logiciels_libres/pollo.pdf">Logiciels libres et ouverts - Guide d’analyse de maturité (Québec)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.tresor.gouv.qc.ca/fileadmin/PDF/ressources_informationnelles/logiciels_libres/ctp.pdf">Logiciels libres et ouverts - Guide d’analyse du coût total de propriété (Québec)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-open-standards-solutions">
<a href="https://www.gov.uk/service-manual/technology/working-with-open-standards">Working with open standards (Service Manual (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-open-standards-solutions</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-open-standards-solutions">
<a href="https://www.gov.uk/service-manual/technology/choosing-technology-an-introduction">Choosing technology: an introduction (Service Manual (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-open-standards-solutions</code></li>
</ul>
</details>
</li>
<li>
<a href="http://finance.gov.au/policy-guides-procurement/">Australian Government ICT Policy Guides and Procurement (AU)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="http://www.finance.gov.au/sites/default/files/australian-government-open-source-software-policy-2013.pdf">Australian Government Open Source Software Policy (AU)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="http://dodcio.defense.gov/Open-Source-Software-FAQ/">DoD Open Source Software FAQ (US)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="http://dodcio.defense.gov/Portals/0/Documents/OSSFAQ/2009OSS.pdf">DoD Memorandum on Guidance Regarding Open Source Software (US)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.w3.org/standards/">W3C Standards (W3C)</a>
<ul class="lst-spcd">
<li>
<a href="https://www.w3.org/standards/webdesign/">Web Design and Applications - W3C Web design standards (W3C)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.w3.org/standards/webofdevices/">Web of Devices (W3C)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
</ul>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.oasis-open.org/standards">OASIS Standards (oasis-open.org)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.gov.uk/service-manual/technology/quality-assurance-testing-your-service-regularly">Quality assurance: testing your service regularly (Digital Service Standard (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-performance-availability-scalability">
<a href="https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices">Designing for different browsers and devices (Digital Service Standard (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-performance-availability-scalability</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-performance-availability-scalability">
<a href="https://www.gov.uk/service-manual/technology/test-your-services-performance">Test your service’s performance (Digital Service Standard (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-performance-availability-scalability</code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.gov.uk/service-manual/technology/exploratory-testing">Exploratory testing (Digital Service Standard (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-performance-availability-scalability">
<a href="https://www.gov.uk/service-manual/making-software/deployment.html">Deployment environments (Digital Service Standard (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-performance-availability-scalability</code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.gov.uk/service-manual/technology/vulnerability-and-penetration-testing">Vulnerability and penetration testing (Digital Service Standard (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-performance-availability-scalability">
<a href="https://www.dta.gov.au/standard/design-guides/performance-testing/">Performance testing (Digital Service Standard (AU))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-performance-availability-scalability</code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.gov.uk/service-manual/technology#testing-your-service">Testing your service (Service Manual (UK)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://testing-cookbook.18f.gov/">Testing Cookbook (18F (US))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.gov.uk/service-manual/technology/uptime-and-availability-keeping-your-service-online">Keeping your service online (Service Manual (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
</ul>

</section>

<section class="dpgn-section-solutions">

<h3><span class="glyphicon glyphicon-refresh text-success" aria-hidden="true"></span>
Reusable solutions</h3>

<p>
<strong>[TODO: Add/revise reusable solutions]</strong>
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>

</section>

<section class="dpgn-section-similar">

<h3><span class="glyphicon glyphicon-bookmark text-muted" aria-hidden="true"></span>
Similar resources</h3>

<ul class="lst-spcd">
<li>
<a href="https://github.com/canada-ca/Open_First_Whitepaper/blob/master/en/2_Open_Standards.md">Open Standards (Open First Whitepaper (GC))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://github.com/canada-ca/Open_First_Whitepaper/blob/master/en/3_Open_Source_Software_Use.md">Open Source Software Use (Open First Whitepaper (GC))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="http://ftp.maps.canada.ca/pub/nrcan_rncan/publications/ess_sst/295/295663/cgdi_ip_33_e.pdf">Natural Resources Canada Free and Open Source Software Licensing Primer (GC)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.tresor.gouv.qc.ca/fileadmin/PDF/ressources_informationnelles/logiciels_libres/ll.pdf">Logiciels libres et ouverts - Guide de référence (Québec)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://github.com/VilledeMontreal/politique-libre/blob/master/Politique/PolitiqueDuLibre.md">Politique du libre (Montréal)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://playbook.cio.gov/#play8">8. Choose a modern technology stack (Digital Services Playbook (US))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://github.com/18F/open-source-policy/blob/master/policy.md">18F Open Source Policy (US)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.gov.uk/guidance/be-open-and-use-open-source">3. Be open and use open source (Technology Code of Practice (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.gov.uk/guidance/make-use-of-open-standards">4. Make use of open standards (Technology Code of Practice (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.gov.uk/service-manual/service-standard/use-open-standards-and-common-platforms">9. Use open standards and common platforms (Digital Service Standard (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.ontario.ca/page/digital-service-standard#section-9">9. Use open standards and common platforms (Digital Service Standard (Ontario))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.dta.gov.au/standard/7-open-standards-and-common-platforms/">7. Use open standards and common platforms (Digital Service Standard (AU))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-open-standards-solutions">
<a href="https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/fr/ceai-gc.html#use-open-standards-and-solutions-by-default">1. Use Open Standards and Solutions by Default (Digital Architectural Standards (GC))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-open-standards-solutions</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-performance-availability-scalability">
<a href="https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#design-for-performance-availability-and-scalability">5. Design for Performance, Availability, and Scalability (Digital Architectural Standards (GC))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-performance-availability-scalability</code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.gov.uk/service-manual/service-standard/test-the-end-to-end-service">10. Test the end-to-end service (Digital Service Standard (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.ontario.ca/page/digital-service-standard#section-4">4. Design the service from start to finish (Digital Service Standard (Ontario))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.ontario.ca/page/digital-service-standard#section-6">6. Test the end-to-end service (Digital Service Standard (Ontario))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://playbook.cio.gov/#play10">10. Automate testing and deployments (Digital Services Playbook (US))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.dta.gov.au/standard/10-test-the-service/">10. Test the service (Digital Service Standard (AU))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.gov.uk/service-manual/service-standard/make-a-plan-for-being-offline">11. Make a plan for being offline (Digital Service Standard (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#leverage-open-standards-and-embrace-leading-practices-including-use-of-open-source-software-where-appropriate">6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
</ul>

</section>

</section>

<section class="dpgn-section-guideline">
<h2 id="use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</h2>

<div class="dpgn-section-intro-guideline">

<p>
<strong>[TODO: Add/revise introductory text]</strong>
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<p>
In order to limit costs, avoid duplication of effort and provide a consistent client experience when using various services, the reuse and adaptation of existing technological solutions is encouraged. If the development of new solutions is required, consider the ability of others to reuse and adapt your work as this will provide additional value on an organizational level.
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<p>
Using common, proven government solutions, approaches, and platforms will help the government:
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<ul class="lst-spcd">
<li>
meet the needs of your users by building with proven solutions

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
make users’ experience of government more consistent, which generates trust

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
save time and money by reusing things that are already available

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
</ul>

</div>

<section class="dpgn-section-checklist">

<h3><span class="glyphicon glyphicon-check text-success" aria-hidden="true"></span>
Checklist</h3>

<p>
<strong>[TODO: Add/revise checklist items]</strong>
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<ul class="lst-spcd">
<li>
Use device-agnostic and modular technology. <strong>(2. Reuse, improve and share technological solutions where appropriate (Do - Digital Design Playbook (ISED)))</strong>
<ul class="lst-spcd">
<li>
Use technology that allows your service to function regardless of the device or operating system. Make sure mobile apps can function on all devices.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Modular technology can be reused, in part or in whole to innovate new solutions and uses for it. It also allows you to add new capabilities and capacities to your technology in response to changing operational environments.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
</ul>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Follow the <a href="https://www.tbs-sct.gc.ca/hgw-cgf/oversight-surveillance/communications/csc-grc-eng.asp">Canada.ca Content Style Guide</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Static assets are served through a content delivery network <strong>(Digital Services Playbook (US))</strong>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural-maximize-reuse-1 dpgn-digital-architectural">
Leverage and reuse existing solutions, components, and processes.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-maximize-reuse-1, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural-maximize-reuse-2 dpgn-digital-architectural">
Select enterprise and cluster solutions over department-specific solutions.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-maximize-reuse-2, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural-maximize-reuse-3 dpgn-digital-architectural">
Achieve simplification by minimizing duplication of components and adhering to relevant standards.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-maximize-reuse-3, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural-maximize-reuse-4 dpgn-digital-architectural">
Inform the GC EARB about departmental investments and innovations.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-maximize-reuse-4, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural-enable-interoperability-4 dpgn-digital-architectural">
Run applications in containers.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-enable-interoperability-4, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural-enable-interoperability-5 dpgn-digital-architectural">
Leverage enterprise digital exchange components such as the GC Service Bus, Digital Exchange Platform, and the API Store, based on fit-for-use.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-enable-interoperability-5, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
</ul>
<section>

<h5 id="cloud-services">Cloud services</h5>

<ul class="lst-spcd">
<li class="dpgn-digital-architectural-cloud-first-1 dpgn-digital-architectural">
Enforce this order of preference: Software as a Service (SaaS) first, then Platform as a Service (PaaS), and lastly Infrastructure as a Service (IaaS).

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-cloud-first-1, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural-cloud-first-2 dpgn-digital-architectural">
Enforce this order of preference: Public cloud first, then Hybrid cloud, then Private cloud, and lastly non-cloud (on-premises) solutions.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-cloud-first-2, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural-cloud-first-3 dpgn-digital-architectural">
Design for cloud mobility and develop an exit strategy to avoid vendor lock-in.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-cloud-first-3, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
<li>
Cloud services are identified and evaluated as the principal delivery option when initiating IT investments, initiatives, strategies and projects.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
In considering how to manage security risks, departments and agencies must follow the <a href="https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/cloud-computing/cloud-security-risk-management-approach-procedures.html">GC Cloud Security Risk Management Approach and Procedures</a> and the <a href="https://www.canada.ca/en/treasury-board-secretariat/services/access-information-privacy/security-identity-management/direction-secure-use-commercial-cloud-services-spin.html">Direction on the Secure Use of Commercial Cloud Services: Security Policy Implementation Notice (SPIN)</a>.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Departments and agencies may deploy solutions that have data-categorization requirements that fall outside of a particular cloud security control profile, as described in the <a href="https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/cloud-computing/government-canada-security-control-profile-cloud-based-it-services.html">Government of Canada Security Control Profile for Cloud-Based GC IT Services</a>, with appropriate risk-mitigation measures that have been developed in consultation with GC security partners.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
To ensure, to the greatest extent possible, the GC’s continuous access to sensitive data, departments and agencies must comply with the <a href="https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/policy-implementation-notices/direction-electronic-data-residency.html">Direction for Electronic Data Residency</a>.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
To ensure business continuity and to manage risks, departments and agencies will develop an appropriate exit strategy before using cloud services.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Departments and agencies should consider portability and interoperability of services when designing cloud-based solutions.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
</ul>

</section>

</section>

<section class="dpgn-section-guides">

<h3><span class="glyphicon glyphicon-book text-info" aria-hidden="true"></span>
Implementation guides</h3>

<p>
<strong>[TODO: Add/revise implementation guide items]</strong>
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<ul class="lst-spcd">
<li class="dpgn-digital-architectural dpgn-digital-architectural-maximize-reuse">
<a href="https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-information-architecture-specification.html">Canada.ca Content and Information Architecture Specification</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-maximize-reuse</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-maximize-reuse">
<a href="https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-style-guide.html">Canada.ca Content Style Guide</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-maximize-reuse</code></li>
</ul>
</details>
</li>
</ul>
<section>

<h5 id="cloud-services-1">Cloud services</h5>

<ul class="lst-spcd">
<li class="dpgn-digital-architectural dpgn-digital-architectural-cloud-first">
<a href="https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/cloud-computing/government-canada-right-cloud-selection-guidance.html">Government of Canada Right Cloud Selection Guidance</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-cloud-first</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-cloud-first">
<a href="https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/cloud-computing/government-canada-security-control-profile-cloud-based-it-services.html">Government of Canada Security Control Profile for Cloud-Based GC IT Services</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-cloud-first</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-cloud-first">
<a href="https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/cloud-computing/government-canada-cloud-adoption-strategy.html">Government of Canada Cloud Adoption Strategy</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-cloud-first</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-cloud-first">
<a href="https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/cloud-computing/gc-white-paper-data-sovereignty-public-cloud.html">Government of Canada White Paper: Data Sovereignty and Public Cloud</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-cloud-first</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-cloud-first">
<a href="https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/cloud-computing/cloud-security-risk-management-approach-procedures.html">Government of Canada Cloud Security Risk Management Approach and Procedures</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-cloud-first</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-cloud-first">
<a href="https://www.canada.ca/en/treasury-board-secretariat/services/access-information-privacy/security-identity-management/direction-secure-use-commercial-cloud-services-spin.html">Direction on the Secure Use of Commercial Cloud Services: Security Policy Implementation Notice (SPIN)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-cloud-first</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-cloud-first">
<a href="https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/policy-implementation-notices/direction-electronic-data-residency.html">Direction for Electronic Data Residency</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-cloud-first</code></li>
</ul>
</details>
</li>
</ul>

</section>

</section>

<section class="dpgn-section-solutions">

<h3><span class="glyphicon glyphicon-refresh text-success" aria-hidden="true"></span>
Reusable solutions</h3>

<p>
<strong>[TODO: Add/revise reusable solutions]</strong>
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<ul class="lst-spcd">
<li class="dpgn-digital-architectural dpgn-digital-architectural-maximize-reuse">
<a href="http://wet-boew.github.io/wet-boew/index-en.html">Web Experience Toolkit (WET)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-maximize-reuse</code></li>
</ul>
</details>
</li>
</ul>

</section>

<section class="dpgn-section-similar">

<h3><span class="glyphicon glyphicon-bookmark text-muted" aria-hidden="true"></span>
Similar resources</h3>

<ul class="lst-spcd">
<li>
<a href="https://sourcecode.cio.gov/Three-Step-Software-Solutions-Analysis/">Three-Step Software Solutions Analysis (Federal Source Code Policy (US))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="http://www.gcpedia.gc.ca/wiki/DDPlayBook_Plan#1._Comply_with_Government_of_Canada_acts.2C_policies.2C_standards_and_directives">1. Comply with Government of Canada acts, policies, standards and directives (Plan - Digital Design Playbook (ISED)) (internal to GC only)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="http://www.gcpedia.gc.ca/wiki/DDPlayBook_Do#2._Reuse.2C_improve_and_share_technological_solutions_where_appropriate">2. Reuse, improve and share technological solutions where appropriate (Do - Digital Design Playbook (ISED)) (internal to GC only)</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-maximize-reuse">
<a href="https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#maximize-reuse">2. Maximize Reuse (Digital Architectural Standards (GC))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-maximize-reuse</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-enable-interoperability">
<a href="https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#enable-interoperability">6. Enable Interoperability (Digital Architectural Standards (GC))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-enable-interoperability</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-cloud-first">
<a href="https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#use-cloud-first">9. Use Cloud First (Digital Architectural Standards Principles (GC))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-cloud-first</code></li>
</ul>
</details>
</li>
<li>
<a href="https://playbook.cio.gov/#play9">9. Deploy in a flexible hosting environment (Digital Services Playbook (US))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#use-and-reuse-common-proven-government-solutions-approaches-and-platforms">6.2 Use and reuse common, proven government solutions, approaches, and platforms</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
</ul>

</section>

</section>

<section class="dpgn-section-guideline">
<h2 id="design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</h2>

<div class="dpgn-section-intro-guideline">

<p>
<strong>[TODO: Add/revise introductory text]</strong>
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<p>
Interoperability is a characteristic of a product or system, whose interfaces are completely understood, to work with other products or systems, present or future, in either implementation or access, without any restrictions. Interoperability should be ensured, via the use of open standards.
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<p>
Application Program Interfaces (APIs) are a means by which business functionality is exposed digitally. They are building blocks that are critical to the successful delivery of government online digital services and expanding service delivery to third party providers. They can also enable greater interoperability between services, optimized experiences across devices and can even lead to innovative new services by enabling third party products to work seamlessly with Government of Canada systems.
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>

</div>

<section class="dpgn-section-checklist">

<h3><span class="glyphicon glyphicon-check text-success" aria-hidden="true"></span>
Checklist</h3>

<p>
<strong>[TODO: Add/revise checklist items]</strong>
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<ul class="lst-spcd">
<li class="dpgn-digital-architectural-enable-interoperability-1 dpgn-digital-architectural">
Expose all functionality as services.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-enable-interoperability-1, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural-enable-interoperability-2 dpgn-digital-architectural">
Use microservices built around business capabilities. Scope each service to a single purpose.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-enable-interoperability-2, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural-enable-interoperability-3 dpgn-digital-architectural">
Run each service in its own process and have it communicate with other services through a well-defined interface, such as an HTTPS-based application programming interface (API).

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural-enable-interoperability-3, dpgn-digital-architectural</code></li>
</ul>
</details>
</li>
<li>
Build services that are API-centric services, which execute most, if not all, functionality through API calls (e.g., connecting frontend to backend through an API)

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Plan out API access from the beginning, designing services to be able to safely and securely expose functionality to other systems and the public.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Design APIs to be compete but also minimal, ensuring the expected functionality is provided but with as few public members per class and as few classes as possible. This makes it easier to understand, remember, debug and change the API.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Design APIs to have clear and simple semantics to make common tasks easy. Rare tasks should still be possible but not the focus. Avoid being overly general, optimizing specific use cases.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Design APIs to be intuitive so that a semi-experienced user can be successful with minimal assistance from the documentation and programmers can easily understand code that uses the API.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
Design APIs to be easy to memorize by implementing a consistent and precise naming convention. Use plain language and recognizable patterns and concepts, avoiding abbreviations where possible.

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
</ul>

</section>

<section class="dpgn-section-guides">

<h3><span class="glyphicon glyphicon-book text-info" aria-hidden="true"></span>
Implementation guides</h3>

<p>
<strong>[TODO: Add/revise implementation guide items]</strong>
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<ul class="lst-spcd">
<li class="dpgn-digital-architectural dpgn-digital-architectural-open-standards-solutions dpgn-digital-architectural-enable-interoperability">
<a href="https://www.gov.uk/guidance/gds-api-technical-and-data-standards">API technical and data standards (Government Digital Service (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-open-standards-solutions, dpgn-digital-architectural-enable-interoperability</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-enable-interoperability">
<a href="https://gdstechnology.blog.gov.uk/2018/02/13/developing-cross-government-api-data-and-technical-standards/">Developing cross-government API data and technical standards (Government Digital Service blog (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-enable-interoperability</code></li>
</ul>
</details>
</li>
<li class="dpgn-digital-architectural dpgn-digital-architectural-open-standards-solutions dpgn-architectural-enable-interoperability">
<a href="https://www.dta.gov.au/standard/design-guides/api/">Application Programming Interfaces (APIs) (Digital Service Standard (AU))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-open-standards-solutions, dpgn-architectural-enable-interoperability</code></li>
</ul>
</details>
</li>
</ul>

</section>

<section class="dpgn-section-solutions">

<h3><span class="glyphicon glyphicon-refresh text-success" aria-hidden="true"></span>
Reusable solutions</h3>

<p>
<strong>[TODO: Add/revise reusable solutions]</strong>
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>

</section>

<section class="dpgn-section-similar">

<h3><span class="glyphicon glyphicon-bookmark text-muted" aria-hidden="true"></span>
Similar resources</h3>

<ul class="lst-spcd">
<li class="dpgn-digital-architectural dpgn-digital-architectural-enable-interoperability">
<a href="https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/gc-earb-ceai/en/gc-earb.html#enable-interoperability">6. Enable Interoperability (Digital Architectural Standards (GC))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#design-for-interoperability-allowing-services-to-be-discovered-and-leveraged-by-the-community">6.3 Design for interoperability, allowing services to be discovered and leveraged by the community</a></li>
<li><strong>Tags:</strong> <code>dpgn-digital-architectural, dpgn-digital-architectural-enable-interoperability</code></li>
</ul>
</details>
</li>
</ul>

</section>

</section>

<section class="dpgn-section-guideline">
<h2 id="open-up-the-data-transactions-and-business-rules-that-underpin-a-service">6.4 Open up the data, transactions, and business rules that underpin a service</h2>

<div class="dpgn-section-intro-guideline">

<p>
<strong>[TODO: Add/revise introductory text]</strong>
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#open-up-the-data-transactions-and-business-rules-that-underpin-a-service">6.4 Open up the data, transactions, and business rules that underpin a service</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>

</div>

<section class="dpgn-section-checklist">

<h3><span class="glyphicon glyphicon-check text-success" aria-hidden="true"></span>
Checklist</h3>

<p>
<strong>[TODO: Add/revise checklist items]</strong>
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#open-up-the-data-transactions-and-business-rules-that-underpin-a-service">6.4 Open up the data, transactions, and business rules that underpin a service</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>

</section>

<section class="dpgn-section-guides">

<h3><span class="glyphicon glyphicon-book text-info" aria-hidden="true"></span>
Implementation guides</h3>

<p>
<strong>[TODO: Add/revise implementation guide items]</strong>
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#open-up-the-data-transactions-and-business-rules-that-underpin-a-service">6.4 Open up the data, transactions, and business rules that underpin a service</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
<ul class="lst-spcd">
<li>
<a href="https://www.dta.gov.au/standard/design-guides/open-data/">Open data (Digital Service Standard (AU))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#open-up-the-data-transactions-and-business-rules-that-underpin-a-service">6.4 Open up the data, transactions, and business rules that underpin a service</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.gov.uk/guidance/gds-api-technical-and-data-standards">API technical and data standards (Government Digital Service (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#open-up-the-data-transactions-and-business-rules-that-underpin-a-service">6.4 Open up the data, transactions, and business rules that underpin a service</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://gdstechnology.blog.gov.uk/2018/02/13/developing-cross-government-api-data-and-technical-standards/">Developing cross-government API data and technical standards (Government Digital Service blog (UK))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#open-up-the-data-transactions-and-business-rules-that-underpin-a-service">6.4 Open up the data, transactions, and business rules that underpin a service</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
<li>
<a href="https://www.dta.gov.au/standard/design-guides/api/">Application Programming Interfaces (APIs) (Digital Service Standard (AU))</a>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#open-up-the-data-transactions-and-business-rules-that-underpin-a-service">6.4 Open up the data, transactions, and business rules that underpin a service</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>
</li>
</ul>

</section>

<section class="dpgn-section-solutions">

<h3><span class="glyphicon glyphicon-refresh text-success" aria-hidden="true"></span>
Reusable solutions</h3>

<p>
<strong>[TODO: Add/revise reusable solutions]</strong>
</p>

<details class="dpgn-content-details hide">
<summary>Content details</summary>
<ul>
<li><strong>Digital&#160;Standard:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html">6. Use open standards and solutions (draft)</a></li>
<li><strong>Guideline:</strong> <a href="/digital-playbook-guide-numerique/en/6-use-open-standards-solutions.html#open-up-the-data-transactions-and-business-rules-that-underpin-a-service">6.4 Open up the data, transactions, and business rules that underpin a service</a></li>
<li><strong>Tags:</strong> <code></code></li>
</ul>
</details>

</section>

</section>


<hr />
<ul class="list-unstyled">
<li><a href="#feedback-popup" aria-controls="feedback-popup" class="wb-lbx" role="button">Give feedback about this page</a></li>
<li><a href="https://github.com/canada-ca/digital-playbook-guide-numerique/tree/master/en/6-use-open-standards-solutions.md">View content source on GitHub</a></li>
<li><a href="https://github.com/canada-ca/digital-playbook-guide-numerique/tree/master/views-vues/standards-normes/en/6-use-open-standards-solutions.md">View template source on GitHub</a></li>
<li><a href="#filter-panel" aria-controls="filter-panel" class="overlay-lnk btn btn-primary" role="button">Show filters</a></li>
</ul>

<div class="text-center">
<ul class="pagination">
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/5-work-in-open-by-default.html" rel="prev">Previous<span class="wb-inv"> - 5. Work in the open by default (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/1-design-with-users.html">1<span class="wb-inv"> - Go to 1. Design with users (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/2-build-in-accessibility-from-start.html">2<span class="wb-inv"> - Go to 2. Build in accessibility from the start (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/3-collaborate-widely.html">3<span class="wb-inv"> - Go to 3. Collaborate widely (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/4-empower-staff-deliver-better-services.html">4<span class="wb-inv"> - Go to 4. Empower staff to deliver better services (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/5-work-in-open-by-default.html">5<span class="wb-inv"> - Go to 5. Work in the open by default (draft)</span></a></li>
<li class="active"><a href="#">6<span class="wb-inv"> - Go to 6. Use open standards and solutions (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/7-iterate-improve-frequently.html">7<span class="wb-inv"> - Go to 7. Iterate and improve frequently (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/8-design-ethical-services.html">8<span class="wb-inv"> - Go to 8. Design ethical services (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/9-address-security-privacy-risks.html">9<span class="wb-inv"> - Go to 9. Address security and privacy risks (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/10-be-good-data-stewards.html">10<span class="wb-inv"> - Go to 10. Be good data stewards (draft)</span></a></li>
<li><a href="/digital-playbook-guide-numerique/views-vues/standards-normes/en/7-iterate-improve-frequently.html" rel="next">Next<span class="wb-inv"> - 7. Iterate and improve frequently (draft)</span></a></li>
</ul>
</div>


{% endraw %}
{:/}
