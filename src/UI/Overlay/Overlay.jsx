import React from "react";
import closeIcon from "./close_icon.svg";

import styles from "./Overlay.module.css";

const Overlay = (props) => {
  const OverlayHandler = () => {};

  return (
    <div className={styles.overlay}>
      <img src={closeIcon} className={styles.close_icon} alt="" />
      {props.children}
    </div>
  );
};
export default Overlay;
