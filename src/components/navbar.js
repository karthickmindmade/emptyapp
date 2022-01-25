import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
function Navbar(props) {
  const{productlist}=props
  const [count, setCount] = useState();
  const [opencart,setopencart]=useState()
const cart=()=>{
  setopencart(!opencart)
}
useEffect(()=>{
  setCount(productlist.length)
})
console.log(productlist)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light text-white bg-primary fixed-top">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <img src="nav.png" alt="icon" />
          </button>
          <div className="nav-logo">
            <img src="flipkart.png" alt="logo" />
          </div>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav">
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
          <IconButton color="inherit" onClick={cart}>
            <Badge badgeContent={count} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          {opencart ? <div className="cart-dialog">
            <div className="cart-body">
            {productlist.map((product)=>
            <div className='colorlist'>
            <div className='flex' key={product.id}>              
                <div ><img src={product.imgurl} alt="avatar" width={40} /></div>
                <div className="cartproduct-title">{product.title}</div>
               <button>X</button>
            </div>
            </div>
          )}
            </div>
          </div>:<></>}    
        </div>
      </nav>
    </div>
  );
}

export default Navbar;