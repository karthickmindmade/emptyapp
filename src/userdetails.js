import React from "react"
import { useLocation } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Userdetails() {


    const { state } = useLocation()

    return (
        <div>
            <div className="text-center">{state.itemid}</div>
            <div className="text-center">{state.itemsfirstname}</div>
            <div className="text-center">{state.itemslastname}</div>
            <div className="text-center">{state.itemsemail}</div>
            <div className="text-center"><img src={state.avatar} /></div>
        </div>
    );
}

export default Userdetails;