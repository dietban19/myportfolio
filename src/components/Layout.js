import React from "react";
import styles from "./Layout.module.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import Contacts from "./pages/Contact.js";
export default function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "";
    }
  }, [isNavOpen]);
  return (
    <div>
      <NavBar isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <div id="main" className={styles.main}>
        <div id="about" className={styles.about}>
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contacts">
          <Contacts />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
