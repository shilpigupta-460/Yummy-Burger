import React from "react";
import classes from "./input.module.css";
export default function input(props) {
  let inputElement = null;
  switch (props.intype) {
    case "input":
      inputElement = <input className={classes.inputElement} {...props} />;
      break;
    case "textarea":
      inputElement = <textarea className={classes.inputElement} {...props} />;
      break;
    default:
      inputElement = <input className={classes.inputElement} {...props} />;
  }

  return (
    <div className={classes.inputinput}>
      <label className={classes.label}>{props.label}</label>

      {inputElement}
    </div>
  );
}
