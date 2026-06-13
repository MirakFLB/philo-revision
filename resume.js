/* =====================================================================
   Philosophie — « Cours résumé » par notion (fiche express).
   Ajouté à window.PHILO_CONTENT[id].resume (affiché en tête de l'onglet
   « Le cœur »). Synthèse : définition · problème · les 3 positions
   (🔵 thèse / 🔴 antithèse / 🟣 dépassement) · à retenir.
   ===================================================================== */
(function () {
  var C = window.PHILO_CONTENT; if (!C) return;
  function set(id, arr){ if (C[id]) C[id].resume = arr; }

  set("devoir", [
    "Définitions : le devoir = obligation morale (je dois mais PEUX ne pas faire). À distinguer de la contrainte (subie) et de la nécessité (inévitable).",
    "Idée-force : le devoir oblige sans contraindre → il suppose et appelle ma liberté.",
    "🔵 Le devoir vient de la raison : Kant (agir PAR devoir, impératif catégorique = universalise ta maxime), Rousseau, Aristote.",
    "🔴 Le devoir est suspect/intériorisé : Freud (Surmoi), Nietzsche (« Je veux » contre « Tu dois », morale des faibles), Bergson (pression sociale).",
    "🟣 Décentrement : le « deux-voir » — l'autonomie vraie suppose de se tenir face à autre chose que soi (Levinas : le visage d'autrui m'oblige).",
    "À retenir : ne pas confondre obligation/contrainte, agir PAR devoir / CONFORMÉMENT au devoir, morale / éthique, légalité / légitimité."
  ]);

  set("liberte", [
    "Définition : liberté = autodétermination de la volonté (libre arbitre), opposée au déterminisme (tout a une cause).",
    "Problème : on SENT la liberté, mais peut-on la PROUVER / la connaître ? L'expérience directe en est peut-être une illusion.",
    "🔵 Réelle/éprouvable : Descartes (le doute révèle ma volonté), Sartre (« condamné à être libre »), stoïciens (agir sur ce qui dépend de nous).",
    "🔴 Illusoire/déterminée : Spinoza (la pierre qui se croit libre), Rousseau (« né libre, partout dans les fers »), Kant (liberté = idée non connaissable).",
    "🟣 Liberté conditionnée par la contrainte : Stravinsky (la règle fait la liberté créatrice), Spinoza (connaître ses déterminismes pour devenir libre).",
    "À retenir : liberté ≠ « faire ce qu'on veut » ; se SENTIR libre ≠ ÊTRE libre."
  ]);

  set("bonheur", [
    "Définition : bonheur = état durable de plénitude. Étymo « bonne heure » = chance (donc en partie hors de notre contrôle).",
    "Tension : le désir est manque/inquiétude, le bonheur est repos. Faut-il satisfaire tous ses désirs, ou les trier ?",
    "🔵 Par la sagesse/le détachement : Épicure (3 catégories de désirs → ataraxie), stoïciens, Spinoza (béatitude), Descartes (changer ses désirs).",
    "🔴 Satisfaction des désirs, ou bonheur impossible : Calliclès (tout satisfaire), Schopenhauer (pendule souffrance/ennui).",
    "🟣 Le bonheur ne se « fait » pas : Rousseau (« malheur à qui n'a plus rien à désirer »), Kant (idéal indéterminé de l'imagination).",
    "À retenir : bonheur ≠ plaisir ; eudémonisme/hédonisme ; le bonheur n'est pas l'affaire de l'État (Kant : despotisme paternaliste)."
  ]);

  set("justice", [
    "Définition : juste (jus = droit) = conforme au droit ET à l'égalité. Légal ≠ légitime ; droit positif (lois posées) vs droit naturel (universel).",
    "Problème : existe-t-il une norme objective du juste, ou n'est-ce que convention/intérêt ? Savoir le juste, ou seulement le sentir ?",
    "🔵 Norme transcendante : Rousseau (sens inné de justice), Aristote (loi commune, Antigone), Kant (universalisation).",
    "🔴 Convention/force : Hobbes (« sans loi, pas d'injustice »), Gygès (« nul n'est juste volontairement »), Pascal (« ce qui est fort soit juste »).",
    "🟣 Équité/contre-pouvoirs : Aristote (l'équité corrige la loi), Rawls (voile d'ignorance, principe de différence), Montesquieu.",
    "À retenir : justice commutative (échanges) / distributive (mérite) / corrective (peines) ; égalité ≠ équité."
  ]);

  set("langage", [
    "Définition : langage (logos = raison ET parole) = mettre en relation par des signes. Langue (système) / parole (acte individuel).",
    "Problème : simple outil de communication, ou consubstantiel à la pensée ? Communiquer = vraiment mettre en commun ?",
    "🔵 Langage = pensée : Hegel (« on pense dans les mots »), Saussure (sans mots, pensée = masse amorphe), Benveniste (≠ code animal).",
    "🔴 Outil réducteur/social : Bergson (« mot-étiquette » fige le singulier), Barthes (« la langue est fasciste »), Bourdieu (habitus).",
    "🟣 Relie par ses défaillances : Freud (le lapsus), Levinas (parler = rapport d'égalité), Ricœur (traduction = hospitalité langagière).",
    "À retenir : langage ≠ langue ≠ parole ; arbitraire du signe (Saussure) ; communiquer ≠ mettre en commun."
  ]);

  set("etat", [
    "Définition : État (stare = se tenir) = institutions centralisées ; « monopole de la violence physique légitime » (Weber).",
    "Problème : l'État protège-t-il (liberté, sécurité) ou opprime-t-il (domination, surveillance) ? Sa légalité est-elle toujours légitime ?",
    "🔵 Réalise la liberté : Hegel (« l'État = la réalité de la liberté »), Spinoza (« le but de l'État, c'est la liberté »), Aristote.",
    "🔴 Opprime/à dépasser : Marx (instrument de classe), anarchistes (« ni Dieu ni maître »), Nietzsche (« monstre froid »), Foucault (biopouvoir).",
    "🟣 Contrat/équilibre des pouvoirs : Hobbes (Léviathan contre la « guerre de tous contre tous »), Rousseau (volonté générale), Montesquieu.",
    "À retenir : État ≠ gouvernement ≠ nation ; légalité ≠ légitimité."
  ]);

  set("nature", [
    "Définition : nature = ce qui existe sans l'homme ; ou « Deus sive Natura » (Spinoza). Opposition nature / culture.",
    "Problème : s'en rendre « maître et possesseur » (Descartes) ou la « suivre » (stoïciens) ? Divine et finalisée, ou matière sans but ?",
    "🔵 Ordonnée/finalisée : Aristote (« la nature ne fait rien en vain »), Spinoza, stoïciens (« vivre selon la nature »).",
    "🔴 Matière à dominer : Lucrèce/Épicure (atomes), Descartes (mécanisme), Hobbes/Hegel (état de nature = violence).",
    "🟣 Dépasser nature/culture : Lévi-Strauss, Descola (« par-delà nature et culture »), biomimétisme.",
    "À retenir : l'« état de nature » est une fiction théorique, pas un fait historique."
  ]);

  set("conscience", [
    "Définition : conscience = connaissance de soi et du monde. 3 sens : de soi (identité), morale (bien/mal), du monde (épistémique).",
    "Problème : la conscience est-elle maîtresse (cogito), ou illusion d'un sujet en réalité déterminé ?",
    "🔵 Fondatrice : Descartes (« je pense donc je suis », dualisme), Kant (« le je pense » accompagne mes représentations), Husserl (intentionnalité).",
    "🔴 Seconde/déterminée : Marx (« la vie détermine la conscience »), Spinoza, Freud (le Moi n'est pas maître), Hume (le moi = un théâtre).",
    "À retenir : conscience de soi ≠ conscience morale ; expérience de Libet (le cerveau précède la décision « consciente »)."
  ]);

  set("inconscient", [
    "Définition : activité psychique qui échappe à la conscience (pulsions refoulées). Freud : Ça (pulsions) / Moi (arbitre) / Surmoi (interdits).",
    "Problème : hypothèse scientifique éclairante, ou déresponsabilisation de l'homme ?",
    "🔵 Critique (défense de la liberté) : Sartre (« la mauvaise foi personnifiée »), Alain (une faute morale).",
    "🔴 Défense : Freud (« le Moi n'est pas maître dans sa propre maison », le rêve = voie royale), Leibniz (petites perceptions), Jung (inconscient collectif).",
    "À retenir : inconscient ≠ simple non-conscient ; Popper : la psychanalyse n'est pas falsifiable."
  ]);

  set("temps", [
    "Définition : temps objectif (horloges, physique) vs temps subjectif (la « durée », Bergson).",
    "Problème : le temps existe-t-il en soi, ou n'est-il qu'une forme de l'esprit ?",
    "🔵 Forme de l'esprit/du vécu : Augustin (mémoire/perception/attente), Kant (forme a priori de la sensibilité), Bergson (durée indivisible).",
    "🔴 Réel/objectif : Héraclite (« on ne se baigne jamais deux fois… »), Nietzsche (éternel retour), Galilée (temps mesurable).",
    "À retenir : temps des horloges ≠ temps vécu ; l'éternel retour = test de l'amor fati."
  ]);

  set("art", [
    "Définition : art = imitation (mimésis, antiquité) OU création (modernité). Beau ≠ agréable ; art ≠ artisanat.",
    "Problème : l'art copie (et nous éloigne du vrai) ou révèle/crée (et dépasse la nature) ?",
    "🔵 Imitation : Platon (imitation d'imitation, le poète chassé de la cité), Hegel (l'art = expression sensible de l'Idée).",
    "🔴 Création : Kant (« le beau plaît universellement sans concept », le génie), Nietzsche (« l'art nous empêche de mourir de la vérité »).",
    "🟣 Imitation ET transformation : Aristote (mimésis + catharsis), Freud (sublimation).",
    "À retenir : le génie donne ses règles à l'art (Kant) ; la catharsis purge les passions (Aristote)."
  ]);

  set("travail", [
    "Définition : travail = transformer la nature ET se transformer soi-même. Distinguer travail / labeur / œuvre (Arendt).",
    "Problème : contrainte/aliénation, ou réalisation/liberté ?",
    "🔵 Réalisation : Hegel (« le travail forme », désir réfréné), Kant (maîtrise des désirs), Arendt (l'œuvre, monde commun).",
    "🔴 Aliénation : Marx (« le travail produit l'ouvrier comme marchandise »), Aristote (indigne du citoyen libre), Rousseau.",
    "🟣 Sartre : le travail peut libérer (le choisir, le transformer).",
    "À retenir : l'aliénation = devenir étranger à son produit et à soi-même."
  ]);

  set("technique", [
    "Définition : technique (technè) = procédés utiles et transmissibles. Homo faber (Bergson : « faire des outils à faire des outils »).",
    "Problème : outil neutre au service de l'homme, ou puissance autonome qui le menace ?",
    "🔵 Maîtrise : Bergson (homo faber), Descartes (maître et possesseur de la nature).",
    "🔴 Menace : Ellul (technique autonome, « juge de la morale »), Heidegger (arraisonnement, « la science ne pense pas »), Jonas (principe responsabilité).",
    "🟣 Stiegler : la technique = pharmakon (poison ET remède).",
    "À retenir : la technique n'est pas neutre (elle impose l'efficacité) ; technique ≠ science (la précède, Ellul)."
  ]);

  set("religion", [
    "Définition : religion (religare = relier) = croyances et rites reliant à un sacré. Distinguer religion / foi / croyance.",
    "Problème : illusion/aliénation, ou lien social et source de sens ?",
    "🔵 Sens/élan : Bergson (religion dynamique = élan d'amour), Pascal (le pari, le gouffre comblé par Dieu).",
    "🔴 Critique : Marx (« opium du peuple »), Freud (illusion), Feuerbach (Dieu = projection de l'homme), Nietzsche (« Dieu est mort »).",
    "🟣 Fonction sociale : Durkheim (« chose éminemment sociale », cohésion), Aron (« religions séculières » = totalitarismes).",
    "À retenir : distinguer la critique (illusion) et la fonction (lien social)."
  ]);

  set("science", [
    "Définition : science = connaissance objective, systématique, expérimentale. Danger du scientisme (la science érigée en religion).",
    "Problème : la science atteint-elle une vérité absolue, ou est-elle faillible / construite ?",
    "🔵 Rationaliste : Descartes (certitude), Comte (positivisme), Bachelard (rationalisme appliqué).",
    "🔴 Critique : Nietzsche (une croyance métaphysique sous la science), Latour (science construite au labo), Heidegger.",
    "🟣 Épistémologie : Popper (falsifiabilité, le cygne noir), Bachelard (obstacle épistémologique), Claude Bernard (méthode expérimentale).",
    "À retenir : science ≠ vérité absolue (faillibilisme) ; scientisme ≠ science ; « science sans conscience… » (Rabelais)."
  ]);

  set("verite", [
    "Définition : vérité = adéquation de la pensée et de la chose (Thomas d'Aquin) ; ou cohérence ; ou accord intersubjectif.",
    "Problème : la vérité est-elle objective/absolue, ou perspective/illusion ?",
    "🔵 Objectiviste : Platon (le monde intelligible, les Idées), Descartes (l'évidence), Spinoza (« le vrai est sa propre norme »).",
    "🔴 Relativiste/pragmatiste : Nietzsche (« les vérités sont des illusions… »), James (le vrai = l'utile), Protagoras (« l'homme mesure de toute chose »).",
    "🟣 Vérité intersubjective : Pascal (la raison ET le cœur).",
    "À retenir : vérité (de la pensée) ≠ réalité (des choses) ; le vrai ≠ l'utile."
  ]);

  set("raison", [
    "Définition : raison (ratio/logos) = penser logiquement et atteindre le vrai. Raison théorique (connaître) / pratique (agir) — Kant.",
    "Problème : la raison est-elle toute-puissante, ou faillible ?",
    "🔵 Rationaliste : Hegel (« ce qui est rationnel est réel »), Leibniz (principe de raison suffisante), Kant (mais faillible en métaphysique).",
    "🔴 Critique : Hume (« la raison est l'esclave des passions »), Pascal (« le cœur a ses raisons… »), Spinoza (le désir aveugle).",
    "🟣 Raison ET intuition : Poincaré (« on prouve par la logique, on trouve par l'intuition »), Kant (« intuitions sans concepts aveugles… »).",
    "À retenir : raison ≠ raisonnable ; intuition vs déduction ; raison théorique vs pratique."
  ]);

})();
