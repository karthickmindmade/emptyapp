import React,{useState,useEffect} from "react";
 import Axios from 'axios' 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProductLayout from "./components/productLayout";
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown ,faCaretRight } from '@fortawesome/free-solid-svg-icons'
function Products() {
    const [show, setShow] = React.useState(false);
    const [show2, setShow2] = React.useState(false);
    const navigate = useNavigate();
    var[search,setSearch] = useState('');
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
    
    const handleClick = () => {
        setShow(!show);
      };
      const handleClick2 = () => {
        setShow2(!show2);
      };
    
    return (
        <div className="margin ">
            <div class="d-flex align-items-start ">
  <div class="nav flex-column nav-pills me-3 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <div className="left-siedebar">
 <div class="product-tab " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
        <button  class="category-btn btn-none" data-bs-toggle="collapse" href="#collapseExample" onClick={handleClick}  aria-expanded="false" aria-controls="collapseExample">
         Category{show ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretRight} />}
         </button>
           <div class="collapse " id="collapseExample">
           <div class="sub-category ">
             <select className="product-catg" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} multiple>
                <option value="">All</option>
                <option value="men's clothing">men's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
                <option value="women's clothing">women's clothing</option>
            </select>
         </div>
        </div>
        <button  class="category-btn btn-none" data-bs-toggle="collapse" href="#collapseExample2" onClick={handleClick2}  aria-expanded="false" aria-controls="collapseExample2">
         Rating{show2 ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretRight} />}
         </button>
           <div class="collapse" id="collapseExample2">
           <div class="sub-category">
             <select className="product-catg" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} multiple>
                <option type="checkbox" value="">All</option>
                <option type="checkbox" value="4.">between 4.0 to 4.9</option>
                <option type="checkbox" value="3.">between 3.0 to 3.9</option>
                <option type="checkbox" value="2.">between 2.0 to 2.9</option>
                <option type="checkbox" value="1.">between 1.0 to 1.9</option>
             </select>
         </div>
     </div>
   </div>
</div>
  </div>
  <div class="tab-content" id="v-pills-tabContent">
     <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
       <div>
          <div className="products-body row">
              {productsList.filter ( val =>{
                           if(search === ""){
                               return val;
                           }else if(
                               val.category.toLowerCase().includes(search.toLowerCase())||
                               val.rating.rate.toString().includes(search.toString())
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
         </div>
     </div>
  </div> 
</div>
    );
}

export default Products;
