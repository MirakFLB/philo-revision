/* =====================================================================
   Philosophie — COURS RÉDIGÉ par notion (intro problématisée + I/II/III
   argumentés + conclusion + à retenir). Plan dialectique calqué sur le
   code couleur : I = thèse 🔵, II = antithèse 🔴, III = dépassement 🟣.
   window.PHILO_CONTENT[id].lecon — affiché dans l'onglet « Le cœur ».
   ===================================================================== */
(function () {
  var C = window.PHILO_CONTENT; if (!C) return;
  function set(id, lecon){ if (C[id]) C[id].lecon = lecon; }

  set("devoir", {
    intro: "Le devoir désigne l'obligation morale : ce que je dois faire, mais que je garde toujours le pouvoir de ne pas faire. C'est ce qui le distingue de la contrainte — une force extérieure subie, sans choix possible, comme celle du voleur qui me menace — et de la nécessité, l'inévitable auquel nul ne se soustrait (vieillir, mourir). Le devoir, lui, « oblige sans contraindre » : il commande, mais laisse à ma volonté le soin d'obéir. Il suppose donc et révèle ma liberté ; seul un être libre peut avoir des devoirs. Mais d'où ce devoir tire-t-il son autorité ? S'il vient de moi-même, qui ordonne et obéis à la fois, comment m'oblige-t-il vraiment ? Et s'il vient du dehors — société, éducation, religion —, n'est-il pas une contrainte déguisée que l'on m'a appris à prendre pour de la moralité ?",
    parties: [
      { t: "I. Le devoir est une exigence de la raison, que je peux m'imposer (🔵)",
        sub: [
          { t: "A. Agir PAR devoir, et non par intérêt (Kant)", p: [
            "Pour Kant, toute la valeur morale d'une action tient à son intention, non à ses effets. Il distingue donc deux conduites en apparence identiques : agir CONFORMÉMENT au devoir, c'est faire ce que la morale prescrit mais par intérêt ou inclination (le commerçant honnête parce que c'est bon pour ses affaires) ; agir PAR devoir, c'est accomplir la même action par pur respect de la loi morale, sans aucun bénéfice. Seule la seconde a une valeur morale, car seule elle manifeste une volonté bonne.",
            "Comment savoir ce que le devoir commande ? Par l'impératif catégorique, commandement inconditionnel (à la différence de l'impératif hypothétique « si tu veux X, fais Y »). Sa formule : « agis seulement d'après la maxime dont tu peux vouloir qu'elle devienne une loi universelle ». C'est un critère formel : avant d'agir, je me demande si je pourrais vouloir que tous agissent comme moi. Le mensonge échoue au test et se révèle immoral en soi — il faut tenir parole « quoi qu'il m'en coûte »." ] },
          { t: "B. Une loi universelle, parce que rationnelle", p: [
            "Cette exigence n'est pas arbitraire : elle vient de la raison, que partagent tous les hommes. C'est pourquoi le devoir vaut universellement, et non selon les coutumes de chacun. Rousseau parle d'une conscience, « principe inné de justice et de vertu », qui fait que même le scélérat sait, au fond, le bien. Aristote insiste sur l'habitude : on devient juste à force d'actes justes, jusqu'à ce que la vertu devienne une « seconde nature »." ] }
        ],
        trans: "Mais ce beau tableau d'un devoir rationnel et librement assumé résiste-t-il à l'examen ? Et si ce que nous prenons pour la voix de la raison n'était que la voix, intériorisée, de la société ?" },
      { t: "II. Mais le devoir est peut-être une contrainte intériorisée (🔴)",
        sub: [
          { t: "A. La généalogie du soupçon (Nietzsche, Freud)", p: [
            "Nietzsche retourne la question : au lieu de demander ce que le devoir commande, il demande d'où il vient — c'est la généalogie de la morale. Sa thèse : la morale du « Tu dois », faite d'humilité et de culpabilité, est née du ressentiment des faibles contre les forts. Incapables d'agir, les faibles ont érigé leur impuissance en « vertu » et condamné la force comme un « mal ». À cette morale du troupeau, Nietzsche oppose le « Je veux » de l'homme libre, qui crée ses propres valeurs.",
            "Freud donne une base psychique à ce soupçon. Le sens du devoir ne vient pas d'un sens moral inné, mais du Surmoi : l'instance qui intériorise dès l'enfance les interdits des parents puis de la société. La culpabilité que nous éprouvons, parfois sans aucune faute réelle, est la voix de ce Surmoi — signe que la conscience morale est un produit de notre histoire, non une donnée de la raison pure." ] },
          { t: "B. La pression sociale et la servitude volontaire", p: [
            "Bergson prolonge l'idée au plan social : une grande part de ce que nous appelons « morale » n'est que la pression du groupe sur l'individu, comparable à l'instinct chez l'animal — c'est la « morale close », qui assure la cohésion de la société et qu'on suit sans la penser. La Boétie avait nommé cette obéissance la « servitude volontaire » : l'étonnant n'est pas que les hommes obéissent, mais qu'ils consentent, et finissent par aimer, ce qui les soumet." ] }
        ],
        trans: "De deux choses l'une : ou le devoir vient de moi seul, et l'on ne voit pas comment il m'obligerait vraiment ; ou il vient des autres, et il n'est qu'une contrainte déguisée. Faut-il conclure qu'il est une illusion ? À moins que cette alternative ne soit mal posée." },
      { t: "III. Le devoir comme décentrement : un « deux-voir » (🟣)", p: [
        "Et si la véritable autonomie ne consistait pas à s'enfermer dans son propre « Je veux », mais à se décentrer ? Le mot « devoir » peut s'entendre comme un « deux-voir » : il m'oblige à voir au-delà de moi. Kant l'avait pressenti en décrivant la conscience morale comme un tribunal intérieur où je suis à la fois l'accusé et le juge : déjà, je me dédouble, je me tiens face à moi-même.",
        "Levinas va plus loin : ce qui m'oblige réellement, c'est le visage d'autrui, sa fragilité, qui me commande « tu ne tueras point » avant tout contrat. Le devoir naît de la rencontre, non du calcul. Bergson, enfin, montre qu'au-delà de la morale close existe une « morale ouverte », celle des héros et des saints, qui n'impose aucune règle mais entraîne par l'amour : non plus « tu dois », mais « regarde, et suis-moi »." ] }
    ],
    conclusion: "Le devoir n'est donc ni une simple contrainte sociale ni un pur commandement que je m'adresse à moi seul : il prend sens dans le rapport à ce qui me dépasse — la loi morale, et surtout autrui. C'est pourquoi le plus grand danger n'est pas de désobéir, mais d'obéir sans penser : la « banalité du mal » (Arendt, à propos du procès Eichmann) montre qu'on peut commettre le pire « par devoir », par pure obéissance, faute d'avoir jugé par soi-même. Le vrai devoir exige donc parfois de désobéir, au nom d'une exigence plus haute.",
    retenir: [
      "Distinctions : devoir / contrainte / nécessité ; agir PAR devoir / CONFORMÉMENT au devoir ; morale / éthique ; légalité / légitimité.",
      "Citations : impératif catégorique = « universalise ta maxime » (Kant) ; « Tu dois » vs « Je veux » (Nietzsche) ; « le Moi/le Surmoi » (Freud).",
      "Accroches : Javert (Les Misérables) ; la banalité du mal (Arendt, Eichmann).",
      "Sujets-types : « Qui peut me dire ce que je dois faire ? » · « Y a-t-il des limites à faire son devoir ? »"
    ]
  });

  set("liberte", {
    intro: "Être libre, c'est se déterminer soi-même : la liberté, au sens du libre arbitre, est ce pouvoir de la volonté de choisir sans y être forcée. Elle s'oppose au déterminisme, principe selon lequel tout événement — y compris nos décisions — est l'effet nécessaire de causes antérieures. Or nous avons le sentiment vif de notre liberté : nous délibérons, nous hésitons, nous aurions « pu faire autrement ». Mais ce sentiment prouve-t-il quelque chose ? Peut-être n'est-il qu'une illusion née de l'ignorance des causes qui nous font agir. Tout le problème est là : je SENS que je suis libre, mais puis-je le SAVOIR, en faire l'expérience certaine ?",
    parties: [
      { t: "I. Oui, je fais l'expérience de ma liberté (🔵)",
        sub: [
          { t: "A. La liberté révélée par le doute (Descartes)", p: [
            "Descartes fait du libre arbitre la marque de l'homme, ce qui le rapproche de Dieu. Le doute volontaire le prouve : je peux suspendre mon jugement, refuser mon assentiment, même à ce qui semble évident. Ma volonté est sans limites — « infinie ». Toutefois, la liberté n'est pas l'indifférence : choisir à pile ou face, sans raison, est le plus bas degré de la liberté. Elle est au contraire à son sommet quand, voyant clairement le vrai et le bien, je m'y porte sans hésiter : bien voir pour bien choisir." ] },
          { t: "B. La liberté comme condition et comme projet (stoïciens, Sartre)", p: [
            "Les stoïciens (Épictète) enseignent à distinguer ce qui dépend de nous (nos jugements, nos désirs) de ce qui n'en dépend pas (les événements, le corps, la réputation) : la liberté intérieure consiste à ne vouloir que le premier, ce qui procure l'ataraxie.",
            "Sartre radicalise : l'homme n'a pas de nature donnée, « l'existence précède l'essence ». Il n'est rien d'autre que ce qu'il se fait : il est « condamné à être libre », et même ne pas choisir est encore un choix. Se réfugier derrière son rôle, son passé ou son « caractère » pour fuir cette responsabilité, c'est la « mauvaise foi »." ] }
        ],
        trans: "Pourtant, ce sentiment de liberté n'est-il pas précisément ce qu'éprouverait un être entièrement déterminé mais ignorant de ses causes ?" },
      { t: "II. Mais cette liberté est peut-être une illusion (🔴)",
        sub: [
          { t: "A. L'illusion du libre arbitre (Spinoza)", p: [
            "Spinoza prend l'image d'une pierre lancée : si elle était consciente, elle « se croirait libre » de poursuivre son mouvement, ignorant la main qui l'a jetée. Il en va de même pour nous : nous sommes conscients de nos désirs, mais ignorants des causes qui les produisent. Le sentiment de liberté n'est donc que de l'ignorance retournée en illusion : se SENTIR libre n'est pas ÊTRE libre." ] },
          { t: "B. Les déterminismes et l'inconnaissable (Rousseau, Marx, Freud, Kant)", p: [
            "Les sciences humaines confirment ce soupçon : Marx montre les déterminismes socio-économiques (nos idées dépendent de notre classe), Freud l'inconscient (le Moi « n'est pas maître dans sa propre maison »). Rousseau résume : « l'homme est né libre, et partout il est dans les fers ».",
            "Kant tire la leçon décisive : la liberté n'est pas un objet d'expérience, car toute expérience suppose la causalité, alors que la liberté est spontanéité. On ne peut donc pas la connaître ; elle reste une « idée transcendantale » que la raison pense sans jamais la prouver." ] }
        ],
        trans: "Faut-il alors renoncer à la liberté ? Ce serait aller trop vite : peut-être confond-on liberté et absence de toute limite." },
      { t: "III. La liberté véritable se conquiert dans la limite (🟣)", p: [
        "Loin de s'opposer à la contrainte, la liberté la suppose. Stravinsky le dit de la création : « ma liberté est d'autant plus grande que je limite mon champ d'action » — c'est la règle, la contrainte de la forme, qui rend l'œuvre libre possible ; sans elle, le caprice, pas la liberté. De même Spinoza : connaître ses déterminismes, c'est cesser de les subir passivement pour commencer à agir — passer de la passion à l'action.",
        "Plus encore, c'est l'expérience de l'obligation qui me révèle libre. Kant : si je me sens tenu par le « tu dois », c'est que je me sais capable d'y obéir (« tu dois donc tu peux »). Levinas : le visage d'autrui m'oblige, et cette obligation me constitue comme sujet libre et responsable. Être libre, ce n'est donc pas l'absence de contrainte, mais le rapport lucide et choisi à elle." ] }
    ],
    conclusion: "L'expérience immédiate de la liberté est trompeuse, mais la liberté n'en est pas pour autant une illusion : elle n'est pas un fait que l'on constate, c'est une conquête. On ne naît pas libre, on le devient — en connaissant ses déterminismes, en assumant ses choix, en répondant de l'obligation. Loin de la chimère d'un pouvoir sans entrave, la liberté réelle est ce travail par lequel un être limité se rend, peu à peu, l'auteur de sa propre vie.",
    retenir: [
      "Distinctions : libre arbitre / déterminisme ; liberté d'indifférence / éclairée ; liberté naturelle / civile / morale (Rousseau) ; sentir libre ≠ être libre.",
      "Citations : « condamné à être libre » (Sartre) ; « né libre, partout dans les fers » (Rousseau) ; la pierre de Spinoza ; « tu dois donc tu peux » (Kant).",
      "Accroches : Matrix (la pilule) ; le Grand Inquisiteur (Dostoïevski) ; l'expérience de Milgram.",
      "Sujet-type : « Peut-on faire l'expérience de la liberté ? »"
    ]
  });

  set("bonheur", {
    intro: "Le bonheur est un état de satisfaction complète et durable, une plénitude de l'existence. Son étymologie — « bon heur », la bonne fortune — rappelle qu'il dépend en partie de la chance, donc qu'il échappe pour une part à notre maîtrise. Il se distingue du plaisir (sensation ponctuelle) et de la joie (intense mais passagère) par sa durée. Le problème vient du désir : vivre, c'est désirer, et désirer, c'est manquer, donc souffrir. Comment l'être de désir qu'est l'homme pourrait-il atteindre le repos qu'est le bonheur ? Faut-il combler tous ses désirs, les trier, ou renoncer à vouloir les satisfaire ?",
    parties: [
      { t: "I. Le bonheur s'atteint par la sagesse et la maîtrise des désirs (🔵)",
        sub: [
          { t: "A. L'arithmétique des désirs (Épicure)", p: [
            "Épicure ne condamne pas le plaisir, mais apprend à le choisir. Il classe les désirs : les désirs vains (richesse, gloire, pouvoir), sans limite donc sources de tourment ; les désirs naturels mais non nécessaires (les plaisirs raffinés) ; et les désirs naturels et nécessaires (manger, boire, l'amitié, la sécurité), seuls indispensables. En ne cultivant que ces derniers, on atteint l'ataraxie (absence de trouble de l'âme) et l'aponie (absence de douleur du corps). Le bonheur n'est pas la jouissance débridée, mais la paix." ] },
          { t: "B. Changer ses désirs plutôt que le monde (Descartes, Spinoza)", p: [
            "Descartes en fait une règle de sa « morale par provision » : « tâcher toujours plutôt à me vaincre que la fortune, et à changer mes désirs plutôt que l'ordre du monde » — ne vouloir que ce qui dépend de moi épargne bien des frustrations.",
            "Spinoza opère un renversement célèbre : on ne réprime pas ses passions parce qu'on est heureux par devoir, mais on devient capable de les maîtriser PARCE QU'on éprouve déjà une joie supérieure — la béatitude, cet « amour intellectuel de Dieu » qu'est la connaissance. La vertu ne précède pas le bonheur : elle en découle." ] }
        ],
        trans: "Mais cette sagesse qui prêche la modération n'est-elle pas une façon de se résigner ? Le bonheur n'est-il pas, au contraire, dans l'intensité et la satisfaction de tous nos désirs ?" },
      { t: "II. Mais le bonheur comme satisfaction est un piège (🔴)",
        sub: [
          { t: "A. Tout désirer, ou le tonneau percé (Calliclès / Socrate)", p: [
            "Calliclès, dans le Gorgias, défend la thèse inverse : la vie heureuse, c'est l'intempérance, le fait de laisser ses désirs « grossir autant que possible » et de pouvoir les satisfaire. Socrate lui oppose l'image du tonneau percé : l'homme aux désirs sans mesure passe sa vie à remplir un récipient troué ; loin d'être comblé, il est au supplice. Le désir illimité ne mène pas au bonheur mais à l'inquiétude perpétuelle." ] },
          { t: "B. Le bonheur, peut-être impossible (Schopenhauer, Freud)", p: [
            "Schopenhauer radicalise le pessimisme : la vie « oscille comme un pendule entre la souffrance et l'ennui ». Tant que le désir n'est pas satisfait, je souffre du manque ; une fois satisfait, vient l'ennui, jusqu'au désir suivant. Le bonheur durable serait donc une chimère.",
            "Freud, dans Malaise dans la civilisation, montre que la vie en société exige un renoncement permanent aux pulsions : la civilisation se paie d'un sentiment de culpabilité et d'insatisfaction. Le « principe de plaisir » se heurte au « principe de réalité »." ] }
        ],
        trans: "Si combler ses désirs est impossible et y renoncer une mutilation, peut-être l'erreur est-elle de croire qu'on peut, et qu'on doit, « faire » son bonheur." },
      { t: "III. Renoncer à « faire » son bonheur (🟣)", p: [
        "Kant refuse de faire du bonheur le fondement de la morale, car c'est un « idéal de l'imagination », non de la raison : indéterminé, il varie d'un homme à l'autre, et le programmer sûrement exigerait une omniscience que nous n'avons pas. Mieux vaut donc ne pas chercher à être heureux, mais à se rendre DIGNE de l'être, en agissant par devoir. C'est aussi pourquoi le bonheur n'est pas l'affaire de l'État : un pouvoir qui prétendrait imposer le bonheur de ses sujets serait, dit Kant, « le pire despotisme ».",
        "Rousseau ajoute une nuance décisive : « malheur à qui n'a plus rien à désirer ». L'insatisfaction du désir n'est pas seulement une souffrance, c'est ce qui maintient la vie vivante et ouverte. Peut-être, alors, le bonheur ne se cherche-t-il pas de front : il survient « par surcroît », à l'improviste (Proust), quand on cesse de le poursuivre." ] }
    ],
    conclusion: "Le bonheur n'est ni dans la satisfaction de tous les désirs (le tonneau percé), ni dans leur extinction (une vie morte), mais dans un certain rapport au désir : savoir le trier, le connaître, parfois renoncer à le combler. Reste l'humilité de l'étymologie : « bon heur » rappelle que le bonheur garde une part de chance et d'imprévu. Peut-être la sagesse consiste-t-elle moins à le conquérir qu'à se rendre capable de l'accueillir.",
    retenir: [
      "Distinctions : plaisir / bonheur / joie ; eudémonisme (but = bonheur) / hédonisme (but = plaisir) ; les 3 catégories de désirs (Épicure).",
      "Citations : pendule souffrance / ennui (Schopenhauer) ; « changer ses désirs plutôt que l'ordre du monde » (Descartes) ; amor fati (Nietzsche).",
      "Accroches : Dom Juan (le désir qui fuit en avant) ; l'« happycratie ».",
      "Sujets-types : satisfaire tous ses désirs ? · le bonheur est-il l'affaire de l'État ? · qu'attend-on pour être heureux ?"
    ]
  });

  set("justice", {
    intro: "Est juste (du latin jus, le droit) ce qui est conforme au droit et à l'égalité. Mais deux distinctions compliquent aussitôt la notion : le légal (conforme à la loi en vigueur) n'est pas toujours le légitime (conforme à ce qui est vraiment juste) — une loi peut être inique ; et le droit positif (l'ensemble des lois effectivement posées par les hommes) ne coïncide pas forcément avec un droit naturel (des principes universels, valables partout et toujours). D'où le problème : existe-t-il une norme objective et universelle du juste, que la raison pourrait connaître, ou bien le juste n'est-il qu'une convention, variable selon les époques et masquant des rapports de force ?",
    parties: [
      { t: "I. Il existe une norme objective du juste (🔵)",
        sub: [
          { t: "A. Une justice fondée en raison ou en nature", p: [
            "Rousseau affirme l'existence d'une conscience, « principe inné de justice », qui fait sentir à tous, même au méchant, ce qui est juste. Aristote invoque une loi commune non écrite, supérieure aux lois de la cité : c'est en son nom qu'Antigone, chez Sophocle, enterre son frère malgré l'interdit de Créon. Kant, lui, fonde le droit sur la raison : est juste ce dont on peut vouloir l'universalisation sans contradiction.",
            "Dans tous les cas, la justice n'est pas affaire de force ou de goût : elle a un fondement que la raison ou la conscience peuvent reconnaître." ] },
          { t: "B. Les trois formes de justice (Aristote)", p: [
            "Aristote distingue la justice commutative (l'égalité arithmétique dans les échanges : un prix juste, une réparation exacte), la justice distributive (la répartition des biens et des honneurs selon le mérite de chacun, donc proportionnelle, non identique pour tous) et la justice corrective ou pénale (rétablir l'équilibre rompu par une faute). Être juste, ce n'est donc pas toujours traiter tout le monde de la même façon." ] }
        ],
        trans: "Mais comment expliquer alors que ce qui passe pour juste change d'un pays et d'une époque à l'autre ? Cette variabilité ne trahit-elle pas que le juste n'est qu'une convention ?" },
      { t: "II. Mais le juste n'est peut-être qu'une convention et un rapport de force (🔴)",
        sub: [
          { t: "A. Sans loi, pas de justice (Hobbes, Gygès)", p: [
            "Pour Hobbes, dans l'état de nature, « là où il n'y a pas de loi, il n'y a pas d'injustice » : le juste et l'injuste n'existent qu'à partir du moment où un pouvoir commun pose des lois. La justice est donc une création de la convention, non un fait de nature.",
            "Glaucon, dans La République, raconte le mythe de l'anneau de Gygès : un berger qui devient invisible commet aussitôt les pires forfaits. Sa leçon : « nul n'est juste volontairement » ; on respecte la justice par crainte du châtiment, non par vertu. Ôtez la sanction, l'injustice réapparaît." ] },
          { t: "B. Le triomphe de la force (Pascal)", p: [
            "Pascal pousse le constat : « ne pouvant faire que ce qui est juste fût fort, on a fait que ce qui est fort fût juste ». Faute de pouvoir imposer le juste, les hommes ont décrété juste ce qui s'impose par la force. Et il ajoute, ironique : « vérité au-deçà des Pyrénées, erreur au-delà » — ce qui est tenu pour juste d'un côté de la frontière est crime de l'autre. Simple convention, donc, et relative." ] }
        ],
        trans: "Faut-il en conclure que toute idée de justice est vaine ? Ou bien peut-on, sans nier qu'elle soit conventionnelle, rendre la convention elle-même juste ?" },
      { t: "III. Rendre les conventions justes : l'équité (🟣)", p: [
        "Une loi juste dans son principe peut devenir injuste dans son application, car sa généralité ne prévoit pas tous les cas. D'où la nécessité de l'équité : Aristote la compare à la « règle de plomb » des architectes de Lesbos, souple, qui épouse les contours de la pierre au lieu de la mesurer rigidement. L'équité corrige la loi au nom de l'esprit qui l'animait.",
        "Rawls propose une procédure pour fonder des principes vraiment justes : derrière un « voile d'ignorance » où chacun ignorerait sa future place sociale (riche ou pauvre, doué ou non), des individus rationnels choisiraient des règles équitables — dont le « principe de différence » : les inégalités ne sont justes que si elles profitent aussi aux plus défavorisés. La justice devient alors « équité ». Montesquieu, enfin, montre que sans séparation des pouvoirs, aucune justice n'est garantie contre l'arbitraire." ] }
    ],
    conclusion: "Le juste n'est ni purement naturel ni purement conventionnel : il est une exigence de la raison qui doit s'incarner dans des lois et des institutions, toujours perfectibles. C'est pourquoi, comme le suggère Camus, la vraie question n'est peut-être pas de SAVOIR théoriquement ce qui est juste, mais d'ÊTRE juste — de se révolter contre l'injustice concrète. La justice est moins un état acquis qu'une tâche jamais achevée.",
    retenir: [
      "Distinctions : légal / légitime ; droit positif / naturel ; égalité / équité ; commutative / distributive / corrective.",
      "Citations : « nul n'est juste volontairement » (Gygès) ; « ce qui est fort soit juste » (Pascal) ; « voile d'ignorance », « principe de différence » (Rawls).",
      "Accroches : Antigone ; l'anneau de Gygès ; le dilemme du tramway ; la désobéissance civile (Thoreau).",
      "Sujets-types : « Comment savoir ce qui est juste ? » · « Le juste n'est-il qu'une convention ? » · « Peut-on se faire justice soi-même ? »"
    ]
  });

  set("langage", {
    intro: "Le langage (du grec logos, qui signifie à la fois la raison et la parole) est la faculté de communiquer et de penser au moyen de signes. On le distingue de la langue (le système particulier d'une communauté : le français, l'arabe…) et de la parole (l'usage concret qu'en fait un individu). Spontanément, on voit dans le langage un simple outil : un instrument extérieur, conventionnel, qui sert à transmettre des pensées déjà formées. Mais cet outil est-il fidèle ? Ne trahit-il pas autant qu'il exprime ? Et surtout : la pensée existe-t-elle vraiment avant les mots, ou bien le langage lui est-il consubstantiel, au point de la rendre possible ?",
    parties: [
      { t: "I. Le langage n'est pas un simple outil : il est lié à la pensée (🔵)",
        sub: [
          { t: "A. On pense dans les mots (Hegel, Saussure)", p: [
            "Hegel renverse l'idée commune : « c'est dans les mots que nous pensons ». Ce que nous croyons « ineffable » — un sentiment trop profond pour être dit — n'est souvent que de la pensée encore confuse, qui n'a pas trouvé ses mots. Loin de trahir la pensée, le mot l'achève. Saussure le confirme : sans la langue, la pensée n'est qu'une « masse amorphe », un nuage indistinct ; c'est le système des signes qui la découpe et lui donne forme." ] },
          { t: "B. Le langage, propre de l'homme (Benveniste, Descartes)", p: [
            "Le langage humain n'est pas un simple code de signaux comme la « danse » des abeilles : celle-ci est fermée, fixe, limitée à un contenu (la source de nourriture). Le langage humain, lui, est créatif (on forme des phrases inédites), il permet le dialogue, il porte sur l'absent et l'abstrait (Benveniste). Pour Descartes déjà, c'est la capacité de « répondre à propos », et non de répéter, qui distingue l'homme de l'animal-machine." ] }
        ],
        trans: "Pourtant, qui n'a jamais éprouvé l'impuissance des mots à dire ce qu'il ressent vraiment ? Le langage ne serait-il pas, après tout, un instrument grossier et même dangereux ?" },
      { t: "II. Mais le langage est un outil réducteur et un pouvoir (🔴)",
        sub: [
          { t: "A. Le mot trahit le singulier (Bergson)", p: [
            "Bergson dénonce le « mot-étiquette » : le mot, parce qu'il est commun à tous et désigne le général, ne retient de mon expérience que ce qu'elle a d'utile et de partageable, et écrase ce qu'elle a d'unique. « La pensée demeure incommensurable avec le langage. » Dire « j'ai peur » range mon émotion dans une case et manque son grain singulier — d'où le rôle de l'art et de la poésie, qui tordent les mots pour dire enfin l'indicible." ] },
          { t: "B. Le langage comme rapport de pouvoir (Barthes, Bourdieu)", p: [
            "Le langage n'est pas neutre. Barthes provoque : « la langue est fasciste » — non parce qu'elle interdirait de parler, mais parce qu'elle OBLIGE à dire selon ses catégories (genres, temps, hiérarchies). Bourdieu montre que la « langue légitime » est un capital inégalement réparti : la maîtrise du « bien parler » reproduit les rapports de classe. Parler, c'est aussi exercer ou subir un pouvoir." ] }
        ],
        trans: "Le langage serait-il donc condamné à trahir et à dominer ? Ce serait oublier que c'est aussi par lui — et même par ses ratés — que nous nous relions les uns aux autres." },
      { t: "III. Le langage nous relie, jusque dans ses défaillances (🟣)", p: [
        "Freud montre que même le langage qui « rate » dit quelque chose : le lapsus, l'acte manqué, trahissent un désir inconscient ; la défaillance est elle-même parlante et révèle un fond commun à tous les humains. Levinas souligne que le simple fait d'adresser la parole à autrui « institue le rapport moral d'égalité » : avant tout contenu, parler, c'est reconnaître l'autre.",
        "Ricœur ajoute que traduire, malgré l'impossibilité d'une équivalence parfaite, est une « hospitalité langagière » : on accueille la langue de l'autre chez soi. Communiquer n'est donc pas mécaniquement « mettre en commun » des informations, comme le ferait une machine : c'est, à travers l'effort, le malentendu surmonté et le dialogue, faire surgir un sens partagé — ce qu'aucune intelligence artificielle ne réalise vraiment." ] }
    ],
    conclusion: "Le langage est bien plus qu'un outil de communication : il est le milieu même de la pensée et du lien social. Réducteur quand il fige le singulier, instrument de pouvoir quand il sert la domination, il reste pourtant ce par quoi un sujet en rejoint un autre. Sa grandeur tient peut-être à sa fragilité même : c'est parce qu'il ne dit jamais tout que nous continuons de nous parler.",
    retenir: [
      "Distinctions : langage / langue / parole ; signifiant / signifié (arbitraire du signe) ; convaincre (raison) / persuader (passions) ; communiquer ≠ mettre en commun.",
      "Citations : « la langue est fasciste » (Barthes) ; « les limites de mon langage signifient les limites de mon monde » (Wittgenstein) ; « mot-étiquette » (Bergson).",
      "Accroches : 1984 / la novlangue ; #MeToo (« libérer la parole »).",
      "Sujet-type : « Le langage n'est-il qu'un outil de communication ? »"
    ]
  });

  set("etat", {
    intro: "L'État (du latin stare, se tenir debout) est l'ensemble des institutions durables et centralisées qui organisent une société sur un territoire. Sa définition de référence est celle de Max Weber : l'État détient « le monopole de la violence physique légitime » — lui seul a le droit de contraindre par la force (police, armée, justice, impôt). Mais ce pouvoir immense est ambigu : l'État protège-t-il les individus, en garantissant leur sécurité et leur liberté, ou bien les opprime-t-il, en les soumettant à sa domination ? Et sa légalité — le fait qu'il agisse selon ses propres lois — suffit-elle à le rendre légitime ?",
    parties: [
      { t: "I. L'État libère et réalise la liberté (🔵)", p: [
        "Pour Aristote, l'homme est un « animal politique » (zoon politikon) : il ne se réalise pleinement que dans la cité, qui lui permet d'accéder au langage, à la justice et à la vie bonne. Hors de la cité, dit-il, on est « ou une bête, ou un dieu ».",
        "Hegel va jusqu'à voir dans l'État « la réalité de la liberté » : en s'élevant au-dessus des intérêts particuliers, l'État incarne l'universel et permet à la liberté individuelle de devenir effective, et non plus abstraite. Spinoza, plus sobrement, affirme que « le but de l'État, c'est la liberté » : il existe pour que les hommes vivent en sécurité et puissent penser librement." ],
        trans: "Mais cet État qui se dit au service de la liberté n'est-il pas, en réalité, l'instrument d'une domination ?" },
      { t: "II. L'État opprime et domine (🔴)", p: [
        "Marx dénonce la prétendue neutralité de l'État : il n'est que « le comité qui gère les affaires communes de la classe bourgeoise », un instrument de domination voué à « dépérir » dans une société sans classes. Les anarchistes (Proudhon, Bakounine) refusent toute autorité coercitive — « ni Dieu ni maître » — et visent l'ordre sans le pouvoir.",
        "Nietzsche dénonce « le plus froid des monstres froids », qui ment en se faisant passer pour le peuple. Et Foucault montre que le pouvoir moderne ne se contente pas de punir : par le panoptique et le « biopouvoir », il surveille, normalise et discipline les corps eux-mêmes — ce qu'Orwell pousse à la caricature avec Big Brother." ],
        trans: "Faut-il alors abolir l'État, ou bien chercher à le rendre légitime en l'encadrant ?" },
      { t: "III. Le contrat et la séparation des pouvoirs (🟣)", p: [
        "Les théoriciens du contrat montrent que l'État, même contraignant, peut être légitime s'il résulte d'un accord. Hobbes part de l'état de nature, « guerre de tous contre tous » où « l'homme est un loup pour l'homme » : par peur de la mort violente, les individus renoncent à leur force au profit d'un souverain absolu, le Léviathan, qui garantit la paix. Rousseau corrige : le contrat social ne doit pas aliéner la liberté mais la fonder — en obéissant à la « volonté générale », le citoyen n'obéit qu'à lui-même.",
        "Reste à empêcher l'État de dégénérer en despotisme. C'est l'apport de Montesquieu : « il faut que, par la disposition des choses, le pouvoir arrête le pouvoir » — d'où la séparation des pouvoirs exécutif, législatif et judiciaire. Un État légitime n'est pas un État faible, mais un État limité." ] }
    ],
    conclusion: "L'État n'est ni un pur bienfaiteur ni un pur oppresseur : tout dépend de sa forme. Détenteur de la violence légitime, il peut aussi bien protéger qu'écraser. Sa légitimité ne tient donc pas à sa puissance, mais à son fondement (le consentement des citoyens) et à ses limites (le droit, les contre-pouvoirs). La question politique n'est pas « faut-il l'État ? », mais « quel État voulons-nous ? ».",
    retenir: [
      "Distinctions : État / gouvernement / nation ; légalité / légitimité ; État-providence / État minimal.",
      "Citations : « monopole de la violence physique légitime » (Weber) ; « le plus froid des monstres froids » (Nietzsche) ; « l'homme est un loup pour l'homme » (Hobbes) ; « il faut que le pouvoir arrête le pouvoir » (Montesquieu).",
      "Accroches : le frontispice du Léviathan ; 1984 ; le panoptique (Foucault)."
    ]
  });

  set("nature", {
    intro: "La nature désigne d'abord tout ce qui existe et se développe sans intervention de l'homme — par opposition à la culture, qui est l'ensemble de ce que l'homme produit, transmet et ajoute au monde. Mais le mot a un sens plus vaste : chez Spinoza, « Deus sive Natura » (Dieu, c'est-à-dire la Nature) désigne l'être total, la substance infinie. Le problème est notre rapport à elle : devons-nous nous en rendre, selon le mot de Descartes, « comme maîtres et possesseurs », ou bien « vivre selon » elle comme le veulent les stoïciens ? Cela suppose de trancher : la nature est-elle un ordre finalisé, sage et peut-être divin, ou une matière aveugle, sans but, livrée à notre usage ?",
    parties: [
      { t: "I. La nature est un ordre finalisé, voire divin (🔵)", p: [
        "Pour Aristote, « la nature ne fait rien en vain » : chaque être tend vers une fin (telos) inscrite en lui — le gland vers le chêne, l'œil vers la vision. La nature est un cosmos, un tout ordonné et harmonieux. Les stoïciens en tirent une morale : puisque la nature est régie par une raison universelle (le Logos), la sagesse consiste à « vivre selon la nature », c'est-à-dire à accorder sa propre raison à l'ordre du monde.",
        "Spinoza identifie Dieu et la nature : « Deus sive Natura ». La nature n'est pas une création extérieure à Dieu, elle est Dieu même, substance infinie et nécessaire. La respecter, la comprendre, c'est accéder à la béatitude." ],
        trans: "Mais cette vision d'une nature sage et finalisée n'est-elle pas une illusion rassurante que la science moderne a dissipée ?" },
      { t: "II. La nature est une matière sans finalité, offerte à la maîtrise (🔴)", p: [
        "Pour les atomistes (Démocrite, Épicure, Lucrèce), la nature n'est qu'un assemblage d'atomes et de vide, sans dessein ni providence : « la nature n'a pas été faite pour nous ». Cette vision libère l'homme de la crainte des dieux, mais le laisse seul face à un monde indifférent.",
        "Descartes en tire le programme de la modernité : la nature est une grande machine, dont les lois sont mathématisables. Comprendre ces lois permet d'agir sur elles et de se rendre « comme maître et possesseur de la nature » — pour se libérer du besoin, soigner les maladies, prolonger la vie. La nature n'est plus un modèle à imiter, mais un matériau à transformer." ],
        trans: "Mais cette opposition entre une nature à suivre et une nature à dominer ne repose-t-elle pas sur un partage trop simple entre la nature et l'homme ?" },
      { t: "III. Dépasser le partage nature / culture (🟣)", p: [
        "Lévi-Strauss observe que l'universel relève de la nature et la règle de la culture ; mais la prohibition de l'inceste, à la fois universelle et instituée, brouille la frontière. Descola, dans Par-delà nature et culture, montre que ce grand partage — l'homme d'un côté, la nature de l'autre — est une particularité de l'Occident moderne, et non une évidence universelle : d'autres cultures peuplent le monde d'êtres qui ne sont ni tout à fait humains ni tout à fait choses.",
        "Cette remise en cause a une portée écologique : si l'homme n'est pas hors de la nature mais en fait partie, la dominer revient à se détruire soi-même. D'où l'idée de responsabilité (Jonas) et le biomimétisme, qui ne cherche plus à soumettre la nature mais à s'en inspirer." ] }
    ],
    conclusion: "La nature n'est ni un simple décor sacré à contempler, ni un pur stock de matières à exploiter. La pensée contemporaine invite à dépasser ce face-à-face : l'homme est un être de culture, mais qui demeure inscrit dans la nature et en dépend. La vraie question n'est plus de la suivre ou de la dominer, mais d'habiter le monde sans le détruire.",
    retenir: [
      "Distinctions : nature / culture ; inné / acquis ; état de nature / état civil (fiction théorique) ; natura naturans / naturata (Spinoza).",
      "Citations : « maître et possesseur de la nature » (Descartes) ; « Deus sive Natura » (Spinoza) ; « la nature ne fait rien en vain » (Aristote).",
      "Accroches : l'Anthropocène ; le biomimétisme ; Par-delà nature et culture (Descola)."
    ]
  });

  set("conscience", {
    intro: "La conscience est cette présence à soi par laquelle un être se sait exister, sent ce qu'il éprouve et perçoit le monde. On en distingue trois sens : la conscience de soi (le sentiment d'être un « je » identique à travers le temps), la conscience morale (qui juge le bien et le mal), et la conscience psychologique ou perceptive (du monde). Depuis Descartes, la conscience semble le roc de toute certitude et le fondement du sujet. Mais cette évidence est-elle si solide ? La conscience est-elle réellement maîtresse d'elle-même, ou n'est-elle qu'une surface, l'effet visible de forces — corporelles, sociales, inconscientes — qui la déterminent à son insu ?",
    parties: [
      { t: "I. La conscience fonde le sujet et la connaissance (🔵)", p: [
        "Descartes, cherchant une certitude absolue, doute de tout — du monde, de son corps, des vérités mathématiques. Mais il ne peut douter qu'il doute, donc qu'il pense : « je pense, donc je suis ». La conscience de soi est la première vérité, le point fixe à partir duquel tout se reconstruit. Elle fonde aussi le dualisme : l'âme (chose pensante) est distincte du corps (chose étendue).",
        "Kant montre que cette conscience est la condition de toute expérience : « le “je pense” doit pouvoir accompagner toutes mes représentations » — sans l'unité d'un sujet, mes perceptions seraient un chaos sans lien. Husserl, enfin, dégage l'intentionnalité : « toute conscience est conscience de quelque chose » — elle n'est jamais vide, toujours tournée vers un objet." ],
        trans: "Mais ce sujet qui se croit transparent à lui-même et maître de ses pensées n'est-il pas le siège de bien des illusions ?" },
      { t: "II. La conscience est seconde, déterminée et trompée (🔴)", p: [
        "Marx renverse la perspective : « ce n'est pas la conscience qui détermine la vie, mais la vie qui détermine la conscience ». Nos idées, nos valeurs, dépendent de nos conditions matérielles d'existence et de notre classe — c'est l'idéologie. La conscience n'est pas un point de départ, mais un produit.",
        "Spinoza l'avait dit : nous sommes conscients de nos actes, mais ignorants des causes qui les déterminent — d'où l'illusion du libre arbitre. Freud porte le coup décisif : le Moi « n'est pas maître dans sa propre maison », gouverné en partie par l'inconscient. Hume, enfin, va jusqu'à nier un « moi » substantiel : en m'observant, je ne trouve qu'un flux de perceptions, un « théâtre » sans acteur permanent." ] }
    ],
    conclusion: "La conscience reste le lieu où le monde et moi-même nous apparaissons : sans elle, nul sujet, nulle connaissance, nulle morale. Mais l'âge du soupçon (Marx, Nietzsche, Freud) lui a ôté sa souveraineté : elle n'est pas une origine absolue, plutôt un sommet émergé d'un iceberg dont la masse nous échappe. Se connaître soi-même n'est donc pas un point de départ donné, mais une conquête difficile, jamais achevée.",
    retenir: [
      "Distinctions : conscience de soi / morale / du monde ; conscient / inconscient ; sujet / objet.",
      "Citations : « je pense donc je suis » (Descartes) ; « le je pense… accompagne mes représentations » (Kant) ; « toute conscience est conscience de quelque chose » (Husserl).",
      "Accroches : le test du miroir ; l'expérience de Libet (le cerveau précède la décision « consciente »)."
    ]
  });

  set("inconscient", {
    intro: "L'inconscient désigne, au sens fort que lui a donné Freud, une partie du psychisme inaccessible à la conscience, faite de désirs et de souvenirs refoulés qui continuent pourtant d'agir sur nos conduites. À ne pas confondre avec le simple non-conscient (ce à quoi je ne pense pas en ce moment) : l'inconscient freudien est actif, dynamique, et lutte pour revenir à la conscience. La seconde topique le structure en trois instances : le Ça (réservoir des pulsions), le Surmoi (les interdits intériorisés) et le Moi (l'arbitre, pris entre les deux). Le problème est lourd de conséquences : cette hypothèse est-elle une découverte scientifique qui élargit la connaissance de l'homme, ou une fiction commode qui le déresponsabilise en lui fournissant des excuses ?",
    parties: [
      { t: "I. L'inconscient existe et explique nos conduites (🔴 — la thèse freudienne)", p: [
        "Freud part de faits que la conscience ne peut expliquer : rêves, lapsus, actes manqués, symptômes névrotiques. Tous ont un sens, mais un sens caché : ils sont la réalisation déguisée de désirs refoulés. Le rêve est la « voie royale qui mène à l'inconscient » ; le lapsus, loin d'être un hasard, trahit ce que je ne voulais pas dire.",
            "L'hypothèse permet ainsi d'unifier et de soigner ce qui paraissait absurde : « le Moi n'est pas maître dans sa propre maison ». Leibniz l'avait pressentie avec ses « petites perceptions » (des perceptions trop faibles pour être conscientes mais qui agissent) ; Jung l'élargira à un « inconscient collectif », fait d'archétypes communs à l'humanité." ],
        trans: "Mais accepter l'inconscient, n'est-ce pas se donner une excuse commode pour tout ce que l'on n'assume pas ?" },
      { t: "II. L'inconscient, une illusion qui déresponsabilise (🔵 — la critique)", p: [
        "Sartre refuse l'inconscient : il y voit « la mauvaise foi personnifiée ». Invoquer un « ça » qui agirait à ma place, c'est me mentir à moi-même pour ne pas assumer ce que, en réalité, je sais et je choisis. Pour Sartre, l'homme est entièrement responsable ; l'inconscient est l'alibi parfait du lâche. Alain disait de même que « grossir » l'inconscient est une faute morale, une démission de la volonté.",
        "À cette critique morale s'ajoute une critique épistémologique : Popper objecte que la psychanalyse explique tout, et son contraire (qu'on aime ou déteste sa mère, la théorie a toujours raison). Or une théorie irréfutable n'est pas scientifique : faute de pouvoir être démentie par aucune expérience, elle relève de la croyance." ] }
    ],
    conclusion: "L'hypothèse de l'inconscient a profondément modifié notre image de l'homme : nous ne sommes plus tout à fait les maîtres transparents de nos pensées. Mais elle ne supprime pas la responsabilité : reconnaître que des forces nous traversent n'est pas s'en remettre à elles. Au contraire, la cure vise à élargir le champ du Moi — « là où était le Ça, doit advenir le Moi ». Connaître son inconscient, ce n'est pas s'en excuser, c'est commencer à s'en libérer.",
    retenir: [
      "Distinctions : Ça / Moi / Surmoi ; inconscient (actif, refoulé) ≠ non-conscient (simple absence de conscience).",
      "Citations : « le Moi n'est pas maître dans sa propre maison » ; « là où était le Ça, doit advenir le Moi » (Freud) ; « la mauvaise foi personnifiée » (Sartre).",
      "Accroches : le lapsus / l'acte manqué ; le rêve."
    ]
  });

  set("temps", {
    intro: "Le temps est ce dans quoi tout passe, l'écoulement irréversible qui sépare le passé, le présent et le futur. Mais de quel temps parle-t-on ? Il y a le temps objectif, celui des horloges et de la physique, uniforme et mesurable ; et le temps subjectif, la « durée » vécue, qui se contracte dans le plaisir et s'étire dans l'ennui ou l'attente. D'où le problème : le temps existe-t-il en soi, comme une réalité indépendante de nous, ou n'est-il qu'une forme de notre esprit, la manière dont une conscience ordonne son expérience ?",
    parties: [
      { t: "I. Le temps est une forme de l'esprit, pas une chose (🔵)", p: [
        "Augustin s'étonne : le passé n'est plus, le futur n'est pas encore, et le présent, s'il durait, ne serait pas du temps. Le temps n'existe donc que dans l'âme, sous trois formes : la mémoire (présent du passé), l'attention (présent du présent), l'attente (présent du futur).",
        "Kant systématise : le temps est une « forme a priori de la sensibilité ». Il n'est pas une chose que l'on percevrait, mais la condition subjective sous laquelle nous percevons tout — la structure même de notre expérience. Bergson, enfin, oppose au temps spatialisé des horloges la « durée » : un flux qualitatif, continu et indivisible ; le mesurer, c'est déjà le trahir en le découpant comme de l'espace." ],
        trans: "Mais réduire le temps à l'esprit, n'est-ce pas oublier qu'il s'écoule, lui, que nous y pensions ou non ?" },
      { t: "II. Le temps est une réalité objective du monde (🔴)", p: [
        "Héraclite affirme que le devenir est la réalité même : « on ne se baigne jamais deux fois dans le même fleuve », car l'eau, et nous-mêmes, avons changé. Tout coule (panta rhei) ; la permanence est l'illusion. La science, depuis Galilée, fait du temps une grandeur mesurable, paramètre des lois de la nature.",
        "Nietzsche en tire une épreuve éthique, l'« éternel retour » : imagine qu'il te faille revivre ta vie exactement à l'identique, une infinité de fois. La supporterais-tu ? Mieux : la voudrais-tu ? Dire « oui » à cette pensée, c'est l'amor fati — aimer son destin au point de vouloir son retour éternel." ] }
    ],
    conclusion: "Le temps a deux visages indissociables : il est à la fois la trame objective du monde, qui s'écoule sans nous, et la durée vécue d'une conscience qui retient, attend et se souvient. Loin d'être une simple contrainte que l'on subit, il est l'étoffe de notre existence : c'est parce que nous sommes des êtres temporels, finis et mortels, que nos choix et nos instants ont un prix.",
    retenir: [
      "Distinctions : temps objectif (horloges) / durée vécue (Bergson) ; instant / durée ; mémoire / perception / attente (Augustin).",
      "Citations : la « durée » (Bergson) ; l'éternel retour, amor fati (Nietzsche) ; « on ne se baigne jamais deux fois… » (Héraclite).",
      "Accroches : Proust et la madeleine (mémoire involontaire) ; Interstellar (dilatation du temps)."
    ]
  });

  set("art", {
    intro: "L'art désigne l'activité par laquelle l'homme produit des œuvres visant le beau, et leur résultat. Longtemps, on l'a pensé comme imitation (mimésis) de la nature ; à l'époque moderne, on y voit surtout une création, l'invention de formes nouvelles. Deux distinctions cadrent la réflexion : le beau n'est pas l'agréable (qui flatte les sens et varie selon les goûts), et l'art n'est pas l'artisanat (qui applique des règles connues pour un usage). Le problème : l'art n'est-il qu'une copie habile du réel, qui nous en éloigne, ou bien révèle-t-il et crée-t-il quelque chose que ni la nature ni la simple perception ne nous donnent ?",
    parties: [
      { t: "I. L'art comme imitation (🔵)", p: [
        "Platon se méfie de l'art : le peintre qui peint un lit imite l'objet sensible, lequel n'est lui-même qu'une copie de l'Idée de lit. L'œuvre est donc une « imitation d'imitation », trois fois éloignée du vrai, qui flatte les passions au lieu d'élever l'âme — d'où l'exclusion des poètes de la cité idéale.",
        "Hegel renverse la hiérarchie sans abandonner l'idée d'imitation : l'art est « l'expression sensible de l'Idée ». Parce qu'il donne forme à l'esprit dans la matière, le beau artistique est supérieur au beau naturel : une statue dit plus de l'homme qu'un corps réel." ],
        trans: "Mais réduire l'art à l'imitation, n'est-ce pas manquer ce qui fait sa puissance : sa capacité à créer du neuf ?" },
      { t: "II. L'art comme création (🔴)", p: [
        "Kant définit le beau par le jugement de goût : « est beau ce qui plaît universellement et sans concept », et sans intérêt — je ne juge pas une œuvre belle parce qu'elle m'est utile, ni en appliquant une règle, mais elle prétend pourtant à l'accord de tous. Et l'artiste de génie « donne ses règles à l'art » au lieu de les recevoir : il invente la norme en même temps que l'œuvre.",
        "Nietzsche fait de l'art une nécessité vitale : « nous avons l'art pour ne pas mourir de la vérité » — il rend supportable une existence sans fondement. Klee résume la modernité : « l'art ne reproduit pas le visible, il rend visible » — il dévoile ce que l'œil ordinaire ne voit pas." ],
        trans: "Imitation ou création : faut-il choisir ? L'art ne tient-il pas justement dans la tension entre les deux ?" },
      { t: "III. Imiter pour transformer et révéler (🟣)", p: [
        "Aristote réhabilite la mimésis : imiter n'est pas copier servilement, mais re-présenter, et l'on prend plaisir à reconnaître. Surtout, la tragédie opère une catharsis : en représentant des passions terribles (pitié, crainte), elle les purge chez le spectateur. L'imitation devient transformation.",
        "Freud y voit une sublimation : l'art détourne l'énergie pulsionnelle vers une création socialement valorisée. Et Duchamp, avec sa Fontaine (un urinoir signé), montre la limite : ce n'est plus l'objet, ni l'habileté, mais le geste et le regard institués qui font l'œuvre. L'art ne reflète plus le monde, il interroge ce qui fait qu'une chose devient art." ] }
    ],
    conclusion: "L'art n'est ni une simple copie ni une pure invention sans rapport au monde : il transforme le réel pour mieux le révéler. En donnant à voir autrement, il nous arrache à la perception utilitaire et fait surgir un sens, une émotion, une vérité que le concept ne peut dire. C'est pourquoi, plus qu'un ornement, il est une des manières par lesquelles l'homme habite et comprend le monde.",
    retenir: [
      "Distinctions : beau / agréable ; art / artisanat ; mimésis / création ; génie / règle ; catharsis.",
      "Citations : « le beau plaît universellement sans concept » (Kant) ; « l'art rend visible » (Klee) ; « l'art nous empêche de mourir de la vérité » (Nietzsche).",
      "Accroches : la Fontaine de Duchamp ; Les Ménines (Vélasquez)."
    ]
  });

  set("travail", {
    intro: "Le travail est l'activité par laquelle l'homme transforme la nature pour satisfaire ses besoins — et, ce faisant, se transforme lui-même. Étymologiquement, le mot (tripalium, un instrument de torture) en dit la part de peine et de contrainte. Mais Arendt distingue le labeur (l'effort cyclique pour survivre, dont le produit est aussitôt consommé), l'œuvre (qui produit des objets durables et un monde commun) et l'action (la vie politique). Le problème naît de cette ambivalence : le travail est-il d'abord une malédiction, une aliénation qui asservit l'homme, ou bien ce par quoi il s'humanise, se réalise et se libère ?",
    parties: [
      { t: "I. Le travail humanise et libère (🔵)", p: [
        "Hegel, dans la dialectique du maître et de l'esclave, montre le pouvoir formateur du travail. Le maître, qui jouit sans travailler, reste dépendant ; l'esclave, qui travaille, doit « réfréner son désir » et façonner la matière. Or, en transformant le monde, il s'y reconnaît et accède à la conscience de soi : « le travail forme ». C'est finalement l'esclave, par le travail, qui s'élève à la liberté et à la culture.",
        "Arendt prolonge : par l'œuvre, l'homme bâtit un monde durable d'objets et d'institutions qui lui survivent, et donne ainsi sens à son existence au-delà de la simple survie." ],
        trans: "Mais ce travail formateur ne décrit-il pas une situation idéale, bien éloignée de la réalité du travail salarié moderne ?" },
      { t: "II. Le travail aliène (🔴)", p: [
        "Marx analyse le travail dans le capitalisme et en montre l'aliénation. L'ouvrier ne possède ni les moyens de production ni le produit de son travail ; il vend sa force de travail comme une marchandise : « le travail produit l'ouvrier comme une marchandise ». Il devient étranger à son produit (qui appartient à un autre), à son activité (subie, parcellaire), aux autres et à lui-même. Loin de le réaliser, le travail le dépossède.",
        "Cette défiance est ancienne : pour Aristote, le travail manuel, qui asservit aux besoins, est indigne du citoyen libre, qui doit consacrer son temps à la politique et à la contemplation. Rousseau ira jusqu'à dire que « la première passion de l'homme » est l'oisiveté." ],
        trans: "Faut-il alors condamner le travail en soi, ou seulement une certaine organisation du travail ?" },
      { t: "III. Choisir et transformer son travail (🟣)", p: [
        "Le travail n'est pas aliénant par nature, mais par sa forme. Sartre rappelle que l'homme se définit par ce qu'il fait de ce qu'on a fait de lui : par le projet et le choix, le travailleur peut reprendre la maîtrise de son activité, et le travail devenir libérateur, voire révolutionnaire.",
        "L'enjeu contemporain en découle : reconnaissance, sens, autonomie et conditions dignes. Un travail subi et parcellaire déshumanise (Les Temps modernes de Chaplin) ; un travail choisi, où l'on se reconnaît, peut au contraire épanouir. Tout dépend de qui décide, et pour quoi." ] }
    ],
    conclusion: "Le travail est donc à double face : peine et aliénation lorsqu'il dépossède l'homme de son activité et de son produit, mais réalisation et liberté lorsqu'il lui permet de transformer le monde et de s'y reconnaître. La question décisive n'est pas « faut-il travailler ? », mais « comment organiser le travail » pour qu'il forme l'homme au lieu de le défaire.",
    retenir: [
      "Distinctions : travail / labeur / œuvre (Arendt) ; aliénation = devenir étranger à son produit et à soi.",
      "Citations : « le travail produit l'ouvrier comme marchandise » (Marx) ; « le travail forme » (Hegel, dialectique maître/esclave).",
      "Accroches : Les Temps modernes (Chaplin) ; Germinal (Zola)."
    ]
  });

  set("technique", {
    intro: "La technique (du grec technè) est l'ensemble des procédés efficaces, utiles et transmissibles par lesquels l'homme agit sur le monde. Bergson en fait le propre de l'humanité : plus que « sapiens » (le savant), l'homme est « homo faber », le fabricant d'outils. Longtemps simple moyen au service de nos fins, la technique a pris, avec la modernité, une ampleur inédite. D'où le problème : est-elle un outil neutre, dont l'homme reste maître et qu'il oriente vers le bien ou le mal selon ses choix, ou bien est-elle devenue une puissance autonome, qui impose sa propre logique et finit par menacer celui qui l'a créée ?",
    parties: [
      { t: "I. La technique, instrument de la maîtrise et de la liberté (🔵)", p: [
        "Bergson définit l'intelligence par la fabrication : elle est la faculté de « faire des outils à faire des outils ». La technique n'est donc pas un accident, c'est le propre de l'homme, ce qui le distingue de l'animal limité à son instinct.",
        "Descartes en formule le programme : grâce à la science et à la technique, les hommes peuvent se rendre « comme maîtres et possesseurs de la nature ». La technique libère du besoin, soigne, allège la peine, prolonge la vie : elle est émancipation. Vue ainsi, elle reste un moyen neutre, dont la valeur dépend de l'usage qu'on en fait." ],
        trans: "Mais cette confiance ne sous-estime-t-elle pas le fait que la technique, à grande échelle, échappe à ses créateurs ?" },
      { t: "II. La technique, puissance autonome qui menace (🔴)", p: [
        "Ellul soutient que la technique moderne n'est plus une somme d'outils, mais un « système » autonome : elle s'impose partout selon le seul critère de l'efficacité, devenant le « juge de la morale ». Ce n'est plus l'homme qui choisit ses fins ; c'est la technique qui les dicte (« on le fait parce qu'on peut le faire »).",
        "Heidegger y voit un rapport au monde : l'« arraisonnement » (Gestell) réduit la nature à un simple stock disponible, sommé de se livrer. Et « la science ne pense pas » : elle calcule sans interroger le sens de l'être. Jonas, enfin, alerte : devant un pouvoir capable de détruire l'humanité future, il faut un « principe responsabilité » — agir de telle sorte que la vie humaine reste possible." ],
        trans: "Faut-il alors rejeter la technique en bloc ? Ce serait aussi naïf que de la croire neutre." },
      { t: "III. La technique comme pharmakon (🟣)", p: [
        "Stiegler reprend un mot grec : la technique est un « pharmakon », à la fois poison et remède. L'écriture, déjà, affaiblit la mémoire mais permet le savoir ; le numérique nous augmente mais crée dépendances et nouvelles fragilités. Une même technique peut soigner ou détruire selon la manière dont nous l'adoptons collectivement.",
        "L'enjeu n'est donc ni l'acceptation béate ni le refus nostalgique, mais l'usage critique et responsable : ne pas confondre le possible et le souhaitable, et réintroduire la délibération — éthique, politique — là où la technique tendait à décider seule." ] }
    ],
    conclusion: "La technique n'est ni un simple outil neutre, ni une fatalité qui nous échappe : elle est une puissance ambivalente, indissociable de l'humanité, qui démultiplie à la fois nos pouvoirs et nos risques. C'est pourquoi la vraie question n'est pas technique mais morale et politique : non « que pouvons-nous faire ? », mais « que devons-nous vouloir ? ».",
    retenir: [
      "Distinctions : technique / science (la technique la précède souvent, Ellul) ; outil neutre / système autonome ; moyen / fin.",
      "Citations : « homo faber » (Bergson) ; technique = « pharmakon » (Stiegler) ; « la science ne pense pas » (Heidegger).",
      "Accroches : le mythe de Prométhée ; l'intelligence artificielle (le « principe responsabilité » de Jonas)."
    ]
  });

  set("religion", {
    intro: "La religion (du latin religare, relier, ou relegere, recueillir) est un système de croyances et de rites par lequel une communauté se relie à un ordre sacré, distinct du profane. On la distingue de la foi (l'adhésion personnelle et intérieure) et de la simple croyance (une opinion non démontrée). Phénomène universel dans l'histoire humaine, elle est aussi l'objet de critiques radicales. D'où le problème : la religion est-elle une illusion qui aliène l'homme et le détourne du réel, ou bien un lien social puissant et une source de sens dont l'humanité ne peut se passer ?",
    parties: [
      { t: "I. La religion comme illusion et aliénation (🔴)", p: [
        "Marx donne la formule célèbre : « la religion est l'opium du peuple ». Comme une drogue, elle apaise une souffrance réelle (la misère sociale) — mais en la consolant par l'au-delà, elle détourne d'agir pour transformer les conditions qui la causent. La critique de la religion est donc le début de toute critique sociale.",
        "Feuerbach renverse le rapport : ce n'est pas Dieu qui crée l'homme, c'est l'homme qui projette en Dieu ses propres qualités idéalisées (la bonté, la puissance, le savoir infinis). La théologie n'est qu'une anthropologie inversée, et l'homme s'appauvrit de tout ce qu'il prête à son idole. Freud y voit une illusion née du désir d'un père protecteur ; Nietzsche annonce que « Dieu est mort », et avec lui s'effondrent les valeurs suprêmes." ],
        trans: "Mais réduire la religion à une illusion individuelle, n'est-ce pas manquer sa fonction sociale et sa puissance de sens ?" },
      { t: "II. La religion comme lien social et source de sens (🔵 / 🟣)", p: [
        "Durkheim, sociologue, met la question de la vérité entre parenthèses pour étudier la fonction de la religion : elle est « une chose éminemment sociale ». Par ses rites collectifs, elle crée et renforce la cohésion du groupe ; en adorant le sacré, la société s'adore en réalité elle-même. La religion relie (religare) avant de croire.",
        "Bergson distingue une religion « statique » (la peur, l'habitude, qui ferme le groupe) et une religion « dynamique », élan d'amour ouvert à toute l'humanité (celle des mystiques). Pascal, par le « pari », montre qu'il peut être rationnel de croire : l'enjeu (le salut éternel) est infini. Et Aron parle de « religions séculières » à propos des totalitarismes : preuve que, même sans Dieu, le besoin humain de sacré et de communauté demeure." ] }
    ],
    conclusion: "La religion ne se laisse pas réduire à une simple erreur : qu'on la tienne pour vraie ou pour illusoire, elle répond à des besoins profonds — donner sens à la finitude, relier les hommes, fonder une morale commune. La critique (Marx, Freud, Nietzsche) en dénonce les dangers d'aliénation ; la sociologie (Durkheim) en éclaire la fonction. Reste une question que ni l'une ni l'autre ne tranchent : celle de sa vérité, qui relève de la foi.",
    retenir: [
      "Distinctions : religion / foi / croyance ; sacré / profane ; critique (la religion est-elle vraie ?) / fonction (à quoi sert-elle ?).",
      "Citations : « la religion est l'opium du peuple » (Marx) ; « Dieu est mort » (Nietzsche) ; « chose éminemment sociale » (Durkheim).",
      "Accroches : le pari de Pascal ; la laïcité."
    ]
  });

  set("science", {
    intro: "La science est une connaissance rationnelle, objective, méthodique et, pour les sciences expérimentales, vérifiable, qui vise les lois du réel. Elle s'oppose à l'opinion (la doxa, non fondée) et inspire un immense prestige — au point qu'on la prend parfois pour la seule forme légitime de savoir : c'est le scientisme. Le problème porte sur la nature et les limites de ce savoir : la science atteint-elle une vérité absolue et définitive, le réel « tel qu'il est », ou bien est-elle un savoir toujours faillible, révisable, et même en partie construit par ceux qui la font ?",
    parties: [
      { t: "I. La science atteint un savoir certain (🔵)", p: [
        "Descartes fonde la science sur la méthode : partir d'idées « claires et distinctes », procéder par ordre, ne rien admettre sans preuve. Bien conduite, la raison peut atteindre une certitude « égale à celle des démonstrations de l'arithmétique ». La science mathématise la nature et la rend intelligible.",
        "Comte systématise avec la « loi des trois états » : l'esprit humain passe du stade théologique au métaphysique, puis au stade « positif » où, renonçant à chercher les causes premières (le « pourquoi »), il établit des lois constantes entre les phénomènes (le « comment »). La science y est le modèle du savoir vrai." ],
        trans: "Mais cette confiance dans une science qui dirait le vrai définitif n'a-t-elle pas été ébranlée par l'histoire des sciences elle-même ?" },
      { t: "II. La science est faillible et construite (🔴)", p: [
        "Les théories scientifiques se succèdent et se réfutent (la physique de Newton dépassée par Einstein) : aucune n'est définitive. Nietzsche soupçonne même que « sur une croyance métaphysique repose encore notre croyance en la science » — la croyance que la vérité vaut mieux que l'illusion.",
        "Latour montre que les faits scientifiques ne sont pas seulement « découverts » mais aussi « construits » au laboratoire, à travers des instruments, des pratiques et des controverses. Heidegger, plus radical, affirme que « la science ne pense pas » : elle calcule et maîtrise, mais n'interroge pas le sens de l'être." ],
        trans: "Faut-il en conclure que la science ne vaut pas mieux que l'opinion ? Ce serait une erreur : ce qui la distingue, c'est précisément sa méthode." },
      { t: "III. Ce qui fait la scientificité : l'épistémologie (🟣)", p: [
        "Popper propose un critère décisif : une théorie n'est pas scientifique parce qu'on peut la prouver (on confirme toujours ce qu'on veut), mais parce qu'on peut la RÉFUTER — la falsifiabilité. « Tous les cygnes sont blancs » est scientifique car un seul cygne noir suffit à la démentir. La science avance par conjectures et réfutations, jamais par certitudes définitives.",
        "Bachelard ajoute que la science se construit CONTRE l'opinion et les évidences premières, qui sont des « obstacles épistémologiques » ; « les instruments ne sont que des théories matérialisées ». Et Claude Bernard fixe la méthode expérimentale : observation, hypothèse, expérience, vérification. La science n'est donc pas la vérité absolue, mais un savoir rigoureux, contrôlé et toujours ouvert à la révision." ] }
    ],
    conclusion: "La science n'est pas un dogme délivrant des vérités éternelles, mais elle n'est pas non plus une opinion comme une autre : sa force tient à sa méthode, qui l'oblige à se soumettre à l'expérience et à se corriger sans fin. La reconnaître comme faillible n'est pas l'affaiblir, c'est la distinguer du scientisme — cette croyance qui, en l'absolutisant, la trahit. « Science sans conscience n'est que ruine de l'âme » (Rabelais).",
    retenir: [
      "Distinctions : science / opinion (doxa) ; science / scientisme ; expliquer (nature) / comprendre (sciences humaines).",
      "Citations : critère de falsifiabilité (Popper) ; « obstacle épistémologique » (Bachelard) ; « la science ne pense pas » (Heidegger).",
      "Accroches : Galilée et l'Inquisition ; le climat (consensus / doute)."
    ]
  });

  set("verite", {
    intro: "La vérité qualifie un jugement, une pensée ou un discours qui s'accorde avec son objet : sa définition classique est l'« adéquation de la chose et de l'intellect » (Thomas d'Aquin). On la distingue de la réalité (qui qualifie les choses, non les jugements) et de la certitude (un état subjectif, qui peut être trompeur). On peut aussi définir le vrai par la cohérence interne (en mathématiques) ou par l'accord intersubjectif. Le problème est celui de son statut : la vérité est-elle une, objective et absolue, valable pour tous, ou bien n'est-elle qu'une perspective parmi d'autres, relative à chacun, voire une illusion utile ?",
    parties: [
      { t: "I. La vérité est objective et absolue (🔵)", p: [
        "Platon distingue le sensible, changeant et trompeur (les « ombres » de la caverne), et l'intelligible, le monde des Idées éternelles et universelles, seul vraiment réel et connaissable. La vérité n'est donc pas affaire d'opinion mais de raison : elle est une, et la même pour tous.",
        "Descartes en cherche le critère et le trouve dans l'évidence : est vrai ce qui se présente à l'esprit de façon si claire et distincte qu'on ne peut en douter (à commencer par le cogito). Spinoza ajoute que « le vrai est sa propre norme et celle du faux » : une idée vraie porte en elle-même la marque de sa vérité, comme la lumière se montre elle-même et montre l'ombre." ],
        trans: "Mais si la vérité était une et évidente, comment expliquer les désaccords interminables des hommes, et le fait que chaque époque tienne pour vrai ce que la suivante réfute ?" },
      { t: "II. La vérité est relative, voire une illusion (🔴)", p: [
        "Protagoras le sophiste affirme : « l'homme est la mesure de toute chose » — il n'y a pas de vérité en soi, seulement ce qui paraît vrai à chacun. Ce relativisme dissout l'idée d'une vérité commune.",
        "Nietzsche radicalise : « les vérités sont des illusions dont on a oublié qu'elles le sont ». Il n'y a pas de faits, seulement des interprétations ; ce que nous appelons « vérités » ne sont que des fictions utiles à la vie, fixées par habitude. Le pragmatisme de James va dans le même sens : est vrai ce qui « réussit », ce qui est avantageux pour la pensée et l'action." ] }
    ],
    conclusion: "Réduire la vérité à une simple opinion personnelle se contredit (affirmer « tout est relatif » comme une vérité absolue) et rend impossibles la science et le dialogue. Mais en faire une évidence intemporelle ignore l'histoire des erreurs humaines. La vérité apparaît alors moins comme une possession que comme une exigence et une conquête : non un point de départ acquis, mais l'horizon d'une recherche commune, qui suppose la discussion, la preuve et la rectification de nos erreurs. À distinguer, surtout, de l'utile : ce qui nous arrange n'est pas pour autant vrai.",
    retenir: [
      "Distinctions : vérité (du jugement) ≠ réalité (des choses) ; vérité ≠ certitude ; le vrai ≠ l'utile (contre James).",
      "Citations : « adéquation de la chose et de l'intellect » (Thomas d'Aquin) ; « les vérités sont des illusions… » (Nietzsche) ; « l'homme est la mesure de toute chose » (Protagoras).",
      "Accroches : les « faits alternatifs » / fake news ; Matrix ; l'allégorie de la caverne."
    ]
  });

  set("raison", {
    intro: "La raison (du latin ratio, le calcul, et du grec logos, le discours rationnel) est la faculté propre à l'homme de penser logiquement, d'enchaîner les idées selon des principes et d'atteindre le vrai et le bien. Kant distingue la raison théorique (qui cherche à connaître ce qui est) et la raison pratique (qui détermine ce que l'on doit faire). Héritière des Lumières, la raison promet d'émanciper l'homme des préjugés et de la superstition. Mais cette promesse est-elle tenable ? La raison est-elle toute-puissante, capable de tout connaître et de tout fonder, ou bien est-elle limitée, faillible, et parfois même au service de forces — passions, intérêts — qui la dépassent ?",
    parties: [
      { t: "I. La raison saisit le réel et le fonde (🔵)", p: [
        "Hegel affirme une identité profonde du pensé et du réel : « ce qui est rationnel est réel, et ce qui est réel est rationnel ». L'histoire elle-même est le déploiement progressif de la Raison. Leibniz pose le « principe de raison suffisante » : rien n'arrive sans une raison qui fasse qu'il en soit ainsi et non autrement ; tout est, en droit, intelligible.",
        "Kant accorde à la raison un rôle législateur : elle donne ses lois à la connaissance et à la morale. Mais il marque déjà une limite : la raison s'égare en illusions dès qu'elle prétend connaître au-delà de l'expérience possible (Dieu, l'âme, le monde comme totalité) — c'est l'objet de la métaphysique, où elle se perd." ],
        trans: "Et si cette confiance dans la raison souveraine était elle-même une illusion ? Et si la raison n'était pas la maîtresse, mais la servante ?" },
      { t: "II. La raison est limitée et au service des passions (🔴)", p: [
        "Hume opère un renversement : « la raison est, et ne peut être, que l'esclave des passions ». Seule, la raison ne pousse à rien : elle calcule les moyens, mais ce sont les passions, les désirs, qui fixent les fins de l'action. Ce n'est pas la raison qui me fait vouloir, c'est le désir ; la raison ne fait que le servir.",
        "Pascal montre une autre limite, par le haut : « le cœur a ses raisons que la raison ne connaît point ». Les premiers principes (l'espace, le temps, les nombres) ne se démontrent pas, ils se sentent par une intuition immédiate, le « cœur ». La raison démonstrative repose donc sur un socle qu'elle ne peut elle-même justifier. Spinoza, enfin, rappelle que les hommes sont le plus souvent menés par le « désir aveugle », non par la raison." ],
        trans: "Faut-il alors opposer la raison à l'intuition et au sentiment ? Ou bien la pensée vivante n'unit-elle pas les deux ?" },
      { t: "III. Raison et intuition se complètent (🟣)", p: [
        "Poincaré, mathématicien, le constate dans la pratique scientifique : « on prouve par la logique, on trouve par l'intuition ». La démonstration valide, mais c'est l'intuition qui invente et découvre ; l'une ne va pas sans l'autre.",
        "Kant l'avait formulé pour la connaissance : « des intuitions sans concepts sont aveugles, des concepts sans intuitions sont vides ». Connaître, c'est unir la sensibilité (qui donne le contenu) et l'entendement (qui donne la forme). La raison n'est donc pleinement féconde que lorsqu'elle reste reliée à l'expérience et à l'intuition, au lieu de tourner à vide." ] }
    ],
    conclusion: "La raison n'est ni la faculté toute-puissante qu'imaginaient certains, ni la simple servante des passions : elle est une puissance précieuse mais lucide sur ses propres limites. Sa grandeur n'est pas de tout connaître ni de tout dominer, mais de savoir critiquer, douter, et reconnaître ce qui la dépasse — y compris l'intuition et le sentiment. Une raison qui s'ignore limitée devient déraisonnable : « le sommeil de la raison engendre des monstres » (Goya), mais une raison qui se croit absolue en engendre d'autres.",
    retenir: [
      "Distinctions : raison / raisonnable ; raison théorique / pratique (Kant) ; intuition / déduction ; raison / cœur (Pascal).",
      "Citations : « ce qui est rationnel est réel » (Hegel) ; « la raison est l'esclave des passions » (Hume) ; « le cœur a ses raisons… » (Pascal).",
      "Accroches : « le sommeil de la raison engendre des monstres » (Goya) ; les théories du complot."
    ]
  });

})();
