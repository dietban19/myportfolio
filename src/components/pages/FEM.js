import React from "react";
import NavBar from "../NavBar.js";
import styles from "./FEM.module.css";

function FEM({ isNavOpen, toggleNav }) {
  return (
    <div>
      <NavBar isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <div>
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
            <li>
              <a href="https://deluxe-sprite-40889e.netlify.app/">
                Age Calculator
              </a>
            </li>
          </ul>
          <p>
            molestiae sed nihil dolores ab ipsa quae id esse reprehenderit eos
            culpa error? Sit blanditiis eius et autem quia aut quibusdam officia
            in natus voluptas ut quia fugit ab earum numquam qui esse
            reprehenderit.
          </p>
          <p>
            {" "}
            molestiae sed nihil dolores ab ipsa quae id esse reprehenderit eos
            culpa error? Sit blanditiis eius et autem quia aut quibusdam officia
            in natus voluptas ut quia fugit ab earum numquam qui esse
            reprehenderit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FEM;
