/* Source unique des recettes — partagée par les cartes et la console. */
window.RECIPES = [
{
"cat": "Armes",
"name": "Pistolet à Tuyau « Modèle Zéro »",
"comp": "2× Ferraille · 1× Tuyau · 1× Cellule énergétique (partielle) · 1× Ruban adhésif",
"test": "Réparation · Diff. 1",
"result": "Pistolet artisanal (portée courte). Dégâts 2 CD. Chargeur 4 coups. Peu fiable : sur Complication, s'enraye ou explose.",
"flavor": "Techniquement, c'est une arme. Techniquement.",
"id": "pistolet_a_tuyau_modele_zero"
},
{
"cat": "Armes",
"name": "Fusil à Clous « Moissonneur »",
"comp": "3× Ferraille · 2× Tuyaux · 1× Cellule à fission · 1× Fil électrique",
"test": "Réparation · Diff. 2",
"result": "Fusil pneumatique (courte/moyenne). Dégâts 3 CD. Munitions = clous/boulons, récupérables (Survie diff. 0).",
"flavor": "Conçu pour fixer les cloisons. Fonctionne aussi sur les gens.",
"id": "fusil_a_clous_moissonneur"
},
{
"cat": "Armes",
"name": "Matraque à Arc « Câblée »",
"comp": "1× Tuyau rigide · 1× Cellule énergétique · 2× Fil électrique · 1× Circuits",
"test": "Réparation · Diff. 1",
"result": "Mêlée. Dégâts 2 CD (énergie). Sur Complication de la cible : étourdie 1 round. Consomme 1 charge / 3 combats.",
"flavor": "Les techniciens ont arrêté de demander d'où vient la cicatrice en croissant.",
"id": "matraque_a_arc_cablee"
},
{
"cat": "Armes",
"name": "Lance-Harpon de Maintenance « À la Pêche »",
"comp": "2× Tuyaux · 1× Ferraille · 1× Fil électrique (câble EVA) · 1× Ruban adhésif",
"test": "Réparation · Diff. 2",
"result": "Distance (courte/moyenne). Dégâts 3 CD. Cible enchevêtrée (-1 dé physique) ; Force diff. 2 pour se libérer.",
"flavor": "Protocole EVA pour récupérer les équipiers en dérive. Marche aussi sur les mutins.",
"id": "lance_harpon_de_maintenance_a_la_peche"
},
{
"cat": "Armes",
"name": "Couteau d'Éclat de Coque « Bord de Vide »",
"comp": "1× Ferraille (coque) · 1× Ruban adhésif · 1× Plastique (garde)",
"test": "Réparation · Diff. 0",
"result": "Couteau. Dégâts 2 CD. Discret (+1 succès pour dissimuler). Fragile : sur Complication, la lame se brise.",
"flavor": "L'acier de coque est très dur. Deux cents ans de radiation en font une petite source de contamination — rien de grave.",
"id": "couteau_d_eclat_de_coque_bord_de_vide"
},
{
"cat": "Armes",
"name": "Pistolet Lance-Fusées « Signalement de Détresse »",
"comp": "1× Pistolet de sécurité récupéré · 2× Produits chimiques · 1× Cellule énergétique · 1× Circuits",
"test": "Réparation OU Sciences · Diff. 2",
"result": "Zone (courte, 3 m). Dégâts 4 CD (feu/explosion). 1 coup. Fusée supp. : 1× Chimiques + 1× Cellule (Sciences diff. 1).",
"flavor": "Le manuel dit « tirer vers l'espace en cas d'urgence ». Aucune précision sur le calibrage des cibles.",
"id": "pistolet_lance_fusees_signalement_de_detresse"
},
{
"cat": "Armes",
"name": "Amélioration Pistolet Laser — Condensateur de Fortune",
"comp": "1× Pistolet laser (possédé) · 2× Circuits · 1× Cellule à fission",
"test": "Sciences · Diff. 2",
"result": "Le pistolet laser passe de 3 à 4 CD. +1 succès auto vs armures métalliques légères. Consommation doublée.",
"flavor": "Vault-Tec déconseille cette modification. Vault-Tec est morte depuis deux siècles.",
"id": "amelioration_pistolet_laser_condensateur_de_fortune"
},
{
"cat": "Armes",
"name": "Amélioration Fusil Laser — Filtre « Tiangong »",
"comp": "1× Fusil laser · 2× Circuits (Tiangong, zone rouge) · 1× Plastique transparent",
"test": "Sciences · Diff. 3",
"result": "Portée → longue. Tirs sur cible non alertée : +2 CD. Modification irréversible.",
"flavor": "La technologie chinoise de 2077 était en avance. La preuve : elle marche encore.",
"id": "amelioration_fusil_laser_filtre_tiangong"
},
{
"cat": "Cuisine",
"name": "Bouillie d'Algues « Régulière »",
"comp": "3× Algues & mousses · 1× Eau recyclée brute",
"test": "Survie · Diff. 0",
"result": "Ration ×3. +1 PV par ration. Nourrit 8 h.",
"flavor": "C'est vert. C'est chaud. C'est tout ce qu'on peut dire en sa faveur.",
"id": "bouillie_d_algues_reguliere"
},
{
"cat": "Cuisine",
"name": "Steak de Rat-Taupe « Spécial Chef »",
"comp": "2× Viande de rat-taupe · 1× Algues (assaisonnement)",
"test": "Survie · Diff. 1",
"result": "Ration ×2. +2 PV par ration. +1 dé d'endurance pendant 2 h. Sur Complication : avariée (Endurance diff. 1 ou malaise).",
"flavor": "Officiellement « Protéine Alternative Recyclée ». Tout le monde dit « rat ».",
"id": "steak_de_rat_taupe_special_chef"
},
{
"cat": "Cuisine",
"name": "Thé de Mousse « Calmant de Coursive »",
"comp": "2× Algues (mousse spécifique) · 1× Eau recyclée brute",
"test": "Sciences diff. 1 (identifier) puis Survie diff. 0",
"result": "Boisson ×2. -1 stress OU +1 dé Charisme pendant 1 h. Pas de soin.",
"flavor": "« ATTENTION : pas la mousse verte du conduit 7-C ». Elle est différente. On ne sait pas pourquoi.",
"id": "the_de_mousse_calmant_de_coursive"
},
{
"cat": "Cuisine",
"name": "Eau Purifiée « Standard Station »",
"comp": "3× Eau recyclée brute · 1× Produits chimiques (pastilles)",
"test": "Sciences · Diff. 1",
"result": "Eau potable ×3. Élimine les intoxications. Remplace un composant liquide. Sur Complication : sous-filtrée.",
"flavor": "Répond aux normes Vault-Tec 2061, que Vault-Tec qualifiait elle-même d'« aspirationnelles ».",
"id": "eau_purifiee_standard_station"
},
{
"cat": "Cuisine",
"name": "Ration Synthé Rafistolée « Bloc-B »",
"comp": "2× Algues · 1× Plastique (emballage) · 1× Viande de rat-taupe",
"test": "Survie · Diff. 1",
"result": "Ration compacte ×4. +1 PV, rassasie 12 h. Légère (4 = 1 encombrement).",
"flavor": "Goût de plastique, texture de polystyrène. Nettement mieux que rien.",
"id": "ration_synthe_rafistolee_bloc_b"
},
{
"cat": "Cuisine",
"name": "Ration d'Avant-Guerre « Vault-Tec 2061 »",
"comp": "1× Ration scellée récupérée (zone orange +)",
"test": "Aucun pour ouvrir ; Médecine diff. 1 pour évaluer",
"result": "Sans évaluation : 50/50 — soit +3 PV / 24 h, soit empoisonnement grave (2 CD, -2 dés / 4 h). Testée avant : risque réduit.",
"flavor": "« Meilleur avant : 15/03/2062 ». On est en 2288. Le sourire Vault-Tec rassure moins qu'avant.",
"id": "ration_d_avant_guerre_vault_tec_2061"
},
{
"cat": "Chems",
"name": "Stimpak Bricolé « Modèle Rustine »",
"comp": "2× Pièces médicales périmées · 1× Algues (agent actif) · 1× Plastique (seringue)",
"test": "Médecine · Diff. 2",
"result": "Soigne 3 PV (action bonus en combat). Sur Complication : +1 PV mais nausée (-1 dé Perception 2 rounds).",
"flavor": "Contient de la chlorophylle synthétique, un stabilisateur de pH périmé, et de l'optimisme.",
"id": "stimpak_bricole_modele_rustine"
},
{
"cat": "Chems",
"name": "RadAway de Fortune « Vert Citron »",
"comp": "1× Pièces médicales périmées · 2× Produits chimiques · 1× Alcool de contrebande",
"test": "Sciences · Diff. 2",
"result": "Réduit l'irradiation de 2 niveaux. Effet 10 min. Sur Complication : vomissements (1 round).",
"flavor": "Le vert citron n'est pas esthétique, c'est une réaction non prévue. Le Dr Okafor refuse de s'expliquer.",
"id": "radaway_de_fortune_vert_citron"
},
{
"cat": "Chems",
"name": "Calmant Maison « Doux Couloir »",
"comp": "1× Algues (mousse sédative) · 1× Alcool de contrebande · 1× Pièces médicales",
"test": "Médecine · Diff. 1",
"result": "Annule 1 effet de peur. +1 dé Sang-froid pendant 1 h. Dépendance faible (3+ doses / session : Endurance diff. 1).",
"flavor": "Techniquement pas autorisé. La liste de ce qui est techniquement autorisé ici est très courte.",
"id": "calmant_maison_doux_couloir"
},
{
"cat": "Chems",
"name": "Jet Orbital « Station Special »",
"comp": "2× Produits chimiques · 1× Alcool de contrebande · 1× Pièces médicales",
"test": "Sciences · Diff. 2",
"result": "3 rounds : +2 dés physiques offensifs, immunité à la douleur. Crash : -1 dé / 2 h. Dépendance élevée.",
"flavor": "Officiellement « Supplément de Performance Physique No. 7 ». Personne n'utilise ce nom.",
"id": "jet_orbital_station_special"
},
{
"cat": "Chems",
"name": "Antirad Alimentaire « Bol de Survie »",
"comp": "2× Algues (chélatatrices) · 1× Eau purifiée · 1× Produits chimiques",
"test": "Sciences · Diff. 1",
"result": "Aliment ×2. -1 niveau d'irradiation. Préventif : Résistance radiations 1 pendant 4 h.",
"flavor": "Approuvé par le Département de la Nutrition en 2201, dissous en 2203. Aucun lien officiel.",
"id": "antirad_alimentaire_bol_de_survie"
},
{
"cat": "Chems",
"name": "Pommade Antiseptique de Tuyau",
"comp": "1× Algues · 1× Produits chimiques · 1× Plastique (contenant)",
"test": "Médecine · Diff. 0",
"result": "Prévient l'infection d'une blessure ouverte. -1 difficulté de soin si appliquée tout de suite.",
"flavor": "Senteur : industrielle. Efficacité : surprenante. Origine des ingrédients : mieux vaut ne pas savoir.",
"id": "pommade_antiseptique_de_tuyau"
},
{
"cat": "Survie",
"name": "Rustine de Combinaison « Rafistolage d'Urgence »",
"comp": "1× Joints & scellants · 1× Ruban adhésif · 1× Plastique",
"test": "Réparation · Diff. 1",
"result": "Répare une brèche. Tient 4 h (1 h sous stress). Possible sans établi (diff. +1).",
"flavor": "Manuel EVA p.47 : « utiliser le kit réglementaire ». p.48 : « improviser et prier ». Sentinel-7 vit à la page 48.",
"id": "rustine_de_combinaison_rafistolage_d_urgence"
},
{
"cat": "Survie",
"name": "Patch de Gaine / Colmatage Durable",
"comp": "2× Joints & scellants · 1× Plastique · 1× Fil électrique (renfort)",
"test": "Réparation · Diff. 2",
"result": "Réparation durable (jusqu'à la prochaine blessure grave). Colmate une micro-brèche de cloison : +3 rounds avant effondrement.",
"flavor": "Certifié pour 50 cycles par le bureau qualité de 2089. Le bureau est mort. Le joint tient encore.",
"id": "patch_de_gaine_colmatage_durable"
},
{
"cat": "Survie",
"name": "Filtre à Oxygène « Dernier Souffle »",
"comp": "2× Joints & scellants · 2× Algues (biomasse) · 1× Plastique · 1× Tuyau",
"test": "Sciences · Diff. 2",
"result": "+2 h d'autonomie à une combinaison endommagée ; +2 h en air vicié/fumée. 1 usage avant rechange de biomasse.",
"flavor": "Les algues font la respiration. Vous faites confiance à des plantes pour votre oxygène. Bienvenue en 2288.",
"id": "filtre_a_oxygene_dernier_souffle"
},
{
"cat": "Survie",
"name": "Brouilleur d'Eyebot « Point Aveugle »",
"comp": "2× Circuits · 1× Cellule énergétique · 1× Fil électrique · 1× Ferraille (boîtier)",
"test": "Sciences · Diff. 3",
"result": "5 rounds : Eyebots à 10 m perdent 2 dés de Perception, plus de relais vidéo. Détection : Techno diff. 3. Usage unique.",
"flavor": "Le Conseiller a noté +340 % d'« interférences atmosphériques » dans les secteurs C et D. Il n'a pas encore fait le lien.",
"id": "brouilleur_d_eyebot_point_aveugle"
},
{
"cat": "Survie",
"name": "Torche Combinaison « Lumière Persistante »",
"comp": "1× Cellule énergétique (partielle) · 1× Circuits · 1× Ferraille (support) · 1× Ruban adhésif",
"test": "Réparation · Diff. 0",
"result": "Éclaire 10 m. 6 h par cellule. Fixable sur combinaison. Sur Complication : scintille (peu fiable).",
"flavor": "Modèle réglementaire épuisé depuis 2241. Le modèle maison dure deux fois moins. En revanche, il existe.",
"id": "torche_combinaison_lumiere_persistante"
},
{
"cat": "Survie",
"name": "Kit de Survie EVA « Sac de la Dernière Chance »",
"comp": "1× Rustine + 1× Filtre O2 + 1× Ration Synthé + 1× Torche (tous fabriqués)",
"test": "Survie · Diff. 1",
"result": "Kit EVA complet (4 objets, 1 slot). Relance 1 dé sur le 1er jet de survie critique de la session.",
"flavor": "Protocole officiel : « localiser le kit orange ». Officieux : « avoir fabriqué celui-ci avant d'en avoir besoin ».",
"id": "kit_de_survie_eva_sac_de_la_derniere_chance"
},
{
"cat": "Chems",
"name": "Rad-X « Bouclier Orbital »",
"comp": "2× Produits chimiques · 1× Pièces médicales périmées · 1× Plastique (gélule)",
"test": "Sciences · Diff. 1",
"result": "Préventif. Résistance aux radiations 2 pendant 1 h. À prendre AVANT l'exposition.",
"flavor": "La notice promet « une protection optimale ». La notice promet beaucoup de choses depuis 2077.",
"id": "rad_x_bouclier_orbital"
},
{
"cat": "Chems",
"name": "Psycho « Rage Recyclée »",
"comp": "2× Produits chimiques · 1× Pièces médicales · 1× Viande de rat-taupe (extrait surrénal)",
"test": "Sciences · Diff. 2",
"result": "3 rounds : +2 CD aux dégâts (mêlée & tir). Après : -1 dé social pendant 1 h. Dépendance élevée.",
"flavor": "Le rouge dans la seringue n'est pas de la teinture. On a arrêté de demander quoi.",
"id": "psycho_rage_recyclee"
},
{
"cat": "Chems",
"name": "Buffout « Charge Lourde »",
"comp": "1× Produits chimiques · 2× Algues (stéroïde végétal) · 1× Pièces médicales",
"test": "Médecine · Diff. 2",
"result": "1 h : +1 dé Force & Endurance, +3 PV temporaires. Crash : -1 dé physique 30 min. Dépendance.",
"flavor": "Conçu pour les dockers de soute. Ça déplace une caisse. Ça déplace aussi un garde.",
"id": "buffout_charge_lourde"
},
{
"cat": "Chems",
"name": "Mentats « Lucidité »",
"comp": "1× Produits chimiques · 1× Algues (champignon cérébral) · 1× Pièces médicales",
"test": "Sciences · Diff. 2",
"result": "1 h : +1 dé Intelligence & Perception, +1 succès en enquête/connaissances. Dépendance faible.",
"flavor": "Goût de craie et de réglisse. On se sent brillant. On l'est peut-être même.",
"id": "mentats_lucidite"
},
{
"cat": "Chems",
"name": "Med-X « Anesthésiant de Coursive »",
"comp": "2× Pièces médicales périmées · 1× Alcool de contrebande · 1× Produits chimiques",
"test": "Médecine · Diff. 1",
"result": "3 rounds : Réduction des dégâts +2, ignore les pénalités de blessure légère. Dépendance.",
"flavor": "Ne soigne rien. Vous fait juste oublier que vous devriez avoir mal. C'est déjà ça.",
"id": "med_x_anesthesiant_de_coursive"
},
{
"cat": "Chems",
"name": "Cure-Dépendance « Remise à Zéro »",
"comp": "2× Produits chimiques · 1× Pièces médicales · 1× Eau purifiée",
"test": "Médecine · Diff. 3",
"result": "Supprime une dépendance (chem ou alcool). Effet immédiat, désagréable.",
"flavor": "Quarante secondes de regret concentré. Plus efficace qu'un sermon.",
"id": "cure_dependance_remise_a_zero"
},
{
"cat": "Cuisine",
"name": "Star-Cola « Pétillante »",
"comp": "1× Eau purifiée · 1× Produits chimiques (sirop & caféine de synthèse) · 1× Plastique (bouteille)",
"test": "Survie · Diff. 1",
"result": "Boisson ×2. Retire la fatigue et accorde +1 dé d'action au prochain round d'un combat.",
"flavor": "« Savourez le goût d'avant ! » Personne à bord n'a connu l'avant. On savoure quand même.",
"id": "station_cola_petillante"
},
{
"cat": "Cuisine",
"name": "Cola « Lueur Bleue » (Quantum)",
"comp": "1× Star-Cola · 2× Produits chimiques · 1× Cellule à fission (traces isotopiques)",
"test": "Sciences · Diff. 2",
"result": "Unique. +1 dé à tous les jets pendant 2 rounds ET soigne 2 PV — mais +1 niveau d'irradiation. Brille dans le noir.",
"flavor": "Le bleu, c'est joli. Le bleu, c'est aussi le compteur Geiger qui s'affole.",
"id": "cola_lueur_bleue_quantum"
},
{
"cat": "Armes",
"name": "Cocktail Molotov « Coursive en Feu »",
"comp": "1× Alcool de contrebande · 1× Bouteille (verre/plastique) · 1× Ruban adhésif (mèche)",
"test": "Réparation · Diff. 0",
"result": "Jet (courte). Zone en flammes (2 m) : 3 CD feu, persiste 1 round. ⚠ Le feu consomme l'O2 de la zone.",
"flavor": "Recette d'avant-guerre, efficacité intemporelle. À ne pas lancer près d'un conduit d'oxygène. Vraiment pas.",
"id": "cocktail_molotov_coursive_en_feu"
},
{
"cat": "Armes",
"name": "Grenade Frag « Boîte de Conserve »",
"comp": "1× Ferraille (éclats) · 2× Produits chimiques (charge) · 1× Circuits (minuterie)",
"test": "Réparation OU Sciences · Diff. 2",
"result": "Explosif lancé (zone 3 m). Dégâts 4 CD (explosion). Usage unique.",
"flavor": "Littéralement une boîte de conserve pleine de clous et de mauvaises intentions.",
"id": "grenade_frag_boite_de_conserve"
},
{
"cat": "Armes",
"name": "Grenade à Impulsion « Court-Circuit »",
"comp": "2× Circuits · 1× Cellule à fission · 1× Ferraille (boîtier)",
"test": "Sciences · Diff. 2",
"result": "Anti-machines (zone 3 m). 5 CD énergie vs robots/Eyebots/tourelles ; les désactive 1 round. Inoffensive sur les humains.",
"flavor": "Le seul cadeau que le Conseiller n'apprécie pas. Réservez-la pour ses yeux volants.",
"id": "grenade_a_impulsion_court_circuit"
},
{
"cat": "Armes",
"name": "Mine de Proximité « Bonne Nuit »",
"comp": "1× Ferraille · 1× Circuits (détecteur) · 1× Cellule énergétique · 2× Produits chimiques",
"test": "Réparation · Diff. 2",
"result": "Piège posé. À l'approche : 4 CD (explosion, 2 m). Désamorçage : Réparation diff. 2.",
"flavor": "Se pose en dix secondes. S'oublie en deux. Étiquetez bien vos couloirs.",
"id": "mine_de_proximite_bonne_nuit"
},
{
"cat": "Survie",
"name": "Voile de Furtivité « Angle Mort » (Stealth Boy)",
"comp": "2× Circuits (Tiangong, zone rouge) · 1× Cellule à fission · 1× Plastique · 1× Fil électrique",
"test": "Sciences · Diff. 3",
"result": "Quasi-invisibilité 3 rounds (+3 succès Discrétion, les caméras ne fixent pas). La cellule grille : usage unique.",
"flavor": "Vieille techno d'infiltration militaire. Idéale là où mille yeux rouges vous attendent.",
"id": "voile_de_furtivite_angle_mort_stealth_boy"
},
{
"cat": "Survie",
"name": "Combinaison Anti-Rad « Doublure de Plomb »",
"comp": "2× Joints & scellants · 2× Ferraille (feuilles de plomb) · 1× Ruban adhésif",
"test": "Réparation · Diff. 2",
"result": "Modifie une combinaison : Résistance radiations 1 en permanence tant qu'elle est portée. Lourde : -1 dé en Agilité.",
"flavor": "Plus lourde, plus moche, et elle grince. Mais le compteur Geiger, lui, se tait enfin.",
"id": "combinaison_anti_rad_doublure_de_plomb"
}
];
