import React,{useContext} from "react";
import "./css/style.css";

export default function Numbercounter (props) {
  const{decrementCount,count,incrementCount,onClick}=props
    return (
      <div className="counter-body" onClick={onClick}>
            <button className="cart-btn" title={"-"} onClick={decrementCount}>-</button>
            <h1>{count}</h1>
            <button  className="cart-btn" title={"+"} onClick={incrementCount}>+</button>
      </div>
    );
}

