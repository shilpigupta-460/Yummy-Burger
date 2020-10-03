import React from "react";
import Burger from "./../Burger/Burger";
import Button from "../UI/Button/Btn";
import classes from "./CheckOutSummary.module.css";

const CheckOutSummary = (props) => {
  return (
    <div className={classes.CheckOutSummary}>
      <h1> Enjoy Your Burger</h1>
      <div style={{ weight: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>

      <Button className={classes.danger} clicked={props.checkoutcancel}>
        CANCEL
      </Button>
      <Button className={classes.success} clicked={props.checkoutcontinue}>
        CONTINUE
      </Button>
    </div>
  );
};
export default CheckOutSummary;
