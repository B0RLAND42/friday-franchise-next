import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import styles from './Header.module.scss';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) && // click not inside nav
        buttonRef.current &&
        !buttonRef.current.contains(event.target) // click not on hamburger
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = () => setMenuOpen(false); // close menu when nav link clicked

  return (
    <header className={styles.header}>
      {/* Brand */}
      <div className={styles.brand}>
        <Link href="/">
          <span className={styles.logoMain}>Friday the 13th</span>
        </Link>
      </div>

      {/* Hamburger */}
      <button
        ref={buttonRef}
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <MdOutlineMenu size={30} />
      </button>

      {/* Nav */}
      <nav
        ref={navRef}
        className={`${styles.nav} ${menuOpen ? styles.open : ''}`}
      >
        <ul className={styles.navList}>
          <li>
            <Link href="/fridaymovies" className={styles.blend} onClick={handleLinkClick}>
              <span>Movies</span>
            </Link>
          </li>
          <li>
            <Link href="/fridaytv" className={styles.blend} onClick={handleLinkClick}>
              <span>TV Series</span>
            </Link>
          </li>
          <li>
            <Link href="/fridaydoc" className={styles.blend} onClick={handleLinkClick}>
              <span>Documentaries</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
