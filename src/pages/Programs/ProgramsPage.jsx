import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import ProgramTimeline from '../../components/ProgramTimeline/ProgramTimeline';
import { programs } from '../../data/programs';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

export default function ProgramsPage() {
  useDocumentTitle('Program Kami');
  return (
    <main className="programs-page" id="programs-page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb">
              <Link to="/">Beranda</Link><span>/</span><span>Program</span>
            </nav>
            <h1>Program Kami</h1>
            <p>Perjalanan tumbuh dari menyembuhkan diri, mempersiapkan kehidupan baru, hingga menjadi orang tua yang luar biasa.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__badge"><BookOpen size={14} /> Perjalanan Tumbuhmu</span>
            <h2 className="section__title">Pilih Programmu</h2>
            <p className="section__subtitle">Setiap langkah adalah bagian dari perjalanan menuju versi terbaik dirimu.</p>
          </div>
          <ProgramTimeline programs={programs} />
        </div>
      </section>
    </main>
  );
}
