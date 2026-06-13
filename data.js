/* =====================================================================
   Philosophie Terminale — Données de révision (Bac 2026)
   ---------------------------------------------------------------------
   Source prioritaire : cours H. Malard (5 notions Tier 1).
   Compléments : « Introduction à la philosophie – 2025 » + connaissances
   générales. Structure calquée sur la base de connaissances fournie par
   l'élève : 17 notions, code couleur bleu/rouge/violet, méthodo des 2
   épreuves, auteurs transversaux.

   Les notions sont groupées en 3 TIERS de priorité :
   - Tier 1 : boucle complète, contenu de cours, source prioritaire.
   - Tier 2 : boucle allégée, déjà à moitié vu.
   - Tier 3 : fiche express anti-impasse.
   ===================================================================== */

window.PHILO_DATA = {
  meta: {
    matiere: "Philosophie",
    niveau: "Terminale générale — tronc commun",
    session: "Baccalauréat 2026",
    coefficient: 8,
    duree: "4 heures",
    dateEcrit: "lundi 15 juin 2026, 8 h",
    sourceProgramme: "Cours H. Malard + « Introduction à la philosophie » (2025)",
    note: "L'épreuve propose 2 sujets de dissertation + 1 explication de texte : on en choisit UN. Maîtriser solidement 3–4 notions suffit déjà à écarter l'impasse — d'où la stratégie par tiers. Couvre à fond les 5 notions du Tier 1, sache survivre sur le reste."
  },

  /* code couleur — clé de voûte des plans */
  couleurs: [
    { id: "bleu",   emoji: "🔵", camp: "Idéalisme / spiritualisme", idee: "Le monde des idées (esprit, raison, Dieu) prime et préexiste à la matière. Tend vers l'universel, le rationalisme.", role: "Thèse idéaliste — souvent en I, la position « noble »." },
    { id: "rouge",  emoji: "🔴", camp: "Matérialisme / concret", idee: "Seule la matière existe ; pas de Dieu ni d'arrière-monde ; c'est l'esprit qui produit les idées. Tend vers le singulier, l'empirisme, le soupçon.", role: "Antithèse matérialiste / critique — souvent en II." },
    { id: "violet", emoji: "🟣", camp: "Synthèse / dépassement", idee: "Le « juste milieu », la ré-union de l'idée et de la matière, l'intersubjectivité, le paradoxe assumé.", role: "Dépassement — en III, là où on conteste les présupposés." }
  ],

  parts: [
    /* ============================ TIER 1 ============================ */
    {
      id: "t1",
      name: "Tier 1 — Priorité absolue",
      short: "Tier 1",
      accent: "eco",
      desc: "Boucle complète, contenu de cours du prof, source prioritaire. À maîtriser à fond.",
      notions: [
        { id: "devoir",  num: 1, tier: 1, titre: "Le devoir",
          sujets: ["Y a-t-il des limites à faire son devoir ?", "Que gagne-t-on à faire son devoir ?", "Qui peut me dire ce que je dois faire ?"],
          objectifs: [
            "Restituer le cœur : le devoir oblige sans contraindre — il en appelle à ma liberté.",
            "Maîtriser les distinctions : devoir / obligation / contrainte / nécessité ; agir PAR devoir vs CONFORMÉMENT au devoir.",
            "Trier les auteurs par couleur (Kant 🔵 / Freud-Nietzsche 🔴 / décentrement 🟣).",
            "Construire un plan I/II/III avec un III « deux-voir » (décentrement).",
            "Mémoriser 2 citations + 1 accroche (Javert, banalité du mal)."
          ] },
        { id: "liberte", num: 2, tier: 1, titre: "La liberté",
          sujets: ["Peut-on faire l'expérience de la liberté ?"],
          objectifs: [
            "Restituer le cœur : on sent la liberté, mais peut-on la prouver / la connaître ?",
            "Maîtriser les distinctions : libre arbitre / déterminisme ; liberté d'indifférence / éclairée.",
            "Trier les auteurs (Descartes-Sartre 🔵 / Spinoza-Kant 🔴 / contrainte créatrice 🟣).",
            "Construire un plan dont le III réconcilie liberté et limite (obligation, déterminisme assumé).",
            "Mémoriser : « condamné à être libre », « né libre, partout dans les fers », la pierre de Spinoza."
          ] },
        { id: "bonheur", num: 3, tier: 1, titre: "Le bonheur",
          sujets: ["Pour être heureux, faut-il satisfaire tous ses désirs ?", "Le bonheur est-il l'affaire de l'État ?", "Qu'est-ce qu'on attend pour être heureux ?"],
          objectifs: [
            "Restituer le cœur : le désir est manque/inquiétude, le bonheur est repos — tension à arbitrer.",
            "Maîtriser : eudémonisme / hédonisme ; les 3 catégories de désirs d'Épicure.",
            "Trier les auteurs (Épicure-Spinoza-Kant 🔵 / Calliclès-Schopenhauer 🔴 / Rousseau-Kant 🟣).",
            "Savoir traiter les 3 plans (tous ses désirs ? / affaire de l'État ? / qu'attend-on ?).",
            "Mémoriser : « changer ses désirs plutôt que l'ordre du monde », pendule de Schopenhauer."
          ] },
        { id: "justice", num: 4, tier: 1, titre: "La justice",
          sujets: ["Comment savoir ce qui est juste ?", "Le juste et l'injuste ne sont-ils que des conventions ?", "Peut-on se faire justice soi-même ?"],
          objectifs: [
            "Restituer le cœur : existe-t-il une norme objective du juste, ou n'est-ce que convention/intérêt ?",
            "Maîtriser : légal / légitime ; droit positif / droit naturel ; égalité / équité.",
            "Trier les auteurs (Rousseau-Kant 🔵 / Hobbes-Gygès-Pascal 🔴 / Rawls-Aristote 🟣).",
            "Construire un III : l'enjeu n'est pas de savoir mais d'être juste (équité, Rawls).",
            "Mémoriser : anneau de Gygès, « ce qui est fort soit juste » (Pascal), voile d'ignorance (Rawls)."
          ] },
        { id: "langage", num: 5, tier: 1, titre: "Le langage",
          sujets: ["Le langage n'est-il qu'un outil de communication ?"],
          objectifs: [
            "Restituer le cœur : simple outil de communication, ou consubstantiel à la pensée ?",
            "Maîtriser : langage / langue / parole ; signifiant / signifié, arbitraire du signe.",
            "Trier les auteurs (Hegel-Saussure 🔵 / Bergson-Barthes-Bourdieu 🔴 / Freud-Levinas 🟣).",
            "Construire un III : c'est par ses défaillances que le langage nous relie (lapsus, dialogue).",
            "Mémoriser : « la langue est fasciste » (Barthes), « mot-étiquette » (Bergson)."
          ] }
      ]
    },

    /* ============================ TIER 2 ============================ */
    {
      id: "t2",
      name: "Tier 2 — À consolider",
      short: "Tier 2",
      accent: "socio",
      desc: "Boucle allégée, déjà à moitié vu dans le cours (mobilisé via justice et bonheur).",
      notions: [
        { id: "etat", num: 6, tier: 2, titre: "L'État",
          sujets: ["L'État protège-t-il ou opprime-t-il ?", "(mobilisé dans justice et bonheur)"],
          objectifs: [
            "Restituer le cœur : « monopole de la violence physique légitime » (Weber) — protéger ou opprimer ?",
            "Maîtriser : État / gouvernement / nation ; légalité / légitimité.",
            "Trier les auteurs (Hegel-Spinoza 🔵 / Marx-anarchistes-Nietzsche 🔴 / Hobbes-Rousseau-Montesquieu 🟣)."
          ] },
        { id: "nature", num: 7, tier: 2, titre: "La nature",
          sujets: ["Faut-il être maître de la nature ou la suivre ?", "(mobilisée via l'« état de nature » et le « droit naturel »)"],
          objectifs: [
            "Restituer le cœur : s'en rendre « maître et possesseur » (Descartes) ou la « suivre » (stoïciens) ?",
            "Maîtriser : nature / culture ; état de nature / état civil ; « Deus sive Natura ».",
            "Trier les auteurs (Aristote-Spinoza 🔵 / Lucrèce-Descartes 🔴 / Lévi-Strauss-Descola 🟣)."
          ] }
      ]
    },

    /* ============================ TIER 3 ============================ */
    {
      id: "t3",
      name: "Tier 3 — Fiche express (anti-impasse)",
      short: "Tier 3",
      accent: "rc",
      desc: "Fiches express : de quoi survivre et reconnaître un sujet, sans impasse.",
      notions: [
        { id: "conscience", num: 8, tier: 3, titre: "La conscience",
          sujets: ["La conscience est-elle maîtresse, ou illusion d'un sujet déterminé ?"],
          objectifs: [
            "Restituer le cœur : 3 sens (de soi, morale, du monde) — la conscience est-elle maîtresse ?",
            "Trier : Descartes-Kant-Husserl 🔵 / Marx-Spinoza-Freud-Hume 🔴.",
            "Mémoriser : « je pense donc je suis », expérience de Libet."
          ] },
        { id: "inconscient", num: 9, tier: 3, titre: "L'inconscient",
          sujets: ["L'inconscient : hypothèse éclairante ou déresponsabilisation ?"],
          objectifs: [
            "Restituer le cœur : Ça / Moi / Surmoi — hypothèse scientifique ou excuse ?",
            "Trier : Sartre-Alain (critique) 🔵 / Freud-Leibniz-Jung (défense) 🔴.",
            "Mémoriser : « le Moi n'est pas maître dans sa propre maison »."
          ] },
        { id: "temps", num: 10, tier: 3, titre: "Le temps",
          sujets: ["Le temps existe-t-il en soi, ou n'est-il qu'une forme de l'esprit ?"],
          objectifs: [
            "Restituer le cœur : temps objectif (horloges) vs subjectif (la « durée », Bergson).",
            "Trier : Augustin-Kant-Bergson 🔵 / Héraclite-Nietzsche 🔴 / Rosa 🟣.",
            "Mémoriser : « durée » (Bergson), éternel retour (Nietzsche)."
          ] },
        { id: "art", num: 11, tier: 3, titre: "L'art",
          sujets: ["L'art copie-t-il, ou révèle / crée-t-il ?"],
          objectifs: [
            "Restituer le cœur : imitation (antiquité) ou création (modernité) ?",
            "Trier : Platon-Hegel 🔵 / Kant-Nietzsche-Bacon 🔴 / Aristote-Freud 🟣.",
            "Mémoriser : « le beau plaît universellement sans concept » (Kant)."
          ] },
        { id: "travail", num: 12, tier: 3, titre: "Le travail",
          sujets: ["Le travail : contrainte/aliénation ou réalisation/liberté ?"],
          objectifs: [
            "Restituer le cœur : transformation de la nature ET de soi — aliénation ou réalisation ?",
            "Trier : Hegel-Kant-Arendt 🔵 / Marx-Aristote-Rousseau 🔴 / Sartre 🟣.",
            "Mémoriser : « le travail produit l'ouvrier comme marchandise » (Marx)."
          ] },
        { id: "technique", num: 13, tier: 3, titre: "La technique",
          sujets: ["La technique : outil neutre ou puissance autonome qui menace ?"],
          objectifs: [
            "Restituer le cœur : homo faber — outil au service de l'homme, ou puissance autonome ?",
            "Trier : Bergson-Descartes 🔵 / Ellul-Heidegger-Jonas 🔴 / Stiegler (pharmakon) 🟣.",
            "Mémoriser : « homo faber » (Bergson), technique = « pharmakon » (Stiegler)."
          ] },
        { id: "religion", num: 14, tier: 3, titre: "La religion",
          sujets: ["La religion : illusion/aliénation, ou lien social et source de sens ?"],
          objectifs: [
            "Restituer le cœur : religare = relier — illusion ou lien social ?",
            "Trier : Bergson-Pascal 🔵 / Marx-Freud-Feuerbach-Nietzsche 🔴 / Durkheim-Aron 🟣.",
            "Mémoriser : « la religion est l'opium du peuple » (Marx), « chose éminemment sociale » (Durkheim)."
          ] },
        { id: "science", num: 15, tier: 3, titre: "La science",
          sujets: ["La science atteint-elle une vérité absolue, ou est-elle faillible / construite ?"],
          objectifs: [
            "Restituer le cœur : connaissance objective — vérité absolue ou faillible ? (danger du scientisme).",
            "Trier : Descartes-Comte 🔵 / Nietzsche-Latour-Heidegger 🔴 / Popper-Bachelard 🟣.",
            "Mémoriser : critère de falsifiabilité (Popper), « science sans conscience… » (Rabelais)."
          ] },
        { id: "verite", num: 16, tier: 3, titre: "La vérité",
          sujets: ["La vérité est-elle objective/absolue, ou perspective/illusion ?"],
          objectifs: [
            "Restituer le cœur : adéquation pensée/chose — objective ou perspective ?",
            "Trier : Platon-Descartes-Spinoza 🔵 / Nietzsche-James-Protagoras 🔴 / Pascal 🟣.",
            "Mémoriser : « adéquation de la chose et de l'intellect » (Thomas d'Aquin)."
          ] },
        { id: "raison", num: 17, tier: 3, titre: "La raison",
          sujets: ["La raison est-elle toute-puissante ou faillible ?"],
          objectifs: [
            "Restituer le cœur : faculté de penser logiquement — toute-puissante ou faillible ?",
            "Trier : Hegel-Leibniz-Kant 🔵 / Hume-Pascal-Spinoza 🔴 / Poincaré-Kant 🟣.",
            "Mémoriser : « le cœur a ses raisons… » (Pascal), « esclave des passions » (Hume)."
          ] }
      ]
    }
  ],

  /* ============================ MÉTHODE DES ÉPREUVES ============================ */
  methode: {
    intro: "4 h · coefficient 8 · lundi 15 juin 2026, 8 h. L'épreuve propose 2 sujets de dissertation + 1 explication de texte : on en choisit UN.",
    dissertation: {
      titre: "La dissertation",
      reflexes: [
        { t: "1) La 1ʳᵉ thèse", d: "Enlever la tournure interrogative ; ou, pour une question ouverte, donner la réponse immédiate, l'« impression commune » : On pourrait croire que…" },
        { t: "2) Le problème", d: "Une alternative à deux options opposées, avec un risque / une difficulté de chaque côté." },
        { t: "3) Les présupposés", d: "Le sujet semble admettre que… mais ne peut-on pas douter que… ?" }
      ],
      plan: [
        { t: "I — L'impression commune", d: "La thèse immédiate et courante." },
        { t: "II — L'objection", d: "Le pôle opposé, l'antithèse." },
        { t: "III — Le dépassement (🟣)", d: "Contester les présupposés du sujet et dégager un paradoxe. C'est le moment violet." }
      ],
      reglesOr: [
        "L'accroche plante un décor. Ne JAMAIS ouvrir l'intro par une citation de Kant, Marx ou Descartes.",
        "Ne JAMAIS commencer un paragraphe par un nom d'auteur ou une citation. C'est TOI qui conduis le navire : l'auteur vient justifier ce que tu soutiens.",
        "Les transitions entre grandes parties font toute la différence (« de deux choses l'une… »).",
        "Ne pas accumuler les références : tracer une ligne argumentative claire, sans perdre le sujet de vue.",
        "Conclusion : résumer les grandes parties + finir sur une nouvelle question (idéalement avec d'autres notions).",
        "Garder 10 min pour l'orthographe ; souligner les titres d'œuvres à la règle."
      ]
    },
    explication: {
      titre: "L'explication de texte",
      points: [
        "Attention au titre et au cadre : la première et la dernière ligne sont toujours capitales.",
        "L'intro explicite : la question à laquelle le texte répond, sa réponse, et en quoi cette réponse fait elle-même question.",
        "Citer les démarcations textuelles (les moments de l'argumentation).",
        "Lecture active : interroger le sens des mots, s'étonner des exemples et des positions, croiser des perspectives.",
        "Ne jamais simplifier — montrer la complexité, les dissonances, les paradoxes.",
        "Garder 10 min de relecture."
      ]
    },
    jourJ: [
      "2 dissertations + 1 explication → on choisit 1. Couvrir solidement les 5 Tier 1 + savoir survivre sur les autres = zéro impasse.",
      "Toujours : 3 réflexes sur l'intitulé → plan I/II/III avec un III qui conteste les présupposés (violet) → transitions soignées → conclusion qui rouvre.",
      "Accroche qui plante un décor (jamais une citation d'auteur en ouverture).",
      "« Prendre plaisir à penser pendant 4 heures. » Et quoi qu'il arrive : amor fati."
    ]
  },

  /* ============================ AUTEURS TRANSVERSAUX ============================ */
  transversaux: [
    { n: "Platon", couleur: "bleu", these: "Théorie des Idées ; le sensible = ombres (allégorie de la caverne) ; le vrai / le juste / le beau sont dans le monde intelligible.", notions: "vérité, justice, art, langage, bonheur", formule: "« Tout ce que je sais, c'est que je ne sais rien » (Socrate)." },
    { n: "Aristote", couleur: "violet", these: "Le « juste milieu », la finalité (« la nature ne fait rien en vain »), la vertu = seconde nature acquise par habitude, l'animal politique.", notions: "justice, bonheur, nature, devoir, État, art", formule: "« L'homme est un animal politique »." },
    { n: "Descartes", couleur: "bleu", these: "Cogito (« je pense donc je suis ») ; libre arbitre ; morale par provision ; maître et possesseur de la nature.", notions: "conscience, liberté, vérité, nature, bonheur, devoir", formule: "« Je pense donc je suis »." },
    { n: "Spinoza", couleur: "rouge", these: "Déterminisme (illusion du libre arbitre) ; Deus sive Natura ; béatitude = amour intellectuel de Dieu ; connaître ses déterminismes pour être libre.", notions: "liberté, bonheur, nature, conscience, justice", formule: "« Deus sive Natura »." },
    { n: "Kant", couleur: "bleu", these: "Impératif catégorique / agir par devoir ; liberté = idée transcendantale (à penser, pas à connaître) ; bonheur = idéal de l'imagination ; le beau sans concept.", notions: "devoir, liberté, bonheur, justice, art, raison", formule: "« Bois courbe dont on ne peut rien tailler de droit »." },
    { n: "Rousseau", couleur: "violet", these: "« Né libre, partout dans les fers » ; contrat social, volonté générale ; conscience = sentiment inné de justice (pitié) ; insatisfaction du désir.", notions: "liberté, justice, devoir, État, bonheur, langage", formule: "« L'homme est né libre, et partout il est dans les fers »." },
    { n: "Hobbes", couleur: "violet", these: "État de nature = « guerre de tous contre tous » ; pas de justice sans loi ; Léviathan par contrat.", notions: "justice, État, devoir, nature, langage", formule: "« L'homme est un loup pour l'homme »." },
    { n: "Nietzsche", couleur: "rouge", these: "Généalogie de la morale (« Je veux » contre « Tu dois ») ; « Dieu est mort » ; vérités = illusions ; éternel retour ; grande santé / surhomme.", notions: "devoir, bonheur, vérité, justice, religion, État, temps, liberté", formule: "« Deviens ce que tu es » / amor fati." },
    { n: "Freud", couleur: "rouge", these: "Inconscient (Ça / Moi / Surmoi) ; le Moi n'est pas maître ; Surmoi = morale intériorisée ; art = sublimation ; religion = illusion.", notions: "inconscient, conscience, devoir, art, religion, langage", formule: "« Le Moi n'est pas maître dans sa propre maison »." },
    { n: "Bergson", couleur: "violet", these: "La durée vs le temps des horloges ; mot-étiquette (langage réducteur) ; homo faber ; deux sources de la morale (pression + élan).", notions: "temps, langage, technique, devoir, art, conscience", formule: "« Mot-étiquette » ; « homo faber »." },
    { n: "Sartre", couleur: "bleu", these: "L'existence précède l'essence ; « condamné à être libre » ; néant, responsabilité, mauvaise foi ; le regard d'autrui aliène.", notions: "liberté, conscience, inconscient, devoir, justice, langage", formule: "« L'homme est condamné à être libre »." },
    { n: "Marx", couleur: "rouge", these: "Matérialisme historique (« la vie détermine la conscience ») ; aliénation par le travail ; religion = opium ; État = instrument de classe.", notions: "travail, conscience, religion, État, bonheur, technique", formule: "« La religion est l'opium du peuple »." }
  ]
};
