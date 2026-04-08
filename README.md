# 🌍 LANGE : Kilega Learning Dashboard

Bienvenue sur le projet **LANGE**, une application web fullstack novatrice et immersive dédiée à l'apprentissage de la langue **Kilega / Kirega** (République Démocratique du Congo). 

L'interface a été entièrement forgée sur base d'un design moderne (Dark Mode, layout Premium, couleurs vibrantes) afin d'offrir l'expérience d'apprentissage la plus attrayante possible pour revaloriser nos langues locales.

## ✨ Fonctionnalités Clés

- 🎨 **Interface Dark Mode Premium** : Un design moderne, épuré et accrocheur, parfait pour de longues sessions d'apprentissage.
- 📊 **Tableau de Bord Étudiant (Dashboard)** : Visualisez le niveau de l'utilisateur, le nombre de leçons passées (`126 level`, `14 quizzes`, `170 hours`), et suivez sa progression de la semaine via un graphique interactif en barres.
- 🗣️ **Pratique de la parole (AI Speaking)** : Un outil de simulation pour s'exercer à lire et parler la langue de façon assistée par une intelligence artificielle, incluant un visuel d'ondes sonores (Waveform).
- 📚 **Catégories & Révisions Rapides (Fast Repeat)** : Accédez rapidement à des exercices de vocabulaire de 10 min, de grammaire et d'écoute. Possibilité de choisir des thématiques spécifiques (Food, Traveling, Work...).
- 🗄️ **Backend Interactif** : L'API Node.js/Express connectée charge de véritables données, fournissant notamment **50 mots Kilega essentiels** avec leur traduction catégorisée en français.

## 🛠️ Stack Technique

- **Frontend (Client)** : `React.js` propulsé par `Vite`, stylisation avancée via `TailwindCSS v3`, avec les icônes `Lucide-React`.
- **Backend (Serveur)** : `Node.js` et `Express.js`, servant une base de données simulée (In-memory DB pour le prototypage immédiat).

## 🚀 Installation & Démarrage

Ce projet nécessite [Node.js](https://nodejs.org/) installé sur votre poste. L'Application est composée de deux parties à démarrer simultanément.

### 1. Démarrer l'API (Backend)

Ouvrez un terminal, placez-vous dans le dossier `server` :

```bash
cd server
npm install
npm run dev
# L'API tourne sur http://localhost:5000
```
*(Le backend sert nos 50 mots en Kilega, nos données statistiques et gère les requêtes)*

### 2. Démarrer l'Interface Graphique (Frontend)

Ouvrez un **deuxième** terminal, placez-vous dans le dossier `client` :

```bash
cd client
npm install
npm run dev
# L'App React est accessible sur http://localhost:5173
```

Ouvrez ensuite cotre navigateur sur la page `http://localhost:5173` pour admirer le tableau de bord.

## 🤝 Contribution

Les commits sont poussés sur la branche principale après validation stricte des signatures (règles Github). Toute amélioration du design, et spécifiquement l'ajout de nouvelles leçons audio en Kilega, sont les bienvenues !
