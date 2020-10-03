import React, { Component } from "react";
import classes from "./Modal.module.css";

export default class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log(" in  shouldComponentUpdat");
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  // UNSAFE_componentWillUpdat() {
  //   console.log("it doing render in modal");
  // }
  render() {
    return (
      <div>
        <div className={classes.Modal}>{this.props.children}</div>
      </div>
    );
  }
}
