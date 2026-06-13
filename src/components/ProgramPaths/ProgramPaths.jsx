import { Link } from 'react-router-dom';
import { Brain, Heart, Users, ArrowRight, Check } from 'lucide-react';
import { useMultiScrollReveal } from '../../hooks/useScrollReveal';
import './ProgramPaths.css';

const iconMap = { Brain, Heart, Users };

export default function ProgramPaths({ programs }) {
  const setRef = useMultiScrollReveal(programs.length);

  return (
    <div className="program-paths" id="program-paths">
      <div className="program-paths__grid">
        {programs.map((program, index) => {
          const Icon = iconMap[program.icon];
          return (
            <div
              key={program.id}
              ref={setRef(index)}
              className={`program-path-card scroll-reveal scroll-reveal--delay-${index + 1}`}
              style={{
                '--path-accent': program.color,
                '--path-accent-light': program.colorLight,
              }}
            >
              {/* Top Accent Line */}
              <div className="program-path-card__border-top" />

              <div className="program-path-card__header">
                <div className="program-path-card__badge-wrapper">
                  <span className="program-path-card__badge">
                    {program.focus}
                  </span>
                </div>
                <div className="program-path-card__icon-box">
                  {Icon && <Icon size={24} className="program-path-card__icon" />}
                </div>
              </div>

              <div className="program-path-card__content">
                <h3 className="program-path-card__title">{program.title}</h3>
                <p className="program-path-card__tagline">{program.tagline}</p>
                <p className="program-path-card__desc">{program.description}</p>

                {/* Audience / Suitability List */}
                <div className="program-path-card__audience">
                  <h4 className="program-path-card__audience-title">Program ini cocok untuk:</h4>
                  <ul className="program-path-card__audience-list">
                    {program.audience.map((item, idx) => (
                      <li key={idx} className="program-path-card__audience-item">
                        <Check size={14} className="program-path-card__check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="program-path-card__footer">
                <Link
                  to={`/program/${program.slug}`}
                  className="program-path-card__link btn btn--secondary btn--pill btn--sm"
                  id={`path-link-${program.slug}`}
                >
                  Pelajari Selengkapnya <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
