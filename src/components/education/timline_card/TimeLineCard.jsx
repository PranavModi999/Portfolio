import React from "react";

import styles from "./TimelineCard.module.css";

const TimeLineCard = ({ logo, title, subtitle, description }) => {
  return (
    <div className={styles.timeline_card}>
      <img className={styles.timeline_logo} src={logo} alt="" srcset="" />
      <h2>{title}</h2>
      <small>{subtitle}</small>
      <hr />
      <p>{description}</p>
    </div>
  );
};
export default TimeLineCard;
