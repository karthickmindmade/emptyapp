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
  const [value, setValue] = useState([]);
  const [getstore,setgetstore]=useState([])
  const quotes = [
    {text: 'Whatever the mind of man can conceive and believe, it can achieve.',
    author: 'Napoleon Hill'},
    {text: 'Strive not to be a success, but rather to be of value.',
    author: 'Albert Einstein'},
    {text: 'I attribute my success to this: I never gave or took any excuse.',
    author: 'Florence Nightingale'},
    {text: 'You miss 100% of the shots you don’t take.',
    author: 'Wayne Gretzky'}
  ];
  const quotes2 = [
    {text: 'fuck u da badu',
    author: 'karthick raja'}
  ];
 const [newvalue,setnewvalue]=useState([])

 function store(){
  window.localStorage.setItem('store', JSON.stringify( [...quotes, {text: 'karthick is good boy',
    author: 'karthick raja'}]));
}

  useState(()=>{
  
    setgetstore(window.localStorage.getItem('store'))
    setnewvalue()
  },[getstore])
console.log(getstore)
  
console.log(newvalue)
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
                <button onClick={store}>store</button>
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
