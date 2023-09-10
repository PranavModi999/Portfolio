import React from "react";
import Button from "../../UI/Button/Button";

import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <div></div>
      <ul className={styles.items_container}>
        <li className={styles.items}>PROFILE</li>
        <li className={styles.items}>EXPERIENCE</li>
        <li className={styles.items}>PROJECTS</li>
      </ul>
      <div className={styles.contact_container}>
        <Button>CONTACT</Button>
      </div>
    </nav>
  );
};
export default Nav;
