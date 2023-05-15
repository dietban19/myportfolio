import React from "react";
import NavBar from "../NavBar.js";
import styles from "./FEM.module.css";

function FEM() {
  return (
    <div>
      <div>
        <NavBar />
        <div className={styles.container}>
          <a
            href="https://vermillion-biscuit-7f29a5.netlify.app"
            target="_blank"
          >
            First
          </a>
          <a href="https://main--melodic-stardust-ee46f5.netlify.app/">
            Second
          </a>
        </div>
      </div>
    </div>
  );
}

export default FEM;
