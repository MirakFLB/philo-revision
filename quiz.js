/* =====================================================================
   Philosophie Terminale — Banque de questions
   ---------------------------------------------------------------------
   qcm    : { q, o:[4 options], c:index correct, e:explication }
   vf     : { s:affirmation, a:true|false, e }
   trous  : { t:phrase avec _____, a:réponse, alt:[variantes], e }
   recall : { q:question, a:réponse modèle } — jeu « Récitation » (active
            recall) : l'élève reconstruit la réponse de tête, puis révèle.
   Les associations / cartes sont générées depuis content.js (notions).
   ===================================================================== */

window.PHILO_QUIZ = {

  /* ===================== 1. LE DEVOIR ===================== */
  "devoir": {
    qcm: [
      { q: "Distinguer le devoir de la contrainte, c'est dire que le devoir :", o: ["s'impose à moi sans que je puisse jamais m'y soustraire", "oblige sans contraindre (je peux ne pas le faire)", "résulte d'une force physique à laquelle nul n'échappe", "supprime toute liberté de choix chez celui qui s'y soumet"], c: 1, e: "Le devoir est une obligation : il oblige sans contraindre, donc il en appelle à ma liberté. La contrainte, elle, est subie." },
      { q: "La distinction kantienne décisive en morale oppose :", o: ["le bien tel qu'il est en soi et le mal tel qu'il nous apparaît", "agir PAR devoir et agir CONFORMÉMENT au devoir", "la loi écrite des hommes et la justice idéale de la cité", "le corps soumis aux désirs et l'âme tournée vers la raison"], c: 1, e: "Agir par devoir = par respect de la loi morale ; agir conformément au devoir = par intérêt. Seule la première a une valeur morale." },
      { q: "Pour Freud, le sens du devoir vient :", o: ["d'un sens moral inné gravé en chacun dès la naissance", "du Surmoi, intériorisation des interdits sociaux", "de la raison pure légiférant a priori sur nos actions", "du contrat social passé entre les membres de la cité"], c: 1, e: "Le Surmoi intériorise les normes et interdits : le devoir n'est pas un sens moral inné mais une instance psychique." },
      { q: "En opposant « Je veux » à « Tu dois », Nietzsche veut :", o: ["fonder une morale universelle valable pour tous les hommes", "annuler la négativité de la morale des faibles", "défendre l'impératif catégorique contre toute exception", "prouver l'existence de Dieu comme garant de la loi morale"], c: 1, e: "Nietzsche fait la généalogie de la morale : « l'homme libre est immoral » car il oppose son « Je veux » au « Tu dois » des faibles." },
      { q: "L'impératif catégorique de Kant commande de :", o: ["rechercher en toute chose son propre plaisir bien compris", "universaliser sa maxime", "obéir aux lois de l'État quelles qu'en soient les conséquences", "imiter la conduite vertueuse des hommes que l'on admire"], c: 1, e: "« Agis selon une maxime que tu peux vouloir ériger en loi universelle » : c'est inconditionnel (catégorique)." },
      { q: "Dire que le devoir est un « deux-voir » (III), c'est soutenir que :", o: ["il faut obéir aveuglément à l'ordre reçu sans le questionner", "l'autonomie suppose de se décentrer, face à autre chose que soi", "le devoir n'est qu'une fiction sans aucune réalité véritable", "le devoir procède uniquement des lois posées par l'État"], c: 1, e: "Le dépassement : l'autonomie véritable suppose de se tenir face à soi ET à autre chose que soi (autrui, la loi)." }
    ],
    vf: [
      { s: "Le devoir et la contrainte sont synonymes.", a: false, e: "Non : le devoir oblige sans contraindre ; la contrainte est subie, sans choix." },
      { s: "Agir conformément au devoir suffit à avoir une conduite morale au sens de Kant.", a: false, e: "Non : il faut agir PAR devoir (par respect de la loi), non par simple intérêt." },
      { s: "Pour Kant, l'homme est un « bois courbe » dont on ne peut rien tailler de droit.", a: true, e: "Image kantienne de l'imperfection humaine, malgré l'exigence morale." },
      { s: "La morale et l'éthique désignent exactement la même chose.", a: false, e: "Morale = déterminer des devoirs ; éthique = savoir où est son bien." },
      { s: "Pour Bergson, le devoir tient en partie à la pression sociale.", a: true, e: "La pression sociale relève de l'instinct de conservation ; mais il y a aussi l'élan d'amour (les deux sources)." }
    ],
    trous: [
      { t: "Pour Kant, il faut agir _____ devoir, et non simplement conformément au devoir.", a: "par", e: "Agir PAR devoir = par respect de la loi morale." },
      { t: "Chez Freud, l'instance qui intériorise les interdits s'appelle le _____.", a: "Surmoi", alt: ["surmoi", "sur-moi"], e: "Ça / Moi / Surmoi : le Surmoi est la morale intériorisée." }
    ],
    recall: [
      { q: "Distingue devoir, contrainte et nécessité.", a: "Devoir = obligation, je peux ne pas le faire ; contrainte = subie, pas le choix, force extérieure ; nécessité = inévitable (ex. respirer)." },
      { q: "Quelle distinction kantienne fait toute la différence morale ?", a: "Agir PAR devoir (par respect de la loi) vs CONFORMÉMENT au devoir (par intérêt)." },
      { q: "Pour Freud, d'où vient le sens du devoir ?", a: "Du Surmoi : intériorisation des normes et interdits sociaux — pas d'un sens moral inné." },
      { q: "Que vise Nietzsche en opposant « Je veux » à « Tu dois » ?", a: "Annuler la négativité de la morale des faibles ; « l'homme libre est immoral »." },
      { q: "En quoi le devoir est-il un « deux-voir » (III) ?", a: "L'autonomie suppose de se décentrer, de se tenir face à autre chose que soi-même." }
    ]
  },

  /* ===================== 2. LA LIBERTÉ ===================== */
  "liberte": {
    qcm: [
      { q: "Pourquoi, selon Kant, ne peut-on pas faire l'expérience de la liberté ?", o: ["parce qu'elle n'est qu'une illusion sans aucune réalité véritable", "parce que toute expérience implique la causalité, or la liberté est hors de la chaîne des causes", "parce qu'elle est trop évidente pour qu'on ait besoin de la prouver", "parce que Dieu seul en a la connaissance et nous l'interdit"], c: 1, e: "La liberté = spontanéité, hors causalité : on peut la penser (idée transcendantale), pas la connaître dans l'expérience." },
      { q: "L'image de Spinoza pour l'illusion du libre arbitre est :", o: ["le roseau pensant, faible mais conscient de sa fragilité", "la pierre qui vole en se croyant libre", "la caverne où l'on prend les ombres pour la réalité", "le bateau de Thésée dont on remplace toutes les pièces"], c: 1, e: "La pierre ignore la cause qui l'a lancée : nous sommes conscients de nos désirs, ignorants de leurs causes." },
      { q: "Le paradoxe de Stravinsky sur la liberté créatrice est que :", o: ["la liberté de l'artiste naît de l'absence totale de règles", "c'est la soumission à des contraintes formelles qui rend la liberté possible", "l'art véritable ne se plie à aucune règle ni convention", "toute contrainte imposée finit par tuer la création de l'artiste"], c: 1, e: "« La force naît par la contrainte et meurt par la liberté » : la règle rend la liberté créatrice possible." },
      { q: "Chez Sartre, le « regard » d'autrui :", o: ["me libère totalement de toute responsabilité envers moi-même", "m'aliène, me « chosifie », me fige", "demeure sans le moindre effet sur la conscience que j'ai de moi", "apporte la preuve que toutes mes conduites sont déterminées"], c: 1, e: "Le regard fait de moi un objet : « ma transcendance transcendée »." },
      { q: "« L'homme est né libre, et partout il est dans les fers » est de :", o: ["Sartre", "Rousseau", "Descartes", "Spinoza"], c: 1, e: "Rousseau : la liberté naturelle est partout entravée par les institutions sociales." } // attribution : options = noms d'auteurs, longueur déjà homogène
    ],
    vf: [
      { s: "Être libre, c'est simplement faire ce qu'on veut.", a: false, e: "Non : faire ce qu'on veut peut être l'esclavage des désirs (Spinoza, Rousseau). La liberté est autodétermination." },
      { s: "Pour Spinoza, se sentir libre suffit à être libre.", a: false, e: "Sentir libre ≠ être libre : la pierre se croit libre. Être libre = connaître ses déterminismes." },
      { s: "Pour Descartes, je peux refuser de donner mon assentiment à l'évidence.", a: true, e: "Le pouvoir de douter / refuser révèle l'indétermination (infinie) de ma volonté." },
      { s: "Pour Kant, la liberté est une chose qu'on peut connaître scientifiquement.", a: false, e: "C'est une pure idée transcendantale : on la pense, on ne la connaît pas dans l'expérience." }
    ],
    trous: [
      { t: "Sartre affirme que l'homme est « _____ à être libre ».", a: "condamné", e: "« Condamné à être libre » : pas d'essence préalable, donc pleine responsabilité." },
      { t: "Spinoza compare l'illusion du libre arbitre à une _____ qui se croit libre.", a: "pierre", e: "La pierre lancée ignore la cause de son mouvement." }
    ],
    recall: [
      { q: "Pourquoi, selon Kant, ne peut-on pas faire l'expérience de la liberté ?", a: "Toute expérience implique la causalité ; or la liberté = spontanéité, hors de la chaîne des causes → on peut la penser, pas la connaître." },
      { q: "Quelle image Spinoza donne-t-il de l'illusion du libre arbitre ?", a: "La pierre qui vole en se croyant libre, ignorant la cause qui l'a lancée." },
      { q: "Quel est le paradoxe de Stravinsky ?", a: "C'est la soumission à des contraintes formelles qui rend la liberté créatrice possible." },
      { q: "Chez Sartre, que fait le « regard » d'autrui ?", a: "Il m'aliène, me « chosifie », me fige — « ma transcendance transcendée »." }
    ]
  },

  /* ===================== 3. LE BONHEUR ===================== */
  "bonheur": {
    qcm: [
      { q: "Les trois catégories de désirs chez Épicure sont :", o: ["les désirs bons, les désirs mauvais et les désirs indifférents", "vains ; naturels non nécessaires ; naturels nécessaires", "les désirs du corps, ceux de l'âme et ceux de l'esprit", "les désirs tournés vers le présent, le passé et l'avenir"], c: 1, e: "Seuls les désirs naturels et nécessaires mènent à l'ataraxie ; les désirs vains sont à écarter." },
      { q: "Pourquoi, pour Kant, le bonheur ne peut-il pas être un projet sûr ?", o: ["parce qu'il est par lui-même immoral et contraire au devoir", "parce que c'est un concept indéterminé, un « idéal de l'imagination »", "parce qu'il dépend entièrement des lois et de l'action de l'État", "parce qu'il demeure réservé aux seuls sages qui le méritent"], c: 1, e: "Programmer son bonheur exigerait l'omniscience : le concept est indéterminé." },
      { q: "Thèse de Spinoza sur vertu et bonheur :", o: ["la vertu est la condition préalable que le bonheur vient récompenser", "la vertu n'est pas la condition mais découle du bonheur (de la joie)", "la vertu et le bonheur n'entretiennent entre eux aucun lien réel", "la recherche du bonheur détourne l'homme de la vie vertueuse"], c: 1, e: "On réprime ses penchants PARCE QU'on éprouve déjà la joie (béatitude) : la vertu découle du bonheur." },
      { q: "Pourquoi le bonheur n'est-il pas l'affaire de l'État, selon Kant ?", o: ["le bonheur des citoyens reste totalement indifférent à l'État", "un gouvernement « paternel » imposant le bonheur est le pire despotisme", "la recherche du bonheur est formellement interdite par la loi", "seul le souverain a le droit légitime d'aspirer au bonheur"], c: 1, e: "Chacun cherche son bonheur à sa manière ; l'imposer serait le pire despotisme (paternalisme)." },
      { q: "Pour Schopenhauer, la vie oscille comme un pendule entre :", o: ["le plaisir des sens et la joie sereine de l'esprit", "la souffrance et l'ennui", "l'effort du travail et la douceur méritée du repos", "le bien que l'on poursuit et le mal que l'on subit"], c: 1, e: "Le désir non satisfait = souffrance ; le désir satisfait = ennui. D'où le pessimisme." }
    ],
    vf: [
      { s: "Le bonheur et le plaisir sont la même chose.", a: false, e: "Non : le plaisir est ponctuel ; le bonheur est un état durable de plénitude." },
      { s: "Étymologiquement, le bonheur (« bonne heure ») renvoie à la chance.", a: true, e: "Ce qui questionne l'idée qu'on puisse « faire » son bonheur : il dépend en partie de la fortune." },
      { s: "Pour Descartes, mieux vaut changer ses désirs que l'ordre du monde.", a: true, e: "Morale par provision : agir sur soi plutôt que sur ce qui ne dépend pas de nous." },
      { s: "Pour Épicure, il faut satisfaire tous ses désirs sans distinction.", a: false, e: "Au contraire : une « arithmétique des désirs » sélectionne les naturels et nécessaires." }
    ],
    trous: [
      { t: "Le bonheur selon Épicure et les stoïciens est l'_____, absence de trouble de l'âme.", a: "ataraxie", e: "Ataraxie = tranquillité de l'âme." },
      { t: "Kant définit le bonheur comme un « idéal de l'_____ », donc indéterminé.", a: "imagination", e: "Concept indéterminé : impossible à programmer sûrement." }
    ],
    recall: [
      { q: "Quelles sont les 3 catégories de désirs chez Épicure ?", a: "Vains ; naturels non nécessaires ; naturels nécessaires — seuls ces derniers mènent à l'ataraxie." },
      { q: "Pourquoi, pour Kant, le bonheur ne peut pas être un projet sûr ?", a: "C'est un concept indéterminé, un idéal de l'imagination ; il faudrait l'omniscience pour le programmer." },
      { q: "Quelle est la thèse de Spinoza sur vertu et bonheur ?", a: "La vertu n'est pas la condition du bonheur mais en découle : on réprime ses penchants parce qu'on éprouve déjà la joie." },
      { q: "Pourquoi le bonheur n'est-il pas l'affaire de l'État (Kant) ?", a: "Un gouvernement « paternel » qui impose le bonheur est le pire despotisme ; chacun cherche le sien à sa manière." }
    ]
  },

  /* ===================== 4. LA JUSTICE ===================== */
  "justice": {
    qcm: [
      { q: "Que démontre l'anneau de Gygès (Platon) ?", o: ["que la justice est naturelle et inscrite au cœur de chacun", "que « nul n'est juste volontairement » : on est juste par crainte de la sanction", "que Dieu punit tôt ou tard ceux qui commettent l'injustice", "que la loi des hommes est parfaitement inutile et superflue"], c: 1, e: "Rendu invisible, chacun commettrait l'injustice : on respecte la justice par crainte, non par vertu." },
      { q: "La formule de Pascal sur force et justice est :", o: ["« la force qui n'est pas au service de la justice n'est que tyrannie »", "« ne pouvant faire que ce qui est juste soit fort, on a fait que ce qui est fort soit juste »", "« la force prime toujours le droit là où manque un juge impartial »", "« nul n'est censé ignorer la loi sous laquelle il vit en société »"], c: 1, e: "Pascal : faute de pouvoir rendre fort le juste, on a légitimé le fort — la justice devient convention de force." },
      { q: "Le « voile d'ignorance » de Rawls consiste à :", o: ["faire abstraction des lois en vigueur pour mieux les réformer", "choisir les principes de justice sans connaître sa place sociale", "faire voter les citoyens sans qu'ils connaissent les candidats", "abolir d'un seul coup toute forme d'inégalité entre les hommes"], c: 1, e: "Derrière le voile, on choisit des principes équitables car on pourrait être n'importe qui : justice = équité." },
      { q: "Pour Aristote, l'équité est :", o: ["l'application d'une égalité strictement identique pour tous les cas", "un correctif de la loi trop générale, ajusté au cas (« règle de plomb »)", "une forme d'injustice tolérée par la loi au nom de l'ordre public", "le droit pour chacun de se faire justice par ses propres moyens"], c: 1, e: "La « règle de plomb » de Lesbos épouse les contours du cas : l'équité corrige la généralité de la loi." },
      { q: "Légal et légitime se distinguent ainsi :", o: ["ce sont deux mots strictement équivalents qui disent la même chose", "légal = conforme à la loi ; légitime = conforme à ce qui est juste", "le légal relève de la morale tandis que le légitime relève du droit", "seul ce qui est légitime se trouve inscrit dans les textes de loi"], c: 1, e: "Une loi peut être légale sans être légitime (d'où la désobéissance civile, Thoreau)." }
    ],
    vf: [
      { s: "Pour Hobbes, sans loi il n'y a ni juste ni injuste.", a: true, e: "« Là où il n'y a pas de loi, il n'y a pas d'injustice » : le juste naît du contrat." },
      { s: "Égalité et équité sont strictement identiques.", a: false, e: "L'équité corrige l'égalité abstraite en l'ajustant au cas particulier (Aristote)." },
      { s: "Le droit positif désigne les principes universels antérieurs aux lois.", a: false, e: "C'est le droit naturel. Le droit positif = les lois effectivement posées par les hommes." },
      { s: "Pour Rawls, la justice se définit comme équité.", a: true, e: "« Justice as fairness » : principes choisis sous voile d'ignorance, dont le principe de différence." }
    ],
    trous: [
      { t: "Le mythe de l'anneau de _____ illustre que « nul n'est juste volontairement ».", a: "Gygès", alt: ["gyges"], e: "Anneau de Gygès, rapporté par Glaucon dans La République." },
      { t: "Rawls propose de choisir les principes de justice derrière un « voile d'_____ ».", a: "ignorance", e: "On ignore sa propre place sociale → choix équitable." }
    ],
    recall: [
      { q: "Que démontre l'anneau de Gygès ?", a: "Que « nul n'est juste de son plein gré » : on respecte la justice par crainte de la sanction, pas par vertu." },
      { q: "Quelle est la formule de Pascal sur force et justice ?", a: "« Ne pouvant faire que ce qui est juste soit fort, on a fait que ce qui est fort soit juste. »" },
      { q: "En quoi consiste le « voile d'ignorance » de Rawls ?", a: "Choisir les principes de justice sans connaître sa propre place sociale → accord équitable." },
      { q: "Différence entre égalité et équité (Aristote) ?", a: "L'équité corrige la loi trop générale ; « règle de plomb » qui épouse les contours du cas." }
    ]
  },

  /* ===================== 5. LE LANGAGE ===================== */
  "langage": {
    qcm: [
      { q: "Langage, langue et parole se distinguent ainsi :", o: ["trois mots équivalents désignant une seule et même réalité", "faculté universelle / système d'un groupe / usage individuel concret", "la forme écrite, la forme orale et la forme gestuelle du discours", "la communication propre à l'homme, à l'animal et à la machine"], c: 1, e: "Langage = faculté ; langue = système propre à une communauté ; parole = acte individuel." },
      { q: "Le « mot-étiquette » de Bergson signifie que le mot :", o: ["épouse parfaitement la singularité unique de chaque chose désignée", "ne retient que le général / l'utile et écrase le singulier", "ne possède par lui-même aucun sens en dehors de tout contexte", "est toujours vrai dès lors qu'il est correctement employé"], c: 1, e: "« La pensée demeure incommensurable avec le langage » : le mot fige et généralise." },
      { q: "Pourquoi le « langage » des abeilles n'en est-il pas un (Benveniste) ?", o: ["les abeilles sont muettes et n'émettent aucun signal entre elles", "c'est un code de signaux fermé, sans dialogue ni créativité", "elles sont dépourvues du cerveau nécessaire à toute communication", "il est en réalité bien trop complexe pour mériter ce simple nom"], c: 1, e: "Le langage humain recombine à l'infini et permet le dialogue ; le code animal est fixe." },
      { q: "Thèse forte de Hegel sur langage et pensée :", o: ["la pensée précède toujours les mots qui ne font que la traduire", "on pense DANS les mots ; l'ineffable = la pensée confuse", "le langage trahit la pensée en la déformant dès qu'on l'exprime", "la pensée la plus vraie demeure silencieuse et sans aucun mot"], c: 1, e: "« C'est dans les mots que nous pensons » : ce qu'on ne peut dire n'est qu'une pensée non aboutie." },
      { q: "« La langue est fasciste » est une formule de :", o: ["Saussure", "Barthes", "Hegel", "Platon"], c: 1, e: "Barthes : la langue oblige à dire (elle impose des catégories), elle n'est pas neutre." }
    ],
    vf: [
      { s: "Communiquer, c'est toujours réussir à mettre en commun.", a: false, e: "Non : la communication peut échouer ; c'est parfois par ses défaillances que le langage relie (III)." },
      { s: "Pour Saussure, le lien entre le signifiant et le signifié est arbitraire.", a: true, e: "Aucun lien naturel entre le mot et la chose : le signe est conventionnel." },
      { s: "Le langage humain est un simple code de signaux comme celui des abeilles.", a: false, e: "Le langage humain est créatif, dialogique, ouvert (Benveniste)." },
      { s: "Pour Bergson, le langage épouse parfaitement la singularité de la pensée.", a: false, e: "Au contraire : le « mot-étiquette » écrase le singulier." }
    ],
    trous: [
      { t: "Pour Saussure, le lien entre signifiant et signifié est _____.", a: "arbitraire", e: "Arbitraire du signe : pas de lien naturel mot/chose." },
      { t: "Bergson nomme « mot-_____ » le mot qui ne retient que le général.", a: "étiquette", alt: ["etiquette"], e: "Le mot-étiquette fige et généralise." }
    ],
    recall: [
      { q: "Distingue langage, langue, parole.", a: "Langage = faculté universelle ; langue = système propre à un groupe ; parole = usage individuel concret." },
      { q: "Que veut dire Bergson avec le « mot-étiquette » ?", a: "Le mot ne retient que le général / l'utile et écrase le singulier ; « la pensée demeure incommensurable avec le langage »." },
      { q: "Pourquoi le « langage » des abeilles n'en est pas un (Benveniste) ?", a: "C'est un code de signaux fermé, sans dialogue ni créativité ; le langage humain recombine à l'infini." },
      { q: "Quelle est la thèse forte de Hegel sur langage et pensée ?", a: "On pense DANS les mots ; l'ineffable = la pensée encore confuse, non aboutie." }
    ]
  },

  /* ===================== 6. L'ÉTAT ===================== */
  "etat": {
    qcm: [
      { q: "La définition wébérienne de l'État est :", o: ["la communauté nationale tout entière unie par une même culture", "le monopole de la violence physique légitime sur un territoire", "l'ensemble des citoyens réunis pour exercer la souveraineté", "l'équipe gouvernementale qui détient le pouvoir à un moment donné"], c: 1, e: "Weber : l'État revendique avec succès le monopole de la contrainte physique légitime." },
      { q: "Pourquoi Hobbes justifie-t-il un État fort ?", o: ["pour accroître la richesse et la gloire personnelles du souverain", "pour neutraliser la « guerre de tous contre tous »", "pour abolir la propriété privée et instaurer l'égalité des biens", "parce que Dieu lui-même en a ordonné l'institution aux hommes"], c: 1, e: "L'homme étant « un loup pour l'homme », le contrat institue le Léviathan pour garantir la sécurité." },
      { q: "La position anarchiste soutient que :", o: ["l'État doit être tout-puissant pour garantir l'ordre des hommes", "toute autorité coercitive est illégitime — l'ordre sans le pouvoir", "un monarque héréditaire est nécessaire pour unifier la nation", "l'État est l'institution où la liberté trouve sa pleine réalisation"], c: 1, e: "« Ni Dieu ni maître » : Proudhon, Bakounine refusent toute domination étatique." },
      { q: "« Le plus froid des monstres froids » désigne l'État chez :", o: ["Marx", "Nietzsche", "Hegel", "Spinoza"], c: 1, e: "Nietzsche dénonce l'État qui ment et écrase les individualités." }
    ],
    vf: [
      { s: "État, gouvernement et nation sont synonymes.", a: false, e: "L'État = institutions durables ; le gouvernement = qui exerce le pouvoir ; la nation = communauté humaine." },
      { s: "Pour Hegel, l'État est la réalité de la liberté.", a: true, e: "L'État rationnel réalise la liberté concrète, au-delà des intérêts particuliers." },
      { s: "La légalité garantit toujours la légitimité.", a: false, e: "Une loi peut être légale sans être légitime (régimes injustes)." }
    ],
    trous: [
      { t: "Selon Weber, l'État détient le monopole de la violence physique _____.", a: "légitime", e: "Monopole de la violence physique légitime." },
      { t: "Hobbes nomme l'État souverain le « _____ ».", a: "Léviathan", alt: ["leviathan"], e: "Le Léviathan, monstre biblique." }
    ],
    recall: [
      { q: "Quelle est la définition wébérienne de l'État ?", a: "Le monopole de la violence physique légitime sur un territoire." },
      { q: "Pourquoi Hobbes justifie-t-il un État fort ?", a: "Pour neutraliser la guerre de tous contre tous, l'homme étant un loup pour l'homme." },
      { q: "Quelle est la position anarchiste ?", a: "Toute autorité coercitive est illégitime ; l'ordre sans le pouvoir." }
    ]
  },

  /* ===================== 7. LA NATURE ===================== */
  "nature": {
    qcm: [
      { q: "« Deus sive Natura » (Spinoza) signifie :", o: ["Dieu a librement créé la nature comme une œuvre distincte de lui", "Dieu = la Nature, substance infinie unique", "la nature n'est divine que de façon accidentelle et passagère", "Dieu se tient au-dessus de la nature qu'il gouverne de l'extérieur"], c: 1, e: "Spinoza identifie Dieu et la Nature : une seule substance infinie et éternelle." },
      { q: "L'opposition entre Descartes et les stoïciens porte sur :", o: ["l'existence de Dieu, que les uns affirment et les autres nient", "dominer la nature (Descartes) vs la suivre (stoïciens)", "le rapport de l'âme immatérielle au corps soumis à l'étendue", "la nature du langage, simple convention ou reflet du réel"], c: 1, e: "Descartes : « maître et possesseur » ; stoïciens : « vivre selon la nature »." },
      { q: "L'apport de Descola est de :", o: ["démontrer le caractère divin et sacré de la nature tout entière", "dépasser le dualisme occidental nature / culture", "fonder la conception mécaniste de la nature comme une machine", "défendre la fiction d'un état de nature antérieur à la société"], c: 1, e: "« Par-delà nature et culture » : ce partage n'est pas universel." },
      { q: "Pour Aristote, « la nature ne fait rien en vain » signifie qu'elle est :", o: ["livrée au hasard et au désordre sans aucune règle interne", "finalisée (orientée vers des fins)", "purement matérielle et aveugle, mue par le seul choc des corps", "une simple illusion de nos sens dépourvue de réalité propre"], c: 1, e: "La nature aristotélicienne est ordonnée par des finalités." }
    ],
    vf: [
      { s: "L'état de nature est un fait historique attesté.", a: false, e: "C'est une fiction théorique servant à penser le fondement de l'État." },
      { s: "Pour Descartes, l'homme doit se rendre « maître et possesseur » de la nature.", a: true, e: "Programme du mécanisme et de la science moderne." },
      { s: "Nature et culture s'opposent strictement et universellement.", a: false, e: "Lévi-Strauss et Descola nuancent / dépassent ce dualisme." }
    ],
    trous: [
      { t: "Descartes veut que l'homme devienne « maître et _____ de la nature ».", a: "possesseur", e: "« Maître et possesseur de la nature »." },
      { t: "Spinoza identifie Dieu et la Nature : « Deus sive _____ ».", a: "Natura", alt: ["natura"], e: "Une seule substance infinie." }
    ],
    recall: [
      { q: "Que signifie « Deus sive Natura » ?", a: "Dieu = la Nature, substance infinie unique et éternelle (Spinoza)." },
      { q: "Quelle opposition entre Descartes et les stoïciens ?", a: "Dominer la nature (Descartes : maître et possesseur) vs la suivre (stoïciens : vivre selon la nature)." },
      { q: "Quel est l'apport de Descola ?", a: "Dépasser le dualisme occidental nature / culture (« par-delà nature et culture »)." }
    ]
  },

  /* ===================== 8. LA CONSCIENCE ===================== */
  "conscience": {
    qcm: [
      { q: "Le cogito de Descartes (« je pense donc je suis ») est :", o: ["une hypothèse encore douteuse qu'il faudra ensuite démontrer", "la première certitude indubitable", "une croyance religieuse héritée de la tradition et de la foi", "une illusion que le doute méthodique finit par dissiper"], c: 1, e: "Même en doutant de tout, je ne peux douter que je pense : première vérité." },
      { q: "Pour Marx, le rapport entre conscience et vie est :", o: ["c'est la conscience des hommes qui détermine leurs conditions de vie", "« la vie détermine la conscience »", "la conscience et la vie matérielle évoluent de façon indépendante", "la conscience n'est qu'une apparence dépourvue de toute réalité"], c: 1, e: "Matérialisme : les conditions matérielles d'existence déterminent les représentations." },
      { q: "« Toute conscience est conscience de quelque chose » est la thèse de :", o: ["Hume (le moi comme faisceau de perceptions)", "Husserl (intentionnalité)", "Marx (la vie détermine la conscience)", "Spinoza (une seule substance, Dieu ou la Nature)"], c: 1, e: "L'intentionnalité : la conscience est toujours tournée vers un objet." }
    ],
    vf: [
      { s: "Conscience de soi et conscience morale sont la même chose.", a: false, e: "La conscience de soi (identité) diffère de la conscience morale (juge du bien et du mal)." },
      { s: "Pour Hume, le « moi » est une substance stable et permanente.", a: false, e: "Le moi = un « théâtre », un faisceau de perceptions, sans identité substantielle." },
      { s: "L'expérience de Libet suggère que l'activité cérébrale précède la décision consciente.", a: true, e: "Elle relativise la maîtrise de la conscience sur l'action." }
    ],
    trous: [
      { t: "La première certitude de Descartes est : « je pense donc je _____ ».", a: "suis", e: "Le cogito : ego sum, ego existo." }
    ],
    recall: [
      { q: "Oppose le dualisme de Descartes au monisme de Spinoza.", a: "Descartes : deux substances (âme pensante / corps étendu). Spinoza : une seule substance (Deus sive Natura), pensée et étendue en sont deux attributs." },
      { q: "Pourquoi Hume nie-t-il un « moi » substantiel ?", a: "Parce que l'introspection ne livre qu'un flux de perceptions : le moi est un « théâtre », pas une identité stable." }
    ]
  },

  /* ===================== 9. L'INCONSCIENT ===================== */
  "inconscient": {
    qcm: [
      { q: "Les trois instances de la deuxième topique de Freud sont :", o: ["la raison, la volonté et la mémoire qui structurent l'esprit", "Ça, Moi, Surmoi", "le corps périssable, l'âme immortelle et l'esprit pensant", "le souvenir du passé, la perception présente et l'attente"], c: 1, e: "Ça = pulsions ; Surmoi = interdits intériorisés ; Moi = arbitre conscient sous tension." },
      { q: "Pour Sartre, l'inconscient freudien est :", o: ["une découverte scientifique majeure qui fonde une psychologie rigoureuse", "« la mauvaise foi personnifiée »", "la preuve décisive que toutes nos conduites sont déterminées", "le lieu obscur où survit en nous l'âme immortelle et libre"], c: 1, e: "Sartre refuse l'inconscient : il y voit une fuite de la responsabilité (mauvaise foi)." },
      { q: "Le rêve est, selon Freud :", o: ["une suite d'images sans aucune signification cachée à interpréter", "la « voie royale » vers l'inconscient", "un message prophétique annonçant à l'avance ce qui doit arriver", "le pur produit d'un hasard neuronal sans le moindre sens"], c: 1, e: "Le rêve réalise des désirs refoulés : voie d'accès privilégiée à l'inconscient." }
    ],
    vf: [
      { s: "Pour Freud, « le Moi n'est pas maître dans sa propre maison ».", a: true, e: "La conscience est gouvernée en partie par des forces inconscientes." },
      { s: "L'inconscient se réduit au simple non-conscient (ce qui n'est pas actuellement pensé).", a: false, e: "L'inconscient freudien est actif, fait de pulsions refoulées — pas une simple absence de conscience." },
      { s: "Popper reproche à la psychanalyse de ne pas être réfutable.", a: true, e: "Critère de scientificité : une théorie qui explique tout n'est pas falsifiable." }
    ],
    trous: [
      { t: "Pour Freud, le Moi n'est pas _____ dans sa propre maison.", a: "maître", e: "Décentrement du sujet conscient." }
    ],
    recall: [
      { q: "Quelles sont les 3 instances freudiennes ?", a: "Ça = pulsions ; Surmoi = interdits intériorisés ; Moi = arbitre conscient sous tension." },
      { q: "Quel est le reproche de Sartre à l'inconscient ?", a: "L'inconscient n'est que « la mauvaise foi personnifiée » : une manière de fuir sa liberté et sa responsabilité." }
    ]
  },

  /* ===================== 10. LE TEMPS ===================== */
  "temps": {
    qcm: [
      { q: "La « durée » bergsonienne désigne :", o: ["le temps mesurable et homogène que découpent les horloges", "le temps vécu, qualitatif et indivisible", "l'éternité immobile où tout instant se trouve donné à la fois", "la vitesse à laquelle les événements se succèdent dans le monde"], c: 1, e: "La durée est le temps de la conscience, irréductible au temps mesurable et spatialisé." },
      { q: "Pour Kant, le temps est :", o: ["une réalité objective existant en dehors de nous et de nos esprits", "une forme a priori de la sensibilité (condition subjective)", "une pure illusion sans le moindre rôle dans la connaissance", "une divinité qui ordonne le cours des choses de l'extérieur"], c: 1, e: "Le temps structure a priori toute expérience : il est en nous comme condition de la perception." },
      { q: "L'« éternel retour » de Nietzsche est :", o: ["une simple hypothèse cosmologique sur le cycle infini de l'univers", "un test éthique : voudrais-tu revivre ta vie à l'identique à l'infini ?", "la doctrine de la réincarnation de l'âme dans une vie nouvelle", "un appel à revenir vers Dieu après s'en être longtemps éloigné"], c: 1, e: "Test de l'amor fati : aimer sa vie au point de vouloir la revivre indéfiniment." }
    ],
    vf: [
      { s: "Le temps des horloges et le temps vécu sont identiques.", a: false, e: "Le temps vécu (la durée) se dilate ou se contracte selon l'état de conscience." },
      { s: "Pour Augustin, le présent du passé est la mémoire.", a: true, e: "Présent du passé / présent / futur = mémoire / perception / attente." }
    ],
    trous: [
      { t: "Bergson nomme « _____ » le temps vécu, indivisible et qualitatif.", a: "durée", e: "La durée, opposée au temps spatialisé." }
    ],
    recall: [
      { q: "Qu'est-ce que la « durée » bergsonienne ?", a: "Le temps vécu, qualitatif et indivisible, irréductible au temps des horloges." },
      { q: "En quoi consiste le test de l'éternel retour (Nietzsche) ?", a: "Voudrais-tu revivre ta vie exactement à l'identique une infinité de fois ? Aimer la vie au point de le vouloir = amor fati." }
    ]
  },

  /* ===================== 11. L'ART ===================== */
  "art": {
    qcm: [
      { q: "Pourquoi Platon se méfie-t-il de l'art ?", o: ["il coûte trop cher à la cité qui doit entretenir ses artistes", "c'est une imitation d'imitation, qui éloigne du vrai (les Idées)", "il fait un usage trop rationnel et trop froid de la raison pure", "il glorifie les dieux et détourne ainsi les hommes de la cité"], c: 1, e: "L'art copie le sensible, lui-même copie des Idées : le poète est chassé de la cité." },
      { q: "Le « beau » selon Kant :", o: ["plaît à certains seulement, selon les goûts propres à chacun", "« plaît universellement sans concept » et sans intérêt", "se démontre rigoureusement comme un théorème de géométrie", "se confond avec ce qui est utile et sert à quelque fin"], c: 1, e: "Le jugement de goût est subjectif mais prétend à l'universalité, sans concept." },
      { q: "La catharsis (Aristote) est :", o: ["la copie servile du réel que l'œuvre reproduit fidèlement", "la purgation des passions par la représentation tragique", "l'inspiration divine qui s'empare du poète et le fait créer", "le savoir-faire technique par lequel l'artisan fabrique l'objet"], c: 1, e: "La tragédie purge les passions (pitié et crainte) du spectateur." }
    ],
    vf: [
      { s: "Le beau et l'agréable sont la même chose pour Kant.", a: false, e: "L'agréable est lié à l'intérêt sensible ; le beau plaît sans intérêt ni concept." },
      { s: "Art et artisanat se confondent.", a: false, e: "L'artisanat suit des règles ; l'art (le génie) donne ses propres règles." },
      { s: "Pour Nietzsche, l'art « nous empêche de mourir de la vérité ».", a: true, e: "L'art rend la vie supportable face à une vérité tragique." }
    ],
    trous: [
      { t: "Pour Kant, le beau « plaît universellement sans _____ ».", a: "concept", e: "Jugement de goût sans concept déterminé." }
    ],
    recall: [
      { q: "Pourquoi Platon se méfie-t-il de l'art ?", a: "C'est une imitation d'imitation (copie du sensible, lui-même copie des Idées) : il éloigne du vrai et flatte les passions ; le poète est chassé de la cité." },
      { q: "Qu'est-ce que le « beau sans concept » de Kant ?", a: "Le beau plaît universellement sans passer par un concept ni un intérêt : le jugement de goût est subjectif mais prétend à l'universalité." }
    ]
  },

  /* ===================== 12. LE TRAVAIL ===================== */
  "travail": {
    qcm: [
      { q: "L'aliénation chez Marx désigne :", o: ["la fierté éprouvée par l'ouvrier devant un travail bien accompli", "le fait que l'ouvrier devienne étranger à lui-même et à son produit", "le repos du dimanche durant lequel l'ouvrier se ressource enfin", "la hausse du salaire que l'ouvrier obtient en échange de son labeur"], c: 1, e: "« Le travail produit l'ouvrier comme marchandise » : il se perd dans un produit qui lui échappe." },
      { q: "Pourquoi Hegel dit-il que « le travail forme » ?", o: ["il fatigue le corps et l'endurcit aux épreuves de l'existence", "en transformant la nature, l'homme se transforme et accède à la conscience de soi", "il rapporte de l'argent qui assure à l'homme son indépendance", "il imite l'œuvre des dieux qui ont jadis façonné le monde"], c: 1, e: "Le travail est « désir réfréné » : médiation par laquelle l'homme se cultive et se reconnaît." },
      { q: "Pour Aristote, le travail est :", o: ["la plus noble des activités dont l'homme puisse s'enorgueillir", "contraire à la liberté du citoyen (affaire des esclaves)", "un loisir choisi où l'homme cultive librement son esprit", "une forme d'art par laquelle l'homme exprime son génie propre"], c: 1, e: "Le citoyen libre se consacre à la politique et à la contemplation, non au labeur." }
    ],
    vf: [
      { s: "Pour Marx, le travail tel qu'il est organisé aliène l'ouvrier.", a: true, e: "L'ouvrier devient une marchandise, étranger à son produit et à lui-même." },
      { s: "Travail, labeur et œuvre sont strictement synonymes.", a: false, e: "Arendt distingue le labeur (consommé), l'œuvre (durable) et l'action." }
    ],
    trous: [
      { t: "Selon Marx, le travail produit l'ouvrier comme _____.", a: "marchandise", e: "Aliénation : l'ouvrier devient une chose vendable." }
    ],
    recall: [
      { q: "Qu'est-ce que l'aliénation chez Marx ?", a: "Le processus par lequel l'ouvrier, dans le travail, devient étranger à lui-même et à son produit, réduit à une marchandise." },
      { q: "Pourquoi Hegel dit-il « le travail forme » ?", a: "En transformant la nature (désir réfréné), l'homme se transforme lui-même et accède à la conscience de soi." }
    ]
  },

  /* ===================== 13. LA TECHNIQUE ===================== */
  "technique": {
    qcm: [
      { q: "L'« homo faber » (Bergson) désigne l'homme comme :", o: ["être pensant dont l'essence se ramène au pur exercice du savoir", "fabricant d'outils (et d'outils à faire des outils)", "animal politique qui ne s'accomplit qu'au sein de la cité", "être religieux tourné vers le sacré et la quête du divin"], c: 1, e: "L'intelligence se définit par la fabrication d'outils, plus que par le savoir (« sapiens »)." },
      { q: "La technique est un « pharmakon » (Stiegler) car elle est :", o: ["uniquement bénéfique et profitable au progrès de l'humanité", "à la fois poison ET remède", "parfaitement neutre, ni bonne ni mauvaise en elle-même", "tout à fait naturelle, simple prolongement de nos organes"], c: 1, e: "Ambivalence : la technique soigne et menace à la fois." },
      { q: "Pour Ellul, le rapport technique / science est que :", o: ["la science précède toujours la technique, qui n'en est que l'application", "la technique précède souvent la science et devient autonome", "la technique et la science se confondent en une seule et même activité", "la technique est inutile dès lors qu'on dispose d'un vrai savoir"], c: 1, e: "La technique n'est pas une simple application : elle s'autonomise et impose sa logique d'efficacité." }
    ],
    vf: [
      { s: "La technique est un outil parfaitement neutre.", a: false, e: "Elle impose efficacité et rationalité : elle n'est pas neutre (Ellul, Heidegger)." },
      { s: "Le principe responsabilité de Jonas répond au pouvoir démesuré de la technique.", a: true, e: "« Agis de sorte que les effets soient compatibles avec une vie humaine future. »" }
    ],
    trous: [
      { t: "Bergson définit l'homme comme « homo _____ », fabricant d'outils.", a: "faber", e: "Homo faber vs homo sapiens." }
    ],
    recall: [
      { q: "Oppose homo faber et homo sapiens (Bergson).", a: "Homo faber = l'homme fabricant d'outils (l'intelligence comme technique) ; homo sapiens = l'homme savant. Bergson privilégie faber : l'intelligence est d'abord pratique." },
      { q: "Pourquoi la technique est-elle un « pharmakon » (Stiegler) ?", a: "Parce qu'elle est indissociablement poison et remède : elle augmente nos pouvoirs tout en créant de nouveaux dangers et dépendances." }
    ]
  },

  /* ===================== 14. LA RELIGION ===================== */
  "religion": {
    qcm: [
      { q: "« La religion est l'opium du peuple » signifie qu'elle :", o: ["enrichit matériellement le peuple en lui promettant l'abondance", "console de la misère réelle tout en la perpétuant", "est une drogue interdite dont l'usage corrompt les fidèles", "rend savant celui qui en médite patiemment les enseignements"], c: 1, e: "Marx : la religion apaise la souffrance sociale mais détourne de la transformer." },
      { q: "Pour Durkheim, la religion est avant tout :", o: ["une illusion purement individuelle née du désir et de la peur", "une « chose éminemment sociale » (fonction de cohésion)", "une erreur de raisonnement que le progrès des sciences dissipe", "une science primitive expliquant le monde avant la vraie science"], c: 1, e: "La religion exprime et renforce la cohésion du groupe : c'est un fait social." },
      { q: "Pour Feuerbach, Dieu est :", o: ["le créateur réel dont dépend l'existence de toutes choses", "une projection idéalisée des qualités humaines", "une illusion d'optique que la raison corrige aisément", "la nature elle-même prise comme substance infinie et unique"], c: 1, e: "L'homme projette en Dieu sa propre essence idéalisée." }
    ],
    vf: [
      { s: "Religion, foi et croyance désignent exactement la même chose.", a: false, e: "Il faut les distinguer : la religion est institutionnelle et collective, la foi est personnelle." },
      { s: "Pour Durkheim, la religion a une fonction de cohésion sociale.", a: true, e: "Elle relie (religare) la communauté autour du sacré." }
    ],
    trous: [
      { t: "Marx : « la religion est l'_____ du peuple ».", a: "opium", e: "Consolation qui endort." }
    ],
    recall: [
      { q: "Quel est le sens de « l'opium du peuple » ?", a: "La religion console de la misère réelle (comme une drogue apaise) mais détourne d'agir pour transformer les conditions sociales (Marx)." },
      { q: "Quel est l'apport de Durkheim sur la fonction sociale de la religion ?", a: "La religion est une « chose éminemment sociale » : elle exprime et renforce la cohésion du groupe autour du sacré." }
    ]
  },

  /* ===================== 15. LA SCIENCE ===================== */
  "science": {
    qcm: [
      { q: "Le critère de scientificité selon Popper est :", o: ["la vérification définitive d'une théorie par l'accumulation des faits", "la falsifiabilité (une théorie doit être réfutable / testable)", "le consensus des savants reconnaissant ensemble la même vérité", "l'utilité pratique des applications qu'une théorie rend possibles"], c: 1, e: "Une théorie scientifique prend le risque d'être réfutée par l'expérience (le « cygne noir »)." },
      { q: "Le scientisme consiste à :", o: ["pratiquer la science avec rigueur et prudence dans ses conclusions", "ériger la science en seule source de vérité (quasi-religion)", "douter par principe de toute science et de ses prétentions au vrai", "mêler la science et l'art en une même démarche de connaissance"], c: 1, e: "Le scientisme absolutise la science : c'est une croyance, non la science elle-même." },
      { q: "L'« obstacle épistémologique » (Bachelard) est :", o: ["un instrument de mesure dont l'imprécision fausse les résultats", "une habitude ou intuition qui freine la connaissance scientifique", "une loi physique fondamentale qui régit le comportement des corps", "une preuve mathématique sur laquelle la science vient se fonder"], c: 1, e: "La science se construit CONTRE les évidences premières et l'opinion." }
    ],
    vf: [
      { s: "La science atteint une vérité absolue et définitive.", a: false, e: "Le faillibilisme (Popper) : les théories sont provisoires, toujours révisables." },
      { s: "Scientisme et science sont la même chose.", a: false, e: "Le scientisme est une idéologie qui absolutise la science." }
    ],
    trous: [
      { t: "Pour Popper, une théorie est scientifique si elle est _____ (réfutable).", a: "falsifiable", alt: ["falsifiable", "réfutable", "refutable"], e: "Critère de falsifiabilité." }
    ],
    recall: [
      { q: "Quel est le critère de Popper ?", a: "Une théorie est scientifique si elle est falsifiable : réfutable / testable par l'expérience." },
      { q: "Que critique-t-on dans le scientisme ?", a: "Le fait d'ériger la science en seule source de vérité et de sens, comme une quasi-religion — ce qui n'est plus de la science mais une croyance." }
    ]
  },

  /* ===================== 16. LA VÉRITÉ ===================== */
  "verite": {
    qcm: [
      { q: "La définition classique de la vérité (Thomas d'Aquin) est :", o: ["la cohérence interne d'un système où les énoncés ne se contredisent pas", "l'adéquation de la chose et de l'intellect", "ce qui se révèle utile et profitable à celui qui le tient pour vrai", "l'accord unanime de tous les esprits sur une même proposition"], c: 1, e: "Adaequatio rei et intellectus : la pensée est vraie quand elle correspond à la chose." },
      { q: "La thèse perspectiviste de Nietzsche est que :", o: ["la vérité est absolue et s'impose la même à tous les esprits", "« les vérités sont des illusions dont on a oublié qu'elles le sont »", "Dieu garantit la vérité de nos idées claires et distinctes", "seule la science dit le vrai, le reste n'étant qu'opinion"], c: 1, e: "Il n'y a pas de faits, seulement des interprétations utiles à la vie." },
      { q: "Pour William James (pragmatisme), est vrai :", o: ["ce qui correspond exactement à la réalité telle qu'elle est en soi", "ce qui est avantageux, ce qui réussit pour la pensée", "ce que Dieu révèle aux hommes par sa parole et sa grâce", "ce qui demeure éternel et immuable par-delà le temps qui passe"], c: 1, e: "Le pragmatisme : la vérité se mesure à ses effets pratiques (≠ adéquation)." }
    ],
    vf: [
      { s: "La vérité (de la pensée) et la réalité (des choses) sont la même chose.", a: false, e: "La vérité est une propriété de la pensée / du discours ; la réalité, des choses." },
      { s: "Pour Spinoza, « le vrai est sa propre norme et celle du faux ».", a: true, e: "La vérité se reconnaît par elle-même, sans critère extérieur." }
    ],
    trous: [
      { t: "La vérité classique = l'_____ de la chose et de l'intellect (Thomas d'Aquin).", a: "adéquation", e: "Adaequatio rei et intellectus." }
    ],
    recall: [
      { q: "Quelle est la définition classique de la vérité (adéquation) ?", a: "La vérité est l'adéquation (la correspondance) de la chose et de l'intellect — Thomas d'Aquin." },
      { q: "Quelle est la thèse perspectiviste de Nietzsche ?", a: "Il n'y a pas de faits mais des interprétations : « les vérités sont des illusions dont on a oublié qu'elles le sont », utiles à la vie." }
    ]
  },

  /* ===================== 17. LA RAISON ===================== */
  "raison": {
    qcm: [
      { q: "La différence entre raison théorique et raison pratique (Kant) :", o: ["il n'y en a aucune, ce sont deux noms pour une même faculté", "connaître le vrai (théorique) / déterminer l'action morale (pratique)", "l'une sert à penser de façon rigoureuse, l'autre à rêver librement", "l'une sert à calculer avec exactitude, l'autre à parler aux autres"], c: 1, e: "La raison pure connaît ; la raison pratique commande l'action (la morale)." },
      { q: "« La raison est l'esclave des passions » (Hume) signifie :", o: ["les passions sont mauvaises et asservissent l'homme qui les suit", "la raison calcule les moyens, mais les passions fixent les fins", "il faut éteindre en soi les passions pour vivre selon la raison", "la raison est toute-puissante et règne seule sur nos conduites"], c: 1, e: "La raison ne motive pas l'action par elle-même : elle sert des fins posées par le désir." },
      { q: "« Le cœur a ses raisons que la raison ne connaît point » est de :", o: ["Hume", "Pascal", "Hegel", "Kant"], c: 1, e: "Pascal : le cœur saisit par intuition des principes que la raison ne démontre pas." }
    ],
    vf: [
      { s: "Raison et raisonnable, c'est exactement pareil.", a: false, e: "La raison est une faculté ; le raisonnable est une mesure pratique, prudentielle." },
      { s: "Pour Hegel, « ce qui est rationnel est réel et ce qui est réel est rationnel ».", a: true, e: "Le réel est l'effectuation de la raison dans l'histoire." }
    ],
    trous: [
      { t: "Pascal : « le _____ a ses raisons que la raison ne connaît point ».", a: "cœur", alt: ["coeur"], e: "Le cœur = l'intuition des premiers principes." }
    ],
    recall: [
      { q: "Quelle est la différence entre raison théorique et raison pratique (Kant) ?", a: "La raison théorique connaît le vrai (les phénomènes) ; la raison pratique détermine l'action morale (la loi du devoir)." },
      { q: "Que veut dire Hume avec « la raison est l'esclave des passions » ?", a: "La raison calcule les moyens mais ne fixe pas les fins : ce sont les passions / désirs qui orientent l'action." }
    ]
  }

};
