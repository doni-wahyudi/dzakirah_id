import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import ProgramPaths from '../../components/ProgramPaths/ProgramPaths';
import { programs as staticPrograms } from '../../data/programs';
import { fetchPrograms } from '../../lib/supabaseQueries';
import { useSupabaseData } from '../../lib/useSupabaseData';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

export default function ProgramsPage() {
  useDocumentTitle('Program Kami');
  const { data: programs } = useSupabaseData(fetchPrograms, staticPrograms);
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
            <p>Pilih jalur tumbuhmu: pulihkan diri, persiapkan kehidupan baru, atau bangun keluarga sakinah.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__badge"><BookOpen size={14} /> Pilar Program Kami</span>
            <h2 className="section__title">Pilih Programmu</h2>
            <p className="section__subtitle">Setiap jalur dirancang khusus untuk menemani fase hidup dan kebutuhan tumbuhmu.</p>
          </div>
          <ProgramPaths programs={programs} />
        </div>
      </section>
    </main>
  );
}
