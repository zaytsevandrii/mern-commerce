import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rating from "./Rating"
import img1 from './images/airpods.jpg'

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image?product.image:img1} variant="top" />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div" >
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>

                <Card.Text className="pt-3" as="h3">£ {product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
