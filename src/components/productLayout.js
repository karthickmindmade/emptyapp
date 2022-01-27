import React,{useState} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactStars from "react-rating-stars-component";
import FlashOnIcon from '@mui/icons-material/FlashOn';
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
            <div className="product-img"   onClick={props.clickfunction}>
              {props.productimg}
            </div>
            <div className="product-title">
             {props.producttitle}
            </div>
            <div className="flex">
            <button className="cart-button" onClick={props.onClick}><ShoppingCartIcon />Add to cart</button>
            <button className="cart-button"   onClick={props.clickfunction}><FlashOnIcon />Buy Now</button>
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