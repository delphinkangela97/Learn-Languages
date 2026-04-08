import express from 'express';
import cors from 'cors';
import { kilegaWords } from './data/kilega_words.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock DB
const db = {
  users: [
    { id: 1, name: "Marianna Carson", role: "student", level: 126, quizzesCompleted: 14, hoursSpent: 170 }
  ],
  words: kilegaWords,
  forumMessages: [
    { id: 1, author: "Marianna Carson", text: "Quelqu'un pour pratiquer le Kilega ce soir ?", timestamp: new Date() }
  ],
  quizzes: [
    { id: 1, title: "Vocabulaire de base", questions: 10 }
  ]
};

// Users routes
app.get('/api/user', (req, res) => {
  // Mock logged in user
  res.json(db.users[0]);
});

app.post('/api/auth/login', (req, res) => {
  // Mock login
  res.json({ token: "mock_token", user: db.users[0] });
});

// Words & Vocabulary
app.get('/api/words', (req, res) => {
  res.json(db.words);
});

// Forum routes
app.get('/api/forum', (req, res) => {
  res.json(db.forumMessages);
});

app.post('/api/forum', (req, res) => {
  const newMsg = {
    id: db.forumMessages.length + 1,
    author: db.users[0].name,
    text: req.body.text,
    timestamp: new Date()
  };
  db.forumMessages.push(newMsg);
  res.status(201).json(newMsg);
});

// Trainings/Quizzes routes
app.get('/api/trainings/summary', (req, res) => {
  res.json({
    vocabulary: { words: 12567, title: "Vocabulary" },
    listening: { hoursAudio: 37, title: "Listening" },
    grammar: { lessons: 60, title: "Grammar" }
  });
});

app.get('/api/quizzes', (req, res) => {
  res.json(db.quizzes);
});

app.get('/', (req, res) => {
  res.send('API Backend LobaLang (Kilega) fonctionne avec succès !');
});

app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
