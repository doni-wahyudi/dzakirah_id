import { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { faqs } from '../../data/faqs';
import './FaqSection.css';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section" id="faq-accordion-widget">
      <div className="faq-section__header">
        <span className="section__badge">
          <HelpCircle size={14} />
          Tanya Jawab
        </span>
        <h3>Pertanyaan Populer</h3>
        <p>Mencari tahu tentang pendaftaran, metode program, atau penyaluran amal? Temukan jawabannya di sini.</p>
      </div>

      <div className="faq-accordion">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div 
              key={faq.id} 
              className={`faq-item card ${isOpen ? 'faq-item--open' : ''}`}
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="faq-item__trigger"
                aria-expanded={isOpen}
              >
                <span className="faq-item__question">{faq.question}</span>
                <ChevronDown size={18} className="faq-item__chevron" />
              </button>
              
              <div className="faq-item__body">
                <div className="faq-item__content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Support CTA */}
      <div className="faq-section__support card">
        <div className="faq-section__support-inner">
          <MessageCircle size={28} className="support-icon" />
          <div className="support-text">
            <h4>Punya pertanyaan lain?</h4>
            <p>Admin Dzakirah siap mendampingi dan menjawab keraguanmu via chat WhatsApp.</p>
          </div>
          <a 
            href="https://wa.me/6282269665134?text=Halo%20Admin%20Dzakirah%2C%20saya%20memiliki%20pertanyaan%20mengenai%20komunitas..."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--pill"
          >
            Hubungi WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
