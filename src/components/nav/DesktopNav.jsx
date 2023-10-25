import React from "react";

import Button from "../../UI/Button/Button";

import styles from "./Nav.module.css";

const DesktopNav = (props) => {
  return (
    <nav>
      <div></div>
      <ul className={styles.items_container}>
        <li onClick={() => props.onScrollClick("PROFILE")}>PROFILE</li>
        <li onClick={() => props.onScrollClick("EXPERIENCE")}>EXPERIENCE</li>
        <li onClick={() => props.onScrollClick("PROJECTS")}>PROJECTS</li>
      </ul>
      <div className={styles.contact_container}>
        <Button onClick={() => props.onScrollClick("CONTACT")}>CONTACT</Button>
      </div>
    </nav>
  );
};
export default DesktopNav;
