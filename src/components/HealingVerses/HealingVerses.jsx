import { useState } from 'react';
import { Sparkles, Heart, Brain, CloudRain, Flame, Smile, RefreshCw } from 'lucide-react';
import { healingVerses } from '../../data/healingVerses';
import './HealingVerses.css';

const moodConfigs = {
  anxious: { label: 'Cemas', icon: Brain, emoji: '🧠', className: 'mood-btn--anxious' },
  sad: { label: 'Sedih', icon: CloudRain, emoji: '😢', className: 'mood-btn--sad' },
  disappointed: { label: 'Kecewa', icon: Heart, emoji: '💔', className: 'mood-btn--disappointed' },
  angry: { label: 'Marah', icon: Flame, emoji: '⚡', className: 'mood-btn--angry' },
  grateful: { label: 'Bersyukur', icon: Smile, emoji: '🌸', className: 'mood-btn--grateful' }
};

export default function HealingVerses() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [activeVerse, setActiveVerse] = useState(null);
  const [animate, setAnimate] = useState(false);

  // Trigger animation reset when verse changes
  const handleMoodSelect = (mood) => {
    if (selectedMood === mood) {
      // If same mood, rotate through available verses
      const list = healingVerses[mood];
      if (list && list.length > 1) {
        setAnimate(false);
        setTimeout(() => {
          const currentIndex = list.findIndex(v => v.id === activeVerse?.id);
          const nextIndex = (currentIndex + 1) % list.length;
          setActiveVerse(list[nextIndex]);
          setAnimate(true);
        }, 50);
        return;
      }
    }

    const list = healingVerses[mood];
    if (list && list.length > 0) {
      setSelectedMood(mood);
      setAnimate(false);
      setTimeout(() => {
        // Choose first verse initially
        setActiveVerse(list[0]);
        setAnimate(true);
      }, 50);
    }
  };

  const handleNextVerse = () => {
    if (!selectedMood) return;
    const list = healingVerses[selectedMood];
    if (list && list.length > 1) {
      setAnimate(false);
      setTimeout(() => {
        const currentIndex = list.findIndex(v => v.id === activeVerse?.id);
        const nextIndex = (currentIndex + 1) % list.length;
        setActiveVerse(list[nextIndex]);
        setAnimate(true);
      }, 50);
    }
  };

  return (
    <div className="healing-verses card" id="healing-verses-widget">
      <div className="healing-verses__header">
        <span className="section__badge">
          <Sparkles size={14} />
          Ruang Tenang
        </span>
        <h3>Ayat Penenang Hati 🌸</h3>
        <p>Bagaimana kabar hatimu saat ini? Pilih salah satu keadaan di bawah untuk membaca firman-Nya yang menenangkan jiwa.</p>
      </div>

      {/* Mood Buttons Grid */}
      <div className="healing-verses__moods">
        {Object.entries(moodConfigs).map(([moodKey, cfg]) => {
          const Icon = cfg.icon;
          const isSelected = selectedMood === moodKey;
          return (
            <button
              key={moodKey}
              onClick={() => handleMoodSelect(moodKey)}
              className={`btn healing-verses__mood-btn ${cfg.className} ${isSelected ? 'active' : ''}`}
            >
              <Icon size={16} />
              <span>{cfg.label}</span>
              <span className="mood-emoji">{cfg.emoji}</span>
            </button>
          );
        })}
      </div>

      {/* Display Active Verse */}
      {selectedMood && activeVerse && (
        <div className={`healing-verses__card ${animate ? 'revealed' : ''}`}>
          <div className="healing-verses__card-inner">
            <span className="healing-verses__mood-badge">
              Keadaan: {moodConfigs[selectedMood].label} {moodConfigs[selectedMood].emoji}
            </span>
            
            <p className="healing-verses__arabic" dir="rtl">
              {activeVerse.arabic}
            </p>
            
            <p className="healing-verses__translation">
              "{activeVerse.translation}"
            </p>
            
            <cite className="healing-verses__source">
              — {activeVerse.verse}
            </cite>

            <div className="healing-verses__reflection">
              <h5>Refleksi Jiwa:</h5>
              <p>{activeVerse.reflection}</p>
            </div>

            {healingVerses[selectedMood]?.length > 1 && (
              <button 
                onClick={handleNextVerse} 
                className="btn btn--secondary btn--sm healing-verses__cycle-btn"
              >
                <RefreshCw size={12} />
                Baca Ayat Lain
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
