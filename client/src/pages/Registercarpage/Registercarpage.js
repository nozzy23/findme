import React from "react";
import Navbar from '../../component/Navbar/Navbar';
import Banner from "../../component/Banner/Banner";
import Forms from "./Inputform";


function Registerpage(){
    return <div className="reg-container">
    <div className="container">
    
    <Navbar/>
   <br></br>
    <h1 className="regTitle" > Register a Vehicle</h1>
    <br></br>
    <Forms/>
    <br></br>
    </div>
    </div>
}


export default Registerpage;