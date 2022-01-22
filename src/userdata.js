import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import 'react-tabs/style/react-tabs.css';
export default function Apidata() {
  var [profileid, setProfileid] = useState();
  var [profilename, setProfilename] = useState();
  var [profilelname, setProfilelname] = useState();
  var [profilelemail, setProfilelemail] = useState();
  var [profilelAvatar, setProfilelAvatar] = useState();
  const [activeTab, setActiveTab] = useState("tab1");
  const[displaydetails,SetDisplaydetails]=useState(false)
  var [search, setsearch] = useState();
  var [items, setItem] = useState([]);
  search = ""
  useEffect(() => {
    fetch(`https://reqres.in/api/users`)
      .then(res => res.json())
      .then(res => setItem(res.data))
  }, []);
  function handlePageClick(pageNumber) {
    var page = pageNumber.selected + 1;
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(res => res.json())
      .then(res => setItem(res.data));
  };
  const handleTab1 = () => {
      setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  function SelectProfile(items) {
    setActiveTab("tab2");
    setProfileid(items.id)
    setProfilename(items.first_name)
    setProfilelname(items.last_name)
    setProfilelemail(items.email)
    setProfilelAvatar(items.avatar)
    SetDisplaydetails(true)
  }
  return (
    <div className="container margin">
      <ul className="nav">
                <li  onClick={handleTab1} className={activeTab === "tab1" ? "activetab tabbtn" : "inactivetab tabbtn"}  >USER LIST</li>
                <li onClick={handleTab2} className={activeTab === "tab2" ? "activetab tabbtn" : "inactivetab tabbtn"} >USER DETAILS</li>
            </ul>
       <div>
     {activeTab === "tab1" ?
           <div>
              <div className="row ps-4 d-flex bg-primary text-white border-white">
                <div className="col ms-3"><b>ID</b></div>
                <div className="col me-5"><b>FIRST NAME</b></div>
                <div className="col me-5"><b>LAST NAME</b></div>
                <div className="col me-5"><b>EMAIL ID</b></div>
                <div className="col"><b>AVATAR</b></div>
              </div>           
              {items.filter(val => {
                if (search === "") {
                  return val;
                } else if (
                  val.first_name.toLowerCase().includes(search.toLowerCase()) ||
                  val.email.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              }).map((items) =>    
                <a  className="row d-flex user-details" onClick={() => SelectProfile(items)}  >
                  <div className="col mt-4"> {items.id}</div>
                  <div className="col mt-4"> {items.first_name}</div>
                  <div className="col mt-4"> {items.last_name}</div>
                  <div className="col mt-4"> {items.email}</div>
                  <div className="col"><img src={items.avatar} className="rounded-circle w-50 h-65 ms-4" alt="avatar" /></div>
                </a>
              )}           
              < ReactPaginate
                previousLabel={""}
                nextLabel={""}
                pageCount={2}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center mt-3"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                activeClassName={"active"}
              />
          </div>:           
          <div className="">
            {displaydetails===true ?
            <div className="">

<div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
    <div class="card p-4">
        <div class=" image d-flex flex-column justify-content-center align-items-center"> <button class="btn btn-secondary"> <img src={profilelAvatar} height="100" width="100" /></button> <span class="name mt-3">{profilename}</span> <span class="idd">{profilelname}</span>
            <div class="d-flex flex-row justify-content-center align-items-center gap-2"> <span class="idd1">{profileid}</span> <span><i class="fa fa-copy"></i></span> </div>
            <div class="d-flex flex-row justify-content-center align-items-center mt-3"> <span class="number">1069 <span class="follow">{profilelemail}</span></span> </div>
            <div class=" d-flex mt-2"> <button class="btn1 btn-dark">Edit Profile</button> </div>
            <div class="text mt-3"> <span>{profilelemail}</span> </div>
            <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-facebook-f"></i></span> <span><i class="fa fa-instagram"></i></span> <span><i class="fa fa-linkedin"></i></span> </div>
            <div class=" px-2 rounded mt-4 date "> <span class="join">Joined May,2021</span> </div>
        </div>
    </div>
</div>
         
            </div>:"No result"
}
          </div>
          }
          </div>
</div>
  );
}

