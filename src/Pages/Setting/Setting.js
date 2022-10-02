import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Profile from "../../Components/Profile/Profile";
import SideMenu from "../../Components/SideMenu/SideMenu";
import classes from "./Setting.module.css";

const Setting = () => {
  return (
    <div>
      <Navbar />
      <h1 className={classes.title}>Settings</h1>
      <div className={classes.wrapper}>
        <SideMenu />
        <Profile />
      </div>
    </div>
  );
};

export default Setting;
