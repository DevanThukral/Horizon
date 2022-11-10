import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function MainCarousel(){
    return(
      <div style={{height:"500x", width:"1300px", marginLeft:"90px"}} class="car">
      <Carousel variant="dark">
  <Carousel.Item>
    <img
      class="d-block w-100 imgSize"
      src="https://blog.hamrobazaar.com/wp-content/uploads/2021/04/oneplus-9-series.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      class="d-block w-100 imgSize"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYC-Mei-NAdvKG1-k0bL2tb8iFueMMhrN5Vw&usqp=CAU"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      class="d-block w-100 imgSize"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivMNbX-xVBCZUhsXbOyAMCrQtD4W19f1M-A&usqp=CAU"
      alt="Third slide"
    />
   
  </Carousel.Item>
</Carousel>
    </div>
    )
}





export default MainCarousel;