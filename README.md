# 🌍 MUTENDEZI WA KILEGA : Préservation & Apprentissage du Kilega (Kirega)

![Banner Placeholder](https://via.placeholder.com/1000x300/007FFF/ffffff?text=MUTENDEZI+WA+KILEGA+-+Culture+Lega)

## 📖 À propos du projet
**MUTENDEZI WA KILEGA** est une plateforme éducative interactive dédiée à l'apprentissage des dialectes de la République Démocratique du Congo. L'objectif premier et le cœur de cette application est de **faire valoir, préserver et transmettre la langue et la richesse de la culture Lega (Kilega/Kirega)**.

Ce projet numérique ambitionne de rapprocher la diaspora, les chercheurs et la jeune génération congolaise de leurs racines à travers un outil ludique et moderne.

## ✨ Fonctionnalités Essentielles

*   **📘 Dictionnaire Interactif (Focus Actuel)** : Un outil puissant permettant de chercher des traductions Français ↔ Kilega.
*   **➕ Ajout Collaboratif de Mots** : Les locuteurs et passionnés pourront enrichir eux-mêmes le dictionnaire via une interface permettant de rajouter le mot, sa prononciation, et son contexte culturel (ex: lié au Bwami).
*   **🎓 Parcours d'Apprentissage** : Des leçons progressives (Salutations, Nombres, Vocabulaire du quotidien, Proverbes).
*   **🔊 Prononciation Audio** (À venir).

## 🛠️ Stack Technique
Cette application fullstack est divisée en deux parties :
*   **Interface Graphique (Client)** : Construit en `React.js` (avec Vite), stylisé avec `TailwindCSS v3` et enrichi en animations par `Framer Motion`.
*   **Serveur & API (Backend)** : Construit en `Node.js` avec le framework `Express`.

## 🚀 Comment démarrer l'application sur votre machine ?

### 1. Prérequis
Assurez-vous d'avoir installé **[Node.js](https://nodejs.org/en)** sur votre système.

### 2. Démarrage Automatique (Recommandé sur Windows)
Exécutez le script PowerShell inclus à la racine :
```powershell
.\start.ps1
```

### 3. Démarrage Manuel (Alternative)
Il faut lancer le serveur et le client indépendamment. Ouvrez deux terminaux différents :

**Terminal 1 (Backend) :**
```bash
cd server
npm install
npm start
# Le serveur tourne sur http://localhost:5000
```

**Terminal 2 (Frontend) :**
```bash
cd client
npm install
npm run dev
# L'application tourne sur http://localhost:5173
```

## 🤝 Contribuer et Développer (Branche `dev`)
Nous codons actuellement sur la branche `dev`. La prochaine grande étape est de lier notre dictionnaire Kilega avec une base de données réelle pour permettre la fonctionnalité d'ajout de mots et de proverbes de sagesse Lega.

*Mbwa kya !* (Bonjour ! Rejoignez-nous ! )
