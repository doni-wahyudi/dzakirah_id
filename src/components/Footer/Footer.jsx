import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Send } from 'lucide-react';
import Instagram from '../Icons/Instagram';
import './Footer.css';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    const msg = encodeURIComponent(
      `Assalamu'alaikum Admin Dzakirah 🌷\n\nSaya ingin mendaftarkan email untuk info & update kegiatan Dzakirah.\n\nEmail: ${newsletterEmail}\n\nTerima kasih!`
    );
    window.open(`https://wa.me/6282269665134?text=${msg}`, '_blank', 'noopener,noreferrer');
    setNewsletterSent(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSent(false), 4000);
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__col footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-text">dzakirah</span>
              <span className="footer__logo-dot">.id</span>
            </Link>
            <p className="footer__tagline">
              Ruang Pulih &amp; Tumbuh untuk Perempuan 🌷
            </p>
            <p className="footer__desc">
              Komunitas Muslimah Indonesia yang berfokus pada Mental Health, Pranikah, dan Parenting. Est. 2020, Bandar Lampung.
            </p>
            <div className="footer__socials">
              <a
                href="https://instagram.com/dzakirah.id"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link footer__social-link--labeled"
                id="footer-ig-main"
                aria-label="Instagram @dzakirah.id"
                title="Instagram @dzakirah.id"
              >
                <Instagram size={18} />
                <span>@dzakirah.id</span>
              </a>
              <a
                href="https://instagram.com/dzakirah.indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link footer__social-link--labeled"
                id="footer-ig-community"
                aria-label="Instagram @dzakirah.indonesia"
                title="Instagram @dzakirah.indonesia"
              >
                <Instagram size={18} />
                <span>@dzakirah.indonesia</span>
              </a>
              <a
                href="https://wa.me/6282269665134"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                id="footer-wa"
                aria-label="WhatsApp Admin Dzakirah"
                title="Chat via WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Menu</h4>
            <ul className="footer__list">
              <li><Link to="/" className="footer__link">Beranda</Link></li>
              <li><Link to="/tentang" className="footer__link">Tentang Kami</Link></li>
              <li><Link to="/komunitas" className="footer__link">Komunitas</Link></li>
              <li><Link to="/blog" className="footer__link">Blog</Link></li>
              <li><Link to="/event" className="footer__link">Event</Link></li>
              <li><Link to="/galeri" className="footer__link">Galeri</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer__col">
            <h4 className="footer__heading">Program</h4>
            <ul className="footer__list">
              <li><Link to="/program/mental-health" className="footer__link">Mental Health</Link></li>
              <li><Link to="/program/pranikah" className="footer__link">Pranikah</Link></li>
              <li><Link to="/program/parenting" className="footer__link">Parenting</Link></li>
              <li><Link to="/belajar-sedekah" className="footer__link">Belajar Sedekah</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="footer__col">
            <h4 className="footer__heading">Kontak</h4>
            <ul className="footer__list">
              <li className="footer__contact-item">
                <MessageCircle size={14} />
                <span>082269665134</span>
              </li>
              <li className="footer__contact-item">
                <Mail size={14} />
                <span>hello@dzakirah.id</span>
              </li>
              <li className="footer__contact-item">
                <span>📍 Bandar Lampung, Indonesia</span>
              </li>
            </ul>
            <div className="footer__newsletter">
              <p className="footer__newsletter-label">Info &amp; Update Kegiatan</p>
              {newsletterSent ? (
                <p className="footer__newsletter-success">✅ Terima kasih! Admin akan segera menghubungimu. 🌷</p>
              ) : (
                <form className="footer__newsletter-input" onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    placeholder="Email kamu..."
                    id="footer-newsletter-email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="footer__newsletter-btn" id="footer-newsletter-btn" aria-label="Daftar Update">
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2020–2026 Dzakirah.id — Didirikan oleh Despa Putri Lestari</p>
          <p className="footer__bottom-verse">
            "Sesungguhnya sesudah kesulitan itu ada kemudahan" — QS. Al-Insyirah: 6
          </p>
        </div>
      </div>
    </footer>
  );
}
