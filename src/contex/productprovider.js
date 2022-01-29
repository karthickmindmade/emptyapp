import { createContext, useState, useEffect } from "react";
export const CounterContext = createContext();
export default function CounterContextProvider(props) {
    const [value, setValue] = useState([]);
    const [title, settitle] = useState('')
    const [filtervalue, setfiltervalue] = useState('')
    
  
    //fuction to add product into cart
    const [count, setCount] = useState(1);
    const incrementCount=()=> {
      setCount(count + 1);
    };
    const decrementCount = () => {
      if (count < 1) {
        setCount(
          0
        );
      } else {
        setCount(count - 1);
      }
    }
      
    function store(productsList) {
      
        settitle(productsList.title)
        if (filtervalue!==productsList.id) {
            setValue([...value, {
                id: productsList.id,
                imgurl: productsList.image,
                title: productsList.title,
                price: productsList.price,
                count: 1
            }])
        } 
    }
    useEffect(() => {
        value.filter(val => val.title.includes(title)).map((tickets) => setfiltervalue(tickets.id))
    },[value])
    //remove product from cart
    const handleRemove = (id) => {
        const newPeople = value.filter((person) => person.id !== id);

        setValue(newPeople);
    };
    function handleUpdate(productid, productPrice) {
        console.log(productid)
        setValue(Object.values({ ...value, [productid - 1]: { ...value[productid - 1], price: productPrice * count, count: count } }))
    }
    return (
        <CounterContext.Provider value={{ store, value, handleRemove, handleUpdate,incrementCount,decrementCount,count}}>
            {props.children}
        </CounterContext.Provider>
    )
}
