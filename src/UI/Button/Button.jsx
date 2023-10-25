import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={styles.contact_button}>
      {props.children}
    </button>
  );
};
export default Button;
