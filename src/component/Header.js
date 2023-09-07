import React from "react";
import IMG from "./img/logo.jpeg";
import "./Entire.css";

const Header = () => {

   return(
    <>
        <div className="header">
     <img src={IMG} alt="logo" width="70" height="50 "  className="img"/> 
      <h2 className="text">Google Keeper</h2>
  </div>
    
    </>
   )

   
 
}

export default Header;
