import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCart, decrementQty, incrementQty, removeFromCart } from '../redux/shope/shope-actions';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CartItems extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let getTotalss = 0;
        return (
            <>
                <center><h1>Cart Items</h1></center>
                <Table striped bordered hover size="sm">
                    <thead>

                        <tr>
                            <th>ItemID</th>
                            <th>Product Image</th>
                            <th>Item Name</th>
                            <th>Qty</th>
                            <th>Item Price</th>
                            <th>Total Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {(this.props.cart.length > 0) ?

                            this.props.cart.map((cartData, index) => {
                                getTotalss = getTotalss + (cartData.price * cartData.qty);
                                return (<tr key={index}>
                                    <td>{cartData.productID}</td>
                                    <td><img src={cartData.image} alt={cartData.productName} style={{ height: 50, width: 50 }} /></td>
                                    <td>{cartData.productName}</td>

                                    <td><Button variant="success" onClick={() => this.props.incrementQtyBtn(cartData.productID)}>+</Button> <strong> {cartData.qty} </strong> <Button variant="warning" onClick={() => this.props.decrementQtyBtn(cartData.productID, cartData.qty)}>-</Button></td>
                                    <td>{cartData.price}</td>
                                    <td>$ {cartData.price * cartData.qty}</td>

                                    <td> <Button variant="danger" onClick={() => this.props.removeFromCartBtn(cartData.productID)}>X</Button></td>
                                </tr>)
                            }) : (
                                <tr>
                                    <td colSpan="6"><center>No Item in Cart</center></td>
                                </tr>
                            )
                        }

                        <tr>
                            <td colSpan="4"></td>
                            <td >Total</td>
                            <td>${getTotalss}</td>
                        </tr>

                    </tbody>
                </Table>
                <center> <Button variant="danger" onClick={() => this.props.clearCartHandler()}>Clear Cart</Button>
                    <Link to="/procced"> <Button variant="primary"> Procced to Checkout</Button></Link></center>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log('cartITem state:::::', state);
    return {
        cart: state.shope.cart,
        total: state.shope.total,

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        clearCartHandler: () => dispatch(clearCart()),
        incrementQtyBtn: (id) => dispatch(incrementQty(id)),
        decrementQtyBtn: (id, qty) => dispatch(decrementQty(id, qty)),
        removeFromCartBtn: (id) => dispatch(removeFromCart(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItems);