import React from "react";
import { useMediaQuery } from "react-responsive";

import styles from "./TimelineCard.module.css";

const TimeLineCard = ({
  logo,
  title,
  subtitle,
  description,
  position,
  date,
}) => {
  const isMobileSize = useMediaQuery({ query: "(max-width:480px)" });
  if (isMobileSize) position = "left";
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
      />
      <div className={`${styles.timeline_card} `}>
        <h2>{title}</h2>
        <small>
          {subtitle} | <i>{date}</i>
        </small>
        <div className={styles.description}>
          <hr />
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default TimeLineCard;
