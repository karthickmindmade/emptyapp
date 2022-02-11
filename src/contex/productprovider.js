import { createContext, useState, useEffect } from "react";
import Axios from 'axios'
export const CounterContext = createContext();

export default function CounterContextProvider(props) {
    const [value, setValue] = useState([]);
    var [productsList, setProductsList] = useState([]);
  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products").then(res => {
      setProductsList(res.data);    
    })
},[productsList,setProductsList])
    const [filtervalue, setfiltervalue] = useState('')
    //fuction to add product into cart
    //remove product from cart  
    function handleUpdate(productid, productPrice,count){
        console.log(productid)
    }
    function store2(productid) {
        console.log(productid)
        setValue([...value,productid])
    }
    function handleDelete(productid){ 
}
    const handleRemove =(id)=>{
        setValue([...value].filter((val)=> {if(val!==id){ return val }}))
    };
    function store(productsList){    
        for(let s=0; s<=20; s++){
            if(productsList.id!==value[1]){
                setValue([...value,productsList.id])
            }   
        } 
    }
    return (
        <CounterContext.Provider value={{ store,store2, value, handleRemove, handleUpdate,productsList,handleDelete}}>
            {props.children}
        </CounterContext.Provider>
    )
}
