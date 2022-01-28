import React from "react";
import "./css/style.css";
export default function Numbercounter (props) {
 
    return (
      <div className="counter-body" onClick={props.onClick}>
            <button className="cart-btn" title={"-"} onClick={props.lessbutton}>-</button>
            <h1>{props.counter}</h1>
            <button  className="cart-btn" title={"+"} onClick={props.plusbutton}>+</button>
      </div>
    );
}

