import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./css/style.css";
import { useLocation } from "react-router-dom"
import Numbercounter from "./counter";


function Productdetails(props) {
  const [count, setCount] = useState(JSON.parse(window.localStorage.getItem('count')));
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
  useEffect(() => {
    window.localStorage.setItem('count', count);
    props.callcount(count)
  }, [count]);
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
