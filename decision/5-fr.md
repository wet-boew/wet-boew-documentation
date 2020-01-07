---
published: true
layout: default-theme-wet-boew-fr
filename_en: 5
title: Décision sur la conception 5 – Décision sur la migration du répertoire
description: Defining a strategy for how to migrate the content about WET 4 to another repository
modified: 2018-11-15
---

## Sommaire

* **Expert:** @LiamLowndes, @duboisp
* **Status:** Approved
* **Last updated:** 2018-11-15
* **Historique:**
	* (2018-11-15) Publication
	* (2018-10-18) Approbation à la réunion d’orientation de la BOEW
	* (2018-09-27) Présentation à la réunion d’orientation de la BOEW
	* (2018-09-19) Première ébauche

## Exposé justificatif

Ceci est pour s’assurer que le code et les discussions de la BOEW 4 ne chevauchent pas avec la BOEW 5. La BOEW 4 (fondée sur des composantes) et la BOEW 5 (fondé sur la conception logique du développement) diffèrent de la façon dont les discussions et les problèmes signalés sont analysés et résolus. Par conséquent, elles ont leurs propres répertoires pour communiquer des problèmes et des discussions. Le résultat prévu est que le répertoire principal serait réservé au code de la BOEW 5 (ou la plus récente version), alors que le code de la BOEW 4 (ou des versions antérieures) a son propre répertoire.

Cette stratégie concerne les actions suivantes :

* Conserver le code de la BOEW 4 dans un répertoire dédié appelé « wet-boew-maintenance »
* Déplacer et copier tous les problèmes et discussions relatifs à la BOEW 4 au répertoire dédié
* Avoir une nouvelle base pour la BOEW 5


## Étapes de migration

1. Étiqueter des problèmes avec un libellé BOEW 4
2. Créer un répertoire dédié, tel que wet-boew/web-maintenance (pour la WET-BOEW en mode entretien seulement)
3. Déplacer le code de la BOEW 4 à l’intérieur de la branche principale de ce répertoire de soutien élargi
4. Nettoyer le répertoire WET-BOEW afin d’inclure seulement les codes de la BOEW 5. Déplacer la branche relative à la BOEW 4 à l’intérieur du répertoire de soutien élargi
5. Utiliser un agent numérique pour déplacer tous les problèmes relatifs à la BOEW 4 à l’intérieur du nouveau répertoire (https://github-issue- mover.appspot.com, http://www.iquandreas.com/github-issues-import ou utiliser notre propre répertoire au moyen de l’API GitHub)
	* Ceci reproduira chaque problème (y compris tous les commentaires).
	* Ceci créera un lien entre les problèmes.
	* Ceci fermera le problème de départ.

6. Après la fin du soutien de la BOEW 4 :
	* Fermer tous les problèmes relatifs à la BOEW 4 avec le message "La BOEW 4 n’est plus compatible, veuillez suivre les directives suivantes (lien) pour migrer à la BOEW 5."
	* Déplacer la base du code à l’intérieur du projet wet-boew-legacy project
