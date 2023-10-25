import React, { useState } from "react";

import Overlay from "./UI/Overlay/Overlay";
import Education from "./components/education/Education";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";

import styles from "./App.module.css";
import PortfolioFooter from "./components/footer/PortfolioFooter";
import Project from "./components/project/Project";

function App() {
  const [overlayState, setOverlayState] = useState(false);

  const profileRef = React.createRef();
  const experienceRef = React.createRef();
  const projectRef = React.createRef();
  const footerRef = React.createRef();

  const overlayCloseHandler = () => {
    setOverlayState((state) => {
      return !state;
    });
  };

  const scrollClickHandler = (type) => {
    console.log("scroll clicked type:", type);
    switch (type) {
      case "PROFILE":
        profileRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "EXPERIENCE":
        experienceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "PROJECTS":
        projectRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "CONTACT":
        footerRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      default:
        break;
    }
  };
  return (
    <React.Fragment>
      <Overlay overlayState={overlayState} onClose={overlayCloseHandler} />
      <Nav onClose={overlayCloseHandler} onScrollClick={scrollClickHandler} />
      <div className={styles.parallax_wrapper}>
        <div className={styles.profile_container}>
          <Profile ref={profileRef} />
        </div>
        <div className={styles.education_container}>
          <Education ref={experienceRef} />
        </div>
        <Project ref={projectRef} />
        <PortfolioFooter onScrollClick={scrollClickHandler} ref={footerRef} />
      </div>
    </React.Fragment>
  );
}

export default App;
