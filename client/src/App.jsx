import React, { useState, useEffect } from 'react';
import { 
  Video, Mic, Mic2, Play, Book, Headphones, FileText, 
  Settings, Bell, Search, Plus, Clock, BarChart2, Check,
  Pizza, Plane, Activity, Cat, Heart, Microscope, Briefcase, Hash,
  ArrowUpRight, Bot
} from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [quizzesCompleted, setQuizzesCompleted] = useState(14);
  const [level, setLevel] = useState(126);
  const [hours, setHours] = useState(170);

  // Fetch from our local backend
  useEffect(() => {
    fetch('http://localhost:5000/api/user')
      .then(res => res.json())
      .then(data => {
        if(data) {
          setLevel(data.level);
          setQuizzesCompleted(data.quizzesCompleted);
          setHours(data.hoursSpent);
        }
      }).catch(err => console.log('Backend not connected, using defaults.'));
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-light-text font-outfit p-4 lg:p-8 flex justify-center">
      <div className="max-w-[1400px] w-full flex flex-col gap-8">
        
        {/* Navigation */}
        <nav className="flex items-center justify-between w-full h-20 rounded-3xl bg-card-bg px-6 shadow-lg border border-white/5">
          {/* Left Nav */}
          <div className="flex items-center gap-2 md:gap-6">
            <button className="text-gray-text hover:text-white transition font-medium px-4">Courses</button>
            <button className="bg-primary-purple text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-primary-purple/20 transition">
              Dashboard
            </button>
            <button className="text-gray-text hover:text-white transition font-medium px-4">Schedule</button>
            <button className="text-gray-text hover:text-white transition font-medium px-4">Forum</button>
          </div>

          {/* Center Logo */}
          <div className="hidden lg:flex items-center gap-2 font-bold text-xl tracking-wide">
            <div className="w-6 h-6 rounded-full bg-vibrant-orange flex items-center justify-center opacity-80">
              <div className="w-2 h-2 bg-dark-bg rounded-full"></div>
            </div>
            <span>LANGE</span>
          </div>

          {/* Right Nav */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex bg-card-bg-light rounded-full p-1.5 px-3 items-center gap-3 border border-white/5">
              <span className="text-xl" title="Spain">🇪🇸</span>
              <span className="text-xl" title="Ukraine">🇺🇦</span>
              <span className="text-xl" title="Japan">🇯🇵</span>
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">+6</div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="font-bold text-sm">Marianna Carson</p>
                <p className="text-xs text-gray-text">Student</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                alt="Profile" 
                className="w-10 h-10 rounded-full border-2 border-card-bg-light object-cover"
              />
            </div>
          </div>
        </nav>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-6">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            
            {/* Video Call Section */}
            <div className="relative w-full h-[320px] rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Video Call" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-sm font-medium">Francesca</span>
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-sm font-medium w-fit">Martin</span>
              </div>
              
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-vibrant-green rounded-full animate-pulse"></div>
                <span className="font-bold text-sm drop-shadow-md">ONLINE</span>
              </div>
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <button className="bg-primary-purple hover:bg-primary-purple-hover text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-black/20 transition-all hover:scale-105">
                  <Video className="w-5 h-5" /> Join speaking club
                </button>
              </div>
            </div>

            {/* Trainings */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Trainings</h2>
                <span className="text-sm text-gray-text">Easily improve language knowlage every day!</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {/* Vocabulary */}
                <div className="bg-vibrant-green text-dark-bg p-5 rounded-2xl relative overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-vibrant-green/20 transition-all">
                  <h3 className="font-bold text-lg mb-1 relative z-10">Vocabulary</h3>
                  <p className="text-xs font-semibold opacity-80 mb-6 relative z-10">12 567 words</p>
                  <div className="w-full h-1.5 bg-dark-bg/20 rounded-full relative z-10">
                    <div className="w-3/4 h-full bg-dark-bg rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>

                {/* Listening */}
                <div className="bg-card-bg p-5 rounded-2xl cursor-pointer hover:bg-card-bg-light transition-colors border border-white/5">
                  <h3 className="font-bold text-lg mb-1 text-white">Listening</h3>
                  <p className="text-xs text-gray-text mb-6">37 h audio</p>
                  <div className="w-full h-1.5 bg-dark-bg rounded-full">
                    <div className="w-1/2 h-full bg-vibrant-orange rounded-full shadow-[0_0_8px_rgba(255,157,0,0.6)]"></div>
                  </div>
                </div>

                {/* Grammar */}
                <div className="bg-card-bg p-5 rounded-2xl cursor-pointer hover:bg-card-bg-light transition-colors border border-white/5">
                  <h3 className="font-bold text-lg mb-1 text-white">Grammar</h3>
                  <p className="text-xs text-gray-text mb-6">60 lessons</p>
                  <div className="w-full h-1.5 bg-dark-bg rounded-full">
                    <div className="w-1/3 h-full bg-vibrant-orange rounded-full shadow-[0_0_8px_rgba(255,157,0,0.6)]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Choose Category */}
            <div className="bg-card-bg rounded-3xl p-6 mt-2 border border-white/5">
              <h3 className="text-gray-text text-sm mb-4">Choose category</h3>
              <div className="grid grid-cols-4 gap-4">
                <CategoryBtn icon={<Pizza className="w-4 h-4"/>} text="Food" />
                <CategoryBtn icon={<Plane className="w-4 h-4"/>} text="Traveling" active />
                <CategoryBtn icon={<Activity className="w-4 h-4"/>} text="Sport" />
                <CategoryBtn icon={<Cat className="w-4 h-4"/>} text="Animals" />
                
                <CategoryBtn icon={<Heart className="w-4 h-4"/>} text="Health" />
                <CategoryBtn icon={<Microscope className="w-4 h-4"/>} text="Science" />
                <CategoryBtn icon={<Briefcase className="w-4 h-4"/>} text="Work" active />
                <CategoryBtn icon={<Hash className="w-4 h-4"/>} text="Other" />
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            
            {/* Top Stats Row */}
            <div className="grid grid-cols-[auto_1fr] gap-6">
              {/* PRO Card */}
              <div className="bg-gradient-to-br from-vibrant-orange to-[#ff5e00] rounded-3xl p-6 flex flex-col min-w-[180px] shadow-lg shadow-vibrant-orange/20 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                <div className="w-16 h-16 rounded-full bg-yellow-300/40 border border-yellow-200/50 flex flex-col items-center justify-center mx-auto mb-6 shadow-inner">
                   <span className="font-extrabold text-white text-xl leading-none">PRO</span>
                   <span className="text-[10px] text-white/90">student</span>
                </div>
                
                <div className="space-y-3 mt-auto">
                  <StatRow icon={<Check className="w-3.5 h-3.5"/>} val={level} label="level" />
                  <StatRow icon={<FileText className="w-3.5 h-3.5"/>} val={quizzesCompleted} label="quizzes" />
                  <StatRow icon={<Clock className="w-3.5 h-3.5"/>} val={hours} label="hours" />
                </div>
              </div>

              {/* Chart / Schedule */}
              <div className="bg-card-bg rounded-3xl p-6 flex flex-col justify-between border border-white/5">
                <div className="flex justify-between items-center px-2 mb-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                    <div key={day} className="flex flex-col items-center gap-3">
                      <span className={`text-xs ${i === 4 ? 'text-white font-bold' : 'text-gray-text'}`}>{day}</span>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${i < 5 ? 'bg-dark-bg' : 'bg-dark-bg/50'}`}>
                        {i < 5 && <kbd className="w-4 h-4 bg-vibrant-green rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-dark-bg" strokeWidth={3} />
                        </kbd>}
                        {i >= 5 && <Check className="w-3 h-3 text-gray-text/30" />}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Custom Bar Chart Simulation */}
                <div className="flex justify-between items-end h-32 px-2 gap-2">
                  <ChartBar height="h-20" color="bg-primary-purple" />
                  <ChartBar height="h-14" color="bg-primary-purple" />
                  <ChartBar height="h-24" color="bg-primary-purple" />
                  <ChartBar height="h-28" color="bg-primary-purple" />
                  <ChartBar height="h-16" color="bg-primary-purple" />
                  <ChartBar height="h-2" color="bg-primary-purple/30" />
                  <ChartBar height="h-2" color="bg-primary-purple/30" />
                </div>
              </div>
            </div>

            {/* Bottom Row: AI & Fast Repeat */}
            <div className="grid grid-cols-[1.2fr_1fr] gap-6 grow">
              
              {/* AI Practice */}
              <div className="bg-card-bg rounded-3xl p-6 relative overflow-hidden border border-white/5 flex flex-col">
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-purple/20 rounded-full blur-3xl"></div>
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <h3 className="text-white text-lg font-medium">Practice speaking</h3>
                  <div className="w-10 h-10 bg-vibrant-green rounded-full flex items-center justify-center text-dark-bg font-extrabold text-sm shadow-[0_0_15px_rgba(158,255,0,0.4)]">
                    AI
                  </div>
                </div>
                
                <p className="text-2xl lg:text-3xl font-medium leading-relaxed mb-8 relative z-10">
                  <span className="text-vibrant-orange">En un lugar de la<br/>Mancha</span>, de cuyo<br/>nombre no quiero<br/>acordarme ...
                </p>
                
                <div className="mt-auto flex items-center gap-4 relative z-10">
                  <button className="w-12 h-12 bg-primary-purple hover:bg-primary-purple-hover rounded-full flex items-center justify-center shadow-lg transition flex-shrink-0">
                    <Mic className="text-white w-5 h-5" />
                  </button>
                  {/* Waveform graphic mock */}
                  <div className="flex items-center gap-1 h-8 opacity-60">
                    {[3,6,4,8,5,10,12,7,8,14,9,6,3,7,4,9,11,8,4].map((h, i) => (
                      <div key={i} className="w-1 rounded-full bg-white" style={{ height: `${h * 2}px` }}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fast repeat */}
              <div className="bg-card-bg rounded-3xl p-6 relative flex flex-col border border-white/5">
                 <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary-purple/10 rounded-3xl"></div>
                 <h3 className="text-white text-lg font-medium mb-4 relative z-10 cursor-pointer">Fast repeat</h3>
                 <p className="text-primary-purple font-bold text-xl mb-2 relative z-10">Vocabulary</p>
                 <p className="text-gray-text text-sm flex items-center gap-1.5 relative z-10 mb-8"><Clock className="w-3.5 h-3.5" /> 10 min practice</p>
                 
                 {/* Robot illustration substitution */}
                 <div className="relative z-10 mt-auto flex justify-center mb-4">
                    <div className="w-24 h-24 bg-vibrant-orange rounded-[40px] rounded-tl-full rounded-br-[10px] transform rotate-12 flex items-center justify-center relative shadow-lg">
                      <div className="absolute top-6 flex gap-3">
                        <div className="w-3 h-1.5 bg-dark-bg rounded-full"></div>
                        <div className="w-3 h-1.5 bg-dark-bg rounded-full"></div>
                      </div>
                      <div className="absolute bottom-6 w-8 h-2 bg-dark-bg rounded-full"></div>
                      {/* Arms */}
                      <div className="absolute -left-4 top-10 w-8 h-3 bg-vibrant-orange rounded-full -rotate-45"></div>
                      <div className="absolute -right-4 top-10 w-8 h-3 bg-vibrant-orange rounded-full rotate-45"></div>
                    </div>
                 </div>

                 <div className="relative z-10">
                   <button className="w-10 h-10 bg-primary-purple hover:bg-primary-purple-hover rounded-full flex items-center justify-center transition shadow-lg mt-auto">
                     <ArrowUpRight className="text-white w-5 h-5" />
                   </button>
                 </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

// Subcomponents
function CategoryBtn({ icon, text, active }) {
  return (
    <button className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition ${
      active 
      ? 'bg-vibrant-orange text-white shadow-[0_0_15px_rgba(255,153,0,0.3)]' 
      : 'bg-primary-purple/20 text-white hover:bg-primary-purple/40 border border-primary-purple/30'
    }`}>
      {icon} {text}
    </button>
  );
}

function StatRow({ icon, val, label }) {
  return (
    <div className="flex items-center gap-2 text-white/90">
      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
        {icon}
      </div>
      <span className="font-bold text-sm tracking-wide">{val}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
}

function ChartBar({ height, color }) {
  return (
    <div className="w-full max-w-[2.5rem] h-full flex flex-col justify-end gap-1">
      <div className={`w-full bg-white/10 ${height} rounded-t-md relative overflow-hidden group hover:bg-white/20 transition-colors`}>
         {/* Simulate layered opacity for the bar */}
         <div className={`absolute bottom-0 w-full h-1/2 ${color}`}></div>
         <div className={`absolute bottom-1/2 w-full h-1/4 ${color} opacity-70`}></div>
         <div className={`absolute bottom-[75%] w-full h-1/4 ${color} opacity-40`}></div>
      </div>
    </div>
  );
}

export default App;
