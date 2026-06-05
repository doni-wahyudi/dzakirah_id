import { Link } from 'react-router-dom';
import { Users, Shield, Compass, Heart, ArrowRight, Camera, MessageCircle } from 'lucide-react';
import Instagram from '../../components/Icons/Instagram';
import { useScrollReveal, useMultiScrollReveal } from '../../hooks/useScrollReveal';
import '../../pages/About/AboutPage.css'; // sharing page-hero styles
import './CommunityPage.css';

const chapters = [
  {
    name: 'Dzakirah Lampung',
    location: 'Bandar Lampung (Pusat)',
    desc: 'Chapter utama dengan kegiatan offline rutin seperti kajian bulanan, sharing circle tatap muka, dan program Belajar Sedekah Lampung.',
    status: 'Aktif',
    members: '500+ Member',
  },
  {
    name: 'Dzakirah Online',
    location: 'Seluruh Indonesia',
    desc: 'Wadah bagi muslimah di luar Lampung untuk berpartisipasi dalam kajian online, webinar, dan sharing circle digital via Zoom & WhatsApp.',
    status: 'Aktif',
    members: '10K+ Followers',
  }
];

const perks = [
  { icon: Shield, title: 'Ruang Aman (Safe Space)', desc: 'Lingkungan inklusif tanpa penghakiman untuk berbagi keresahan hidup dan emosi.' },
  { icon: Compass, title: 'Bimbingan Ilmu', desc: 'Akses ke materi kajian kesehatan mental, pranikah, dan parenting berbasis Islam.' },
  { icon: Heart, title: 'Support System', desc: 'Saudara seiman yang saling mendoakan, mendukung, dan tumbuh bersama.' },
];

export default function CommunityPage() {
  const contentRef = useScrollReveal();
  const perksRef = useScrollReveal();
  const joinRef = useScrollReveal();
  const setChapterRef = useMultiScrollReveal(2);

  return (
    <main className="community-page" id="community-page">
      {/* Hero Header */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb">
              <Link to="/">Beranda</Link>
              <span>/</span>
              <span>Komunitas</span>
            </nav>
            <h1>Komunitas Muslimah</h1>
            <p>Tumbuh bersama dalam ukhuwah yang hangat, menguatkan satu sama lain di jalan hijrah dan kebaikan.</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section" ref={contentRef}>
        <div className="container">
          <div className="community-intro scroll-reveal">
            <div className="community-intro__text">
              <span className="section__badge"><Users size={14} /> Kehangatan Ukhuwah</span>
              <h2>Mengapa Bergabung dengan Dzakirah?</h2>
              <p>
                Perjalanan hijrah dan bertumbuh sering kali terasa sunyi jika dijalani sendirian. Di Dzakirah, kami percaya bahwa <strong>kebersamaan adalah penguat terbaik</strong>. 
              </p>
              <p>
                Sejak didirikan pada tahun 2020 di Bandar Lampung, Dzakirah telah berkembang menjadi rumah bagi ribuan muslimah untuk saling menguatkan, bertukar ilmu, dan menyembuhkan diri dalam naungan syariat.
              </p>
            </div>
            <div className="community-intro__visual">
              <div className="visual-circle">
                <span className="visual-number">11K+</span>
                <span className="visual-label">Muslimah Terhubung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="section section--alt" ref={perksRef}>
        <div className="container">
          <div className="section__header scroll-reveal">
            <span className="section__badge"><Heart size={14} /> Benefit</span>
            <h2 className="section__title">Yang Akan Kamu Dapatkan</h2>
            <p className="section__subtitle">Lebih dari sekadar grup obrolan biasa, ini adalah rumah kedua bagimu.</p>
          </div>
          <div className="perks-grid scroll-reveal">
            {perks.map((perk, i) => (
              <div key={i} className="perk-card card">
                <div className="perk-card__icon">
                  <perk.icon size={24} />
                </div>
                <h4>{perk.title}</h4>
                <p>{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__badge"><Compass size={14} /> Persebaran</span>
            <h2 className="section__title">Chapter Dzakirah</h2>
            <p className="section__subtitle">Temukan chapter terdekat dengan lokasimu atau bergabung secara global.</p>
          </div>
          <div className="chapters-grid">
            {chapters.map((ch, idx) => (
              <div 
                key={idx} 
                ref={setChapterRef(idx)}
                className={`chapter-card card scroll-reveal scroll-reveal--delay-${idx + 1}`}
              >
                <div className="chapter-card__header">
                  <div>
                    <h3>{ch.name}</h3>
                    <span className="chapter-card__loc">{ch.location}</span>
                  </div>
                  <span className="chapter-card__badge">{ch.status}</span>
                </div>
                <p>{ch.desc}</p>
                <div className="chapter-card__footer">
                  <span className="chapter-members">{ch.members}</span>
                  <a href="https://instagram.com/dzakirah.id" target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--sm">
                    Hubungi Chapter <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Steps */}
      <section className="section section--alt" ref={joinRef}>
        <div className="container">
          <div className="join-steps scroll-reveal">
            <div className="section__header">
              <span className="section__badge"><MessageCircle size={14} /> Langkah</span>
              <h2 className="section__title">Cara Bergabung</h2>
            </div>
            
            <div className="steps-container">
              <div className="step-item">
                <span className="step-num">01</span>
                <h4>Follow Instagram Kami</h4>
                <p>Ikuti akun <a href="https://instagram.com/dzakirah.id" target="_blank" rel="noopener noreferrer">@dzakirah.id</a> dan <a href="https://instagram.com/dzakirah.indonesia" target="_blank" rel="noopener noreferrer">@dzakirah.indonesia</a> untuk update info dan ilmu harian.</p>
              </div>
              <div className="step-item">
                <span className="step-num">02</span>
                <h4>Ikuti Event / Sesi Terdekat</h4>
                <p>Daftar dan hadiri sharing circle, workshop pranikah, atau kajian parenting kami yang diinfokan di Instagram.</p>
              </div>
              <div className="step-item">
                <span className="step-num">03</span>
                <h4>Gabung WAG Komunitas</h4>
                <p>Setelah menghadiri sesi pertama, kamu akan diundang masuk ke WhatsApp Group resmi chapter untuk berjejaring lebih dekat.</p>
              </div>
            </div>

            <div className="join-action-box card">
              <h3>Siap Melangkah Bersama Kami?</h3>
              <p>Mari mulailah perjalanan tumbuh dan pulihmu hari ini juga. Kami menunggumu dengan senyuman terhangat.</p>
              <div className="join-action-buttons">
                <a 
                  href="https://instagram.com/dzakirah.id" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn--primary btn--pill"
                >
                  <Instagram size={18} /> Gabung via Instagram
                </a>
                <Link to="/kontak" className="btn btn--secondary btn--pill">
                  Tanya Admin via WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
