import React,{useState,useEffect} from "react";
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
import Navbar from "./components/navbar";
//import { useNavigate } from "react-router-dom";



export default function Apidata() {
  //  let navigate = useNavigate();

    var[item,setItem] = useState([]);
   
    
     
 useEffect(() =>{
     
       fetch (`https://reqres.in/api/users`)
           .then(res => res.json())
           .then(res => setItem(res.data))
    },[]);
 
  function handlePageClick(pageNumber)  {
      
      var page = pageNumber.selected + 1;
      
      fetch (`https://reqres.in/api/users?page=${page}`)
      .then(res => res.json())
      .then(res => setItem(res.data)); 
  };



  return (
      <div>
          <Navbar
         navlinks1={ <a className="nav-link active" aria-current="page" href="/" >Home</a>}
         navlinks2={<Link className="nav-link active" to="/about">About</Link>}
         navlinks3={<Link className="nav-link active" to="/blogs">blogs</Link>}
        />
            <div className="container">
                <div className="tabs" defaultIndex={0} >
                  
                    <div>
                    <div className="row ps-4 d-flex bg-dark text-white border-white">
                            <div className="col ms-3"><b>ID</b></div>
                            <div className="col me-5"><b>FIRST NAME</b></div>
                            <div className="col me-5"><b>LAST NAME</b></div>
                            <div className="col me-5"><b>EMAIL ID</b></div>
                            <div className="col"><b>AVATAR</b></div>
                        </div>

                    {item.map((items,k)=>
                         <div key={k} className="row ps-5 d-flex bg-light" >
                                <div className="col mt-4"> {items.id}</div>
                                <div className="col mt-4"> {items.first_name}</div>
                                <div className="col mt-4"> {items.last_name}</div>
                                <div className="col mt-4"> {items.email}</div>
                                <div className="col"><img src={items.avatar} className="rounded-circle w-50 h-65 ms-4" alt="avatar"/></div>                  
                         </div> )}
                        
                         < ReactPaginate
                                previousLabel={"" }
                                nextLabel={ "" }
                                pageCount={4}
                                onPageChange={ handlePageClick } 
                                containerClassName={ "pagination justify-content-center mt-3" }
                                pageClassName={ "page-item" }
                                pageLinkClassName={"page-link"}
                                activeClassName={ "active" } 
                            />
                    </div>
                    <div>
                       
                    </div>
                </div>     
            </div>
            </div>
     );
 }

