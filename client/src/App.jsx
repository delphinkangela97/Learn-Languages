import React, { useState, useEffect } from 'react';
import { BookOpen, Compass, User, Globe2, ArrowRight, Play, CheckCircle2, PlusCircle, BookText } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [lessons, setLessons] = useState([]);
  const [dictionary, setDictionary] = useState([]);
  const [activeTab, setActiveTab] = useState('home');
  const [newWord, setNewWord] = useState({ kilega: '', french: '', type: 'Général' });

  useEffect(() => {
    fetch('http://localhost:5000/api/lessons')
      .then(res => res.json())
      .then(data => setLessons(data))
      .catch(err => console.error('Erreur API:', err));
      
    fetchDictionary();
  }, []);

  const fetchDictionary = () => {
    fetch('http://localhost:5000/api/dictionary')
      .then(res => res.json())
      .then(data => setDictionary(data))
      .catch(err => console.error('Erreur API Dico:', err));
  };

  const handleAddWord = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/dictionary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newWord)
    })
    .then(res => res.json())
    .then(data => {
      setDictionary([...dictionary, data]);
      setNewWord({ kilega: '', french: '', type: 'Général' });
    })
    .catch(err => console.error('Erreur lors de l\'ajout:', err));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">
      
      {/* Navigation */}
      <nav className="w-full bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-sm sticky top-0 z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto rounded-b-2xl">
        <div className="flex items-center gap-2">
          <Globe2 className="h-8 w-8 text-brand-primary" />
          <span className="text-2xl font-bold text-slate-800">
            Loba<span className="text-brand-primary">Lang</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium tracking-wide">
          <button onClick={() => setActiveTab('home')} className={`${activeTab === 'home' ? 'text-brand-primary font-bold' : 'hover:text-brand-primary'} transition`}>Apprendre</button>
          <button onClick={() => setActiveTab('dictionary')} className={`${activeTab === 'dictionary' ? 'text-brand-primary font-bold' : 'hover:text-brand-primary'} transition flex items-center gap-2`}><BookText className="h-4 w-4"/> Dictionnaire</button>
          <a href="#" className="hover:text-brand-primary transition">Classement</a>
        </div>
        <button className="bg-brand-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-brand-primary/30 flex items-center gap-2">
          <User className="h-4 w-4" /> Profil
        </button>
      </nav>

      {activeTab === 'home' && (
      <>
      {/* Hero Section */}
      <main className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between p-6 mt-12 mb-24 gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8"
        >
          <div className="inline-flex items-center rounded-full border border-yellow-200 bg-yellow-50 px-4 py-1 text-sm font-medium text-yellow-800">
            <span className="flex h-2 w-2 rounded-full bg-brand-secondary mr-2"></span>
            Nouveau: Leçons de Kilega disponibles !
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Maîtrisez les <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-blue-600 to-brand-accent">
              langues locales
            </span>
            <br/> de la RDC.
          </h1>
          
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            Plongez dans le Kilega, le Lingala, et plus encore. Apprenez le vocabulaire, pratiquez la prononciation et découvrez la richesse culturelle congolaise dans une aventure amusante.
          </p>
          
          <div className="flex gap-4">
            <button className="bg-brand-primary hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl font-bold transition shadow-xl shadow-brand-primary/30 flex items-center gap-3">
              Commencer <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 text-lg px-8 py-4 rounded-xl font-bold transition flex items-center gap-3">
              Voir tous les dialectes
            </button>
          </div>
        </motion.div>

        {/* Hero Interactive Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 relative w-full flex justify-center"
        >
          {/* Cercles de fond stylisés */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/20 to-brand-primary/20 rounded-full blur-3xl transform -rotate-12 scale-110"></div>
          
          <div className="bg-white p-8 rounded-3xl shadow-2xl relative z-10 border border-slate-100 max-w-sm w-full">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-500 font-medium">Mot du jour</span>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md font-bold flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" /> Facile
              </span>
            </div>
            
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-4xl font-extrabold text-slate-900">Mbwakya</h2>
              <p className="text-slate-400 font-medium italic">/mbwa-kya/</p>
              <div className="h-px bg-slate-100 w-full my-4"></div>
              <p className="text-2xl font-bold text-brand-primary">Bonjour</p>
            </div>
            
            <button className="w-full bg-slate-50 hover:bg-slate-100 border-2 border-slate-200 text-slate-700 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition group">
              <Play className="h-5 w-5 text-brand-accent group-hover:scale-110 transition" fill="currentColor" />
              Écouter la prononciation
            </button>
          </div>
        </motion.div>
      </main>

      {/* Backend Integration Section */}
      <section className="w-full max-w-7xl p-6 mb-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3 mb-2">
              <Compass className="h-8 w-8 text-lega-orange" />
              Unité 1 : Les bases en Kilega
            </h2>
            <p className="text-slate-500">Données chargées en direct depuis notre serveur Node.js</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.length > 0 ? lessons.map((lesson, idx) => (
            <motion.div 
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-brand-secondary transition cursor-pointer group shadow-sm hover:shadow-xl flex flex-col"
            >
              <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 transition">
                <BookOpen className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{lesson.title}</h3>
              <p className="text-slate-500 mb-6 flex-1">{lesson.description}</p>
              
              <div className="flex justify-between items-center w-full mt-auto">
                <div className="bg-slate-100 h-2 w-full rounded-full overflow-hidden mr-4">
                  <div className="bg-brand-primary h-full w-1/3 rounded-full"></div>
                </div>
                <span className="text-slate-400 font-medium text-sm">0/5</span>
              </div>
            </motion.div>
          )) : (
            <div className="col-span-3 text-center py-16 bg-white shadow-sm font-medium border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary"></div>
              <p className="text-slate-500">En attente du serveur Node.js sur le port 5000...</p>
            </div>
          )}
        </div>
      </section>
      </>
      )}

      {/* Dictionary Section */}
      {activeTab === 'dictionary' && (
        <section className="w-full max-w-7xl p-6 mb-24">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* List of words */}
            <div className="flex-1">
               <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3 mb-6">
                <BookText className="h-8 w-8 text-brand-primary" />
                Dictionnaire Kilega
              </h2>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr>
                      <th className="p-4 font-semibold text-slate-600">Kilega</th>
                      <th className="p-4 font-semibold text-slate-600">Français</th>
                      <th className="p-4 font-semibold text-slate-600">Catégorie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dictionary.map((word) => (
                      <tr key={word.id} className="border-b border-slate-50 hover:bg-slate-50 transition">
                        <td className="p-4 font-bold text-brand-primary text-lg">{word.kilega}</td>
                        <td className="p-4 text-slate-700">{word.french}</td>
                        <td className="p-4 text-sm text-slate-500">
                          <span className="bg-slate-100 px-3 py-1 rounded-full font-medium">{word.type}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Add word form */}
            <div className="w-full lg:w-96 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-fit">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <PlusCircle className="h-6 w-6 text-lega-orange" />
                Ajouter un mot
              </h3>
              <form onSubmit={handleAddWord} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Mot en Kilega 🇨🇩</label>
                  <input required value={newWord.kilega} onChange={e => setNewWord({...newWord, kilega: e.target.value})} type="text" className="w-full border-2 border-slate-200 rounded-xl p-3 focus:outline-none focus:border-brand-primary transition" placeholder="Ex: Isango" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Traduction Française 🇫🇷</label>
                  <input required value={newWord.french} onChange={e => setNewWord({...newWord, french: e.target.value})} type="text" className="w-full border-2 border-slate-200 rounded-xl p-3 focus:outline-none focus:border-brand-primary transition" placeholder="Ex: L'amitié" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Catégorie</label>
                  <select value={newWord.type} onChange={e => setNewWord({...newWord, type: e.target.value})} className="w-full border-2 border-slate-200 rounded-xl p-3 focus:outline-none focus:border-brand-primary bg-white transition">
                    <option>Général</option>
                    <option>Salutation</option>
                    <option>Politesse</option>
                    <option>Famille</option>
                    <option>Nature</option>
                    <option>Proverbe (Bwami)</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-brand-primary hover:bg-blue-700 text-white text-lg font-bold py-4 px-4 rounded-xl transition shadow-lg shadow-brand-primary/40 mt-4 flex justify-center gap-2">
                  <PlusCircle /> Sauvegarder
                </button>
              </form>
            </div>

          </div>
        </section>
      )}
    </div>
  );
}

export default App;
