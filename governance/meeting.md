---
published: true
layout: default-theme-wet-boew-en
title: Meeting summary - WET-BOEW documentatin
description: Summary of what has been discussed at the meeting.
modified: 2018-03-19
---

Summary of what has been discussed at the meeting.

## Roadmap

2018-04-19 ( 9 participants )
* Design decision approved:
	* Design decision 1: Use SVG with img element instead of object
	* Design decision 2: Browser supported
* Design proposal :
	* 2018-4: Basic HTML and progressive enhancement
	* 2018-5: WET API/Blueprint
* UX research :
	* Filtering interface with performance meter

2018-03-14 ( 9 participants )
* Re-introduce and walk through the new [wet-boew documentation](https://wet-boew.github.io/wet-boew-documentation/index-en.html) website.
* We openly discussed about the current projects like the design system and the accessiblity project.
* Introduced and general discussion about what each section means and their purpose.
* We have talk, high level discussion, about what are the requirement for next version of WET. Like the need to better support web apps, be more modular, be less opiniated, have an easy way to setup dev environment (build)
* Collected a list of interested member to be part of a WB5 committee/group/task force.
* WB5 commitee will report to roadmap and wb5 discussion would be aside the roadmap meeting

2018-02-23 ( 2 participants )
* Introduce and walk through the new [wet-boew documentation](https://wet-boew.github.io/wet-boew-documentation/index-en.html) website.
* Improvement for the wet-boew documentation are welcome, submit your suggestion through a github issue or a PR.

## Technical review

Technical review meeting are out of scope by default unless there is a project interest.

2018-04-11 ( 4 paticipants )
* WET feature API/Blueprint
	* It should include the translation string
* i18n (brainstorming)
	* French and English are the official supported language.
	* Use of other language that is not officially supported would be the responsibility of the person/organisation that require to use it. Our i18n design approach would need to continue to support the possibility of having multiple/infinity language. A notice explaining that approach would be included near the i18n information.
2018-04-05 ( 4 participants )
* Talk about what browser is supported for current release of WET
	* 5% and more from [statistic](http://wet-boew.github.io/wet-boew-documentation/research/2018-2-browser-usage.html)
	* Latest and previous released version of major desktop and mobile browser
	* FF, [FF ESR](https://www.mozilla.org/en-US/firefox/organizations/), Chrome, IE11, Edge, Safari, Chrome mobile, Safari mobile
	* Running on Windows 7, Windows 10, android, iOS, MacOS
	* Update the prefix CSS tool [wet-boew issues #8339](https://github.com/wet-boew/wet-boew/issues/8339)
	* Update the browser list for saucelab testing [browser.json](https://github.com/wet-boew/wet-boew/blob/master/browsers.json)
* [wet-boew issue #7631](https://github.com/wet-boew/wet-boew/issues/7631) - Moving the italic issue forward, the next step are:
	* Create a page that summarize the issue, the real concern and the suggested fixes.
	* Poke the communauty and the appropriate web standards office
	* Define a usability testing plan and create test cases of the issue and the suggested fixes.
	* Goal: obtain enough data to create a design decision
	* At the end, a design desion will be released with
* Suggested to use documentation badge like : [https://inch-ci.org/learn_more](https://inch-ci.org/learn_more)
* Suggested to review how we use SauceLabs (it was timing out) and re-activate it
* Try to move forward the Issue template - [wet-boew issues 8316](https://github.com/wet-boew/wet-boew/issues/8316)
* Nick will look at how we can implement AMD for wet feature.

2018-02-28 ( 6 participants )
* Member as been requested to send their priority issue they want to move forward
* Identify for the next meeting Github wet-boew repository that have a low/no activity and close their issue tracker.
	* This is to ease maintenance as new issue or updated issue wont be look at.
	* Issue about those repository would be reported to the wet-boew main project
	* Suggestion on those closed repository:
		* Mention in the repo description that issue can be submited in the wet-boew main project
		* Modify the readme and explain how to submit a issue through the wet-boew main project.
* Suggestions: Create a issue.md template file to provide more guidance for when submiting new issue on Github
	* Eric D. would look to submit a PR
