import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./productslist.css"

 


import Carousel from 'react-bootstrap/Carousel';


function Product(props) {
  const { prod, showButton,showtitle } = props;
  return (
    <>
       <Card   style={{ height: '33rem', width: '20rem' }}>


      <Carousel>
        <Carousel.Item><Link to={`/prod/${prod.id}`}>
         <Card.Img  data-aos="zoom-out"  data-aos-duration="3000" className='card-img' alt={prod.title} src={prod.image}  /> </Link>
        </Carousel.Item>
        <Carousel.Item> <Link to={`/prod/${prod.id}`}>
        <Card.Img   data-aos="zoom-out"  data-aos-duration="3000" className='card-img' alt={prod.title} src={prod.image}  /> </Link>
        </Carousel.Item>
        
      </Carousel>

        <Card.Body>
         <Card.Title   >{prod.title}</Card.Title>
         {
          showtitle ?<Card.Text  >  {prod.description} </Card.Text>  :null
         }
          {
          showtitle ? <Card.Title >{prod.price}$</Card.Title>  :null
         }
          
          {
            showButton ? <Link to={`/prod/${prod.id}`}><Button variant="primary" data-aos="zoom-out-right"  data-aos-duration="3000"> Details Of Product</Button>
             </Link> : null
          }


        </Card.Body> 
      </Card>
    </>
  )
}
export default Product;