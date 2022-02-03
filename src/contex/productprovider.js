import { createContext, useState, useEffect } from "react";
export const CounterContext = createContext();
export default function CounterContextProvider(props) {
    const [value, setValue] = useState([{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}]);
    useEffect(()=>{
      setValue(JSON.parse(window.localStorage.getItem("storevalue")))
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
