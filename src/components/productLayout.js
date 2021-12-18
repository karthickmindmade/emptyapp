import React,{useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ProductLayout(props) {
    
    var[items,setItem] = useState([]);

    return (
        <div key={items} className="col productCard">
            <div className="product-img">
              {props.productimg}
            </div>
            <div className="product-title">
             {props.producttitle}
            </div>
            <div className="product-price">
            {props.productprice}
            </div>
            <div className="product-description">
            {props.productdescription}
            </div>
       </div>
    );
}

export default ProductLayout;