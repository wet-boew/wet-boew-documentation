---
published: true
layout: default-theme-wet-boew-fr
title: Décision sur la conception 1 – Utiliser des éléments img pour charger des images SVG plutôt que des éléments object
description: How to use SVG in a web page
languages: false
hide_breadcrumb: false
date_modified: 2020-02-10
---

Comment utiliser l’image SVG dans une page Web.

## Sommaire

* **Design decision number:** 1
* **Expert:** @EricDunsworth
* **Submited:** 2018-02-12
* **Validated:** by @duboisp on 2018-02-12
* **Status:** Approved on 2018-04-19
* **Type:** Validation du balisage

## Portée

Dans le contenu Web, lors d’utiliser une image SVG

## Problème

Éviter une erreur de validation HTML lorsqu’un élément object a été utilisé pour charger une image SVG et lorsque tabindex=-1 a été utilisé pour s’assurer que l’accent ne soit pas mis sur l’élément object

## Recommandation

Charger l’image SVG à partir d’un élément img
```xml
<img src="{{assets}}/../{{site.theme}}/assets/logo.svg" alt="" />
```

### Obsolète

Utiliser un élément object pour charger une image SVG

### Migration

Remplacer l’image SVG chargée à partir d’un élément object par une image SVG chargée à partir d’un élément img

#### Exemple

Maintenant :
```xml
<a href="#"><img src="{{assets}}/../{{site.theme}}/assets/logo.svg" alt="" /></a>
```

Avant :
```xml
<a href="#"><object type="image/svg+xml" tabindex="-1" data="{{assets}}/../{{site.theme}}/assets/logo.svg"></object></a>
```

## Mise à l’essai

Activer le valideur Nu sur une page pour charger l’image SVG à partir d’object[tabindex=-1] par rapport à la charger à partir d’img.

### Validation Nu

[page d’accueil WET-BOEW en anglais qui utilise une image dans l’en-tête thème.](https://validator.w3.org/nu/?useragent=Validator.nu%2FLV+http%3A%2F%2Fvalidator.w3.org%2Fservices&acceptlanguage=&doc=http%3A%2F%2Fwet-boew.github.io%2Fv4.0-ci%2Findex-fr.html)

**Résultat prévu :**

Ne pas avoir l’erreur suivante :

> Erreur : Un élément ayant l’attribut tabindex ne doit pas apparaître en tant que descendant de l’élément.

## Preuve

Les logos thème de la WET-BOEW sont une image SVG dont le chargement a été effectué à partir d’un élément object.

Voir :
* [https://github.com/wet-boew/wet-boew/issues/8276](https://github.com/wet-boew/wet-boew/issues/8276)
* [https://github.com/wet-boew/wet-boew/pull/8282](https://github.com/wet-boew/wet-boew/issues/8276)

### Contexte

La raison principale pour laquelle un attribut tabindex="-1" a été utilisé sur des éléments SVG <object> était la numérotation #1432 (ce qui a été corrigé par wet-boew/wet-boew-legacy@cc8b81c). Sans cet attribut, tous les navigateurs essayent de mettre l’accent de la tabulation du clavier à l’intérieur de l’élément <object>, ce qui n’est pas souhaitable.

### Exposé justificatif

Le valideur/valideur#422 a été résolu. L’une des validations qui l’ont corrigé intentionnellement a entraîné le fait que les éléments contenant des attributs tabindex déclenchent une erreur de validation lorsqu’ils étaient situés au sein d’éléments <a>/<button>.

D’après mes observations, validatorBehaviour s’harmonise avec la spécification HTML des W3C (en anglais) :

* Extrait de la section Tabindex des spécifications :
  * "Un élément ayant l’attribut tabindex spécifié est le contenu interactif."
* Extrait de la section Contenu interactif des spécifications :
  * "L’attribut tabindex peut également faire que tout élément soit du contenu interactif."
* Extrait de la section Modèle du contenu pour l’élément a des spécifications :
  * "Modèle de contenu : Transparent, mais il ne doit y avoir aucun contenu interactif ou descendant d’éléments [](https://w3c.github.io/html/textlevel-semantics.html#elementdef-a)."

Donc, qu’est-ce que le rapport avec la BOEW? Il s’avère que la plupart des thèmes de BOEW 4.0 utilisent des logos de site SVG qui sont structurés en tant que liens contenant un élément <object> ayant un attribut tabindex="-1". En d’autres mots, la BOEW niche du contenu interactif (<object tabindex="-1">) au sein d’autre contenu interactif (<a>), ce qui va à l’encontre de la spécification HTML.

Par conséquent, l’erreur suivante apparaît maintenant lors de la [validation virtuelle des pages qui utilisent la BOEW](https://validator.w3.org/nu/?doc=http%3A%2F%2Fwet-boew.github.io%2Fv4.0-ci%2Findex-fr.html)
> **Erreur:** Un élément ayant l’attribut tabindex ne doit pas apparaître en tant que descendant de l’élément <a>.
>
> Depuis la ligne 61, colonne 1; à la ligne 61, colonne 83
>
> ``<object type="image/svg+xml" tabindex="-1" data="./theme-wet-boew/assets/logo.svg">``

À mon avis, la meilleure façon de corriger ceci serait de remplacer l’élément <object> par un élément <img> dans les images SVG de la BOEW et d’enlever les attributs tabindex="-1". Je crois que ceci devrait fonctionner correctement dans tous les navigateurs modernes et maintenir la compatibilité avec le [correctif "remplacement" de l’image SVG](https://github.com/wet-boew/wet-boew/blob/master/src/polyfills/svg/svg.js)

#### Imprimer

Si vos images SVG sont toutes des images en blanc, donc, vous devrez envisager d’appliquer certains filtres CSS afin de fournir une version imprimable.

Appliquez un filtre de luminosité fixé à 0 pour un élément img ayant seulement du contenu blanc. (Pour plus de renseignements, veuillez cliquer sur le lien suivant : https://github.com/wet-boew/wet-boew/pull/8282/files#r167673909.)
```css
img.fltrbr0 {
	filter: brightness( 0 );
}
```
