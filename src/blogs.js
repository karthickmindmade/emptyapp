import React, { useState } from "react"
import "./css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Age from "./components/age";


function Blog() {
 
    const [birthyear, setBirthYear] = useState(0)
    const [birthmonth, setBirthMonth] = useState(0)
    const [BirthDay, setBirthDay] = useState(0)
    
 function karthick(){
     console.log("hello")
 }
 console.log("hello2")
    return (
        <div className="container margin">
              <button
          aria-label="Increment value"
       
        >increment</button>
            <div className="calculator">
                <h1>calculate your age</h1>
                <input className="dfb" onChange={(e) => setBirthDay(e.target.value)} placeholder="d" />
                <input className="dfb" onChange={(e) => setBirthMonth(e.target.value)} placeholder="m" />
                <input className="dfb" onChange={(e) => setBirthYear(e.target.value)} placeholder="y" />
            </div>
            <Age byear={birthyear} bmonth={birthmonth} BDay={BirthDay}  karthickclick={karthick}/>



        </div>
    );
}

export default Blog;