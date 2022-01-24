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
import store from './redux/store'
import { Provider } from 'react-redux'
function App() {
  const [productlist,setproductlist]=useState([])

  const countcallback = (childData) => {
    setCount(childData)
  }
  const productlistcallback =(childData)=>{
    setproductlist(childData)
  }
  const [count, setCount] = useState();
  return (
    <Provider store={store}>
      <Navbar count={count} productlist={productlist} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="counter" element={<Numbercounter />} />
        <Route path="userdata" element={<Apidata />} />
        <Route path="mm" element={<About2 />} />
        <Route path="products" element={<Products cartproductlist={productlistcallback} />} />
        <Route path="productdetails" element={<Productdetails  callcount={countcallback} />} />
        <Route path="*" element={<Nofound />} />
        <Route path="./counter" element={<Numbercounter />} />
        <Route path="userdetails" element={<Userdetails />} />
      </Routes>
      </Provider>
  );
}

export default App;
