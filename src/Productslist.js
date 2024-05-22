import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Product from './Product';
import { useEffect, useState } from 'react';
import "./productslist.css"
import Scroll from './Scroll';

function Productslist() {

    const apilink = "https://fakestoreapi.com/products";
    const [products, setproducts] = useState([]);

    const [categories, setcategories] = useState([]);




    const getprodcategory = (catname) => {
        fetch(`https://fakestoreapi.com/products/category/${catname}`)
            .then((res) => res.json())
            .then((data) => setproducts(data))
    }
    useEffect(() => {

        fetch(apilink)
            .then((res) => res.json())
            .then((data) => setproducts(data));


        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((cate) => setcategories(cate))
    }, []);
    return (
        <>  <Scroll />
            <h1 className="text-center p-5"> Products</h1>
            <div className='container'>
                <Button variant="primary" onClick={() => {

                    fetch(apilink)
                        .then((res) => res.json())
                        .then((data) => setproducts(data)); 
                }} > All </Button> 
                {
                    categories.map((cate) => {
                        return (
                            <Button className='cate' variant="primary" key={cate} onClick={() => { getprodcategory(cate) }}> {cate}
                            </Button>
                        )
                    })
                }
                <div className='row'>
                    {products.map((prod) => {

                        return (
                            <div className='col-4 ' key={prod.id}>
                                <Product prod={prod} className='prods' showButton={true} />
                            </div>
                        )
                    })}
                </div>

            </div>

        </>
    )
}
export default Productslist;