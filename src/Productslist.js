import Button from 'react-bootstrap/Button';
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
        <>

            <h1 className="text-center p-5" data-aos="zoom-out" data-aos-duration="3000"> Products</h1>
            <div className='container' >
                <Button  data-aos="zoom-in-down" data-aos-duration="3000" variant="primary" onClick={() => {

                    fetch(apilink)
                        .then((res) => res.json())
                        .then((data) => setproducts(data));
                }} > All </Button>
                {
                    categories.map((cate) => {
                        return (

                            <Button className='cate' data-aos="zoom-in-left" data-aos-duration="3000" variant="primary"
                                key={cate.id} onClick={() => { getprodcategory(cate) }}> {cate}  </Button>
                        )
                    })
                }
                <div className='row'>
                    {products.map((prod) => {

                        return (<div className='col-4 ' data-aos="zoom-in-up" data-aos-duration="3000">
                            <div key={prod.id}>
                                <Product prod={prod} showtitle={false} className='prods' showButton={true} />
                            </div></div>
                        )
                    })}
                </div>

            </div>
            <Scroll /> 
        </>
    )
}
export default Productslist;