import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useState } from "react";

import Overlay from "./UI/Overlay/Overlay";
import Education from "./components/education/Education";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";

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
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={-0.2}>
          <Profile />
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={1} speed={0.2}>
          <Education />
        </ParallaxLayer>
      </Parallax>
    </React.Fragment>
  );
}

export default App;
