import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { events } from '../../data/events';
import { useScrollReveal, useMultiScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import './EventsPage.css';

export default function EventsPage() {
  useDocumentTitle('Event & Kajian');
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
                    <a 
                      href="https://wa.me/6282269665134" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn--primary btn--pill"
                    >
                      Daftar Kelas
                    </a>
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
    </main>
  );
}
