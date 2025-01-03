import React,{ useState } from 'react';
import Link from 'next/link';
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Logo or App name */}
        <Link href="/">
          <a className={styles.logo}>My App</a>
        </Link>

        {/* Hamburger menu icon for mobile */}
        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          &#9776;
        </div>

        {/* Navbar Links */}
        <ul className={`${styles.navLinks} ${isMobile ? styles.active : ''}`}>
          <li>
            <Link href="/home">
              <a className={styles.navLink}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={styles.navLink}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a className={styles.navLink}>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={styles.navLink}>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
