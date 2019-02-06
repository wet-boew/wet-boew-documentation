---
published: true
layout: default-theme-wet-boew-en
title: Your Results
description: Exploration of a chat like design pattern
modified: 2019-02-01
---

Prototype 4: With Data.

{::nomarkdown}

{% raw %}

<div class="col-xs-12 cntnt-here">
   <!-- Results here --> 
</div>
<script>
// GET parameters	
if(findGetParameter('describe')) {
   $('.cntnt-here').append('<p style="font-size: 28px">You are: <strong>' + findGetParameter('describe') + '</strong></p>');
}
if(findGetParameter('situation')) {
   $('.cntnt-here').append('<p style="font-size: 28px">Your situation is: <strong>' + findGetParameter('situation') + '</strong></p>');
}
if(findGetParameter('goal')) {
   $('.cntnt-here').append('<p style="font-size: 28px">Your goal is: <strong>' + findGetParameter('goal') + '</strong></p>');
}
function findGetParameter(parameterName) {
	var result = null,
		tmp = [];
	location.search
		.substr(1)
		.split("&")
		.forEach(function (item) {
		  tmp = item.split("=");
		  if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
		});
	return result;
}
</script>

{% endraw %}

{:/}