import { Link } from 'react-router-dom';
import { Heart, Sparkles, Gift, Users, ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';
import { useScrollReveal, useMultiScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import './CharityPage.css';

const donationPrograms = [
  {
    icon: Gift,
    title: 'Jumat Berkah',
    desc: 'Pembagian nasi kotak gratis setiap hari Jumat untuk pekerja jalanan, dhuafa, dan panti asuhan di Bandar Lampung.',
    impact: '100+ Paket / Pekan',
  },
  {
    icon: Users,
    title: 'Sembako untuk Dhuafa',
    desc: 'Pemberian paket sembako bulanan untuk janda lansia dan keluarga pra-sejahtera di Bandar Lampung.',
    impact: '50+ Keluarga / Bulan',
  },
  {
    icon: Heart,
    title: 'Sedekah Operasional',
    desc: 'Membantu biaya pengobatan dhuafa sakit, renovasi mushola kecil, serta operasional dakwah gratis.',
    impact: 'Insidental / Sesuai Kebutuhan',
  }
];

export default function CharityPage() {
  useDocumentTitle('Belajar Sedekah');
  const introRef = useScrollReveal();
  const stepRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const setCardRef = useMultiScrollReveal(3);

  return (
    <main className="charity-page" id="charity-page">
      {/* Hero Header */}
      <section className="page-hero" style={{ '--hero-accent': 'var(--color-accent)' }}>
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb">
              <Link to="/">Beranda</Link>
              <span>/</span>
              <span>Belajar Sedekah</span>
            </nav>
            <h1>Belajar Sedekah</h1>
            <p>Saluran kebaikan resmi Dzakirah untuk belajar berbagi, peduli, dan berdonasi bagi sesama.</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section" ref={introRef}>
        <div className="container">
          <div className="charity-intro scroll-reveal">
            <div className="charity-intro__text">
              <span className="section__badge" style={{ backgroundColor: 'var(--color-accent-glow)', color: 'var(--color-secondary-dark)', borderColor: 'var(--color-accent-light)' }}>
                <Heart size={14} /> @belajarsedekah.id
              </span>
              <h2>Belajar Berbagi Tanpa Menunggu Kaya</h2>
              <p>
                <strong>Belajar Sedekah</strong> adalah inisiatif sosial dan amal yang diinisiasi oleh Dzakirah.id sejak tahun 2020. Program ini lahir dari kesadaran bahwa berbagi adalah keterampilan hati yang harus dilatih terus-menerus.
              </p>
              <p>
                Kami percaya bahwa sedekah bukanlah tentang seberapa besar nominal yang kita keluarkan, melainkan tentang seberapa tulus keikhlasan dan kepedulian yang kita titipkan di dalamnya. Melalui Belajar Sedekah, setiap rupiah yang kamu donasikan disalurkan secara transparan 100% langsung kepada yang membutuhkan di area Bandar Lampung.
              </p>
            </div>
            <div className="charity-intro__visual card">
              <Sparkles size={48} className="visual-spark" />
              <h3>Tagline Kami</h3>
              <p className="tagline">"Berbagi Kebaikan, Menuai Keberkahan" 🌷</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <span className="section__badge" style={{ backgroundColor: 'var(--color-accent-glow)', color: 'var(--color-secondary-dark)', borderColor: 'var(--color-accent-light)' }}>
              <Gift size={14} /> Pilar Kebaikan
            </span>
            <h2 className="section__title">Program Utama Kami</h2>
            <p className="section__subtitle">Pilihlah wadah sedekah yang ingin kamu dukung.</p>
          </div>

          <div className="donation-grid">
            {donationPrograms.map((prog, idx) => (
              <div 
                key={idx} 
                ref={setCardRef(idx)}
                className={`donation-card card scroll-reveal scroll-reveal--delay-${idx + 1}`}
              >
                <div className="donation-card__icon">
                  <prog.icon size={28} />
                </div>
                <h3>{prog.title}</h3>
                <p>{prog.desc}</p>
                <div className="donation-card__footer">
                  <span className="impact-badge">{prog.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to contribute steps */}
      <section className="section" ref={stepRef}>
        <div className="container">
          <div className="charity-steps scroll-reveal">
            <div className="section__header">
              <h2 className="section__title">Cara Berdonasi & Berbagi</h2>
              <p className="section__subtitle">Kemudahan dalam menyalurkan amanah kebaikanmu.</p>
            </div>

            <div className="charity-steps-grid">
              <div className="charity-step card">
                <span className="step-number">1</span>
                <h4>Pilih Rekening Donasi</h4>
                <p>Transfer donasi terbaikmu melalui rekening resmi kami:</p>
                <div className="bank-details">
                  <div className="bank-item">
                    <strong>Bank Syariah Indonesia (BSI)</strong>
                    <p>No. Rekening: <strong>7234024345</strong></p>
                    <p>a.n. <strong>Belajar Sedekah Lampung</strong></p>
                  </div>
                </div>
              </div>

              <div className="charity-step card">
                <span className="step-number">2</span>
                <h4>Konfirmasi Donasi</h4>
                <p>Kirimkan bukti transfer beserta doa/harapanmu ke admin Dzakirah via WhatsApp:</p>
                <a 
                  href="https://wa.me/6282269665134?text=Halo%20Admin%20Dzakirah%2C%20saya%20ingin%20mengonfirmasi%20donasi%20Belajar%20Sedekah..." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn--secondary btn--pill"
                >
                  <MessageSquare size={16} /> Hubungi Admin
                </a>
              </div>

              <div className="charity-step card">
                <span className="step-number">3</span>
                <h4>Pantau Penyaluran</h4>
                <p>Setiap penyaluran donasi kami laporkan secara terbuka dan transparan melalui Instagram khusus kami:</p>
                <a 
                  href="https://instagram.com/dzakirah.id" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn--primary btn--pill"
                >
                  Ikuti Laporan @belajarsedekah.id
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section section--alt" ref={ctaRef}>
        <div className="container">
          <div className="charity-cta-footer card scroll-reveal text-center">
            <h2>"Sedekah itu menghapus dosa sebagaimana air memadamkan api."</h2>
            <p className="hadith-ref">(HR. Tirmidzi)</p>
            <p className="desc">
              Mari bersama-sama luangkan sedikit dari kelapangan rezeki kita untuk menghadirkan sejuta senyum di wajah saudara-saudara kita yang membutuhkan.
            </p>
            <a 
              href="https://wa.me/6282269665134" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn--accent btn--pill btn--lg"
            >
              Hubungi WhatsApp Admin (082269665134) <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
