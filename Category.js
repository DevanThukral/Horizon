import React from 'react';
import "./Style.css";

function Category(props){
    return(
        <div class="Categ">
            <h2><a href="Featured.js" style={{textDecoration:"none",color: "#fff"}}>{props.txt}</a></h2>
        </div>
    )

}
export default Category;