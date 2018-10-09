# Share and view ideas: Managing decentralized long documents
From [Measurement Canada](https://www.canada.ca/measurement-canada) Project lead: [David Elisma](david.elisma@canada.ca)

## Current status: Open
Opened on September 18, 2018 and will be close to new input on May, 2019

The goal of this research project is to gather all the best practices about creating, publishing and managing long documents

## Join in: how to participate
Submissions can be made public on the WET-BOEW Github website. Having Github is not mandatory to participate on this project. You may use any channels that work best for you.

* [Sahre your idea online](https://github.com/delisma/wet-boew-documentation/issues/new) | 
Use the Github issue tracker. (You will need a Github account to do so.)
* [Send us an email](mailto:david.elisma@canada.ca?subject=Long%20document%20research%20project) | 
Send an email to [David Elisma](mailto:david.elisma@canada.ca?subject=Long%20document%20research%20project) with your ideas or comments to make yourself heard.
* Participate on GCconncet or [GCcollab](https://gccollab.ca/groups/profile/199780/encollaborating-on-the-web-experience-toolkitfr) | 
Send us a short comment or idea
* [Participate in person](http://wet-boew.github.io/wet-boew/docs/start-en.html#wet-boew-code-sprint) | 
Community meetings are being held every Tuesday at 200 boul. le Portage. Dates and locations of upcoming meetings will be posted as they are arranged.

## Who is the focus of this research project
The research project will mainly target:
* third party intermediaries
* content creators
* web publishers

## Key questions for discussion
Your ideas are sought after around 3 topics:
* Organise ideas to best effect
* Ensure the flow of argument
* Providing effective signposting in the document by consistent use of appearance and layout through appropriate formatting
* Complying with a style requirement means choosing the formatting style to follow

## Attend a meeting
Community meeting will take the form of code sprint every Tuesday from 9h30 to 15h30 at 200 promenade le Portage, Gatineau, Room 2D302. To join, contact Pierre Dubois, on gccollab, on gcconnect or on twitter via @duboi5p.

## What we're working on so far
### Use case and story

As a third party intermediary I am asked to keep a paper copy of many documents found on the website of a particular gouvernmental agency. Some documents are organized under one web section, others are spread accros different web sections.

As a content creator I need to manage and communicate updates of the long documents that I'm responsible to the different stakeholders in an easy manner. One of the main concerns I have in producing and managing long documents is the complexity and the extent of the content.

As a web publisher I am asked to publish content coming in a word processing software format as a dynamic web format. I need to make sure that I comply with the mobile-first approach, all the accessibility guidelines, plain language best practices, and usability desgn aspect.

### Requirements

The purpose of this research is to figure out how long documents can be created, managed, update and consummed by content creators, web publishers, web users and printer users.

Avoid repeated content and be more modular.

Content must be task oriented. Ideas must be organized in hierarchy.

Content should be tagged in a way that we may assemble a print-friendly version.

The user should understand the content flow of a long document because of effective signposting by consistent use of appearance and layout through appropriate formatting. This requirement can help a machine make sense of a ducoment too in order to repurpose it into a different format.

When we use formatting, we need to comply with standards that are set by the person to whom we are presenting our document. In essence, this means complying with the Canada.ca Styleguide requirements.

Finally, we must also ensure that the document is accurate and is understood to say what the author intended, by editing, including radical editing.

### Solution idea

General idea on how the issue can be solved.

Like:
* Specify best practices and guidelines for creating, publishing and maintaining long document on the Web
* Merging multiple pages into one big page that would be ready for printing.
* Generating and printing a master PDF
* Improving CSS printing

### Environmental scan

* CIC have went to a three year project for internal long documents
* Research other GC non-GC approachs

### Solution component

* Merging content
* Cleaning content
* Defining print styling. (Like defining where to do page break, generating a printing document key,...)
* Instruction on how to print or use this feature
* Show progess. Use of a progress bar and of a notification area.
* Compile and display structured data collected during the content merging (Extracting RDFa data and sumarize it at the top of the documents)

### Related information
Plain language and task oriented document
* [Producing long document](https://www.le.ac.uk/oerresources/psychology/largedocs/page_03.htm)
* Legal drafting

Prototypes of long HTML document based on the Consultation Profile page:
* https://stratpre1.ic.gc.ca/eic/site/ui-mc-mc.nsf/eng/h_lm04876.html
* https://stratpre1.ic.gc.ca/eic/site/ui-mc-mc.nsf/eng/lm04745.html
* https://stratpre1.ic.gc.ca/eic/site/ui-mc-mc.nsf/eng/lm00458.html

Prototypes of PDF generator from HTML content:
* [JSPDF](https://parall.ax/products/jspdf)
* [Why Goverment of UK content should be published in HTML and not PDF](https://gds.blog.gov.uk/2018/07/16/why-gov-uk-content-should-be-published-in-html-and-not-pdf/)
* [Printfirendly button](https://www.printfriendly.com/button)
