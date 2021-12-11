import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage"
import About from "./about"
import Blog from "./blogs"
import Numbercounter from "./counter";
import Apidata from "./userdata";
import About2 from "./mm"
function App() {
    
    return (
     
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="counter" element={<Numbercounter />} />
        <Route path="userdata" element={<Apidata />} />
             <Route path="mm" element={<About2 />} />
      </Routes>
   
  
    );
}

export default App;
