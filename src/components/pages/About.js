import React from "react";
import styles from "./pages.module.css";

import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className={styles.sectionContainer}>
      <div className={styles.mainContainer}>
        <h1>About</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet. Qui omnis repudiandae et voluptates
          molestiae sed nihil dolores ab ipsa quae id esse reprehenderit eos
          culpa error? Sit blanditiis eius et autem quia aut quibusdam officia
          in natus voluptas ut quia fugit ab earum numquam qui esse
          reprehenderit.
        </p>
      </div>
    </section>
  );
}
