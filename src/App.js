import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useMediaQuery } from "react-responsive";
import Overlay from "./UI/Overlay/Overlay";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";

function App() {
  const [overlayState, setOverlayState] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width:468px)" });

  const overlayCloseHandler = () => {
    setOverlayState((state) => {
      return !state;
    });
  };
  return (
    <div className="App">
      {isMobile &&
        overlayState &&
        ReactDOM.createPortal(
          <Overlay
            isCloseVisible={isMobile}
            onClose={overlayCloseHandler}
          ></Overlay>,
          document.getElementById("overlay")
        )}
      <Nav onClose={overlayCloseHandler} />
      <Profile />
    </div>
  );
}

export default App;
