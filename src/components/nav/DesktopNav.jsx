import React from "react";
import Button from "../../UI/Button/Button";

import styles from "./Nav.module.css";

const DesktopNav = (props) => {
  return (
    <nav>
      <div></div>
      <ul className={styles.items_container}>
        <li className={""}>PROFILE</li>
        <li className={""}>EXPERIENCE</li>
        <li className={""}>PROJECTS</li>
      </ul>
      <div className={styles.contact_container}>
        <Button>CONTACT</Button>
      </div>
    </nav>
  );
};
export default DesktopNav;
