import React from "react";
import { useState, useEffect } from "react";
import styles from "./Layout.module.css";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import About from "./pages/About.js";
import { Link } from "react-router-dom";

function NavBar({ isNavOpen, toggleNav }) {
  return (
    <div
      className={`${styles.primaryHeader} ${
        isNavOpen && window.innerWidth < 600 ? styles.navOpen : ""
      }`}
    >
      <div className={styles.topHeader}>
        <div className={styles.logoContainer}>
          <h1>Dieter Banaag</h1>
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#projects">My Projects</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <nav
          className={styles.secondaryNavigation}
          style={isNavOpen ? { display: "block" } : { display: "none" }}
        >
          <ul aria-label="Primary" role="list" className={styles.mobileList}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">My Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
