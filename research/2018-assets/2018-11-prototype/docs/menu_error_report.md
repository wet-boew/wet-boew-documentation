# GCWeb Menu WET 5 Prototype report

[Demo](../stacks/docs/new-menu.html)
Keyboard navigation functionality was added to the GCWeb menu using WET 5 gears. Issues are documented below:

- The menu will not work properly in IE11
- When the menu button is first focused, a press of the Right arrow is needed to open the menu. This should be automatic.
- The links within the menu panels are navigated sequentially using the Up and Down arrows. They should instead be navigated like a grid, using all four arrow keys.
- When focus is within the menu, the tab key will not allow the user to exit. The tab key will only work as expected when the menu button is focused.
- The menu can not be exited using the Left arrow or Escape keys as expected. The only ways to exit the menu are to click away or use the tab key as detailed above.