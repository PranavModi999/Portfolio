import React from "react";
import closeIcon from "./close_icon.svg";

import styles from "./Overlay.module.css";

const Overlay = (props) => {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      {props.isCloseVisible && (
        <img
          src={closeIcon}
          className={styles.close_icon}
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          alt=""
        />
      )}
      <ul className={styles.items__container}>
        <li
          onClick={() => {
            console.log("item clicked");
          }}
        >
          PROFILE
        </li>
        <li>EDUCATION</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
};

export default Overlay;
