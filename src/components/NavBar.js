import React from "react";
import { useState, useEffect } from "react";
import styles from "./Layout.module.css";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import About from "./pages/About.js";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";

function NavBar({ isNavOpen, toggleNav }) {
  const [activeLink, setActiveLink] = useState("");

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const checkScreenSize = () => {
    setIsSmallScreen(
      window.innerWidth <
        37.5 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleCheckUrl = (link) => {
    if (window.location.hash.charAt(0) !== "#") {
      setTimeout(() => {
        handleLinkClick(link);
      }, 100);
    } else {
      handleLinkClick(link);
    }
  };

  const handleLinkClick = (link) => {
    toggleNav();
    let offsetsize = -90;
    if (isSmallScreen) {
      offsetsize = -60;
    }
    scroller.scrollTo(link, {
      duration: 500,
      smooth: "easeInOutQuart",
      offset: offsetsize,
    });
  };
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
                  onClick={() => handleCheckUrl("home")}
                  className={activeLink === "home" ? styles.activeLink : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  onClick={() => handleCheckUrl("about")}
                  className={activeLink === "about" ? styles.activeLink : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/#projects"
                  onClick={() => handleCheckUrl("projects")}
                  className={activeLink === "projects" ? styles.activeLink : ""}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/#contacts"
                  onClick={() => handleCheckUrl("contacts")}
                  className={activeLink === "contacts" ? styles.activeLink : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={styles.secondaryNavigation}
        style={isNavOpen ? { display: "block" } : { display: "none" }}
      >
        <nav>
          {/* <div className={styles.secondaryNavigationContainer}> */}
          <ul aria-label="Primary" role="list" className={styles.mobileList}>
            <li>
              <Link
                to="/#home"
                onClick={() => handleCheckUrl("home")}
                className={activeLink === "home" ? styles.activeLink : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#about"
                onClick={() => handleCheckUrl("about")}
                className={activeLink === "about" ? styles.activeLink : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/#projects"
                onClick={() => handleCheckUrl("projects")}
                className={activeLink === "projects" ? styles.activeLink : ""}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/#contacts"
                onClick={() => handleCheckUrl("contacts")}
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
