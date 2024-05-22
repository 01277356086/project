import img1 from "./images/x612.jpg";
import img2 from "./images/24ZF8.jpg";
import img3 from "./images/2XN.jpg"
import "./productslist.css"

import Carousel from 'react-bootstrap/Carousel';


function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block" src={img1} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={img2} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={img3} />
        </Carousel.Item>
      </Carousel>
    </>
  )
}
export default Slider;