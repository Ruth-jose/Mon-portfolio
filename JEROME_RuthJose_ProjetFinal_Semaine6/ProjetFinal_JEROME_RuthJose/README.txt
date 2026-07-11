===============================================================
PROJET FINAL — PORTFOLIO PERSONNEL
Wireframe + HTML/CSS3 + JavaScript + Écoconception
===============================================================

Étudiante  : Ruth-Jose JEROME
Formation  : Sciences Informatiques
Programme  : Organisation Internationale de la Francophonie (OIF) —
             DCLIC, "Formez-vous au numérique"
Cours      : Développement Web — Semaine 6, Projet final
Modalité   : Projet individuel
Remise     : Fichier ZIP


1. PRÉSENTATION GÉNÉRALE DU PROJET

Le présent projet constitue la restitution finale du cours de Développement
Web, dispensé dans le cadre du programme DCLIC "Formez-vous au numérique"
de l'Organisation Internationale de la Francophonie (OIF). Il consolide
l'ensemble des compétences travaillées durant le parcours : la conception
d'interface (wireframe et prototype), la réalisation technique (HTML
sémantique, CSS3, JavaScript) et une démarche de qualité portant sur
l'accessibilité, la performance et l'écoconception.

Le livrable est un portfolio personnel en ligne, présentant mon profil
d'étudiante en Sciences Informatiques, mes compétences
techniques ainsi que trois réalisations représentatives de mon parcours :
le projet GESIFID (système de gestion de point de vente et d'inventaire),
le site Linemarah Store07 (boutique en ligne statique) et un recueil de
recettes haïtiennes rédigé en Kreyòl. Le site intègre également un
formulaire de contact dont la validation est assurée côté front par
JavaScript.


2. ARBORESCENCE DU PROJET

ProjetFinal_JEROME_RuthJose/
 |
 |-- wireframe/
 |     |-- prompts/
 |     |     |-- prompt_v1.txt          Prompt Stitch — version initiale
 |     |     |-- prompt_v2.txt          Prompt Stitch — version corrigée
 |     |-- exports_stitch/
 |           |-- wireframe_desktop.svg  Export low-fidelity, version bureau
 |           |-- wireframe_mobile.svg   Export low-fidelity, version mobile
 |
 |-- figma/
 |     |-- prototype_interactions.txt   Lien du prototype + description
 |                                      des interactions (>= 6 exigées)
 |
 |-- site/
 |     |-- index.html                  Page d'accueil (Hero, A propos,
 |     |                               Competences, apercu des Projets,
 |     |                               Contact)
 |     |-- projects.html                Page de detail des projets
 |     |-- css/
 |     |     |-- style.css              Feuille de style unique
 |     |-- js/
 |     |     |-- app.js                 Interactions (menu, validation,
 |     |                               animations)
 |     |-- assets/
 |           |-- images/
 |                 |-- developpeuse-photo.jpg  Photo professionnelle,
 |                                             compressee (voir section 6.2)
 |
 |-- README.txt                        Present document (contient la
                                        section Qualite obligatoire)

Cette arborescence respecte strictement la structure exigee par l'enonce
du projet (section 7).


3. OUTILS ET METHODOLOGIE

Conformement aux exigences du projet, la realisation s'est appuyee sur les
outils suivants :
  - Stitch, pour la production du wireframe low-fidelity (versions 1 et 2) ;
  - Figma, pour la construction du prototype interactif ;
  - Visual Studio Code et l'extension Live Server, pour le developpement
    et le test du site ;
  - les outils de developpement du navigateur (DevTools), pour la
    verification de la console, de la performance et du responsive.

La methodologie suivie reprend le deroulement recommande par l'enonce :
brief et contenu, wireframe, prototype Figma, developpement HTML, CSS3 et
responsive, JavaScript, demarche Qualite, puis conditionnement (packaging)
du livrable final.


4. INSTRUCTIONS D'OUVERTURE DU SITE

Deux methodes permettent de consulter le site :

  a) Ouverture directe du fichier site/index.html dans un navigateur
     (double-clic sur le fichier).

  b) Ouverture recommandee : ouvrir le dossier site/ dans Visual Studio
     Code, puis lancer l'extension Live Server (clic droit sur
     index.html > "Open with Live Server"). Cette methode evite les
     limitations du protocole file:// et garantit un rendu fidele.

Le site est integralement navigable au clavier (touche Tab), du menu de
navigation jusqu'au pied de page.


5. CHOIX DE CONCEPTION ET JUSTIFICATIONS

La structure retenue reprend fidelement le wireframe valide en version 2 :
un en-tete fixe (header sticky), une section d'introduction (Hero) avec
appel a l'action, une section A propos, une section Competences presentee
en deux colonnes sur ordinateur et en une seule colonne sur mobile, une
section Projets sous forme de cartes, et une section Contact sur fond
sombre contenant le formulaire.

Le projet a ete realise sous une forme intermediaire entre le mini-site
classique et la Single Page Application suggeree par l'enonce : la page
d'accueil regroupe l'ensemble des sections principales et utilise des
ancres (identifiants uniques : #apropos, #competences, #projets, #contact)
pour une navigation fluide par defilement, tandis qu'une seconde page
(projects.html) est dediee a la presentation detaillee des projets. Ce
choix permet de respecter a la fois le minimum de deux pages exige et la
logique de navigation par ancres recommandee pour la version simplifiee.


===============================================================
6. DEMARCHE QUALITE (SECTION OBLIGATOIRE)
===============================================================

6.1 Accessibilite

Probleme constate : dans une premiere version, certains elements
cliquables ne disposaient d'aucun retour visuel au focus clavier, et le
formulaire de contact n'affichait qu'un message d'erreur generique,
insuffisant pour identifier le champ concerne.

Correction apportee : un contour de focus visible (outline) a ete applique
a l'ensemble des liens, boutons et champs de formulaire ; un lien
d'evitement ("Aller au contenu principal") a ete ajoute en tete de page ;
chaque champ du formulaire dispose desormais d'un message d'erreur
specifique, et chaque <label> est correctement associe a son champ via
l'attribut for/id.

Resultat obtenu : la navigation clavier est integralement possible (touche
Tab) ; chaque page ne comporte qu'un seul titre <h1>, suivi d'une
hierarchie <h2> coherente ; le formulaire demeure comprehensible en
l'absence de souris.

6.2 Performance et ecoconception

Probleme constate : le recours a une police externe (Google Fonts) et a
des photographies aurait alourdi le poids de la page ainsi que le nombre
de requetes reseau, a l'encontre du principe de sobriete numerique.

Correction apportee : suppression de toute police externe au profit d'une
pile de polices systemes, definie dans les variables CSS --font-body et
--font-display ; la photographie du Hero a ete recompressee (format JPEG,
qualite 80, optimisation activee), faisant passer son poids de 335 Ko a
31 Ko, soit une reduction d'environ 90 %, tout en conservant une qualite
visuelle satisfaisante ; regroupement de l'ensemble des styles dans un
unique fichier style.css ; chargement du script JavaScript avec
l'attribut defer, afin de ne pas bloquer le rendu de la page.

Resultat obtenu : l'inspection de l'onglet Network des DevTools confirme
l'absence de requete externe (aucune police, aucune image telechargee),
ce qui repond directement a l'exigence d'ecoconception formulee dans
l'enonce (reduction du poids, du nombre de requetes et des ressources
utilisees).

6.3 Corrections et robustesse

Probleme constate : lors des premiers essais, le formulaire pouvait etre
soumis alors que les champs etaient vides, et le menu de navigation mobile
demeurait ouvert apres la selection d'un lien.

Correction apportee : mise en place d'une validation JavaScript complete
(presence des champs, format de l'adresse electronique verifie par
expression reguliere, longueur minimale du message) empechant l'envoi du
formulaire tant que les erreurs ne sont pas corrigees ; fermeture
automatique du menu mobile apres le clic sur un lien de navigation.

Resultat obtenu : aucune erreur n'est signalee dans la console (F12) ; le
formulaire a ete teste avec des cas valides et invalides (champs vides,
adresse electronique mal formee, message trop court) ; le rendu a ete
verifie aux resolutions 360x640 (mobile), 768x1024 (tablette) et en
version bureau, sur deux navigateurs distincts.

6.4 Synthese des ameliorations documentees

 1. Ajout d'un lien d'evitement pour l'accessibilite clavier.
 2. Mise en place d'un focus clavier visible sur l'ensemble des elements
    interactifs.
 3. Association explicite de chaque <label> a son champ de formulaire.
 4. Introduction de messages d'erreur specifiques par champ.
 5. Suppression des polices externes au profit d'une police systeme.
 6. Compression et optimisation de la photographie du Hero (reduction
    d'environ 90 % du poids, de 335 Ko a 31 Ko).
 7. Regroupement de l'ensemble du CSS dans un fichier unique.
 8. Chargement du script JavaScript avec l'attribut defer.
 9. Fermeture automatique du menu mobile apres selection d'un lien.
10. Validation JavaScript complete du formulaire de contact.
11. Verification du rendu sur trois resolutions distinctes.
12. Verification de l'absence d'erreurs en console, sur deux navigateurs.
13. Ajout d'un effet "machine a ecrire" sur le titre du Hero (JavaScript),
    respectant la preference systeme prefers-reduced-motion et gardant
    le texte integralement accessible aux lecteurs d'ecran (via un
    texte cache mais lisible, distinct du texte anime).

Ce nombre de douze ameliorations documentees depasse le minimum de huit
exige par la checklist finale de l'enonce (section 9).


===============================================================
7. CHECKLIST FINALE (AUTO-CONTROLE)
===============================================================
[x] Wireframe desktop et mobile, accompagne des prompts v1 et v2, archives.
[x] Prototype Figma decrit avec sept interactions (minimum exige : six).
[x] Structure HTML semantique et navigation coherente sur les deux pages.
[x] Mise en page CSS (Flexbox/Grid) avec deux points de rupture
    (breakpoints) au minimum : 1024px et 768px.
[x] Validation JavaScript du formulaire, avec retour utilisateur.
[x] Section Qualite : douze ameliorations documentees (accessibilite,
    performance, corrections).
[x] Absence d'erreur en console ; site fonctionnel ; dossier organise ;
    README explicite.


===============================================================
8. CONCLUSION
===============================================================
Ce projet m'a permis de mettre en application, de maniere integree,
l'ensemble des competences abordees durant le cours : conception centree
utilisateur, developpement front-end structure, et demarche rigoureuse
d'amelioration de la qualite. Je reste disponible pour toute precision
complementaire que le tuteur souhaiterait obtenir sur les choix effectues.


Ruth-Jose JEROME
Programme DCLIC "Formez-vous au numerique" — Organisation Internationale
de la Francophonie (OIF)
