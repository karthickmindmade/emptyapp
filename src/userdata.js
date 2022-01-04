import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import { useNavigate } from "react-router-dom"
import 'react-tabs/style/react-tabs.css';
import Userdetails from "./userdetails";

//import { useNavigate } from "react-router-dom";



export default function Apidata() {

  var [profileid, setProfileid] = useState();
  var [profilename, setProfilename] = useState();
  var [profilelname, setProfilelname] = useState();
  var [profilelemail, setProfilelemail] = useState();
  var [profilelAvatar, setProfilelAvatar] = useState();
  var [search, setsearch] = useState();

  var [items, setItem] = useState([]);
  var [search, setsearch] = useState();

  function SelectProfile(items) {

    setProfileid(items.id)
    setProfilename(items.first_name)
    setProfilelname(items.last_name)
    setProfilelemail(items.email)
    setProfilelAvatar(items.avatar)
  }
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
  return (
    <div className="margin">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">  <div className="container">
          <div className="tabs" defaultIndex={0} >
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
                <div className="row d-flex" onClick={() => SelectProfile(items)}  >
                 
                        <div className="col mt-4"> {items.id}</div>
                        <div className="col mt-4"> {items.first_name}</div>
                        <div className="col mt-4"> {items.last_name}</div>
                        <div className="col mt-4"> {items.email}</div>
                        <div className="col"><img src={items.avatar} className="rounded-circle w-50 h-65 ms-4" alt="avatar" /></div>
                     
                </div>
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
            </div>
            <div>
            </div>
          </div>
        </div></div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

          <div className="">
            <div className="text-center">{profileid}</div>
            <div className="text-center">{profilename}</div>
            <div className="text-center">{profilelname}</div>
            <div className="text-center">{profilelemail}</div>
            <div className="text-center"><img src={profilelAvatar} /></div>
          </div>

        </div>
      </div>
    </div>
  );
}

