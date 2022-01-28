import { createContext, useState, useEffect } from "react";
import { set } from "react-hook-form";
import update from 'immutability-helper';
export const CounterContext = createContext();

export default function CounterContextProvider(props) {
    const [value, setValue] = useState([
       
    ]);
    const [title, settitle] = useState('')
   
    const [filtervalue, setfiltervalue] = useState('')



    useEffect(() => {
        
    }, [value])

    //fuction to add product into cart
    function store(productsList) {
        value.filter(val => val.title.includes(title)).map((tickets) => setfiltervalue(tickets.id))
        settitle(productsList.title)
        if (filtervalue === productsList.id) {
            
        } else {
            setValue([...value, {
                id: productsList.id,
                imgurl: productsList.image,
                title: productsList.title,
                price: productsList.price,
                count: 1
            }])
        }
    }

    //remove product from cart
    const handleRemove = (id) => {
        const newPeople = value.filter((person) => person.id !== id);

        setValue(newPeople);
    };

   


function handleUpdate(productid,productPrice,count){
    console.log(productid)
    setValue(Object.values({...value, [productid-1]: {...value[productid-1], price: productPrice*count,count:count }}))
}


    return (
        <CounterContext.Provider value={{ store, value, handleRemove,handleUpdate }}>
            {props.children}
        </CounterContext.Provider>
    )
}
