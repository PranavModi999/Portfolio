import React from "react";
import hamburgerIcon from "./hamburger_icon.svg";

import styles from "./Nav.module.css";

const MobileNav = (props) => {
  return (
    <nav>
      <img
        src={hamburgerIcon}
        onClick={props.onClose}
        className={styles.hamburger_icon}
        alt=""
      />
    </nav>
  );
};
export default MobileNav;
