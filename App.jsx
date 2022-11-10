import React from 'react';
import Ribbon from "./Ribbon";
import NavBar from "./NavBar";
import MainCarousel from "./MainCarousel";

import Featured from './Featured';
import Arrival from './Arrival';
import Category from './Category';
import Explore from "./Explore";
import Official from "./Official";
import Footer from './Footer';



const main={
  
    width: "100%",
    height: "3858px",
    backgroundColor: "black"


}

function App() {
  return (
    <div style={main}>
      <Ribbon/>
    <NavBar/>
    <MainCarousel/>
 <h1 style={{color:"blue"}}>Featured Brands </h1>
     <Featured/>
    <Featured/> 
    <Featured/>


<h1 style={{color:"blue"}}>New Arrivals</h1>
    <Arrival/>
    <h1 style={{color:"blue"}}>Categories</h1>
    <Category  txt=" Budget" />
    <Category  txt="Mid Range"/>
    <Category  txt="Upper Mid Range"/>
    <Category  txt="Flagship"/>
    <Category  txt=" Upper Flagship" />
    

     
     <Explore />
     <h1 style={{color:"blue"}}>Visit us</h1>
     <Official/>
     <Footer />
   
   

    

    </div>
   
  )
}

export default App;
