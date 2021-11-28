import React from "react"
import { useHistory } from "react"


function Blog() {
    
    let history = useHistory();
   
   

    return (
        <div>
<a  onClick={() => { history.push('/about');}} ><h4>about</h4></a>
<a  onClick={() => { history.push('/homepage');}} ><h4>homepage</h4></a>

     Blog
    </div>
    );
}

export default Blog;