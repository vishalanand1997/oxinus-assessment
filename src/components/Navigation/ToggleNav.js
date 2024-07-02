import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import NavigationStyle from "./Navigation.module.css";
import { useLocation } from "react-router-dom";
const ToggleNav = (props) => {
  const location = useLocation();
  const [isShowNav, setIsShowNav] = useState(false);
  const showHideNavHandler = () => setIsShowNav(!isShowNav);
  useEffect(() => setIsShowNav(false), [location]);
  return (
    <>
      {isShowNav ? (
        <>
          <div className={NavigationStyle.toggleCrossBtnContainer}>
            <RxCross1
              onClick={showHideNavHandler}
              className={NavigationStyle.icon}
            />
          </div>
          {props?.children}
        </>
      ) : (
        <div className={NavigationStyle.toggleBtnContainer}>
          <FaBars
            onClick={showHideNavHandler}
            className={NavigationStyle.icon}
          />
        </div>
      )}
    </>
  );
};

export default ToggleNav;
