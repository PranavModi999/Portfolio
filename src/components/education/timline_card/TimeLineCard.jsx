import React from "react";

import styles from "./TimelineCard.module.css";

const TimeLineCard = ({ logo, title, subtitle, description, position }) => {
  return (
    <div
      className={`${styles.card_container} ${
        position === "left" ? styles.container_left : styles.container_right
      } `}
    >
      <img
        className={
          position === "left"
            ? styles.timeline_logo_left
            : styles.timeline_logo_right
        }
        src={logo}
        alt=""
        srcset=""
      />
      <div className={`${styles.timeline_card} `}>
        <h2>{title}</h2>
        <small>{subtitle}</small>
        <hr />
        <p>{description}</p>
      </div>
    </div>
  );
};
export default TimeLineCard;
