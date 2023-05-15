import React from "react";
import styles from "./pages.module.css";
function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.name}>Dieter Banaag</h1>
          <h2>Student, Future Frontend Developer</h2>
          <p className={styles.text}>
            I am a Univerisity of Calgary student, and I am currently taking
            Software Engineering. I am interested in web development
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
