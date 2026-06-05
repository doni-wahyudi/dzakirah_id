import { Link } from 'react-router-dom';
import { Brain, Heart, Users, ArrowRight, Sparkles } from 'lucide-react';
import { useMultiScrollReveal } from '../../hooks/useScrollReveal';
import './ProgramTimeline.css';

const iconMap = { Brain, Heart, Users };

export default function ProgramTimeline({ programs }) {
  const setRef = useMultiScrollReveal(programs.length);

  return (
    <div className="timeline" id="program-timeline">
      <div className="timeline__line" />
      {programs.map((program, index) => (
        <div
          key={program.id}
          ref={setRef(index)}
          className={`timeline__item scroll-reveal scroll-reveal--delay-${index + 1}`}
        >
          <div className="timeline__dot" style={{ background: program.color }}>
            {(() => {
              const Icon = iconMap[program.icon];
              return Icon ? <Icon size={20} color="#fff" /> : null;
            })()}
          </div>
          <div className="timeline__card" style={{ '--accent': program.color, '--accent-light': program.colorLight }}>
            <div className="timeline__card-header">
              <span className="timeline__step">Langkah {index + 1}</span>
              <h3 className="timeline__title">{program.title}</h3>
              <p className="timeline__tagline">{program.tagline}</p>
            </div>
            <p className="timeline__desc">{program.description}</p>
            <Link to={`/program/${program.slug}`} className="timeline__link" id={`timeline-link-${program.slug}`}>
              Selengkapnya <ArrowRight size={14} />
            </Link>
          </div>
          {index < programs.length - 1 && (
            <div className="timeline__journey-text">
              <Sparkles size={14} />
              <span>{program.journeyText}</span>
            </div>
          )}
        </div>
      ))}
      <div className="timeline__end">
        <div className="timeline__end-dot">
          <Sparkles size={18} />
        </div>
        <p className="timeline__end-text">Perjalananmu dimulai di sini 🌷</p>
      </div>
    </div>
  );
}
