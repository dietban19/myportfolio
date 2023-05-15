import React from "react";
import { useState, useEffect } from "react";
import styles from "./Layout.module.css";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import About from "./pages/About.js";
import logo from "../assets/images/logo.png";
import { Link } from "react-scroll";
function NavBar({ isNavOpen, toggleNav }) {
  const [activeLink, setActiveLink] = useState("");

  function handleLinkClick(link) {
    setActiveLink(link);
  }
  return (
    <div
      className={`${styles.primaryHeader} ${
        isNavOpen && window.innerWidth < 600 ? styles.navOpen : ""
      }`}
    >
      <div className={styles.topHeader}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.mobileNavToggle}
            aria-controls="primary-navigation"
            aria-expanded={isNavOpen ? "true" : "false"}
            onClick={toggleNav}
          >
            {isNavOpen ? (
              <img src={close} alt="close" />
            ) : (
              <img src={hamburger} alt="hamburger" />
            )}
            <span className={styles.visuallyHidden}>Menu</span>
          </button>
        </div>
        <nav className={styles.primaryNavigation}>
          <ul aria-label="Primary" role="list" className={styles.navList}>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                onClick={() => handleLinkClick("home")}
                className={activeLink === "home" ? styles.activeLink : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                onClick={() => handleLinkClick("about")}
                className={activeLink === "about" ? styles.activeLink : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-90}
                onClick={() => handleLinkClick("projects")}
                className={activeLink === "projects" ? styles.activeLink : ""}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                offset={-90}
                onClick={() => handleLinkClick("contacts")}
                className={activeLink === "contacts" ? styles.activeLink : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <nav
          className={styles.secondaryNavigation}
          style={isNavOpen ? { display: "block" } : { display: "none" }}
        >
          <ul aria-label="Primary" role="list" className={styles.mobileList}>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                onClick={() => handleLinkClick("home")}
                className={activeLink === "home" ? styles.activeLink : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                onClick={() => handleLinkClick("about")}
                className={activeLink === "about" ? styles.activeLink : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-90}
                onClick={() => handleLinkClick("projects")}
                className={activeLink === "projects" ? styles.activeLink : ""}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                offset={-90}
                onClick={() => handleLinkClick("contacts")}
                className={activeLink === "contacts" ? styles.activeLink : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
