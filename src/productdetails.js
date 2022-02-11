import React, { useEffect, useState, useContext } from "react";
import ReactStars from "react-rating-stars-component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./css/style.css";
import { useLocation } from "react-router-dom"
import Numbercounter from "./counter";
import { Button } from "bootstrap";
import { CounterContext } from './contex/productprovider'
function Productdetails(props) {
  const { handleUpdate, store2, handleDelete ,value} = useContext(CounterContext);
  const { state } = useLocation()
  const [count, setCount] = useState(1);
  const[productcount,setproductcount]=useState()
  
  useEffect(()=>{
    
    setproductcount(([...value].filter((val)=> {if(val===state.productid){ return val }})).length)
},[state.productid,value])
  return (
    <div>
      <div className="margin product-details">
        <div className="product-details-body">
          <div className="left-body">
            <div className="left-img">
              <img src={state.productImage} alt="avatar" />
            </div>
          </div>
          <div className="right-body">
            <div className="right-content">
              <div className="productTitle">
                {state.productTitle}
              </div>
              <div className="productRate">
                <ReactStars
                  count={5}
                  value={state.productRate}
                  size={30}
                  activeColor="rgb(13 110 253)"
                />
              </div>
              <div className="cart">                    
                <div className="counter-body">
                  <button className="cart-btn" title={"-"} onClick={() => handleDelete(state.productid)} >-</button>
                  <h1>{productcount}</h1>
                  <button className="cart-btn" title={"+"} onClick={() => store2(state.productid)}>+</button>
                </div>
              </div>
              <div className="productPrice">
                ${state.productPrice}
              </div>
              <div className="productDescription">
                <span>Description:</span><br />
                {state.productDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Productdetails;
