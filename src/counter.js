import React,{useContext} from "react";
import "./css/style.css";
import { CounterContext } from './contex/productprovider'
export default function Numbercounter (props) {
  const { incrementCount,decrementCount,count } = useContext(CounterContext);
    return (
      <div className="counter-body" onClick={props.onClick}>
            <button className="cart-btn" title={"-"} onClick={decrementCount}>-</button>
            <h1>{count}</h1>
            <button  className="cart-btn" title={"+"} onClick={incrementCount}>+</button>
      </div>
    );
}

