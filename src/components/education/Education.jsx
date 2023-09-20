import React from "react";
import styles from "./Education.module.css";
import conestogaLogo from "./conestoga.png";
import TimeLineCard from "./timline_card/TimeLineCard";

const Education = () => {
  return (
    <section className={styles.education_container}>
      <h1 className={styles.title}>My Educational Journey</h1>
      <div className={styles.timeline_container}>
        <TimeLineCard
          logo={conestogaLogo}
          position="left"
          title="Conestoga College"
          subtitle="Post Graduate web development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut, error unde officia ducimus sequi natus at quam minus perferendis corporis excepturi. Dicta, eligendi. Sed doloremque iste dolorem deserunt iure."
        />
        <TimeLineCard
          logo={conestogaLogo}
          position="right"
          title="Conestoga College"
          subtitle="Post Graduate web development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut, error unde officia ducimus sequi natus at quam minus perferendis corporis excepturi. Dicta, eligendi. Sed doloremque iste dolorem deserunt iure."
        />{" "}
        <TimeLineCard
          logo={conestogaLogo}
          position="left"
          title="Conestoga College"
          subtitle="Post Graduate web development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut, error unde officia ducimus sequi natus at quam minus perferendis corporis excepturi. Dicta, eligendi. Sed doloremque iste dolorem deserunt iure."
        />{" "}
        <TimeLineCard
          logo={conestogaLogo}
          position="right"
          title="Conestoga College"
          subtitle="Post Graduate web development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut, error unde officia ducimus sequi natus at quam minus perferendis corporis excepturi. Dicta, eligendi. Sed doloremque iste dolorem deserunt iure."
        />
      </div>
    </section>
  );
};
export default Education;
