import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, BookOpen, Newspaper, MoreHorizontal } from 'lucide-react';
import './Navbar.css';

const mainNavLinks = [
  { path: '/', label: 'Beranda' },
  { path: '/tentang', label: 'Tentang' },
  {
    label: 'Program',
    children: [
      { path: '/program', label: 'Semua Program' },
      { path: '/program/mental-health', label: 'Mental Health' },
      { path: '/program/pranikah', label: 'Pranikah' },
      { path: '/program/parenting', label: 'Parenting' },
    ],
  },
  { path: '/komunitas', label: 'Komunitas' },
  { path: '/blog', label: 'Blog' },
  { path: '/event', label: 'Event' },
  {
    label: 'Lainnya',
    children: [
      { path: '/galeri', label: 'Galeri' },
      { path: '/belajar-sedekah', label: 'Belajar Sedekah' },
      { path: '/kontak', label: 'Kontak' },
    ],
  },
];

const mobileNavItems = [
  { path: '/', label: 'Beranda', icon: Home },
  { path: '/program', label: 'Program', icon: BookOpen },
  { path: '/blog', label: 'Blog', icon: Newspaper },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const isHome = location.pathname === '/';

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`navbar ${scrolled || !isHome ? 'navbar--solid' : 'navbar--transparent'}`} id="desktop-navbar">
        <div className="navbar__inner container">
          <Link to="/" className="navbar__logo" id="logo-link">
            <span className="navbar__logo-text">dzakirah</span>
            <span className="navbar__logo-dot">.id</span>
          </Link>

          <ul className="navbar__links">
            {mainNavLinks.map((item, i) =>
              item.children ? (
                <li
                  key={i}
                  className="navbar__dropdown"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="navbar__link navbar__link--dropdown" id={`dropdown-${item.label.toLowerCase()}`}>
                    {item.label}
                    <ChevronDown size={14} className={`navbar__chevron ${activeDropdown === item.label ? 'navbar__chevron--open' : ''}`} />
                  </button>
                  <div className={`navbar__dropdown-menu ${activeDropdown === item.label ? 'navbar__dropdown-menu--open' : ''}`}>
                    {item.children.map((child) => (
                      <NavLink key={child.path} to={child.path} className="navbar__dropdown-item" id={`nav-${child.path.replace(/\//g, '-').slice(1)}`}>
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                    id={`nav-${item.path === '/' ? 'home' : item.path.slice(1)}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          <a
            href="https://instagram.com/dzakirah.id"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--pill navbar__cta"
            id="nav-gabung-btn"
          >
            Gabung Sekarang
          </a>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-nav" id="mobile-navbar">
        {mobileNavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `mobile-nav__item ${isActive ? 'mobile-nav__item--active' : ''}`}
            id={`mobile-nav-${item.path === '/' ? 'home' : item.path.slice(1)}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
        <button
          className={`mobile-nav__item ${drawerOpen ? 'mobile-nav__item--active' : ''}`}
          onClick={() => setDrawerOpen(!drawerOpen)}
          id="mobile-nav-menu"
        >
          {drawerOpen ? <X size={20} /> : <MoreHorizontal size={20} />}
          <span>Menu</span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`drawer-overlay ${drawerOpen ? 'drawer-overlay--open' : ''}`} onClick={() => setDrawerOpen(false)} />
      <div className={`drawer ${drawerOpen ? 'drawer--open' : ''}`} id="mobile-drawer">
        <div className="drawer__header">
          <Link to="/" className="navbar__logo" onClick={() => setDrawerOpen(false)}>
            <span className="navbar__logo-text">dzakirah</span>
            <span className="navbar__logo-dot">.id</span>
          </Link>
          <button className="drawer__close" onClick={() => setDrawerOpen(false)} id="drawer-close-btn">
            <X size={24} />
          </button>
        </div>
        <div className="drawer__content">
          {mainNavLinks.map((item, i) =>
            item.children ? (
              <div key={i} className="drawer__group">
                <span className="drawer__group-label">{item.label}</span>
                {item.children.map((child) => (
                  <NavLink
                    key={child.path}
                    to={child.path}
                    className={({ isActive }) => `drawer__link drawer__link--sub ${isActive ? 'drawer__link--active' : ''}`}
                    onClick={() => setDrawerOpen(false)}
                  >
                    {child.label}
                  </NavLink>
                ))}
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `drawer__link ${isActive ? 'drawer__link--active' : ''}`}
                onClick={() => setDrawerOpen(false)}
              >
                {item.label}
              </NavLink>
            )
          )}
        </div>
        <div className="drawer__footer">
          <a
            href="https://instagram.com/dzakirah.id"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--pill btn--lg drawer__cta"
          >
            Gabung Sekarang
          </a>
        </div>
      </div>
    </>
  );
}
