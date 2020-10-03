import React from "react";
//import Menu from "../Menu/Menu";
import Logo from "../logo/logo";
import classes from "./SideBar.module.css";
import { NavLink } from "react-router-dom";

export default function SideBar(props) {
  const mystyle = {
    color: "red",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <div className={classes.SideBar}>
      <Logo height="80%" hover={props.onSetSidebarOpen} />
      <nav style={mystyle}>
        <NavLink to="/">BURGER</NavLink>
        <NavLink to="/sides">SIDES</NavLink>
        <NavLink to="/drinks">DRINKS</NavLink>
      </nav>
    </div>
  );
}
