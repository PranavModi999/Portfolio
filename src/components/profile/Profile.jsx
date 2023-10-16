import React from "react";
import ProfileMain from "./profile_main.png";

import styles from "./Profile.module.css";

import github from "./github.png";
import linkedin from "./linkedin.png";
import locationIcon from "./location.svg";


const Profile = () => {
  return (
    <div className={styles.profile}>
      <section className={styles.left_container}>
        <div className={styles.middle_col}>
          <div className={styles.cv_container}>
            <img
              className={styles.location}
              src={locationIcon}
              alt=""
              srcset=""
            />
            <p>Kitchener, Ontario</p>
          </div>
          <img className={styles.profile_main} src={ProfileMain} alt="" />
        </div>
          <h3 className={styles.title}>Hey, I am Pranav Modi</h3>
          <p className={styles.content}>
            I am a passionate Full Stack Developer and chess enthusiast. With a
            strong love for coding and strategy, I bring a unique blend of
            creativity and problem-solving to every project. Let's explore the
            world of technology and chess together!
          </p>
        <div className={styles.cv_container}>
          <button className={styles.cv_button}>DOWNLOAD CV</button>
          <a href="https://www.linkedin.com/in/modi-pranav/">
            <img src={linkedin} className={styles.linkedin} alt="" srcset="" />
          </a>
          <a href="https://github.com/PranavModi999">
            <img src={github} className={styles.github} alt="" srcset="" />
          </a>{" "}
        </div>
      </section>
    </div>
  );
};
export default Profile;
