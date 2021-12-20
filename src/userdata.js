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

function handleSelect(){

}

  return (
      <div>
          <Navbar
         navlinks1={ <a className="nav-link active text-white" aria-current="page" href="/" >Home</a>}
         navlinks2={<Link className="nav-link active text-white" to="/about">About</Link>}
         navlinks3={<Link className="nav-link active text-white" to="/blogs">blogs</Link>}
        />



            <div className="container mt-5">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
  </li>
 
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

  <div className="tabs" defaultIndex={0} >
                  
                    <div>
                    <div className="row ps-4 d-flex bg-primary text-white border-white">
                            <div className="col ms-3"><b>ID</b></div>
                            <div className="col me-5"><b>FIRST NAME</b></div>
                            <div className="col me-5"><b>LAST NAME</b></div>
                            <div className="col me-5"><b>EMAIL ID</b></div>
                            <div className="col"><b>AVATAR</b></div>
                        </div>

                    {item.map((items,k)=>
                      <a onClick={handleSelect}>
                         <div key={k} className="row ps-5 d-flex bg-light users" >
                              
                                <div className="col mt-4"> {items.id}</div>
                                <div className="col mt-4"> {items.first_name}</div>
                                <div className="col mt-4"> {items.last_name}</div>
                                <div className="col mt-4"> {items.email}</div>
                                <div className="col"><img src={items.avatar} className="rounded-circle w-50 h-65 ms-4" alt="avatar"/></div>      
                                     
                         </div>
                         </a>      
                          )}
                        
                         < ReactPaginate
                                previousLabel={"" }
                                nextLabel={ "" }
                                pageCount={2}
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
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">



  </div>
 
</div>
                
            </div>
            </div>
     );
 }

