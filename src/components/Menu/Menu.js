import React from "react";
import classes from "./Menu.module.css";
//import BurgerBuilder from "../../Container/BurgerBuilder/BurgerBuilder";
// import Sides from "../Sides/Sides";
// import Drinks from "../Drinks/Drinks";
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
function Menu() {
  return (
    <div>
      <nav className={classes.menu}>
        <NavLink to="/">BURGER</NavLink>
        <NavLink to="/sides">SIDES</NavLink>
        <NavLink to="/drinks">DRINKS</NavLink>
        <NavLink to="/orders">
          {" "}
          <Cart />
        </NavLink>
        {/* <ul className={classes.menu}>
          <li>
            {" "}
            <a href="/">BURGER</a>
          </li>
          <li>
            {" "}
            <a href="/">SIDES</a>
          </li>
          <li>
            {" "}
            <a href="/">DRINKS</a>
          </li>
        </ul> */}
      </nav>
      {/* <NavLink to="/" exact component={BurgerBuilder}>
        {" "}
        BURGER
      </NavLink>
      <NavLink to="/sides" component={Sides}>
        {" "}
        SIDES
      </NavLink>
      <NavLink to="/drinks" component={Drinks}>
        DRINKS
      </NavLink> */}
    </div>
  );
}

export default Menu;
