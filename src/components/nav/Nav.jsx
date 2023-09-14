import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Nav = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width:468px)" });
  const tabClickHandler = (tab) => {
    props.onTabClick(tab);
  };
  return (
    <React.Fragment>
      {!isMobile && <DesktopNav onTabClick={tabClickHandler} />}
      {isMobile && (
        <MobileNav onClose={props.onClose} onTabClick={tabClickHandler} />
      )}
    </React.Fragment>
  );
};
export default Nav;
