---
published: true
layout: default-theme-wet-boew-fr
title: Décision sur la conception 7 – Décision sur les fonctionnalités expérimentales
description: Defining a strategy to integrate experimental features on the WET
languages: false
hide_breadcrumb: false
date_modified: 2020-01-13
---

## Sommaire

* **Expert:** @duboisp, @GormFrank
* **État:** En attente et actuellement appliquée
* **Last updated:** 2019-10-23
* **Historique:**
	* (2019-10-23) Published
	* (2019-10-23) Approved at the WET roadmap meeting
	* (2019-09-20) Presented at the roadmap meeting
	* (2019-08-21) Trivial editorial edits
	* (2019-06-11) Détails sur l’approche et un exemple officiel
	* (2019-05-16) Présentation à la réunion d’orientation
	* (2019-05-14) Première ébauche et application

## Problème

Il n’y a jamais eu un moyen pratique de mettre à l’essai des fonctionnalités expérimentales sur la BOEW. Si quelqu’un devait créer une nouvelle classe CSS ou un plugiciel JavaScript sur la BOEW, cette personne devrait les mettre à l’essai sur sa machine locale, en contraignant son exposition parmi d’autres choses.

Il y a également de nombreuses autres raisons menant à cette approche, comme les suivantes :

* Avoir plus de fonctionnalités pertinentes à ajouter à la boîte d’outils
* Augmenter le nombre de contributions de la communauté de la BOEW et l’élargir

Pour contourner ceci, la communauté de la BOEW a pensé à une solution.

## Solution proposée

Chaque nouvelle version de GCWeb contient maintenant un ensemble de fonctionnalités expérimentales. Afin d’utiliser une des fonctionnalités, soit s’il s’agit d’une classe CSS, soit d’un plugiciel JavaScript, on peut tout simplement placer telles fonctionnalités autour d’un élément contenant la classe "expérimentale".

Avec cette solution, un contributeur peut tout simplement ajouter de nouvelles fonctionnalités à GCWeb pour les mettre à l’essai et un éditeur ou développeur peut tout simplement les mettre en œuvre sur toute page.

### Approche

L’approche concernant les fonctionnalités expérimentales est conçue pour tester de nouveaux éléments qui pourraient finalement être inclus dans la version standard ou stable de GCWeb ou de la BOEW et non pour freiner leur progrès ou pour diverger sans aucune supervision. Dans ce sens, si des documents pertinents pour un plugiciel ou pour un style ne figurent pas certaines fois en tant que fonctionnalité expérimentale après le lancement d’une version, ils seront abandonnés plutôt qu’inclus dans les normes.

{::nomarkdown}
{% raw %}
<p class="alert alert-info">Par exemple, si quelqu’un ajoutait une fonctionnalité expérimentale pour rendre le site Web Canada.ca rouge au lancement de la version 5.2 sans le documenter (fonctionnalité, possibilités, exemples, etc.) au plus tard avant le lancement de la version 5.3, la fonctionnalité serait signalée pour être supprimée à la prochaine version mineure ou majeure, ce qui serait la version 5.4 ou 6.0 respectivement.</p>
{% endraw %}
{:/}

### Avis importants

Les fonctionnalités expérimentales sont instables et elles sont utilisées à vos propres risques.

* On discutera et réévaluera la disponibilité de chaque fonctionnalité durant la dernière [réunion d’orientation](https://wet-boew.github.io/wet-boew-documentation/index-fr) avant le lancement d’une version mineure ou majeure de GCWeb (sans les correctifs). L’annulation d’une fonctionnalité expérimentale sera communiquée un lancement à l’avance. Cette déclaration signifie que l’éditeur d’une page ayant des fonctionnalités expérimentales doit vérifier s’il y a de nouvelles versions afin de s’assurer que les fonctionnalités expérimentales utilisées seront toujours disponibles lors du lancement.
* Les documents et les exemples pratiques de ces fonctionnalités peuvent être incomplets ou non disponibles.

Une [page de documentation générale sur les fonctionnalités expérimentales](https://wet-boew.github.io/themes-dist/GCWeb/experimental-fr.html) et sur leur état est également disponible.

### Fonctionnalités temporaires

Cette solution fonctionne parfaitement avec des fonctionnalités temporaires qui seraient nécessaires seulement pendant une certaine période et qui ne devraient pas être utilisées après.
