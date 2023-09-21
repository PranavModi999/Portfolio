import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

import styles from "./ScrollMotionComponent.module.css";

const ScrollMotionComponent = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  return (
    <div ref={ref} className={styles.motion_container}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default ScrollMotionComponent;
