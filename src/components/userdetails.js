import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Userdetails(props) {
    
  
  

    return (
        <div>
             <div className="margin text-center">{props.id}</div>
            <div className="margin text-center">{props.firstname}</div>
            <div className="margin text-center">{props.lastname}</div>
            <div className="margin text-center">{props.emailid}</div>
            <div className="margin text-center">{props.avatar}</div>

    </div>
    );
}

export default Userdetails;