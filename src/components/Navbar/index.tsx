'use client';

import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown when clicking on a link
  const handleLinkClick = () => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={styles.nav} ref={dropdownRef}>
      <div className={styles.logoLink}>
        <div className={styles.logo}>
          <a href="#" className={styles.logoIconLink}>
            <div className={styles.logoIcon}>
              <span className={styles.logoA}>A</span>
            </div>
          </a>
          <div className={styles.logoTextContainer}>
            <a href="#" className={styles.logoTextLink}>
              <span className={styles.logoText}>ALPIXN</span>
            </a>
            <span className={styles.logoTagline}>
              SOFTWARE MADE EASY
              <span className={styles.builtBy}>
                {' '}Built by <a 
                  href="https://mohitx.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.mohitLink}
                  onMouseEnter={(e) => {
                    const link = e.currentTarget;
                    const rect = link.getBoundingClientRect();
                    const interval = setInterval(() => {
                      const star = document.createElement('span');
                      star.className = 'mohit-star';
                      star.textContent = '★';
                      
                      // Random angle for burst direction
                      const angle = Math.random() * Math.PI * 2;
                      const distance = Math.random() * 80 + 40; // 40-120px from center
                      const offsetX = Math.cos(angle) * distance;
                      const offsetY = Math.sin(angle) * distance;
                      
                      star.style.position = 'fixed';
                      star.style.left = `${rect.left + rect.width / 2}px`;
                      star.style.top = `${rect.top + rect.height / 2}px`;
                      star.style.fontSize = `${Math.random() * 15 + 10}px`;
                      star.style.color = '#000000';
                      star.style.opacity = '0';
                      star.style.pointerEvents = 'none';
                      star.style.zIndex = '9999';
                      star.style.setProperty('--offset-x', `${offsetX}px`);
                      star.style.setProperty('--offset-y', `${offsetY}px`);
                      star.style.animation = 'starBurst 1.2s ease-out forwards';
                      
                      document.body.appendChild(star);
                      
                      setTimeout(() => star.remove(), 1200);
                    }, 80);
                    
                    link.setAttribute('data-interval', interval.toString());
                  }}
                  onMouseLeave={(e) => {
                    const link = e.currentTarget;
                    const interval = link.getAttribute('data-interval');
                    if (interval) {
                      clearInterval(parseInt(interval));
                      link.removeAttribute('data-interval');
                    }
                    const stars = document.querySelectorAll('.mohit-star');
                    stars.forEach(star => star.remove());
                  }}
                >
                  <span className={styles.mohit}>Mohit</span>
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <button className={styles.hamburger} onClick={toggleMobileMenu} aria-label="Toggle menu">
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksOpen : ''}`}>
        <a href="#" className={styles.navLink} onClick={handleLinkClick}>Home</a>
        <a href="#" className={styles.navLink} onClick={handleLinkClick}>About</a>
        
        <div className={styles.dropdown}>
          <button className={styles.navLink} onClick={() => toggleDropdown('offshore')}>
            Offshore Developer <FaChevronDown className={`${styles.chevron} ${openDropdown === 'offshore' ? styles.chevronOpen : ''}`} />
          </button>
          {openDropdown === 'offshore' && (
            <div className={styles.dropdownContent}>
              <a href="#" onClick={handleLinkClick}>Hire Developers</a>
              <a href="#" onClick={handleLinkClick}>Engagement Models</a>
              <a href="#" onClick={handleLinkClick}>Technologies</a>
            </div>
          )}
        </div>
        
        <div className={styles.dropdown}>
          <button className={styles.navLink} onClick={() => toggleDropdown('products')}>
            Products <FaChevronDown className={`${styles.chevron} ${openDropdown === 'products' ? styles.chevronOpen : ''}`} />
          </button>
          {openDropdown === 'products' && (
            <div className={styles.dropdownContent}>
              <a href="#" onClick={handleLinkClick}>Product 1</a>
              <a href="#" onClick={handleLinkClick}>Product 2</a>
              <a href="#" onClick={handleLinkClick}>Product 3</a>
            </div>
          )}
        </div>
        
        <div className={styles.dropdown}>
          <button className={styles.navLink} onClick={() => toggleDropdown('expertise')}>
            Our Expertise <FaChevronDown className={`${styles.chevron} ${openDropdown === 'expertise' ? styles.chevronOpen : ''}`} />
          </button>
          {openDropdown === 'expertise' && (
            <div className={styles.dropdownContent}>
              <a href="#" onClick={handleLinkClick}>Industries</a>
              <a href="#" onClick={handleLinkClick}>Solutions</a>
              <a href="#" onClick={handleLinkClick}>Technologies</a>
            </div>
          )}
        </div>
        
        <div className={styles.dropdown}>
          <button className={styles.navLink} onClick={() => toggleDropdown('technologies')}>
            Technologies <FaChevronDown className={`${styles.chevron} ${openDropdown === 'technologies' ? styles.chevronOpen : ''}`} />
          </button>
          {openDropdown === 'technologies' && (
            <div className={styles.dropdownContent}>
              <a href="#" onClick={handleLinkClick}>Frontend</a>
              <a href="#" onClick={handleLinkClick}>Backend</a>
              <a href="#" onClick={handleLinkClick}>Mobile</a>
              <a href="#" onClick={handleLinkClick}>Cloud</a>
            </div>
          )}
        </div>
        
        <div className={styles.dropdown}>
          <button className={styles.navLink} onClick={() => toggleDropdown('resources')}>
            Resources <FaChevronDown className={`${styles.chevron} ${openDropdown === 'resources' ? styles.chevronOpen : ''}`} />
          </button>
          {openDropdown === 'resources' && (
            <div className={styles.dropdownContent}>
              <a href="#" onClick={handleLinkClick}>Case Studies</a>
              <a href="#" onClick={handleLinkClick}>Blog</a>
              <a href="#" onClick={handleLinkClick}>Whitepapers</a>
            </div>
          )}
        </div>
      </div>
      
      <a href="#" className={`${styles.contactBtn} ${mobileMenuOpen ? styles.contactBtnMobile : ''}`} onClick={handleLinkClick}>Contact Us</a>
    </nav>
  );
};

export default Navbar;
