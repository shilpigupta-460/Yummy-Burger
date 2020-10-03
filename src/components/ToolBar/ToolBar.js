import React from "react";
import classes from "./ToolBar.module.css";
import Logo from "../logo/logo";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";
const toolBar = (props) => (
  <header className={classes.ToolBar}>
    <Logo />

    <Menu />

    <Cart />
  </header>
);
export default toolBar;
