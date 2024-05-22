import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./productslist.css"
function Product(props) {
  const { prod, showButton } = props;
  return (
    <>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" className='card-img' alt={prod.title} src={prod.image}  />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>
            {prod.description}
          </Card.Text>
          <Card.Title>{prod.price}$</Card.Title>
          {
            showButton ? <Link to={`/prod/${prod.id}`}><Button variant="primary"> Details Of Product</Button> </Link> : null
          }


        </Card.Body>
      </Card>
    </>
  )
}
export default Product;