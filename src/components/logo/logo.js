import React from "react";
import burgerLogo from "../../asserts/images/logo.png";
import classes from "./logo.module.css";
const logo = (props) => (
  <div className={classes.logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="logo" />
  </div>
);

export default logo;
