/* =====================================================================
   Philosophie Terminale — Contenu enrichi des 17 notions
   ---------------------------------------------------------------------
   Pour chaque notion :
     coeur        : l'idée centrale + le problème (restituable en 3 lignes)
     distinctions : les couples de concepts à ne pas confondre
     couleur      : { bleu, rouge, violet } = auteurs triés + plans-types
     parcoeur     : formules-chocs / citations courtes
     accroches    : exemples qui « plantent un décor »
     pieges       : erreurs à éviter
     notions      : concepts (terme → déf) pour cartes & associations
   ===================================================================== */

window.PHILO_CONTENT = {

  /* ===================== 1. LE DEVOIR ===================== */
  "devoir": {
    coeur: "Le devoir, c'est l'obligation (ce que je dois faire mais PEUX ne pas faire), à distinguer de la contrainte (subie, sans choix) et de la nécessité (inévitable). Il oblige sans contraindre : il en appelle donc à ma liberté. Problème : ce devoir vient-il du dehors (n'est-ce pas alors une contrainte déguisée, une aliénation ?) ou de moi-même (mais qui m'oblige vraiment ?) ? Dépassement : le « devoir » est un « deux-voir » — l'autonomie véritable suppose de se décentrer, de faire face à autre chose que soi.",
    distinctions: [
      "devoir / obligation / contrainte / nécessité",
      "agir PAR devoir (par respect de la loi) vs CONFORMÉMENT au devoir (par intérêt) — Kant",
      "morale (déterminer des devoirs) / éthique (savoir où est son bien)",
      "légalité / légitimité"
    ],
    couleur: {
      bleu: { titre: "Le devoir vient de la raison / on peut se l'imposer", auteurs: [
        { n: "Kant", d: "Impératif catégorique : agir par devoir, universaliser sa maxime." },
        { n: "Rousseau", d: "Sens inné de justice, pitié, volonté générale." },
        { n: "Descartes", d: "Générosité, libre arbitre, estime de soi." },
        { n: "Aristote", d: "Animal politique, logos, vertu = seconde nature." }
      ]},
      rouge: { titre: "Le devoir est imposé / suspect / intériorisé", auteurs: [
        { n: "Freud", d: "Surmoi = intériorisation des interdits ; malaise dans la civilisation." },
        { n: "Nietzsche", d: "Généalogie de la morale : « Je veux » contre « Tu dois », morale des faibles." },
        { n: "Bergson", d: "La pression sociale = instinct de conservation." },
        { n: "Hobbes / La Boétie", d: "Le pacte = calcul d'intérêts ; servitude volontaire." }
      ]},
      violet: { titre: "Décentrement : le devoir me met face à ce qui me dépasse en moi", auteurs: [
        { n: "Kant", d: "La conscience morale = tribunal où je suis juge ET jugé." },
        { n: "Sartre", d: "Je suis mon propre néant, j'« invente l'homme »." },
        { n: "Bergson", d: "Les deux sources : pression sociale + élan d'amour." },
        { n: "Levinas", d: "Le visage d'autrui m'oblige." }
      ]},
      plans: [
        { sujet: "Qui peut me dire ce que je dois faire ?",
          I: "Le devoir m'est prescrit du dehors (risque d'autoritarisme / d'aliénation).",
          II: "Je suis seul à pouvoir me le donner (risque d'anarchisme).",
          III: "Le sens du devoir suppose un décentrement : face à soi ET à autre chose que soi." }
      ]
    },
    parcoeur: [
      "« agir PAR devoir » (par respect de la loi) ≠ « conformément au devoir » (par intérêt) — Kant",
      "« quoi qu'il m'en coûte »",
      "« Tu dois » vs « Je veux » — Nietzsche",
      "« bois courbe » dont on ne peut rien tailler de droit — Kant",
      "Impératif catégorique = universalise ta maxime"
    ],
    accroches: [
      "Javert (Les Misérables) qui se tue d'avoir une fois manqué à son devoir",
      "Twelve Years a Slave",
      "Lincoln & l'axiome d'Euclide",
      "La banalité du mal (Arendt / procès Eichmann)"
    ],
    pieges: [
      "Ne pas confondre obligation et contrainte.",
      "« Agir par devoir » ≠ « conformément au devoir ».",
      "Le possessif « son » devoir fait question : chacun a-t-il le sien ?",
      "Morale ≠ éthique."
    ],
    notions: [
      { t: "Devoir", d: "Obligation morale : ce que je dois faire mais peux ne pas faire ; il oblige sans contraindre." },
      { t: "Contrainte", d: "Ce qui est subi, sans choix : une force extérieure." },
      { t: "Nécessité", d: "Ce qui est inévitable (ex. respirer)." },
      { t: "Agir par devoir", d: "Agir par pur respect de la loi morale (Kant) — non par intérêt ou inclination." },
      { t: "Impératif catégorique", d: "Commandement moral inconditionnel : « agis selon une maxime que tu peux vouloir universelle » (Kant)." },
      { t: "Surmoi", d: "Instance psychique qui intériorise les interdits et normes sociales (Freud)." },
      { t: "Morale / éthique", d: "Déterminer des devoirs (morale) / savoir où est son bien (éthique)." },
      { t: "Légalité / légitimité", d: "Conformité à la loi / conformité à ce qui est juste." }
    ]
  },

  /* ===================== 2. LA LIBERTÉ ===================== */
  "liberte": {
    coeur: "La liberté = indétermination / autodétermination de la volonté (libre arbitre), opposée au déterminisme. Problème : on la sent intérieurement, mais peut-on la prouver / la connaître ? L'expérience directe en est peut-être une illusion. Dépassement : se sentir vraiment libre suppose paradoxalement d'éprouver en même temps une limite, une contrainte.",
    distinctions: [
      "liberté d'indifférence (faible = indétermination / forte = autodétermination) vs liberté éclairée par l'évidence (Descartes)",
      "libre arbitre / déterminisme",
      "liberté naturelle / civile / morale (Rousseau)",
      "sens cosmologique (spontanéité) / pratique (autonomie) — Kant"
    ],
    couleur: {
      bleu: { titre: "La liberté est réelle, éprouvable", auteurs: [
        { n: "Descartes", d: "Le doute révèle l'indétermination de ma volonté ; je peux refuser l'évidence." },
        { n: "Épictète / stoïciens", d: "Agir sur ce qui dépend de nous → ataraxie." },
        { n: "Sartre", d: "« Condamné à être libre », néant, mauvaise foi." },
        { n: "Hegel", d: "La liberté se conquiert dans le travail et la lutte pour la reconnaissance." }
      ]},
      rouge: { titre: "La liberté est illusoire ou déterminée", auteurs: [
        { n: "Spinoza", d: "Illusion du libre arbitre : la pierre qui « se croit libre » ; conscients de nos désirs, ignorants des causes." },
        { n: "Rousseau", d: "« L'homme est né libre, et partout il est dans les fers »." },
        { n: "Kant", d: "La liberté n'est pas connaissable dans l'expérience — pure idée transcendantale." },
        { n: "Marx / Freud", d: "Déterminismes socio-économiques / inconscient." }
      ]},
      violet: { titre: "Liberté conditionnée par la contrainte", auteurs: [
        { n: "Stravinsky", d: "« La force naît par la contrainte et meurt par la liberté » : la règle fait la liberté créatrice." },
        { n: "Descartes", d: "La finitude / l'erreur révèlent l'infini de ma volonté." },
        { n: "Kant / Levinas", d: "C'est l'expérience de l'obligation, du « tu dois », du visage, qui me révèle libre." },
        { n: "Spinoza", d: "Connaître ses déterminismes pour commencer à être libre." }
      ]},
      plans: [
        { sujet: "Peut-on faire l'expérience de la liberté ?",
          I: "On peut / doit faire l'expérience de la liberté (je la sens : Descartes, Sartre).",
          II: "Cette expérience est limitée et trompeuse (Spinoza, Kant : on ne la connaît pas).",
          III: "La faire pleinement suppose d'éprouver son contraire : limite, obligation, déterminisme assumé." }
      ]
    },
    parcoeur: [
      "« condamné à être libre » — Sartre",
      "« l'homme est né libre, et partout il est dans les fers » — Rousseau",
      "la pierre qui se croit libre — Spinoza",
      "« la force naît par la contrainte… » — Stravinsky / Vinci",
      "liberté = « pure idée transcendantale » — Kant"
    ],
    accroches: [
      "Don Giovanni refusant de se repentir (Mozart)",
      "Le Grand Inquisiteur (Dostoïevski)",
      "L'expérience de Milgram",
      "Matrix (la pilule)"
    ],
    pieges: [
      "Liberté ≠ « faire ce qu'on veut ».",
      "Sentir libre ≠ être libre (Spinoza).",
      "Ne pas opposer naïvement liberté / déterminisme : le III les réconcilie."
    ],
    notions: [
      { t: "Libre arbitre", d: "Pouvoir de la volonté de se déterminer elle-même, indépendamment des causes." },
      { t: "Déterminisme", d: "Thèse selon laquelle tout événement est l'effet nécessaire de causes antérieures." },
      { t: "Liberté d'indifférence", d: "Pouvoir de choisir sans aucune raison ; pour Descartes, le plus bas degré de la liberté." },
      { t: "Idée transcendantale", d: "Idée de la raison (liberté, âme, monde) que l'on peut penser mais non connaître par l'expérience (Kant)." },
      { t: "Ataraxie", d: "Tranquillité de l'âme atteinte en n'agissant que sur ce qui dépend de nous (stoïciens)." },
      { t: "Mauvaise foi", d: "Se mentir à soi-même pour fuir sa liberté et sa responsabilité (Sartre)." },
      { t: "Le regard (Sartre)", d: "Autrui me « chosifie », fige ma transcendance : « ma transcendance transcendée »." }
    ]
  },

  /* ===================== 3. LE BONHEUR ===================== */
  "bonheur": {
    coeur: "Bonheur = état de plénitude / contentement, satisfaction durable, absence de manque. Étymo : « bonne heure » = chance (donc en partie hors de notre contrôle). Tension : le désir est manque / inquiétude, le bonheur est repos. Problèmes : faut-il satisfaire tous ses désirs ? le bonheur dépend-il de nous (peut-on le « faire » ?) ? est-il une affaire privée ou publique ?",
    distinctions: [
      "eudémonisme (but = bonheur) / hédonisme (but = plaisir)",
      "plaisir / bonheur / joie",
      "désirs vains / naturels non nécessaires / naturels nécessaires (Épicure)",
      "bonheur = « idéal de l'imagination » (Kant) ; morale par provision (Descartes) ; ataraxie"
    ],
    couleur: {
      bleu: { titre: "Bonheur par la raison, la vertu, le détachement", auteurs: [
        { n: "Épicure", d: "Arithmétique des désirs → ataraxie." },
        { n: "Sénèque / stoïciens", d: "Âme « inaccessible à la crainte comme au désir »." },
        { n: "Spinoza", d: "Béatitude = amour intellectuel de Dieu ; la vertu découle du bonheur." },
        { n: "Kant", d: "Mériter d'être heureux en agissant par devoir." },
        { n: "Descartes / Pascal", d: "Changer ses désirs plutôt que l'ordre du monde ; le gouffre que seul Dieu remplit." }
      ]},
      rouge: { titre: "Bonheur = satisfaction des désirs, ou impossible", auteurs: [
        { n: "Calliclès", d: "Satisfaire tous ses désirs, intempérance." },
        { n: "Schopenhauer", d: "Vouloir = souffrance ; « la vie oscille comme un pendule de la souffrance à l'ennui »." },
        { n: "Freud", d: "Malaise dans la civilisation." },
        { n: "Marx / Nietzsche", d: "Bonheur « réel » contre l'illusoire (religion) ; dépasser l'« instinct du bonheur »." }
      ]},
      violet: { titre: "L'insatisfaction comme satisfaction / le bonheur ne se « fait » pas", auteurs: [
        { n: "Rousseau", d: "« Malheur à qui n'a plus rien à désirer »." },
        { n: "Leibniz", d: "L'inquiétude est essentielle à la félicité." },
        { n: "Proust", d: "Le bonheur surgit à l'improviste." },
        { n: "Kant / Alain", d: "Bonheur = idéal indéterminé de l'imagination ; « devoir d'être heureux »." }
      ]},
      plans: [
        { sujet: "Pour être heureux, faut-il satisfaire tous ses désirs ?",
          I: "Il le faudrait — ou à défaut ne plus rien désirer (Schopenhauer, Sénèque).",
          II: "Il faut sélectionner ses désirs (Épicure, Spinoza, Socrate vs Calliclès).",
          III: "Ne pas chercher à faire son bonheur (Kant, Rousseau, Nietzsche)." },
        { sujet: "Le bonheur est-il l'affaire de l'État ?",
          I: "Oui (Aristote, Hobbes, Marx).",
          II: "Non (Rousseau, Kant : despotisme paternaliste ; Nietzsche : État « monstre froid »).",
          III: "Le bonheur n'est pas une « affaire » (Kant : indéterminé ; Smith : main invisible)." },
        { sujet: "Qu'est-ce qu'on attend pour être heureux ?",
          I: "Il ne tient qu'à nous, maintenant (Épicure, Sénèque, Descartes, Alain).",
          II: "Pas tout de suite (Aristote : toute une vie ; Pascal / Schopenhauer).",
          III: "Renoncer à être comblé pour se rendre digne d'être heureux (Kant, Nietzsche)." }
      ]
    },
    parcoeur: [
      "« le bonheur est une idée neuve en Europe » — Saint-Just",
      "« changer ses désirs plutôt que l'ordre du monde » — Descartes",
      "pendule souffrance / ennui — Schopenhauer",
      "« deviens ce que tu es » / amor fati — Nietzsche",
      "carpe diem — Horace"
    ],
    accroches: [
      "Chanson « Qu'est-ce qu'on attend pour être heureux ? » (Ray Ventura)",
      "Dom Juan",
      "La Belle Verte",
      "L'« happycratie »"
    ],
    pieges: [
      "Bonheur ≠ plaisir.",
      "« Faire » son bonheur présuppose qu'on le maîtrise — à contester : « bonne heure » = chance.",
      "Le désir est manque MAIS aussi vivifiant (Poros / Pénia)."
    ],
    notions: [
      { t: "Eudémonisme", d: "Doctrine qui fait du bonheur le but de l'existence." },
      { t: "Hédonisme", d: "Doctrine qui fait du plaisir le but de l'existence." },
      { t: "Ataraxie", d: "Absence de trouble de l'âme ; le bonheur selon Épicure et les stoïciens." },
      { t: "Désirs (Épicure)", d: "Vains ; naturels non nécessaires ; naturels nécessaires — seuls ces derniers mènent à l'ataraxie." },
      { t: "Béatitude", d: "Joie suprême = amour intellectuel de Dieu chez Spinoza ; la vertu en découle." },
      { t: "Morale par provision", d: "Règles de conduite provisoires que Descartes se donne pour agir en attendant la certitude." },
      { t: "Bonheur (Kant)", d: "« Idéal de l'imagination », concept indéterminé : il faudrait l'omniscience pour le programmer." }
    ]
  },

  /* ===================== 4. LA JUSTICE ===================== */
  "justice": {
    coeur: "Juste (jus = droit) = conforme au droit ET à l'égalité. Légal ≠ légitime ; droit positif (lois posées) vs droit naturel (principes universels). Problème : existe-t-il une norme objective et universelle de justice, ou le juste n'est-il que convention (et intérêt) ? Peut-on savoir (objectif) ce qui est juste, ou seulement ce qui est juste pour soi ?",
    distinctions: [
      "légal / légitime",
      "droit positif / droit naturel",
      "justice commutative (échanges) / distributive (selon le mérite) / corrective (peines) — Aristote",
      "égalité / équité",
      "convention / nature ; jugement de fait / jugement de valeur"
    ],
    couleur: {
      bleu: { titre: "Norme transcendante de justice (sentiment ou raison)", auteurs: [
        { n: "Rousseau", d: "Conscience = « principe inné de justice », pitié, uniformité du jugement." },
        { n: "Aristote", d: "Loi commune ; Antigone ; justice = vertu / seconde nature." },
        { n: "Kant", d: "Universalisation ; mais aussi devoir d'obéir au pouvoir." },
        { n: "Platon / Cicéron / Thoreau", d: "Idée du Juste ; loi naturelle ; désobéissance civile au nom de principes." }
      ]},
      rouge: { titre: "Justice = convention, force, intérêt", auteurs: [
        { n: "Hobbes", d: "« Là où il n'y a pas de loi, il n'y a pas d'injustice »." },
        { n: "Glaucon (anneau de Gygès)", d: "« Nul n'est juste volontairement »." },
        { n: "Pascal", d: "« Ne pouvant faire que ce qui est juste soit fort, on a fait que ce qui est fort soit juste »." },
        { n: "Kelsen / Nietzsche", d: "La norme de justice = intérêt subjectif ; généalogie." }
      ]},
      violet: { titre: "Équité, contre-pouvoirs, débat (rendre les conventions justes)", auteurs: [
        { n: "Aristote", d: "Équité = correctif de la loi ; « règle de plomb » de Lesbos." },
        { n: "Rawls", d: "Voile d'ignorance ; principe de différence ; justice = équité." },
        { n: "Montesquieu", d: "Séparation des pouvoirs." },
        { n: "Amartya Sen", d: "Pluralité des logiques de justice — l'enfant et la flûte." }
      ]},
      plans: [
        { sujet: "Comment savoir ce qui est juste ?",
          I: "Une norme fiable existe (lois → Hobbes ; sens moral → Rousseau ; raison → Kant).",
          II: "Aucune norme infaillible (dilemmes ; Kelsen, Pascal, Hobbes).",
          III: "L'enjeu n'est pas de savoir mais d'être juste (Camus : la révolte ; Rawls : équité)." },
        { sujet: "Le juste et l'injuste ne sont-ils que des conventions ?",
          I: "Non, réducteur (loi commune Aristote, sentiment Rousseau, vertu).",
          II: "Si, faute de mieux (Gygès, Pascal, Hobbes).",
          III: "Des conventions non réductrices sont possibles (Montesquieu, Kant, Rawls)." }
      ]
    },
    parcoeur: [
      "« nul n'est juste volontairement » — Glaucon",
      "« on a fait que ce qui est fort soit juste » — Pascal",
      "« vérité au-deçà des Pyrénées, erreur au-delà » — Pascal",
      "« voile d'ignorance » — Rawls",
      "désobéissance civile — Thoreau"
    ],
    accroches: [
      "Affaires Halimi / Viry-Châtillon",
      "Antigone",
      "Anneau de Gygès",
      "Dilemme du tramway (Foot)",
      "Lincoln & Euclide"
    ],
    pieges: [
      "Légal ≠ légitime.",
      "Savoir (objectif) ≠ sentir (subjectif).",
      "Le « droit naturel » peut masquer un intérêt (Kelsen).",
      "Convention ≠ arbitraire pur (III) ; égalité ≠ équité."
    ],
    notions: [
      { t: "Légal / légitime", d: "Conforme à la loi en vigueur / conforme à ce qui est juste en droit." },
      { t: "Droit positif / naturel", d: "Lois effectivement posées par les hommes / principes universels antérieurs aux lois." },
      { t: "Justice distributive", d: "Répartition des biens et honneurs selon le mérite (Aristote)." },
      { t: "Justice commutative", d: "Égalité dans les échanges entre individus (Aristote)." },
      { t: "Équité", d: "Correctif de la loi trop générale, ajusté au cas particulier — « règle de plomb »." },
      { t: "Voile d'ignorance", d: "Choisir les principes de justice sans connaître sa place sociale → accord équitable (Rawls)." },
      { t: "Anneau de Gygès", d: "Mythe (Platon) : rendu invisible, nul ne resterait juste — « nul n'est juste volontairement »." }
    ]
  },

  /* ===================== 5. LE LANGAGE ===================== */
  "langage": {
    coeur: "Langage (logos = raison ET parole) = faculté de mettre en relation par des signes. Problème : le réduire à un outil de communication (extérieur, conventionnel, réducteur), ou voir qu'il est consubstantiel à la pensée et qu'il nous relie par ses défaillances mêmes ? La communication réussit-elle vraiment à « mettre en commun » ?",
    distinctions: [
      "langage (faculté) / langue (système d'un groupe) / parole (acte concret)",
      "signifiant / signifié ; arbitraire du signe (Saussure)",
      "communiquer / exprimer",
      "langage humain / code animal (Benveniste) ; convaincre / persuader"
    ],
    couleur: {
      bleu: { titre: "Le langage est consubstantiel à la pensée, ouvre à l'universel", auteurs: [
        { n: "Hegel", d: "« C'est dans les mots que nous pensons » ; l'ineffable = la pensée confuse." },
        { n: "Saussure", d: "Sans mots, la pensée = « masse amorphe »." },
        { n: "Platon", d: "Pensée = dialogue de l'âme ; maïeutique." },
        { n: "Benveniste / Descartes", d: "Langage humain ≠ code des abeilles ; le langage distingue l'homme de l'automate." }
      ]},
      rouge: { titre: "Le langage = outil réducteur, social, rapport de force", auteurs: [
        { n: "Bergson", d: "« Mot-étiquette » : le langage fige le singulier, « incommensurable » avec la pensée." },
        { n: "Barthes", d: "« La langue est fasciste »." },
        { n: "Bourdieu", d: "Langage = habitus, rapports de classe." },
        { n: "Nietzsche / Gorgias", d: "« Chaque mot est un préjugé » ; rhétorique = pouvoir." }
      ]},
      violet: { titre: "Le langage relie par ses défaillances / intersubjectivité", auteurs: [
        { n: "Freud", d: "Le lapsus révèle un fond inconscient commun." },
        { n: "Levinas", d: "« Parler institue le rapport moral d'égalité »." },
        { n: "Ricœur", d: "Traduction = « hospitalité langagière »." },
        { n: "Merleau-Ponty / Arendt", d: "Le dialogue = terrain commun ; l'esprit humain ≠ IA (sens multiples)." }
      ]},
      plans: [
        { sujet: "Le langage n'est-il qu'un outil de communication ?",
          I: "Oui, fonction sociale d'outil (Aristote, Rousseau, Saussure).",
          II: "Non, irréductible à cette fonction (Bourdieu ; langage = pensée : Hegel, Saussure).",
          III: "C'est par ses défaillances qu'il relie (lapsus, dialogue, traduction ; spécificité humaine vs IA)." }
      ]
    },
    parcoeur: [
      "« la langue est fasciste » — Barthes",
      "« les limites de mon langage signifient les limites de mon monde » — Wittgenstein",
      "« le langage est la maison de l'être » — Heidegger",
      "« c'est dans les mots que nous pensons » — Hegel",
      "« mot-étiquette » — Bergson"
    ],
    accroches: [
      "Les « éléments de langage » politiques",
      "Lost in Translation",
      "1984 / la novlangue",
      "#MeToo (« libérer la parole »)"
    ],
    pieges: [
      "Langage ≠ langue ≠ parole.",
      "Communiquer ≠ mettre en commun.",
      "Le langage humain ≠ code animal (créativité, dialogue, vision du monde)."
    ],
    notions: [
      { t: "Langage / langue / parole", d: "Faculté universelle / système propre à un groupe / usage individuel concret." },
      { t: "Signifiant / signifié", d: "Image acoustique (le mot) / concept associé ; leur lien est arbitraire (Saussure)." },
      { t: "Arbitraire du signe", d: "Aucun lien naturel entre le mot et la chose ; le signe est conventionnel (Saussure)." },
      { t: "Mot-étiquette", d: "Le mot ne retient que le général / l'utile et écrase le singulier (Bergson)." },
      { t: "Code animal", d: "Système de signaux fermé, sans dialogue ni créativité (Benveniste) — ce n'est pas un langage." },
      { t: "Maïeutique", d: "Art socratique d'« accoucher » les esprits par le dialogue." }
    ]
  },

  /* ===================== 6. L'ÉTAT ===================== */
  "etat": {
    coeur: "État (stare = se tenir) = système d'institutions centralisées ; « monopole de la violence physique légitime » (Weber). Fonctions régaliennes (impôt, armée, monnaie). Problème : l'État protège-t-il (liberté, sécurité) ou opprime-t-il (domination, surveillance) ? Sa légalité est-elle toujours légitime ?",
    distinctions: [
      "État / gouvernement / nation",
      "légalité / légitimité",
      "État-providence / État minimal (libéral)",
      "pouvoirs exécutif / législatif / judiciaire (Montesquieu)"
    ],
    couleur: {
      bleu: { titre: "L'État est légitime, réalise la liberté", auteurs: [
        { n: "Hegel", d: "« L'État = la seule réalité de la liberté »." },
        { n: "Spinoza", d: "« Le but de l'État, c'est la liberté »." },
        { n: "Aristote", d: "Animal politique : l'homme se réalise dans la cité." }
      ]},
      rouge: { titre: "L'État opprime / est à dépasser", auteurs: [
        { n: "Marx", d: "Instrument de la classe dominante, à abolir." },
        { n: "Anarchistes (Proudhon, Bakounine)", d: "« Ni Dieu ni maître » : toute autorité coercitive est illégitime." },
        { n: "Nietzsche", d: "« Le plus froid des monstres froids »." },
        { n: "Foucault / Orwell", d: "Panoptique, biopouvoir ; Big Brother." }
      ]},
      violet: { titre: "Contrat, équilibre des pouvoirs", auteurs: [
        { n: "Hobbes", d: "Léviathan : sortir de la « guerre de tous contre tous » par le contrat." },
        { n: "Rousseau", d: "Contrat social, volonté générale." },
        { n: "Montesquieu", d: "Séparation des pouvoirs." }
      ]},
      plans: [
        { sujet: "L'État libère-t-il ou opprime-t-il ?",
          I: "L'État libère et protège (Hobbes, Spinoza, Hegel).",
          II: "L'État opprime et domine (Marx, anarchistes, Foucault).",
          III: "Un État légitime suppose contrat et contre-pouvoirs (Rousseau, Montesquieu)." }
      ]
    },
    parcoeur: [
      "« monopole de la violence physique légitime » — Weber",
      "« le plus froid des monstres froids » — Nietzsche",
      "« l'homme est un loup pour l'homme » — Hobbes / Plaute",
      "« le but de l'État, c'est la liberté » — Spinoza"
    ],
    accroches: [
      "Le Léviathan (gravure de Hobbes)",
      "1984 / Big Brother",
      "Le panoptique de Bentham (Foucault)"
    ],
    pieges: [
      "État ≠ gouvernement ≠ nation.",
      "Légalité ≠ légitimité (cf. désobéissance civile)."
    ],
    notions: [
      { t: "État", d: "Système d'institutions centralisées détenant le monopole de la violence légitime (Weber)." },
      { t: "Légitimité", d: "Reconnaissance par les citoyens du droit du pouvoir à commander (≠ simple légalité)." },
      { t: "Léviathan", d: "Souverain absolu auquel les individus délèguent leur force pour sortir de l'état de nature (Hobbes)." },
      { t: "Volonté générale", d: "Volonté du corps politique visant l'intérêt commun, fondement du contrat (Rousseau)." },
      { t: "Séparation des pouvoirs", d: "Distinction exécutif / législatif / judiciaire pour limiter le pouvoir (Montesquieu)." },
      { t: "Biopouvoir", d: "Pouvoir qui gère et discipline les corps et les populations (Foucault)." }
    ]
  },

  /* ===================== 7. LA NATURE ===================== */
  "nature": {
    coeur: "Nature = ce qui existe sans intervention humaine ; OU « Deus sive Natura » (Spinoza). Opposition nature / culture. Problème : faut-il s'en rendre « maître et possesseur » (Descartes) ou la suivre (stoïciens) ? Est-elle divine et ordonnée, ou matérielle et sans finalité ?",
    distinctions: [
      "nature / culture",
      "état de nature / état civil",
      "natura naturans (créante) / naturata (créée) — Spinoza",
      "Umwelt (monde perçu) / Umgebung (monde objectif) — Uexküll"
    ],
    couleur: {
      bleu: { titre: "Nature ordonnée, finalisée, divine", auteurs: [
        { n: "Aristote", d: "« La nature ne fait rien en vain » : finalité." },
        { n: "Spinoza", d: "Deus sive Natura, infinie / éternelle." },
        { n: "Sénèque / stoïciens", d: "« Vivre selon la nature »." },
        { n: "Kant", d: "Nature = ensemble des lois universelles." }
      ]},
      rouge: { titre: "Nature = matière sans finalité, à dominer", auteurs: [
        { n: "Lucrèce / Épicure", d: "Atomes ; « la nature n'a pas été faite pour nous »." },
        { n: "Descartes", d: "« Maître et possesseur », mécanisme." },
        { n: "Hobbes / Hegel", d: "État de nature = violence et injustice." }
      ]},
      violet: { titre: "Dépasser l'opposition nature / culture", auteurs: [
        { n: "Lévi-Strauss", d: "Ce qui est universel relève de la nature." },
        { n: "Descola", d: "« Par-delà nature et culture »." },
        { n: "Uexküll", d: "Umwelt / Umgebung ; le biomimétisme." }
      ]},
      plans: [
        { sujet: "Faut-il être maître de la nature, ou la suivre ?",
          I: "S'en rendre maître et possesseur (Descartes, Bacon).",
          II: "La suivre / la respecter (stoïciens, écologie).",
          III: "Dépasser le dualisme nature / culture (Lévi-Strauss, Descola)." }
      ]
    },
    parcoeur: [
      "« maître et possesseur de la nature » — Descartes",
      "« Deus sive Natura » — Spinoza",
      "« la nature ne fait rien en vain » — Aristote",
      "« vivre selon la nature » — stoïciens"
    ],
    accroches: [
      "L'Anthropocène",
      "Le biomimétisme",
      "Avatar (Pandora)"
    ],
    pieges: [
      "Nature ≠ inné seulement (≠ culture, mais l'homme en fait partie).",
      "État de nature = fiction théorique, pas un fait historique."
    ],
    notions: [
      { t: "Nature / culture", d: "Ce qui est donné / ce qui est acquis, produit par l'homme et transmis." },
      { t: "Deus sive Natura", d: "« Dieu, c'est-à-dire la Nature » : substance infinie unique (Spinoza)." },
      { t: "État de nature", d: "Fiction d'un état humain antérieur à la société, pour penser le fondement de l'État." },
      { t: "Finalité (Aristote)", d: "Tout être tend vers une fin : « la nature ne fait rien en vain »." },
      { t: "Mécanisme", d: "Explication de la nature par les seules lois de la matière et du mouvement (Descartes)." },
      { t: "Umwelt", d: "Le monde tel qu'il est perçu et vécu par un organisme (Uexküll)." }
    ]
  },

  /* ===================== 8. LA CONSCIENCE ===================== */
  "conscience": {
    coeur: "Conscience = connaissance de soi et du monde. Trois sens : conscience de soi (identité), conscience morale (juge du bien / mal), conscience épistémique (du monde). Problème : la conscience est-elle maîtresse (cogito) ou illusion d'un sujet en réalité déterminé ?",
    distinctions: [
      "conscience de soi / conscience morale / conscience du monde",
      "sujet / objet ; intentionnalité (toute conscience est conscience de quelque chose)",
      "conscience / inconscient"
    ],
    couleur: {
      bleu: { titre: "La conscience est maîtresse, fondatrice du sujet", auteurs: [
        { n: "Descartes", d: "« Je pense donc je suis » ; dualisme âme / corps." },
        { n: "Kant", d: "« Le je pense doit pouvoir accompagner toutes mes représentations »." },
        { n: "Husserl", d: "« Toute conscience est conscience de quelque chose » (intentionnalité)." }
      ]},
      rouge: { titre: "La conscience est seconde, déterminée, illusoire", auteurs: [
        { n: "Marx", d: "« Ce n'est pas la conscience qui détermine la vie, mais la vie qui détermine la conscience »." },
        { n: "Spinoza", d: "Conscients de nos actions, ignorants de leurs causes." },
        { n: "Freud", d: "Le Moi n'est pas maître." },
        { n: "Hume", d: "Le « moi » = un théâtre, pas d'identité stable." }
      ]},
      plans: []
    },
    parcoeur: [
      "« je pense donc je suis » — Descartes",
      "« le je pense… accompagne… toutes mes représentations » — Kant",
      "expérience de Libet : l'activité cérébrale précède la décision « consciente »"
    ],
    accroches: [
      "Le test du miroir",
      "Memento (Nolan)"
    ],
    pieges: [
      "Conscience de soi ≠ conscience morale.",
      "L'expérience de Libet relativise la maîtrise consciente."
    ],
    notions: [
      { t: "Cogito", d: "« Je pense donc je suis » : première certitude indubitable (Descartes)." },
      { t: "Dualisme", d: "Distinction de deux substances : l'âme (pensée) et le corps (étendue) — Descartes." },
      { t: "Intentionnalité", d: "Toute conscience est conscience DE quelque chose (Husserl)." },
      { t: "Le « moi » (Hume)", d: "Non une substance stable, mais un faisceau de perceptions — un « théâtre »." }
    ]
  },

  /* ===================== 9. L'INCONSCIENT ===================== */
  "inconscient": {
    coeur: "Inconscient = activité psychique qui échappe à la conscience (pulsions refoulées). Freud : Ça / Moi / Surmoi. Problème : hypothèse scientifique éclairante, ou déresponsabilisation de l'homme ?",
    distinctions: [
      "Ça (pulsions) / Moi (arbitre conscient) / Surmoi (interdits intériorisés)",
      "inconscient / non-conscient (simple absence de conscience)",
      "refoulement / retour du refoulé"
    ],
    couleur: {
      bleu: { titre: "Critique de l'inconscient (défense de la liberté / responsabilité)", auteurs: [
        { n: "Sartre", d: "« L'inconscient n'est que la mauvaise foi personnifiée »." },
        { n: "Alain", d: "L'inconscient « grossi » est une faute morale." }
      ]},
      rouge: { titre: "Défense de l'inconscient", auteurs: [
        { n: "Freud", d: "« Le Moi n'est pas maître dans sa propre maison » ; le rêve = « voie royale »." },
        { n: "Leibniz", d: "« Petites perceptions » infra-conscientes." },
        { n: "Jung", d: "Inconscient collectif, archétypes." }
      ]},
      plans: []
    },
    parcoeur: [
      "« le Moi n'est pas maître dans sa propre maison » — Freud",
      "« Là où était le Ça, doit advenir le Moi » — Freud",
      "le rêve = « voie royale vers l'inconscient » — Freud"
    ],
    accroches: [
      "Le lapsus / l'acte manqué",
      "Un divan de psychanalyse"
    ],
    pieges: [
      "Inconscient ≠ simple non-conscient.",
      "Critique de scientificité (Popper : non réfutable)."
    ],
    notions: [
      { t: "Inconscient", d: "Partie du psychisme inaccessible à la conscience, faite de pulsions refoulées (Freud)." },
      { t: "Ça / Moi / Surmoi", d: "Pulsions / arbitre conscient sous contrainte / interdits intériorisés (Freud)." },
      { t: "Refoulement", d: "Mécanisme qui maintient hors de la conscience des représentations pénibles." },
      { t: "Petites perceptions", d: "Perceptions infimes et inaperçues qui agissent sans être conscientes (Leibniz)." }
    ]
  },

  /* ===================== 10. LE TEMPS ===================== */
  "temps": {
    coeur: "Temps objectif (horloges, physique) vs subjectif (la « durée », Bergson). Problème : le temps existe-t-il en soi, ou n'est-il qu'une forme de l'esprit ?",
    distinctions: [
      "temps objectif (mesurable) / temps vécu (la durée)",
      "passé / présent / futur (mémoire / perception / attente — Augustin)",
      "instant / durée"
    ],
    couleur: {
      bleu: { titre: "Le temps est une forme de l'esprit / du vécu", auteurs: [
        { n: "Augustin", d: "Présent du passé / présent / futur = mémoire / perception / attente." },
        { n: "Kant", d: "Le temps = forme a priori de la sensibilité, « condition subjective »." },
        { n: "Bergson", d: "La durée vécue, indivisible." }
      ]},
      rouge: { titre: "Le temps est réel, objectif, extérieur", auteurs: [
        { n: "Héraclite", d: "Tout coule : « on ne se baigne jamais deux fois dans le même fleuve »." },
        { n: "Galilée", d: "Temps physique mesurable." },
        { n: "Nietzsche", d: "L'éternel retour." }
      ]},
      violet: { titre: "Dépasser objectif / subjectif", auteurs: [
        { n: "Hartmut Rosa", d: "Accélération sociale, « paradoxe temporel »." }
      ]},
      plans: []
    },
    parcoeur: [
      "« carpe diem » — Horace",
      "l'éternel retour — Nietzsche",
      "la « durée » — Bergson"
    ],
    accroches: [
      "Proust et la madeleine",
      "Interstellar (dilatation du temps)"
    ],
    pieges: [
      "Temps des horloges ≠ temps vécu.",
      "Si l'on est impatient, le temps « passe » plus lentement."
    ],
    notions: [
      { t: "Durée (Bergson)", d: "Temps vécu, qualitatif et indivisible, irréductible au temps des horloges." },
      { t: "Temps (Kant)", d: "Forme a priori de la sensibilité : condition subjective de toute expérience." },
      { t: "Éternel retour", d: "Test éthique : voudrais-tu revivre ta vie à l'identique une infinité de fois ? (Nietzsche)." }
    ]
  },

  /* ===================== 11. L'ART ===================== */
  "art": {
    coeur: "Art = imitation (Antiquité / classicisme, vision idéaliste, relative à la nature) OU création (modernité, vision matérialiste, absolue). Problème : l'art copie-t-il (et nous éloigne du vrai) ou révèle / crée-t-il (et dépasse la nature) ?",
    distinctions: [
      "imitation (mimésis) / création",
      "beau / agréable",
      "art / artisanat (technique)",
      "génie / règle"
    ],
    couleur: {
      bleu: { titre: "L'art = imitation (idéalisme)", auteurs: [
        { n: "Platon", d: "Art = imitation d'imitation ; le poète chassé de la cité." },
        { n: "Plotin", d: "L'art remonte aux raisons (les Idées)." },
        { n: "Hegel", d: "L'art = expression sensible de l'Idée." }
      ]},
      rouge: { titre: "L'art = création (modernité)", auteurs: [
        { n: "Kant", d: "« Le beau plaît universellement sans concept » ; le génie." },
        { n: "Nietzsche", d: "« L'art nous empêche de mourir de la vérité »." },
        { n: "Bacon / Bergson", d: "« L'art, c'est l'homme ajouté à la nature » ; l'artiste « voit mieux »." }
      ]},
      violet: { titre: "Imitation ET transformation", auteurs: [
        { n: "Aristote", d: "Mimésis + catharsis." },
        { n: "Freud", d: "Sublimation." }
      ]},
      plans: []
    },
    parcoeur: [
      "« le beau plaît universellement sans concept » — Kant",
      "« l'art rend visible l'invisible » — Klee",
      "« l'art nous empêche de mourir de la vérité » — Nietzsche"
    ],
    accroches: [
      "Duchamp et la Fontaine (urinoir)",
      "Les Ménines (Vélasquez)"
    ],
    pieges: [
      "Beau ≠ agréable.",
      "Art ≠ artisanat.",
      "L'imitation aristotélicienne n'est pas servile (catharsis)."
    ],
    notions: [
      { t: "Mimésis", d: "Imitation : reproduction de la nature ou des actions humaines (Platon, Aristote)." },
      { t: "Catharsis", d: "Purgation des passions par la représentation tragique (Aristote)." },
      { t: "Beau (Kant)", d: "Ce qui « plaît universellement sans concept », sans intérêt." },
      { t: "Génie", d: "Talent naturel par lequel l'art donne ses règles, sans les recevoir (Kant)." },
      { t: "Sublimation", d: "Détournement de l'énergie pulsionnelle vers la création (Freud)." }
    ]
  },

  /* ===================== 12. LE TRAVAIL ===================== */
  "travail": {
    coeur: "Travail = transformation de la nature ET de soi. Contrainte / aliénation, ou réalisation / liberté ? L'homme se perd-il dans son labeur, ou s'y construit-il ?",
    distinctions: [
      "travail / labeur / œuvre",
      "aliénation (se perdre dans son produit) / réalisation",
      "travail forcé / travail choisi"
    ],
    couleur: {
      bleu: { titre: "Le travail réalise et forme l'homme", auteurs: [
        { n: "Hegel", d: "« Le travail est désir réfréné… le travail forme »." },
        { n: "Kant", d: "Le travail = maîtrise des désirs." },
        { n: "Arendt", d: "Voir sa vie comme une « œuvre »." }
      ]},
      rouge: { titre: "Le travail aliène", auteurs: [
        { n: "Marx", d: "« Le travail produit l'ouvrier comme marchandise »." },
        { n: "Aristote", d: "Le travail est contraire à la liberté du citoyen ; esclaves « par nature »." },
        { n: "Rousseau", d: "« Ne rien faire = la première passion de l'homme »." }
      ]},
      violet: { titre: "Le travail comme libération possible", auteurs: [
        { n: "Sartre", d: "Le travail comme libérateur / révolutionnaire ; choisir son travail." }
      ]},
      plans: []
    },
    parcoeur: [
      "« le travail produit l'ouvrier comme marchandise » — Marx",
      "« le travail forme » — Hegel"
    ],
    accroches: [
      "Les Temps modernes (Chaplin)",
      "Germinal (Zola)"
    ],
    pieges: [
      "Distinguer travail / labeur / œuvre.",
      "Aliénation = se perdre dans son produit (pas seulement « être exploité »)."
    ],
    notions: [
      { t: "Aliénation", d: "Processus par lequel l'ouvrier devient étranger à lui-même et à son produit (Marx)." },
      { t: "« Le travail forme »", d: "En transformant la nature, l'homme se transforme et accède à la conscience de soi (Hegel)." },
      { t: "Œuvre (Arendt)", d: "Production durable qui constitue un monde commun, distincte du labeur consommé." }
    ]
  },

  /* ===================== 13. LA TECHNIQUE ===================== */
  "technique": {
    coeur: "Technique (technè) = ensemble de procédés utiles et transmissibles ; homo faber (Bergson). Problème : la technique est-elle un outil neutre au service de l'homme, ou une puissance autonome qui le menace ?",
    distinctions: [
      "technique / science (la technique la précède — Ellul)",
      "homo faber / homo sapiens",
      "outil neutre / système autonome"
    ],
    couleur: {
      bleu: { titre: "Maîtrise / homo faber", auteurs: [
        { n: "Bergson", d: "L'intelligence = « faire des outils à faire des outils »." },
        { n: "Descartes", d: "« Maître et possesseur » de la nature." }
      ]},
      rouge: { titre: "Critique : la technique menace", auteurs: [
        { n: "Ellul", d: "La technique autonome, devenue « juge de la morale »." },
        { n: "Heidegger", d: "« La science ne pense pas » / l'arraisonnement." },
        { n: "Jonas", d: "« Tout ce que nous pourrons, nous le ferons » → principe responsabilité." }
      ]},
      violet: { titre: "Ambivalence : le pharmakon", auteurs: [
        { n: "Stiegler", d: "La technique = pharmakon : poison ET remède." }
      ]},
      plans: []
    },
    parcoeur: [
      "« homo faber » — Bergson",
      "technique = « pharmakon » — Stiegler",
      "« tout ce que nous pourrons, nous le ferons » — Jonas"
    ],
    accroches: [
      "Le mythe de Prométhée",
      "L'intelligence artificielle / ChatGPT"
    ],
    pieges: [
      "Technique ≠ science (la technique la précède, Ellul).",
      "La technique n'est pas neutre : elle impose efficacité et rationalité."
    ],
    notions: [
      { t: "Homo faber", d: "L'homme défini comme fabricant d'outils (Bergson) — plus que « sapiens »." },
      { t: "Pharmakon", d: "À la fois poison et remède : la technique selon Stiegler." },
      { t: "Arraisonnement", d: "La technique somme la nature de se livrer comme « fonds » disponible (Heidegger)." },
      { t: "Principe responsabilité", d: "Agir de sorte que les effets soient compatibles avec une vie humaine future (Jonas)." }
    ]
  },

  /* ===================== 14. LA RELIGION ===================== */
  "religion": {
    coeur: "Religion (religare = relier) = système de croyances et de rites reliant à un sacré. Problème : illusion / aliénation, ou lien social et source de sens ?",
    distinctions: [
      "religion / foi / croyance",
      "sacré / profane",
      "critique (illusion) / fonction (lien social)"
    ],
    couleur: {
      bleu: { titre: "La religion comme élan et source de sens", auteurs: [
        { n: "Bergson", d: "Religion dynamique = élan, amour surnaturel." },
        { n: "Pascal", d: "Le pari ; le « gouffre » comblé par Dieu." }
      ]},
      rouge: { titre: "Critique : illusion / aliénation", auteurs: [
        { n: "Marx", d: "« La religion est l'opium du peuple »." },
        { n: "Freud", d: "Illusion, névrose collective." },
        { n: "Feuerbach / Nietzsche", d: "Dieu = projection de l'homme ; « Dieu est mort »." }
      ]},
      violet: { titre: "Fonction sociale de cohésion", auteurs: [
        { n: "Durkheim", d: "« La religion est chose éminemment sociale »." },
        { n: "Aron", d: "« Religion séculière » : les totalitarismes." }
      ]},
      plans: []
    },
    parcoeur: [
      "« la religion est l'opium du peuple » — Marx",
      "« Dieu est mort » — Nietzsche",
      "religion = « chose éminemment sociale » — Durkheim"
    ],
    accroches: [
      "Le pari de Pascal",
      "La laïcité à l'école"
    ],
    pieges: [
      "Religion ≠ foi ≠ croyance.",
      "Distinguer critique (illusion) et fonction (lien social)."
    ],
    notions: [
      { t: "Religion", d: "Système de croyances et de rites reliant une communauté à un sacré (religare = relier)." },
      { t: "« Opium du peuple »", d: "La religion console de la misère réelle tout en la perpétuant (Marx)." },
      { t: "Projection (Feuerbach)", d: "Dieu = projection idéalisée des qualités humaines." },
      { t: "Fait social (Durkheim)", d: "La religion exprime et renforce la cohésion de la société." }
    ]
  },

  /* ===================== 15. LA SCIENCE ===================== */
  "science": {
    coeur: "Science = connaissance objective, systématique, expérimentale. Problème : atteint-elle une vérité absolue, ou est-elle faillible / construite ? Danger du scientisme (la science érigée en religion).",
    distinctions: [
      "science / opinion (doxa)",
      "science / scientisme",
      "vérité absolue / faillibilisme",
      "expliquer (sciences de la nature) / comprendre (sciences humaines)"
    ],
    couleur: {
      bleu: { titre: "Rationaliste : la science atteint le certain", auteurs: [
        { n: "Descartes", d: "Certitude « égale aux démonstrations de l'arithmétique »." },
        { n: "Comte", d: "Le positivisme." },
        { n: "Bachelard", d: "Le rationalisme appliqué." }
      ]},
      rouge: { titre: "Critique : science faillible / construite", auteurs: [
        { n: "Nietzsche", d: "« Sur une croyance métaphysique repose notre croyance en la science »." },
        { n: "Latour", d: "Science « socialement construite » au laboratoire." },
        { n: "Heidegger", d: "« La science ne pense pas »." }
      ]},
      violet: { titre: "Épistémologie : ce qui fait la scientificité", auteurs: [
        { n: "Popper", d: "Critère de falsifiabilité ; le « cygne noir »." },
        { n: "Bachelard", d: "Obstacle épistémologique ; « les instruments sont des théories matérialisées »." },
        { n: "Claude Bernard", d: "La méthode expérimentale." }
      ]},
      plans: []
    },
    parcoeur: [
      "« science sans conscience n'est que ruine de l'âme » — Rabelais",
      "critère de falsifiabilité — Popper",
      "« la science ne pense pas » — Heidegger"
    ],
    accroches: [
      "Galilée et l'Inquisition",
      "Le réchauffement climatique (consensus / doute)"
    ],
    pieges: [
      "Science ≠ vérité absolue (faillibilisme).",
      "Scientisme ≠ science."
    ],
    notions: [
      { t: "Falsifiabilité", d: "Une théorie est scientifique si elle est réfutable / testable par l'expérience (Popper)." },
      { t: "Scientisme", d: "Croyance excessive que la science peut tout résoudre et fonde toute vérité." },
      { t: "Obstacle épistémologique", d: "Habitude ou intuition qui freine la connaissance scientifique (Bachelard)." },
      { t: "Méthode expérimentale", d: "Observation → hypothèse → expérience → vérification (Claude Bernard)." }
    ]
  },

  /* ===================== 16. LA VÉRITÉ ===================== */
  "verite": {
    coeur: "Vérité = adéquation de la pensée et de la chose (Thomas d'Aquin) ; OU cohérence interne ; OU accord intersubjectif. Problème : la vérité est-elle objective / absolue, ou perspective / illusion ?",
    distinctions: [
      "vérité (de la pensée / du discours) / réalité (des choses)",
      "le vrai / l'utile (contre James)",
      "adéquation / cohérence / consensus"
    ],
    couleur: {
      bleu: { titre: "Objectiviste : une vérité absolue existe", auteurs: [
        { n: "Platon", d: "Le vrai = le monde intelligible, les Idées." },
        { n: "Descartes", d: "L'évidence, la certitude." },
        { n: "Spinoza", d: "« Le vrai est sa propre norme et celle du faux »." },
        { n: "Thomas d'Aquin", d: "Adéquation chose / intellect." }
      ]},
      rouge: { titre: "Relativiste / pragmatiste", auteurs: [
        { n: "Nietzsche", d: "« Les vérités sont des illusions dont on a oublié qu'elles le sont »." },
        { n: "William James", d: "Le vrai = ce qui est avantageux pour la pensée." },
        { n: "Protagoras", d: "« L'homme est la mesure de toute chose »." }
      ]},
      violet: { titre: "Vérité intersubjective", auteurs: [
        { n: "Pascal", d: "La raison ET le cœur." }
      ]},
      plans: []
    },
    parcoeur: [
      "« la vérité est l'adéquation de la chose et de l'intellect » — Thomas d'Aquin",
      "« les vérités sont des illusions… » — Nietzsche",
      "« l'homme est la mesure de toute chose » — Protagoras"
    ],
    accroches: [
      "Les « faits alternatifs » / fake news",
      "Matrix"
    ],
    pieges: [
      "Vérité (de la pensée) ≠ réalité (des choses).",
      "Le vrai ≠ l'utile (contre James)."
    ],
    notions: [
      { t: "Adéquation", d: "Correspondance de la pensée et de la chose : définition classique du vrai (Thomas d'Aquin)." },
      { t: "Perspectivisme", d: "Il n'y a pas de faits, seulement des interprétations ; les vérités sont des illusions utiles (Nietzsche)." },
      { t: "Pragmatisme", d: "Est vrai ce qui réussit, ce qui est avantageux pour la pensée (James)." },
      { t: "Évidence", d: "Ce qui se présente à l'esprit avec une clarté telle qu'on ne peut en douter (Descartes)." }
    ]
  },

  /* ===================== 17. LA RAISON ===================== */
  "raison": {
    coeur: "Raison (ratio / logos) = faculté de penser logiquement et d'atteindre le vrai. Raison vs intuition / cœur ; raison théorique vs pratique (Kant). Problème : la raison est-elle toute-puissante, ou faillible ?",
    distinctions: [
      "raison / raisonnable",
      "raison théorique (connaître) / raison pratique (agir) — Kant",
      "intuition / déduction"
    ],
    couleur: {
      bleu: { titre: "Rationaliste : la raison saisit le réel", auteurs: [
        { n: "Hegel", d: "« Ce qui est rationnel est réel et ce qui est réel est rationnel »." },
        { n: "Leibniz", d: "Principe de raison suffisante." },
        { n: "Kant", d: "Raison pure / pratique ; mais faillible en métaphysique." }
      ]},
      rouge: { titre: "Critique : la raison est limitée / esclave", auteurs: [
        { n: "Hume", d: "« La raison est, et ne peut être, que l'esclave des passions »." },
        { n: "Pascal", d: "« Le cœur a ses raisons que la raison ne connaît point »." },
        { n: "Spinoza", d: "Les hommes conduits par le « désir aveugle »." }
      ]},
      violet: { titre: "Raison ET intuition", auteurs: [
        { n: "Poincaré", d: "« On prouve par la logique, on trouve par l'intuition »." },
        { n: "Kant", d: "« Intuitions sans concepts aveugles, concepts sans intuitions vides »." }
      ]},
      plans: []
    },
    parcoeur: [
      "« ce qui est rationnel est réel » — Hegel",
      "« le cœur a ses raisons que la raison ne connaît point » — Pascal",
      "« la raison est l'esclave des passions » — Hume"
    ],
    accroches: [
      "« Le sommeil de la raison engendre des monstres » (Goya)",
      "Les théories du complot"
    ],
    pieges: [
      "Raison ≠ raisonnable.",
      "Intuition vs déduction ; raison théorique vs pratique."
    ],
    notions: [
      { t: "Raison théorique / pratique", d: "Faculté de connaître le vrai / de déterminer l'action morale (Kant)." },
      { t: "Principe de raison suffisante", d: "Rien n'est sans raison : tout a une cause ou un fondement (Leibniz)." },
      { t: "« Esclave des passions »", d: "La raison calcule les moyens, mais ce sont les passions qui fixent les fins (Hume)." },
      { t: "Le cœur (Pascal)", d: "Faculté d'intuition des premiers principes, que la raison ne démontre pas." }
    ]
  }

};
