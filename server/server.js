import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const kilegaLessons = [
  { id: 1, title: "Les Salutations", description: "Apprenez à dire bonjour (Mbwakya), et à demander comment ça va.", level: "Débutant" },
  { id: 2, title: "La Famille et le Clan", description: "Apprenez à nommer les membres de votre famille (Tata, Mama, Muku).", level: "Débutant" },
  { id: 3, title: "Au Marché", description: "Vocabulaire essentiel pour négocier et compter en Kilega.", level: "Intermédiaire" }
];

app.get('/api/lessons', (req, res) => {
  res.json(kilegaLessons);
});

let dictionary = [
  { id: 1, kilega: "Mbwakya", french: "Bonjour (le matin)", type: "Salutation" },
  { id: 2, kilega: "Kasinge", french: "Merci", type: "Politesse" },
  { id: 3, kilega: "Mwenga", french: "Bienvenue", type: "Salutation" },
  { id: 4, kilega: "Lutenda", french: "Règle de vie / Proverbe", type: "Proverbe (Bwami)" },
  { id: 5, kilega: "Mutima", french: "Le cœur / L'âme", type: "Sagesse" }
];

app.get('/api/dictionary', (req, res) => {
  res.json(dictionary);
});

app.post('/api/dictionary', (req, res) => {
  const newWord = {
    id: dictionary.length + 1,
    kilega: req.body.kilega,
    french: req.body.french,
    type: req.body.type || "Général"
  };
  dictionary.push(newWord);
  res.status(201).json(newWord);
});

app.get('/', (req, res) => {
  res.send('API Backend MUTENDEZI WA KILEGA fonctionne avec succès !');
});

app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
