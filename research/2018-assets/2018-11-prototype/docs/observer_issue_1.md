# WET 5 Observer Issue


**This issue has been solved.**

WET5 modules are loaded by using an observer that triggers whenever an element with a 'data-wb5' tag becomes visible.
Because this observer triggers when an element becomes visible, and not only when the element is added to the DOM, an issue arises with elements whose visibility changes.
In this example, a menubar contains two submenus. The submenus are hidden until they are selected in the menu bar. When the submenu is opened, the observer is triggered.
This attaches an event listener to the submenu. Each time the submenu is closed and reopened, another event listener is attached. Thus, with a single keypress, many listeners will
trigger, causes the focus to move past multiple items.

	<ul data-wb5="nav" data-wb5-nav-selector=".menuItem" class="menu">
		<li class="menuItem"> Item 1
			<ul data-wb5="nav" data-wb5-nav-selector="submenuItem" class="submenu">
				<li class="submenuItem"> Sub Item 1.1 </li>
				<li class="submenuItem"> Sub Item 1.2 </li>
				<li class="submenuItem"> Sub Item 1.3 </li>
				<li class="submenuItem"> Sub Item 1.4 </li>
				<li class="submenuItem"> Sub Item 1.5 </li>
			</ul>
		</li>
		<li class="menuItem"> Item 2
			<ul data-wb5="nav" data-wb5-nav-selector="submenuItem" class="submenu">
				<li class="submenuItem"> Sub Item 2.1 </li>
				<li class="submenuItem"> Sub Item 2.2 </li>
				<li class="submenuItem"> Sub Item 2.3 </li>
				<li class="submenuItem"> Sub Item 2.4 </li>
				<li class="submenuItem"> Sub Item 2.5 </li>
			</ul>
		</li>
	</ul>

This issue could be solved by attaching the module only once, onto an element that will always remain visible. 
WET would then traverse through this element's descendents and attach the module to any element with the selector tags.

	<ul data-wb5="nav" data-wb5-nav-selector=".menuItem" class="menu">
		<li class="menuItem"> Item 1
			<ul data-wb5-nav-selector="submenuItem" class="submenu">
				<li class="submenuItem"> Sub Item 1.1 </li>
				<li class="submenuItem"> Sub Item 1.2 </li>
				<li class="submenuItem"> Sub Item 1.3 </li>
				<li class="submenuItem"> Sub Item 1.4 </li>
				<li class="submenuItem"> Sub Item 1.5 </li>
			</ul>
		</li>
		<li class="menuItem"> Item 2
			<ul data-wb5-nav-selector="submenuItem" class="submenu">
				<li class="submenuItem"> Sub Item 2.1 </li>
				<li class="submenuItem"> Sub Item 2.2 </li>
				<li class="submenuItem"> Sub Item 2.3 </li>
				<li class="submenuItem"> Sub Item 2.4 </li>
				<li class="submenuItem"> Sub Item 2.5 </li>
			</ul>
		</li>
	</ul>
