import React, { Fragment, Component } from "react";
import Button from "../../UI/Button/Btn";

class OrderSummary extends Component {
  constructor(props) {
    super(props);
    this.state = { props };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("in static getDerivedStateFromProps ", props);
    return state;
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey} style={{ listStyle: "none" }}>
            {" "}
            <span style={{ transform: "capitalize" }}>{igKey}</span> :
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Fragment>
        <h3> Your order summary </h3>
        <ul> {ingredientSummary}</ul>

        <p>
          {" "}
          <strong>Total : {this.props.price}$ </strong>
        </p>

        <Button clicked={this.props.checked}> CHECKOUT</Button>
        <Button clicked={this.props.editBtn}> Edit</Button>
      </Fragment>
    );
  }
}

export default OrderSummary;
