import React from "react";
import litHaven from "./litHaven.png";
import ProjectCard from "./project_card/ProjectCard";

import styles from "./Project.module.css";

const Project = React.forwardRef((_, ref) => {
  return (
    <div ref={ref}>
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
    </div>
  );
});
export default Project;
