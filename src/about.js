import React from "react"
import { useHistory } from "react"



function About() {
    let history = useHistory();

   

    return (
        <div>
            <a onClick={() => { history.push('/homepage');}} ><h4>homepage</h4></a>
<a  onClick={() => { history.push('/blogs');}} ><h4>blogs</h4></a>
     About
    </div>
    );
}

export default About;