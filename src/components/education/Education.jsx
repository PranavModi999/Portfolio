import React from "react";
import conestogaLogo from "./conestoga.png";
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
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut, error unde officia ducimus sequi natus at quam minus perferendis corporis excepturi. Dicta, eligendi. Sed doloremque iste dolorem deserunt iure."
          />
        </ScrollMotionComponent>
        <ScrollMotionComponent>
          <TimeLineCard
            logo={conestogaLogo}
            position="right"
            title="Conestoga College"
            date="jan 2023- april 2024"
            subtitle="Post Graduate web development"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut, error unde officia ducimus sequi natus at quam minus perferendis corporis excepturi. Dicta, eligendi. Sed doloremque iste dolorem deserunt iure."
          />
        </ScrollMotionComponent>
        <ScrollMotionComponent>
          <TimeLineCard
            logo={conestogaLogo}
            position="left"
            title="Conestoga College"
            date="jan 2023- april 2024"
            subtitle="Post Graduate web development"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut, error unde officia ducimus sequi natus at quam minus perferendis corporis excepturi. Dicta, eligendi. Sed doloremque iste dolorem deserunt iure."
          />{" "}
        </ScrollMotionComponent>
        <ScrollMotionComponent>
          <TimeLineCard
            logo={conestogaLogo}
            position="right"
            title="Conestoga College"
            date="jan 2023- april 2024"
            subtitle="Post Graduate web development"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut, error unde officia ducimus sequi natus at quam minus perferendis corporis excepturi. Dicta, eligendi. Sed doloremque iste dolorem deserunt iure."
          />
        </ScrollMotionComponent>
      </div>
    </section>
  );
});
export default Education;
