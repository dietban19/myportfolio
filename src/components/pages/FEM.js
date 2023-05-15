import React from "react";
import NavBar from "../NavBar.js";
import styles from "./FEM.module.css";

function FEM() {
  return (
    <div>
      <div>
        <NavBar />
        <div className={styles.container}>
          <ul>
            <li>
              <a
                href="https://vermillion-biscuit-7f29a5.netlify.app"
                target="_blank"
              >
                First
              </a>
            </li>
            <li>
              <a href="https://main--melodic-stardust-ee46f5.netlify.app/">
                Second
              </a>
            </li>
            <li>
              <a href="https://main--whimsical-cocada-00df4f.netlify.app/">
                Third
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FEM;
