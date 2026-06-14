/* =====================================================================
   Philosophie Terminale — Banque de questions (extension 3)
   ---------------------------------------------------------------------
   Ajouté à window.PHILO_QUIZ. Priorité Tier 1 (épreuve du 15 juin).
   Règle anti-triche : distracteurs de LONGUEURS VARIÉES — la bonne
   réponse n'est jamais systématiquement la plus longue, et l'index `c`
   est volontairement réparti (la position est de toute façon mélangée
   au tirage par shuffleQcmItem). Même format que quiz.js.
   ===================================================================== */
(function () {
  var Q = window.PHILO_QUIZ; if (!Q) { window.PHILO_QUIZ = Q = {}; }
  function add(id, extra){
    var t = Q[id]; if (!t) { t = Q[id] = { qcm:[], vf:[], trous:[], recall:[] }; }
    ["qcm","vf","trous","recall"].forEach(function(k){ if (extra[k]) t[k] = (t[k]||[]).concat(extra[k]); });
  }

  /* ===================== DEVOIR ===================== */
  add("devoir", {
    qcm: [
      { q: "Chez Kant, un impératif « hypothétique » se distingue de l'impératif catégorique parce qu'il :", o: ["commande de façon inconditionnée", "ne vaut qu'en vue d'une fin (« si tu veux X, fais Y »)", "interdit", "oblige"], c: 1, e: "Hypothétique = conditionnel à une fin ; catégorique = inconditionnel, vaut pour lui-même." },
      { q: "« Tu dois, donc tu peux » signifie chez Kant que :", o: ["le devoir ne s'impose qu'à ceux qui en ont les moyens matériels", "l'obligation morale suppose la liberté de l'accomplir", "le pouvoir précède toujours le vouloir dans l'action humaine", "personne n'est jamais réellement tenu d'agir moralement"], c: 1, e: "Le devoir présuppose la liberté : je ne suis obligé que parce que je peux choisir d'obéir ou non." }
    ],
    vf: [
      { s: "Un impératif catégorique vaut sans condition.", a: true, e: "Il commande inconditionnellement, contrairement à l'impératif hypothétique." },
      { s: "Pour Kant, agir par intérêt bien compris a une valeur morale pleine.", a: false, e: "Seule l'action accomplie PAR devoir (par respect de la loi) a une valeur morale." }
    ],
    trous: [
      { t: "Kant oppose l'impératif _____ (inconditionnel) à l'impératif hypothétique.", a: "catégorique", e: "Catégorique = sans condition." }
    ]
  });

  /* ===================== LIBERTÉ ===================== */
  add("liberte", {
    qcm: [
      { q: "Pour Spinoza, l'illusion de la liberté vient de ce que les hommes :", o: ["ont été créés libres par Dieu mais l'ont oublié", "sont conscients de leurs désirs mais ignorent les causes qui les déterminent", "refusent obstinément d'obéir aux lois de la cité", "n'ont jamais reçu la moindre éducation morale"], c: 1, e: "Spinoza : « les hommes se croient libres parce qu'ils sont conscients de leurs volitions et ignorants des causes qui les déterminent » (la pierre qui se croirait libre)." },
      { q: "Sartre résume la condition humaine par la formule :", o: ["« L'homme est un loup pour l'homme »", "« L'homme est condamné à être libre »", "« L'homme naît bon, la société le corrompt »", "« L'homme est la mesure de toute chose »"], c: 1, e: "Existentialisme : l'existence précède l'essence, l'homme est « condamné à être libre » et responsable de ce qu'il fait de lui." },
      { q: "Le libre arbitre désigne :", o: ["le pouvoir de la volonté de se déterminer elle-même, sans y être contrainte", "l'absence totale de désirs", "le hasard pur des événements", "la liberté politique garantie par l'État"], c: 0, e: "Libre arbitre = pouvoir de choisir par soi-même entre des possibles ; à distinguer de la liberté politique." },
      { q: "Pour Rousseau, ce qui distingue radicalement l'homme de l'animal, c'est :", o: ["l'instinct", "la liberté (et la perfectibilité), là où la bête est menée par l'instinct", "la force physique", "le langage articulé hérité de la nature"], c: 1, e: "L'animal obéit à l'instinct ; l'homme est un « agent libre » et perfectible — il peut se transformer." },
      { q: "Selon Bergson, l'acte vraiment libre est celui qui :", o: ["obéit à une règle universelle posée par la raison", "exprime le moi profond dans toute sa durée, non un moi de surface", "maximise le plaisir immédiat du sujet", "se conforme aux attentes du groupe social"], c: 1, e: "Pour Bergson, la liberté est rare : c'est l'acte qui émane du moi profond (la durée), pas du moi social superficiel." },
      { q: "« La liberté des uns s'arrête où commence celle des autres » exprime surtout :", o: ["une vérité métaphysique sur le libre arbitre", "une conception juridique et politique de la liberté (limitée par la loi)", "le déterminisme intégral de Spinoza", "l'idée que la liberté n'existe pas"], c: 1, e: "C'est la liberté civile : limitée par le droit pour rendre possible la coexistence des libertés." }
    ],
    vf: [
      { s: "Pour Descartes, le libre arbitre est ce qui nous fait le plus ressembler à Dieu.", a: true, e: "La volonté est infinie ; c'est par elle que « nous portons l'image et la ressemblance de Dieu »." },
      { s: "Être déterminé et être contraint, c'est exactement la même chose.", a: false, e: "La contrainte est extérieure et subie ; le déterminisme peut passer par mes propres désirs (déterminisme ≠ contrainte)." },
      { s: "Pour les stoïciens, la liberté consiste à distinguer ce qui dépend de nous de ce qui n'en dépend pas.", a: true, e: "Épictète : seule notre représentation/jugement dépend de nous ; la liberté est intérieure." }
    ],
    trous: [
      { t: "Sartre : l'homme est « _____ à être libre ».", a: "condamné", e: "Pas d'essence préalable : l'existence précède l'essence." },
      { t: "Pour Spinoza, se croire libre, c'est ignorer les _____ qui nous déterminent.", a: "causes", alt: ["causes."], e: "Conscience des désirs, ignorance des causes." }
    ],
    recall: [
      { q: "Pourquoi, selon Spinoza, croyons-nous être libres ?", a: "Parce que nous sommes conscients de nos désirs mais ignorants des causes qui les déterminent (image de la pierre qui se croirait libre)." }
    ]
  });

  /* ===================== BONHEUR ===================== */
  add("bonheur", {
    qcm: [
      { q: "Pour Aristote, le bonheur (eudaimonia) est :", o: ["un plaisir intense et passager", "le souverain bien : une activité de l'âme conforme à la vertu, sur toute une vie", "l'absence de tout désir", "la richesse matérielle accumulée"], c: 1, e: "Le bonheur est la fin dernière (souverain bien) : activité de l'âme selon la vertu (et la raison), dans une vie accomplie." },
      { q: "Pour Épicure, atteindre l'ataraxie suppose de :", o: ["satisfaire tous ses désirs sans aucune limite", "trier ses désirs (naturels/nécessaires) et écarter les désirs vains", "renoncer à tout plaisir comme à un mal", "rechercher la gloire et les honneurs"], c: 1, e: "L'épicurisme classe les désirs : naturels et nécessaires d'abord ; les désirs vains (gloire, richesse) troublent l'âme." },
      { q: "Pourquoi Kant refuse-t-il de faire du bonheur le fondement de la morale ?", o: ["parce qu'il méprise le bonheur", "parce que le bonheur est un idéal indéterminé de l'imagination, variable selon chacun", "parce que le bonheur est impossible", "parce que seul Dieu peut rendre heureux"], c: 1, e: "Le bonheur est « un idéal de l'imagination », sans contenu universel : on ne peut en tirer une loi morale objective." },
      { q: "Le « divertissement » selon Pascal, c'est :", o: ["un loisir innocent et reposant", "tout ce qui détourne l'homme de penser à sa condition (misère, mort)", "la contemplation philosophique du vrai", "une forme supérieure de bonheur"], c: 1, e: "Le divertissement (du latin divertere, détourner) nous occupe pour ne pas affronter notre condition mortelle." },
      { q: "Pour les stoïciens, le bonheur s'obtient par :", o: ["la maîtrise de ce qui dépend de nous (nos jugements) et l'acceptation du reste", "la conquête de tout ce que l'on désire", "la fuite de la société des hommes", "l'accumulation des plaisirs du corps"], c: 0, e: "Distinguer ce qui dépend de nous (jugement, désir) de ce qui n'en dépend pas (le reste) : c'est la voie de la sérénité." }
    ],
    vf: [
      { s: "Pour Épicure, tous les plaisirs se valent et doivent être recherchés sans distinction.", a: false, e: "Il faut un calcul des plaisirs : certains entraînent de plus grandes douleurs ; viser ataraxie et aponie." },
      { s: "Pour Kant, on peut faire du bonheur le principe universel de la morale.", a: false, e: "Le bonheur est indéterminé et subjectif : il ne peut fonder une loi morale universelle." },
      { s: "Le bonheur, pour Aristote, se juge sur une vie entière, pas sur un instant.", a: true, e: "« Une hirondelle ne fait pas le printemps » : le bonheur engage la durée d'une vie." }
    ],
    trous: [
      { t: "L'état de tranquillité de l'âme visé par Épicure se nomme l'_____.", a: "ataraxie", e: "Absence de trouble de l'âme ; l'aponie = absence de douleur du corps." },
      { t: "Pour Pascal, le _____ détourne l'homme de penser à sa propre misère.", a: "divertissement", e: "Ce qui nous occupe pour fuir notre condition." }
    ]
  });

  /* ===================== JUSTICE ===================== */
  add("justice", {
    qcm: [
      { q: "Distinguer le légal et le légitime, c'est dire qu'une loi peut être :", o: ["conforme au droit en vigueur sans être juste pour autant", "à la fois écrite et appliquée", "votée puis abrogée", "ancienne ou récente"], c: 0, e: "Légal = conforme à la loi positive ; légitime = conforme au juste. Une loi peut être légale et injuste (ex. lois iniques)." },
      { q: "Chez Aristote, la justice distributive consiste à :", o: ["rendre exactement la même chose à chacun", "répartir biens et honneurs selon le mérite (égalité proportionnelle)", "réparer un tort par une peine équivalente", "punir le coupable"], c: 1, e: "Distributive = proportionnelle (selon le mérite) ; commutative = arithmétique (échanges, réparations)." },
      { q: "Le « voile d'ignorance » de Rawls sert à :", o: ["cacher la vérité aux citoyens", "choisir des principes de justice sans connaître la place qu'on occupera dans la société", "supprimer toute inégalité", "justifier l'ordre établi"], c: 1, e: "Dans la position originelle, on ignore sa situation future : on choisit donc des principes équitables pour tous." },
      { q: "Le « principe de différence » de Rawls admet des inégalités à condition qu'elles :", o: ["récompensent les plus talentueux", "bénéficient aussi aux plus défavorisés de la société", "soient acceptées par la majorité", "soient inscrites dans la loi"], c: 1, e: "Les inégalités ne sont justes que si elles profitent aussi aux plus désavantagés (et avec égalité des chances)." },
      { q: "L'équité (epieikeia) chez Aristote, c'est :", o: ["l'application stricte de la loi générale à tous les cas", "la correction de la loi là où sa généralité la rend injuste dans un cas particulier", "le sentiment subjectif de ce qui est juste", "l'égalité parfaite des revenus"], c: 1, e: "La loi est générale ; l'équité corrige son application quand un cas singulier échappe à sa lettre." },
      { q: "Distinguer droit naturel et droit positif revient à opposer :", o: ["des principes valant par nature à des lois effectivement posées par les hommes", "le civil et le pénal", "la coutume et la jurisprudence", "le droit privé et le droit public"], c: 0, e: "Droit naturel = principes universels (présumés) ; droit positif = règles écrites et en vigueur dans un État." }
    ],
    vf: [
      { s: "Une loi légale est toujours légitime.", a: false, e: "Légalité ≠ légitimité : une loi peut être en vigueur et pourtant injuste." },
      { s: "Pour Rawls, toute inégalité est par principe injuste.", a: false, e: "Certaines inégalités sont justes si elles profitent aux plus défavorisés (principe de différence)." },
      { s: "La justice commutative repose sur une égalité arithmétique (rendre l'équivalent).", a: true, e: "Échanges et réparations : on rend l'équivalent, indépendamment du mérite." }
    ],
    trous: [
      { t: "Rawls imagine une « position originelle » sous un _____ d'ignorance.", a: "voile", e: "On ignore sa place future : on choisit des principes équitables." },
      { t: "Une loi peut être _____ (conforme au droit) sans être légitime (juste).", a: "légale", e: "Légalité ≠ légitimité." }
    ]
  });

  /* ===================== LANGAGE ===================== */
  add("langage", {
    qcm: [
      { q: "Saussure distingue la langue de la parole : la langue est :", o: ["l'usage individuel et concret qu'un locuteur fait des mots", "le système de signes partagé, social et conventionnel", "la faculté biologique de parler", "un dialecte régional"], c: 1, e: "Langue = système social (la structure) ; parole = l'acte individuel ; langage = la faculté générale." },
      { q: "Dire que le signe linguistique est « arbitraire » (Saussure), c'est dire que :", o: ["chacun peut changer le sens des mots à sa guise", "le lien entre le signifiant (son) et le signifié (concept) n'est pas motivé par nature", "le langage est inutile", "les mots imitent les choses qu'ils désignent"], c: 1, e: "Aucun lien naturel entre le mot « arbre » et le concept : la convention est arbitraire (mais imposée à la communauté)." },
      { q: "Pour Hegel, vouloir penser sans les mots, ce serait :", o: ["accéder à une pensée plus pure et plus vraie", "une illusion : c'est dans le mot que la pensée trouve son existence déterminée", "le but de toute philosophie", "réservé aux génies"], c: 1, e: "« C'est dans les mots que nous pensons » : la pensée informe et confuse s'objective et s'achève dans le langage." },
      { q: "Un énoncé « performatif » (Austin), c'est un énoncé qui :", o: ["décrit un fait vrai ou faux", "accomplit l'acte qu'il énonce (ex. « je promets », « je déclare »)", "pose une question", "exprime une émotion"], c: 1, e: "Le performatif fait ce qu'il dit : dire « je promets », c'est promettre — ni vrai ni faux, mais réussi ou non." },
      { q: "Pour Bergson, le langage a tendance à :", o: ["restituer fidèlement toutes les nuances de notre vie intérieure", "figer et uniformiser le vécu, trahissant la singularité des états de conscience", "rendre la pensée impossible", "supprimer la communication entre les hommes"], c: 1, e: "Le mot commun « masque » l'impression personnelle : le langage trahit l'intériorité mouvante (la durée)." }
    ],
    vf: [
      { s: "Pour Saussure, le lien entre le mot et la chose est naturel et nécessaire.", a: false, e: "Le signe est arbitraire : aucun lien naturel entre signifiant et signifié." },
      { s: "« Je vous déclare mari et femme » est un énoncé performatif.", a: true, e: "L'énoncé accomplit l'acte (Austin) : il ne décrit pas, il fait." },
      { s: "La langue (Saussure) est un fait social, la parole un acte individuel.", a: true, e: "Langue = système partagé ; parole = réalisation individuelle." }
    ],
    trous: [
      { t: "Pour Saussure, le signe unit un signifiant et un _____.", a: "signifié", e: "Signifiant (image acoustique) + signifié (concept)." },
      { t: "Un énoncé qui accomplit l'acte qu'il énonce est dit _____ (Austin).", a: "performatif", e: "« Je promets », « je déclare »." }
    ]
  });

  /* ===================== ÉTAT (Tier 2) ===================== */
  add("etat", {
    qcm: [
      { q: "Pour sortir de l'état de nature, les hommes concluent selon Hobbes :", o: ["une alliance militaire", "un pacte par lequel ils transfèrent leurs droits à un souverain (le Léviathan)", "un partage des terres", "rien du tout"], c: 1, e: "Le contrat institue un pouvoir commun absolu, seul capable de garantir la paix et la sécurité." },
      { q: "Max Weber définit l'État par :", o: ["le territoire", "le monopole de la violence physique légitime sur un territoire", "la langue commune", "l'élection des dirigeants"], c: 1, e: "L'État revendique avec succès le monopole de la contrainte légitime sur un territoire donné." },
      { q: "Chez Rousseau, la « volonté générale » désigne :", o: ["la somme des intérêts particuliers de chacun", "la volonté du peuple visant l'intérêt commun, source de la loi", "la volonté du prince", "l'opinion majoritaire du moment"], c: 1, e: "Elle vise l'intérêt commun (≠ volonté de tous = somme des intérêts particuliers) ; obéir à la loi qu'on s'est donnée = liberté." },
      { q: "La « servitude volontaire » (La Boétie) souligne que :", o: ["les tyrans sont toujours renversés par la force", "le pouvoir du tyran repose sur le consentement et l'habitude des dominés", "la servitude est inscrite dans la nature humaine", "l'État protège toujours la liberté"], c: 1, e: "Le tyran n'a de pouvoir que celui qu'on lui laisse : retirez votre soutien, il tombe de lui-même." }
    ],
    vf: [
      { s: "Pour Hobbes, c'est la peur de la mort violente qui pousse les hommes à instituer l'État.", a: true, e: "Sortir de la guerre de tous contre tous : on abandonne ses droits à un souverain." },
      { s: "Pour Rousseau, la volonté générale est la simple somme des volontés particulières.", a: false, e: "C'est la volonté de tous ; la volonté générale vise l'intérêt commun." }
    ],
    trous: [
      { t: "Weber : l'État détient le monopole de la _____ physique légitime.", a: "violence", alt: ["contrainte"], e: "Sur un territoire déterminé." }
    ]
  });

  /* ===================== NATURE (Tier 2) ===================== */
  add("nature", {
    qcm: [
      { q: "Pour Lévi-Strauss, le critère qui sépare la nature de la culture est :", o: ["l'usage du feu", "l'universalité (nature) face à la règle, particulière et instituée (culture)", "la taille du cerveau", "la station debout"], c: 1, e: "Ce qui est universel et spontané relève de la nature ; ce qui relève d'une norme/règle relève de la culture." },
      { q: "La prohibition de l'inceste, selon Lévi-Strauss, est remarquable car elle est :", o: ["une simple coutume locale parmi d'autres", "à la fois universelle (comme la nature) et une règle (comme la culture)", "une loi récente de l'État moderne", "un instinct purement biologique"], c: 1, e: "Elle est la « charnière » nature/culture : universelle comme un fait de nature, mais c'est une règle, donc culturelle." },
      { q: "Quand Descartes dit que l'homme doit se rendre « comme maître et possesseur de la nature », il vise :", o: ["la destruction de l'environnement", "une connaissance utile (médecine, technique) pour améliorer la vie humaine", "le retour à l'état sauvage", "la contemplation désintéressée du cosmos"], c: 1, e: "La science cartésienne est pratique : connaître les lois de la nature pour en user (santé surtout)." }
    ],
    vf: [
      { s: "Pour Lévi-Strauss, la prohibition de l'inceste fait la charnière entre nature et culture.", a: true, e: "Universelle (nature) et règle (culture) à la fois." },
      { s: "« Maître et possesseur de la nature » est une formule de Rousseau.", a: false, e: "C'est Descartes (Discours de la méthode, VIe partie)." }
    ],
    trous: [
      { t: "Pour Lévi-Strauss, ce qui est universel relève de la nature, ce qui relève d'une _____ relève de la culture.", a: "règle", alt: ["norme"], e: "Universalité vs règle instituée." }
    ]
  });

})();
