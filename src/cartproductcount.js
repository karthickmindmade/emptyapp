import React ,{useContext, useEffect, useState} from "react"
import { CounterContext } from './contex/productprovider'
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
function Cartproductcount(props) {
    const { value, handleRemove,productsList } = useContext(CounterContext);
const {product}=props
const[productcount,setproductcount]=useState([])

useEffect(()=>{
    
    setproductcount(([...value].filter((val)=> {if(val===product.id){ return val }})).length)
},[product.id,value])
    return (
     

<Badge badgeContent={productcount} color="secondary">
                  <div className='colorlist flex' key={product.id}>           
                      <div ><img src={product.image} alt="avatar" width={40} height={50} /></div>
                      <div>
                        <div className="cartproduct-title">{product.title}</div>
                        <div>${product.price*productcount}</div>
                      </div>
                      <Button className="remove-button float-end" onClick={() => handleRemove(product.id)}><DeleteIcon /></Button>         
                  </div>
                </Badge>
     
    
    );
}

export default Cartproductcount;