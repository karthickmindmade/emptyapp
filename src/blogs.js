import React, {useState} from "react"
import "./css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function Blog() {
   
    const[birthyear,setBirthYear]=useState(0)
    const[birthmonth,setBirthMonth]=useState(0)
    const[BirthDay,setBirthDay]=useState(0)
    const[agemonth,setAgemonth]=useState(0)
    const[ageyear,setAgeyear]=useState(0)
    const[ageday,setAgeday]=useState(0)
    var today = new Date();
    var currentyear=today.getFullYear()
     var currentmonth=today.getMonth()
     var currentday=today.getMonth()
    function handleClick(){
       var theYear=currentyear-birthyear
       var theMonth=currentmonth-birthmonth
       var theDate=currentday-BirthDay     
       setAgeyear(theYear)
       setAgemonth(theMonth)
       setAgeday(theDate)
    }
    return (
        <div className="container margin">
<div className="calculator">
<h1>calculate your age</h1>
<input  className="dfb" onChange={(e)=>setBirthDay(e.target.value)}  placeholder="d"/>
<input  className="dfb" onChange={(e)=>setBirthMonth(e.target.value)} placeholder="m" />
<input className="dfb" onChange={(e)=>setBirthYear(e.target.value)} placeholder="y" />
</div>
<button className="dfb-btn" onClick={handleClick}>get</button>
<div className="age"><br/><br />{ageyear}years  {agemonth}months {ageday}days  old</div>


    </div>
    );
}

export default Blog;