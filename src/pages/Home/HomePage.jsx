import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Heart, Users as UsersIcon, Sparkles, BookOpen } from 'lucide-react';
import ProgramTimeline from '../../components/ProgramTimeline/ProgramTimeline';
import TestimonialWall from '../../components/TestimonialWall/TestimonialWall';
import { programs } from '../../data/programs';
import { events } from '../../data/events';
import { articles } from '../../data/articles';
import { testimonials } from '../../data/testimonials';
import { useScrollReveal, useMultiScrollReveal } from '../../hooks/useScrollReveal';
import './HomePage.css';

export default function HomePage() {
  const aboutRef = useScrollReveal();
  const timelineRef = useScrollReveal();
  const testimonialRef = useScrollReveal();
  const charityRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const setEventRef = useMultiScrollReveal(3);
  const setArticleRef = useMultiScrollReveal(3);

  const upcomingEvents = events.filter(e => e.isUpcoming).slice(0, 3);
  const latestArticles = articles.slice(0, 3);

  return (
    <main className="home" id="home-page">
      {/* ===== HERO ===== */}
      <section className="hero" id="hero-section">
        <div className="hero__bg">
          <div className="hero__pattern" />
          <div className="hero__gradient" />
        </div>

        {/* Floating decorative elements */}
        <div className="hero__float hero__float--1">🌷</div>
        <div className="hero__float hero__float--2">✨</div>
        <div className="hero__float hero__float--3">🌸</div>
        <div className="hero__float hero__float--4">🍃</div>

        <div className="hero__content container">
          <span className="hero__badge">
            <Sparkles size={14} />
            Komunitas Muslimah Indonesia
          </span>
          <h1 className="hero__title">
            Ruang Pulih &<br />Tumbuh untuk<br />
            <span className="hero__title-accent">Perempuan</span> 🌷
          </h1>
          <p className="hero__subtitle">
            Bersama Dzakirah, temukan kedamaian, ilmu, dan komunitas yang mendukung perjalanan hidupmu sebagai muslimah.
          </p>
          <div className="hero__actions">
            <Link to="/tentang" className="btn btn--primary btn--pill btn--lg" id="hero-cta-primary">
              Kenali Kami <ArrowRight size={18} />
            </Link>
            <Link to="/program" className="btn btn--secondary btn--pill btn--lg" id="hero-cta-secondary">
              Lihat Program
            </Link>
          </div>
        </div>

        <div className="hero__scroll-indicator">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ===== ABOUT SNIPPET ===== */}
      <section className="section" id="about-snippet">
        <div className="container" ref={aboutRef}>
          <div className="about-snippet scroll-reveal">
            <div className="about-snippet__text">
              <span className="section__badge">
                <Heart size={14} />
                Tentang Kami
              </span>
              <h2 className="section__title">Apa itu Dzakirah?</h2>
              <p>
                Dzakirah.id adalah komunitas muslimah yang menjadi <strong>ruang aman</strong> untuk pulih dan bertumbuh. Kami hadir sejak 2020 dari Bandar Lampung untuk mendampingi setiap perempuan melalui program-program yang berfokus pada kesehatan mental, persiapan pernikahan, dan parenting islami.
              </p>
              <Link to="/tentang" className="btn btn--secondary btn--sm" id="about-snippet-link">
                Selengkapnya <ArrowRight size={14} />
              </Link>
            </div>
            <div className="about-snippet__stats">
              <div className="stat-card">
                <span className="stat-card__number">11K+</span>
                <span className="stat-card__label">Followers</span>
              </div>
              <div className="stat-card">
                <span className="stat-card__number">822+</span>
                <span className="stat-card__label">Konten Edukasi</span>
              </div>
              <div className="stat-card">
                <span className="stat-card__number">2020</span>
                <span className="stat-card__label">Established</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAM TIMELINE ===== */}
      <section className="section section--alt" id="programs-section">
        <div className="container">
          <div className="section__header" ref={timelineRef}>
            <div className="scroll-reveal">
              <span className="section__badge">
                <BookOpen size={14} />
                Program Kami
              </span>
              <h2 className="section__title">Perjalanan Tumbuhmu</h2>
              <p className="section__subtitle">
                Dari menyembuhkan diri, mempersiapkan kehidupan baru, hingga menjadi orang tua yang luar biasa.
              </p>
            </div>
          </div>
          <ProgramTimeline programs={programs} />
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" id="testimonials-section">
        <div className="container">
          <div className="section__header" ref={testimonialRef}>
            <div className="scroll-reveal">
              <span className="section__badge">
                <Heart size={14} />
                Suara Komunitas
              </span>
              <h2 className="section__title">Cerita Mereka</h2>
              <p className="section__subtitle">
                Dengarkan pengalaman muslimah yang telah merasakan kehangatan komunitas Dzakirah.
              </p>
            </div>
          </div>
          <TestimonialWall testimonials={testimonials} />
        </div>
      </section>

      {/* ===== UPCOMING EVENTS ===== */}
      <section className="section section--alt" id="events-section">
        <div className="container">
          <div className="section__header">
            <span className="section__badge">
              <Calendar size={14} />
              Event Mendatang
            </span>
            <h2 className="section__title">Jadwal Kegiatan</h2>
            <p className="section__subtitle">
              Bergabunglah dalam kegiatan kami yang penuh manfaat dan kehangatan.
            </p>
          </div>
          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                ref={setEventRef(index)}
                className={`event-card card scroll-reveal scroll-reveal--delay-${index + 1}`}
                id={`event-card-${event.id}`}
              >
                <div className="event-card__date-badge">
                  <span className="event-card__day">
                    {new Date(event.date).getDate()}
                  </span>
                  <span className="event-card__month">
                    {new Date(event.date).toLocaleDateString('id-ID', { month: 'short' })}
                  </span>
                </div>
                <div className="event-card__content">
                  <span className="event-card__category">{event.category}</span>
                  <h4 className="event-card__title">{event.title}</h4>
                  <p className="event-card__desc">{event.description}</p>
                  <div className="event-card__meta">
                    <span><Calendar size={12} /> {event.time}</span>
                    <span><MapPin size={12} /> {event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section__footer">
            <Link to="/event" className="btn btn--secondary btn--pill" id="events-see-all">
              Lihat Semua Event <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BLOG HIGHLIGHTS ===== */}
      <section className="section" id="blog-section">
        <div className="container">
          <div className="section__header">
            <span className="section__badge">
              <BookOpen size={14} />
              Blog
            </span>
            <h2 className="section__title">Artikel Terbaru</h2>
            <p className="section__subtitle">
              Ilmu dan inspirasi untuk menemani perjalanan hidupmu.
            </p>
          </div>
          <div className="blog-grid">
            {latestArticles.map((article, index) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                ref={setArticleRef(index)}
                className={`blog-card card scroll-reveal scroll-reveal--delay-${index + 1}`}
                id={`blog-card-${article.id}`}
              >
                <div className="blog-card__thumb" style={{ background: `linear-gradient(135deg, var(--color-primary-lighter), var(--color-bg-alt))` }}>
                  <span className="blog-card__category">{article.category}</span>
                </div>
                <div className="blog-card__content">
                  <h4 className="blog-card__title">{article.title}</h4>
                  <p className="blog-card__excerpt">{article.excerpt}</p>
                  <div className="blog-card__meta">
                    <span>{new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    <span>· {article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="section__footer">
            <Link to="/blog" className="btn btn--secondary btn--pill" id="blog-see-all">
              Semua Artikel <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BELAJAR SEDEKAH CTA ===== */}
      <section className="section charity-cta" id="charity-section" ref={charityRef}>
        <div className="container">
          <div className="charity-cta__inner scroll-reveal">
            <div className="charity-cta__text">
              <span className="section__badge" style={{ background: 'rgba(201,169,110,0.15)', color: '#A8845E', borderColor: '#E0CFA0' }}>
                <Heart size={14} />
                Belajar Sedekah
              </span>
              <h2>Berbagi Kebaikan, Menuai Keberkahan</h2>
              <p>
                Program amal Dzakirah yang mengajak setiap muslimah untuk belajar berbagi. Karena sedekah bukan soal nominal, tapi soal keikhlasan hati.
              </p>
              <Link to="/belajar-sedekah" className="btn btn--accent btn--pill btn--lg" id="charity-cta-btn">
                Ikut Berbagi <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== JOIN CTA ===== */}
      <section className="section join-cta" id="join-section" ref={ctaRef}>
        <div className="container">
          <div className="join-cta__inner scroll-reveal">
            <h2>Bergabung bersama <span className="join-cta__count">11.000+</span> Muslimah lainnya</h2>
            <p>Temukan ruang aman untuk tumbuh dan berkembang bersama komunitas Dzakirah.</p>
            <div className="join-cta__actions">
              <a
                href="https://instagram.com/dzakirah.id"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--pill btn--lg"
                id="join-ig-btn"
              >
                <UsersIcon size={18} />
                Gabung via Instagram
              </a>
              <Link to="/kontak" className="btn btn--secondary btn--pill btn--lg" id="join-contact-btn">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
