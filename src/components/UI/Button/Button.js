import React from "react";
import "./Button.css";

const Button = (props) => {
  // {type: 'submit', children: 'Add Goal'} <= button

  return (
    <button
      type={props.type}
      className={` button ${!props.isValid ? "invalid" : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
