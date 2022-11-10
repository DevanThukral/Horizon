import React from 'react';
import Ribbon from "./Ribbon";
import NavBar from "./NavBar";
import Checkout from "./Checkout";

import Footer from './Footer';
import "./Style.css";



const page={
  
    width: "100%",
    height: "2000px",
    backgroundColor: "black"


}
function Form(){
    return(
        <div style={page}>
           <Ribbon />
           <NavBar/>
           <Checkout/>
          
          


           <Footer/>
        </div>
    )

}
export default Form;