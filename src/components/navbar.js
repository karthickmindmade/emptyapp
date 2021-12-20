import React from "react"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
    
  
  

    return (
        <div>
<nav className="navbar navbar-expand-lg navbar-light text-white bg-primary fixed-top">
  <div className="container">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav ms-5 ">
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
          <a className="nav-link dropdown-toggle text-white" href="/"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink text-white">
            <li><Link className="nav-link active text-dark" to="/counter">counter</Link></li>
            <li><Link className="nav-link active text-dark" to="/userdata">userdata</Link></li>
            <li><Link className="nav-link active text-dark" to="/products">products</Link></li>
            <li><a className="dropdown-item text-dark" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>    
    </div>
    );
}

export default Navbar;