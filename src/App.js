import React, { useState } from "react";
import Overlay from "./UI/Overlay/Overlay";
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
    <div className="App">
      <Overlay overlayState={overlayState} onClose={overlayCloseHandler} />
      <Nav onClose={overlayCloseHandler} />
      <Profile />
      {/* <Education /> */}
    </div>
  );
}

export default App;
