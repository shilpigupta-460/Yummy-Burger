import React, { Component, Fragment } from "react";
import axios from "../../axios";
import Burger from "../../components/Burger/Burger";
//import burger from "../../components/Burger/BurgerIngredient/BurgerIngredient";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/LoadSpinner/LoadSpinner";
import queryString from "query-string";

const INGREDIENT_PRICE = {
  meat: 1.3,
  cheese: 1.0,
  bacon: 0.7,
  salad: 0.7,
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 2,
    orderable: false,
    purchase: false,
    showSummary: false,
    loadSpinner: false,
  };
  componentDidMount() {
    console.log(this.props);
    console.log("in componentDidMount");
    axios
      .get("https://react-yummyburger.firebaseio.com/ingredients.json")
      .then((respose) => {
        this.setState({
          ingredients: respose.data,
        });
      });
    console.log("in componentDidMount", this.state.ingredients);
  }

  orderHandler(Price) {
    this.setState({
      orderable: Price > 2,
    });
  }

  addIngredientHandler = (type) => {
    const addCount = this.state.ingredients[type] + 1;

    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = addCount;
    const updatePrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    this.setState({
      ingredients: updateIngredients,
      totalPrice: updatePrice,
    });
    this.orderHandler(updatePrice);
  };

  removeIngredientHandler = (type) => {
    const initalCount = this.state.ingredients[type];
    if (initalCount <= 0) {
      return;
    }
    const removeCount = initalCount - 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = removeCount;
    const updatePrice = this.state.totalPrice - INGREDIENT_PRICE[type];
    this.setState({
      ingredients: updateIngredients,
      totalPrice: updatePrice,
    });
    this.orderHandler(updatePrice);
  };

  checkOutHandler = () => {
    /**** Firebase storage */
    // this.setState({
    //   loadSpinner: true,
    // });
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   custmor: {
    //     name: SVGMarkerElement,
    //     address: {
    //       street: "xyz",
    //       ZipCode: 201301,
    //       city: "kop",
    //       state: "pa",
    //     },
    //     email: " test@xyz.com",
    //   },
    //   deliveryMethod: "pickup",
    // };

    // axios
    //   .post("/order.json", order)
    //   .then((respose) =>
    //     this.setState({
    //       loadSpinner: false,
    //     })
    //   )
    //   .catch((error) =>
    //     this.setState({
    //       loadSpinner: false,
    //     })
    //   );
    // alert(" oreder submited");
    //  ***one method***
    // const queryParams = [];
    // for (let i in this.state.ingredients) {
    //   queryParams.push(
    //     encodeURIComponent(i) +
    //       "=" +
    //       encodeURIComponent(this.state.ingredients[i])
    //   );
    // const queryString = queryParams.join("&");
    // this.props.history.push({
    //   pathname: "/checkout",
    //   search: "?" + queryString,
    // });

    //2nd method using 3rd party query-string
    const queryParams = queryString.stringify(this.state.ingredients);
    //queryParams.push(queryString.stringify(this.state.totalPrice));
    //console.log("hello", queryParams1);
    //const pp = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryParams,
    });
    // const queryParams1 = queryString.stringify(this.state.totalPrice);
    // //queryParams.push(queryString.stringify(this.state.totalPrice));
    // //this.props.history.push("price=" + queryParams1);
    // this.props.history.push({
    //   pathname: this.props.match.path,
    //   search: "price=" + queryParams1,
    // });
  };

  editHandler = () => {
    this.setState({
      showSummary: false,
    });
    // this.props.history.goBack();
  };
  showSummary = () => {
    this.setState({
      showSummary: true,
    });
  };

  render() {
    let burger = <Spinner />;
    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        price={this.state.totalPrice}
        checked={this.checkOutHandler}
        editBtn={this.editHandler}
      />
    );

    if (this.state.ingredients) {
      burger = (
        <Fragment>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            added={this.addIngredientHandler}
            removed={this.removeIngredientHandler}
            price={this.state.totalPrice}
            orderable={this.state.orderable}
            showSummary={this.showSummary}
          />
        </Fragment>
      );
    }
    if (this.state.loadSpinner) {
      orderSummary = <Spinner />;
    }
    return (
      <Fragment>
        {this.state.showSummary && (
          <Modal show={this.state.showSummary}>{orderSummary}</Modal>
        )}
        {burger}
      </Fragment>
    );
  }
}
