/* =====================================================================
   Philosophie — COURS STRUCTURÉ par notion (intro + I/II/III + à retenir).
   Ajouté à window.PHILO_CONTENT[id].lecon, affiché dans l'onglet « Le cœur ».
   Plan calqué sur le code couleur : I = thèse 🔵, II = antithèse 🔴,
   III = dépassement 🟣 (la logique même de la dissertation).
   ===================================================================== */
(function () {
  var C = window.PHILO_CONTENT; if (!C) return;
  function set(id, lecon){ if (C[id]) C[id].lecon = lecon; }

  set("devoir", {
    intro: "Le devoir, c'est l'obligation morale : ce que je dois faire mais que je PEUX ne pas faire. Il se distingue de la contrainte (subie, sans choix) et de la nécessité (inévitable). Parce qu'il oblige sans contraindre, le devoir suppose et appelle ma liberté. Problème : ce devoir vient-il du dehors (et serait alors une aliénation) ou de moi-même (mais alors qui m'oblige vraiment) ?",
    parties: [
      { t: "I. Le devoir vient de la raison : je peux me l'imposer (🔵)", sub: [
        { t: "A. Agir PAR devoir (Kant)", p: [
          "Kant distingue agir PAR devoir (par pur respect de la loi morale) et agir CONFORMÉMENT au devoir (par intérêt ou inclination) : seule la première conduite a une valeur morale.",
          "L'impératif catégorique commande inconditionnellement : « agis selon une maxime que tu peux vouloir universelle ». C'est un critère, pas un contenu imposé." ] },
        { t: "B. Une exigence rationnelle et universelle", p: [
          "Pour Rousseau, la conscience est un « principe inné de justice » ; pour Aristote, l'homme accède à la vertu par l'habitude (seconde nature).",
          "Le devoir relève de la raison, faculté universelle : il vaut pour tout être raisonnable." ] }
      ]},
      { t: "II. Mais le devoir peut être suspect : imposé, intériorisé (🔴)", sub: [
        { t: "A. Le soupçon (Nietzsche, Freud)", p: [
          "Nietzsche fait la généalogie de la morale : derrière le « Tu dois » se cache la morale des faibles ; il lui oppose le « Je veux » de l'homme libre.",
          "Freud : le sens du devoir vient du Surmoi, intériorisation des interdits — non d'un sens moral inné." ] },
        { t: "B. Le devoir comme pression sociale", p: [
          "Bergson : une part de la morale n'est qu'une pression sociale (instinct de conservation du groupe).",
          "La Boétie parle de « servitude volontaire » : on consent à ce qui nous contraint." ] }
      ]},
      { t: "III. Dépassement : le devoir comme décentrement (🟣)", p: [
        "Le « devoir » peut s'entendre comme un « deux-voir » : l'autonomie véritable n'est pas de s'enfermer en soi, mais de se décentrer.",
        "Kant : la conscience morale est un tribunal intérieur où je suis juge ET jugé. Levinas : c'est le visage d'autrui qui m'oblige, avant tout contrat.",
        "Bergson : il y a deux sources de la morale — la pression sociale (close) ET l'élan d'amour (ouvert)." ]}
    ],
    retenir: [
      "Distinctions : devoir / contrainte / nécessité ; agir PAR devoir / CONFORMÉMENT au devoir ; morale / éthique ; légalité / légitimité.",
      "Citations : « agis par devoir » (Kant) ; « Tu dois » vs « Je veux » (Nietzsche) ; le « bois courbe » (Kant).",
      "Accroches : Javert (Les Misérables) ; la banalité du mal (Arendt, procès Eichmann)."
    ]
  });

  set("liberte", {
    intro: "La liberté est le pouvoir de se déterminer soi-même (libre arbitre), par opposition au déterminisme selon lequel tout effet a une cause. Problème : je me SENS libre, mais cette expérience suffit-elle à PROUVER que je le suis ? Peut-être n'est-elle qu'une illusion.",
    parties: [
      { t: "I. Je peux faire l'expérience de ma liberté (🔵)", sub: [
        { t: "A. La liberté révélée par la conscience (Descartes)", p: [
          "Le doute volontaire montre que je peux refuser mon assentiment, même à l'évidence : ma volonté est indéterminée, « infinie ».",
          "La liberté est à son plus haut degré quand elle suit l'évidence ; l'indifférence (choisir sans raison) en est le plus bas degré." ] },
        { t: "B. La liberté comme projet (Sartre, stoïciens)", p: [
          "Sartre : l'existence précède l'essence, l'homme est « condamné à être libre » ; fuir ce choix, c'est la « mauvaise foi ».",
          "Stoïciens (Épictète) : être libre = n'agir que sur ce qui dépend de nous (nos jugements) → ataraxie." ] }
      ]},
      { t: "II. Mais cette liberté est peut-être illusoire (🔴)", sub: [
        { t: "A. L'illusion du libre arbitre (Spinoza)", p: [
          "La pierre lancée « se croirait libre » si elle était consciente : nous connaissons nos désirs mais ignorons leurs causes.",
          "Se SENTIR libre n'est donc pas ÊTRE libre." ] },
        { t: "B. Les déterminismes (Rousseau, Kant, Marx, Freud)", p: [
          "Rousseau : « l'homme est né libre, et partout il est dans les fers ». Marx (déterminismes sociaux), Freud (l'inconscient).",
          "Kant : la liberté n'est pas un objet d'expérience (tout phénomène est causé) ; c'est une « idée transcendantale » qu'on pense sans la connaître." ] }
      ]},
      { t: "III. La liberté se conquiert dans la limite (🟣)", p: [
        "Paradoxe de Stravinsky : « la force naît par la contrainte et meurt par la liberté » — la règle rend la création libre possible.",
        "Spinoza : connaître ses déterminismes, c'est commencer à être libre. Kant / Levinas : c'est l'expérience de l'obligation (« tu dois », le visage d'autrui) qui me révèle libre.",
        "Être vraiment libre, ce n'est donc pas l'absence de contrainte, mais le rapport lucide à elle." ]}
    ],
    retenir: [
      "Distinctions : libre arbitre / déterminisme ; liberté d'indifférence / éclairée ; sentir libre ≠ être libre.",
      "Citations : « condamné à être libre » (Sartre) ; « né libre, partout dans les fers » (Rousseau) ; la pierre de Spinoza.",
      "Accroches : Matrix (la pilule) ; le Grand Inquisiteur (Dostoïevski) ; l'expérience de Milgram."
    ]
  });

  set("bonheur", {
    intro: "Le bonheur est un état durable de plénitude et de satisfaction. Son étymologie (« bonne heure » = bonne fortune) rappelle qu'il dépend en partie de la chance. Tension centrale : le désir est manque et inquiétude, le bonheur est repos — faut-il alors satisfaire ses désirs, les trier, ou y renoncer ?",
    parties: [
      { t: "I. Le bonheur s'atteint par la maîtrise des désirs (🔵)", sub: [
        { t: "A. L'arithmétique des désirs (Épicure)", p: [
          "Trier : désirs vains (à écarter), naturels non nécessaires, naturels et nécessaires (seuls indispensables) → ataraxie.",
          "Le plaisir visé est l'absence de trouble, non la jouissance débridée." ] },
        { t: "B. La sagesse rationaliste (Descartes, Spinoza, stoïciens)", p: [
          "Descartes : « changer ses désirs plutôt que l'ordre du monde » (agir sur ce qui dépend de nous).",
          "Spinoza : la béatitude (amour intellectuel de Dieu) ; la vertu DÉCOULE de la joie, elle n'en est pas le prix." ] }
      ]},
      { t: "II. Mais le bonheur comme satisfaction est un piège (🔴)", sub: [
        { t: "A. Tout satisfaire ? (Calliclès vs Socrate)", p: [
          "Calliclès : la vie heureuse, c'est l'intempérance, satisfaire tous ses désirs.",
          "Socrate lui oppose le tonneau percé : un désir sans fin n'est jamais comblé." ] },
        { t: "B. Le bonheur impossible (Schopenhauer, Freud)", p: [
          "Schopenhauer : la vie « oscille comme un pendule entre la souffrance (désir non satisfait) et l'ennui (désir satisfait) ».",
          "Freud : « malaise dans la civilisation » — le renoncement pulsionnel est le prix de la vie sociale." ] }
      ]},
      { t: "III. Renoncer à « faire » son bonheur (🟣)", p: [
        "Kant : le bonheur est un « idéal de l'imagination », indéterminé : on ne peut le programmer ; mieux vaut se rendre DIGNE d'être heureux (agir par devoir).",
        "Rousseau : « malheur à qui n'a plus rien à désirer » — l'insatisfaction est vivifiante.",
        "Le bonheur n'est pas l'affaire de l'État (Kant : imposer le bonheur = le pire despotisme)." ]}
    ],
    retenir: [
      "Distinctions : plaisir / bonheur / joie ; eudémonisme / hédonisme ; les 3 désirs d'Épicure.",
      "Citations : pendule souffrance / ennui (Schopenhauer) ; « changer ses désirs… » (Descartes) ; amor fati (Nietzsche).",
      "3 sujets de cours : satisfaire tous ses désirs ? · le bonheur est-il l'affaire de l'État ? · qu'attend-on pour être heureux ?"
    ]
  });

  set("justice", {
    intro: "Est juste (jus = droit) ce qui est conforme au droit et à l'égalité. On distingue le légal (conforme à la loi) du légitime (conforme à ce qui est juste), et le droit positif (lois posées) du droit naturel (principes universels). Problème : existe-t-il une norme objective du juste, ou n'est-il qu'affaire de convention et de rapport de force ?",
    parties: [
      { t: "I. Il existe une norme du juste (🔵)", sub: [
        { t: "A. Une justice fondée en raison ou en nature", p: [
          "Rousseau : une conscience, « principe inné de justice ». Aristote : une loi commune non écrite (Antigone), supérieure aux décrets.",
          "Kant : est juste ce qui peut être universalisé ; la raison fonde le droit." ] },
        { t: "B. Les types de justice (Aristote)", p: [
          "Commutative (égalité dans les échanges) ; distributive (selon le mérite) ; corrective (réparer un tort, punir)." ] }
      ]},
      { t: "II. La justice n'est que convention et intérêt (🔴)", sub: [
        { t: "A. Sans loi, pas de justice (Hobbes, Gygès)", p: [
          "Hobbes : « là où il n'y a pas de loi, il n'y a pas d'injustice ».",
          "L'anneau de Gygès (Glaucon) : devenu invisible, nul ne resterait juste → « nul n'est juste volontairement »." ] },
        { t: "B. Le règne de la force (Pascal)", p: [
          "« Ne pouvant faire que ce qui est juste soit fort, on a fait que ce qui est fort soit juste. »",
          "« Vérité au-deçà des Pyrénées, erreur au-delà » : le juste varie selon les lieux." ] }
      ]},
      { t: "III. Rendre les conventions justes : l'équité (🟣)", p: [
        "Aristote : l'équité corrige la loi trop générale (la « règle de plomb » de Lesbos épouse le cas particulier).",
        "Rawls : derrière le « voile d'ignorance », on choisit des principes équitables, dont le principe de différence (les inégalités doivent profiter aux plus défavorisés).",
        "Montesquieu : la séparation des pouvoirs garantit une justice non arbitraire." ]}
    ],
    retenir: [
      "Distinctions : légal / légitime ; droit positif / naturel ; égalité / équité ; savoir le juste / le sentir.",
      "Citations : « nul n'est juste volontairement » (Gygès) ; « ce qui est fort soit juste » (Pascal) ; « voile d'ignorance » (Rawls).",
      "Accroches : Antigone ; l'anneau de Gygès ; le dilemme du tramway ; la désobéissance civile (Thoreau)."
    ]
  });

  set("langage", {
    intro: "Le langage (logos = à la fois raison et parole) est la faculté de mettre en relation par des signes. On distingue le langage (faculté), la langue (système d'un groupe) et la parole (acte individuel). Problème : le langage n'est-il qu'un outil de communication extérieur à la pensée, ou lui est-il consubstantiel ?",
    parties: [
      { t: "I. Le langage est consubstantiel à la pensée (🔵)", sub: [
        { t: "A. On pense dans les mots (Hegel, Saussure)", p: [
          "Hegel : « c'est dans les mots que nous pensons » ; l'« ineffable » n'est que la pensée encore confuse.",
          "Saussure : sans la langue, la pensée n'est qu'une « masse amorphe »." ] },
        { t: "B. Le propre de l'homme (Benveniste, Descartes)", p: [
          "Le langage humain (créatif, dialogique, ouvert) n'est pas un code fermé comme celui des abeilles (Benveniste).",
          "Pour Descartes, le langage distingue l'homme de l'animal-machine." ] }
      ]},
      { t: "II. Mais le langage est un outil réducteur et social (🔴)", sub: [
        { t: "A. Le mot trahit le singulier (Bergson)", p: [
          "Le « mot-étiquette » ne retient que le général et l'utile ; « la pensée demeure incommensurable avec le langage »." ] },
        { t: "B. Un rapport de pouvoir (Barthes, Bourdieu)", p: [
          "Barthes : « la langue est fasciste » — elle nous oblige à dire selon ses catégories.",
          "Bourdieu : le langage est un habitus, marqué par les rapports de classe." ] }
      ]},
      { t: "III. Le langage nous relie par ses défaillances mêmes (🟣)", p: [
        "Freud : le lapsus, en ratant, dit une vérité (un fond inconscient commun).",
        "Levinas : « parler institue le rapport moral d'égalité ». Ricœur : traduire, c'est une « hospitalité langagière ».",
        "Le langage humain, irréductible à l'IA, vise un sens partagé : c'est par l'échec à tout dire qu'il ouvre au dialogue." ]}
    ],
    retenir: [
      "Distinctions : langage / langue / parole ; signifiant / signifié (arbitraire du signe) ; communiquer ≠ mettre en commun.",
      "Citations : « la langue est fasciste » (Barthes) ; « les limites de mon langage… » (Wittgenstein) ; « mot-étiquette » (Bergson).",
      "Accroches : 1984 / la novlangue ; #MeToo (« libérer la parole »)."
    ]
  });

  set("etat", {
    intro: "L'État (de stare, se tenir) est l'ensemble des institutions centralisées qui détiennent, selon Weber, le « monopole de la violence physique légitime » sur un territoire. Problème : l'État protège-t-il la liberté, ou opprime-t-il les individus ? Sa légalité est-elle toujours légitime ?",
    parties: [
      { t: "I. L'État libère et réalise la liberté (🔵)", p: [
        "Hegel : « l'État est la réalité de la liberté » — il dépasse les intérêts particuliers dans l'universel.",
        "Spinoza : « le but de l'État, c'est la liberté ». Aristote : l'homme, « animal politique », ne se réalise que dans la cité." ]},
      { t: "II. L'État opprime et domine (🔴)", p: [
        "Marx : l'État est l'instrument de la classe dominante, voué à dépérir. Les anarchistes (Proudhon, Bakounine) : « ni Dieu ni maître ».",
        "Nietzsche : l'État est « le plus froid des monstres froids » qui ment. Foucault : panoptique et biopouvoir ; Orwell : Big Brother." ]},
      { t: "III. Le contrat et l'équilibre des pouvoirs (🟣)", p: [
        "Hobbes : sans État, c'est la « guerre de tous contre tous » ; le contrat institue le Léviathan pour garantir la sécurité.",
        "Rousseau : le contrat social fonde la souveraineté du peuple (volonté générale).",
        "Montesquieu : la séparation des pouvoirs (exécutif, législatif, judiciaire) empêche le despotisme." ]}
    ],
    retenir: [
      "Distinctions : État / gouvernement / nation ; légalité / légitimité ; État-providence / État minimal.",
      "Citations : « monopole de la violence physique légitime » (Weber) ; « monstre froid » (Nietzsche) ; « l'homme est un loup pour l'homme » (Hobbes)."
    ]
  });

  set("nature", {
    intro: "La nature désigne ce qui existe sans intervention humaine, ou, chez Spinoza, l'être total (« Deus sive Natura »). Elle s'oppose à la culture. Problème : faut-il s'en rendre « maître et possesseur » (Descartes) ou « vivre selon » elle (stoïciens) ? Est-elle un ordre finalisé, ou une matière sans but ?",
    parties: [
      { t: "I. La nature est un ordre finalisé, voire divin (🔵)", p: [
        "Aristote : « la nature ne fait rien en vain » — tout être tend vers une fin (finalité).",
        "Les stoïciens : « vivre selon la nature » (l'ordre rationnel du cosmos). Spinoza : « Deus sive Natura » (une seule substance infinie)." ]},
      { t: "II. La nature est une matière à dominer (🔴)", p: [
        "Lucrèce / Épicure : la nature n'est qu'atomes, sans dessein (« elle n'a pas été faite pour nous »).",
        "Descartes : par le mécanisme et la science, l'homme se rend « comme maître et possesseur de la nature »." ]},
      { t: "III. Dépasser l'opposition nature / culture (🟣)", p: [
        "Lévi-Strauss : l'universel relève de la nature, la règle de la culture — mais la frontière est mouvante.",
        "Descola : « par-delà nature et culture » (ce dualisme est une particularité occidentale). L'écologie et le biomimétisme réintègrent l'homme dans la nature." ]}
    ],
    retenir: [
      "Distinctions : nature / culture ; état de nature / état civil (fiction théorique, pas un fait) ; natura naturans / naturata.",
      "Citations : « maître et possesseur de la nature » (Descartes) ; « Deus sive Natura » (Spinoza) ; « la nature ne fait rien en vain » (Aristote)."
    ]
  });

  set("conscience", {
    intro: "La conscience est la connaissance que le sujet a de lui-même et du monde. On en distingue trois sens : conscience de soi (identité), conscience morale (juge du bien et du mal), conscience du monde. Problème : la conscience est-elle souveraine, ou n'est-elle qu'une illusion d'un sujet en réalité déterminé ?",
    parties: [
      { t: "I. La conscience fonde le sujet (🔵)", p: [
        "Descartes : même en doutant de tout, « je pense donc je suis » — première certitude ; dualisme de l'âme (pensée) et du corps (étendue).",
        "Kant : « le je pense doit pouvoir accompagner toutes mes représentations ». Husserl : toute conscience est conscience DE quelque chose (intentionnalité)." ]},
      { t: "II. La conscience est seconde et déterminée (🔴)", p: [
        "Marx : « ce n'est pas la conscience qui détermine la vie, mais la vie qui détermine la conscience » (conditions matérielles).",
        "Spinoza : conscients de nos actes, ignorants de leurs causes. Freud : le Moi n'est pas maître. Hume : le « moi » n'est qu'un faisceau de perceptions, un « théâtre »." ]}
    ],
    retenir: [
      "Distinctions : conscience de soi / morale / du monde ; conscient / inconscient.",
      "Citations : « je pense donc je suis » (Descartes) ; expérience de Libet (le cerveau précède la décision « consciente »)."
    ]
  });

  set("inconscient", {
    intro: "L'inconscient désigne, chez Freud, une activité psychique qui échappe à la conscience : des pulsions refoulées qui agissent en nous. La deuxième topique distingue le Ça (pulsions), le Surmoi (interdits intériorisés) et le Moi (arbitre). Problème : l'inconscient est-il une hypothèse scientifique éclairante, ou une excuse qui déresponsabilise l'homme ?",
    parties: [
      { t: "I. L'inconscient existe et nous gouverne (🔴 — défense)", p: [
        "Freud : « le Moi n'est pas maître dans sa propre maison » ; le rêve est la « voie royale » vers l'inconscient ; le lapsus trahit le refoulé.",
        "Leibniz l'annonçait avec les « petites perceptions » ; Jung ajoute un « inconscient collectif » (archétypes)." ]},
      { t: "II. L'inconscient est une illusion dangereuse (🔵 — critique)", p: [
        "Sartre : l'inconscient n'est que « la mauvaise foi personnifiée » — une façon de se mentir et de fuir sa liberté.",
        "Alain : grossir l'inconscient est une faute morale. Popper : irréfutable, la psychanalyse n'est pas scientifique." ]}
    ],
    retenir: [
      "Distinctions : Ça / Moi / Surmoi ; inconscient (actif, refoulé) ≠ non-conscient (simple absence de conscience).",
      "Citations : « le Moi n'est pas maître dans sa propre maison » ; « là où était le Ça, doit advenir le Moi » (Freud)."
    ]
  });

  set("temps", {
    intro: "Le temps peut être objectif (mesurable, celui des horloges et de la physique) ou subjectif (la « durée » vécue, Bergson). Problème : le temps existe-t-il en soi, indépendamment de nous, ou n'est-il qu'une forme de notre esprit ?",
    parties: [
      { t: "I. Le temps est une forme de l'esprit (🔵)", p: [
        "Augustin : il n'existe qu'un présent à trois visages — mémoire (passé), perception (présent), attente (futur).",
        "Kant : le temps est une « forme a priori de la sensibilité », condition subjective de toute expérience. Bergson : la « durée » vécue est qualitative et indivisible." ]},
      { t: "II. Le temps est réel et objectif (🔴)", p: [
        "Héraclite : tout s'écoule, « on ne se baigne jamais deux fois dans le même fleuve ». Galilée le rend mesurable.",
        "Nietzsche : l'« éternel retour » — voudrais-tu revivre ta vie à l'identique une infinité de fois ? (test de l'amor fati)." ]}
    ],
    retenir: [
      "Distinctions : temps objectif (horloges) / durée vécue ; instant / durée.",
      "Citations : la « durée » (Bergson) ; l'éternel retour (Nietzsche) ; carpe diem (Horace)."
    ]
  });

  set("art", {
    intro: "L'art a longtemps été pensé comme imitation (mimésis) de la nature, puis, à l'époque moderne, comme création. Il faut distinguer le beau de l'agréable, et l'art de l'artisanat. Problème : l'art copie-t-il le réel (et nous éloigne du vrai), ou révèle-t-il et crée-t-il quelque chose que la nature ne donne pas ?",
    parties: [
      { t: "I. L'art est imitation (🔵)", p: [
        "Platon s'en méfie : l'œuvre imite le sensible, lui-même copie des Idées — c'est une « imitation d'imitation » ; le poète est chassé de la cité.",
        "Hegel : l'art est l'« expression sensible de l'Idée » — le beau artistique dépasse le beau naturel." ]},
      { t: "II. L'art est création (🔴)", p: [
        "Kant : « le beau plaît universellement sans concept » et sans intérêt ; le génie « donne ses règles à l'art ».",
        "Nietzsche : « nous avons l'art pour ne pas mourir de la vérité ». Klee : « l'art ne reproduit pas le visible, il rend visible »." ]},
      { t: "III. Imiter pour transformer (🟣)", p: [
        "Aristote : la mimésis tragique opère une catharsis (purgation des passions, pitié et crainte). Freud : l'art est sublimation du désir." ]}
    ],
    retenir: [
      "Distinctions : beau / agréable ; art / artisanat ; mimésis / création ; génie / règle.",
      "Citations : « le beau plaît universellement sans concept » (Kant) ; « l'art rend visible » (Klee).",
      "Accroches : la Fontaine de Duchamp (l'urinoir) ; Les Ménines (Vélasquez)."
    ]
  });

  set("travail", {
    intro: "Le travail est l'activité par laquelle l'homme transforme la nature pour subvenir à ses besoins — et, ce faisant, se transforme lui-même. Arendt distingue le labeur (biologique, consommé), l'œuvre (durable) et l'action. Problème : le travail est-il contrainte et aliénation, ou réalisation et liberté ?",
    parties: [
      { t: "I. Le travail forme et libère l'homme (🔵)", p: [
        "Hegel : le travail est « désir réfréné » ; en transformant la nature, l'esclave accède à la conscience de soi — « le travail forme ».",
        "Arendt : l'œuvre constitue un monde commun et durable, au-delà du simple labeur." ]},
      { t: "II. Le travail aliène (🔴)", p: [
        "Marx : le travail salarié « produit l'ouvrier comme marchandise » — il devient étranger à son produit, aux autres et à lui-même (aliénation).",
        "Aristote : le travail manuel, indigne du citoyen libre, est affaire d'esclaves. Rousseau : l'oisiveté serait la première inclination de l'homme." ]},
      { t: "III. Choisir et transformer son travail (🟣)", p: [
        "Sartre : par le projet et le choix, le travail peut devenir libérateur, voire révolutionnaire." ]}
    ],
    retenir: [
      "Distinctions : travail / labeur / œuvre ; aliénation = se perdre dans son produit.",
      "Citations : « le travail produit l'ouvrier comme marchandise » (Marx) ; « le travail forme » (Hegel).",
      "Accroches : Les Temps modernes (Chaplin) ; Germinal (Zola)."
    ]
  });

  set("technique", {
    intro: "La technique (technè) est l'ensemble des procédés efficaces, utiles et transmissibles. Bergson définit l'homme comme « homo faber », fabricant d'outils. Problème : la technique est-elle un simple outil neutre au service de l'homme, ou une puissance devenue autonome qui le menace ?",
    parties: [
      { t: "I. La technique, puissance de maîtrise (🔵)", p: [
        "Bergson : l'intelligence sait « faire des outils à faire des outils » (homo faber, plus encore que sapiens).",
        "Descartes : la science rend l'homme « maître et possesseur de la nature » — la technique libère du besoin." ]},
      { t: "II. La technique, puissance qui échappe à l'homme (🔴)", p: [
        "Ellul : la technique est devenue autonome, « juge de la morale », imposant sa seule logique d'efficacité.",
        "Heidegger : l'« arraisonnement » réduit la nature à un stock disponible ; « la science ne pense pas ». Jonas : un « principe responsabilité » face au pouvoir démesuré." ]},
      { t: "III. La technique est ambivalente (🟣)", p: [
        "Stiegler : la technique est un « pharmakon » — à la fois poison et remède : elle augmente nos pouvoirs et crée de nouvelles dépendances." ]}
    ],
    retenir: [
      "Distinctions : technique / science (la technique la précède, Ellul) ; outil neutre / système autonome.",
      "Citations : « homo faber » (Bergson) ; « pharmakon » (Stiegler) ; « tout ce que nous pourrons, nous le ferons » (Jonas).",
      "Accroches : le mythe de Prométhée ; l'intelligence artificielle."
    ]
  });

  set("religion", {
    intro: "La religion (de religare, relier) est un système de croyances et de rites reliant une communauté à un sacré. On la distingue de la foi (adhésion personnelle) et de la simple croyance. Problème : la religion est-elle une illusion aliénante, ou un lien social et une source de sens ?",
    parties: [
      { t: "I. La religion comme illusion et aliénation (🔴)", p: [
        "Marx : « la religion est l'opium du peuple » — elle console de la misère réelle tout en détournant d'agir pour la transformer.",
        "Feuerbach : Dieu est une projection idéalisée de l'homme. Freud : une illusion, une névrose collective. Nietzsche : « Dieu est mort »." ]},
      { t: "II. La religion comme lien et source de sens (🔵 / 🟣)", p: [
        "Bergson : la religion « dynamique » est un élan d'amour ouvert. Pascal : le « pari » — il est rationnel de croire (l'enjeu est infini).",
        "Durkheim : la religion est une « chose éminemment sociale » : elle exprime et renforce la cohésion du groupe. Aron : les totalitarismes sont des « religions séculières »." ]}
    ],
    retenir: [
      "Distinctions : religion / foi / croyance ; sacré / profane ; critique (illusion) / fonction (lien social).",
      "Citations : « opium du peuple » (Marx) ; « Dieu est mort » (Nietzsche) ; « chose éminemment sociale » (Durkheim)."
    ]
  });

  set("science", {
    intro: "La science est une connaissance objective, systématique et expérimentale du réel. Le scientisme — la science érigée en seule vérité et en quasi-religion — en est le dévoiement. Problème : la science atteint-elle une vérité absolue et définitive, ou est-elle un savoir faillible et construit ?",
    parties: [
      { t: "I. La science atteint le certain (🔵)", p: [
        "Descartes : la science vise une certitude « égale aux démonstrations de l'arithmétique » (méthode, évidence).",
        "Comte : le positivisme — au stade « positif », on cherche les lois, non les causes premières." ]},
      { t: "II. La science est faillible et construite (🔴)", p: [
        "Nietzsche : « sur une croyance métaphysique repose encore notre croyance en la science ». Latour : les faits sont « construits » au laboratoire.",
        "Heidegger : « la science ne pense pas » (elle calcule sans interroger l'être)." ]},
      { t: "III. Ce qui fait la scientificité : l'épistémologie (🟣)", p: [
        "Popper : une théorie est scientifique si elle est falsifiable (réfutable) — le « cygne noir ».",
        "Bachelard : la science se construit CONTRE l'opinion (« obstacle épistémologique »). Claude Bernard : la méthode expérimentale (observation → hypothèse → expérience)." ]}
    ],
    retenir: [
      "Distinctions : science / opinion ; science / scientisme ; expliquer / comprendre.",
      "Citations : critère de falsifiabilité (Popper) ; « science sans conscience n'est que ruine de l'âme » (Rabelais).",
      "Accroches : Galilée et l'Inquisition ; le climat (consensus / doute)."
    ]
  });

  set("verite", {
    intro: "La vérité est classiquement l'adéquation entre la pensée et la chose (Thomas d'Aquin) ; on en propose aussi une définition par la cohérence, ou par l'accord intersubjectif. Problème : la vérité est-elle objective et absolue, ou n'est-elle qu'une perspective, voire une illusion utile ?",
    parties: [
      { t: "I. La vérité est objective et absolue (🔵)", p: [
        "Platon : le vrai est dans le monde intelligible (les Idées), non dans le sensible (les ombres de la caverne).",
        "Descartes : le critère est l'évidence (l'idée claire et distincte). Spinoza : « le vrai est sa propre norme et celle du faux »." ]},
      { t: "II. La vérité est relative ou perspective (🔴)", p: [
        "Protagoras : « l'homme est la mesure de toute chose » (relativisme). Nietzsche : « les vérités sont des illusions dont on a oublié qu'elles le sont » (perspectivisme).",
        "James (pragmatisme) : est vrai ce qui réussit, ce qui est avantageux pour la pensée." ]}
    ],
    retenir: [
      "Distinctions : vérité (de la pensée) ≠ réalité (des choses) ; le vrai ≠ l'utile (contre James).",
      "Citations : « adéquation de la chose et de l'intellect » (Thomas d'Aquin) ; « les vérités sont des illusions… » (Nietzsche).",
      "Accroches : les « faits alternatifs » / fake news ; Matrix."
    ]
  });

  set("raison", {
    intro: "La raison (ratio, logos) est la faculté de penser logiquement et d'atteindre le vrai ; Kant distingue la raison théorique (connaître) de la raison pratique (déterminer l'action morale). Problème : la raison est-elle toute-puissante, capable de tout fonder, ou est-elle limitée et faillible ?",
    parties: [
      { t: "I. La raison saisit le réel (🔵)", p: [
        "Hegel : « ce qui est rationnel est réel, et ce qui est réel est rationnel ». Leibniz : « principe de raison suffisante » — rien n'est sans raison.",
        "Kant : la raison est universelle, mais elle s'égare quand elle quitte l'expérience (illusions de la métaphysique)." ]},
      { t: "II. La raison est limitée et servante (🔴)", p: [
        "Hume : « la raison est, et ne peut être, que l'esclave des passions » — elle calcule les moyens, les passions fixent les fins.",
        "Pascal : « le cœur a ses raisons que la raison ne connaît point » (intuition des premiers principes)." ]},
      { t: "III. Raison et intuition se complètent (🟣)", p: [
        "Poincaré : « on prouve par la logique, on trouve par l'intuition ». Kant : « des intuitions sans concepts sont aveugles, des concepts sans intuitions sont vides »." ]}
    ],
    retenir: [
      "Distinctions : raison / raisonnable ; raison théorique / pratique ; intuition / déduction.",
      "Citations : « ce qui est rationnel est réel » (Hegel) ; « la raison est l'esclave des passions » (Hume) ; « le cœur a ses raisons… » (Pascal).",
      "Accroches : « le sommeil de la raison engendre des monstres » (Goya) ; les théories du complot."
    ]
  });

})();
