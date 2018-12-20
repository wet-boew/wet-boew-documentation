# GCWeb Menu WET 5 Prototype report

##Date: 2018-11-30

[Latest Demo](../stacks/docs/gcweb-v3-menu.html)

### Gears

WET5 uses modular code snippets called 'gears' to attach functionality to markup.

Source: The element on which the gear is attached
Target: The element(s) on which the gear acts

Gears in use:

- Toggle - Adds/removes a class on Target when Source detects an event
- Broadcast - Dispatches an event from Target when Source detects an event
- Hover - Adds/removes a class on Target while the mouse remains in Source or Source's children
- Focus - Adds/removes a class on Target while focus remains in Source or Source's children
- Nav - Adds/removes a class from within a set of Targets using keyboard controls and the 'select' event.

### Engines

A conceptual feature of WET5 is the 'engine'. An engine is a similar to a component in WET4, in that is attaches lots of functionality under one tag. An engine may be composed of multiple gears, as well as its own unique logic. What seperates an engine from a component is that it remains seperate from markup. HTML tags are used to identify parts of the engine, which means any markup is acceptable as long as the proper parst are present.

- The menu engine uses the 5 gears listed above. The 'data-wb5-ext-menu' tags are used to identify key parts of the menu within the markup, such as the menu button, menu items and submenus.

### GCWeb menu demo

Canada.ca will receive a new design including a new menu. As part of WET5 development, this menu has been recreated using gears and engines. 

[Latest Demo](../stacks/docs/gcweb-v3-menu.html)


Features:
- Functionality of the menu changes with viewport size (mobile - tablet - desktop).
    - Gears may be enabled or disabled depending on viewport size
    - Partial support only
- Desktop:
    - Opening and closing the menu using with mouse hover
    - Navigating the menu with the keyboard
- Mobile:
    - Opening and closing the menu using with mouse click
    - Navigating the menu with the keyboard

To Do:
- Improved size-changing functionality
    - Move size tracking logic into the WET5 core.
    - Allow for event dispatching on viewport change
- Improved support for engines
    - Refined syntax for engines within markup
    - Move engine attach function to core
- Improvements to Set Gear
    - Better Grid Navigation
    - Better Horizontal Menu Navigation