import React from "react";

import styles from "./ProjectCard.module.css";

const ProjectCard = ({ img, children }) => {
  return (
    <div className={styles.project}>
      <img src={img} alt="lithaven" />
      <div className={styles.links}>
        <p>Demo</p>
        <p>Code</p>
      </div>
    </div>
  );
};
export default ProjectCard;
