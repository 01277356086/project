import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./productslist.css"

 


import Carousel from 'react-bootstrap/Carousel';


function Product(props) {
  const { prod, showButton,showtitle } = props;
  return (
    <>

      <Card style={{ height: '33rem', width: '22rem' }}>


      <Carousel>
        <Carousel.Item><Link to={`/prod/${prod.id}`}>
         <Card.Img   className='card-img' alt={prod.title} src={prod.image}  /> </Link>
        </Carousel.Item>
        <Carousel.Item> <Link to={`/prod/${prod.id}`}>
        <Card.Img   className='card-img' alt={prod.title} src={prod.image}  /> </Link>
        </Carousel.Item>
        
      </Carousel>


        
       
        <Card.Body>
         <Card.Title>{prod.title}</Card.Title>
         {
          showtitle ?<Card.Text>  {prod.description} </Card.Text>  :null
         }
          {
          showtitle ? <Card.Title>{prod.price}$</Card.Title>  :null
         }
          
          {
            showButton ? <Link to={`/prod/${prod.id}`}><Button variant="primary"> Details Of Product</Button>
             </Link> : null
          }


        </Card.Body>
      </Card>
    </>
  )
}
export default Product;