import React from "react";
import brainyBeamLogo from "./brainybeam.png";
import conestogaLogo from "./conestoga.png";
import itmLogo from "./itm.png";
import smartNodeLogo from "./smartnode.png";
import TimeLineCard from "./timline_card/TimeLineCard";

import ProgressBar from "../../UI/ProgressBar/ProgressBar";
import ScrollMotionComponent from "../../UI/ScollMotionComponent/ScrollMotionComponent";
import styles from "./Education.module.css";

const Education = React.forwardRef((_, ref) => {
  return (
    <section ref={ref} className={styles.education_container}>
      <h1 className={styles.title}>Proficiency</h1>
      <p className={styles.description}>
        Using a combination of cutting-edge technologies and reliable
        open-source software i build user-focused, performat apps and websites
        for smartphone, tablets and desktop. Here is how my peers would rank my
        skills.
      </p>
      <section className={styles.proficiency_container}>
        <ProgressBar title="Frontend/Design" progress="90%" />
        <ProgressBar title="Mobile App Development" progress="95%" />
        <ProgressBar title="Backend development" progress="75%" />
        <ProgressBar title="Programming" progress="70%" />
      </section>
      <h1 className={styles.title}>My Educational Journey</h1>
      <div className={styles.timeline_container}>
        <ScrollMotionComponent>
          <TimeLineCard
            logo={conestogaLogo}
            position="left"
            title="Conestoga College"
            subtitle="Post Graduate web development"
            date="jan 2023- april 2024"
            description="At Conestoga College, I am currently pursuing a Post Graduate Web Development program, where I have maintained a strong GPA of 3.88/4.00. My experience here involves honing my web development skills and staying at the forefront of industry trends, ensuring I'm well-equipped for the ever-evolving digital landscape."
          />
        </ScrollMotionComponent>
        <ScrollMotionComponent>
          <TimeLineCard
            logo={smartNodeLogo}
            position="right"
            title="Smart Node"
            date="jan 2022- sep 2022"
            subtitle="Junior Software Developer"
            description="At SmartNode Pvt. Ltd, I served as a Flutter Developer intern from January 2022 to December 2022. During this time, I played a pivotal role in front-end development for an Android app with over 2000 users. I also designed and implemented voice control and automation modules, enriching the user experience and product functionality."
          />
        </ScrollMotionComponent>
        <ScrollMotionComponent>
          <TimeLineCard
            logo={brainyBeamLogo}
            position="left"
            title="BrainyBeam Technologies"
            date="May 2021- Jun 2021"
            subtitle="Software Developer intern"
            description="At BrainyBeam, I gained valuable experience and expertise in Core Java, building a strong foundation in this essential programming language. This knowledge has been instrumental in my broader skill set and development journey."
          />{" "}
        </ScrollMotionComponent>
        <ScrollMotionComponent>
          <TimeLineCard
            logo={itmLogo}
            position="right"
            title="ITM SLS , Vadodara"
            date="jun 2018- May 2022"
            subtitle="B.E Computer science"
            description="I completed a Bachelor of Engineering in Computer Science at ITM(SLS) Baroda University from June 2018 to May 2022, acquiring a strong educational background in computer science."
          />
        </ScrollMotionComponent>
      </div>
    </section>
  );
});
export default Education;
