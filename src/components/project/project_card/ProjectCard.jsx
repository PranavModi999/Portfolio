import React from "react";

import styles from "./ProjectCard.module.css";

const ProjectCard = ({ img, demo, link }) => {
  return (
    <div className={styles.project}>
      <img src={img} alt="lithaven" />
      <div className={styles.links}>
        <p>
          <a
            className={demo === "N/A" ? styles.linksCross : styles.linksHover}
            href={demo}
          >
            Demo
          </a>
        </p>
        <p>
          <a
            className={link === "N/A" ? styles.linksCross : styles.linksHover}
            href={link}
          >
            Link
          </a>
        </p>
      </div>
    </div>
  );
};
export default ProjectCard;
