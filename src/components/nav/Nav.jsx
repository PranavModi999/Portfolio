import React from "react";
import NauticalWheel from "./ship-wheel.png";

import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <div>
        <img src={NauticalWheel} alt="Nav Nautical wheel" />
      </div>
    </nav>
  );
};
export default Nav;
