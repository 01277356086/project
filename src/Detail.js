import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Product from "./Product";
import Productslist from "./Productslist";
import { ButtonGroup } from "react-bootstrap";
import "./productslist.css"
function Detail() {
    const params = useParams();
    const [product, setproduct] = useState([]);
    const apilink = "https://fakestoreapi.com/products"; 
    
    useEffect(() => {
        fetch(`${apilink}/${params.prodid}`)
            .then((res) => res.json())
            .then((product) => setproduct(product))
    }, []);
 
    return (
        <>
            <div>
                <Button  data-aos="fade-left"
     data-aos-anchor="#example-anchor" 
     data-aos-duration="300"><Link to={"/products"} className="btn">  Retutn To All Products  </Link></Button>
                <Product   prod={product} showtitle={true} showButton={false} />
 
 
            </div>
        </>

    )
}
export default Detail;