import React from "react";
import styles from "./pages.module.css";
import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <div>
      <section id="projects" className={styles.sectionContainer}>
        <div className={styles.mainContainer}>
          <h1>My Projects</h1>
          <div className={styles.project}>
            <h3>My Submissions for FrontEnd Manager</h3>
            <Link to="/FEM" target="_blank">
              <button>Click Here!</button>
            </Link>
            <button>
              <a href="https://deluxe-sprite-40889e.netlify.app/">
                Try my Age Calculator
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
