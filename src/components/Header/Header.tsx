import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo_blur.png";

const Header: React.FC = () => {
  const [navToggle, setNavToggle] = useState(false);
  const handleNavToggle = () => {
    setNavToggle(prevState => !prevState)
  }
  return (
    <header className={styles.Header}>
      <nav className={`${styles.nav} ${navToggle ? styles.active : ""}`}>
        <div className={styles.nav__wrapper}>
          <div className={styles.nav__logo_container}>
            <img className={styles.nav__logo} src={logo} alt="Portfolio logo" />
            {/* <span className="nav__logo-name">LX_DEV</span> */}
          </div>

          <ul className={styles.nav__links}>
            <li>
              <a href="#" className={styles.nav__links__link}>
                Home
              </a>
            </li>
            <li>
              <a href="#About" className={styles.nav__links__link}>
                About
              </a>
            </li>
            <li>
              <a href="#Services" className={styles.nav__links__link}>
                Services
              </a>
            </li>
            <li>
              <a href="#Works" className={styles.nav__links__link}>
                Works
              </a>
            </li>
            <li>
              <a href="#Contact" className={styles.nav__links__link}>
                Contact
              </a>
            </li>
          </ul>

          <div onClick={handleNavToggle} className={styles.nav__hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className={styles.mobile__nav}>
        <ul className={styles.mobile__nav__links}>
          <li>
            <a href="#" className={styles.mobile__nav__links__link}>
              Home
            </a>
          </li>
          <li>
            <a href="#About" className={styles.mobile__nav__links__link}>
              About
            </a>
          </li>
          <li>
            <a href="#Services" className={styles.mobile__nav__links__link}>
              Services
            </a>
          </li>
          <li>
            <a href="#Works" className={styles.mobile__nav__links__link}>
              Works
            </a>
          </li>
          <li>
            <a href="#Contact" className={styles.mobile__nav__links__link}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
