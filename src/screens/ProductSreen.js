import React, { useEffect, useState } from "react"
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import Rating from "../components/Rating"
import axios from "axios"

const ProductSreen = ({ match }) => {
    const { id } = useParams()
    const [product,setProduct] = useState({})
    useEffect(()=>{
        const fetchProducts = async()=>{
            const {data} = await axios.get(`http://localhost:5000/api/products/${id}`)
            setProduct(data)
        }

        fetchProducts()
    },[id])
    console.log(product)
    return (
        <>
            <div>{product.name}</div>
            <Link className="btn btn-light my-3" to="/">
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    {product.image&&<Image src={product.image} alt={product.name} fluid />}
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product?.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                        <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        <strong>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-center ">
                                <Button className="btn-block px-5 " type="button" disabled={product.countInStock===0}>
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductSreen
