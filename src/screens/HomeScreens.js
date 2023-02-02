import React from "react"
import { Button, Col, Row } from "react-bootstrap"
import products from "../products"
import Product from "../components/Product"

const HomeScreen = () => {
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
