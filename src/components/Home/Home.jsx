import React from "react";

import Education from "../education/Education";
import Profile from "../profile/Profile";
import Project from "../project/Project";
import PortfolioFooter from "../footer/PortfolioFooter";

import styles from "./Home.module.css";

const Home = ({
  profileRef,
  experienceRef,
  projectRef,
  footerRef,
  scrollClickHandler,
}) => {
  return (
    <div className={styles.parallax_wrapper}>
      <div className={styles.profile_container}>
        <Profile ref={profileRef} />
      </div>
      <div className={styles.education_container}>
        <Education ref={experienceRef} />
      </div>
      <Project ref={projectRef} />
      <PortfolioFooter onScrollClick={scrollClickHandler} ref={footerRef} />
    </div>
  );
};
export default Home;
