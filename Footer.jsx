import React from 'react';
import  './Style.css';
import Log  from "./Log.jpeg"
import instagram from "./instagram.png";
import facebook from "./facebook.png";
import twitter from "./twitter.png";
import gmail from "./gmail.png";

function Footer(){


    return(
<div class="mainBg">
<div class="ft" ><h2  style={{ marginLeft: "600px",fontWeight: "bold", fontSize: "28px"}} ><a href="#top" style={{color:"white",textDecoration:"none"}}><b>Top of the page</b></a></h2></div>



<footer id="foot" >
<div  style={{marginLeft: "320px",padding: "20px",fontSize: "25px"}}>
<h3 style={{color:"white"}}>	
Connect With Us</h3>
<ul  type="none">
   <a href="Arrival.jsx" style={{color:"white",textDecoration:"none"}}><li><img src={instagram} alt="pic"/>  Instagram</li></a>
   <a href="Arrival.jsx" style={{color:"white",textDecoration:"none"}}><li><img src={facebook} alt="pic"/>  Facebook</li></a>
   <a href="Arrival.jsx" style={{color:"white",textDecoration:"none"}}><li><img src={twitter} alt="pic"/>  Twitter</li></a>
  
   <li style={{color:"white" ,marginLeft:"-40px"}}><img src={gmail} alt="pic"/>   xxxxx@gmail.com</li>
   
    
    </ul>


</div>
<div style={{ marginTop:"-260px", marginLeft: "830px",fontSize: "25px",padding:"30px",color:"white"}}>
<h3 style={{color:"white"}}>	
Let Us Help You</h3>

<ul  type="none">
   <li>Wishlist</li>
    <li>Returns</li>
    <li>Your Orders</li>
    <li>Customer Service</li>
    </ul>

</div>
   </footer>
   <hr style={{color:"grey"}}/>
   <div class="end">
  <img src={Log} alt="logo" height="60px" width="200px" style={{marginTop:"10px",marginLeft:"600px"}}/>
   </div>

</div>

)

}
export default Footer;