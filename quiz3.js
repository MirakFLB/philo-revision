/* =====================================================================
   Philosophie Terminale — Banque de questions (extension 2)
   Encore plus de QCM / V-F / trous, ancrés sur accroches, pièges,
   distinctions et auteurs transversaux. Ajouté à window.PHILO_QUIZ.
   ===================================================================== */
(function () {
  var Q = window.PHILO_QUIZ; if (!Q) { window.PHILO_QUIZ = Q = {}; }
  function add(id, extra){
    var t = Q[id]; if (!t) { t = Q[id] = { qcm:[], vf:[], trous:[], recall:[] }; }
    ["qcm","vf","trous","recall"].forEach(function(k){ if (extra[k]) t[k] = (t[k]||[]).concat(extra[k]); });
  }

  add("devoir", {
    qcm: [
      { q: "Le possessif dans « faire SON devoir » fait problème car :", o: ["le devoir est collectif", "il suggère que chacun aurait son propre devoir (relativisme)", "c'est une faute de grammaire", "le devoir n'existe pas"], c: 1, e: "« Son » devoir interroge : morale universelle, ou autant de devoirs que d'individus ?" },
      { q: "La « banalité du mal » (Arendt) désigne :", o: ["un mal spectaculaire", "le mal commis sans pensée, par obéissance, par des gens ordinaires", "un mal nécessaire", "l'absence de mal"], c: 1, e: "Eichmann : le mal naît de l'absence de jugement." },
      { q: "Une loi peut être légale sans être :", o: ["écrite", "légitime (juste)", "appliquée", "votée"], c: 1, e: "Légal = conforme à la loi ; légitime = conforme au juste." }
    ],
    vf: [
      { s: "Agir par peur du gendarme, c'est agir par devoir (Kant).", a: false, e: "C'est agir conformément au devoir (par intérêt), non par devoir." },
      { s: "Pour La Boétie, les peuples consentent souvent à leur propre servitude.", a: true, e: "La « servitude volontaire »." }
    ],
    trous: [
      { t: "Arendt analyse le procès Eichmann sous le concept de « _____ du mal ».", a: "banalité", e: "Le mal par absence de pensée." }
    ]
  });

  add("liberte", {
    qcm: [
      { q: "Le Grand Inquisiteur (Dostoïevski) suggère que les hommes :", o: ["veulent la liberté avant tout", "préfèrent souvent la sécurité à la liberté", "sont naturellement libres", "n'ont pas d'âme"], c: 1, e: "La liberté angoisse ; beaucoup y renoncent contre pain et sécurité." },
      { q: "Rousseau distingue liberté naturelle, civile et :", o: ["absolue", "morale", "économique", "divine"], c: 1, e: "Liberté morale = obéir à la loi qu'on s'est prescrite." }
    ],
    vf: [
      { s: "Pour Spinoza, l'homme libre est celui qui ignore ses déterminismes.", a: false, e: "Au contraire : les connaître est le début de la liberté." },
      { s: "Pour Sartre, ne pas choisir est encore un choix.", a: true, e: "« Condamné à être libre » : même l'abstention engage." }
    ],
    trous: [
      { t: "Sartre nomme « _____ foi » le fait de se mentir pour fuir sa liberté.", a: "mauvaise", e: "La mauvaise foi." }
    ]
  });

  add("bonheur", {
    qcm: [
      { q: "Le mythe de Poros et Pénia (Platon) montre que le désir est :", o: ["pure plénitude", "à la fois manque et ressource (vivifiant)", "toujours mauvais", "inexistant"], c: 1, e: "Éros, fils de Ressource et de Pauvreté : manque ET élan." },
      { q: "L'« happycratie » critique :", o: ["le bonheur authentique", "l'injonction sociale au bonheur permanent", "la tristesse", "la philosophie"], c: 1, e: "La tyrannie du « développement personnel » et du bonheur obligatoire." }
    ],
    vf: [
      { s: "Pour Pascal, le divertissement nous détourne de notre condition.", a: true, e: "Il masque l'angoisse et le « gouffre »." },
      { s: "Pour Sénèque, le sage doit être esclave de ses passions.", a: false, e: "L'âme du sage est « inaccessible à la crainte comme au désir »." }
    ],
    trous: [
      { t: "Pour Spinoza, le bonheur suprême est la _____ : amour intellectuel de Dieu.", a: "béatitude", e: "La vertu en découle." }
    ]
  });

  add("justice", {
    qcm: [
      { q: "L'exemple de l'enfant et la flûte (A. Sen) montre que :", o: ["la justice est simple", "plusieurs principes de justice rivalisent légitimement", "le plus fort a raison", "les enfants sont injustes"], c: 1, e: "Mérite, besoin, travail : des logiques de justice concurrentes." },
      { q: "Antigone illustre le conflit entre :", o: ["deux lois positives", "loi non écrite (divine/naturelle) et loi de la cité", "l'amour et la haine", "le roi et le peuple"], c: 1, e: "Antigone oppose les lois non écrites au décret de Créon." },
      { q: "La justice corrective (Aristote) concerne :", o: ["la répartition des honneurs", "les peines et réparations", "les échanges marchands", "le mérite"], c: 1, e: "Réparer un tort, punir." }
    ],
    vf: [
      { s: "« Vérité au-deçà des Pyrénées, erreur au-delà » (Pascal) illustre la relativité des justices humaines.", a: true, e: "Ce qui est juste varie selon les lieux." },
      { s: "Se faire justice soi-même est, en droit, légitime et encouragé.", a: false, e: "La vengeance privée est exclue : l'État détient le monopole de la sanction." }
    ],
    trous: [
      { t: "Rawls nomme « principe de _____ » l'idée que les inégalités doivent profiter aux plus défavorisés.", a: "différence", e: "Le principe de différence." }
    ]
  });

  add("langage", {
    qcm: [
      { q: "La novlangue de 1984 (Orwell) montre que :", o: ["plus de mots = plus de liberté", "réduire le langage réduit la pensée possible", "la langue est neutre", "les mots n'ont aucun effet"], c: 1, e: "Appauvrir le vocabulaire rend la révolte impensable." },
      { q: "Pour Merleau-Ponty, le dialogue est :", o: ["une lutte", "un terrain commun où se constitue un sens partagé", "inutile", "un monologue"], c: 1, e: "Le sens naît entre les interlocuteurs." }
    ],
    vf: [
      { s: "Le lapsus (Freud) révèle un fond inconscient.", a: true, e: "L'acte manqué trahit un désir refoulé." },
      { s: "Pour Hegel, l'ineffable est la pensée la plus haute.", a: false, e: "L'ineffable = la pensée encore confuse ; on pense DANS les mots." }
    ],
    trous: [
      { t: "Heidegger : « le langage est la maison de l'_____ ».", a: "être", e: "Le langage ouvre le rapport au monde." }
    ]
  });

  add("etat", {
    qcm: [
      { q: "Pour Rousseau, la souveraineté appartient :", o: ["au roi", "au peuple via la volonté générale", "aux plus riches", "à Dieu"], c: 1, e: "Contrat social : le peuple est souverain." },
      { q: "Le « monstre froid » (Nietzsche) reproche à l'État de :", o: ["protéger les faibles", "écraser les individualités et mentir", "être trop petit", "être démocratique"], c: 1, e: "« Moi, l'État, je suis le peuple » : il ment." }
    ],
    vf: [
      { s: "Pour les anarchistes, l'ordre social exige nécessairement un État.", a: false, e: "« Ni Dieu ni maître » : l'ordre sans le pouvoir coercitif." }
    ],
    trous: [
      { t: "Hobbes nomme l'état de nature une « guerre de _____ contre tous ».", a: "tous", e: "Guerre de tous contre tous." }
    ]
  });

  add("nature", {
    qcm: [
      { q: "Le biomimétisme consiste à :", o: ["détruire la nature", "s'inspirer des solutions de la nature pour innover", "imiter les animaux pour jouer", "cultiver des plantes"], c: 1, e: "Dépassement nature/culture : la technique s'inspire du vivant." },
      { q: "Pour Hobbes, l'état de nature est :", o: ["un paradis perdu", "une guerre, sans justice", "un fait historique daté", "l'âge d'or"], c: 1, e: "Sans loi : « guerre de tous contre tous »." }
    ],
    vf: [
      { s: "Pour Kant, la nature est l'ensemble des phénomènes soumis à des lois universelles.", a: true, e: "Nature = légalité des phénomènes." }
    ],
    trous: [
      { t: "Spinoza distingue natura naturans (créante) et natura _____ (créée).", a: "naturata", e: "Les deux faces de la substance." }
    ]
  });

  add("conscience", {
    qcm: [
      { q: "Le test du miroir évalue :", o: ["la vue", "la conscience de soi", "la mémoire", "le langage"], c: 1, e: "Se reconnaître dans le miroir = indice de conscience de soi." }
    ],
    vf: [
      { s: "Pour Kant, « le je pense » doit pouvoir accompagner toutes mes représentations.", a: true, e: "Unité de l'aperception." }
    ],
    trous: [
      { t: "Husserl : toute conscience est conscience de _____ chose (intentionnalité).", a: "quelque", e: "Intentionnalité." }
    ]
  });

  add("inconscient", {
    qcm: [
      { q: "L'acte manqué, selon Freud, est :", o: ["un pur hasard", "l'expression déguisée d'un désir inconscient", "une maladie", "un mensonge volontaire"], c: 1, e: "Lapsus, oublis : le refoulé fait retour." }
    ],
    vf: [
      { s: "Pour Alain, donner trop d'importance à l'inconscient est une faute morale.", a: true, e: "L'inconscient « grossi » déresponsabilise." }
    ],
    trous: [
      { t: "Jung élargit l'inconscient individuel par l'inconscient _____ (archétypes).", a: "collectif", e: "Inconscient collectif." }
    ]
  });

  add("temps", {
    qcm: [
      { q: "Proust et la madeleine illustrent :", o: ["le temps des horloges", "la mémoire involontaire qui ressuscite le passé", "l'éternel retour", "l'ennui"], c: 1, e: "Le temps retrouvé par la sensation." }
    ],
    vf: [
      { s: "Pour Bergson, mesurer le temps c'est déjà le spatialiser (le trahir).", a: true, e: "La durée vécue échappe à la mesure." }
    ],
    trous: [
      { t: "Augustin : le présent du passé, c'est la _____.", a: "mémoire", e: "Mémoire / perception / attente." }
    ]
  });

  add("art", {
    qcm: [
      { q: "La Fontaine de Duchamp (un urinoir) pose la question :", o: ["de la beauté classique", "de ce qui fait qu'une chose devient œuvre d'art", "de l'utilité", "de la technique"], c: 1, e: "Le geste et le contexte, plus que l'objet, font l'art." }
    ],
    vf: [
      { s: "Pour Hegel, l'art exprime sensiblement l'Idée (l'esprit).", a: true, e: "Le beau artistique dépasse le beau naturel." }
    ],
    trous: [
      { t: "Klee : « l'art ne reproduit pas le visible, il rend _____ ».", a: "visible", e: "« …il rend visible » (l'invisible)." }
    ]
  });

  add("travail", {
    qcm: [
      { q: "Les Temps modernes (Chaplin) critique :", o: ["le chômage", "la déshumanisation du travail à la chaîne", "les patrons trop gentils", "le repos dominical"], c: 1, e: "Le taylorisme réduit l'ouvrier à un rouage." }
    ],
    vf: [
      { s: "Pour Rousseau, l'oisiveté serait la première inclination de l'homme.", a: true, e: "« Ne rien faire = la première passion de l'homme »." }
    ],
    trous: [
      { t: "Hegel : par le travail, « désir _____ », l'homme se forme.", a: "réfréné", e: "Le travail diffère la satisfaction." }
    ]
  });

  add("technique", {
    qcm: [
      { q: "Le mythe de Prométhée illustre :", o: ["le rejet de la technique", "la technique (le feu volé) qui élève et menace l'homme", "l'agriculture", "la guerre"], c: 1, e: "La technè comme puissance ambivalente." }
    ],
    vf: [
      { s: "Pour Heidegger, « la science ne pense pas ».", a: true, e: "Elle calcule mais n'interroge pas l'être." }
    ],
    trous: [
      { t: "Bergson : l'intelligence sait « faire des _____ à faire des outils ».", a: "outils", e: "Définition de l'homo faber." }
    ]
  });

  add("religion", {
    qcm: [
      { q: "Le pari de Pascal soutient qu'il est rationnel de :", o: ["nier Dieu", "parier sur l'existence de Dieu (gain infini)", "ignorer la question", "prouver Dieu mathématiquement"], c: 1, e: "Calcul des enjeux : tout à gagner à croire." }
    ],
    vf: [
      { s: "Pour Feuerbach, c'est l'homme qui crée Dieu à son image (projection).", a: true, e: "Théologie = anthropologie inversée." }
    ],
    trous: [
      { t: "Religion vient du latin « religare » : _____.", a: "relier", e: "Relier au sacré et entre soi." }
    ]
  });

  add("science", {
    qcm: [
      { q: "Galilée face à l'Inquisition illustre :", o: ["l'accord science/religion", "le conflit entre vérité scientifique et autorité", "la fin de la science", "l'inutilité de l'observation"], c: 1, e: "« Et pourtant elle tourne » : la science contre le dogme." }
    ],
    vf: [
      { s: "Pour Claude Bernard, l'hypothèse doit être soumise à l'expérience.", a: true, e: "Observation → hypothèse → expérience → vérification." }
    ],
    trous: [
      { t: "Bachelard : « les instruments sont des théories _____ ».", a: "matérialisées", e: "La science construit ses faits." }
    ]
  });

  add("verite", {
    qcm: [
      { q: "Pour Descartes, le critère du vrai est :", o: ["l'utilité", "l'évidence (l'idée claire et distincte)", "le vote", "la tradition"], c: 1, e: "Ce qui se présente clairement et distinctement à l'esprit." }
    ],
    vf: [
      { s: "Les « faits alternatifs » illustrent le danger du relativisme sur la vérité.", a: true, e: "Confondre vérité et opinion/intérêt." }
    ],
    trous: [
      { t: "Nietzsche : « les vérités sont des _____ dont on a oublié qu'elles le sont ».", a: "illusions", e: "Perspectivisme." }
    ]
  });

  add("raison", {
    qcm: [
      { q: "« Le sommeil de la raison engendre des monstres » (Goya) avertit que :", o: ["il faut dormir", "l'absence de raison libère les pires égarements", "la raison est dangereuse", "les rêves disent vrai"], c: 1, e: "Sans raison critique : superstition, fanatisme." }
    ],
    vf: [
      { s: "Pour Pascal, le cœur connaît des premiers principes que la raison ne démontre pas.", a: true, e: "« Le cœur a ses raisons… »." }
    ],
    trous: [
      { t: "Kant : « intuitions sans concepts _____, concepts sans intuitions vides ».", a: "aveugles", e: "Union sensibilité / entendement." }
    ]
  });

})();
