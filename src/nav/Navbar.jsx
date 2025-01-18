import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Import the CSS module
import Logo from '../assets/tana-craft-logo.svg'

function NavBar() {
  // Adding states
  const [isActive, setIsActive] = useState(false);

  // Clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <Link to="/" className={styles.navbarLogo} onClick={removeActive}>
        <img src={Logo} alt="Logo"/>
        TanaCraft
      </Link>

      {/* Navigation Links */}
      <ul className={styles.navbarLinks}>
        <li className={styles.navbarItem} onClick={removeActive}>
          <Link
            to="/"
            className={`${styles.navbarLink} ${
              isActive ? styles.activeLink : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li className={styles.navbarItem} onClick={removeActive}>
          <Link
            to="/furniture"
            className={`${styles.navbarLink} ${
              isActive ? styles.activeLink : ""
            }`}
          >
            Furniture
          </Link>
        </li>
        <li className={styles.navbarItem} onClick={removeActive}>
          <Link
            to="/restoration"
            className={`${styles.navbarLink} ${
              isActive ? styles.activeLink : ""
            }`}
          >
            Restoration
          </Link>
        </li>
        <li className={styles.navbarItem} onClick={removeActive}>
          <Link
            to="/contact"
            className={`${styles.navbarLink} ${
              isActive ? styles.activeLink : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
