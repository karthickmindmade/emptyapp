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
    const handleRemove =(id)=>{
        const newPeople = value.filter((person) => person.id !== id);
        setValue(newPeople);
    };
    function handleUpdate(productid, productPrice,count){
        console.log(productid)
    }
    function store(productsList) {
        setValue([...value,productsList.id])
    }
    return (
        <CounterContext.Provider value={{ store, value, handleRemove, handleUpdate,productsList}}>
            {props.children}
        </CounterContext.Provider>
    )
}
