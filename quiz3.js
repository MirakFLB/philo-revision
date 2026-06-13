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
      { q: "Le possessif dans « faire SON devoir » fait problème car :", o: ["il rappelle que le devoir est toujours imposé par la collectivité", "il suggère que chacun aurait son propre devoir (relativisme)", "il constitue une faute de grammaire que la morale doit corriger", "il prouve que le devoir n'a aucune réalité hors du langage"], c: 1, e: "« Son » devoir interroge : morale universelle, ou autant de devoirs que d'individus ?" },
      { q: "La « banalité du mal » (Arendt) désigne :", o: ["un mal spectaculaire commis par des monstres exceptionnellement cruels", "le mal commis sans pensée, par obéissance, par des gens ordinaires", "un mal jugé nécessaire au bon fonctionnement de toute société", "l'absence de mal réel derrière les apparences de la cruauté"], c: 1, e: "Eichmann : le mal naît de l'absence de jugement." },
      { q: "Une loi peut être légale sans être :", o: ["rédigée et consignée dans un texte officiel quelconque", "légitime (juste)", "effectivement appliquée par les tribunaux du pays", "régulièrement votée par une assemblée délibérante"], c: 1, e: "Légal = conforme à la loi ; légitime = conforme au juste." }
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
      { q: "Le Grand Inquisiteur (Dostoïevski) suggère que les hommes :", o: ["réclament la liberté avant tout et refusent qu'on la leur ôte", "préfèrent souvent la sécurité à la liberté", "naissent pleinement libres et le restent quoi qu'il arrive", "sont dépourvus d'âme et donc incapables de tout choix"], c: 1, e: "La liberté angoisse ; beaucoup y renoncent contre pain et sécurité." },
      { q: "Rousseau distingue liberté naturelle, civile et :", o: ["absolue, soustraite à toute règle et à toute contrainte", "morale", "économique, fondée sur la propriété des biens produits", "divine, accordée à l'homme par la grâce du créateur"], c: 1, e: "Liberté morale = obéir à la loi qu'on s'est prescrite." }
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
      { q: "Le mythe de Poros et Pénia (Platon) montre que le désir est :", o: ["une pure plénitude qui comble l'âme sans laisser aucun manque", "à la fois manque et ressource (vivifiant)", "toujours mauvais et qu'il faut donc l'éteindre entièrement", "une pure illusion qui n'a aucune réalité dans l'âme humaine"], c: 1, e: "Éros, fils de Ressource et de Pauvreté : manque ET élan." },
      { q: "L'« happycratie » critique :", o: ["le bonheur authentique que chacun construit par sa propre sagesse", "l'injonction sociale au bonheur permanent", "la tristesse vue comme un état toujours nuisible à éliminer", "la philosophie accusée de détourner les hommes du bonheur"], c: 1, e: "La tyrannie du « développement personnel » et du bonheur obligatoire." }
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
      { q: "L'exemple de l'enfant et la flûte (A. Sen) montre que :", o: ["la justice est simple dès qu'on applique une seule règle claire", "plusieurs principes de justice rivalisent légitimement", "c'est toujours le plus fort qui finit par avoir entièrement raison", "les enfants sont par nature incapables d'agir avec justice"], c: 1, e: "Mérite, besoin, travail : des logiques de justice concurrentes." },
      { q: "Antigone illustre le conflit entre :", o: ["deux lois positives également votées par la cité grecque", "loi non écrite (divine/naturelle) et loi de la cité", "l'amour fraternel et la haine que se vouent deux familles", "le roi tout-puissant et le peuple qui réclame ses droits"], c: 1, e: "Antigone oppose les lois non écrites au décret de Créon." },
      { q: "La justice corrective (Aristote) concerne :", o: ["la répartition des honneurs et des charges entre les citoyens", "les peines et réparations", "les échanges marchands réglés par le seul jeu du marché", "le mérite individuel proportionné aux qualités de chacun"], c: 1, e: "Réparer un tort, punir." }
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
      { q: "La novlangue de 1984 (Orwell) montre que :", o: ["enrichir le vocabulaire suffit à garantir la liberté des esprits", "réduire le langage réduit la pensée possible", "la langue reste un outil parfaitement neutre vis-à-vis du pouvoir", "les mots employés n'ont aucun effet réel sur la façon de penser"], c: 1, e: "Appauvrir le vocabulaire rend la révolte impensable." },
      { q: "Pour Merleau-Ponty, le dialogue est :", o: ["une lutte où chacun cherche à imposer son point de vue à l'autre", "un terrain commun où se constitue un sens partagé", "un échange inutile car les esprits restent toujours séparés", "un simple monologue que l'on tient à voix haute devant autrui"], c: 1, e: "Le sens naît entre les interlocuteurs." }
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
      { q: "Pour Rousseau, la souveraineté appartient :", o: ["au roi qui la reçoit en héritage et la transmet à ses fils", "au peuple via la volonté générale", "aux plus riches dont la fortune fonde le droit de gouverner", "à Dieu qui en délègue l'exercice aux princes de la terre"], c: 1, e: "Contrat social : le peuple est souverain." },
      { q: "Le « monstre froid » (Nietzsche) reproche à l'État de :", o: ["protéger les faibles au détriment des forts et des créateurs", "écraser les individualités et mentir", "être trop petit pour assurer la grandeur d'un vrai peuple", "être démocratique et de livrer le pouvoir au grand nombre"], c: 1, e: "« Moi, l'État, je suis le peuple » : il ment." }
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
      { q: "Le biomimétisme consiste à :", o: ["détruire la nature afin de la remplacer par des machines plus fiables", "s'inspirer des solutions de la nature pour innover", "imiter les animaux pour s'amuser sans en tirer aucune technique", "cultiver des plantes selon les méthodes héritées de l'agriculture"], c: 1, e: "Dépassement nature/culture : la technique s'inspire du vivant." },
      { q: "Pour Hobbes, l'état de nature est :", o: ["un paradis perdu où régnaient la paix et l'abondance", "une guerre, sans justice", "un fait historique daté que l'on peut situer précisément", "un âge d'or de concorde que la société aurait fait disparaître"], c: 1, e: "Sans loi : « guerre de tous contre tous »." }
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
      { q: "Le test du miroir évalue :", o: ["l'acuité de la vue et la capacité à distinguer les couleurs", "la conscience de soi", "la mémoire à long terme et le souvenir des visages connus", "la maîtrise du langage et la compréhension des signes"], c: 1, e: "Se reconnaître dans le miroir = indice de conscience de soi." }
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
      { q: "L'acte manqué, selon Freud, est :", o: ["un pur hasard sans aucune signification cachée pour le sujet", "l'expression déguisée d'un désir inconscient", "une maladie nerveuse qu'il faut soigner par des médicaments", "un mensonge volontaire que le sujet adresse sciemment à autrui"], c: 1, e: "Lapsus, oublis : le refoulé fait retour." }
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
      { q: "Proust et la madeleine illustrent :", o: ["le temps des horloges que l'on mesure objectivement en heures", "la mémoire involontaire qui ressuscite le passé", "l'éternel retour de toutes choses tel que Nietzsche le conçoit", "l'ennui qui naît de la répétition monotone des journées vécues"], c: 1, e: "Le temps retrouvé par la sensation." }
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
      { q: "La Fontaine de Duchamp (un urinoir) pose la question :", o: ["de la beauté classique fondée sur les proportions et l'harmonie", "de ce qui fait qu'une chose devient œuvre d'art", "de l'utilité réelle d'un objet manufacturé dans la vie quotidienne", "de la technique et du savoir-faire manuel exigé de l'artisan"], c: 1, e: "Le geste et le contexte, plus que l'objet, font l'art." }
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
      { q: "Les Temps modernes (Chaplin) critique :", o: ["le chômage de masse qui prive les ouvriers de tout revenu", "la déshumanisation du travail à la chaîne", "des patrons trop bienveillants qui ruinent leurs propres usines", "le repos dominical imposé qui interromprait la production"], c: 1, e: "Le taylorisme réduit l'ouvrier à un rouage." }
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
      { q: "Le mythe de Prométhée illustre :", o: ["le rejet de la technique au profit d'un retour à l'état de nature", "la technique (le feu volé) qui élève et menace l'homme", "l'invention de l'agriculture qui fixe les hommes sur la terre", "la guerre entre les hommes que les dieux auraient déclenchée"], c: 1, e: "La technè comme puissance ambivalente." }
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
      { q: "Le pari de Pascal soutient qu'il est rationnel de :", o: ["nier Dieu puisque rien ne prouve solidement son existence", "parier sur l'existence de Dieu (gain infini)", "ignorer la question car elle dépasse les forces de la raison", "prouver Dieu mathématiquement par une démonstration certaine"], c: 1, e: "Calcul des enjeux : tout à gagner à croire." }
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
      { q: "Galilée face à l'Inquisition illustre :", o: ["l'accord harmonieux entre la science et la religion de son temps", "le conflit entre vérité scientifique et autorité", "la fin définitive de toute recherche scientifique en Europe", "l'inutilité de l'observation face aux vérités déjà révélées"], c: 1, e: "« Et pourtant elle tourne » : la science contre le dogme." }
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
      { q: "Pour Descartes, le critère du vrai est :", o: ["l'utilité pratique que l'idée procure dans la conduite de la vie", "l'évidence (l'idée claire et distincte)", "le vote de la majorité qui s'accorde sur une même opinion", "la tradition reçue des Anciens et transmise par les autorités"], c: 1, e: "Ce qui se présente clairement et distinctement à l'esprit." }
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
      { q: "« Le sommeil de la raison engendre des monstres » (Goya) avertit que :", o: ["il faut dormir suffisamment pour que la raison reste lucide", "l'absence de raison libère les pires égarements", "la raison est dangereuse et qu'il vaut mieux la laisser de côté", "les rêves disent vrai et révèlent l'avenir mieux que la raison"], c: 1, e: "Sans raison critique : superstition, fanatisme." }
    ],
    vf: [
      { s: "Pour Pascal, le cœur connaît des premiers principes que la raison ne démontre pas.", a: true, e: "« Le cœur a ses raisons… »." }
    ],
    trous: [
      { t: "Kant : « intuitions sans concepts _____, concepts sans intuitions vides ».", a: "aveugles", e: "Union sensibilité / entendement." }
    ]
  });

})();
