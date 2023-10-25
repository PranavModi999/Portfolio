import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Nav = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width:468px)" });

  return (
    <React.Fragment>
      {!isMobile && <DesktopNav onScrollClick={props.onScrollClick} />}
      {isMobile && <MobileNav onClose={props.onClose} />}
    </React.Fragment>
  );
};
export default Nav;
