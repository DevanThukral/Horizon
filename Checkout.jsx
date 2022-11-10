import React from "react";
import Submit from "./Submit";


function Checkout(){

return(

    <>
   
<form class="row g-3 Form">

  <div class="col-md-6">
  <label for="inputAddress" class="form-label"> First Name</label>
  <input type="text" class="form-control" id="inputAddress" />
    
  </div>
  <div class="col-md-6">
  <label for="inputAddress" class="form-label">Last Name</label>
  <input type="text" class="form-control" id="inputAddress" />
    
  </div>

  <div class="col-md-8">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>

  <div class="col-md-4">
  <label for="inputAddress" class="form-label">Mobile Number</label>
  <input type="number" maxLength="10" class="form-control" id="inputAddress" />
    
  </div>


  <div class="col-12">
    <label for="inputAddress" class="form-label"> Permanent Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">pincode</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>


  <div class="col-md-6">
  <label for="inputAddress" class="form-label"> Alternative Mobile Number</label>
  <input type="number" maxLength="10" class="form-control" id="inputAddress" />
    
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Landmark</label>
    <input type="text" class="form-control" id="inputCity" placeholder="Famous places nearby"/>
  </div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  
 
</form>
 

<Submit/>
</>
)
}

export default Checkout;