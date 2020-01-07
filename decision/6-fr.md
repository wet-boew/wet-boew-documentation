---
published: true
layout: default-theme-wet-boew-fr
filename_en: 6
title: Décision sur la conception 6 – Mode HTML de base et amélioration progressive
description: Explain the versionning strategy for wet-boew project
modified: 2019-09-22
---

## Sommaire

* **Expert:** @duboisp
* **État :** En attente et actuellement appliqué
* **Type:** Améliorer la pratique actuelle
* **Last updated:** 2019-09-22
* **Historique:**
	* (2019-09-22) Published
	* (2019-09-20) Approved at the WET roadmap meeting
	* (2019-08-21) Trivial editorial edits
	* (2019-05-16) Présentation aux réunions d’orientation de la BOEW
	* (2019-02-11) Première ébauche et application

## Problème

La version de la BOEW était toujours séquentielle, mais elle n’était pas toujours uniforme avec le type de modifications présentées. Ceci a forcé les responsables de la mise en œuvre à réaliser des tests et des analyses plus approfondis lors de la mise à jour de leur version de la BOEW ou de GCWeb actuelle.

En plus, les produits de la BOEW et les thèmes de GCWeb n’évoluent ni s’améliorent nécessairement de la même façon. L’utilisation du même numéro de version pour les deux produits n’a pas représenté la réalité de ces produits.

## Historique
Les projets de la BOEW et de GCWeb n’ont pas suivi la gestion sémantique de versions. Cela signifie que chaque nouvelle version est potentiellement une version mineure en raison de sa fonctionnalité d’ajout et même certaines versions contiennent des modifications non rétrocompatibles.

Les thèmes et la BOEW ont le même numéro de gestion de version, peu importe les modifications apportées.

## Proposition

Cette décision sur la conception propose l’action de suivre la Gestion sémantique de versions 2.0.0 pour tous les projets de la BOEW gérés de façon centrale (y compris le thème de GCWeb et de Canada.ca) et pour une variante du projet principal de la BOEW.

## Sommaire de la Gestion sémantique de versions

En fonction du numéro de version Majeur.Mineur.Correctif, il faut augmenter ce qui suit :

1. Le numéro de version **majeur** lorsque vous effectuez des modifications API incompatibles;
2. Le numéro de version **mineur** lorsque vous ajoutez une fonction de façon rétrocompatible;
3. Le numéro de version **correctif** lorsque vous appliquez des correctifs rétrocompatibles aux bogues.

Des libellés supplémentaires pour les versions préliminaires et des métadonnées des versions sont disponibles en tant qu’extensions du format **Majeur.Mineur.Correctif**.

Voir la version complète du document de la [Gestion sémantique de versions 2.0.0](https://semver.org/lang/fr/) pour de plus amples renseignements.

### Variante du produit de la Gestion sémantique de versions de la BOEW

Cette définition s’applique seulement au produit créé à partir des sources dans [GitHub](https://github.com/wet-boew/wet-boew) et elle est probablement compatible avec toutes les autres versions avant la publication de la version 4.0.29.1 sous l’identifiant « 4.x ».

Cette variante comprend l’ajout d’un suffixe numérique afin d’identifier la version architecturale du produit.

Par exemple, la version 4.0.29.1

* **Architecture**: 4
* **Majeur**: 0
* **Mineur**: 29
* **Correctif**: 1

#### Détails sur la variante de la gestion de versions de la BOEW

En fonction du numéro de version **Architecture.Majeur.Mineur.Correctif**, il faut augmenter ce qui suit :

1. Le numéro de version **architecture** lorsque l’API interne, telle que l’emboîtement des plugiciels, ou la méthodologie d’intégration interne et externe du produit ont des modifications non rétrocompatibles;
2. Le numéro de version **majeur** lorsque vous effectuez des modifications rétrocompatibles aux fonctions;
3. Le numéro de version **mineur** lorsque vous ajoutez des fonctions rétrocompatibles;
4. Le numéro de version **correctif** lorsque vous appliquez des correctifs rétrocompatibles aux bogues.

Des libellés supplémentaires pour les versions préliminaires et des métadonnées des versions sont disponibles en tant qu’extensions du format **Architecture.Majeur.Mineur.Correctif**.

##### Modification à la spécification de la Gestion sémantique de versions (applicable seulement à WET-BOEW.Core)

En plus des modifications ci-dessous, le reste des spécifications demeurent intactes.

Les modifications à la disposition 2 comprennent les suivantes :

> 1. Un numéro de version normal DOIT être en format A.X.Y.Z, où A, X, Y et Z sont des nombres entiers non négatifs et NE DOIVENT PAS commencer par zéro. A est la version architecturale, X est la version majeure, Y est la version mineure et Z est la version corrective. Chaque élément DOIT augmenter de façon numérique. Par exemple 2.1.9.0 -> 2.1.10.0 -> 2.1.11.0 -> 3.0.0.1.

La disposition 8-1 doit être ajoutée après la disposition 8 et elle doit énoncer ce qui suit :

> 8-1. L’identifiant de version architecturale A (A.X.Y.Z | A > 0) **doit** être augmenté si l’on introduit des modifications non rétrocompatibles pour l’emboîtement des plugiciels ou pour la méthodologie d’intégration interne et externe du produit. Ceci peut comprendre en même temps des modifications majeures, mineures ou correctives. Les identifiants de version majeurs, mineurs, et correctifs doivent être fixés à zéro lorsque l’identifiant de version architecturale est augmenté.

## API publique

L’API publique de chaque plugiciel est définie par la [décision sur la conception no 3](https://wet-boew.github.io/wet-boew-documentation/decision/).

L’API publique WET-BOEW et GCWeb est définie comme il suit :

* Les libellés de page structurels (gabarit);
* Les styles limités aux noms de la catégorie CSS ou les styles de structure HTML avec leur effet respectif, peu importe leur mise en œuvre;
* L’emboîtement de plugiciels défini par la liste de fonctions et de variables essentielles utilisées par un ou plusieurs plugiciels;
* Le total de plugiciels avec leurs versions respectives à partir desquelles chaque plugiciel est défini par : 
	* Fonctions JavaScript;
	* Structure de la configuration, ainsi que le type de données de chaque propriété;
	* Libellés HTML représentant des gabarits pour la conception de l’interface utilisateur;
	* Information clé relative aux plugiciels;
	* Aspect et formatage (CSS) des plugiciels;
	* Termes internationalisés utilisés (chaînes de caractères) par le plugiciel.
* Leurs gabarits, composantes et variantes sont définis par : 
	* Étiquetage HTML;
	* Information sur la structure;
	* Composantes qui pourraient comprendre les mêmes éléments d’un gabarit;
	* Aspect et formatage (CSS);
	* Termes internationalisés utilisés (chaînes de caractères).


## Ressource

* [Semantic versioning 2.0](https://semver.org/)

