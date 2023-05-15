import React from "react";
import styles from "./pages.module.css";

import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className={styles.sectionContainer}>
      <div className={styles.mainContainer}>
        <h1>About</h1>
        <div>hello</div>
        <p className={styles.text}></p>
      </div>
    </section>
  );
}
