import React from "react";
import ProfileMain from "./profile_main.png";

import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <section className={styles.left_container}>
        <img className={styles.profile_main} src={ProfileMain} alt="" />
        <h3 className={styles.title}>Hey, I am Pranav Modi</h3>
        <p className={styles.content}>
          I am a passionate Full Stack Developer and chess enthusiast. With a
          strong love for coding and strategy, I bring a unique blend of
          creativity and problem-solving to every project. Let's explore the
          world of technology and chess together!
        </p>
      </section>
    </div>
  );
};
export default Profile;
