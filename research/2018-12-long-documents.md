---
published: true
layout: default-theme-wet-boew-en
filename_fr:
title: Research and finding - Web Experience Toolkit (WET) documentation
description: Details on the research on best approaches on long documents 
modified: 2018-09-18
---

# Share and view ideas: Managing decentralized long documents
[Research](../../../../research-en.html)

Project lead: [David Elisma](mailto:david.elisma@canada.ca?subject=Long%20document%20research%20project)

## Current status: Open
Opened on September 18, 2018 and will be close to new input on May, 2019

The goal of this research project is to gather all the best practices about creating, publishing and managing long documents

## Join in: how to participate
Submissions can be made public on the WET-BOEW Github website. Having Github is not mandatory to participate on this project. You may use any channels that work best for you.

*   **[Share your idea online](https://github.com/delisma/wet-boew-documentation/issues/new)**  
    Use the Github issue tracker. (You will need a Github account to do so.)
*   **[Send us an email](mailto:david.elisma@canada.ca?subject=Long%20document%20research%20project)**  
    Send an email to [David Elisma](mailto:david.elisma@canada.ca?subject=Long%20document%20research%20project) with your ideas or comments to make yourself heard.
*   **Participate on [GCconnex](https://gcconnex.gc.ca/) or [GCcollab](https://gccollab.ca/groups/profile/199780/encollaborating-on-the-web-experience-toolkitfr)**  
    Send us a short comment or idea (keep in mind that GCconnex is exclusive to GoC employees)
*   **[Participate in person](http://wet-boew.github.io/wet-boew/docs/start-en.html#wet-boew-code-sprint)**  
    Community meetings (code sprints) are being held every Tuesday at 200 promenade le Portage. Dates and locations of upcoming meetings will be posted as they are arranged.

## Who is the focus of this research project
The research project will mainly engage:
* third party intermediaries
* content creators
* web publishers

## Key questions for discussion
Your ideas are sought after around 5 topics:
* Organising and planning ideas for the best effect
* Ensuring the flow of arguments in a document
* Providing effective signposting in a document
* Complying with a style guide requirements
* Managing print-friendly version client-side

## Attend a meeting
Community meetings will take the form of code sprint every Tuesday from 9h30 to 15h30 at 200 promenade le Portage, Gatineau, Room 2D302. To join, contact Pierre Dubois, on GCcollab, on GCconnex or on Twitter via @duboi5p.

| Location | Date and time                           | Venue                                                 |
|----------|-----------------------------------------|-------------------------------------------------------|
| Gatineau | October 16, 2018 9:30 a.m. to 3:30 p.m  | 200 promenade le Portage, Room 2D302 (Service Canada) |
| Gatineau | October 23, 2018 9:30 a.m. to 3:30 p.m  | 200 promenade le Portage, Room 2D302 (Service Canada) |
| Gatineau | October 30, 2018 9:30 a.m. to 3:30 p.m. | 200 promenade le Portage, Room 2D302 (Service Canada) |

## What we're working on so far
### Use case and story

As a third party intermediary I am asked to keep a paper copy of many documents found on the website of a particular gouvernmental agency. Some documents are organized under one web section, others are spread accros different web sections.

As a content creator I need to manage and communicate updates of the long documents that I'm responsible to the different stakeholders in an easy manner. One of the main concerns I have in producing and managing long documents is the complexity and the extent of the content.

As a web publisher I am asked to publish content coming in a word processing software format as a dynamic web format. I need to make sure that I comply with the mobile-first approach, all the accessibility guidelines, plain language best practices, and usability desgn aspect.

### Requirements

The purpose of this research is to figure out how long documents can be created, managed, updated and consummed by content creators, web publishers, web users and printer users.

Content must avoid to be repeated through several different HTML pages to ensure an efficient maintainability.

Content must be task oriented.

Ideas must be organized in hierarchy.

Content should be tagged in a way that we may assemble a print-friendly version.

The user should understand the content flow of a long document because of effective signposting by consistent use of appearance and layout through appropriate formatting. This requirement can help a machine make sense of a ducoment too in order to repurpose it into a different format.

When we use formatting, we need to comply with standards that are set by the person to whom we are presenting our document. In essence, this means complying with the Canada.ca Styleguide requirements.

Finally, we must also ensure that the document is accurate and is understood to say what the author intended, by editing, including radical editing.

### Ideas of posible solutions

General ideas on how the issue can be solved.

Like:
* [Specifying best practices and guidelines for creating, publishing and maintaining long document on the Web](2018-assets/2018-12-long-documents/2018-12-Profile-page-long-document.html)
* Merging multiple pages into one big page that would be ready for printing.
* Generating and printing a master PDF client-side
* Improving CSS printing

### Environmental scan

* Research other GC approach
  * CIC have went through a three year project to produce guidelines for internal long documents
* Research non-GC approach

### Solution component

* Merging content
* Cleaning content
* Defining print styling. (Like defining where to do page break, generating a printing document key,...)
* Instruction on how to print or use this feature
* Show progess. Use of a progress bar and of a notification area.
* Compile and display structured data collected during the content merging (Extracting RDFa data and sumarize it at the top of the documents)

### Related information
Documentation on plain language and task oriented documents
* [Producing long document with MS Word](https://www.le.ac.uk/oerresources/psychology/largedocs/page_01.htm)
* Legal drafting

Prototypes of long HTML documents based on the Consultation Profile page:
* https://stratpre1.ic.gc.ca/eic/site/ui-mc-mc.nsf/eng/h_lm04876.html
* https://stratpre1.ic.gc.ca/eic/site/ui-mc-mc.nsf/eng/lm04745.html
* https://stratpre1.ic.gc.ca/eic/site/ui-mc-mc.nsf/eng/lm00458.html

Prototypes of PDF generator from HTML content:
* [JSPDF from Parallax](https://parall.ax/products/jspdf)
* [Why gov.uk content should be published in HTML and not PDF](https://gds.blog.gov.uk/2018/07/16/why-gov-uk-content-should-be-published-in-html-and-not-pdf/)
* [Printfriendly button](https://www.printfriendly.com/button)
