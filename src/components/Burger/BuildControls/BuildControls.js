import React from "react";
import classes from "./BuildContols.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}$</strong>
    </p>

    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        add={() => props.added(ctrl.type)}
        remove={() => props.removed(ctrl.type)}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.orderable}
      onClick={props.showSummary}
    >
      ORDER NOW
    </button>
  </div>
);
export default BuildControls;
