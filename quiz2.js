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
      { q: "La nécessité se distingue du devoir parce qu'elle est :", o: ["un choix moral que la volonté décide librement d'accomplir", "inévitable, qu'on ne peut pas ne pas subir", "une obligation sociale imposée du dehors par le groupe", "une vertu acquise par l'habitude et l'exercice répété"], c: 1, e: "La nécessité (respirer, vieillir) est inévitable ; le devoir, lui, peut ne pas être accompli." },
      { q: "Pour Kant, la conscience morale est comparée à :", o: ["un maître extérieur qui dicte du dehors la conduite à tenir", "un tribunal où je suis à la fois juge et jugé", "une simple habitude héritée de l'éducation et des mœurs", "la voix de la foule qui impose l'opinion du plus grand nombre"], c: 1, e: "Tribunal intérieur : décentrement, je me tiens face à moi-même (le « deux-voir »)." }
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
      { q: "La liberté d'indifférence (sens faible) désigne :", o: ["le choix pleinement éclairé que l'évidence du vrai détermine", "l'indétermination : choisir sans raison", "l'autonomie morale par laquelle on se donne sa propre loi", "le déterminisme où tout effet découle d'une cause antérieure"], c: 1, e: "Pour Descartes, l'indifférence est le plus bas degré de liberté ; le plus haut suit l'évidence." },
      { q: "Pour les stoïciens (Épictète), être libre, c'est :", o: ["faire tout ce qu'on désire sans jamais réfréner ses élans", "n'agir que sur ce qui dépend de nous", "nier le destin et l'ordre nécessaire qui régit le cosmos", "supprimer la raison pour se livrer au libre cours des passions"], c: 1, e: "Distinguer ce qui dépend de nous (nos jugements) de ce qui n'en dépend pas → ataraxie." }
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
      { q: "L'eudémonisme vise, contrairement à l'hédonisme :", o: ["le plaisir immédiat des sens recherché pour lui-même seul", "le bonheur comme fin (et non le seul plaisir)", "la richesse matérielle accumulée comme bien suprême de la vie", "la gloire et la reconnaissance que procure l'estime des autres"], c: 1, e: "Eudémonisme = le bonheur comme fin ; hédonisme = le plaisir comme fin." },
      { q: "Pour Rousseau, le pire serait :", o: ["de trop désirer et d'épuiser son âme à courir après tout", "de n'avoir plus rien à désirer", "d'être pauvre et de manquer des biens nécessaires à la vie", "d'être seul et privé du regard bienveillant d'autrui"], c: 1, e: "« Malheur à qui n'a plus rien à désirer » : le désir est vivifiant." }
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
      { q: "Le droit naturel désigne :", o: ["les lois votées par le parlement et inscrites dans les codes", "des principes universels antérieurs aux lois posées", "le droit du plus fort qui impose sa volonté par la puissance", "les coutumes locales transmises par l'usage propre à chaque peuple"], c: 1, e: "Droit naturel ≠ droit positif (lois effectivement posées par les hommes)." },
      { q: "Le principe de différence de Rawls :", o: ["interdit toute inégalité au nom d'une égalité parfaite des biens", "n'autorise les inégalités que si elles profitent aux plus défavorisés", "supprime la propriété privée pour mettre les biens en commun", "impose l'égalité stricte des revenus entre tous les citoyens"], c: 1, e: "Les inégalités sont justes si elles bénéficient aux plus démunis." }
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
      { q: "Pour Wittgenstein, « les limites de mon langage signifient » :", o: ["la fin de la pensée, qui s'arrête là où cessent les mots", "les limites de mon monde", "l'échec de la communication entre des esprits incommunicables", "la vérité absolue que le langage parfait permet d'atteindre"], c: 1, e: "Ce que je ne peux dire borne ce que je peux penser et habiter." },
      { q: "Convaincre et persuader se distinguent ainsi :", o: ["c'est identique, les deux mots désignent le même acte de discours", "convaincre s'adresse à la raison, persuader aux passions", "persuader est plus rationnel, car il repose sur des preuves solides", "convaincre use de la force pour contraindre l'autre à se rendre"], c: 1, e: "Convaincre = preuves (raison) ; persuader = rhétorique (passions)." }
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
      { q: "Pour Spinoza, le but de l'État est :", o: ["la gloire et la puissance que confère la domination des peuples", "la liberté", "la richesse, accumulée par le commerce au profit du souverain", "la guerre, qui maintient la cohésion et la force de la nation"], c: 1, e: "« Le but de l'État, c'est la liberté »." },
      { q: "Le panoptique, repris par Foucault, illustre :", o: ["la démocratie directe où chaque citoyen délibère et décide en personne", "une surveillance permanente qui discipline les corps (biopouvoir)", "la séparation des pouvoirs qui prévient l'abus par l'équilibre", "l'anarchie, c'est-à-dire l'absence de tout pouvoir qui surveille"], c: 1, e: "Être vu sans voir : la surveillance intériorisée discipline." },
      { q: "L'État-providence se distingue de l'État minimal par :", o: ["l'absence totale d'impôt et le retrait de l'État de l'économie", "une intervention sociale et économique étendue", "le refus de la sécurité et l'abandon des fonctions régaliennes", "la monarchie héréditaire concentrant le pouvoir en un seul homme"], c: 1, e: "État-providence : redistribution, protection sociale ; État minimal : fonctions régaliennes seules." }
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
      { q: "« Natura naturans » (Spinoza) désigne :", o: ["la nature créée, l'ensemble des choses produites par la substance", "la nature créante (Dieu comme cause)", "la nature morte, dépouillée de toute puissance et de toute vie", "la culture, ce que l'homme ajoute à la nature par son travail"], c: 1, e: "Natura naturans (créante) vs naturata (créée)." },
      { q: "Pour Lucrèce et Épicure, la nature est faite de :", o: ["formes idéales dont les choses sensibles ne sont que des copies", "atomes, sans finalité ni dessein", "esprits animés qui habitent et meuvent secrètement les choses", "nombres et rapports harmoniques qui ordonnent tout le réel"], c: 1, e: "Matérialisme atomiste : « la nature n'a pas été faite pour nous »." },
      { q: "L'« Umwelt » d'Uexküll est :", o: ["le monde objectif et neutre, identique pour tous les vivants", "le monde tel qu'il est perçu et vécu par un organisme", "la culture humaine, propre à l'homme et transmise par l'éducation", "l'environnement mesurable que la science décrit du dehors"], c: 1, e: "Umwelt (monde perçu) ≠ Umgebung (monde objectif)." }
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
      { q: "Le dualisme cartésien distingue :", o: ["le bien et le mal, les deux pôles entre lesquels la volonté tranche", "l'âme (pensée) et le corps (étendue)", "le vrai et le faux, que l'entendement sépare par le jugement", "l'homme et l'animal, doué de raison face à la pure mécanique"], c: 1, e: "Deux substances : res cogitans / res extensa." },
      { q: "Pour Husserl, l'intentionnalité signifie que la conscience :", o: ["est vide, un pur réceptacle qui attend d'être rempli par le dehors", "est toujours conscience DE quelque chose", "est inconsciente d'elle-même et ignore ses propres opérations", "est passive et se borne à enregistrer les impressions reçues"], c: 1, e: "Toute conscience vise un objet." },
      { q: "L'expérience de Libet montre que :", o: ["la décision consciente précède et déclenche l'activité cérébrale", "l'activité cérébrale précède la décision consciente", "la conscience est toute-puissante et maîtrise entièrement l'action", "le libre arbitre est prouvé par la primauté de la volonté lucide"], c: 1, e: "Elle relativise la maîtrise de la conscience sur l'action." }
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
      { q: "Le « Ça » freudien désigne :", o: ["la morale intériorisée, faite des interdits hérités des parents", "le réservoir des pulsions", "l'arbitre conscient qui négocie entre les exigences opposées", "la raison qui ordonne la vie psychique selon ses principes"], c: 1, e: "Ça = pulsions ; Surmoi = interdits ; Moi = arbitre." },
      { q: "Pour Leibniz, les « petites perceptions » sont :", o: ["des illusions trompeuses que l'esprit doit apprendre à dissiper", "des perceptions infimes et inaperçues qui agissent", "des souvenirs enfouis que la mémoire ramène à la conscience", "des rêves prémonitoires annonçant par signes les choses à venir"], c: 1, e: "Préfiguration d'un infra-conscient." },
      { q: "L'objection de Popper à la psychanalyse est qu'elle :", o: ["est trop mathématique et abstraite pour décrire l'âme humaine", "n'est pas falsifiable (irréfutable)", "est trop récente pour avoir fait l'objet de vérifications sérieuses", "ignore le rêve, qu'elle néglige comme source de connaissance"], c: 1, e: "Une théorie qui explique tout n'est pas scientifique." }
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
      { q: "Pour Augustin, le « présent du futur » correspond à :", o: ["la mémoire, par laquelle le passé reste présent à l'âme qui se souvient", "la perception, par laquelle le présent même est présent à l'esprit", "l'attente", "l'oubli, par lequel ce qui fut s'efface et cesse d'être présent"], c: 2, e: "Mémoire (passé) / perception (présent) / attente (futur)." },
      { q: "Héraclite illustre le devenir par :", o: ["la caverne où les prisonniers ne voient que l'ombre des choses vraies", "« on ne se baigne jamais deux fois dans le même fleuve »", "l'anneau de Gygès qui rend invisible et libère de toute contrainte", "le pendule dont le balancement régulier mesure le cours du temps"], c: 1, e: "Tout coule (panta rhei)." },
      { q: "Hartmut Rosa analyse la modernité par :", o: ["l'éternité, horizon immobile auquel la vie moderne aspire en vain", "l'accélération sociale", "le retour au passé, nostalgie d'un âge d'or que l'on voudrait revivre", "l'immobilité d'un monde figé que plus rien ne vient transformer"], c: 1, e: "Le « paradoxe temporel » de l'accélération." }
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
      { q: "Pour Hegel, l'art est :", o: ["une simple copie du réel qui redouble les apparences sensibles", "l'expression sensible de l'Idée", "un divertissement futile qui détourne l'esprit du sérieux du vrai", "une technique utilitaire au service des besoins de la vie pratique"], c: 1, e: "L'art donne une forme sensible à l'esprit." },
      { q: "Le génie, selon Kant, est :", o: ["celui qui applique des règles déjà fixées avec une parfaite habileté", "le talent par lequel l'art donne ses règles", "un artisan habile qui exécute fidèlement un modèle reçu d'autrui", "un savant qui déduit ses œuvres de principes clairement établis"], c: 1, e: "Le génie donne la règle à l'art sans la recevoir." },
      { q: "Pour Bacon, l'art est :", o: ["la nature pure, qu'il se borne à reproduire sans rien y ajouter", "« l'homme ajouté à la nature »", "une illusion qui nous détourne de la connaissance du vrai", "une imitation servile qui copie le réel sans le transformer"], c: 1, e: "L'art transforme la nature, il y ajoute l'homme." }
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
      { q: "Pour Hegel, le travail est « désir » :", o: ["aussitôt satisfait", "réfréné", "purement supprimé", "simplement naturel"], c: 1, e: "« Désir réfréné » : le travail diffère la satisfaction et forme l'homme." },
      { q: "Arendt distingue le labeur de l'œuvre : l'œuvre est :", o: ["consommée aussitôt, comme le produit qui se détruit dès l'usage", "durable, elle constitue un monde commun", "sans valeur, simple peine qui n'ajoute rien de stable au monde", "réservée aux esclaves, voués aux besoins répétés de la vie"], c: 1, e: "Labeur (consommé) / œuvre (durable) / action." },
      { q: "Pour Aristote, le travail manuel est :", o: ["la plus haute activité, par laquelle l'homme accomplit sa nature", "indigne de l'homme libre (affaire des esclaves)", "un loisir choisi auquel le citoyen libre consacre son temps", "sacré, parce qu'il imite l'œuvre créatrice du principe divin"], c: 1, e: "Le citoyen libre se voue à la politique et à la contemplation." }
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
      { q: "Pour Ellul, la technique est devenue :", o: ["un simple outil neutre que l'usage seul rend bon ou mauvais", "autonome, « juge de la morale »", "inutile, un détour superflu dont l'homme pourrait se passer", "une branche de l'art, soumise aux fins du beau et du sensible"], c: 1, e: "Elle impose sa propre logique d'efficacité." },
      { q: "Le principe responsabilité de Jonas commande de :", o: ["tout faire ce qu'on peut, dès lors que la puissance technique le permet", "agir de sorte que les effets soient compatibles avec une vie humaine future", "abolir la technique et revenir à un état de nature sans machines", "ignorer les conséquences lointaines, hors de notre prévision"], c: 1, e: "Éthique du futur face au pouvoir démesuré de la technique." },
      { q: "Heidegger nomme « arraisonnement » :", o: ["la raison pure qui connaît a priori les structures de l'objet", "le fait que la technique somme la nature de se livrer comme « fonds »", "une démonstration qui conclut nécessairement de prémisses vraies", "la liberté par laquelle l'homme se rend maître de la nature"], c: 1, e: "La nature réduite à une réserve disponible (Gestell)." }
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
      { q: "Pour Feuerbach, Dieu est :", o: ["le créateur réel dont dépend l'existence de toutes choses", "une projection idéalisée de l'essence humaine", "une illusion d'optique née d'une erreur de nos sens trompeurs", "la nature elle-même, identifiée à la totalité de ce qui existe"], c: 1, e: "L'homme projette ses qualités idéalisées en Dieu." },
      { q: "Pour Bergson, la religion dynamique est :", o: ["une institution figée close sur ses dogmes et ses rites établis", "un élan, un amour surnaturel", "une superstition née de la peur que l'ignorance fait naître", "une morale close fondée sur la pression du groupe social"], c: 1, e: "Religion dynamique (ouverte) vs statique (close)." },
      { q: "Aron parle de « religions séculières » pour désigner :", o: ["les Églises traditionnelles", "les totalitarismes", "la laïcité de l'État", "la science moderne"], c: 1, e: "Les idéologies totalitaires ont une structure quasi-religieuse." }
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
      { q: "Pour Comte, le positivisme :", o: ["rejette la science au profit d'un savoir révélé venu d'en haut", "fonde la connaissance sur les faits observables et les lois", "est une religion révélée qui fait reposer le vrai sur la foi", "nie la raison et tient toute connaissance pour impossible"], c: 1, e: "Au stade positif, on cherche les lois, non les causes premières." },
      { q: "Le « cygne noir » illustre, chez Popper :", o: ["la vérification définitive qu'apporte l'accumulation des cas observés", "la réfutabilité : une observation peut réfuter « tous les cygnes sont blancs »", "l'induction infaillible qui conclut du particulier au général certain", "le pur hasard qui prive les lois de la nature de toute régularité"], c: 1, e: "Aucune accumulation de cas ne prouve ; un seul contre-exemple réfute." },
      { q: "Pour Latour, la science est notamment :", o: ["une révélation qui dévoile une vérité inscrite d'avance dans les choses", "socialement construite au laboratoire", "purement déductive, tirée de principes évidents sans aucune expérience", "infaillible, à l'abri de toute erreur et de toute controverse"], c: 1, e: "La fabrique des faits implique pratiques et controverses." }
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
      { q: "Pour Spinoza, le critère du vrai est que :", o: ["le vrai est ce qui réussit et se révèle avantageux pour l'action", "le vrai est sa propre norme et celle du faux", "le vrai est ce sur quoi s'accorde le plus grand nombre des esprits", "le vrai est ce qu'établit l'autorité de la tradition reçue"], c: 1, e: "La vérité se reconnaît par elle-même, sans critère extérieur." },
      { q: "Protagoras affirme que :", o: ["la vérité est divine et descend d'un ordre éternel et immuable", "« l'homme est la mesure de toute chose »", "seule la science démontrée mérite le nom de connaissance vraie", "rien n'existe, et si quelque chose existait nul ne le saurait"], c: 1, e: "Relativisme : la vérité dépend de chacun." },
      { q: "Pour Platon, la vérité se trouve dans :", o: ["les opinions communes que partagent les hommes dans la cité", "le monde intelligible (les Idées)", "les sensations que les choses du dehors impriment en nous", "la rhétorique qui emporte l'adhésion par l'art du discours"], c: 1, e: "Le sensible n'est qu'ombre ; le vrai est intelligible." }
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
      { q: "Le principe de raison suffisante (Leibniz) énonce que :", o: ["rien n'a de cause et que tout advient sans raison qui le fonde", "rien n'est sans raison", "tout est hasard et que rien ne se produit selon un ordre réglé", "la raison est faillible et ne saurait rendre compte de rien"], c: 1, e: "Tout ce qui est a une raison d'être." },
      { q: "« Intuitions sans concepts aveugles, concepts sans intuitions vides » est de :", o: ["Hume", "Kant", "Pascal", "Hegel"], c: 1, e: "La connaissance suppose l'union sensibilité + entendement." },
      { q: "Pour Poincaré :", o: ["on trouve par la seule logique, qui suffit à engendrer les découvertes", "« on prouve par la logique, on trouve par l'intuition »", "l'intuition est inutile et ne joue aucun rôle dans l'invention", "la raison démonstrative suffit à tout sans le secours de l'intuition"], c: 1, e: "L'invention scientifique mêle intuition et démonstration." }
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
