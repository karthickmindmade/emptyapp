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
            <div className="profile-list">
              <div className="profile-label">id:</div>
              <div className=""> {profileid}
              </div>

            </div>
            <div className="profile-list">
              <div className="profile-label">First Name:</div>
              <div className=""> {profilename}
              </div>

            </div>
            <div className="profile-list">
              <div className="profile-label">Last Name:</div>
              <div className="">{profilelname}
              </div>
            </div>
            <div className="profile-list">
              <div className="profile-label">Email:</div>
              <div className=""> {profilelemail}
              </div>

            </div>
            <div className="profile-list">
              <div className="profile-label">Profile:</div>
              <div className=""><img alt="avatar" src={profilelAvatar} />
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

