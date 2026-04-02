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

app.get('/', (req, res) => {
  res.send('API Backend LobaLang fonctionne avec succès !');
});

app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
