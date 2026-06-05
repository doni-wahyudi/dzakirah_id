import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, MessageSquare, Heart } from 'lucide-react';
import Instagram from '../../components/Icons/Instagram';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import '../../pages/About/AboutPage.css'; // sharing page-hero styles
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error'

  const infoRef = useScrollReveal();
  const formRef = useScrollReveal();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5s
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <main className="contact-page" id="contact-page">
      {/* Hero Header */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb">
              <Link to="/">Beranda</Link>
              <span>/</span>
              <span>Hubungi Kami</span>
            </nav>
            <h1>Hubungi Kami</h1>
            <p>Punya pertanyaan, usulan kerja sama, atau ingin mendaftar kegiatan secara manual? Kami siap mendengarmu.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left Column: Info Cards */}
            <div className="contact-info" ref={infoRef}>
              <div className="scroll-reveal">
                <span className="section__badge"><Heart size={14} /> Hubungi Kami</span>
                <h2>Mari Terhubung Lebih Dekat</h2>
                <p className="contact-info-desc">
                  Tim relawan Dzakirah akan berusaha menjawab pesanmu secepatnya. Untuk respon kilat, kamu bisa langsung menghubungi admin via WhatsApp.
                </p>

                <div className="contact-info-list">
                  <div className="contact-info-item card">
                    <div className="icon-wrapper">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <h4>WhatsApp Admin</h4>
                      <a href="https://wa.me/6282269665134" target="_blank" rel="noopener noreferrer" className="info-link">
                        0822-6966-5134 <span>(Respon Cepat)</span>
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-item card">
                    <div className="icon-wrapper">
                      <Instagram size={20} />
                    </div>
                    <div>
                      <h4>Instagram Utama</h4>
                      <a href="https://instagram.com/dzakirah.id" target="_blank" rel="noopener noreferrer" className="info-link">
                        @dzakirah.id
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-item card">
                    <div className="icon-wrapper">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4>Sekretariat Kami</h4>
                      <p className="info-text">Bandar Lampung, Lampung, Indonesia 🇮🇩</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-container card" ref={formRef}>
              <div className="scroll-reveal">
                <h3>Kirimkan Pesan</h3>
                <p>Silakan isi formulir di bawah ini untuk mengirimkan surat elektronik kepada kami.</p>
                
                <form onSubmit={handleFormSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Nama Lengkap</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Masukkan nama lengkapmu..."
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Alamat Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Masukkan alamat email aktifmu..."
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subjek / Perihal</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="Apa perihal pesanmu?"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Isi Pesan</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tuliskan pesanmu secara detail di sini..."
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn--primary btn--full btn--pill"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Mengirim...' : (
                      <>
                        Kirim Pesan <Send size={16} />
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="form-status form-status--success">
                      <p>✨ Pesanmu berhasil dikirim! Jazakillahu khairan.</p>
                    </div>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
