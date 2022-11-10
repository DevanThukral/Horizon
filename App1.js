import React from 'react';
import Ribbon from "./Ribbon";
import NavBar from "./NavBar";
import Footer from './Footer';
import Right from "./Right"
import "./Style.css";


const mainpage={
  
    width: "100%",
    height: "2000px",
    backgroundColor: "black"


}
function App1(){
    return(
        <div style={mainpage}>
           <Ribbon />
           <NavBar/>
           <Right/>


           <Footer/>
        </div>
    )

}
export default App1;