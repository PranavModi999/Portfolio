import React from "react";
import { useMediaQuery } from "react-responsive";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Nav = () => {
  const isMobile = useMediaQuery({ query: "(max-width:468px)" });

  return (
    <React.Fragment>
      {!isMobile && <DesktopNav />}
      {isMobile && <MobileNav />}
    </React.Fragment>
  );
};
export default Nav;
