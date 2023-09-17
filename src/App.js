import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef, useState } from "react";

import Overlay from "./UI/Overlay/Overlay";
import Education from "./components/education/Education";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Project from "./components/project/Project";

function App() {
  const parllaxRef = useRef();
  const [overlayState, setOverlayState] = useState(false);
  const overlayCloseHandler = () => {
    setOverlayState((state) => {
      return !state;
    });
  };
  const parallaxScrollHandler = (tab) => {
    parllaxRef.current.scrollTo(tab);
  };
  return (
    <React.Fragment>
      <Overlay overlayState={overlayState} onClose={overlayCloseHandler} />
      <Nav onClose={overlayCloseHandler} onTabClick={parallaxScrollHandler} />
      <Parallax pages={3} ref={parllaxRef}>
        <ParallaxLayer offset={0} speed={-0.2}>
          <Profile />
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={2} speed={0.2}>
          <Education />
        </ParallaxLayer>
        
      </Parallax>
    </React.Fragment>
  );
}

export default App;
