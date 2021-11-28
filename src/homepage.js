import React from "react"
import  useHistory  from "react"



function Homepage() {
    
    let history = useHistory();
   

    return (
        <div>
<a  onClick={() => { history.push('/about');}} ><h4>about</h4></a>
<a onClick={() => { history.push('/blogs');}} ><h4>blogs</h4></a>
      home
    </div>
    );
}

export default Homepage;