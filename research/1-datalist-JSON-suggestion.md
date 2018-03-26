---
published: true
layout: default-theme-wet-boew-en
title: 1 - Datalist JSON suggestion - Research and finding - Web Experience Toolkit (WET) documentation
description: Design decision followed by WET.
modified: 2018-02-13
---

## Purpose

Customizable autocomple feature.

## Requirements

* Load suggestion / autofill value:
	* From HTML source
	* From CSV documents
	* From JSON documents
* Limit number of displayed items
* Allow customization of the suggested items.
* Follow design pattern of a datalist for accessiblity.
* Have uniform and consistant behavior from various browser. Like IE11, Chrome, Firefox, Edge
* Support grouping of items, like ```<optgroup>``` do for ```<select>```
* Be able to configure how the filtering is applied: startWith, word, any
* Be able to highlight the typed character found within the displayed result. Like putting it in bold so the user can easilly make the liaison between the typed character and the suggested results.
* Having a persistant results, like an "others" options.

## Similar tools

Here a list of similar tools that was found on a February 2018 research

* [jQuery accessible autocomplete list (with some ARIA)](https://a11y.nicolas-hoffmann.net/autocomplete-list/)
	* The UI and the interaction pattern is interesting and seems to address some of the requirement.
	* It don't support loading suggestion from a JSON file.
	* The javascript code don't seems to be optimized, there is a lot of repeative code.
	* The solution simulate the "suggestion" panel, more testing need to be done.
* mfranzke - datalist-polyfill
	* JSFiddle - [https://jsfiddle.net/mfranzke/s6awjfze/](https://jsfiddle.net/mfranzke/s6awjfze/)
	* Github - https://github.com/mfranzke/datalist-polyfill
* [Accessible autocomplete](https://haltersweb.github.io/Accessibility/autocomplete.html)
* [Web Search Engine with Autocorrect and Autofill feature](https://github.com/Pavan18/Web-Search-Engine-with-Autocorrect-and-Autofill-feature)
* [Android Autofill Framework](https://github.com/googlesamples/android-AutofillFramework)
* [React autosuggest](https://github.com/moroshko/react-autosuggest)
* [Datalist JSON suggestion](https://github.com/wet-boew/GCWeb/tree/master/src/plugins/suggest)

### Website using custom datalist
* [http://wet-boew.github.io/themes-dist/GCWeb/demos/suggest/suggest-en.html](http://wet-boew.github.io/themes-dist/GCWeb/demos/suggest/suggest-en.html)
* [http://www.btb.termiumplus.gc.ca/tpv2alpha/alpha-fra.html?lang=fra](http://www.btb.termiumplus.gc.ca/tpv2alpha/alpha-fra.html?lang=fra) - Reverse engenering suggestion for when typing in the field "Terme à cherche"
* [https://www.momondo.ca/?redirect=true](https://www.momondo.ca/?redirect=true)
	* Try to choose a flight, the dropdown item are customized
* National Help Desk: http://srmis-sigdi-iagent.prv

### Feature request description

* The autofill needs to have a text field where users can type, and the options related to what they typed appear below. 
* The autofill should have the option “filter as you type” 
    * Filter as you type: Will populate a list of relevant task containing the characters in series as user types; the list updates for each new character added
    * As the user types, it does not need to be the first word in the task it can be any word within the task that will pick up the options.
* When the user is typing they should not see the entire task list that consists of up to 200 tasks
* Users must select one of the items from the options, they cannot type whatever they want and submit. 
* There needs to be an “other” option accompanying the tasks at all time, so that if the tasks don’t apply to that user, they have an option to select something. 
* The autofill needs to pull the data from the excel spreadsheet that we provide.
* The autofill should allow for the number of tasks to be unlimited so that when we add new tasks in the future it will be some form of a data dump.
* When an option is not available in the list, upon submission, redirect the user to a page where it would be able to submit the new items.
* When an option is not available in the list, let use what the user typed as the value.
* Limit number of displayed items.
* Load suggestion from a JSON dataset.
* Specify what kind of filtering, first matching character in the suggestions, first character of a word, any character. 
* Load suggestion from an array of string in a JSON file
* Be able to limit the number of displayed suggestion
* Be able to change the filtering behaviour like Any, StartWith, Word
