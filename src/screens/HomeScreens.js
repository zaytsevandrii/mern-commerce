import React, { useEffect, useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import products from "../products"
import Product from "../components/Product"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { fetchProducts } from "../redux/slices/product"

const HomeScreen = () => {
    const [products,setProducts] = useState([])
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())
       /*  const fetchProducts = async()=>{
            const {data} = await axios.get('http://localhost:5000/api/products')
            setProducts(data)
        }

        fetchProducts() */
    },[])

    console.log(products)
    return (
        <>
            <div>Latest Product</div>
          
            <Row>
                {products.map(product =>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
