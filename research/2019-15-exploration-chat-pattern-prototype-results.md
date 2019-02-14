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

<div class="row mrgn-tp-lg mrgn-bttm-lg">
  <div class="col-xs-12 cntnt-here">
    <!-- Results here -->
  </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
<script>
// GET parameters	
if(findGetParameter('describe')) {
	var describe = findGetParameter('describe').replace("-", " ");
	describe = capitalizeFirstLetter(describe);
   $('.cntnt-here').append('<p style="font-size: 28px">You are: <strong>' + describe + '</strong></p>');
}
if(findGetParameter('situation')) {
	var situation = findGetParameter('situation').replace("-", " ");
	situation = capitalizeFirstLetter(situation);
   $('.cntnt-here').append('<p style="font-size: 28px">Your situation is: <strong>' + situation + '</strong></p>');
}
if(findGetParameter('goal')) {
	var goal = findGetParameter('goal').replace("-", " ");
	goal = capitalizeFirstLetter(goal);
   $('.cntnt-here').append('<p style="font-size: 28px">Your goal is: <strong>' + goal + '</strong></p>');
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
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
</script>

{% endraw %}

{:/}