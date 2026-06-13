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
    intro: "Le devoir, c'est l'obligation morale : ce que je dois faire mais que je PEUX ne pas faire. Il se distingue de la contrainte (subie, sans choix) et de la nécessité (inévitable). Parce qu'il oblige sans contraindre, le devoir suppose et appelle ma liberté. Problème : ce devoir vient-il du dehors (et serait alors une aliénation déguisée) ou de moi-même (mais alors qui m'oblige vraiment, et au nom de quoi) ?",
    parties: [
      { t: "I. Le devoir vient de la raison : je peux me l'imposer (🔵)", sub: [
        { t: "A. Agir PAR devoir (Kant)", p: [
          "Kant distingue agir PAR devoir (par pur respect de la loi morale) et agir CONFORMÉMENT au devoir (par intérêt ou inclination) : seule la première conduite a une valeur morale.",
          "L'impératif catégorique commande inconditionnellement : « agis selon une maxime que tu peux vouloir universelle ». C'est un critère formel, pas un contenu imposé.",
          "Exemple : tenir une promesse même quand elle me coûte (« quoi qu'il m'en coûte »), c'est agir par devoir ; la tenir par peur du qu'en-dira-t-on, c'est seulement y être conforme." ] },
        { t: "B. Une exigence rationnelle et universelle", p: [
          "Pour Rousseau, la conscience est un « principe inné de justice » ; pour Aristote, l'homme accède à la vertu par l'habitude (la vertu devient une « seconde nature »).",
          "Conséquence : si le devoir vient de la raison, il ne dépend ni de ma culture ni de mes envies — il vaut pour tout être raisonnable." ] }
      ]},
      { t: "II. Mais le devoir peut être suspect : imposé, intériorisé (🔴)", sub: [
        { t: "A. Le soupçon (Nietzsche, Freud)", p: [
          "Nietzsche fait la généalogie de la morale : derrière le « Tu dois » se cache la morale des faibles, ressentiment travesti en vertu ; il lui oppose le « Je veux » de l'homme libre.",
          "Freud : le sens du devoir vient du Surmoi, intériorisation des interdits parentaux et sociaux — non d'un sens moral inné.",
          "Exemple : la culpabilité qu'on éprouve sans faute réelle trahit la voix du Surmoi, pas un véritable manquement." ] },
        { t: "B. Le devoir comme pression sociale", p: [
          "Bergson : une part de la morale n'est qu'une pression sociale (instinct de conservation du groupe), une « morale close ».",
          "La Boétie parle de « servitude volontaire » : on consent à ce qui nous contraint. Risque : confondre l'habitude sociale (« ça se fait ») et la morale." ] }
      ]},
      { t: "III. Dépassement : le devoir comme décentrement (🟣)", p: [
        "Le « devoir » peut s'entendre comme un « deux-voir » : l'autonomie véritable n'est pas de s'enfermer en soi, mais de se décentrer.",
        "Kant : la conscience morale est un tribunal intérieur où je suis juge ET jugé. Levinas : c'est le visage d'autrui, sa fragilité, qui m'oblige, avant tout contrat.",
        "Bergson : il y a deux sources de la morale — la pression sociale (close) ET l'élan d'amour (ouvert), celui des héros et des saints.",
        "Exemple : la « banalité du mal » (Arendt) — Eichmann obéissait « par devoir » sans jamais juger. Le vrai devoir exige donc de penser par soi-même, face à autrui." ]}
    ],
    retenir: [
      "Distinctions : devoir / contrainte / nécessité ; agir PAR devoir / CONFORMÉMENT au devoir ; morale / éthique ; légalité / légitimité.",
      "Citations : « agis par devoir » (Kant) ; « Tu dois » vs « Je veux » (Nietzsche) ; le « bois courbe » de l'humanité (Kant).",
      "Accroches : Javert (Les Misérables) qui se tue d'avoir failli ; la banalité du mal (Arendt, procès Eichmann).",
      "Sujets-types : « Qui peut me dire ce que je dois faire ? » · « Y a-t-il des limites à faire son devoir ? »"
    ]
  });

  set("liberte", {
    intro: "La liberté est le pouvoir de se déterminer soi-même (libre arbitre), par opposition au déterminisme selon lequel tout effet a une cause. Problème : je me SENS libre (je délibère, j'hésite, je choisis), mais cette expérience suffit-elle à PROUVER que je le suis ? Peut-être n'est-elle qu'une illusion entretenue par l'ignorance de mes véritables causes.",
    parties: [
      { t: "I. Je peux faire l'expérience de ma liberté (🔵)", sub: [
        { t: "A. La liberté révélée par la conscience (Descartes)", p: [
          "Le doute volontaire montre que je peux refuser mon assentiment, même à l'évidence : ma volonté est indéterminée, « infinie ».",
          "La liberté est à son plus haut degré quand elle suit l'évidence (bien voir pour bien choisir) ; l'indifférence (choisir sans raison) en est le plus bas degré." ] },
        { t: "B. La liberté comme projet (Sartre, stoïciens)", p: [
          "Sartre : l'existence précède l'essence, l'homme est « condamné à être libre » ; se cacher derrière son rôle ou son passé, c'est la « mauvaise foi ».",
          "Stoïciens (Épictète) : distinguer ce qui dépend de nous (nos jugements, nos désirs) de ce qui n'en dépend pas → la liberté intérieure et l'ataraxie." ] }
      ]},
      { t: "II. Mais cette liberté est peut-être illusoire (🔴)", sub: [
        { t: "A. L'illusion du libre arbitre (Spinoza)", p: [
          "La pierre lancée « se croirait libre » si elle était consciente : nous connaissons nos désirs mais ignorons les causes qui les produisent.",
          "Se SENTIR libre n'est donc pas ÊTRE libre : la conscience du choix masque le déterminisme du désir." ] },
        { t: "B. Les déterminismes (Rousseau, Kant, Marx, Freud)", p: [
          "Rousseau : « l'homme est né libre, et partout il est dans les fers ». Marx (déterminismes socio-économiques), Freud (l'inconscient).",
          "Kant : la liberté n'est pas un objet d'expérience (tout phénomène est causé) ; c'est une « idée transcendantale » qu'on peut penser mais non connaître." ] }
      ]},
      { t: "III. La liberté se conquiert dans la limite (🟣)", p: [
        "Paradoxe de Stravinsky : « ma liberté est d'autant plus grande que je limite mon champ d'action » — la règle (la contrainte formelle) rend la création libre possible.",
        "Spinoza : connaître ses déterminismes, c'est commencer à être libre (passer de la passion à l'action). Hegel : la liberté se conquiert dans le travail et la reconnaissance.",
        "Kant / Levinas : c'est l'expérience de l'obligation (« tu dois », le visage d'autrui) qui me révèle libre — sans loi, pas de liberté, seulement du caprice.",
        "Être vraiment libre, ce n'est donc pas l'absence de contrainte, mais le rapport lucide et choisi à elle." ]}
    ],
    retenir: [
      "Distinctions : libre arbitre / déterminisme ; liberté d'indifférence / éclairée ; liberté naturelle / civile / morale (Rousseau) ; sentir libre ≠ être libre.",
      "Citations : « condamné à être libre » (Sartre) ; « né libre, partout dans les fers » (Rousseau) ; la pierre de Spinoza.",
      "Accroches : Matrix (la pilule) ; le Grand Inquisiteur (Dostoïevski) ; l'expérience de Milgram.",
      "Sujet-type : « Peut-on faire l'expérience de la liberté ? »"
    ]
  });

  set("bonheur", {
    intro: "Le bonheur est un état durable de plénitude et de satisfaction. Son étymologie (« bon heur » = bonne fortune) rappelle qu'il dépend en partie de la chance, donc qu'on ne le maîtrise pas tout à fait. Tension centrale : le désir est manque et inquiétude, le bonheur est repos — faut-il alors satisfaire ses désirs, les trier, ou renoncer à vouloir les combler ?",
    parties: [
      { t: "I. Le bonheur s'atteint par la maîtrise des désirs (🔵)", sub: [
        { t: "A. L'arithmétique des désirs (Épicure)", p: [
          "Trier : désirs vains (richesse, gloire — à écarter), naturels non nécessaires (les plaisirs raffinés), naturels et nécessaires (seuls indispensables : manger, l'amitié) → l'ataraxie.",
          "Le plaisir visé n'est pas la jouissance débridée mais l'absence de trouble (aponie du corps, ataraxie de l'âme)." ] },
        { t: "B. La sagesse rationaliste (Descartes, Spinoza, stoïciens)", p: [
          "Descartes : « changer ses désirs plutôt que l'ordre du monde » — n'exiger que ce qui dépend de nous.",
          "Spinoza : la béatitude (l'amour intellectuel de Dieu) ; renversement décisif — on n'est pas heureux PARCE qu'on est vertueux, on est vertueux PARCE qu'on éprouve déjà la joie." ] }
      ]},
      { t: "II. Mais le bonheur comme satisfaction est un piège (🔴)", sub: [
        { t: "A. Tout satisfaire ? (Calliclès vs Socrate)", p: [
          "Calliclès : la vie heureuse, c'est l'intempérance, satisfaire sans cesse tous ses désirs.",
          "Socrate lui oppose l'image du tonneau percé : un désir sans mesure n'est jamais comblé, c'est le supplice, pas le bonheur." ] },
        { t: "B. Le bonheur impossible (Schopenhauer, Freud)", p: [
          "Schopenhauer : la vie « oscille comme un pendule entre la souffrance (désir non satisfait) et l'ennui (désir satisfait) ».",
          "Freud : « malaise dans la civilisation » — le renoncement pulsionnel exigé par la vie sociale rend le bonheur complet impossible." ] }
      ]},
      { t: "III. Renoncer à « faire » son bonheur (🟣)", p: [
        "Kant : le bonheur est un « idéal de l'imagination », indéterminé (chacun le rêve autrement) : on ne peut donc le programmer sûrement ; mieux vaut se rendre DIGNE d'être heureux en agissant par devoir.",
        "Rousseau : « malheur à qui n'a plus rien à désirer » — l'insatisfaction du désir est ce qui rend la vie vivante.",
        "Le bonheur n'est pas l'affaire de l'État : imposer le bonheur d'en haut serait, dit Kant, « le pire despotisme » (paternalisme).",
        "Au fond, peut-être que le bonheur ne se cherche pas frontalement : il survient « par surcroît » (Proust : le bonheur surgit à l'improviste)." ]}
    ],
    retenir: [
      "Distinctions : plaisir / bonheur / joie ; eudémonisme (but = bonheur) / hédonisme (but = plaisir) ; les 3 catégories de désirs d'Épicure.",
      "Citations : pendule souffrance / ennui (Schopenhauer) ; « changer ses désirs… » (Descartes) ; « deviens ce que tu es » / amor fati (Nietzsche).",
      "Accroches : Dom Juan (le désir qui fuit en avant) ; l'« happycratie » (l'injonction au bonheur).",
      "3 sujets de cours : satisfaire tous ses désirs ? · le bonheur est-il l'affaire de l'État ? · qu'attend-on pour être heureux ?"
    ]
  });

  set("justice", {
    intro: "Est juste (jus = droit) ce qui est conforme au droit et à l'égalité. On distingue le légal (conforme à la loi en vigueur) du légitime (conforme à ce qui est juste), et le droit positif (lois effectivement posées) du droit naturel (principes universels antérieurs aux lois). Problème : existe-t-il une norme objective et universelle du juste, ou n'est-il qu'affaire de convention et de rapport de force ?",
    parties: [
      { t: "I. Il existe une norme du juste (🔵)", sub: [
        { t: "A. Une justice fondée en raison ou en nature", p: [
          "Rousseau : une conscience, « principe inné de justice », fait sentir à tous l'injustice. Aristote : une loi commune non écrite — Antigone enterre son frère au nom des lois divines contre le décret de Créon.",
          "Kant : est juste ce qui peut être universalisé sans contradiction ; la raison, et non la force, fonde le droit." ] },
        { t: "B. Les types de justice (Aristote)", p: [
          "Commutative : l'égalité arithmétique dans les échanges (un prix juste). Distributive : la répartition des biens et honneurs selon le mérite (proportionnelle). Corrective : réparer un tort, punir.",
          "À distinguer de l'égalité stricte : la justice distributive donne « à chacun selon… », pas la même chose à tous." ] }
      ]},
      { t: "II. La justice n'est que convention et intérêt (🔴)", sub: [
        { t: "A. Sans loi, pas de justice (Hobbes, Gygès)", p: [
          "Hobbes : « là où il n'y a pas de loi, il n'y a pas d'injustice » — le juste naît du contrat, pas de la nature.",
          "L'anneau de Gygès (rapporté par Glaucon) : devenu invisible et impuni, nul ne resterait juste → « nul n'est juste volontairement », on l'est par crainte de la sanction." ] },
        { t: "B. Le règne de la force (Pascal)", p: [
          "« Ne pouvant faire que ce qui est juste soit fort, on a fait que ce qui est fort soit juste » : la force s'habille en justice.",
          "« Vérité au-deçà des Pyrénées, erreur au-delà » : ce qui est tenu pour juste change d'un pays à l'autre — simple convention." ] }
      ]},
      { t: "III. Rendre les conventions justes : l'équité (🟣)", p: [
        "Aristote : l'équité corrige la loi quand sa généralité la rend injuste dans un cas particulier — la « règle de plomb » de Lesbos, souple, épouse les contours de la pierre.",
        "Rawls : derrière le « voile d'ignorance » (j'ignore ma future place sociale), on choisit des principes équitables, dont le principe de différence — les inégalités ne sont justes que si elles profitent aux plus défavorisés.",
        "Montesquieu : la séparation des pouvoirs empêche l'arbitraire. L'enjeu, dit Camus, n'est peut-être pas tant de SAVOIR le juste que d'ÊTRE juste (la révolte contre l'injustice)." ]}
    ],
    retenir: [
      "Distinctions : légal / légitime ; droit positif / naturel ; égalité / équité ; commutative / distributive / corrective ; savoir le juste / le sentir.",
      "Citations : « nul n'est juste volontairement » (Gygès) ; « ce qui est fort soit juste » (Pascal) ; « voile d'ignorance » (Rawls).",
      "Accroches : Antigone ; l'anneau de Gygès ; le dilemme du tramway (Foot) ; la désobéissance civile (Thoreau).",
      "Sujets-types : « Comment savoir ce qui est juste ? » · « Le juste n'est-il que convention ? » · « Peut-on se faire justice soi-même ? »"
    ]
  });

  set("langage", {
    intro: "Le langage (logos = à la fois raison et parole) est la faculté de mettre en relation par des signes. On distingue le langage (faculté universelle), la langue (système propre à un groupe) et la parole (acte individuel concret). Problème : le langage n'est-il qu'un outil de communication, extérieur à la pensée et toujours réducteur, ou bien lui est-il consubstantiel — et nous relie-t-il même par ses ratés ?",
    parties: [
      { t: "I. Le langage est consubstantiel à la pensée (🔵)", sub: [
        { t: "A. On pense dans les mots (Hegel, Saussure)", p: [
          "Hegel : « c'est dans les mots que nous pensons » ; ce qu'on croit « ineffable » n'est souvent que la pensée encore confuse, pas encore aboutie.",
          "Saussure : sans la langue, la pensée n'est qu'une « masse amorphe » ; le signe (signifiant / signifié) découpe et organise le réel." ] },
        { t: "B. Le propre de l'homme (Benveniste, Descartes)", p: [
          "Le langage humain est créatif (on produit des phrases inédites), dialogique et ouvert ; le « langage » des abeilles n'est qu'un code de signaux fermé (Benveniste).",
          "Pour Descartes, c'est le langage — répondre à propos, et non répéter — qui distingue l'homme de l'animal-machine." ] }
      ]},
      { t: "II. Mais le langage est un outil réducteur et social (🔴)", sub: [
        { t: "A. Le mot trahit le singulier (Bergson)", p: [
          "Le « mot-étiquette » ne retient que le général et l'utile : il fige et écrase ce que mon expérience a d'unique. « La pensée demeure incommensurable avec le langage. »",
          "D'où le rôle de l'art (et de la poésie) : tordre les mots pour dire enfin le singulier." ] },
        { t: "B. Un rapport de pouvoir (Barthes, Bourdieu)", p: [
          "Barthes : « la langue est fasciste » — elle ne nous interdit pas de parler, elle nous OBLIGE à dire selon ses catégories.",
          "Bourdieu : le langage est un habitus, marqué par les rapports de classe (la « langue légitime » comme capital)." ] }
      ]},
      { t: "III. Le langage nous relie par ses défaillances mêmes (🟣)", p: [
        "Freud : le lapsus, en « ratant », dit une vérité — la défaillance révèle un fond inconscient que nous partageons.",
        "Levinas : « parler institue le rapport moral d'égalité » ; adresser la parole à autrui, c'est déjà le reconnaître. Ricœur : traduire, c'est une « hospitalité langagière ».",
        "Communiquer n'est pas mécaniquement « mettre en commun » : c'est dans l'effort, le malentendu surmonté, le dialogue, que naît le sens partagé — ce qu'aucune IA ne fait vraiment." ]}
    ],
    retenir: [
      "Distinctions : langage / langue / parole ; signifiant / signifié (arbitraire du signe) ; convaincre (raison) / persuader (passions) ; communiquer ≠ mettre en commun.",
      "Citations : « la langue est fasciste » (Barthes) ; « les limites de mon langage signifient les limites de mon monde » (Wittgenstein) ; « mot-étiquette » (Bergson).",
      "Accroches : 1984 / la novlangue ; #MeToo (« libérer la parole ») ; les « éléments de langage » politiques.",
      "Sujet-type : « Le langage n'est-il qu'un outil de communication ? »"
    ]
  });

  set("etat", {
    intro: "L'État (de stare, se tenir) est l'ensemble des institutions centralisées qui détiennent, selon Weber, le « monopole de la violence physique légitime » sur un territoire (fonctions régaliennes : impôt, armée, justice, monnaie). Problème : l'État protège-t-il la liberté et la sécurité, ou opprime-t-il les individus ? Sa légalité est-elle toujours légitime ?",
    parties: [
      { t: "I. L'État libère et réalise la liberté (🔵)", p: [
        "Hegel : « l'État est la réalité de la liberté » — il dépasse les intérêts particuliers et incarne l'esprit objectif d'un peuple.",
        "Spinoza : « le but de l'État, c'est la liberté » — il existe pour que les hommes vivent et pensent en sécurité.",
        "Aristote : l'homme est un « animal politique » (zoon politikon) qui ne se réalise pleinement que dans la cité." ]},
      { t: "II. L'État opprime et domine (🔴)", p: [
        "Marx : l'État n'est pas neutre, c'est l'instrument de la classe dominante ; il est voué à « dépérir » dans une société sans classes.",
        "Les anarchistes (Proudhon, Bakounine) : « ni Dieu ni maître » — toute autorité coercitive est illégitime ; viser l'ordre sans le pouvoir.",
        "Nietzsche : l'État est « le plus froid des monstres froids » qui ment (« Moi, l'État, je suis le peuple »). Foucault : panoptique et biopouvoir ; Orwell : Big Brother." ]},
      { t: "III. Le contrat et l'équilibre des pouvoirs (🟣)", p: [
        "Hobbes : sans État, c'est la « guerre de tous contre tous » (« l'homme est un loup pour l'homme ») ; par peur, les individus délèguent leur force au Léviathan pour la sécurité.",
        "Rousseau : le contrat social fonde la souveraineté du peuple, qui obéit à la « volonté générale » — donc à lui-même.",
        "Montesquieu : pour qu'un État protège sans opprimer, « il faut que le pouvoir arrête le pouvoir » → séparation de l'exécutif, du législatif et du judiciaire." ]}
    ],
    retenir: [
      "Distinctions : État / gouvernement / nation ; légalité / légitimité ; État-providence / État minimal (libéral).",
      "Citations : « monopole de la violence physique légitime » (Weber) ; « le plus froid des monstres froids » (Nietzsche) ; « l'homme est un loup pour l'homme » (Hobbes / Plaute).",
      "Accroches : le frontispice du Léviathan (Hobbes) ; 1984 ; le panoptique de Bentham (Foucault)."
    ]
  });

  set("nature", {
    intro: "La nature désigne ce qui existe et se développe sans intervention humaine ; ou, chez Spinoza, l'être total (« Deus sive Natura »). Elle s'oppose à la culture (ce que l'homme produit et transmet). Problème : faut-il s'en rendre « maître et possesseur » (Descartes) ou « vivre selon » elle (stoïciens) ? Est-elle un ordre finalisé et sacré, ou une matière indifférente sans but ?",
    parties: [
      { t: "I. La nature est un ordre finalisé, voire divin (🔵)", p: [
        "Aristote : « la nature ne fait rien en vain » — chaque être a une fin interne (finalité) ; la nature est un cosmos ordonné.",
        "Les stoïciens : « vivre selon la nature », c'est accorder sa raison à l'ordre rationnel du monde. Spinoza : « Deus sive Natura » — Dieu et la nature ne sont qu'une seule substance infinie.",
        "Conséquence morale : si la nature est un ordre, lui obéir, c'est être sage." ]},
      { t: "II. La nature est une matière à dominer (🔴)", p: [
        "Lucrèce / Épicure : la nature n'est qu'atomes et vide, sans dessein — « elle n'a pas été faite pour nous » ; pas de providence à craindre.",
        "Descartes : par le mécanisme (la nature = une grande machine) et la science, l'homme se rend « comme maître et possesseur de la nature » — programme de la modernité technique.",
        "Hobbes : l'« état de nature » humain n'est pas un paradis mais la violence ; il faut en sortir." ]},
      { t: "III. Dépasser l'opposition nature / culture (🟣)", p: [
        "Lévi-Strauss : l'universel relève de la nature, la règle de la culture — mais la prohibition de l'inceste, à la fois universelle et culturelle, brouille la frontière.",
        "Descola : « par-delà nature et culture » — ce grand partage est une particularité occidentale, non une évidence universelle.",
        "L'écologie et le biomimétisme réintègrent l'homme DANS la nature : non plus la dominer, mais s'en inspirer et la préserver (Jonas)." ]}
    ],
    retenir: [
      "Distinctions : nature / culture ; inné / acquis ; état de nature / état civil (fiction théorique, pas un fait) ; natura naturans / naturata.",
      "Citations : « maître et possesseur de la nature » (Descartes) ; « Deus sive Natura » (Spinoza) ; « la nature ne fait rien en vain » (Aristote) ; « vivre selon la nature » (stoïciens).",
      "Accroches : l'Anthropocène ; le biomimétisme ; Avatar (Pandora)."
    ]
  });

  set("conscience", {
    intro: "La conscience est la connaissance immédiate que le sujet a de lui-même et du monde. On en distingue trois sens : conscience de soi (le sentiment d'être un « je » identique), conscience morale (qui juge le bien et le mal), conscience du monde (perceptive). Problème : la conscience est-elle souveraine — le sujet est-il maître de lui — ou n'est-elle qu'une illusion de surface d'un être en réalité déterminé ?",
    parties: [
      { t: "I. La conscience fonde le sujet (🔵)", p: [
        "Descartes : même si je doute de tout, je ne peux douter que je pense — « je pense donc je suis », première certitude ; d'où le dualisme de l'âme (pensée) et du corps (étendue).",
        "Kant : « le je pense doit pouvoir accompagner toutes mes représentations » — c'est l'unité du sujet qui rend l'expérience possible.",
        "Husserl : toute conscience est « conscience DE quelque chose » (intentionnalité) — elle est toujours tournée vers un objet, jamais vide." ]},
      { t: "II. La conscience est seconde et déterminée (🔴)", p: [
        "Marx : « ce n'est pas la conscience qui détermine la vie, mais la vie qui détermine la conscience » — nos idées dépendent de nos conditions matérielles (idéologie).",
        "Spinoza : nous sommes conscients de nos actes, mais ignorants des causes qui les produisent. Freud : le Moi « n'est pas maître dans sa propre maison ».",
        "Hume : il n'y a pas de « moi » substantiel, seulement un faisceau de perceptions qui se succèdent — un « théâtre » sans acteur permanent." ]}
    ],
    retenir: [
      "Distinctions : conscience de soi / morale / du monde ; conscient / inconscient ; sujet / objet.",
      "Citations : « je pense donc je suis » (Descartes) ; « le je pense… accompagne mes représentations » (Kant).",
      "Accroches : le test du miroir ; Memento (Nolan) ; l'expérience de Libet (le cerveau précède la décision « consciente »)."
    ]
  });

  set("inconscient", {
    intro: "L'inconscient désigne, chez Freud, une activité psychique qui échappe à la conscience : des pulsions et des désirs refoulés qui continuent d'agir en nous. La deuxième topique distingue le Ça (les pulsions), le Surmoi (les interdits intériorisés) et le Moi (l'arbitre, sous tension). Problème : l'inconscient est-il une hypothèse scientifique qui éclaire nos conduites, ou une fiction commode qui déresponsabilise l'homme ?",
    parties: [
      { t: "I. L'inconscient existe et nous gouverne (🔴 — défense)", p: [
        "Freud : « le Moi n'est pas maître dans sa propre maison » ; le rêve est la « voie royale » vers l'inconscient ; le lapsus et l'acte manqué trahissent le refoulé.",
        "Le refoulement maintient hors de la conscience des représentations pénibles, qui font « retour » de façon déguisée (symptômes, rêves).",
        "Leibniz l'annonçait avec les « petites perceptions » (infra-conscientes) ; Jung ajoute un « inconscient collectif » fait d'archétypes." ]},
      { t: "II. L'inconscient est une illusion dangereuse (🔵 — critique)", p: [
        "Sartre : l'inconscient n'est que « la mauvaise foi personnifiée » — un alibi pour ne pas assumer ce que, en réalité, je sais et je choisis.",
        "Alain : « grossir » l'inconscient est une faute morale, une démission de la volonté.",
        "Popper : la psychanalyse explique tout (et son contraire) : irréfutable, elle n'est donc pas une science." ]}
    ],
    retenir: [
      "Distinctions : Ça / Moi / Surmoi ; inconscient (actif, refoulé) ≠ non-conscient (simple absence de conscience).",
      "Citations : « le Moi n'est pas maître dans sa propre maison » ; « là où était le Ça, doit advenir le Moi » (Freud).",
      "Accroches : le lapsus / l'acte manqué ; le divan de la psychanalyse."
    ]
  });

  set("temps", {
    intro: "Le temps peut être objectif (mesurable, celui des horloges et de la physique) ou subjectif (la « durée » vécue, qui se dilate et se contracte selon l'attente, l'ennui ou la joie — Bergson). Problème : le temps existe-t-il en soi, indépendamment de nous, ou n'est-il qu'une forme de notre esprit ?",
    parties: [
      { t: "I. Le temps est une forme de l'esprit / du vécu (🔵)", p: [
        "Augustin : passé et futur n'existent pas « en soi » ; il n'y a qu'un présent à trois visages — mémoire (du passé), attention (du présent), attente (du futur).",
        "Kant : le temps est une « forme a priori de la sensibilité » — non une chose, mais la condition subjective sous laquelle nous percevons tout.",
        "Bergson : la « durée » vécue est qualitative et indivisible ; la mesurer (la « spatialiser »), c'est déjà la trahir." ]},
      { t: "II. Le temps est réel et objectif (🔴)", p: [
        "Héraclite : tout s'écoule (panta rhei), « on ne se baigne jamais deux fois dans le même fleuve » — le devenir est la réalité même. Galilée le rend mesurable.",
        "Nietzsche : l'« éternel retour » est une épreuve — voudrais-tu revivre ta vie exactement à l'identique, une infinité de fois ? Dire « oui », c'est l'amor fati." ]}
    ],
    retenir: [
      "Distinctions : temps objectif (horloges) / durée vécue ; instant / durée ; mémoire / perception / attente (Augustin).",
      "Citations : la « durée » (Bergson) ; l'éternel retour (Nietzsche) ; carpe diem (Horace).",
      "Accroches : Proust et la madeleine (mémoire involontaire) ; Interstellar (dilatation du temps)."
    ]
  });

  set("art", {
    intro: "L'art a longtemps été pensé comme imitation (mimésis) de la nature, puis, à l'époque moderne, comme création. Il faut distinguer le beau de l'agréable (qui flatte les sens), et l'art de l'artisanat (qui suit des règles fixées). Problème : l'art copie-t-il le réel (et nous éloigne du vrai), ou révèle-t-il et crée-t-il quelque chose que la nature ne donne pas ?",
    parties: [
      { t: "I. L'art est imitation (🔵)", p: [
        "Platon s'en méfie : l'œuvre imite le sensible, lui-même copie des Idées — c'est une « imitation d'imitation », trois fois éloignée du vrai ; le poète flatteur est chassé de la cité.",
        "Hegel renverse la hiérarchie : l'art est l'« expression sensible de l'Idée » — le beau artistique, parce qu'il est œuvre de l'esprit, dépasse le beau naturel." ]},
      { t: "II. L'art est création (🔴)", p: [
        "Kant : « le beau est ce qui plaît universellement sans concept » et sans intérêt — le jugement de goût est subjectif mais prétend à l'universel ; le génie « donne ses règles à l'art » au lieu de les recevoir.",
        "Nietzsche : « nous avons l'art pour ne pas mourir de la vérité » — l'art rend la vie supportable. Klee : « l'art ne reproduit pas le visible, il rend visible »." ]},
      { t: "III. Imiter pour transformer (🟣)", p: [
        "Aristote : la mimésis tragique n'est pas une copie servile — elle opère une catharsis, une purgation des passions (pitié et crainte) chez le spectateur.",
        "Freud : l'art est une sublimation — la pulsion détournée vers une création socialement valorisée. Duchamp (la Fontaine) : c'est le geste et le regard qui font de l'objet une œuvre." ]}
    ],
    retenir: [
      "Distinctions : beau / agréable ; art / artisanat (technique) ; mimésis / création ; génie / règle.",
      "Citations : « le beau plaît universellement sans concept » (Kant) ; « l'art rend visible » (Klee) ; « l'art nous empêche de mourir de la vérité » (Nietzsche).",
      "Accroches : la Fontaine de Duchamp (l'urinoir) ; Les Ménines (Vélasquez)."
    ]
  });

  set("travail", {
    intro: "Le travail est l'activité par laquelle l'homme transforme la nature pour subvenir à ses besoins — et, ce faisant, se transforme lui-même. Arendt distingue le labeur (cyclique, consommé aussitôt), l'œuvre (qui produit un monde durable) et l'action. Problème : le travail est-il d'abord contrainte et aliénation (une malédiction), ou réalisation et liberté (ce qui fait l'humanité de l'homme) ?",
    parties: [
      { t: "I. Le travail forme et libère l'homme (🔵)", p: [
        "Hegel : le travail est « désir réfréné » — en différant la satisfaction et en transformant la matière, la conscience se reconnaît dans son œuvre : « le travail forme ».",
        "Dialectique du maître et de l'esclave : c'est l'esclave qui travaille qui, finalement, accède à la conscience de soi et à la culture.",
        "Arendt : l'œuvre (l'objet durable) constitue un monde commun, au-delà du simple labeur de survie." ]},
      { t: "II. Le travail aliène (🔴)", p: [
        "Marx : dans le travail salarié, « le travail produit l'ouvrier comme marchandise » — l'ouvrier devient étranger à son produit (qui ne lui appartient pas), à son activité, aux autres et à lui-même : c'est l'aliénation.",
        "Aristote : le travail manuel, qui asservit aux besoins, est indigne du citoyen libre (affaire d'esclaves). Rousseau : l'oisiveté serait même « la première passion de l'homme »." ]},
      { t: "III. Choisir et transformer son travail (🟣)", p: [
        "Sartre : par le projet et le choix, le travail peut devenir libérateur, voire révolutionnaire — l'homme se définit par ce qu'il fait de ce qu'on a fait de lui.",
        "L'enjeu contemporain : reconnaissance, sens et autonomie au travail, contre la déshumanisation (le travail à la chaîne, la subordination)." ]}
    ],
    retenir: [
      "Distinctions : travail / labeur / œuvre (Arendt) ; aliénation = se perdre, devenir étranger à son produit et à soi.",
      "Citations : « le travail produit l'ouvrier comme marchandise » (Marx) ; « le travail forme » (Hegel).",
      "Accroches : Les Temps modernes (Chaplin) ; Germinal (Zola)."
    ]
  });

  set("technique", {
    intro: "La technique (technè) est l'ensemble des procédés efficaces, utiles et transmissibles ; Bergson définit l'homme comme « homo faber », fabricant d'outils (plutôt que « sapiens »). Problème : la technique est-elle un simple outil neutre, au service de fins que l'homme choisit, ou une puissance devenue autonome qui impose ses fins et le menace ?",
    parties: [
      { t: "I. La technique, puissance de maîtrise (🔵)", p: [
        "Bergson : l'intelligence se définit par la fabrication — elle sait « faire des outils à faire des outils » ; la technique est le propre de l'humanité (homo faber).",
        "Descartes : par la science et la technique, l'homme se rend « maître et possesseur de la nature » — la technique libère du besoin, soigne, prolonge la vie." ]},
      { t: "II. La technique, puissance qui échappe à l'homme (🔴)", p: [
        "Ellul : la technique est devenue un système autonome, « juge de la morale », qui impose partout sa logique d'efficacité — ce n'est plus l'homme qui choisit ses fins.",
        "Heidegger : l'« arraisonnement » (Gestell) réduit la nature à un simple stock disponible ; « la science ne pense pas » (elle calcule).",
        "Jonas : face au pouvoir démesuré de la technique (« tout ce que nous pourrons, nous le ferons »), il faut un « principe responsabilité » envers les générations futures." ]},
      { t: "III. La technique est ambivalente : le pharmakon (🟣)", p: [
        "Stiegler : la technique est un « pharmakon » — à la fois poison ET remède : la même technique qui nous augmente crée aussi de nouvelles dépendances et fragilités (ex. le numérique).",
        "L'enjeu n'est donc pas de l'accepter ou de la refuser en bloc, mais d'en faire un usage critique et responsable." ]}
    ],
    retenir: [
      "Distinctions : technique / science (la technique la précède souvent, Ellul) ; outil neutre / système autonome ; moyen / fin.",
      "Citations : « homo faber » (Bergson) ; technique = « pharmakon » (Stiegler) ; « tout ce que nous pourrons, nous le ferons » (Jonas).",
      "Accroches : le mythe de Prométhée (le feu volé) ; l'intelligence artificielle (ChatGPT)."
    ]
  });

  set("religion", {
    intro: "La religion (de religare, relier) est un système de croyances et de rites qui relie une communauté à un sacré. On la distingue de la foi (adhésion personnelle) et de la simple croyance. Problème : la religion est-elle une illusion qui aliène et console à tort, ou un lien social puissant et une source de sens irremplaçable ?",
    parties: [
      { t: "I. La religion comme illusion et aliénation (🔴)", p: [
        "Marx : « la religion est l'opium du peuple » — elle apaise la souffrance réelle (comme une drogue) mais détourne d'agir pour transformer les conditions sociales qui la causent.",
        "Feuerbach : ce n'est pas Dieu qui crée l'homme, c'est l'homme qui projette en Dieu ses propres qualités idéalisées (théologie = anthropologie inversée).",
        "Freud : la religion est une illusion, une « névrose obsessionnelle » collective. Nietzsche : « Dieu est mort » — et avec lui s'effondrent les valeurs suprêmes." ]},
      { t: "II. La religion comme lien et source de sens (🔵 / 🟣)", p: [
        "Bergson : la religion « dynamique » n'est pas la peur figée mais un élan, un amour ouvert (celui des mystiques). Pascal : le « pari » — vu l'enjeu infini, il est rationnel de parier que Dieu existe.",
        "Durkheim : la religion est une « chose éminemment sociale » — par ses rites, elle exprime et renforce la cohésion du groupe (fonction, indépendamment de la vérité du dogme).",
        "Aron : les totalitarismes sont des « religions séculières » — preuve du besoin humain de sacré et de communauté." ]}
    ],
    retenir: [
      "Distinctions : religion / foi / croyance ; sacré / profane ; critique (la religion est-elle vraie ?) / fonction (à quoi sert-elle socialement ?).",
      "Citations : « opium du peuple » (Marx) ; « Dieu est mort » (Nietzsche) ; « chose éminemment sociale » (Durkheim).",
      "Accroches : le pari de Pascal ; la laïcité à l'école."
    ]
  });

  set("science", {
    intro: "La science est une connaissance objective, systématique et expérimentale du réel. Le scientisme — la science érigée en seule vérité possible et en quasi-religion — en est le dévoiement. Problème : la science atteint-elle une vérité absolue et définitive, ou est-elle un savoir toujours faillible, révisable et en partie construit ?",
    parties: [
      { t: "I. La science atteint le certain (🔵)", p: [
        "Descartes : par la méthode (doute, évidence, ordre), la science vise une certitude « égale aux démonstrations de l'arithmétique ».",
        "Comte : la loi des trois états ; au stade « positif », on renonce à chercher les causes premières (le « pourquoi ») pour établir des lois (le « comment »)." ]},
      { t: "II. La science est faillible et construite (🔴)", p: [
        "Nietzsche : « sur une croyance métaphysique repose encore notre croyance en la science » (la croyance que la vérité vaut mieux que l'illusion).",
        "Latour : les faits scientifiques sont aussi « construits » au laboratoire (instruments, pratiques, controverses). Heidegger : « la science ne pense pas » — elle calcule sans interroger l'être." ]},
      { t: "III. Ce qui fait la scientificité : l'épistémologie (🟣)", p: [
        "Popper : une théorie est scientifique non si on peut la prouver, mais si on peut la RÉFUTER (falsifiabilité) — il suffit d'un « cygne noir » pour réfuter « tous les cygnes sont blancs ».",
        "Bachelard : la science se construit CONTRE l'opinion et les évidences premières (l'« obstacle épistémologique ») ; « les instruments sont des théories matérialisées ». Claude Bernard : la méthode expérimentale (observation → hypothèse → expérience → vérification)." ]}
    ],
    retenir: [
      "Distinctions : science / opinion (doxa) ; science / scientisme ; expliquer (sciences de la nature) / comprendre (sciences humaines).",
      "Citations : critère de falsifiabilité (Popper) ; « science sans conscience n'est que ruine de l'âme » (Rabelais) ; « la science ne pense pas » (Heidegger).",
      "Accroches : Galilée et l'Inquisition (« et pourtant elle tourne ») ; le climat (consensus / doute)."
    ]
  });

  set("verite", {
    intro: "La vérité est classiquement l'adéquation entre la pensée et la chose (Thomas d'Aquin : adaequatio rei et intellectus) ; on en propose aussi une définition par la cohérence interne d'un système, ou par l'accord intersubjectif. Problème : la vérité est-elle objective et absolue (une, pour tous), ou n'est-elle qu'une perspective parmi d'autres, voire une illusion utile ?",
    parties: [
      { t: "I. La vérité est objective et absolue (🔵)", p: [
        "Platon : le vrai n'est pas dans le sensible (les « ombres » de la caverne, changeantes) mais dans le monde intelligible des Idées, éternelles et universelles.",
        "Descartes : le critère du vrai est l'évidence — ce qui se présente à l'esprit comme clair et distinct. Spinoza : « le vrai est sa propre norme et celle du faux » (il se reconnaît par lui-même)." ]},
      { t: "II. La vérité est relative ou perspective (🔴)", p: [
        "Protagoras : « l'homme est la mesure de toute chose » — chaque individu (ou culture) a sa vérité (relativisme).",
        "Nietzsche : « les vérités sont des illusions dont on a oublié qu'elles le sont » — il n'y a pas de faits, seulement des interprétations (perspectivisme). James (pragmatisme) : est vrai ce qui réussit, ce qui est avantageux pour la pensée." ]}
    ],
    retenir: [
      "Distinctions : vérité (propriété de la pensée / du discours) ≠ réalité (des choses) ; le vrai ≠ l'utile (contre James) ; vérité ≠ certitude.",
      "Citations : « adéquation de la chose et de l'intellect » (Thomas d'Aquin) ; « les vérités sont des illusions… » (Nietzsche) ; « l'homme est la mesure de toute chose » (Protagoras).",
      "Accroches : les « faits alternatifs » / fake news ; Matrix."
    ]
  });

  set("raison", {
    intro: "La raison (ratio, logos) est la faculté de penser logiquement, d'enchaîner les idées et d'atteindre le vrai ; Kant distingue la raison théorique (connaître ce qui est) de la raison pratique (déterminer ce que l'on doit faire). Problème : la raison est-elle toute-puissante, capable de tout connaître et de tout fonder, ou est-elle au contraire limitée, faillible, voire au service des passions ?",
    parties: [
      { t: "I. La raison saisit le réel (🔵)", p: [
        "Hegel : « ce qui est rationnel est réel, et ce qui est réel est rationnel » — le réel est l'effectuation progressive de la raison dans l'histoire.",
        "Leibniz : « principe de raison suffisante » — rien n'arrive sans une raison qui fasse qu'il en soit ainsi et non autrement.",
        "Kant : la raison est universelle et législatrice, mais elle s'égare en illusions dès qu'elle prétend connaître au-delà de l'expérience (métaphysique)." ]},
      { t: "II. La raison est limitée et servante (🔴)", p: [
        "Hume : « la raison est, et ne peut être, que l'esclave des passions » — elle calcule les moyens, mais ce sont les passions (les désirs) qui fixent les fins de l'action.",
        "Pascal : « le cœur a ses raisons que la raison ne connaît point » — les premiers principes se sentent (par intuition), ils ne se démontrent pas. Spinoza : les hommes sont souvent menés par le « désir aveugle »." ]},
      { t: "III. Raison et intuition se complètent (🟣)", p: [
        "Poincaré : « on prouve par la logique, on trouve par l'intuition » — la découverte mêle les deux.",
        "Kant : « des intuitions sans concepts sont aveugles, des concepts sans intuitions sont vides » — connaître, c'est unir la sensibilité et l'entendement." ]}
    ],
    retenir: [
      "Distinctions : raison / raisonnable ; raison théorique / pratique (Kant) ; intuition / déduction ; raison / cœur (Pascal).",
      "Citations : « ce qui est rationnel est réel » (Hegel) ; « la raison est l'esclave des passions » (Hume) ; « le cœur a ses raisons… » (Pascal).",
      "Accroches : « le sommeil de la raison engendre des monstres » (Goya) ; les théories du complot."
    ]
  });

})();
