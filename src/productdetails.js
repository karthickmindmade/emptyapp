import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./css/style.css";
import { useLocation } from "react-router-dom"
import Numbercounter from "./counter";
import Navbar from "./components/navbar";



function Productdetails() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count < 1) {
      setCount(
        0
      );
    } else {
      setCount(count - 1);
    }
  }
  const { state } = useLocation()
  return (
    <div>
      <Navbar counter={count} />
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
                <Numbercounter lessbutton={decrementCount} plusbutton={incrementCount} counter={count} />
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
