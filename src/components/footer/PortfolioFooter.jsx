import React from "react";

import styles from "./PortfolioFooter.module.css";

import github from "../profile/github.png";
import instagram from "../profile/instagram.png";
import linkedin from "../profile/linkedin.png";

const PortfolioFooter = () => {
  return (
    <footer>
      <hr className={styles["footer-top-line"]} />
      <div className={styles["main-footer"]}>
        <div className={styles["left-column"]}>
          <h4>Navigation</h4>
          <ul className={styles["footer-links"]}>
            <li>
              <a href="./index.html">Home</a>
            </li>
            <li>
              <a href="../pages/best_seller.html">Bestsellers</a>
            </li>
            <li>
              <a href="../pages/club.html">Club</a>
            </li>
            <li>
              <a href="../pages/about.html">About</a>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <h4>Socials</h4>

          <div className={styles["middle-column"]}>
            <a href="https://www.linkedin.com/in/modi-pranav/">
              <img
                src={linkedin}
                className={styles["logo-img"]}
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/modi.pranav767/">
              <img
                src={instagram}
                className={styles["logo-img"]}
                alt=""
              />
            </a>
            <a href="https://github.com/PranavModi999">
              <img
                src={github}
                className={styles["logo-img"]}
                alt=""
              />
            </a>
          </div>
          <hr className={styles["footer-top-line"]} />
          <div>
            <p>thank you for exploring my portfolio website - © 2023</p>
          </div>
        </div>
        <div className={styles["right-column"]}>
          <h4>Contact Us</h4>
          <div>
            <p>Email: info@lithaven.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
      <hr className={styles["footer-top-line"]} />
    </footer>
  );
};
export default PortfolioFooter;
