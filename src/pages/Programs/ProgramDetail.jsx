import { useParams, Link } from 'react-router-dom';
import { Brain, Heart, Users, Sparkles, Calendar, MapPin, ArrowRight, Flower2, Clock } from 'lucide-react';
import { programs } from '../../data/programs';
import { events } from '../../data/events';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import './ProgramDetail.css';

const iconMap = {
  Brain: Brain,
  Heart: Heart,
  Users: Users,
};

export default function ProgramDetail() {
  const { slug } = useParams();
  const program = programs.find((p) => p.slug === slug);
  useDocumentTitle(program ? program.title : 'Program');
  const headerRef = useScrollReveal();
  const detailsRef = useScrollReveal();

  if (!program) {
    return (
      <div className="program-error container">
        <h2>Program tidak ditemukan</h2>
        <p>Maaf, program yang Anda cari tidak tersedia.</p>
        <Link to="/program" className="btn btn--primary">Kembali ke Program</Link>
      </div>
    );
  }

  const IconComponent = iconMap[program.icon] || Sparkles;

  // Filter events related to this program category/tag
  const relatedEvents = events.filter(
    (e) => e.category.toLowerCase().includes(program.title.toLowerCase())
  );

  return (
    <main className="program-detail-page" id={`program-${program.slug}-page`}>
      {/* Hero Header */}
      <section className="page-hero" style={{ '--hero-accent': program.color }}>
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb">
              <Link to="/">Beranda</Link>
              <span>/</span>
              <Link to="/program">Program</Link>
              <span>/</span>
              <span>{program.title}</span>
            </nav>
            <div className="program-hero-badge" style={{ backgroundColor: `${program.color}15`, color: program.color }}>
              <IconComponent size={18} />
              <span>Program Unggulan</span>
            </div>
            <h1>{program.title}</h1>
            <p className="tagline">{program.tagline}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" ref={headerRef}>
        <div className="container">
          <div className="program-detail-grid scroll-reveal">
            {/* Left side: descriptions */}
            <div className="program-detail__main">
              <h3>Tentang Program</h3>
              {program.longDescription.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="program-desc-p">
                  {paragraph.startsWith('Program ') || paragraph.startsWith('Kesehatan ') || paragraph.startsWith('Pernikahan ') || paragraph.startsWith('Menjadi ') ? (
                    <strong>{paragraph}</strong>
                  ) : paragraph.includes('•') ? (
                    <ul className="program-points-list">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i}>{item.replace('• ', '')}</li>
                      ))}
                    </ul>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}

              <div className="program-objectives-box">
                <h4>Tujuan Program</h4>
                <div className="objectives-grid">
                  {program.objectives.map((obj, i) => (
                    <div key={i} className="objective-item">
                      <span className="bullet" style={{ backgroundColor: program.color }} />
                      <p>{obj}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: quick info widget */}
            <div className="program-detail__sidebar">
              <div className="program-info-card card">
                <div className="program-info-card__icon" style={{ backgroundColor: `${program.color}15`, color: program.color }}>
                  <IconComponent size={32} />
                </div>
                <h4>Informasi Kelas</h4>
                
                <div className="info-item">
                  <Clock size={18} />
                  <div>
                    <h5>Jadwal Sesi</h5>
                    <p>{program.schedule}</p>
                  </div>
                </div>

                <div className="info-item">
                  <MapPin size={18} />
                  <div>
                    <h5>Format Kelas</h5>
                    <p>{program.format}</p>
                  </div>
                </div>

                <div className="info-item">
                  <Flower2 size={18} />
                  <div>
                    <h5>Investasi & Pendaftaran</h5>
                    <p>Gratis / Berbasis Donasi (Belajar Sedekah)</p>
                  </div>
                </div>

                <a 
                  href="https://wa.me/6282269665134" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn--primary btn--full btn--pill"
                  style={{ backgroundColor: program.color }}
                >
                  Daftar Program Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="section section--alt" ref={detailsRef}>
          <div className="container">
            <div className="section__header scroll-reveal">
              <span className="section__badge"><Calendar size={14} /> Kegiatan Terdekat</span>
              <h2 className="section__title">Event Terkait {program.title}</h2>
              <p className="section__subtitle">Mari berpartisipasi dalam event-event terdekat kami.</p>
            </div>

            <div className="related-events-grid scroll-reveal">
              {relatedEvents.map((event) => (
                <div key={event.id} className="related-event-card card">
                  <div className="event-card__date-badge" style={{ backgroundColor: program.color }}>
                    <span className="event-card__day">{new Date(event.date).getDate()}</span>
                    <span className="event-card__month">
                      {new Date(event.date).toLocaleDateString('id-ID', { month: 'short' })}
                    </span>
                  </div>
                  <div className="related-event-card__content">
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                    <div className="event-meta">
                      <span><Clock size={14} /> {event.time}</span>
                      <span><MapPin size={14} /> {event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
