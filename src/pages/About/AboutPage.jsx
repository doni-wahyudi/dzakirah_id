import { Link } from 'react-router-dom';
import { Heart, Eye, Target, Sparkles, Flower2, Users, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import './AboutPage.css';

const values = [
  { icon: Heart, title: 'Kasih Sayang', desc: 'Setiap interaksi dilandasi kasih sayang dan empati yang tulus.' },
  { icon: Eye, title: 'Ruang Aman', desc: 'Kami menyediakan tempat tanpa judgement untuk berbagi dan bertumbuh.' },
  { icon: Target, title: 'Berbasis Ilmu', desc: 'Setiap program didasarkan pada Al-Quran, Sunnah, dan ilmu pengetahuan modern.' },
  { icon: Users, title: 'Kebersamaan', desc: 'Kami percaya perjalanan bersama lebih ringan daripada sendirian.' },
];

export default function AboutPage() {
  useDocumentTitle('Tentang Kami');
  const storyRef = useScrollReveal();
  const visionRef = useScrollReveal();
  const valuesRef = useScrollReveal();

  return (
    <main className="about-page" id="about-page">
      {/* Hero Header */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb">
              <Link to="/">Beranda</Link>
              <span>/</span>
              <span>Tentang Kami</span>
            </nav>
            <h1>Tentang Dzakirah</h1>
            <p>Mengenal lebih dekat komunitas yang menjadi ruang pulih dan tumbuh untuk perempuan.</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section" ref={storyRef}>
        <div className="container">
          <div className="about-story scroll-reveal">
            <div className="about-story__text">
              <span className="section__badge"><Flower2 size={14} /> Cerita Kami</span>
              <h2>Dari Bandar Lampung untuk Indonesia</h2>
              <p>
                Dzakirah lahir pada tahun 2020 dari sebuah keresahan sederhana: <strong>banyak muslimah yang merasa sendirian dalam perjalanan mereka</strong>. Sendirian dalam menghadapi masalah mental health, sendirian dalam mempersiapkan pernikahan, dan sendirian dalam menjalani peran sebagai ibu.
              </p>
              <p>
                Berangkat dari keyakinan bahwa setiap perempuan berhak mendapatkan ruang yang aman untuk pulih dan bertumbuh, Dzakirah.id didirikan oleh <strong>Despa Putri Lestari</strong> sebagai komunitas yang menggabungkan ilmu Islam dengan pendekatan modern.
              </p>
              <p>
                Nama "Dzakirah" sendiri berasal dari bahasa Arab yang berarti "ingatan" atau "memori" — karena kami percaya bahwa setiap pengalaman, baik suka maupun duka, adalah bagian dari perjalanan yang membentuk kita menjadi manusia yang lebih baik.
              </p>
            </div>
            <div className="about-story__visual">
              <div className="about-story__card">
                <Sparkles size={24} />
                <span className="about-story__year">Est. 2020</span>
                <span className="about-story__location">Bandar Lampung, Indonesia 🇮🇩</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section--alt" ref={visionRef}>
        <div className="container">
          <div className="section__header scroll-reveal">
            <span className="section__badge"><Target size={14} /> Visi & Misi</span>
            <h2 className="section__title">Arah Langkah Kami</h2>
          </div>
          <div className="vision-grid scroll-reveal">
            <div className="vision-card">
              <h3>Visi</h3>
              <p>Menjadi komunitas muslimah terdepan di Indonesia yang menyediakan ruang aman untuk pulih, belajar, dan bertumbuh — menginspirasi setiap perempuan untuk menjadi versi terbaik dirinya dalam ridha Allah SWT.</p>
            </div>
            <div className="vision-card vision-card--accent">
              <h3>Misi</h3>
              <ul>
                <li>Menyediakan program edukasi yang berbasis Al-Quran, Sunnah, dan ilmu modern</li>
                <li>Membangun komunitas yang hangat, inklusif, dan saling mendukung</li>
                <li>Mendampingi muslimah dalam aspek mental health, pranikah, dan parenting</li>
                <li>Menumbuhkan semangat berbagi melalui program Belajar Sedekah</li>
                <li>Mengadakan kegiatan offline yang memperkuat ukhuwah</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" ref={valuesRef}>
        <div className="container">
          <div className="section__header scroll-reveal">
            <span className="section__badge"><Heart size={14} /> Nilai-Nilai Kami</span>
            <h2 className="section__title">Yang Kami Pegang Teguh</h2>
          </div>
          <div className="values-grid scroll-reveal">
            {values.map((v, i) => (
              <div key={i} className="value-card card">
                <div className="value-card__icon">
                  <v.icon size={24} />
                </div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="section section--alt">
        <div className="container">
          <div className="ig-section">
            <h2>Ikuti Kami di Instagram</h2>
            <p>Dapatkan konten edukasi, inspirasi, dan update kegiatan terbaru.</p>
            <div className="ig-section__links">
              <a href="https://instagram.com/dzakirah.id" target="_blank" rel="noopener noreferrer" className="ig-card">
                <span className="ig-card__handle">@dzakirah.id</span>
                <span className="ig-card__desc">Great Muslimah — 11K Followers</span>
                <ArrowRight size={14} />
              </a>
              <a href="https://instagram.com/dzakirah.indonesia" target="_blank" rel="noopener noreferrer" className="ig-card">
                <span className="ig-card__handle">@dzakirah.indonesia</span>
                <span className="ig-card__desc">Komunitas Muslimah Indonesia — 1K Followers</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
