import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, RefreshCw, Copy, Check, BookOpen } from 'lucide-react';
import { journalPrompts } from '../../data/journalPrompts';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import './JournalPromptsPage.css';

export default function JournalPromptsPage() {
  useDocumentTitle('Ruang Renung — Journal Prompts');
  const [activePrompt, setActivePrompt] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleGeneratePrompt = () => {
    setAnimate(false);
    setTimeout(() => {
      // Pick a random prompt from data, ensuring it is different if possible
      let randomIdx = Math.floor(Math.random() * journalPrompts.length);
      if (activePrompt && journalPrompts.length > 1) {
        while (journalPrompts[randomIdx].id === activePrompt.id) {
          randomIdx = Math.floor(Math.random() * journalPrompts.length);
        }
      }
      setActivePrompt(journalPrompts[randomIdx]);
      setAnimate(true);
    }, 50);
  };

  const handleCopyPrompt = () => {
    if (!activePrompt) return;
    navigator.clipboard.writeText(activePrompt.prompt);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  return (
    <main className="journal-prompts-page" id="journal-prompts-page">
      {/* Toast Notification */}
      {toastVisible && (
        <div className="toast-notification" role="status">
          <Check size={14} /> Prompt disalin!
        </div>
      )}

      {/* Hero section */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb">
              <Link to="/">Beranda</Link>
              <span>/</span>
              <Link to="/program">Program</Link>
              <span>/</span>
              <span>Ruang Renung</span>
            </nav>
            <h1>Ruang Renung ✍️</h1>
            <p>Temukan ketenangan jiwa dan kenali dirimu lebih dalam melalui petunjuk tulisan reflektif harian khusus muslimah.</p>
          </div>
        </div>
      </section>

      {/* Main interactive section */}
      <section className="section">
        <div className="container container--narrow">
          <div className="journal-widget-container">
            {/* Widget Card */}
            <div className="journal-widget card">
              <div className="journal-widget__header">
                <span className="section__badge">
                  <BookOpen size={14} />
                  Journaling Therapy
                </span>
                <h2>Mulai Refleksi Hari Ini</h2>
                <p>Amal ibadah menulis dapat membantu merapikan badai pikiran. Klik tombol di bawah untuk membantumu menemukan titik awal tulisan jurnalmu.</p>
              </div>

              {/* Prompt box resembling lined paper */}
              <div className="journal-widget__display-area">
                {activePrompt ? (
                  <div className={`journal-prompt-paper ${animate ? 'revealed' : ''}`}>
                    <span className="journal-prompt-paper__tag">
                      Kategori: {activePrompt.category}
                    </span>
                    <p className="journal-prompt-paper__text">
                      {activePrompt.prompt}
                    </p>
                    <button 
                      onClick={handleCopyPrompt} 
                      className="btn btn--secondary btn--sm journal-prompt-paper__copy"
                      title="Salin Prompt"
                    >
                      <Copy size={14} /> Salin Prompt
                    </button>
                  </div>
                ) : (
                  <div className="journal-prompt-paper journal-prompt-paper--empty">
                    <p>“Pikiran yang tidak dituangkan seringkali menumpuk menjadi beban. Tuliskanlah, karena kertas adalah cermin jiwa yang paling sabar mendengar.”</p>
                  </div>
                )}
              </div>

              {/* Action trigger */}
              <button 
                onClick={handleGeneratePrompt} 
                className="btn btn--primary btn--pill btn--lg journal-widget__btn"
              >
                <RefreshCw size={18} className={animate ? 'spinning' : ''} />
                {activePrompt ? 'Ganti Prompt Refleksi' : 'Dapatkan Prompt Refleksi'}
              </button>
            </div>

            {/* Practical journaling tips */}
            <div className="journal-tips card">
              <h3>Adab & Tips Menulis Jurnal Refleksi</h3>
              <ul>
                <li>
                  <strong>Ikhlaskan Niat:</strong> Mulailah dengan basmalah, niatkan menulis sebagai sarana bermuhasabah dan bersyukur kepada Allah SWT.
                </li>
                <li>
                  <strong>Tulis Tanpa Sensor:</strong> Jangan cemaskan tata bahasa, ejaan, atau kerapian tulisan. Biarkan kejujuran perasaanmu mengalir sepenuhnya di atas kertas.
                </li>
                <li>
                  <strong>Waktu Khusus:</strong> Luangkan waktu 10-15 menit di tempat yang sunyi tanpa gangguan notifikasi gadget.
                </li>
                <li>
                  <strong>Sembuhkan, Jangan Menghakimi:</strong> Jika tulisanmu berisi luapan amarah atau kesedihan, terima emosi itu sebagai bagian dari proses kemanusiaanmu, lalu akhiri dengan doa kelapangan dada.
                </li>
              </ul>
            </div>

            <div className="text-center mt-8">
              <Link to="/program/mental-health" className="back-link inline-flex align-items-center gap-2">
                <ArrowLeft size={16} /> Pelajari Kelas Mental Health Dzakirah
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
