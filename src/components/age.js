import React, {useState} from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Age( props) {
    const {byear,bmonth,BDay}=props;
    const[agemonth,setAgemonth]=useState(0)
    const[ageyear,setAgeyear]=useState(0)
    const[ageday,setAgeday]=useState(0)
    
   
    function handleClick(){
        var today = new Date();
        var currentyear=today.getFullYear()
         var currentmonth=today.getMonth()
         var currentday=today.getDate()
       var theYear=Math.abs(currentyear-(byear))
       var theMonth=Math.abs(currentmonth-(bmonth))
       var theDate=Math.abs(currentday-(BDay))     
       setAgeyear(theYear)
       setAgemonth(theMonth)
       setAgeday(theDate)
    }
  
    return (
        <div>
           <button onClick={props.karthickclick}>hello</button>
            <button className="dfb-btn" onClick={handleClick}>get</button>
            <div className="age"><br/><br />{ageyear}years  {agemonth}months {ageday}days  old</div>
    </div>
    );
}

export default Age;