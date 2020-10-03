import React, { Component } from "react";
import Button from "../../components/UI/Button/Btn";
import classes from "./ContactData.module.css";
import axios from "../../axios";
import Order from "../../Container/Orders/orders";
import { Route } from "react-router-dom";
import Input from "../../components/UI/input/input";
export default class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postal: "",
    },
    contact: "",
    loadSpinner: false,
    order: null,
  };

  orderHandler = (e) => {
    e.preventDefault();
    // {
    //   <Route
    //     path={this.props.match.path + "/order"}
    //     render={() => <Order />}
    //   />;
    // }
    console.log(this.props.totalPrice);
    /**** Firebase storage */
    this.setState({
      loadSpinner: true,
    });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      custmor: {
        name: SVGMarkerElement,
        address: {
          street: "xyz",
          ZipCode: 201301,
          city: "kop",
          state: "pa",
        },
        email: " test@xyz.com",
      },
      deliveryMethod: "pickup",
    };

    axios
      .post("/order.json", order)
      .then((respose) =>
        this.setState({
          loadSpinner: false,
        })
      )
      .catch((error) =>
        this.setState({
          loadSpinner: false,
        })
      );
    this.setState({
      order: <Route path="order" component={Order} />,
    });
  };
  render() {
    return (
      <div className={classes.contact}>
        <form className={classes.form}>
          <h2> Enter Details</h2>
          <Input intype="input" type="text" name="name" placeholder="Name" />

          <Input intype="input" type="email" name="email" placeholder="Email" />
          <Input
            intype="input"
            type="text"
            name="street"
            placeholder="Street"
          />
          <Input
            intype="input"
            type="text"
            name="postal"
            placeholder="Postal"
          />
          <Input
            intype="input"
            type="text"
            name="contact"
            placeholder="Contact"
          />
          <Button className={classes.button} clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}
