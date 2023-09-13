import React from "react";
import ReactDOM from "react-dom";
import { useMediaQuery } from "react-responsive";
import styles from "./Overlay.module.css";
import closeIcon from "./close_icon.svg";

const OverlayLayout = (props) => {
  const handleClose = () => {
    props.onClose();
  };
  return (
    <div className={styles.overlay} onClick={handleClose}>
      {props.isCloseVisible && (
        <img
          src={closeIcon}
          className={styles.close_icon}
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          alt=""
        />
      )}
      <ul className={styles.items__container}>
        <li
          onClick={() => {
            console.log("item clicked");
          }}
        >
          PROFILE
        </li>
        <li>EDUCATION</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
};
const Overlay = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width:468px)" });

  return (
    <React.Fragment>
      {isMobile &&
        props.overlayState &&
        ReactDOM.createPortal(
          <OverlayLayout
            isCloseVisible={isMobile}
            onClose={props.onClose}
          ></OverlayLayout>,
          document.getElementById("overlay")
        )}
    </React.Fragment>
  );
};

export default Overlay;
