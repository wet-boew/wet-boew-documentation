---
published: true
layout: default-theme-wet-boew-en
title: 2019-16 - Réctification du comportement du input[type=date]
description: Exploration of a jQuery 3 migration
languages: false
hide_breadcrumb: false
date_modified: 2020-01-13
---

## Project Description

Réctification du comportement du ```input[type=date]``` pour Edge.
Permettre au plugin polyfill Datepicker d'être appliqué sur des ```input[type=text]```.

## Problème

Comme nous le savons déjà, le but d'un polifyll est d'être appliqué lorsqu'un navigateur n'offre pas de solution par défaut.
Par exemple, dans IE, il n’y a pas de DatePicker offert. Donc pour compenser, le DatePicker WET comble le manque.  Pour ce qui est de Firefox, il y en a déjà un donc nous n’avons pas besoin du Polyfill.
Mise à part le navigateur Edge. Celui-ci nous force à utiliser l’interface que plusieurs trouvent non-intuitive avec la souris ou les flèche du clavier. Il n’y aucune façon de taper la date manuellement avec le pavé numérique.


### Étape pour répéter le problème
Dans une page web standard, veuillez mettre une champ ```input[type=date]``` et visualiser la page avec le navigateur Microsoft Edge. Vous allez voir apparaitre le DatePicker par défaut du navigateur.

## Comportement

Bien que ce Datepicker respecte tous les standards d'accessibilités, celui-ci n'est pas aussi intuitif que nous en sommes habitué.
* Nous sommes obligé de l'utiliser avec la souris ou bien les flèches du clavier.
* Il n'y a aucune facon de tapper une date manuellement avec les touches numériques.

### Attendu selon les W3C spec

Incluant en autres: HTML5 et WAI-ARIA

### Avec les autres furteur

### IE11
Ce navigateur n'offre aucun datepicker par défaut donc celui de WET s'applique automatiquement sur tous les champs ```input[type=date]```.

### Edge
Ce navigateur offre un Datepicker par défaut donc celui de WET ne s'applique pas. Par contre, il n'est pas possible d'entrer une date manuellement.

### FireFox
Ce navigateur offre un Datepicker par défaut donc celui de WET ne s'applique pas. Par contre, il est possible d'entrer une date manuellement.
## Cas d'utilisation
Dans une situation où est-ce que nous utilisons les champs date pour des filtres de recherche dans un rapport, ce n’est pas un problème. Nous pouvons faire avec.
Par contre, dans la situation que nous avons un formulaire avec plus de 50 champs incluant 10 dates, nous aimerions offrir la possibilité à nos utilisateurs d’augmenter leur productivité en les tapant manuellement.
Donc dépendant, du besoin, nous aimerions pouvoir offrir une meilleur expérience utilisateur.
Ou bien permettre à l'utilisateur de pouvoir copier coller des dates dans les formulaires.

## Questionnements
Bien que ce raisonnement va un peu à l’encontre du concept de « polyfill », il y a des questions à se poser.
C’est pour cette raison que j’ai vu des gens utiliser des DatePicker 3rd Party. Tel que Bootstrap DatePicker. Le problème avec ceux-ci est qu’il ne respecte pas toujours tous les standards d’accessibilité WCAG 2.0.
J’avais trouvé une alternative qui semblait respecté la plupart des standards et qui permettait beaucoup de fonctionnalités. Le voici : http://keith-wood.name/datepick.HTML.
Par contre, pourquoi utiliser des ressources et du temps à essayer d’incorporer un autre plugin quand nous en avons un qui fonctionne très bien et qui respecte déjà les standards du département. C’est-à-dire le DatePicker Wet.
Donc, bien qu’il faut encourager les développeurs à suivre les bonnes pratiques incluant celle des polyfills, la réalité est qu’il utilise des plugins 3rd party quand même. Alors dans ces situations, nous pourrions avoir la possibilité d’appliquer le DatePicker sur un champ texte.

## Solution appliqué actuellement dand l'industrie

La plupart des sites populaires utilisent des Datepicker conçu en Javascript. Ceux-ci sont préféré parce que :  
* ils sont plus flexible
* ils sont plus customisable
* ils offrent une meilleure expérience d'utilisation.

Exemple : le site de AirBnb pour leur filtre de recherche. On peut voir qu'un simple Datepicker de navigateur ne pourrait offrir de tel fonctionnalitées.
## Solution proposé
Bien qu'il existes beaucoup de plugin JS datepicker puissant sur le web. Je crois que celui offert par WET est amplement efficace.

En analysant le fichier « datepicker.js », j’ai remarqué que celui-ci était instancié via un sélecteur de base défini dans le haut de la page.
Ce que nous avons fait :
* Nous avons fait une copie locale du fichier dans notre projet directement.
* Nous avons changé le « selector » pour inclure seulement les fichiers de type « text » avec une classe spécifique propre à nous. (force-wet-datepick)

```
var componentName = "wb-date",
selector = "input[type=text].force-wet-datepick",
initEvent = "wb-init." + componentName,
setFocusEvent = "setfocus.wb",

// Rest of the code ommited...
```

Ensuite nous avions un script maison qui exécutait cette logique.

```
// Global variable for the plugin configuration
var ForceWetDatepick = {
    State: true,
    DatepickerJsUrl: "/Content/Libs/ForceWetDatepicker/WetDatepickOnTextInput.js",
    DatepickerCssUrl: "/Content/Libs/ForceWetDatepicker/Datepicker.css",
}

$(document).ready(function (event) {

    if (HasToForceWetDatePick() === false) {
        // This is the main core of the plugin.
        // If the validation return true, it will load dynamically load the dependencies.
        Modernizr.load([
            {
                test: ValidateStateForWetDatepick(),
                yep: [
                    ForceWetDatepick.DatepickerJsUrl,
                    ForceWetDatepick.DatepickerCssUrl,
                ]
            }
        ]);
    }


});


function ValidateStateForWetDatepick() {
    if (ForceWetDatepick.State) {
        transformInputDateToText();
        return true
    }
    else {
        return false
    }
};

function transformInputDateToText() {
    $("input[type=date]").attr("type", "text").addClass("force-wet-datepick");
}

```
C'est vraiment une solution temporaire mais ça fonctionne. Notez que nous avons mis une fonction transformes les champs ```input[type=date]``` en ```input[type=text]``` dynamiquement afin de ne pas devoir changer la moindre ligne de code dans l'application.

## Solutions proposées

### Solution 1 : Changer le selector courrant.

Nous pourrions modifier le « selector » courant comme ci-dessous. Ce serait un changement minimal qui serait très simple à effectuer et qui ajouterais une grosse flexibilité pour les développeurs.
Selon-moi ce serait un win/win.

Valeur initiale
> ```input[type=date]```

Nouvelle valeur
> ```input[type=date], input[type=text].wb-datepick```

### Solution 2 : Ajouter plus de flexibilité sur le plugin.

Si on reprend la logique actuelle des autres plugins WET, nous avons la flexibilité de les configurer de différentes manières.
Exemple avec le DataTables
```
<table class="table wb-tables" data-wb-tables="{
                   'configA' : true
                   }">
```

Et si nous créons quelque chose de similaire mais pour le datepick.js.
Exemple : `<input type="text" value="" class="wb-datepick form-control" />`

Dans une autre situation,  disons que nous aimerions offrir la possibilité de forcer le Wet Datepicker selon certaines conditions.
* Dépendant du navigateur.
* Dépendant de l'appareil ( ex: tout sauf les mobiles)

Et si les conditions sont respecté, il pourrait automatiquement se transformer en type text.

Car peut-etre que sur les PC, il serait intéressant de forcer le WET. Par contre, sur les mobiles, nous voudrions garder la datepciker natifs de Safari.

Voici un petit PoC mais vous pouvez voir ou je veux en venir.
```
<input type="date" value="" class="wb-datepick form-control" date-wb-datepick="
                   {
                        includedBrowser: [{
                            browser : 'edge',
                            excludeDeviceType : 'mobile'
                        },
                        {
                            browser : 'chrome',
                            excludeDeviceType : 'mobile'
                        }]          

                   }
                   " />
```
## Wireframe

ex: appercu ou details sur l'agencement visuelle du composant


## Prototype functionelle

## Résultat des mise à l'essaie des prototypes
