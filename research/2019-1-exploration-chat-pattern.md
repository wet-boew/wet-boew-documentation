---
published: true
layout: default-theme-wet-boew-en
title: 2019-1 - Exploration of a chat like design pattern
description: Exploration of a chat like design pattern
modified: 2018-11-30
---

## Goal

* Evaluate the accessibility level of a chat like web interface.
* Draft a list of some technical accessibility design requirement.
* Draft an high level plan.

## Some existing tools

### Conversatinal-form

* Github: [https://github.com/space10-community/conversational-form](https://github.com/space10-community/conversational-form)
* Example: [Turning webforms into conversations](https://space10-community.github.io/conversational-form/landingpage/)

Visually, esthetically, the interaction pattern and it's configuration look easy to use from a author perspective. It's rendered interactive user interface of a chat provide a nice user perception of an intimate website experience.

However, a quick look at the rendered content markup and the source code of the page has revealled a lot of web accessibilty error and potential error. The type of error I have found are comprehensive for a developper that have a limited or acquired wrong knowledge of web accessibility. We can presume there would be a lot of work to complete before to use that feature on a website that must meet WCAG 2.0 Level AA.

The conversation flow seems to be set into one unique path.  

#### Finding

* Nice concept of tranforming a simple form into a conversation.
* It abuse of the use of web-component because there is a lost of semantic in different place. Like there is no HTML semantic that differentiate each pieces of the conversation like a list or sectioning.
* The focus are not visible in that working example.
* We can not access to all controls via the keyboard. For example the toogle to switch the conversation into a form and vice-versa.
* The answer provided in the conversation can be removed or modified. It can only be done via mouse and its behaviour aren't predictable. One click modify and the second click delete the last answer. And it can't be operated via keyboard.
* There is an attribute "role" that have an invalid value and other markup issue.
* The input in the conversation are validated, like if the question require an email, the converstaion verifiy if the email is valid, but it only show the error in the input placeholder and are not persistant.
* All the field seem to be required, even the ones that are not marked as optional in the source code.

## Plan draft

* Concept
	* Create wireframe.
	* List a few basic requirement to meet web accessibility
	* Create a story that illustrate each iteraction scenario/functionality of the enhancned interface.
	* Do an environmental scan of existing similar tools
* Feature integration
	* Create wireframe
	* Create functional HTML prototype
	* Test for WCAG 2.0 Level AA conformance
* Enhanced interface
	* Create static HTML prototype (markup snapshoot) of the whole conversation for each key functionality.
	* Test those prototype for WCAG 2.0 Level AA conformance
* Basic interface
	* Define the basic HTML markup that are going to be enhanced into a conversation
	* List all the configurations option required for the conversation enhancement.
	* Create prototype of the basic HTML markup
	* Test those prototype for WCAG 2.0 Level AA conformance
* Interaction developement (JS/CSS)
* Testing and debugging
* Documentation
* Other requirement for publishing the feature in wet-boew

## Requirement and idea of suggestion

### Web accessibility 
* Ensure that all control can be controled via keyboard
* Feature integration ( page wide )
	* Have the button to open up the conversation after and outside the main content of the page, unless it's going to be specific at the page content.
	* Add a "skip to conversion" in the skip navigation links
	* The button should became static after the main content when the page footer became visible
* Feature integration (in page)
	* Ensure the surrounding text introduce the conversation and provide the static form alternative version
* Enhanced interface
	* Can use CSS to have the button floating in the bottom-right, but this should be disabled in small screen
	* When activated, the screen reader user should be immediatly aware of both version and how he can switch between them
	* The conversion should be in a list or section.
	* A skip link, after the input should be provided to jump in the past conservation.
	* Ensure the interface contain all the necessary instruction, like how to modify what has been entered, etc...
	* Make the update/delete label clear. Use a combination of text and icon. 
	* Let optional field to be optional (like able to skip) and idem for the required field.
* Basic interface
	* No floating button in the UI
	* Have the form hard coded after the button
	* Can consider to add the form inside an expand collapse.

### Enhanced interface

* The configuration should be integrated in the basic html interface.
* Set the configuration to the label if those are used as such in the conversation UI
* Set the configuration to the input if those are related to the input and the data collected
* For radio or checkbox, use the legend of the fieldset container as the "configurable label". Other makrup can be consider, like heading but we should target for a consistant markup.

