import React from "react";
import cartLogo from "../../asserts/images/cart-50.png";
import classes from "./Cart.module.css";
export default function Cart() {
  return (
    <div className={classes.cart}>
      <img src={cartLogo} alt="logo" />
    </div>
  );
}
