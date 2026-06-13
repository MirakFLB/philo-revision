/* =====================================================================
   Philosophie Terminale — Banque de questions (extension)
   ---------------------------------------------------------------------
   Questions supplémentaires ajoutées à window.PHILO_QUIZ (chargé par
   quiz.js). Étoffe surtout les Tier 2 / Tier 3 (qui étaient légers) et
   complète le Tier 1. Même format que quiz.js.
   ===================================================================== */
(function () {
  var Q = window.PHILO_QUIZ; if (!Q) { window.PHILO_QUIZ = Q = {}; }
  function add(id, extra){
    var t = Q[id]; if (!t) { t = Q[id] = { qcm:[], vf:[], trous:[], recall:[] }; }
    ["qcm","vf","trous","recall"].forEach(function(k){ if (extra[k]) t[k] = (t[k]||[]).concat(extra[k]); });
  }

  /* ===================== TIER 1 ===================== */
  add("devoir", {
    qcm: [
      { q: "La nécessité se distingue du devoir parce qu'elle est :", o: ["un choix moral", "inévitable, qu'on ne peut pas ne pas subir", "une obligation sociale", "une vertu"], c: 1, e: "La nécessité (respirer, vieillir) est inévitable ; le devoir, lui, peut ne pas être accompli." },
      { q: "Pour Kant, la conscience morale est comparée à :", o: ["un maître extérieur", "un tribunal où je suis à la fois juge et jugé", "une simple habitude", "la voix de la foule"], c: 1, e: "Tribunal intérieur : décentrement, je me tiens face à moi-même (le « deux-voir »)." }
    ],
    vf: [
      { s: "Pour Levinas, le visage d'autrui m'oblige avant tout contrat.", a: true, e: "Le visage appelle ma responsabilité : il m'oblige d'emblée." },
      { s: "Pour Bergson, la morale n'a qu'une seule source : la pression sociale.", a: false, e: "Deux sources : la pression sociale (close) ET l'élan d'amour (ouvert)." }
    ],
    trous: [
      { t: "Pour Nietzsche, la morale des faibles oppose le « Tu dois » au « Je _____ ».", a: "veux", e: "« Je veux » de l'homme libre contre « Tu dois »." }
    ]
  });

  add("liberte", {
    qcm: [
      { q: "La liberté d'indifférence (sens faible) désigne :", o: ["le choix éclairé par l'évidence", "l'indétermination : choisir sans raison", "l'autonomie morale", "le déterminisme"], c: 1, e: "Pour Descartes, l'indifférence est le plus bas degré de liberté ; le plus haut suit l'évidence." },
      { q: "Pour les stoïciens (Épictète), être libre, c'est :", o: ["faire tout ce qu'on désire", "n'agir que sur ce qui dépend de nous", "nier le destin", "supprimer la raison"], c: 1, e: "Distinguer ce qui dépend de nous (nos jugements) de ce qui n'en dépend pas → ataraxie." }
    ],
    vf: [
      { s: "Pour Hegel, la liberté se conquiert dans le travail et la lutte pour la reconnaissance.", a: true, e: "La liberté n'est pas donnée : elle se réalise dans l'histoire." },
      { s: "Pour Sartre, l'essence de l'homme précède son existence.", a: false, e: "L'inverse : l'existence précède l'essence ; l'homme se fait par ses actes." }
    ],
    trous: [
      { t: "Pour Kant, la liberté au sens pratique, c'est l'_____ : se donner à soi-même sa loi.", a: "autonomie", e: "Autonomie (autos + nomos) = se donner sa propre loi." }
    ]
  });

  add("bonheur", {
    qcm: [
      { q: "L'eudémonisme vise, contrairement à l'hédonisme :", o: ["le plaisir immédiat", "le bonheur comme fin (et non le seul plaisir)", "la richesse", "la gloire"], c: 1, e: "Eudémonisme = le bonheur comme fin ; hédonisme = le plaisir comme fin." },
      { q: "Pour Rousseau, le pire serait :", o: ["de trop désirer", "de n'avoir plus rien à désirer", "d'être pauvre", "d'être seul"], c: 1, e: "« Malheur à qui n'a plus rien à désirer » : le désir est vivifiant." }
    ],
    vf: [
      { s: "Pour Alain, il existe un « devoir d'être heureux ».", a: true, e: "Le bonheur n'est pas que privé : on le doit aussi aux autres." },
      { s: "Pour Calliclès, il faut maîtriser et réduire ses désirs.", a: false, e: "Calliclès prône l'intempérance : satisfaire tous ses désirs." }
    ],
    trous: [
      { t: "Descartes conseille de changer ses désirs plutôt que l'_____ du monde.", a: "ordre", e: "Morale par provision : agir sur soi plutôt que sur ce qui ne dépend pas de nous." }
    ]
  });

  add("justice", {
    qcm: [
      { q: "Le droit naturel désigne :", o: ["les lois votées par le parlement", "des principes universels antérieurs aux lois posées", "le droit du plus fort", "les coutumes locales"], c: 1, e: "Droit naturel ≠ droit positif (lois effectivement posées par les hommes)." },
      { q: "Le principe de différence de Rawls :", o: ["interdit toute inégalité", "n'autorise les inégalités que si elles profitent aux plus défavorisés", "supprime la propriété", "impose l'égalité stricte"], c: 1, e: "Les inégalités sont justes si elles bénéficient aux plus démunis." }
    ],
    vf: [
      { s: "Pour Pascal, force et justice ont fini par être associées par convention.", a: true, e: "Faute de rendre fort le juste, on a légitimé le fort : « ce qui est fort soit juste »." },
      { s: "Pour Thoreau, on doit toujours obéir à la loi, même injuste.", a: false, e: "Thoreau défend la désobéissance civile au nom de principes supérieurs." }
    ],
    trous: [
      { t: "Aristote distingue la justice commutative de la justice _____ (selon le mérite).", a: "distributive", e: "Distributive : répartition proportionnelle au mérite." }
    ]
  });

  add("langage", {
    qcm: [
      { q: "Pour Wittgenstein, « les limites de mon langage signifient » :", o: ["la fin de la pensée", "les limites de mon monde", "l'échec de la communication", "la vérité absolue"], c: 1, e: "Ce que je ne peux dire borne ce que je peux penser et habiter." },
      { q: "Convaincre et persuader se distinguent ainsi :", o: ["c'est identique", "convaincre s'adresse à la raison, persuader aux passions", "persuader est plus rationnel", "convaincre use de la force"], c: 1, e: "Convaincre = preuves (raison) ; persuader = rhétorique (passions)." }
    ],
    vf: [
      { s: "Pour Bourdieu, le langage est socialement neutre.", a: false, e: "Le langage est un habitus marqué par les rapports de classe." },
      { s: "Pour Ricœur, traduire relève d'une « hospitalité langagière ».", a: true, e: "Accueillir la langue de l'autre : le langage relie malgré la différence." }
    ],
    trous: [
      { t: "Saussure distingue la langue (système) de la _____ (acte individuel concret).", a: "parole", e: "Langage / langue / parole." }
    ]
  });

  /* ===================== TIER 2 ===================== */
  add("etat", {
    qcm: [
      { q: "Pour Spinoza, le but de l'État est :", o: ["la gloire", "la liberté", "la richesse", "la guerre"], c: 1, e: "« Le but de l'État, c'est la liberté »." },
      { q: "Le panoptique, repris par Foucault, illustre :", o: ["la démocratie directe", "une surveillance permanente qui discipline les corps (biopouvoir)", "la séparation des pouvoirs", "l'anarchie"], c: 1, e: "Être vu sans voir : la surveillance intériorisée discipline." },
      { q: "L'État-providence se distingue de l'État minimal par :", o: ["l'absence d'impôt", "une intervention sociale et économique étendue", "le refus de la sécurité", "la monarchie"], c: 1, e: "État-providence : redistribution, protection sociale ; État minimal : fonctions régaliennes seules." }
    ],
    vf: [
      { s: "Pour Hegel, l'État n'est qu'un mal nécessaire.", a: false, e: "Au contraire : l'État est « la réalité de la liberté »." },
      { s: "Pour Marx, l'État est neutre, au-dessus des classes.", a: false, e: "L'État est l'instrument de la classe dominante, voué à dépérir." }
    ],
    trous: [
      { t: "Montesquieu propose la _____ des pouvoirs pour éviter le despotisme.", a: "séparation", alt: ["separation"], e: "Exécutif / législatif / judiciaire." }
    ]
  });

  add("nature", {
    qcm: [
      { q: "« Natura naturans » (Spinoza) désigne :", o: ["la nature créée", "la nature créante (Dieu comme cause)", "la nature morte", "la culture"], c: 1, e: "Natura naturans (créante) vs naturata (créée)." },
      { q: "Pour Lucrèce et Épicure, la nature est faite de :", o: ["formes idéales", "atomes, sans finalité ni dessein", "esprits", "nombres"], c: 1, e: "Matérialisme atomiste : « la nature n'a pas été faite pour nous »." },
      { q: "L'« Umwelt » d'Uexküll est :", o: ["le monde objectif et neutre", "le monde tel qu'il est perçu et vécu par un organisme", "la culture humaine", "l'environnement mesurable"], c: 1, e: "Umwelt (monde perçu) ≠ Umgebung (monde objectif)." }
    ],
    vf: [
      { s: "Pour les stoïciens, il faut vivre selon la nature.", a: true, e: "Accorder sa vie à l'ordre rationnel du cosmos." },
      { s: "Pour Descola, le partage nature/culture est universel à toutes les sociétés.", a: false, e: "« Par-delà nature et culture » : ce dualisme est une particularité occidentale." }
    ],
    trous: [
      { t: "Pour Aristote, « la nature ne fait rien en _____ » (elle est finalisée).", a: "vain", e: "Finalité : tout tend vers une fin." }
    ]
  });

  /* ===================== TIER 3 ===================== */
  add("conscience", {
    qcm: [
      { q: "Le dualisme cartésien distingue :", o: ["le bien et le mal", "l'âme (pensée) et le corps (étendue)", "le vrai et le faux", "l'homme et l'animal"], c: 1, e: "Deux substances : res cogitans / res extensa." },
      { q: "Pour Husserl, l'intentionnalité signifie que la conscience :", o: ["est vide", "est toujours conscience DE quelque chose", "est inconsciente", "est passive"], c: 1, e: "Toute conscience vise un objet." },
      { q: "L'expérience de Libet montre que :", o: ["la décision précède l'activité cérébrale", "l'activité cérébrale précède la décision consciente", "la conscience est toute-puissante", "le libre arbitre est prouvé"], c: 1, e: "Elle relativise la maîtrise de la conscience sur l'action." }
    ],
    vf: [
      { s: "Pour Marx, la conscience détermine la vie matérielle.", a: false, e: "L'inverse : « la vie détermine la conscience »." },
      { s: "Pour Hume, le moi est une substance permanente.", a: false, e: "Le moi = un faisceau de perceptions, un « théâtre »." }
    ],
    trous: [
      { t: "La première certitude de Descartes : « je _____ donc je suis ».", a: "pense", e: "Le cogito." }
    ]
  });

  add("inconscient", {
    qcm: [
      { q: "Le « Ça » freudien désigne :", o: ["la morale intériorisée", "le réservoir des pulsions", "l'arbitre conscient", "la raison"], c: 1, e: "Ça = pulsions ; Surmoi = interdits ; Moi = arbitre." },
      { q: "Pour Leibniz, les « petites perceptions » sont :", o: ["des illusions", "des perceptions infimes et inaperçues qui agissent", "des souvenirs", "des rêves prémonitoires"], c: 1, e: "Préfiguration d'un infra-conscient." },
      { q: "L'objection de Popper à la psychanalyse est qu'elle :", o: ["est trop mathématique", "n'est pas falsifiable (irréfutable)", "est trop récente", "ignore le rêve"], c: 1, e: "Une théorie qui explique tout n'est pas scientifique." }
    ],
    vf: [
      { s: "Pour Sartre, l'inconscient est une réalité psychique indiscutable.", a: false, e: "Sartre y voit « la mauvaise foi personnifiée », une fuite de la liberté." },
      { s: "Pour Jung, il existe un inconscient collectif fait d'archétypes.", a: true, e: "Au-delà de l'inconscient individuel freudien." }
    ],
    trous: [
      { t: "Freud : « Là où était le _____, doit advenir le Moi ».", a: "Ça", alt: ["ca", "ça"], e: "Visée de la cure : étendre la conscience." }
    ]
  });

  add("temps", {
    qcm: [
      { q: "Pour Augustin, le « présent du futur » correspond à :", o: ["la mémoire", "la perception", "l'attente", "l'oubli"], c: 2, e: "Mémoire (passé) / perception (présent) / attente (futur)." },
      { q: "Héraclite illustre le devenir par :", o: ["la caverne", "« on ne se baigne jamais deux fois dans le même fleuve »", "l'anneau de Gygès", "le pendule"], c: 1, e: "Tout coule (panta rhei)." },
      { q: "Hartmut Rosa analyse la modernité par :", o: ["l'éternité", "l'accélération sociale", "le retour au passé", "l'immobilité"], c: 1, e: "Le « paradoxe temporel » de l'accélération." }
    ],
    vf: [
      { s: "Pour Kant, le temps est une réalité extérieure, indépendante du sujet.", a: false, e: "Le temps est une forme a priori de la sensibilité (condition subjective)." },
      { s: "Pour Bergson, la durée est divisible comme l'espace.", a: false, e: "La durée est qualitative et indivisible." }
    ],
    trous: [
      { t: "L'épreuve éthique nietzschéenne du temps est l'éternel _____.", a: "retour", e: "Vouloir revivre sa vie à l'identique." }
    ]
  });

  add("art", {
    qcm: [
      { q: "Pour Hegel, l'art est :", o: ["une simple copie du réel", "l'expression sensible de l'Idée", "un divertissement futile", "une technique utilitaire"], c: 1, e: "L'art donne une forme sensible à l'esprit." },
      { q: "Le génie, selon Kant, est :", o: ["celui qui applique des règles", "le talent par lequel l'art donne ses règles", "un artisan habile", "un savant"], c: 1, e: "Le génie donne la règle à l'art sans la recevoir." },
      { q: "Pour Bacon, l'art est :", o: ["la nature pure", "« l'homme ajouté à la nature »", "une illusion", "une imitation servile"], c: 1, e: "L'art transforme la nature, il y ajoute l'homme." }
    ],
    vf: [
      { s: "Pour Platon, l'art rapproche de la vérité.", a: false, e: "Imitation d'imitation : l'art éloigne du vrai ; le poète est chassé de la cité." },
      { s: "Pour Freud, l'art relève de la sublimation.", a: true, e: "Détournement de l'énergie pulsionnelle vers la création." }
    ],
    trous: [
      { t: "Aristote : la tragédie opère une _____ des passions.", a: "catharsis", e: "Purgation de la pitié et de la crainte." }
    ]
  });

  add("travail", {
    qcm: [
      { q: "Pour Hegel, le travail est « désir » :", o: ["satisfait", "réfréné", "supprimé", "naturel"], c: 1, e: "« Désir réfréné » : le travail diffère la satisfaction et forme l'homme." },
      { q: "Arendt distingue le labeur de l'œuvre : l'œuvre est :", o: ["consommée aussitôt", "durable, elle constitue un monde commun", "sans valeur", "réservée aux esclaves"], c: 1, e: "Labeur (consommé) / œuvre (durable) / action." },
      { q: "Pour Aristote, le travail manuel est :", o: ["la plus haute activité", "indigne de l'homme libre (affaire des esclaves)", "un loisir", "sacré"], c: 1, e: "Le citoyen libre se voue à la politique et à la contemplation." }
    ],
    vf: [
      { s: "Pour Marx, l'aliénation se réduit au bas salaire.", a: false, e: "L'aliénation = l'ouvrier devient étranger à son produit et à lui-même." },
      { s: "Pour Sartre, on peut se libérer en choisissant son travail.", a: true, e: "Le travail peut être libérateur / révolutionnaire." }
    ],
    trous: [
      { t: "Marx : le travail aliéné produit l'ouvrier comme _____.", a: "marchandise", e: "Réification de l'ouvrier." }
    ]
  });

  add("technique", {
    qcm: [
      { q: "Pour Ellul, la technique est devenue :", o: ["un simple outil neutre", "autonome, « juge de la morale »", "inutile", "une branche de l'art"], c: 1, e: "Elle impose sa propre logique d'efficacité." },
      { q: "Le principe responsabilité de Jonas commande de :", o: ["tout faire ce qu'on peut", "agir de sorte que les effets soient compatibles avec une vie humaine future", "abolir la technique", "ignorer les conséquences"], c: 1, e: "Éthique du futur face au pouvoir démesuré de la technique." },
      { q: "Heidegger nomme « arraisonnement » :", o: ["la raison pure", "le fait que la technique somme la nature de se livrer comme « fonds »", "une démonstration", "la liberté"], c: 1, e: "La nature réduite à une réserve disponible (Gestell)." }
    ],
    vf: [
      { s: "Pour Stiegler, la technique n'est qu'un poison.", a: false, e: "Elle est un pharmakon : poison ET remède." },
      { s: "Selon Ellul, la technique est toujours postérieure à la science.", a: false, e: "La technique précède souvent la science et s'en autonomise." }
    ],
    trous: [
      { t: "La technique est, selon Stiegler, un _____ : poison et remède.", a: "pharmakon", e: "Ambivalence de la technique." }
    ]
  });

  add("religion", {
    qcm: [
      { q: "Pour Feuerbach, Dieu est :", o: ["le créateur réel", "une projection idéalisée de l'essence humaine", "une illusion d'optique", "la nature"], c: 1, e: "L'homme projette ses qualités idéalisées en Dieu." },
      { q: "Pour Bergson, la religion dynamique est :", o: ["une institution figée", "un élan, un amour surnaturel", "une superstition", "une morale close"], c: 1, e: "Religion dynamique (ouverte) vs statique (close)." },
      { q: "Aron parle de « religions séculières » pour désigner :", o: ["les Églises", "les totalitarismes", "la laïcité", "la science"], c: 1, e: "Les idéologies totalitaires ont une structure quasi-religieuse." }
    ],
    vf: [
      { s: "Pour Durkheim, la religion est une affaire purement individuelle.", a: false, e: "Elle est « chose éminemment sociale » : fonction de cohésion." },
      { s: "« Religion » (religare) signifie étymologiquement « relier ».", a: true, e: "Relier les hommes entre eux et au sacré." }
    ],
    trous: [
      { t: "Nietzsche proclame que « Dieu est _____ ».", a: "mort", e: "La mort de Dieu = effondrement des valeurs suprêmes." }
    ]
  });

  add("science", {
    qcm: [
      { q: "Pour Comte, le positivisme :", o: ["rejette la science", "fonde la connaissance sur les faits observables et les lois", "est une religion révélée", "nie la raison"], c: 1, e: "Au stade positif, on cherche les lois, non les causes premières." },
      { q: "Le « cygne noir » illustre, chez Popper :", o: ["la vérification définitive", "la réfutabilité : une observation peut réfuter « tous les cygnes sont blancs »", "l'induction infaillible", "le pur hasard"], c: 1, e: "Aucune accumulation de cas ne prouve ; un seul contre-exemple réfute." },
      { q: "Pour Latour, la science est notamment :", o: ["une révélation", "socialement construite au laboratoire", "purement déductive", "infaillible"], c: 1, e: "La fabrique des faits implique pratiques et controverses." }
    ],
    vf: [
      { s: "Pour Bachelard, la science se construit contre les opinions premières.", a: true, e: "L'« obstacle épistémologique » : il faut rompre avec l'évidence." },
      { s: "Le scientisme est l'attitude prudente du vrai savant.", a: false, e: "Le scientisme absolutise la science : c'est une croyance, non la science." }
    ],
    trous: [
      { t: "Rabelais : « science sans _____ n'est que ruine de l'âme ».", a: "conscience", e: "Avertissement éthique sur le savoir." }
    ]
  });

  add("verite", {
    qcm: [
      { q: "Pour Spinoza, le critère du vrai est que :", o: ["le vrai est utile", "le vrai est sa propre norme et celle du faux", "le vrai fait consensus", "le vrai vient de l'autorité"], c: 1, e: "La vérité se reconnaît par elle-même, sans critère extérieur." },
      { q: "Protagoras affirme que :", o: ["la vérité est divine", "« l'homme est la mesure de toute chose »", "seule la science est vraie", "rien n'existe"], c: 1, e: "Relativisme : la vérité dépend de chacun." },
      { q: "Pour Platon, la vérité se trouve dans :", o: ["les opinions", "le monde intelligible (les Idées)", "les sensations", "la rhétorique"], c: 1, e: "Le sensible n'est qu'ombre ; le vrai est intelligible." }
    ],
    vf: [
      { s: "Pour le pragmatisme (James), le vrai se confond avec ce qui réussit.", a: true, e: "Le vrai = ce qui est avantageux pour la pensée." },
      { s: "Vérité et réalité désignent la même chose.", a: false, e: "La vérité qualifie la pensée / le discours ; la réalité, les choses." }
    ],
    trous: [
      { t: "Définition classique : la vérité est l'_____ de la chose et de l'intellect.", a: "adéquation", e: "Adaequatio rei et intellectus (Thomas d'Aquin)." }
    ]
  });

  add("raison", {
    qcm: [
      { q: "Le principe de raison suffisante (Leibniz) énonce que :", o: ["rien n'a de cause", "rien n'est sans raison", "tout est hasard", "la raison est faillible"], c: 1, e: "Tout ce qui est a une raison d'être." },
      { q: "« Intuitions sans concepts aveugles, concepts sans intuitions vides » est de :", o: ["Hume", "Kant", "Pascal", "Hegel"], c: 1, e: "La connaissance suppose l'union sensibilité + entendement." },
      { q: "Pour Poincaré :", o: ["on trouve par la logique", "« on prouve par la logique, on trouve par l'intuition »", "l'intuition est inutile", "la raison suffit à tout"], c: 1, e: "L'invention scientifique mêle intuition et démonstration." }
    ],
    vf: [
      { s: "Pour Hume, c'est la raison qui fixe les fins de l'action.", a: false, e: "La raison calcule les moyens ; les passions fixent les fins (« esclave des passions »)." },
      { s: "Raison et raisonnable, c'est exactement la même chose.", a: false, e: "La raison = faculté ; le raisonnable = mesure pratique / prudentielle." }
    ],
    trous: [
      { t: "Pascal : « le cœur a ses _____ que la raison ne connaît point ».", a: "raisons", e: "Intuition des premiers principes." }
    ]
  });

})();
