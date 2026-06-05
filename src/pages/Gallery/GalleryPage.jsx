import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Calendar, Sparkles, X, Heart } from 'lucide-react';
import { galleryItems } from '../../data/gallery';
import { useScrollReveal, useMultiScrollReveal } from '../../hooks/useScrollReveal';
import '../../pages/About/AboutPage.css'; // sharing page-hero styles
import './GalleryPage.css';

const categories = ['Semua', 'Mental Health', 'Pranikah', 'Parenting', 'Belajar Sedekah', 'Komunitas'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  const introRef = useScrollReveal();
  const filterRef = useScrollReveal();

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === 'Semua' || item.category === selectedCategory
  );

  const setItemRef = useMultiScrollReveal(filteredItems.length);

  return (
    <main className="gallery-page" id="gallery-page">
      {/* Hero Header */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb">
              <Link to="/">Beranda</Link>
              <span>/</span>
              <span>Galeri Kegiatan</span>
            </nav>
            <h1>Galeri Kegiatan</h1>
            <p>Jejak langkah ukhuwah dan momen kebersamaan yang terekam dalam lensa Dzakirah.</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section" ref={introRef}>
        <div className="container">
          <div className="gallery-intro scroll-reveal text-center">
            <span className="section__badge"><Camera size={14} /> Lensa Ukhuwah</span>
            <h2>Setiap Momen Punya Cerita</h2>
            <p className="section__subtitle">
              Dari tawa kecil di sharing circle tatap muka, keseriusan belajar kelas pranikah, hingga senyum bahagia penerima manfaat Belajar Sedekah di Bandar Lampung.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Grid */}
      <section className="section section--alt" ref={filterRef}>
        <div className="container">
          {/* Categories Filter */}
          <div className="gallery-filters scroll-reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid scroll-reveal">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                ref={setItemRef(idx)}
                className={`gallery-item card scroll-reveal scroll-reveal--delay-${(idx % 4) + 1}`}
                onClick={() => setActiveLightboxItem(item)}
              >
                <div 
                  className="gallery-item__image"
                  style={{ background: 'linear-gradient(135deg, var(--color-primary-light), var(--color-secondary-light))' }}
                >
                  <Sparkles size={24} className="decor-spark" />
                  <div className="gallery-item__overlay">
                    <span className="gallery-item__category">{item.category}</span>
                    <h4>{item.title}</h4>
                    <span className="gallery-item__date">
                      <Calendar size={12} /> 
                      {new Date(item.date).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Modal */}
      {activeLightboxItem && (
        <div className="lightbox-overlay" onClick={() => setActiveLightboxItem(null)}>
          <button className="lightbox-close" onClick={() => setActiveLightboxItem(null)}>
            <X size={24} />
          </button>
          
          <div className="lightbox-content card" onClick={(e) => e.stopPropagation()}>
            <div 
              className="lightbox-image"
              style={{ background: 'linear-gradient(135deg, var(--color-primary-light), var(--color-secondary-light))' }}
            >
              <Sparkles size={48} className="decor-spark" />
            </div>
            
            <div className="lightbox-info">
              <div className="lightbox-info__header">
                <span className="category-badge">{activeLightboxItem.category}</span>
                <span className="date">
                  <Calendar size={14} /> 
                  {new Date(activeLightboxItem.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              </div>
              <h3>{activeLightboxItem.title}</h3>
              <p>Program: <strong>{activeLightboxItem.event}</strong></p>
              <p className="desc">
                Dokumentasi kegiatan offline Dzakirah.id yang diselenggarakan dengan hangat di Bandar Lampung, melibatkan fasilitator berpengalaman dan partisipasi aktif dari sahabat muslimah sekalian.
              </p>
              
              <div className="lightbox-footer">
                <span><Heart size={14} style={{ color: 'var(--color-error)', display: 'inline', marginRight: 4 }} /> Dzakirah.id</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
