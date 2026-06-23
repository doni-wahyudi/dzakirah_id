import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, Heart, CheckCircle2, ChevronRight, AlertCircle, RefreshCw } from 'lucide-react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import './TaarufQuizPage.css';

const quizQuestions = [
  {
    id: 1,
    dimension: 'Spiritual & Fiqih',
    question: 'Apakah kamu sudah memahami dasar-dasar fiqih munakahat (hukum nikah, rukun nikah, serta hak & kewajiban suami istri dalam Islam)?',
    options: [
      { text: 'Ya, saya sudah mempelajarinya secara mendalam dan memahaminya.', score: 3 },
      { text: 'Sudah tahu dasar-dasarnya, tapi merasa masih banyak yang perlu dipelajari.', score: 2 },
      { text: 'Belum belajar secara khusus, hanya tahu hal-hal umum saja.', score: 1 }
    ]
  },
  {
    id: 2,
    dimension: 'Regulasi Emosi',
    question: 'Ketika dihadapkan pada situasi yang memicu amarah atau stres dalam hubungan, bagaimana kamu biasanya merespon emosi dirimu?',
    options: [
      { text: 'Mengambil jeda/silent pause untuk tenang terlebih dahulu, lalu mendiskusikannya dengan kepala dingin.', score: 3 },
      { text: 'Terkadang mendiamkan pasangan (silent treatment) atau terpancing berdebat sebentar sebelum akhirnya tenang.', score: 2 },
      { text: 'Cenderung terbawa emosi meledak-ledak saat itu juga atau melarikan diri dari masalah.', score: 1 }
    ]
  },
  {
    id: 3,
    dimension: 'Visi Misi Keluarga',
    question: 'Sudahkah kamu merumuskan visi-misi hidup, nilai-nilai pengasuhan, serta pembagian peran rumah tangga yang ingin kamu bangun bersama pasangan?',
    options: [
      { text: 'Sudah merumuskannya dengan jelas dan siap mendiskusikannya secara mendalam.', score: 3 },
      { text: 'Sudah terpikir secara garis besar, namun belum merumuskannya secara detail dan tertulis.', score: 2 },
      { text: 'Belum terpikirkan sama sekali, mengalir saja setelah menikah nanti.', score: 1 }
    ]
  },
  {
    id: 4,
    dimension: 'Komunikasi & Transparansi',
    question: 'Bagaimana kesiapanmu untuk mendiskusikan topik-topik sensitif (keadaan finansial, utang, mertua, riwayat kesehatan, hingga karir) secara terbuka sebelum menikah?',
    options: [
      { text: 'Sangat siap dan bersedia terbuka 100% demi membangun kejujuran sejak awal.', score: 3 },
      { text: 'Siap terbuka, tetapi masih ada beberapa hal yang rasanya enggan atau sungkan dibicarakan.', score: 2 },
      { text: 'Belum siap dan lebih memilih menyimpannya sendiri agar tidak memicu konflik pranikah.', score: 1 }
    ]
  },
  {
    id: 5,
    dimension: 'Visi Parenting',
    question: 'Seberapa jauh kamu menyelaraskan pemahaman mengenai ilmu parenting (pola pengasuhan anak) secara islami maupun psikologis?',
    options: [
      { text: 'Sudah mulai belajar membaca buku/mengikuti kelas parenting demi menyiapkan generasi berikutnya.', score: 3 },
      { text: 'Tahu pentingnya mendidik anak, tapi belum meluangkan waktu khusus untuk mempelajari ilmunya.', score: 2 },
      { text: 'Belum terpikir untuk belajar parenting karena menganggap itu urusan nanti setelah punya anak.', score: 1 }
    ]
  }
];

export default function TaarufQuizPage() {
  useDocumentTitle('Quiz Kesiapan Pranikah');
  
  const [currentStep, setCurrentStep] = useState(0); // 0: Intro, 1-5: Questions, 6: Result
  const [answers, setAnswers] = useState({});
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(null);

  const handleStartQuiz = () => {
    setCurrentStep(1);
    setAnswers({});
    setSelectedOptionIdx(null);
  };

  const handleOptionSelect = (idx) => {
    setSelectedOptionIdx(idx);
  };

  const handleNextStep = () => {
    if (selectedOptionIdx === null) return;
    
    // Save answer
    const currentQuestion = quizQuestions[currentStep - 1];
    const selectedOption = currentQuestion.options[selectedOptionIdx];
    setAnswers({
      ...answers,
      [currentQuestion.id]: selectedOption.score
    });

    setSelectedOptionIdx(null);

    // Go to next step
    if (currentStep < quizQuestions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(currentStep + 1); // Render result
    }
  };

  const handleRestartQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setSelectedOptionIdx(null);
  };

  // Calculate results
  const totalScore = Object.values(answers).reduce((acc, score) => acc + score, 0);

  const getResultDetails = (score) => {
    if (score >= 13) {
      return {
        badge: 'Masya Allah, Siap Melangkah! 🌸',
        title: 'Kesiapan Pranikah Kategori: KOKOH & MATANG',
        desc: 'Kamu memiliki landasan ilmu dan pemahaman emosi yang sangat baik. Kesiapanmu untuk membangun rumah tangga sakinah tergolong matang. Tetap jaga kelurusan niat dan lanjutkan berikhtiar dengan ta\'aruf yang syar\'i.',
        tips: [
          'Jaga konsistensi dzikir dan istikharah dalam melangkah.',
          'Diskusikan keselarasan visi-misi tertulismu dengan calon pasangan.',
          'Ikuti webinar/event pranikah Dzakirah untuk memperluas perspektif praktis.'
        ],
        className: 'result-card--green'
      };
    } else if (score >= 9) {
      return {
        badge: 'Sedang Berproses, Butuh Pembekalan! 📖',
        title: 'Kesiapan Pranikah Kategori: BERPROSES & PERLU PEMBEKALAN',
        desc: 'Kamu sudah memiliki bekal dasar yang baik. Namun, ada beberapa pilar krusial (seperti regulasi emosi atau transparansi visi keluarga) yang perlu kamu diskusikan dan kuatkan lagi sebelum ijab kabul.',
        tips: [
          'Perbanyak membaca artikel pranikah di blog Dzakirah terkait manajemen finansial dan konflik.',
          'Luangkan waktu untuk melatih regulasi emosi dan self-healing.',
          'Diskusikan secara mendalam hal-hal krusial sebelum memutuskan khitbah.'
        ],
        className: 'result-card--yellow'
      };
    } else {
      return {
        badge: 'Mulai Bangun Fondasi Dasar! 🌱',
        title: 'Kesiapan Pranikah Kategori: FONDASI AWAL',
        desc: 'Menikah adalah ibadah seumur hidup yang memerlukan ilmu yang luas. Skor kamu menunjukkan bahwa saat ini adalah momen terbaik untuk fokus belajar, membenahi diri, dan membekali jiwa dengan fiqih pernikahan sebelum melangkah lebih jauh.',
        tips: [
          'Ikuti Kelas Intensif Pranikah Dzakirah untuk belajar dari fasilitator ahli secara bertahap.',
          'Belajarlah mengenali diri sendiri (muhasabah) dan mengelola konflik interpersonal sehari-hari.',
          'Jangan tergesa-gesa melangkah tanpa bekal ilmu syar\'i yang cukup.'
        ],
        className: 'result-card--red'
      };
    }
  };

  const result = currentStep > quizQuestions.length ? getResultDetails(totalScore) : null;

  return (
    <main className="taaruf-quiz-page" id="taaruf-quiz-page">
      {/* Hero Header */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb">
              <Link to="/">Beranda</Link>
              <span>/</span>
              <Link to="/program">Program</Link>
              <span>/</span>
              <span>Quiz Pranikah</span>
            </nav>
            <h1>Quiz Kesiapan Pranikah 💍</h1>
            <p>Ukur tingkat kesiapan bekal ilmumu sebelum menempuh kehidupan rumah tangga sakinah, mawaddah, wa rahmah.</p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="section">
        <div className="container container--narrow">
          <div className="quiz-card-wrapper">
            
            {/* 0. INTRO STATE */}
            {currentStep === 0 && (
              <div className="quiz-card card text-center">
                <div className="quiz-card__badge-wrap">
                  <span className="section__badge">
                    <Heart size={14} />
                    Pranikah Prep
                  </span>
                </div>
                <h2>Seberapa Siapkah Kamu Menikah?</h2>
                <p className="quiz-card__intro-text">
                  Pernikahan bukan sekadar penyatuan dua hati, melainkan ibadah terpanjang yang menuntut kesiapan ilmu, mental, spiritual, dan emosi. Jawab 5 pertanyaan reflektif berikut secara jujur untuk mengecek bekal kesiapanmu.
                </p>
                <div className="quiz-card__features">
                  <div className="quiz-feat">
                    <span className="feat-emoji">📖</span>
                    <h5>Evaluasi Fiqih & Mental</h5>
                  </div>
                  <div className="quiz-feat">
                    <span className="feat-emoji">⏱️</span>
                    <h5>Estimasi Waktu: 2 Menit</h5>
                  </div>
                  <div className="quiz-feat">
                    <span className="feat-emoji">🌷</span>
                    <h5>100% Khusus Muslimah</h5>
                  </div>
                </div>
                <button 
                  onClick={handleStartQuiz}
                  className="btn btn--primary btn--pill btn--lg quiz-card__start-btn"
                >
                  Mulai Quiz Kesiapan <ChevronRight size={18} />
                </button>
              </div>
            )}

            {/* 1-5. QUESTION STATE */}
            {currentStep > 0 && currentStep <= quizQuestions.length && (
              <div className="quiz-card card">
                <div className="quiz-card__progress">
                  <span className="progress-text">Pertanyaan {currentStep} dari {quizQuestions.length}</span>
                  <div className="progress-bar-wrap">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: `${(currentStep / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="quiz-card__question-wrap">
                  <span className="question-dimension">{quizQuestions[currentStep - 1].dimension}</span>
                  <h3 className="question-title">{quizQuestions[currentStep - 1].question}</h3>
                </div>

                <div className="quiz-card__options">
                  {quizQuestions[currentStep - 1].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      className={`quiz-option-btn ${selectedOptionIdx === idx ? 'selected' : ''}`}
                    >
                      <div className="option-radio">
                        <div className="option-radio-dot" />
                      </div>
                      <span className="option-text">{option.text}</span>
                    </button>
                  ))}
                </div>

                <div className="quiz-card__footer-actions">
                  <button 
                    onClick={handleRestartQuiz}
                    className="btn btn--secondary btn--sm"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={selectedOptionIdx === null}
                    className="btn btn--primary btn--pill btn--lg"
                  >
                    {currentStep === quizQuestions.length ? 'Lihat Hasil' : 'Lanjut'} 
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* 6. RESULT STATE */}
            {currentStep > quizQuestions.length && result && (
              <div className="quiz-card card">
                <div className={`result-header card ${result.className}`}>
                  <span className="result-badge">{result.badge}</span>
                  <h2>Skor Kesiapanmu: {totalScore} / 15</h2>
                  <h3>{result.title}</h3>
                </div>

                <div className="result-body">
                  <p className="result-desc">{result.desc}</p>
                  
                  <div className="result-tips-box">
                    <h4>💡 Rekomendasi Tindak Lanjut:</h4>
                    <ul>
                      {result.tips.map((tip, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={16} className="tip-check-icon" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="result-footer-actions">
                  <button
                    onClick={handleRestartQuiz}
                    className="btn btn--secondary btn--pill"
                  >
                    <RefreshCw size={14} /> Ulangi Quiz
                  </button>
                  <Link
                    to="/program/pranikah"
                    className="btn btn--primary btn--pill"
                  >
                    Pelajari Kelas Pranikah
                  </Link>
                </div>
              </div>
            )}

            <div className="text-center mt-8">
              <Link to="/program/pranikah" className="back-link inline-flex align-items-center gap-2">
                <ArrowLeft size={16} /> Kembali ke Program Pranikah
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
