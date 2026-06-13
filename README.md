# Philo Terminale — Révision Bac 2026

App de révision gamifiée pour l'épreuve écrite de **philosophie** (Bac 2026, tronc commun).
Statique (HTML/CSS/JS, pas de build), fonctionne **hors-ligne**. Calquée sur l'app SES.

**Lancer** : double-cliquer `Lancer Philo.bat` (ou ouvrir `index.html`).

## Ce qu'il y a dedans
- **17 notions** groupées en 3 tiers de priorité (Tier 1 = 5 notions prioritaires, Tier 2 = 2, Tier 3 = 10 fiches express).
- Pour chaque notion, 5 onglets : **Le cœur** (idée + problème) · **Distinctions** · **Tri couleur → plan** (auteurs triés 🔵 idéalisme / 🔴 matérialisme / 🟣 dépassement + plans-types I/II/III) · **Par cœur** (citations, accroches, pièges) · **Objectifs** (checklist, maîtrisable en jouant).
- **Méthode des épreuves** : dissertation (3 réflexes, plan I/II/III, règles d'or) + explication de texte + stratégie jour J.
- **Auteurs & couleurs** : la légende du code couleur + 12 auteurs transversaux.
- **10 jeux** : Récitation (active recall, reine en philo), QCM, Vrai/Faux, cartes mémoire (Leitner), associations, textes à trous, examen blanc chronométré, objectifs (auto-éval), Sprint 60 s, Survie.
- **Gamification** : XP & niveaux (Lycéen → Major du Bac), écus, boutique (11 thèmes, power-ups, titres), sons, confettis, série quotidienne. Tout en `localStorage`.

## Maîtrise par le jeu
Chaque bonne réponse *différente* d'une notion crédite un objectif ; **5 bonnes réponses distinctes = objectif maîtrisé** (`OBJ_K=5`). Les anneaux reflètent la maîtrise partielle. Réinitialisation : bouton dans Profil, ou bump de `PROG_VERSION` dans `app.js` (garde écus/skins/XP).

## Fichiers
- `data.js` — méta, 17 notions par tier, code couleur, méthode, auteurs transversaux.
- `content.js` — cœur / distinctions / tri couleur+plans / par cœur / accroches / pièges / concepts.
- `quiz.js` — banques QCM + V/F + trous + **recall** (récitation) par notion.
- `app.js` — moteur (routeur, gamification, sessions de jeu, boutique, recherche).
- `styles.css` — feuille de style (base SES + additions philo).

## Source
Base de connaissances fournie par l'élève : cours H. Malard (5 notions Tier 1) + « Introduction à la philosophie » (2025) + connaissances générales. À recouper avec le cours pour toute citation utilisée en copie.

> Écrit : **lundi 15 juin 2026, 8 h** · coefficient 8 · 4 h · 2 dissertations + 1 explication de texte (au choix).
