---
published: true
layout: default-theme-wet-boew-fr
filename_en: 3
title: Décision sur la conception 3 – API/Plan de la BOEW
description: Defining the WET API and blueprint in order apply semantic versionning
modified: 2018-05-17
---

## Sommaire

* **Expert:** @duboisp
* **Status:** Approved
* **Type:** Améliorer l’interprétation actuelle
* **Last updated:** 2018-05-17
* **Histoire:**
	* (2018-05-17) Approbation à la réunion d’orientation de la BOEW
	* (2018-04-19) Présentation à la réunion d’orientation de la BOEW
	* (2018-04-18) Première ébauche

## Problème

Il n’existe à peu près pas de directives sur la façon d’appliquer la gestion de version. Il n’y a pas d’information officielle pour définir la façon dont un élément ou une fonction dans le cœur de la BOEW ou dans une fonction de la BOEW devrait être évalué afin de savoir si les modifications actuelles présentées par une demande de retraite (PR) auraient un impact majeur, mineur ou insignifiant sur la réorganisation du projet.

Les conventions actuelles en matière de gestion de version utilisées dans le cadre de la BOEW ne sont pas très utiles, au-delà du fait d’être consécutives. Certaines versions insignifiantes ou temporaires présentent également certains changements non rétrocompatibles non documentés.

## Solution proposée

Utilisez la [gestion sémantique de version 2.0.0](https://semver.org/lang/fr/) pour la BOEW. Cependant, afin de la suivre, vous devez définir l’interface de programmation d’applications (API) de notre produit.

Une fonction de la BOEW comprend plusieurs aspects et composantes, ce qui n’est pas limité à l’API. La structure de la conception précisée par le plugiciel est la mise en page. La façon dont le plugiciel peut être configuré devrait être une partie intégrale de la gestion de la version de la fonction de la BOEW. Tous les aspects multiples dont leur version a été gérée sont définis en tant que plan de la fonction de la BOEW.

Lorsqu’on interprète le terme « plan de la fonction de la BOEW » par rapport à la gestion sémantique de version 2.0.0, la définition est la même que celle du terme "API publique".

Le plan doit être documenté et surveillé. Un plan non officiel documenté d’une version donnée de la BOEW est considéré comme hors de la portée et devrait être considéré comme une fonction expérimentale qui risque de changer.

Un exemple concret ne fait pas implicitement partie du plan d’une fonction de la BOEW.

## Plan de la fonction de la BOEW

The following are the blueprint component for a given WET feature:
* **Fonction:** description du type d’interaction du plugiciel, tel qu’événements, exécution d’actions ou rappels
* **Configuration:** description de la façon d’établir un comportement et des résultats, ce qui est habituellement réalisé par l’envoi de paramètres tels que ceux en format JSON, pour que les données en ce format fassent partie du plan. Les variations de données entrent également dans le plan, par exemple, l’utilisation de la classe CSS en tant que type de configuration, l’utilisation de l’attribut données personnalisées-*, etc.
* **Interface utilisateur:** ceci définit le balisage et la sémantique HTML requis par une interface perfectionnée et par une interface de base. Ceci comprend des variations d’une interface perfectionnée lorsque la configuration compatible est appliquée à la fonction.
* **Source de données:** ceci représente une couche d’abstraction de l’information contextualisée recueillie à partir de l’interface HTML de base. En plus, pour chaque source de données externe, ceci définit la structure de l’information requise pour la fonction de la BOEW.
* **Mode et style:** couche de présentation de la structure visuelle et de l’information sur le style au moyen d’une combinaison de l’interface utilisateur et la configuration. Souvent, ceci serait présenté en tant que maquette fonctionnelle avec quelques notes de conception.
* **Chaîne i18n:** liste des chaînes de traduction utilisées par la fonction.

Pour une fonction de la BOEW, il peut y avoir de diverses variations par composante du plan.

## Prochaines étapes

* Présenter cette note à la réunion d’orientation de la BOEW
* Concevoir un squelette de documentation pour le plan
* Utiliser cette interprétation pour la conception de la BOEW 5 et pour les questions de résolution concernant le mode HTML de base
