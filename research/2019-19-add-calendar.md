---
published: true
layout: default-theme-wet-boew-en
title: 2019-19 - Add to calendar
description: Add to calendar
modified: 2020-02-17
---

**Project lead:** Eric Guitard

Add to calendar functionality

## Requirements

* As a publisher, I would like to have a new widget to allow visitors to save event details to their devices' calendars, so they can access information related to events from their personal devices.
* As a visitor to a GoC website I would like to be able to save event details, specifically: Title, Start time, End time, Location and Description to my device's calendar so that I can access them from my device.
* As a visitor, I would like this feature to be compatible with Google calendar, Outlook, Apple and Android devices, so that multiple devices are able to save events.
* Support Schema.org vocabulary for Event thing marked by using RDFa Lite

## Existing tools reviews

### carlsednaoui OuiCal

* [OuiCal on github](https://github.com/carlsednaoui/add-to-calendar-buttons)
* working example: 
	* [Add-to-calendar buttons/example](http://carlsednaoui.github.io/add-to-calendar-buttons/example.html)

#### Visual

<img src="2019-assets/add-to-calendar/ouical-design-pattern.jpg" alt="Github OuiCal visual design example" />

* Clickable expandable collapsable item to preview the calendar link options

### iCal Event Maker

* [iCal Event Maker - Create iCalendar .ics to share your event](https://ical.marudot.com/)

## Related standard and references

* [rfc5545 - Internet Calendaring and Scheduling Core Object Specification](https://tools.ietf.org/html/rfc5545)
* [iCalendar.org - iCalendar Resources, Specifications and Tools](https://icalendar.org/)
* [Shhema.org - Envent](https://schema.org/Event)
* [W3c - Date and Time Formats](https://www.w3.org/TR/NOTE-datetime)
* [Google Calendar URL Structure](https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/blob/master/services/google.md)
* [Making a Google Calendar Link](http://useroffline.blogspot.com/2009/06/making-google-calendar-link.html)

## Discussions and findings

* Initial thougth was for authors to create the ics file and Google link manually and add event details using RDFa markup of schema.org/Event pattern.
* For grouping and having the expand/collapse functionality for the 3 calendar links (Google, Apple and Other), 2 solutions were considered:
	* Using a checkbox input type with the aspect of a button.
	* Using list items inside a details summary tag.
* After few discussions and testing, a recommandation for creating a blob for the .ics file via the wb.download functionality from the existing action manager WET pluggin as been considered. 
* In the CSS we have used display: inline-block instead of max-width: max-content since it's working in both IE and FireFox
* According to the rfd5545, the following 3 parameters are mandatory: 
..1. UID (This property specifies the persistent, globally unique identifier for the iCalendar object.)
..2. PRODID (This property specifies the identifier for the product that created the iCalendar object.)
..3. DTSTAMP (This property specifies the date and time that the information associated with the calendar component was last revised in the calendar store)

### 1. Unique Identifier (UID)

Since it MUST be a globally unique in the "VEVENT" calendar component, we have decided to build it as follow: the page URL (path)-the event start date/time-last modified date of the page (mysitefolderpagehtml-20200428T140000-20200423T0830). From a security and privacy standpoint, using the host names, IP addresses, and domain names to construct the value is not recommended. Presently, the event information that will be provided are public information. However, we will think in the best approach to provide that UID in a more private manner. I'm presenlty looking at using hash functionality...more to come.

### 2. Product Identifier (PRODID)

This property specifies the identifier for the product that created the iCalendar object. It represents the owner identifier which indicates the issuer (1st part) and the text identifier (2nd part) which indicates the particular document. The two parts are seperated by a double slash. Owner identifiers that are prefixed with "-//" indicate unregistered owners. Registered identifiers are prefixed with "+//" 

The PRODID will be creates as follow: -//WET-BOEW//Add to Calendar v4.0//

Ref: 
[rfc5545 - 3.7.3](https://tools.ietf.org/html/rfc5545#section-3.7.3)
[Formal Public Identifier (FPI) on Wikipedia](https://en.wikipedia.org/wiki/Formal_Public_Identifier)
[iCalendar.org - 3.7.3. Product Identifier](https://icalendar.org/iCalendar-RFC-5545/3-7-3-product-identifier.html)

### 3. Date-Time Stamp

We have decided to use the last modified date from the page/document to construct this value.

**References:**

* rfc5545: [3.6](https://tools.ietf.org/html/rfc5545#section-3.6), [3.6.1](https://tools.ietf.org/html/rfc5545#section-3.6.1) [3.8.4.7](https://tools.ietf.org/html/rfc5545#section-3.8.4.7), [3.7.3](https://tools.ietf.org/html/rfc5545#section-3.7.3), [3.8.7.2](https://tools.ietf.org/html/rfc5545#section-3.8.7.2)
* rfc7986: [5.3](https://tools.ietf.org/html/rfc7986#section-5.3)

## Wireframe and template

* [Prototype 1 - Include 2 initial design patterns:](2019-19-add-calendar-prototype-1.html)
* [Prototype 2 - created using details summary:](2019-19-add-calendar-prototype-2.html)
* [Prototype 3 - cleaner script using JQuery:](2019-19-add-calendar-prototype-3.html)
* [Prototype 4 - Latest version - new class "wb-addcal-location" / no "property location" element:](2019-19-add-calendar-prototype-4.html)

## Prototype 4 Optimization

* Use append JQuery function in order to create content and insert it into several elements at once and to simplify the script
* Remove value "false" from variable "place" since the value is false by default.
* Building the event details string is in the switch case to avoid getting empty/undefined values
* Relocate following variables to change their scopefrom global to local scope: googleLink, icsLink, eventData, place
* Update variable "url" to something more meanful such as: "eventData"
* Thinking of removing the "Apple" selection and combine it with "Other" since they are provinding the same information and rename the option to something more generic and understandable by users: "Format iCal (ex: iPhone, Outlook...)"
* Removal of the schema decrlaration (vocab="http://schema.org/") since only one declaration is needed and it's already declared in the body element.
* Removal of the 2 div and one section elements with class: container, row and col-md-12 since they are useless and unefficient
* Test multiple events on one page