import React from "react";
import classes from "./BuildControl.module.css";
export default function BuildControl(props) {
  return (
    <div>
      <div className={classes.BuildControl}> {props.label} </div>
      <button className={classes.Less} onClick={props.remove}>
        Less
      </button>
      <button className={classes.More} onClick={props.add}>
        More
      </button>
    </div>
  );
}
