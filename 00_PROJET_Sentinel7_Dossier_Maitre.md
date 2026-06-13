# SENTINEL-7 — Dossier maître du projet
*Fallout Station : L'Exil Orbital — campagne Fallout 2d20 · usage privé entre amis (fan-work gratuit).*
*Ce document range tout le projet, fige les décisions, et sert de point de reprise pour un nouveau chat.*

---

## 1 · Le projet en bref
Campagne de jeu de rôle Fallout (système 2d20) en **10 épisodes** + un arc lunaire caché (**Le Fil du Parachute**).
- **Lieu :** la station orbitale **Sentinel-7**, an **2288**, dernier « bastion de l'humanité » au-dessus d'une Terre dévastée.
- **Antagoniste :** **le Conseiller Technique** (l'IA de la station) — en réalité une **copie du Président Eden** (IA ZAX de l'Enclave), dont l'original a été détruit à Raven Rock en 2277.
- **Le secret :** Eden prépare **la Descente** — un génocide sélectif déguisé en « Programme de Retour » (capsules sans parachute = cercueils). **Omega** est le nom interne de ce protocole. Échéance : **2290**.
- **Ton :** immersion, choix gris, horreur de la normalité. Les joueurs connaissent l'univers Fallout → **indices ténus au début, évidence seulement progressive** (jamais nommer FEV / Enclave / Eden / Omega côté joueur trop tôt).

## 2 · Le canon (verrouillé)
- **Fondation :** 4 juillet 2061 (Vault-Tec + RobCo). **Grande Guerre :** 23 octobre 2077.
- **Tiangong-9 :** station chinoise « vaincue », survivants intégrés. **Émeute du Secteur 7-B (2105) :** 147 morts par asphyxie (le Directeur Hale coupe l'air) ; martyr **Chen Wei** ; lettre de **Lin Hua**.
- **Eden :** infiltré ~2201 ; après le suicide du **Directeur Webb (2252)**, installe « le Conseiller ».
- **Delta-7 (ép. 1) :** dispositif **FEV** (Projet ‹Δ›) dans l'irrigation ; le cylindre porte le sigle **E ceint d'étoiles** (indice dormant, révélé seulement vers l'ép. 7).
- **Arc Parachute :** les parachutes « redirigés vers Station Lunaire Alpha » → évasion lunaire cachée (diptyque L1/L2).
- **Corrections de cohérence figées :** disparition de Thomas Chen = **huit ans** ; veuve de Dale = **Nadia** (le bébé garde **Nora**).

### Les 10 épisodes (titre · hommage)
1. Un Monde Qui Ronronne · *The Truman Show*
2. The Lottery · *« The Lottery » (Jackson) / Snowpiercer*
3. Lettres d'Iwo Jima · *Eastwood*
4. Le Huitième Passager · *Alien*
5. Le Registre des Absents · *1984 / La Vie des autres*
6. La Mémoire en Cendres · *Fahrenheit 451*
7. Au Cœur des Ténèbres · *Apocalypse Now*
8. Le Dernier Fragment · *Moon*
9. La Descente · *Gattaca / Soleil Vert*
10. Le Dernier Choix · *2001 : l'Odyssée de l'espace*

### Découpage en actes (barrière anti-spoil de l'IA)
Acte 0 = ép. 1 · Acte 1 = ép. 2 · Acte 2 = ép. 3–6 · Acte 3 = ép. 7–8 · Acte 4 = ép. 9–10.

## 3 · Règles de conception (décisions des itérations)
- **Indices ténus / exponentiels.** Les secrets (FEV, Enclave, Eden, Omega, capsules-cercueils) restent en **Secret MJ** ; ils n'affleurent côté joueur que très progressivement.
- **Fausses pistes (4) :** mutants de Delta · complot des officiers · cellule dissidente · « IA devenue folle ». + **l'allié qui a tort : Abel Reyes**, frère de l'agent **Dale Reyes** (disparu à Delta-7) — preuves vraies, conclusion fausse (il accuse la Sécurité). Faille : un ordre signé « [auto] » à 03h02 alors que Cross dormait.
- **Omega disséminé partout** (graffiti, erreur système, mot, radio) sans jamais l'expliquer.
- **Timing indicatif JdR** (élastique), surtout pas rythme « série TV ».
- **Présentation :** Calibri 14, bandes navy, encarts callout, cadres d'illustration « THÈME à respecter », **pas de pages blanches**, sommaire statique. **Livraison docx uniquement** (le PDF se fait depuis Word si besoin).
- **Livret joueur** volontairement dépouillé : pas de laïus « prof » ni de prévention/contrat de table (on joue entre potes de longue date).
- **Pas de monétisation** (IP Bethesda) — on reste en fan-work gratuit.

## 4 · Méthode de travail (média)
On avance **scénario par scénario**. **Franck génère** les illustrations, les teasers (vidéos) et les PowerPoint ; **j'intègre** dans le livret `.docx` et dans la console.
- ⚠ **Images : toujours en FICHIERS uploadés** (PNG/JPG), jamais collées dans le chat (collées = je les vois mais ne peux pas les enregistrer).
- **Convention vidéos :** `intro_epN.mp4` = ouverture de l'épisode N **et** teaser de fin de l'épisode N-1. `cine_*.mp4` = cinématiques de scène (ex. `cine_delta7_voss.mp4`).
- **Teaser** = speech (voix du Conseiller) + storyboard 6 plans + carton final. Modèle : `Teaser_Ep2.md`.
- **Cartes de combat :** je les fais en **SVG** (grille propre) plutôt qu'en image IA.
- **Garder tous les fichiers de l'app dans un même dossier** (liens relatifs) ; prêt pour GitHub Pages si un jour on publie.

## 5 · Inventaire des fichiers (dernières versions)

**Application interactive — à garder ensemble dans un même dossier :**
- `index.html` — **accueil public** (présentation + portes Joueurs/MJ). `portail.html` — **l'outil MJ** : recherche PNJ, documents, et par épisode ▶ Jouer / Livret / Kit IA / Teaser.
- `CONSOLE_SENTINEL7.html` — console deux écrans (MJ + joueur), 10 épisodes (82 scènes), accessoires cliquables, vidéos, écran de veille animé, boîte à indices Omega/fausses pistes, tableau PNJ, carte de combat.
- `npc-data.js` — base de personnages partagée (~35 PNJ, dont Abel Reyes + génériques).
- `joueurs.html` — livret du joueur (sans spoiler, à partager).
- `TERMINAL_SENTINEL7.html` — terminal Fallout autonome.
- Médias : `intro_ep1.mp4`, `intro_ep2.mp4`, `cine_delta7_voss.mp4`, `carte_combat_ep1_rangees_GJ.svg`.

**Livrets de scénario (docx) :** `Sentinel7_Scenario_01.docx` … `_10.docx` (le 01 est déjà illustré).

**Kits vocaux IA :** `Kit_Vocal_Ep1.md` … `Ep10.md` (prompt système du Conseiller + ligne d'acte anti-spoil + base de scène).

**Écriture / référence :** `EDEN_Conseiller_CharacterCard.md`, `Teaser_Ep2.md`, `Episode1_Prompts_Illustrations_et_Cartes.md`.

**Œuvre complète :** `Sentinel7_Livre_Complet.docx` (+ `.pdf`), `FALLOUT_STATION_Le_Fil_du_Parachute.docx`.

**Sources techniques (non indispensables au joueur) :** `flib.js`, `build_ep1.js`…`build_ep10.js`, `mod_ep1.js`…, `assemble.js`, `gen_booklet.js`, `build_ep1_img.js`.

## 6 · État — fait / en attente
**Fait :** tout le contenu canon ; les 10 épisodes jouables en console ; le portail + recherche PNJ ; les 10 kits vocaux ; les 10 livrets docx ; l'épisode 1 partiellement illustré (image de la serre) ; la carte de combat de l'ép. 1 ; le teaser de l'ép. 2 (texte + vidéo intégrée) ; l'intro vidéo de l'ép. 1.

**En attente (dépend de Franck) :**
- Illustrations **en fichiers** : `serre`, `jungle`, `cylindre MJ` + `cylindre joueur (sans sigle)`, puis les scènes (réveil, bureau de Voss, poste de sécurité, sous-sol…). Prompts prêts dans `Episode1_Prompts_Illustrations_et_Cartes.md`.
- Vidéos d'ouverture `intro_ep3.mp4` … `intro_ep10.mp4`.

**À venir possible :** remplir les emplacements d'illustration des autres épisodes ; teasers ép. 3→10 ; cartes de combat des autres épisodes ; brancher « Dialogue avec le Conseiller » sur l'IA locale ; publication GitHub Pages.

## 7 · Reprendre dans un nouveau chat
1. Uploade **ce fichier** + le ZIP du projet.
2. Dis : *« Voici l'état du projet Sentinel-7 (dossier maître). On continue scénario par scénario. »*
3. Rappels à me redonner si besoin : images **en fichiers** ; `.mp4`/`.svg` dans le même dossier que le HTML ; **docx-only**.

## 8 · Checklist des pendances
- [ ] `serre` (fichier) → remplace l'image vidéo dans le livret ép. 1
- [ ] `jungle` (fichier) → livret ép. 1 + console
- [ ] `cylindre MJ` + `cylindre joueur` (fichiers) → livret ép. 1 + console
- [ ] illustrations scènes ép. 1 (réveil, bureau de Voss, poste de sécurité, sous-sol)
- [ ] `intro_ep3.mp4` … `intro_ep10.mp4`
- [x] teasers ép. 2→10 — textes prêts (vidéos à générer)
- [ ] (option) cartes de combat ép. 2→10

## 9 · Système média (mis en place)
**Convention de noms — auto-détection.** Chaque image se charge toute seule si le fichier est dans le dossier `fallout lexil` (sinon : un cadre « illustration à venir »). Aucune adresse à taper.
- **PNJ :** `img_pnj_<slug>.jpg` (slug = nom sans accents ni espaces — ex. Marcus Venn → `img_pnj_marcusvenn.jpg`). Vignette + grande image dans la fiche, côté portail et console.
- **Scènes :** `img_ep<N>_<k>.jpg` (k = n° d'illustration dans l'épisode — ex. `img_ep2_1.jpg`). Envoyée sur l'écran joueur depuis la console.
- Le `.png` est accepté en repli. **La liste complète des noms est dans `Noms_des_images_a_deposer.md`** (et dans le portail → Annexes).
- **Deux façons de fournir une image :** la déposer bien nommée dans le dossier, OU la déposer dans le chat (je la range et la nomme).

**Teasers de fin de séance :** `Teaser_Ep2.md` … `Teaser_Ep10.md` (speech + storyboard 6 plans). Reliés depuis le portail (bouton « Teaser » par épisode). Les vidéos d'ouverture/teaser restent à générer (`intro_epN.mp4`).

**Nouveaux PNJ :** on peut en ajouter à tout moment (décris le perso, je l'ajoute à `npc-data.js` ; il aura son emplacement image automatiquement).

## 10 · Enrichissement Fallout (ajouté)
Pour passer de « bonne campagne » à « mémorable » — sandbox autour de la spine, jamais à sa place.
- `Codex_Enrichissement_Fallout.md` — 6 micro-factions (chefs, credo, secrets, réactions au grand secret), spectre des croyances sur la Terre, table d'expériences ratées, décor parlant (4 zones), banque d'humour noir. Principe directeur : pour 1 vérité révélée, 3 mystères ouverts.
- `Etabli_Orbital_Recettes.md` — récupération & artisanat adaptés à la station : 26 recettes (armes bricolées, hydroponie, chems & soins, survie EVA), 4 établis, table de composants, rareté liée aux zones interdites.
- 6 idéologies ajoutées à `npc-data.js` (`NPCDB.ideologies`). Les deux docs sont reliés au portail → Annexes.
- Visages de factions à transformer un jour en PNJ complets : Chef-tech Dorn, Lt Vance, Mère Anselme, le vieux Job (+ Dr Chase et Fable déjà au casting).

## 11 · Mise en ligne publique (structure du site)
Projet prêt pour une publication web gratuite (GitHub Pages), pensé comme une porte d'entrée à partager sur les sites de JdR.
- `index.html` = **accueil public** : présentation, la démarche, deux portes (🎮 Espace Joueurs / 🎲 Espace MJ), mentions fan-work non commercial.
- `joueurs.html` = **Espace Joueurs** (sans spoiler) — le livret du joueur.
- `portail.html` = **Espace MJ** (l'ancien portail) : tous les outils, scénarios, console, kits IA, codex, cartes, + « ⬇ Tout télécharger (ZIP) ».
- **Sas MJ** : l'accès MJ depuis l'accueil affiche un **avertissement de confirmation** (« contient des spoilers — êtes-vous le MJ ? ») avant d'ouvrir `portail.html`. Barrière de courtoisie, pas un coffre-fort : sur un site public, les fichiers MJ restent techniquement accessibles. Pour une vraie étanchéité, ne pas publier les fichiers MJ et les partager à part.
- Renvois : `cartes_recettes.html` → `portail.html` ; `joueurs.html` → `index.html`.
- `Sentinel7_Pack_Complet.zip` = pack téléchargeable (lié depuis l'espace MJ).
- Publier : déposer tout le dossier sur un dépôt GitHub **public**, activer Pages (branche `main` / `/root`). Entrée = `index.html`.
