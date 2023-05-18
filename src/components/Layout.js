import React from "react";
import styles from "./Layout.module.css";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import NavBar from "./NavBar";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import Contacts from "./pages/Contact.js";
import Home from "./pages/Home";

export default function Layout({ isNavOpen, toggleNav }) {
  // const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  // const toggleNav = () => {
  //   setIsNavOpen((prevState) => !prevState);
  // };

  // useEffect(() => {
  //   if (isNavOpen) {
  //     document.body.style.overflow = "";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  // }, [isNavOpen]);

  return (
    <div className={styles.main}>
      <NavBar isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <div id="home" className={styles.home}>
        <Home />
        <div>
          <About />
        </div>
        <div id="projects" className={styles.projects}>
          <Projects />
        </div>
        <div id="contacts" className={styles.contacts}>
          <Contacts />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
