import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Overlay from "./UI/Overlay/Overlay";
import Home from "./components/Home/Home";
import Nav from "./components/nav/Nav";

function App() {
  const [overlayState, setOverlayState] = useState(false);

  const footerRef = React.createRef();

  const overlayCloseHandler = () => {
    setOverlayState((state) => {
      return !state;
    });
  };
  const profileRef = React.createRef();
  const experienceRef = React.createRef();
  const projectRef = React.createRef();

  const scrollClickHandler = (type) => {
    console.log("scroll clicked type:", type);
    switch (type) {
      case "PROFILE":
        profileRef.current.scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "EXPERIENCE":
        // experienceRef.current.scrollIntoView({ behavior: "smooth" });
        const pos = experienceRef.current.getBoundingClientRect();

        window.scrollTo({
          top: pos,
        });
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
      <Overlay
        overlayState={overlayState}
        onScrollClick={scrollClickHandler}
        onClose={overlayCloseHandler}
      />
      <Nav onClose={overlayCloseHandler} onScrollClick={scrollClickHandler} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                profileRef={profileRef}
                experienceRef={experienceRef}
                projectRef={projectRef}
                footerRef={footerRef}
                onScrollClick={scrollClickHandler}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
