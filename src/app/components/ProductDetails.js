import React from 'react';
import { connect } from 'react-redux';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import { addToCart } from '../redux/shope/shope-actions';


function ProductDetails(props) {
    let { productID } = useParams();
    const item = props.products.find((prod) => prod.productID === parseInt(productID));

    if (item) {
        return (
            <Container fluid>
                <h2>Shoes</h2>
                <Row>

                    <Col md={8}>

                        <Card>
                            <Card.Img variant="top" src={item.image} style={{}} />
                        </Card>

                    </Col>

                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Product Id :{item.productID}</Card.Title>
                                <Card.Title> {item.productName}</Card.Title>
                                <Card.Text>
                                    Description : <br /> {item.details}
                                </Card.Text>
                                <Card.Title>Price : ${item.price}/-</Card.Title>
                                <Card.Title>QTY : {item.qty}  </Card.Title>

                            </Card.Body>
                            <small style={{ marginBottom: '50px', textAlign: 'center' }} className="text-muted"><Button className="btn btn-warning" onClick={() => props.addToCartHandler(item.productID)}>Add to Cart</Button></small>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (<div>
            <center>
                <h1>No item found</h1>
                <Link to="/"><Button variant="primary">Goto Home</Button></Link>
            </center>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.shope.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCartHandler: (productID) => dispatch(addToCart(productID)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);