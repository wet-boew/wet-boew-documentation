---
published: false
layout: default-theme-wet-boew-en
title: Template for expert report
description: Template to report and made recommendation
languages: false
hide_breadcrumb: false
date_modified: 2020-01-13
---


h1. Name of the report

h2. Summary

Report number: {{ Number }}
Author: {{Full Name}}
Approved: Pending | Yes on xx-xxx-xxxx | obselete by:

Type: A11y, UX, as designed, ...

h2. Scope

List of features or where this should be applied
ex: Design system, general web content, WET feature XXX, a combinaison of things, WET-BOEW theme, ....

h2. Issue

Description of why it is an issue.


h2. Recommendation

Describe the right way to do it

h3. Avoid

If know, describe avoidable situation or coding practice

h3. Migration

If applicable, how use can fix their bad code


h2. Test

Status of the test:

h3. [Test name - Type ex: Screen reader]

Expectation to pass: (Description of what is expected)

When it was run:
What was found:
What was the result:



h2. Evidence

Reference and step by step details to support the recommendation.



## Carousel tab template

<a href=@link>
	<figure>
		{Block: Image}
			{CodeSample}
				<img src="" alt="" />
			{/CodeSample}
		{/Block}
		<figcaption>
			<p>
				{ title }

				{Optional: Date and carousel slide type}

					{Case: A date and a carousel slide type}
						<br /><small><time>{ datetime }</time> - { type }</small>
					{/Case}

					{Case: A date and no carousel slide type}
						<br /><small><time>{ datetime }</time></small>
					{/Case}

				{/Optional}   
			</p>

			{Optional: Carousel slide description}
				<p class="mrgn-tp-sm">{ description }</p>
			{/Optional}   

		</figcaption>
	</figure>
</a>




Template when I worked on it

<a href="#">
	<figure>
		<img src="" alt="" />
		<figcaption>
			<p>{ title }</p>
			<p class="small"><time>{ datetime }</time> - { type }</p>
			<p>{ description }</p>
		</figcaption>
	</figure>
</a>




<a href="#">
	<figure>
		{Block: Image}
			{CodeSample}
				<img src="" alt="" />
			{/CodeSample}
		{/Block}
		<figcaption>
			<p>{ title }</p>

			{Optional: Date and feature type}

				{Case: A date and a feature type}
					<p class="small"><time>{ datetime }</time> - { type }</p>
				{/Case}

				{Case: A date and no feature type}
					<p class="small"><time>{ datetime }</time> - { type }</p>
				{/Case}

				{Case: No date and a feature type}
					<p class="small">{ type }</p>
				{/Case}

			{/Optional}

			{Optional: Date and feature type}
				<p>{ description }</p>
			{/Optional}

		</figcaption>
	</figure>
</a>
