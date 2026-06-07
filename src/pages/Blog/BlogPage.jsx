import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, ArrowRight, Search, Sparkles } from 'lucide-react';
import { articles } from '../../data/articles';
import { useScrollReveal, useMultiScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import './BlogPage.css';

const categories = ['Semua', 'Mental Health', 'Pranikah', 'Parenting'];

export default function BlogPage() {
  useDocumentTitle('Blog & Artikel');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  
  const heroRef = useScrollReveal();
  const listRef = useScrollReveal();

  // Filter articles by category and search query
  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === 'Semua' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find((a) => a.featured) || articles[0];
  const regularArticles = filteredArticles.filter((a) => a.id !== featuredArticle.id || selectedCategory !== 'Semua');

  const setArticleRef = useMultiScrollReveal(regularArticles.length);

  const getImageUrl = (path) => {
    if (!path) return '';
    return path.startsWith('/') ? `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}` : path;
  };

  return (
    <main className="blog-page" id="blog-page">
      {/* Hero Header */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb">
              <Link to="/">Beranda</Link>
              <span>/</span>
              <span>Blog & Artikel</span>
            </nav>
            <h1>Blog & Artikel</h1>
            <p>Ruang berbagi ilmu, inspirasi, dan cerita untuk menemani setiap fase perjalanan hidupmu.</p>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      {selectedCategory === 'Semua' && searchQuery === '' && featuredArticle && (
        <section className="section section--featured-article" ref={heroRef}>
          <div className="container">
            <div className="section__header scroll-reveal">
              <span className="section__badge"><Sparkles size={14} /> Pilihan Redaksi</span>
              <h2 className="section__title">Artikel Utama</h2>
            </div>
            
            <div className="featured-article-card card scroll-reveal">
              <div 
                className="featured-article-card__thumb"
                style={{ background: 'linear-gradient(135deg, var(--color-primary-light), var(--color-secondary-light))' }}
              >
                {featuredArticle.image && (
                  <img src={getImageUrl(featuredArticle.image)} alt={featuredArticle.title} />
                )}
                <span className="category-badge">{featuredArticle.category}</span>
              </div>
              <div className="featured-article-card__content">
                <span className="featured-article-card__date">
                  <Calendar size={14} /> 
                  {new Date(featuredArticle.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
                <h3>{featuredArticle.title}</h3>
                <p>{featuredArticle.excerpt}</p>
                <div className="featured-article-card__footer">
                  <span className="readtime"><Clock size={14} /> {featuredArticle.readTime}</span>
                  <Link to={`/blog/${featuredArticle.slug}`} className="btn btn--primary btn--pill">
                    Baca Selengkapnya <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter and Search Bar */}
      <section className="section section--alt" ref={listRef}>
        <div className="container">
          <div className="blog-filters scroll-reveal">
            <div className="blog-categories">
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
            
            <div className="blog-search">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="no-articles-state card scroll-reveal">
              <BookOpen size={48} />
              <h4>Tidak ada artikel ditemukan</h4>
              <p>Coba gunakan kata kunci lain atau pilih kategori berbeda.</p>
              <button 
                className="btn btn--secondary" 
                onClick={() => { setSelectedCategory('Semua'); setSearchQuery(''); }}
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="blog-grid scroll-reveal">
              {regularArticles.map((article, idx) => (
                <Link
                  key={article.id}
                  to={`/blog/${article.slug}`}
                  ref={setArticleRef(idx)}
                  className={`blog-card card scroll-reveal scroll-reveal--delay-${(idx % 3) + 1}`}
                  id={`blog-card-${article.id}`}
                >
                  <div
                    className="blog-card__thumb"
                    style={{ background: `linear-gradient(135deg, var(--color-primary-lighter), var(--color-bg-alt))` }}
                  >
                    {article.image ? (
                      <img src={getImageUrl(article.image)} alt={article.title} className="blog-card__thumb-img" />
                    ) : null}
                    <span className="blog-card__category">{article.category}</span>
                  </div>
                  <div className="blog-card__content">
                    <h4 className="blog-card__title">{article.title}</h4>
                    <p className="blog-card__excerpt">{article.excerpt}</p>
                    <div className="blog-card__meta">
                      <span>
                        <Calendar size={12} style={{ marginRight: 4, display: 'inline', verticalAlign: 'middle' }} />
                        {new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                      <span>· {article.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
