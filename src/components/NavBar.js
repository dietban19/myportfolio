import React from "react";
import { useState, useEffect } from "react";
import styles from "./Layout.module.css";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import About from "./pages/About.js";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

function NavBar({ isNavOpen, toggleNav, handleLinkClick }) {
  const [activeLink, setActiveLink] = useState("");
  console.log(activeLink);
  useEffect(() => {
    console.log(activeLink);
    if (activeLink) {
      alert(activeLink);
    }
    if (window.location.hash === "#") {
      alert("hello");
    }
  }, []);
  return (
    <div>
      <div className={styles.primaryHeader}>
        <div className={styles.topHeader}>
          <div className={styles.logoContainer}>
            <Link to="/" onClick={() => scroll.scrollToTop()}>
              <img src={logo} alt="logo" />
            </Link>
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
                  to="/#home"
                  onClick={() => handleLinkClick("home")}
                  className={activeLink === "home" ? styles.activeLink : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  onClick={() => handleLinkClick("about")}
                  className={activeLink === "about" ? styles.activeLink : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/#projects"
                  onClick={() => handleLinkClick("projects")}
                  className={activeLink === "projects" ? styles.activeLink : ""}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/#contacts"
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
      <div className={styles.secondaryNavigation}>
        <nav style={isNavOpen ? { display: "block" } : { display: "none" }}>
          {/* <div className={styles.secondaryNavigationContainer}> */}
          <ul aria-label="Primary" role="list" className={styles.mobileList}>
            <li>
              <Link
                to="/#home"
                onClick={() => handleLinkClick("home")}
                className={activeLink === "home" ? styles.activeLink : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#about"
                onClick={() => handleLinkClick("about")}
                className={activeLink === "about" ? styles.activeLink : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/#projects"
                onClick={() => handleLinkClick("projects")}
                className={activeLink === "projects" ? styles.activeLink : ""}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/#contacts"
                onClick={() => handleLinkClick("contacts")}
                className={activeLink === "contacts" ? styles.activeLink : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* </div> */}
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
