import React,{useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactStars from "react-rating-stars-component";

function ProductLayout(props) {
    
    var[items] = useState([]);

    return (
        <div key={items}   className="col productCard">
           <div className="product-price">
            ${props.productprice}
            </div>
            <div className="start-rating">
            <ReactStars
                        count={5}
                        value={props.productrating}
                        size={20}
                        activeColor="rgb(13 110 253)"
                        
              />
              <div className="start-rating">{props.productrating}</div>
            </div>
            <div className="product-img">
              {props.productimg}
            </div>
            <div className="product-title" href="./productdetails" onClick={props.clickfunction}>
             {props.producttitle}
            </div>
            <button onClick={props.onClick}>Add to cart</button>
            <div className="product-description">
            {props.productdescription}
            
            </div>
            <div className="categery">
            {props.productCategory}
            </div>
       </div>
    );
}

export default ProductLayout;