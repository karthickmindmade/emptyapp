
import { Router, Route } from 'react-router-dom';
import {Switch} from "switch"
import React from "react";
import Homepage from "./homepage"
import About from "./about"
import Blog from "./blogs"

function App() {
    
    return (
     
     
    <Router basename="/index.html">
       
         <Switch>
   <Route   pathname="/app" component={Homepage} />
   
   <Route   pathname="/about" component={About} />
   <Route   pathname="/blogs" component={Blog} />
    </Switch>
    </Router>
  
    );
}

export default App;