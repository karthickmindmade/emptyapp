import React, { useState } from "react";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    
    const handleTab1 = () => {
       
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
     
        setActiveTab("tab2");
    };
    return (
        <div className="Tabs">
            <ul className="nav">
                <li  onClick={handleTab1}  > Tab 1</li>
                <li onClick={handleTab2} > Tab 2</li>
            </ul>
            <div className="outlet">
                {activeTab === "tab1" ? "hello tab1" : "hello tab2" }
            </div>
        </div>
    );
};
export default Tabs;