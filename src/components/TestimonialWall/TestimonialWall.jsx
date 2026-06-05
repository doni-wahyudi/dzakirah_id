import { Quote, Flower2, User } from 'lucide-react';
import './TestimonialWall.css';

export default function TestimonialWall({ testimonials }) {
  return (
    <div className="testimonial-wall" id="testimonial-wall">
      <div className="testimonial-wall__grid">
        {testimonials.map((t, index) => (
          <div
            key={t.id}
            className={`testimonial-note testimonial-note--${(index % 4) + 1}`}
            style={{ '--delay': `${index * 0.1}s` }}
          >
            <div className="testimonial-note__quote">
              <Quote size={16} />
            </div>
            <p className="testimonial-note__text">{t.text}</p>
            <div className="testimonial-note__footer">
              <div className="testimonial-note__avatar">
                {t.isAnonymous ? (
                  <User size={14} />
                ) : (
                  <span>{t.name.charAt(0)}</span>
                )}
              </div>
              <div className="testimonial-note__info">
                <span className="testimonial-note__name">
                  {t.isAnonymous ? 'Anonim' : t.name}
                </span>
                <span className="testimonial-note__program">{t.program}</span>
              </div>
            </div>
            {index % 3 === 0 && (
              <Flower2 size={14} className="testimonial-note__flower" />
            )}
          </div>
        ))}
      </div>

      {/* Coming Soon Input */}
      <div className="testimonial-wall__input-area">
        <div className="testimonial-wall__input-wrapper">
          <input
            type="text"
            placeholder="Bagikan ceritamu..."
            disabled
            className="testimonial-wall__input"
            id="testimonial-input"
          />
          <span className="testimonial-wall__badge">Segera Hadir ✨</span>
        </div>
      </div>
    </div>
  );
}
