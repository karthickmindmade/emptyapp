import React from "react"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar(props) {
    
  
  

    return (
        <div>
<nav className="navbar navbar-expand-lg navbar-light text-white bg-primary">
  <div className="container">
    <a className="navbar-brand text-white" href="/" >Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav ms-5 ">
        <li className="nav-item">
         {props.navlinks1}
        </li>
        <li className="nav-item">
        {props.navlinks2}   
        </li>
        <li className="nav-item">
        {props.navlinks3}
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="/"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdownMenuLink ">
            <li><Link className="nav-link active text-white" to="/counter">counter</Link></li>
            <li><Link className="nav-link active text-white" to="/userdata">userdata</Link></li>
            <li><a className="dropdown-item text-white" href="https://distracted-brown-7e7597.netlify.app/">mindmade</a></li>
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