import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import './NotFoundPage.css';

export default function NotFoundPage() {
  useDocumentTitle('Halaman Tidak Ditemukan');

  return (
    <main className="not-found-page" id="not-found-page">
      <div className="not-found-page__bg">
        <div className="not-found-page__orb not-found-page__orb--1" />
        <div className="not-found-page__orb not-found-page__orb--2" />
      </div>

      <div className="container not-found-page__container">
        {/* Decorative floats */}
        <div className="not-found-page__float not-found-page__float--1">🌷</div>
        <div className="not-found-page__float not-found-page__float--2">✨</div>
        <div className="not-found-page__float not-found-page__float--3">🌸</div>

        {/* Main content */}
        <div className="not-found-page__content">
          <div className="not-found-page__code-wrap">
            <span className="not-found-page__code">404</span>
          </div>

          <h1 className="not-found-page__title">Halaman Tidak Ditemukan</h1>
          <p className="not-found-page__desc">
            Aduh, tampaknya halaman yang kamu cari sudah pindah atau tidak tersedia. Jangan khawatir, kamu masih bisa menemukan banyak hal baik di Dzakirah ✨
          </p>

          <blockquote className="not-found-page__quote">
            <p>«  Sesungguhnya sesudah kesulitan itu ada kemudahan  »</p>
            <cite>QS. Al-Insyirah: 6</cite>
          </blockquote>

          <div className="not-found-page__actions">
            <Link to="/" className="btn btn--primary btn--pill btn--lg" id="not-found-home-btn">
              Kembali ke Beranda
            </Link>
            <Link to="/blog" className="btn btn--secondary btn--pill btn--lg" id="not-found-blog-btn">
              Baca Artikel
            </Link>
          </div>

          <div className="not-found-page__links">
            <span>Atau kunjungi:</span>
            <Link to="/program">Program</Link>
            <span>·</span>
            <Link to="/komunitas">Komunitas</Link>
            <span>·</span>
            <Link to="/kontak">Kontak</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
