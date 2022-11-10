import React from "react";
import Searchbar from "./Searchbar"
import LoginOrSignup from "./LoginOrSignup"
import Cart from "./Cart"
import Avatar from "./Avatar";
import Orders from "./Orders"
import Logo from "./Logo"
function Ribbon(){
    return(
    <div style={{backgroundColor:"black",height:"90px", width:"100%"}} class="rib">
    
    <Searchbar/>
   <LoginOrSignup/>
   <Cart/>
   <Avatar/>
   <Orders/>
   <Logo/>

    </div>
    );
}



export default Ribbon;