import React from "react";
import brainyBeam from "./brainyBeam.jpeg";
import conestoga from "./conestoga.jpg";
import itm from "./itm.jpg";
import shiraz from "./shiraz.jpg";
import smartNode from "./smartnode.jpg";

import styles from "./Education.module.css";

const Education = () => {
  return (
    <div className={styles.staggered_grid}>
      <div className={styles.grid_itm}>
        <img src={itm} alt="itm" />
      </div>
      <div className={styles.grid_conestoga}>
        <img src={conestoga} alt="conestoga" />
      </div>

      <div className={styles.grid_smartNode}>
        <img src={smartNode} alt="smartNode" />
      </div>
      <div className={styles.grid_shiraz}>
        <img src={shiraz} alt="shiraz" />
      </div>
      <div className={styles.grid_brainyBeam}>
        <img src={brainyBeam} alt="brainyBeam" />
      </div>
    </div>
  );
};
export default Education;
