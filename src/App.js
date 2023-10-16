import React, { useState } from "react";

import Overlay from "./UI/Overlay/Overlay";
import Education from "./components/education/Education";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";

import styles from "./App.module.css";
import Project from "./components/project/Project";
import PortfolioFooter from "./footer/PortfolioFooter";

function App() {
  const [overlayState, setOverlayState] = useState(false);
  const overlayCloseHandler = () => {
    setOverlayState((state) => {
      return !state;
    });
  };

  return (
    <React.Fragment>
      <Overlay overlayState={overlayState} onClose={overlayCloseHandler} />
      <Nav onClose={overlayCloseHandler} />
      <div className={styles.parallax_wrapper}>
        <div className={styles.profile_container}>
          <Profile />
        </div>
        <div className={styles.education_container}>
          <Education />
        </div>
        <Project />
        <PortfolioFooter />
      </div>
    </React.Fragment>
  );
}

export default App;
