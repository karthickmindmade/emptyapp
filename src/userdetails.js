import React ,{useState} from "react"
import { useLocation } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Userdetails() {
    const {state}   = useLocation()
    return (
        <div className="margin">
            <div className="text-center">{state.id}</div>
            <div className="text-center">{state.firstname}</div>
            <div className="text-center">{state.lastname}</div>
            <div className="text-center">{state.email}</div>
            <div className="text-center"><img src={state.avatar} /></div>
        </div>
    );
}
export default Userdetails;