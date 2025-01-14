import React from "react"
import { useLocation } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Userdetails() {
    const {state}   = useLocation()
    return (
        <div className="margin">

<div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
    <div class="card p-4">
        <div class=" image d-flex flex-column justify-content-center align-items-center"> <button class="btn btn-secondary"> <img src={state.avatar} height="100" width="100" alt="avatar" /></button> <span class="name mt-3">{state.firstname}</span> <span class="idd">{state.lastname}</span>
            <div class="d-flex flex-row justify-content-center align-items-center gap-2"> <span class="idd1">{state.id}</span> <span><i class="fa fa-copy"></i></span> </div>
            <div class="d-flex flex-row justify-content-center align-items-center mt-3"> <span class="number">1069 <span class="follow">{state.email}</span></span> </div>
            <div class=" d-flex mt-2"> <button class="btn1 btn-dark">Edit Profile</button> </div>
            <div class="text mt-3"> <span>{state.email}</span> </div>
            <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-facebook-f"></i></span> <span><i class="fa fa-instagram"></i></span> <span><i class="fa fa-linkedin"></i></span> </div>
            <div class=" px-2 rounded mt-4 date "> <span class="join">Joined May,2021</span> </div>
        </div>
    </div>
</div>


            <div className="text-center">{state.id}</div>
            <div className="text-center">{state.firstname}</div>
            <div className="text-center">{state.lastname}</div>
            <div className="text-center">{state.email}</div>
            <div className="text-center"><img src={state.avatar} alt="avatar" /></div>
        </div>
    );
}
export default Userdetails;