import React from "react";
import { useSelector } from "react-redux";
import links from "../../menu.json";
import classes from "./SideMenu.module.css";

const SideMenu = () => {
  const name = useSelector((state) => state.user.name);
  return (
    <ul className={classes.sideMenu}>
      {links.map((link) => (
        <li
          className={`${classes.menuLinks} ${link.active && classes.active}`}
          key={link.id}
        >
          {link.title}
        </li>
      ))}
      <li className={classes.menuLinks}>Logout ({name})</li>
    </ul>
  );
};

export default SideMenu;
