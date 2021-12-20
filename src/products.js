import React,{useState,useEffect} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProductLayout from "./components/productLayout";

function Products() {
    var[search] = useState('');
  var[selectedValue] = useState('');
  console.log(selectedValue)
    var[items,setItem] = useState([]);

    useEffect(() =>{
     
        fetch (`https://reqres.in/api/users`)
            .then(res => res.json())
            .then(res => setItem(res.data))
     },[]);

    return (
        <div className="mt-5">
            <div className="products-body row">
    {items.filter(val=>() =>{
                           if(search === ""){
                               return val;
                           }else if(
                           
                               val.first_name.toLowerCase().includes(search.toLowerCase()) 
                              
                              
                                         
                           ){
                               return val;
                           }
                       }).map((items)=>

<ProductLayout
  productimg={<img src={items.avatar}  alt="avatar"/>}
  producttitle={items.first_name}
  productprice={items.last_name}
  productdescription={items.email}

/>

)}
</div>
    </div>
    );
}

export default Products;