import React,{useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactStars from "react-rating-stars-component";

function ProductLayout(props) {
    
    var[items] = useState([]);

    return (
        <div key={items} href="./productdetails" onClick={props.clickfunction} className="col productCard">
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
            </div>
            <div className="product-img">
              {props.productimg}
            </div>
            <div className="product-title">
             {props.producttitle}
            </div>
           
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