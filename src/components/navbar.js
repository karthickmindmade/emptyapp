import React, { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { CounterContext } from '../contex/productprovider'
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Cartpage from "../cartpage";
function Navbar() {

  const { value, handleRemove,productsList } = useContext(CounterContext);

  const [count, setCount] = useState();
  const [opencart, setopencart] = useState()
  const cart = () => {
    setopencart(!opencart)
  }
  useEffect(() => {
    setCount(value.length)
  })

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light text-white bg-primary fixed-top">
        <div className="container-fluid">
          <div className="nav-logo">
            <img src="newlogo.png" className="ms-4" alt="logo" />
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <img className="navbar-toggler-icon" src="nav.png" alt="icon" />
          </button>


          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-5">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/blogs">blogs</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink text-white">
                  <li><Link className="nav-link active text-dark" to="/counter">counter</Link></li>
                  <li><Link className="nav-link active text-dark" to="/userdata">userdata</Link></li>
                  <li><Link className="nav-link active text-dark" to="/products">products</Link></li>
                  <li><a className="dropdown-item text-dark" href="/got">Something else here</a></li>
                </ul>
              </li>
            </ul>

          </div>
         
          
              
             

            
                <Cartpage />
              
        </div>
      </nav>
    </div>
  );
}

export default Navbar;