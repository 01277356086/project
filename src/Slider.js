import img1 from "./images/x612.jpg";
import img2 from "./images/24ZF8.jpg";
import img3 from "./images/2XN.jpg"


import Carousel from 'react-bootstrap/Carousel';
import "./productslist.css"

function Slider() {
  return (
    <>
    <div data-aos="zoom-in" data-aos-duration="3000">
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
      </div>
    </>
  )
}
export default Slider;