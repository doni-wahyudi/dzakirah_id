import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const phoneNumber = '6282269665134';
  const message = encodeURIComponent('Assalamu\'alaikum, saya ingin bertanya tentang komunitas Dzakirah 🌷');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
      id="floating-whatsapp"
      aria-label="Chat via WhatsApp"
    >
      <div className="floating-wa__pulse" />
      <div className="floating-wa__icon">
        <MessageCircle size={24} />
      </div>
      <span className="floating-wa__tooltip">Chat dengan kami!</span>
    </a>
  );
}
