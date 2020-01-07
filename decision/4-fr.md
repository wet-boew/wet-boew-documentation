---
published: true
layout: default-theme-wet-boew-fr
filename_en: 4
title: Décision sur la conception 4 – Mode HTML de base et l’amélioration progressive
description: Talk about basic HTML
modified: 2019-08-21
---

## Sommaire

* **Expert:** @duboisp, @jeffreystark
* **Status:** Approved
* **Type:** Améliorer l’interprétation actuelle
* **Last updated:** 2018-05-20
* **Histoire:**
	* (2019-08-21) Trivial editorial edit
	* (2018-06-20) Approbation à la réunion d’orientation de la BOEW en incluant des commentaires de Jeffrey Stark
	* (2018-05-17) Une deuxième expertise demandé du Groupe de travail sur l’accessibilité Web
	* (2018-04-19) Présentation aux réunions d’orientation de la BOEW
	* (2018-04-18) Première ébauche

## Problème

Il n’y a aucune explication claire de ce que le mode HTML de base devrait faire ou de la façon dont il devrait agir. Les principes de conception de l’amélioration progressive ne sont pas ou ne peuvent pas être toujours suivis lorsqu’on utilise certaines fonctions de la BOEW.

Une définition claire est requise pour la BOEW 5 et pour résoudre plusieurs problèmes concernant le mode HTML de base.

## Historique

Historiquement, on présumait que le mode HTML de base était l’équivalent des versions à la désactivation de tout code JavaScript par les navigateurs. La BOEW 4 applique actuellement cette approche au moyen de sa conception, parce que, si on le faisait autrement, ceci empêcherait l’activation des fonctions de la BOEW. Ce qui est intéressant est le fait que la BOEW 4 dépend de l’activation de certains codes JavaScript afin d’être en mode HTML de base.

La BOEW 4 a été fondée d’une certaine façon sur le principe d’améliorations progressives dans lesquelles les auteurs devraient créer des pages Web en format de base, puis la boite d’outils de l’expérience Web améliorerait le contenu pour le rendre en une interface interactive, qui a une grande probabilité de répondre à l’exigence concernant le niveau AA des WCAG 2.0. Les documents relatifs aux fonctions de la BOEW ne définissent pas clairement ce que le format HTML de base devrait être. Même certaines fonctions de la BOEW sont devenues non rétrocompatibles en mode HTML de base.

L’objectif du mode HTML de base était d’offrir une solution de repli lorsqu’un utilisateur avait des problèmes avec le « widget ». Cet objectif a été inspiré des sites tels que Gmail. Ces sites ont toujours cette fonction; même la version Web de Gmail qui a été lancée au printemps 2018.

## Exposé justificatif

En se conformant au niveau AA de la plus récente version des WCAG est le moteur principal de ce projet. L’objectif du niveau AA des WCAG 2.0 n’est pas de suivre strictement la conception de l’amélioration progressive et il n’exige pas une vérification de la conformité en fonction du principe de non-exécution de JavaScript.

Certains fournisseurs de navigateurs n’ont pas une façon pratique de prévenir l’exécution de JavaScript. De la même façon que dans Edge, il est impossible de désactiver JavaScript au moyen par la mise à jour de la configuration de base de l’IUG.

En ce qui concerne les WCAG, la vérification de la conformité est évaluée seulement après que les pages sont prêtes à être naviguées et sont dans un état où l’utilisateur peut interagir avec elles.

L’approche de la conception de l’amélioration progressive a été utilisée pour s’assurer que les fonctions de la BOEW avaient une bonne solution de repli en cas de non-rétrocompatibilité des fonctions de la BOEW. Habituellement, cette mesure de repli offrirait une interface plus pratique et linéaire.

Les BOEW sont conçues et développées en fonction de la capacité des navigateurs compatibles.

La précision de la définition du terme « HTML de base » soutiendra la conception du prochain lancement important de la BOEW.

L’objectif des fonctions HTML de base était principalement d’aborder les difficultés connues par un utilisateur ou les incompatibilités entre TA+accessibilité et API+navigateur pour une technique particulière ou pratique de codage (p. ex. Dragon Naturally Speaking v12 et ses versions antérieures n’ont reconnu aucun attribut ARIA sur aucun navigateur). À compter de mai 2018, ces fonctions ne sont pas complètement compatibles partout. Avec plus de 130 pièces de logiciel différentes et plus de 4 000 aides techniques (TA) utilisées à l’échelle du gouvernement du Canada, et encore plus à l’extérieur, il y a de nombreuses possibilités de solution pour ces problèmes.

## Proposition d’interprétation

Le HTML de base est une interface plus pratique et linéaire d’une fonction de la BOEW. Ceci exige que le contenu de la page qui sera lancée soit en format HTML de base. Il peut utiliser également du JavaScript et son utilisation sera limitée à l’exécution de tâches simples ayant un impact minimal, conformément à la conception du mode HTML de base.

On s’attend à ce qu’un utilisateur puisse sélectionner le mode HTML de base et ait à sa disposition des contrôles HTML et, dans la mesure du possible, des balisages HTML sans des interactions JavaScript. Ceci ne veut pas dire que vous n’avez pas obtenu ni utilisé JavaScript. Ceci veut dire seulement que vous avez évité des interactions complexes.

Lorsqu’une fonction de la BOEW est activée dans son format de base, ou dans tout autre état préamélioré et l’on demande que la page soit en mode HTML de base, une des actions suivantes doit avoir lieu :
* L’interface initiale améliorée et codée est transformée en mode HTML de base.
* L’interface initiale améliorée et codée reste, mais elle n’entrave ni ne prévient la consultation de tout le contenu par l’utilisateur.
* Des documents et des exemples sont disponibles et ils montrent le modèle de conception qui doit être suivi afin de fournir le contenu au moyen du mode HTML de base.


Une interface pratique et linéaire est la clé pour définir une interface de base. L’interaction du contenu devrait être inexistante ou limitée dans la mesure du possible.

Une fonction de la BOEW peut avoir de diverses versions de l’interface HTML de base, ainsi que de diverses versions de l’interface HTML amélioré.

Du soutien pour l’interface HTML de base est disponible dépendamment du navigateur compatible par le projet principal de la BOEW. Voici un exemple :

e.g.
* Le widget de l’onglet devient des en-têtes avec le contenu des panneaux.
* Le mégamenu devient des en-têtes avec des liens dans une liste.


## Ressource

* [Seek comments - Basic HTML mode and progressive enhancement](https://github.com/wet-boew/wet-boew/issues/8357)

## Prochaine étape

* Utilisez cette interprétation de la conception de la BOEW 5 pour résoudre des problèmes concernant le mode HTML de base.
