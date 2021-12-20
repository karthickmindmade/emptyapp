import React from "react";
import ReactStars from "react-rating-stars-component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./css/style.css";
import { useLocation } from "react-router-dom"

function Productdetails() {
 
   const {state}=useLocation()
    return (
      <div className="margin product-details">
      <div className="product-details-body">
           <div className="left-body">
               <div className="left-img">
              <img src={state.productImage} />
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
               <div className="productPrice">
                   ${state.productPrice}
                   
               </div>
               <div className="productDescription">
                   <span>Description:</span><br/>
                   {state.productDescription}
               </div>
               </div>
           </div>
       </div>
      </div>
    );
  }
  export default Productdetails;