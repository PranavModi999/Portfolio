import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

import styles from "./ProgressBar.module.css";

const ProgressBar = ({ title, progress }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  return (
    <div>
      <h3 className={styles.progress_title}>{title}</h3>
      <div className={styles.progress_bar}>
        <motion.div
          ref={ref}
          variants={{
            hidden: { width: "0%" },
            visible: { width: progress },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 2, delay: 0.5 }}
          className={styles.progress_fill}
        ></motion.div>
      </div>
    </div>
  );
};
export default ProgressBar;
