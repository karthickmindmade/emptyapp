import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage"
import About from "./about"
import Blog from "./blogs"

function App() {
    
    return (
     
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blog />} />
      </Routes>
   
  
    );
}

export default App;
