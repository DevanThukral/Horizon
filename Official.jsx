import React from "react";
import "./Style.css";
import samsung from "./samsung.png";
import xiaomi from "./xiaomi.png";
import vivo from "./vivo.png";
import oppo from "./oppo.png";



function Official(){
    return(
<div >
<div class="brand"><a href="https://www.samsung.com/in/" target="blank"><img src={samsung} alt="pic"/></a></div>

<div class="brand"><a href="https://www.mi.com/in" target="blank"><img src={xiaomi} alt="pic" /></a></div>

<div class="brand"><a href="https://www.vivo.com/in
" target="blank"><img src={vivo}  alt="pic" /></a></div>

<div class="brand"><a href="https://www.oppo.com/in
" target="blank"><img src={oppo} alt="pic" /></a></div>

<div class="brand"><a href="https://www.infinixmobiles.in
" target="blank"><img src="https://www.gizmochina.com/wp-content/uploads/2020/09/Infinix-Logo-Featured.jpg" width="64px" height="64px" alt="pic"/></a> </div>

 <div class="brand"><a href="https://micromaxinfo.com/
" target="blank"><img src="https://1000logos.net/wp-content/uploads/2021/05/Micromax-logo.png" width="64px" height="64px" alt="pic" /></a></div>

<div class="brand" id="apple"  ><a href="https://www.apple.com/in
" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/862px-Apple_logo_black.svg.png"  width="52px" height="52px"  alt="pic" /></a></div>

    <div class="brand"><a href="https://www.realme.com/in
" target="blank"><img src="https://brandlogos.net/wp-content/uploads/2021/05/realme-logo.png" width="64px" height="64px" alt="pic" /></a></div>

    <div class="brand"><a href="https://www.oneplus.in
" target="blank"><img src="https://i2.wp.com/img.talkandroid.com/uploads/2016/01/OnePlus-Logo.jpg" width="64px" height="64px" alt="pic" /></a></div>

</div>
    )
}

export default Official;