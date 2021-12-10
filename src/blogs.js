import React from "react"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./components/navbar";

function Blog() {
    
   
   
   

    return (
        <div>
<Navbar
         navlinks1={ <a className="nav-link active text-white" aria-current="page" href="/" >Home</a>}
         navlinks2={<Link className="nav-link active text-white" to="/about">About</Link>}
         navlinks3={<Link className="nav-link active text-white" to="/blogs">blogs</Link>}
        />




           
 

     Blog
    </div>
    );
}

export default Blog;