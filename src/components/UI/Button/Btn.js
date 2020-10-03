import React from "react";
import classes from "./Button.module.css";

const Btn = (props) => (
  <button className={classes.success} onClick={props.clicked}>
    {props.children}
  </button>
);

export default Btn;
