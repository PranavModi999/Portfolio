import React from "react";
import hamburgerIcon from "./hamburger_icon.svg";

import Overlay from "../../UI/Overlay/Overlay";
import styles from "./Nav.module.css";

const MobileNav = () => {
  return (
    <nav>
      <Overlay>
        <img src={hamburgerIcon} className={styles.hamburger_icon} alt="" />
      </Overlay>
    </nav>
  );
};
export default MobileNav;
