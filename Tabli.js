import React from "react";
import Butn from "./Butn";

function Rom(){
return(
    <table className="appl" border="1" style={{color:"white"}}>
<tr>
<td>RAM</td>
<td><Butn/></td>
<td><Butn/></td>
<td><Butn/></td>

    
</tr>

<tr>
<td>ROM</td>
<td><Butn/></td>
<td><Butn/></td>
<td><Butn/></td>
   
</tr>

<tr>
<td>Colors</td>
<td><Butn/></td>
<td><Butn/></td>
<td><Butn/></td>
   
</tr>


    </table>
    
)
}
export default Rom;