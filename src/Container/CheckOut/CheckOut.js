import React, { Component } from "react";
import CheckOutSummary from "../../components/CheckOutSummary/CheckOutSummary";
import queryString from "query-string";
import ContactData from "../../Container/ContactData/ContactData";
import { Route } from "react-router-dom";
export default class CheckOut extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      bacon: 0,
      salad: 0,
    },
    totalPrice: 0,
  };

  componentDidMount() {
    // const query = new URLSearchParams(this.props.location.search, {
    //   ignoreQueryPrefix: true,
    // });
    const query = queryString.parse(this.props.location.search);

    console.log("hello", query);
    // let ingredients = {};
    // let totalPrice = 0;
    // if (query.price === "price") {
    //   totalPrice = query.price;
    // } else {
    const ingredients = {
      salad: +query.salad,
      meat: +query.meat,
      cheese: +query.cheese,
      bacon: +query.bacon,
    };
    const totalPrice = this.props.totalPrice;
    this.setState({
      ingredients: ingredients,
      totalPrice: totalPrice,
    });
  }
  // const ingredients = {};
  // // for (let p of query.entries()) {
  // //   ingredients[p[0]] = p[1];
  // // }

  // this.setState({ ingredients: ingredients });

  checkoutcontinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  checkoutcancelHandler = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <CheckOutSummary
          ingredients={this.state.ingredients}
          checkoutcancel={this.checkoutcancelHandler}
          checkoutcontinue={this.checkoutcontinueHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              totalPrice={this.props.totalPrice}
            />
          )}
        />
      </div>
    );
  }
}
