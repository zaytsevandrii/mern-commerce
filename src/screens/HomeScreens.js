import React, { useEffect, useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import products from "../products"
import Product from "../components/Product"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../redux/slices/product"
import Loader from "../components/Loader"
import Message from "../components/Message"

const HomeScreen = () => {
    const state = useSelector((state) => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    const loading = state.status === "loading"
    const allProducts = state.status === "loaded"
    const error = state.error
    console.log(state)
    return (
        <>
            <div>Latest Product</div>
            {loading ? (
                <Loader/>
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    {state.products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    )
}

export default HomeScreen
