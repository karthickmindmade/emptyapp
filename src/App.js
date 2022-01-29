import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage"
import About from "./about"
import Blog from "./blogs"
import Numbercounter from "./counter";
import Apidata from "./userdata";
import About2 from "./mm"
import Navbar from "./components/navbar";
import Products from "./products";
import Productdetails from "./productdetails";
import Nofound from "./components/nofound";
import Userdetails from "./userdetails";
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CounterContextProvider from './contex/productprovider';

function App() {
  const countcallback = (childData) => {
    setCount(childData)
  }
 
  const [count, setCount] = useState();
  return (
   <div>
      <CounterContextProvider>
      <Navbar count={count}  />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blog />}/>
        <Route path="counter" element={<Numbercounter />}/>
        <Route path="userdata" element={<Apidata />} />
        <Route path="mm" element={<About2 />} />
        <Route path="products" element={<Products />} />
        <Route path="productdetails" element={<Productdetails  callcount={countcallback} />} />
        <Route path="*" element={<Nofound />} />
        <Route path="./counter" element={<Numbercounter />} />
        <Route path="userdetails" element={<Userdetails />} />
      </Routes>
      </CounterContextProvider>
    </div>
  );
}

export default App;
