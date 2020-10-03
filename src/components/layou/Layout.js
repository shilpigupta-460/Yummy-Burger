import React, { Fragment } from "react";
import Sides from "../Sides/Sides";
import Drinks from "../Drinks/Drinks";
import BurgerBuilder from "../../Container/BurgerBuilder/BurgerBuilder";
// import classes from "./Layout.module.css";
import CheckOut from "../../Container/CheckOut/CheckOut";
import { Route, Switch } from "react-router-dom";
import Order from "../../Container/Orders/orders";

const layout = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkOut" component={CheckOut} />
        {/* <main className={classes.content}>{props.children}</main> */}
        <Route path="/sides" component={Sides} />
        <Route path="/drinks" component={Drinks} />
        <Route path="order" component={Order} />
      </Switch>
    </Fragment>
  );
};
export default layout;
