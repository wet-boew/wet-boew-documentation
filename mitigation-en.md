---
published: true
layout: default-theme-wet-boew-en
title: Mitigation Plan
hide_breadcrumb: false
date_modified: 2020-01-13
---

## Actif mitigation plan

### W3C Validation error in the Mobile menu

**Last review:** December 14, 2017

**Issue that need to be resolved:** The mobile enhanced menu do not validate against the current Nu/W3C Validator.

**Interim solution**: Keep ```aria-setsize``` and ```aria-posinset``` as it was implemented in the menu plugin.

**The solution**
The proposed solution will need extensive testing with all supported browser and assistive technology.
Prior to merge the new solution, the following task would need to be completed
* [ ] Validate or invalidate the need of using ```aria-setsize``` and ```aria-posinset```. Those attribute was added based on bad user experience for navigating the menu (including mobile) with an assistive technology like NVDA and JAW.
* [ ] Research and cite the actual reference in the WAI-ARIA specification that explicitly said it's not conforming to spec. Even if the Nu validator are reporting an error, we need to ensure that is not a bug in the validator or a miss-interpretation of the spec by the validator.
* [ ] Documents the markup structure of current menu template and the enhanced menu template.
* [ ] Design and propose a few enhanced menu markup structure showing alternate solution along with an explanation of the navigation model.
* [ ] Investigate the tabbed interface mobile mode which use a similar mobile design approach and make proposal/recommendation.
* [ ] For the implementation of the solution, the developer would need to closely review the code in the menu.js, to look at how the "keydown" event is managed, ensure the new approach is consistent for the megamenu vs the mobile menu and the most important to do a lot of testing.

**Github discussion:** [issue #8238](https://github.com/wet-boew/wet-boew/issues/8238)
**Created:** December 14, 2017

## Completed
