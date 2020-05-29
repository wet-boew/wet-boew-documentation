---
published: true
layout: default-theme-wet-boew-en
title: 2020-36 - JSON-LD and RDFa
modified: 2020-05-12
---

Additional research regarding of the use of JSON-LD with RDFa.

The goal is to refine our approach as it was defined by DD-8 and try to get an compromise with how structure data is being validated by popular online tool and try to reduce at minimum any duplication.


## Conclusion

As of: 2020-05-12 by @duboip

### Recommended action

* Add `id` attribute to the JSON-LD HTML script element which would always be "wb-script".
* Create a JavaScript function that will be able to update the existing in page JSON-LD anchor local reference by the corresponding RDF content marked up in RDFa.
* Use the same JSON-LD RDF main anchor as the one for the main content of the page. Both will use "#wb-main" as both define content published in it's web page document container.

Example (Page URL: http://example.com)
```
<script id="wb-script" type="application/ld+json">

    {
	"@context": {
		"@vocab": "http://schema.org/"
	},
	"@id": "#wb-main",
	"@type":"Thing",
	"publisher": {
    	"@id": "#wb-publisher"
    }
}
</script>

<body vocab="http://schema.org/" typeof="WebPage">
	<div typeof="Organisation" resource="#wb-publisher">
		<img src="/link/to/a/logo" alt="Publisher name" property="logo" />
		<meta property="name" content="Publisher name" />
	</div>

	<main property="mainContentOfPage" typeof="WebPageElement" resource="#wb-main">

		<h1 property="name">Example</h1>
		<p property="description">Description for the main content of the page</p>

		... Other content tagged with RDFa ...

	</main>
</body>
```

With the objective to produce the following triple, expressed in Turtle
```
<http://example.com#wb-publisher>
	a <http://schema.org/Organisation> ;
	<http://schema.org/logo> <http://example.com/link/to/a/logo> ;
	<http://schema.org/name> "Publisher name" .

<http://example.com#wb-main>
	a <http://schema.org/Thing>, <http://schema.org/WebPageElement> ;
	<http://schema.org/publisher> <http://example.com#wb-publisher> ;
	<http://schema.org/name> "Example" ;
	<http://schema.org/description> "Description for the main content of the page" .
```

The JSON-LD content can be specifically targeted from this URL: <http://example.com#wb-script>


### Findings assumed for Google

The following markup and strategy are:

* Acceptable: Only RDFa
* Acceptable: Only JSON-LD
* Acceptable: Multiple JSON-LD script element. They get merged into one and same dataset. As defined by JSON-LD section 7 and illustrated by the example #145
* Seems not supported: RDFa + JSON-LD where their content crisscross. For example, when I did my test/research, the RDF anchor was not taken in consideration.
* Worth to give a try: Support the RDFa + JSON-LD for content complementary of the main content in order to avoid content duplication. For example the publisher information is available in RDFa markup in the template and the main thing described in JSON-LD would refer to the main page publisher instead of duplicating the information.

The "Seems not supported" option can probably by fixed by a javascript procedure that will complete the JSON-LD content and do automated duplication. That way, it will reduce the risk of human error like copy and paste or forgetting to update the information in several places. That became riskier when there is a large publishing team and the content need to go through a complex publishing and approval workflow.

### Other reference

* [JSON-LD 1.1 specification - Section 7](https://www.w3.org/TR/json-ld/#locating-a-specific-json-ld-script-element)
* [Generate structured data with JavaScript (Google only)](https://developers.google.com/search/docs/guides/generate-structured-data-with-javascript)
* [Google structure data testing tool](https://search.google.com/structured-data/testing-tool)
* [Structure data linter](http://linter.structured-data.org)


## Research

### Trial - Adapt @context to get no validation error

Goal: Play with value of the @context and how the content are defined by each property to reach a point where Google Structure Data testing tool don't generated errors and allowing use to use local RDF anchors.

Note: The tested documents was semantically conforming to JSON-LD specification, RDFa specification and RDF principle. Technically, all those content was acceptable from a web semantic point of view.

Conclusion: The tool didn't considered to not support local anchors.

Reference:
* Google structure tool


#### Sixth experimentation

* Moved the "TypeOf" to be defined via RDFa. Google SD didn't like it either.


#### Fifth experimentation


* Google SD tool complain about not provide "text" for HowToDirection type

```
<script type="application/ld+json">

     {
	"@context": {
		"@vocab": "http://schema.org/",
		"about": { "@type": "@id" }
	},
	"@type":"HowTo",
	"name": "Quarantine",
	"about": {
    	"@id": "#name"
	},
	"publisher": {
    	"@id": "#wb-publisher"
    },

	"step": [
		{
        	"@type": "HowToStep",
            "itemListElement": [ {
            	"@type": "HowToDirection",
                "@id": "#step1"
            } ]
		},
		{
        	"@type": "HowToStep",
            "itemListElement": [ {
            	"@type": "HowToDirection",
                "@id": "#step2"
            } ]
		},
		{
        	"@type": "HowToStep",
            "itemListElement": [ {
            	"@type": "HowToDirection",
                "@id": "#step3"
            } ]
		}
	],
	"@id": "#wb-script"
}
</script>
```

#### Forth experimentation

* Google SD tool complain about step
* Idem with step @type set to "Thing"

```
<script type="application/ld+json">

     {
	"@context": {
		"@vocab": "http://schema.org",
		"about": { "@type": "@id" }
	},
	"@type":"HowTo",
	"name": "Quarantine",
	"about": {
    	"@id": "#name"
	},
	"publisher": {
    	"@id": "#wb-publisher"
    },
	"step": [
		{
        	"@type": "@id",
			"@id": "#step1"
		},
		{
        	"@type": "@id",
			"@id": "#step2"
		},
		{
        	"@type": "@id",
			"@id": "#step3"
		}
	]
}

</script>
```

#### Third experimentation

Try to expand the context, as suggested by the JSON-LD working example.

* The property "about" produce the same results
* Google SD Tool complain about steps - it don't recongnize it

```
<script type="application/ld+json">

     {
	"@context": {
		"@vocab": "http://schema.org",
		"about": { "@type": "@id" },
		"step" : {
			"@id": "@id",
			"@container": "@list"
		}
	},
	"@type":"HowTo",
	"name": "Quarantine",
	"about": {
    	"@id": "#name"
	},
	"publisher": {
    	"@id": "#wb-publisher"
    },

	"step": [
		{
			"@id": "#step1"
		},
		{
			"@id": "#step2"
		},
		{
			"@id": "#step3"
		}
	]
}

</script>
```

#### Second experimentation

* Google don't show an error for "Publisher", but remarked it identify it as a "rdf:typeOf Thing"

```
<script type="application/ld+json">

     {
	"@context":"http://schema.org",
	"@type":"HowTo",
	"name": "Quarantine",
	"about": {
    	"@type": "Thing",
    	"@id": "#name"
	},
	"publisher": {
    	"@id": "#wb-publisher"
    },
	"step": [
		{
			"@id": "#step1"
		},
		{
			"@id": "#step2"
		},
		{
			"@id": "#step3"
		}
	]
}

</script>
```

#### First experimentation

```
<script type="application/ld+json">
	{
		"@context":"http://schema.org",
		"@type":"HowTo",
		"name": "Quarantine",
		"about": {
			"@type": "@id",
				"@id": "#name"
		},
		"step": [
			{
				"@id": "#step-1"
			},
			{
				"@id": "#step-2"
			},
			{
				"@id": "#step-3"
			}
		]
	}
</script>

<main property="mainContentOfPage" typeof="WebPageElement" class="container">
<div class="mwstitle section">
    <h1 property="name" class="wb-inv" id="wb-cont" dir="ltr">
Coronavirus disease (COVID-19)</h1>
</div>
<figure>
	<img src="/content/dam/phac-aspc/images/services/publications/diseases-conditions/coronavirus/covid-19-how-to-self-isolate-home-exposed-no-symptoms/covid-19-how-to-self-isolate-home-exposed-no-symptoms-eng.jpg" alt="" class="img-responsive hidden-sm hidden-xs mrgn-bttm-lg" />
	<figcaption>
		<p><a href="/content/dam/phac-aspc/documents/services/publications/diseases-conditions/coronavirus/covid-19-how-to-self-isolate-home-exposed-no-symptoms/covid-19-how-to-self-isolate-home-exposed-no-symptoms-eng.pdf" rel="external">Download in PDF format</a><br>
		(251 KB, 3 pages)</p>
		<div class="wb-fieldflow" data-wb-fieldflow="{ &quot;noreqlabel&quot;: true }">
			<p>Please select a language:</p>
			<ul>
				<li><a href="/content/dam/phac-aspc/documents/services/publications/diseases-conditions/coronavirus/coronavirus-disease-covid-19-how-to-self-isolate-home-exposed-no-symptoms/how-to-self-isolate-home-exposed-no-symptoms-ben.pdf"><span lang="bn">বংলা</span> (Bengali)</a></li>
<!-- ... List of various langues -->
			</ul>
		</div>
	</figcaption>
</figure>
<p resource="#recognizingAuthority" typeof="GovernmentOrganization"><strong>Organization:</strong> <a href="/en/public-health.html" property="name url">Public Health Agency of Canada</a></p>
<p><strong>Date published:</strong> <time resource="#guidelineDate">2020-05-01</time></p>
<div class="col-md-auto"><div class="mwsgeneric-base-html parbase section">

	<p>People with COVID-19 do not always recognize their early <a href="/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms.html#s">symptoms</a>. Even if you do not have symptoms now, it is possible to transmit COVID-19 before you start showing symptoms or without ever developing symptoms.</p>

	<p>You need to quarantine (self-isolate) for 14 days if, you:</p>
	<ul>
		<li resource="#step-1">are returning from travel <strong>outside of Canada</strong> (mandatory quarantine)*</li>
		<li resource="#step-2">had close contact with someone who has or is suspected to have COVID-19</li>
		<li resource="#step-3">have been told by public health that you may have been exposed and need to quarantine (self-isolate)</li>
	</ul>
	<p><strong>Quarantine (self-isolate)</strong> means that, <strong>for 14 days</strong> you need to:</p>
</div></div>
        <dl id="wb-dtmd">
    <dt>Date modified:</dt>
    <dd><time property="dateModified">2020-05-11</time></dd>
</dl>
    </main>
```



### Environmental scan - Existing suggestion/guidance where JSON-LD and RDFa are complementary


#### JSON-LD github issue, a discussion on how to include surrounding content

Reference: [https://github.com/json-ld/json-ld.org/issues/498](https://github.com/json-ld/json-ld.org/issues/498)

Example:

```
<html><head>
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@id": "",
  "@type": "WebPage",
  "contentLocation": "#this"
}
</script>
</head>
<body resource="#this" vocab="http://schema.org/" typeof="WebPageElement">
  <h1 property="name">Lecture 12: Graphs, networks, incidence matrices</h1>
  <p property="description">These video lectures of Professor Gilbert
    Strang teaching 18.06 were  recorded in Fall 1999 and do not
    correspond precisely to the current  edition of the textbook.</p>
  <div property="publisher" typeof="CollegeOrUniversity">
    <h4 class="footer">About <span property="name">MIT OpenCourseWare</span></h4>
  </div>
  <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/us/deed.en_US"><img
    src="/images/cc_by-nc-sa.png" alt="Creative Commons logo with terms BY-NC-SA." /></a>
</body>
</html>
```

> This mechanism uses the fact that URIs in the JSON-LD and HTML+RDFa are the same, and the JSON-LD can "point" to the HTML by referencing the same URI.

#### Article - WordLift Jan 16, 2020

Reference: [https://wordlift.io/blog/en/mixing-json-ld-and-microdata/](https://wordlift.io/blog/en/mixing-json-ld-and-microdata/)

Mention that microdata and JSON-LD can be mixed and compare Google structure data testing tool behaviour with different markup and mix

Note: Microdata is similar of RDFa with the diffence that microdata is defined by the HTML 5 spec and RDFa by W3C.

**JSON-LD with Microdata**: Get "Unspecified type" error because the tool don't merge both syntax. But that syntax pass the Structure Data Linter.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@id": "https://wordlift.io/merge-jsonld-microdata/microdata.html#id",
            "datePublished": "2020-01-15T09:45:00+02:00",
            "dateModified": "2020-01-15T09:45:00+02:00",
            "mainEntityOfPage": "https://wordlift.io/merge-jsonld-microdata/microdata.html",
            "image": "https://i.picsum.photos/id/959/536/354.jpg",
            "publisher": {
                "@type": "Organization",
                "name": "WordLift",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://wordlift.io/wp-content/uploads/2018/02/logo-1.png"
                }
            }
        }
    </script>
</head>
<body>
<article itemscope itemid="https://wordlift.io/merge-jsonld-microdata/microdata.html#id"
         itemtype="http://schema.org/NewsArticle">
    <h1 itemprop="headline">Merge JSON-LD with Microdata</h1>
    by <span itemprop="author">David Riccitelli</span>
    <p>This page is meant to test whether Google can merge structured data coming from microdata and JSON-LD using the same @id property.</p>
    <p><a href="/">Read more about WordLift here.</a></p>
</article>
</body>
</html>
```
Reference:
* [https://search.google.com/structured-data/testing-tool/#url=https%3A%2F%2Fwordlift.io%2Fmerge-jsonld-microdata%2Fmicrodata.html](https://search.google.com/structured-data/testing-tool/#url=https%3A%2F%2Fwordlift.io%2Fmerge-jsonld-microdata%2Fmicrodata.html)
* [http://linter.structured-data.org/?url=https:%2F%2Fwordlift.io%2Fmerge-jsonld-microdata%2Fmicrodata.html](http://linter.structured-data.org/?url=https:%2F%2Fwordlift.io%2Fmerge-jsonld-microdata%2Fmicrodata.html)


**JSON-LD with JSON-LD**: The tool merge both JSON-LD document as it is one unique document.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@id": "https://wordlift.io/merge-jsonld-microdata/jsonld.html#id",
            "datePublished": "2020-01-15T09:45:00+02:00",
            "dateModified": "2020-01-15T09:45:00+02:00",
            "mainEntityOfPage": "https://wordlift.io/merge-jsonld-microdata/jsonld.html",
            "image": "https://i.picsum.photos/id/959/536/354.jpg",
            "publisher": {
                "@type": "Organization",
                "name": "WordLift",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://wordlift.io/wp-content/uploads/2018/02/logo-1.png"
                }
            }
        }
    </script>
    <script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "NewsArticle",
            "@id": "https://wordlift.io/merge-jsonld-microdata/jsonld.html#id",
            "headline": "Merge JSON-LD with Microdata",
            "author": "David Riccitelli"
        }
    </script>
</head>
<body>
<article>
    <h1>Merge JSON-LD with Microdata</h1>
    by <span>David Riccitelli</span>
    <p>This page is meant to test whether Google can merge structured data coming from 2 sepatate JSON-LD using the same
        @id property.</p>
    <p><a href="/">Read more about WordLift here.</a></p>
</article>
</body>
</html>
```
Reference: [https://search.google.com/structured-data/testing-tool/#url=https%3A%2F%2Fwordlift.io%2Fmerge-jsonld-microdata%2Fmicrodata.html](https://search.google.com/structured-data/testing-tool/#url=https%3A%2F%2Fwordlift.io%2Fmerge-jsonld-microdata%2Fmicrodata.html)


#### Other discussion about RDFa vs JSON-LD

* [JSON-LD syntax github issue: https://github.com/w3c/json-ld-syntax/issues/78](https://github.com/w3c/json-ld-syntax/issues/78)
* [Stack Exchange : https://webmasters.stackexchange.com/questions/117566/using-both-jsonld-and-microdata-to-markup-the-exact-same-information-on-a-page](https://webmasters.stackexchange.com/questions/117566/using-both-jsonld-and-microdata-to-markup-the-exact-same-information-on-a-page)
* [Design decision #8](https://wet-boew.github.io/wet-boew-documentation/decision/8.html)
