import React from "react";

import styles from "./PortfolioFooter.module.css";

import github from "../components/profile/github.png";
import linkedin from "../components/profile/linkedin.png";

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
            <img
              className={styles["logo-img"]}
              src={github}
              alt="LOGO"
              srcset=""
            />
            <img
              className={styles["logo-img"]}
              src={linkedin}
              alt="LOGO"
              srcset=""
            />
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
      <p className={styles["copyrights"]}>
        Thank you for exploring my portfolio website - © 2023
      </p>
    </footer>
  );
};
export default PortfolioFooter;
