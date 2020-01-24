---
published: true
layout: default-theme-wet-boew-en
title: 2020-32 - WET-BOEW 5 year high level plan
description: High level five year plan for the Web Experience Toolkit project.
modified: 2020-01-23
---

This is published for reference only. Any date bellow are at medium risk to change.

This represent the view of the administrator, Pierre Dubois as the date of the publication. Any date bellow might change depending on how the wet-boew project will progress and growth during the comming months and years.


## Proposal for a WxT (WET-BOEW) defintion

Open source web framework for the publication of accessible, usable, interoperable and interactive web content by author and developer while following strict web accessibility standard (WCAG 2.0 Level AA), World Wide Web (W3C) standard, international standard (IETF, ECMA, ISO), industries best practice, expertise and usability research.


## 5 year plan

As January 9, 2020

* Quick history
* WET 5 overview
* GCWeb (Canada.ca reference implementation)
* Documentation
* Governance
* Product
* WET 4 (Current)
* WET 5 (In development)
* WET next (Future)
* Community
* Outreach


### Quick history

#### Pre-2016

The wet-boew project has been transferred from Treasury Board - Web Renewal to Service Canada - Principal Publisher. Project community contribution has slowed down.

#### Pre-2018

The project was externally perceived as a going stale project. Although, the project was still receiving patches and some new feature was successfully added to GCWeb. Some work was initiated to better classification of Github issue and more regular meeting was organized to review community contribution.


### WET 5 overview

I am leading the development of WET 5 to enable the creation of a single page application that would be able to interact with multiple and different API services. WET 5 are going to leverage a data first design approach. Its data core are going to follow the W3C RDF 1.1 related standard. I am expecting with new WET 5 be able to create web content that would meet WCAG 2.1 Level AA but to also be able to produce, consume and interact with 5 star linked data (https://5stardata.info/en/ ).

* Data first design
* Use vanilla JavaScript and CSS
* 5 star Linked Data support
* Data layer and RDF support
* Able to consume and interact with API services like via GraphQL and a Restful protocol.
* Template engine interactive and bound with the data layer
* Internal reasoner (ex. to support owl:sameAs, schema.org<http://schema.org>, RDFS vocabularies)
* Parse Notation 3, RDFa, CSV on the web and JSON-LD documents.
* WET 5 feature documentation structured to ease implementation with other framework. (like ReactJS, VueJS, Angular)


### GCWeb  (Canada.ca reference implementation)

2020 - 2021
* Migrate to WET 5 framework to support a minimum viable reference implementation product
* Migrate to Bootstrap 4

2021 - 2022
* Complete template migration and feature development to fully support the reference implementation in WET 5.
* Apply major change from the design system in the WET 4 framework

2024
* End of life of GCWeb build with WET 4


### Documentation Roadmap

2018 - Today
* Improved project transparency by publishing practice as Design Decision
* Following semantic versioning 2.0.0
* Defined the public application programming interface (API) for wet-boew and gcweb
* Documentation of new, reviewed or improved feature based on the public API.
* Improved quality of the release note to be a more practical tool for implementers.
* Introduction of provisional feature with partial documentation and with a review process
* Publication of in progress document about initiative that require research and finding
* Publication of usability research and accessibility report documents

2020 - 2022
* Reorganize, renew and align the technical documentation of wet-boew, gcweb and the Canada.ca design system to reduce ambiguity for author, developer and content designer.
* Rewrite the technical documentation to be completed as per the API as a deliverable of WET 5

2021 - 2023
* Publish technical migration documentation necessary for a complete migration from WET 4 to WET 5.
* Publish previous usability research that still support current design.


### Governance

2018 - Today
* Started monthly meeting, called WET-BOEW Roadmap meeting, to review progress of peer projects contribution, to discuss WET-BOEW project practice.
* Started weekly technical meeting to review contribution made to WET-BOEW and GCWEB project.
* Started weekly all day code sprint to develop contributor skill, create a community capacity and to provide ad-hoc guidance to the WET-BOEW and WMS community.

2020 - 2022
* Establish a formal review process for product created under the digital transformation office (TBS) new experimental process created under the web optimization initiative.

2021 - 2025+
* Create and maintain a private list of people recognized as WET expert with a mechanism to ensure we can evaluate their expertise level and domain.


### Product - WET 4 (Current)

2020 - 2022
* Keep the project healthy and active
* Address major and popular issue

2021 - 2022
* Move WET 4 issue into a legacy repository

2022 - 2023
* Only accept security patch and community contribution

2024
* Product end of life


### Product - WET 5 (In development)

Summer 2020
* Release alpha/beta WET 5

2021
* Release WET 5 stable

2021 - 2022
* Develop migration guide and conversion script from WET 4 to WET 5

2023 - 2025
* Add support for the W3C standardized decentralized identifier

2025+
* Product end of life


### Product - WET next (Near future)

2024 - 2025+
* WebRTC (Real Time Communication)
* Web assembly
* RDF 2.0 or/and the standard issued from join effort to align RDF, Property Graph and SQL
* Decentralized identifier


### Community

2018 - Today
* Keep up to date with classifying issues and participating to the major and trending ones.

2021 - 2025+
* Increase the awareness for the non-Government of Canada implementers


### Outreach

2020
* Organizing the WET-BOEW 2020 Codefest event.

2021
* Organizing the WET-BOEW 2021 Codefest event.
* Developing learning material and promotion events for WET 5

2022 - 2025+
* Organizing the annual WET-BOEW promotion event.
* Continue the development of learning material and promoting WET 5
* Create a permanent group responsible for raising awareness, organising events, developing learning material, web publishing and promoting WET like by participating in accessibility and IT conference/event.
