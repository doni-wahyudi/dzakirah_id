import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Send, Link as LinkIcon, Sparkles } from 'lucide-react';
import { articles } from '../../data/articles';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import '../../pages/About/AboutPage.css'; // sharing page-hero styles
import './BlogPost.css';

export default function BlogPost() {
  const { slug } = useParams();
  const post = articles.find((a) => a.slug === slug);
  const revealRef = useScrollReveal();

  if (!post) {
    return (
      <div className="blog-error container">
        <h2>Artikel tidak ditemukan</h2>
        <p>Maaf, artikel yang Anda cari tidak tersedia.</p>
        <Link to="/blog" className="btn btn--primary">Kembali ke Blog</Link>
      </div>
    );
  }

  // Find related articles (same category, excluding the current one)
  const relatedArticles = articles
    .filter((a) => a.category === post.category && a.id !== post.id)
    .slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Tautan disalin ke papan klip!');
  };

  const shareText = `Yuk baca artikel bermanfaat ini: "${post.title}" di Dzakirah.id\n\n`;
  const shareWhatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + window.location.href)}`;

  return (
    <main className="blog-post-page" id={`blog-post-${post.id}`}>
      {/* Mini Breadcrumb Header */}
      <div className="post-header-nav container">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={16} /> Kembali ke Blog
        </Link>
        <nav className="breadcrumb">
          <Link to="/">Beranda</Link>
          <span>/</span>
          <Link to="/blog">Blog</Link>
          <span>/</span>
          <span className="current">{post.title}</span>
        </nav>
      </div>

      {/* Main Post Content */}
      <section className="section section--post-body">
        <div className="container container--narrow">
          <article className="post-article">
            <span className="post-category" style={{ backgroundColor: 'var(--color-primary-glow)', color: 'var(--color-primary-dark)' }}>
              {post.category}
            </span>
            <h1 className="post-title">{post.title}</h1>
            
            <div className="post-meta">
              <span>
                <Calendar size={14} /> 
                {new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <span>
                <Clock size={14} /> 
                {post.readTime} membaca
              </span>
            </div>

            <div 
              className="post-hero-image"
              style={{ background: 'linear-gradient(135deg, var(--color-primary-lighter), var(--color-secondary-light))' }}
            >
              <Sparkles size={48} className="decor-icon" />
            </div>

            <div className="post-content">
              {post.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={idx}>{paragraph.replace('## ', '')}</h2>;
                } else if (paragraph.includes('QS.')) {
                  return (
                    <blockquote key={idx} className="post-quote">
                      <p>{paragraph}</p>
                    </blockquote>
                  );
                } else if (paragraph.includes('**')) {
                  // Render basic lists or inline boldings
                  const lines = paragraph.split('\n');
                  if (lines.length > 1) {
                    return (
                      <ul key={idx} className="post-list">
                        {lines.map((line, i) => {
                          const cleanLine = line.replace(/^\d+\.\s*\*\*/, '').replace(/^\*\*/, '').replace(/\*\*/g, '');
                          const parts = line.split('**');
                          return (
                            <li key={i}>
                              <strong>{parts[1] || ''}</strong>{parts[2] || ''}
                            </li>
                          );
                        })}
                      </ul>
                    );
                  }
                }
                return <p key={idx}>{paragraph}</p>;
              })}
            </div>

            {/* Share and Tags */}
            <div className="post-share">
              <h4>Bagikan Artikel Ini:</h4>
              <div className="share-buttons">
                <a 
                  href={shareWhatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="share-btn whatsapp"
                >
                  <Send size={16} /> WhatsApp
                </a>
                <button onClick={handleCopyLink} className="share-btn copylink">
                  <LinkIcon size={16} /> Salin Tautan
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedArticles.length > 0 && (
        <section className="section section--alt" ref={revealRef}>
          <div className="container">
            <div className="section__header scroll-reveal">
              <span className="section__badge"><Sparkles size={14} /> Rekomendasi</span>
              <h2 className="section__title">Artikel Terkait</h2>
            </div>
            
            <div className="related-articles-grid scroll-reveal">
              {relatedArticles.map((article) => (
                <Link 
                  key={article.id} 
                  to={`/blog/${article.slug}`} 
                  className="related-article-card card"
                >
                  <span className="category">{article.category}</span>
                  <h4>{article.title}</h4>
                  <p>{article.excerpt}</p>
                  <span className="readtime"><Clock size={12} /> {article.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
