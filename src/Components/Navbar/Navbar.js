import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useSelector } from "react-redux";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const name = useSelector((state) => state.user.name);
  return (
    <nav className={classes.navbar}>
      <div className={classes.left}>
        <div className={classes.logo}>DADMIN.</div>
        <ul className={classes.navLinks}>
          <li className={classes.link}>Home</li>
          <li className={classes.link}>Dashboard</li>
          <li className={classes.link}>Projects</li>
          <li className={classes.link}>Tasks</li>
          <li className={classes.link}>Reporting</li>
          <li className={classes.link}>Users</li>
        </ul>
      </div>
      <div className={classes.right}>
        <AiOutlineSetting className={classes.icon} />
        <MdOutlineNotificationsActive className={classes.icon} />
        <div className={classes.user}>
          <div className={classes.profile_img}>
            <img src="images/profpix.png" alt="" />
          </div>
          <p>{name}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
