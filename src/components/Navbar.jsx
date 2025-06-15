import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Import the CSS module
import Logo from '../assets/tana-craft-logo.svg';

function NavBar() {
  // State to toggle the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close the menu when a nav link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <Link to="/" className={styles.navbarLogo} onClick={closeMenu}>
        <img src={Logo} alt="Logo" />
        TanaCraft
      </Link>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.navbarLinks} ${menuOpen ? styles.open : ""}`}>
        <li className={styles.navbarItem} onClick={closeMenu}>
          <Link to="/" className={styles.navbarLink}>Home</Link>
        </li>
        <li className={styles.navbarItem} onClick={closeMenu}>
          <Link to="/furniture" className={styles.navbarLink}>Portfolio</Link>
        </li>
        <li className={styles.navbarItem} onClick={closeMenu}>
          <Link to="/restoration" className={styles.navbarLink}>Restoration</Link>
        </li>
        <li className={styles.navbarItem} onClick={closeMenu}>
          <Link to="/contact" className={styles.navbarLink}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
