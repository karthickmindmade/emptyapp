import React,{useState,useEffect} from "react";
 import Axios from 'axios' 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProductLayout from "./components/productLayout";
import { useNavigate } from "react-router-dom"

function Products() {
   
    const navigate = useNavigate();
    var[search] = useState('');
  var[selectedValue] = useState('');
  console.log(selectedValue)
var[productsList,setProductsList] = useState([]);
    useEffect(() =>{
        Axios.get("https://fakestoreapi.com/products").then(res=>{
            setProductsList(res.data);
            //setTotalUsers(res.data.total);
         });
     }, []); 
   const ProductClick =(productsList) =>{
    navigate ('/productdetails',{state : {
        productTitle : productsList.title,
        productPrice : productsList.price,
        productDescription : productsList.description,
        productCategory : productsList.category,
        productImage : productsList.image,
        productRate : productsList.rating.rate,
        productCount : productsList.rating.count
    }  
})

    }
    
    return (
        <div className="mt-5">
            <div className="products-body row">
    {productsList.filter(val=>() =>{
                           if(search === ""){
                               return val;
                           }else if(

                               val.category.toLowerCase().includes(search.toLowerCase())       
                           ){
                               return val;
                           }
                       }).map((productsList)=>

<ProductLayout
  productimg={<img src={productsList.image}  alt="avatar"/>}
  producttitle={productsList.title}
  productprice={productsList.price}
  productrating={productsList.rating.rate}
  productCategory={productsList.category}
  clickfunction={()=>ProductClick(productsList)}
/>

)}
</div>

    </div>
    );
}

export default Products;