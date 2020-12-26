import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Form, Col, Button, Table } from 'react-bootstrap';
import { removeFromCart } from '../redux/shope/shope-actions';
import { Link } from 'react-router-dom';

class ProccedToCheckout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { cartItems } = this.props;
        let getTotalss = 0;
        return (
            <Container>
                <Row>
                    <Col md={7}>

                        <center><h2> Order Checkout</h2></center>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder=" email" />
                                </Form.Group>


                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="Country" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control type="number" placeholder="zip" />
                                </Form.Group>
                            </Form.Row>



                            <Button variant="primary">
                                Procced Checkout
                        </Button>
                        &nbsp;
                       <Link to="/"> <Button variant="warning">
                                Continue shopping
                        </Button></Link>
                        </Form>
                    </Col>
                    <Col md={5}>
                        <h3>Order Details</h3>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th> ItemID</th>
                                    <th>Name</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((data, index) => {
                                    getTotalss = getTotalss + (data.price * data.qty);
                                    return (<tr key={index}>
                                        <td>{data.productID}</td>
                                        <td>{data.productName}</td>
                                        <td>{data.qty}</td>
                                        <td>{data.price}</td>
                                        <td> <Button variant="danger" onClick={() => this.props.removeFromCartBtn(data.productID)}>X</Button></td>
                                    </tr>);
                                })}


                                <tr>
                                    <td></td>
                                    <td colSpan={3}><strong>Total</strong></td>
                                    <td><strong>{getTotalss}</strong></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        cartItems: state.shope.cart
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        removeFromCartBtn: (id) => dispatch(removeFromCart(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProccedToCheckout);