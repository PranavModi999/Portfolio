import React from "react";

import styles from "./Education.module.css";

const Education = () => {
  return (
    <div className={styles.education_container}>
      <section className={styles.left_container}>
        <h1>
          Know Who <span className={styles.emphasis_text}>I'M</span>
        </h1>
        <p>
          I started my journey by enrolling in Bachelor of Engineering in
          Computer Science at ITM(SLS) Baroda University, Vadodara, Gujarat,
          from June 2018 to May 2022.During my college life i participated in
          college offered internship as a Research Intern where I conducted data
          analysis on sleep disorder data. Furthermore, i took upon another
          internship opprtunity to learn deeply about object oreinted
          proggraming at BrainyBeam Pvt Ltd.
        </p>
        <p>
          My most recent professional experience was as a Flutter Developer
          Intern at SmartNode Pvt. Ltd. During this internship, I independently
          managed front-end development for Android applications, implementing
          voice integration, Geo-fencing, and NFC modules.
        </p>
        <p>
          Currently, I am pursuing a Post Graduate Web Development program at
          Conestoga College in Kitchener, Ontario, where I maintain a GPA of
          3.88/4.00. My career journey reflects my continuous dedication to
          software development, data analysis, and technology-driven
          problem-solving.
        </p>
      </section>
      <section className={styles.right_container}></section>
    </div>
  );
};
export default Education;
