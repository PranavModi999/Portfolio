import React from "react";
import Button from "../../UI/Button/Button";

import styles from "./Nav.module.css";

const DesktopNav = (props) => {
  return (
    <nav>
      <div></div>
      <ul className={styles.items_container}>
        <li className={""} onClick={() => props.onTabClick(0)}>
          PROFILE
        </li>
        <li className={""} onClick={() => props.onTabClick(1)}>
          EXPERIENCE
        </li>
        <li className={""} onClick={() => props.onTabClick(2)}>
          PROJECTS
        </li>
      </ul>
      <div className={styles.contact_container}>
        <Button>CONTACT</Button>
      </div>
    </nav>
  );
};
export default DesktopNav;
