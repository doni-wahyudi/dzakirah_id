import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Sparkles, AlertCircle, X, User, Phone } from 'lucide-react';
import { events } from '../../data/events';
import { useScrollReveal, useMultiScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import './EventsPage.css';

export default function EventsPage() {
  useDocumentTitle('Event & Kajian');
  const [registeringEvent, setRegisteringEvent] = useState(null);
  const [formData, setFormData] = useState({ name: '', whatsapp: '', city: '' });
  const [formError, setFormError] = useState('');

  const openRegisterModal = (event) => {
    setRegisteringEvent(event);
    setFormData({ name: '', whatsapp: '', city: '' });
    setFormError('');
  };

  const getImageUrl = (path) => {
    if (!path) return '';
    return path.startsWith('/') ? `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}` : path;
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.whatsapp.trim() || !formData.city.trim()) {
      setFormError('Semua kolom wajib diisi.');
      return;
    }
    
    const phoneRegex = /^[0-9+()-\s]{8,18}$/;
    if (!phoneRegex.test(formData.whatsapp)) {
      setFormError('Nomor WhatsApp tidak valid.');
      return;
    }

    const adminPhone = '6282269665134';
    const message = `Assalamualaikum admin Dzakirah.id, saya ingin mendaftar untuk event:
*${registeringEvent.title}*

*Data Pendaftar:*
- Nama Lengkap: ${formData.name.trim()}
- No. WhatsApp: ${formData.whatsapp.trim()}
- Domisili / Kota: ${formData.city.trim()}

Mohon informasi selanjutnya untuk konfirmasi pendaftaran. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;
    
    window.open(waUrl, '_blank');
    setRegisteringEvent(null);
  };

  const upcomingEvents = events.filter((e) => e.isUpcoming);
  const pastEvents = events.filter((e) => !e.isUpcoming);

  const upcomingRef = useScrollReveal();
  const pastRef = useScrollReveal();
  
  const setUpcomingItemRef = useMultiScrollReveal(upcomingEvents.length);
  const setPastItemRef = useMultiScrollReveal(pastEvents.length);

  return (
    <main className="events-page" id="events-page">
      {/* Hero Header */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb">
              <Link to="/">Beranda</Link>
              <span>/</span>
              <span>Event & Kajian</span>
            </nav>
            <h1>Event & Kajian</h1>
            <p>Jadwal kajian offline di Bandar Lampung dan workshop online yang bisa kamu ikuti.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section" ref={upcomingRef}>
        <div className="container">
          <div className="section__header scroll-reveal">
            <span className="section__badge"><Sparkles size={14} /> Terdekat</span>
            <h2 className="section__title">Kegiatan Mendatang</h2>
            <p className="section__subtitle">Jangan lewatkan kesempatan untuk bersilaturahmi dan menimba ilmu bersama.</p>
          </div>

          {upcomingEvents.length === 0 ? (
            <div className="no-events-state card scroll-reveal">
              <AlertCircle size={48} />
              <h4>Belum ada event terjadwal</h4>
              <p>Kami sedang mempersiapkan rangkaian program baru. Pantau terus Instagram kami untuk update terbaru.</p>
            </div>
          ) : (
            <div className="events-list">
              {upcomingEvents.map((event, idx) => (
                <div 
                  key={event.id}
                  ref={setUpcomingItemRef(idx)}
                  className="event-list-item card scroll-reveal scroll-reveal--delay-1"
                >
                  <div className="event-list-item__date">
                    <span className="day">{new Date(event.date).getDate()}</span>
                    <span className="month">
                      {new Date(event.date).toLocaleDateString('id-ID', { month: 'short' })}
                    </span>
                    <span className="year">{new Date(event.date).getFullYear()}</span>
                  </div>
                  
                  <div className="event-list-item__content">
                    <span className="category-tag">{event.category}</span>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    
                    <div className="event-list-item__meta">
                      <span><Clock size={16} /> {event.time}</span>
                      <span><MapPin size={16} /> {event.location}</span>
                    </div>
                  </div>

                  <div className="event-list-item__action">
                    <button 
                      onClick={() => openRegisterModal(event)}
                      className="btn btn--primary btn--pill"
                    >
                      Daftar Kelas
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <section className="section section--alt" ref={pastRef}>
          <div className="container">
            <div className="section__header scroll-reveal">
              <span className="section__badge"><Calendar size={14} /> Arsip</span>
              <h2 className="section__title">Event yang Telah Berlangsung</h2>
              <p className="section__subtitle">Dokumentasi dan jejak langkah ukhuwah yang telah kita lalui bersama.</p>
            </div>

            <div className="past-events-grid scroll-reveal">
              {pastEvents.map((event, idx) => (
                <div 
                  key={event.id}
                  ref={setPastItemRef(idx)}
                  className={`past-event-card card scroll-reveal scroll-reveal--delay-${(idx % 3) + 1}`}
                >
                  <div className="past-event-card__header">
                    <span className="category">{event.category}</span>
                    <span className="date">
                      {new Date(event.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                  <div className="past-event-card__footer">
                    <span><MapPin size={14} /> {event.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RSVP Modal Overlay */}
      {registeringEvent && (
        <div className="modal-overlay animate-fade-in" onClick={() => setRegisteringEvent(null)}>
          <div className="modal-container card animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setRegisteringEvent(null)} aria-label="Close modal">
              <X size={18} />
            </button>
            <div className="modal-header">
              <img src={getImageUrl('/images/modal-event-banner.png')} alt="Event Banner" className="modal-banner" />
              <div className="modal-header__content">
                <span className="category-badge">{registeringEvent.category}</span>
                <h3>Pendaftaran Event</h3>
                <p className="event-title-highlight">{registeringEvent.title}</p>
              </div>
            </div>
            <form onSubmit={handleModalSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="rsvp-name">Nama Lengkap</label>
                <div className="input-with-icon">
                  <User size={16} className="input-icon" />
                  <input 
                    id="rsvp-name" 
                    type="text" 
                    placeholder="Contoh: Fatimah Az-Zahra" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="rsvp-whatsapp">Nomor WhatsApp</label>
                <div className="input-with-icon">
                  <Phone size={16} className="input-icon" />
                  <input 
                    id="rsvp-whatsapp" 
                    type="tel" 
                    placeholder="Contoh: 081234567890" 
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="rsvp-city">Domisili / Kota</label>
                <div className="input-with-icon">
                  <MapPin size={16} className="input-icon" />
                  <input 
                    id="rsvp-city" 
                    type="text" 
                    placeholder="Contoh: Bandar Lampung" 
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required 
                  />
                </div>
              </div>
              {formError && <p className="modal-error-message">{formError}</p>}
              <button type="submit" className="btn btn--primary btn--pill submit-btn">
                Kirim Pendaftaran via WhatsApp <Sparkles size={14} style={{ marginLeft: 6 }} />
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
