import React, { useEffect, useState } from 'react';
import './ProductList.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(err => console.error('Error fetching products:', err));
    }, []);

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Product List</h2>
            <Row>
                {products.length > 0 ? (
                    products.map(product => (
                        <Col md={4} sm={6} xs={12} key={product._id} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
                                    <Button variant="danger">Delete</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p className="text-center">No products available</p>
                )}
            </Row>
        </Container>
    );
}

export default ProductList;
