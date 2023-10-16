import React from "react";
import litHaven from "./litHaven.png";
import ProjectCard from "./project_card/ProjectCard";

import styles from "./Project.module.css";

const Project = () => {
  return (
    <React.Fragment>
      <h1 className={styles.title}>My Projects</h1>

      <div className={styles.project_container}>
        <ProjectCard img={litHaven} />
        <ProjectCard img={litHaven} />
        <ProjectCard img={litHaven} />
        <ProjectCard img={litHaven} />
        <ProjectCard img={litHaven} />
        <ProjectCard img={litHaven} />
        <ProjectCard img={litHaven} />
        <ProjectCard img={litHaven} />
      </div>
    </React.Fragment>
  );
};
export default Project;
