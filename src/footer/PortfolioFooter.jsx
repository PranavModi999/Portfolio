import React from "react";

import styles from "./PortfolioFooter.module.css";

import github from "../components/profile/github.png";
import linkedin from "../components/profile/linkedin.png";

const PortfolioFooter = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.cv_container}>
        <a href="https://www.linkedin.com/in/modi-pranav/">
          <img src={linkedin} className={styles.linkedin} alt="" srcset="" />
        </a>
        <a href="https://github.com/PranavModi999">
          <img src={github} className={styles.github} alt="" srcset="" />
        </a>
      </div>
      <hr className={styles.line} />
      <button className={styles.cv_button}>DOWNLOAD CV</button>
    </div>
  );
};
export default PortfolioFooter;
