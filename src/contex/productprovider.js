import { createContext, useState, useEffect } from "react";
export const CounterContext = createContext();
export default function CounterContextProvider(props) {
    const [value, setValue] = useState([{"id":1,
    "imgurl":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price":109.95,
    "count": 1
}]);
    useEffect(()=>{
        if(JSON.parse(window.localStorage.getItem("storevalue"))!==null){
            setValue(JSON.parse(window.localStorage.getItem("storevalue")))
        }
     
    },[setValue])
    const [filtervalue, setfiltervalue] = useState('')
    //fuction to add product into cart
   
    //remove product from cart
    const handleRemove =(id)=>{
        const newPeople = value.filter((person) => person.id !== id);
        setValue(newPeople);
    };
    function handleUpdate(productid, productPrice,count){
        console.log(productid)
        setValue(Object.values({ ...value, [productid - 1]: { ...value[productid - 1], price: productPrice * count, count: count } }))
    }
    function store(productsList) {
      value.filter(val => val.title.includes(productsList.title)).map((tickets) => setfiltervalue(tickets.id))
        if (filtervalue!==productsList.id){
            setValue([...value, {
                id: productsList.id,
                imgurl: productsList.image,
                title: productsList.title,
                price: productsList.price,
                count: 1
            }])          
        } 
    }
    useEffect(()=>{
      localStorage.setItem('storevalue', JSON.stringify(value))
    },[value])
    return (
        <CounterContext.Provider value={{ store, value, handleRemove, handleUpdate}}>
            {props.children}
        </CounterContext.Provider>
    )
}
