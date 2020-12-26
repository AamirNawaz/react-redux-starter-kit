
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Row, Col, Button, Navbar, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function HeaderNavbar(props) {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        props.cart.forEach(item => {
            count = count + item.qty;
        })
        setCartCount(count);

    }, [props.cart, cartCount])

    return (
        <Row>
            <Col>
                {/* Mavbar start */}
                <Navbar bg="dark" style={{ marginBottom: 50 }}>
                    <Link to="/"><Navbar.Brand style={{ color: 'white' }}>E-Shopping-cart app</Navbar.Brand></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {/* Signed in as: <a href="#login">Aamir</a> */}
                  &nbsp;
                  &nbsp;
                        <Link to="/cart">
                                <Button variant="warning">
                                    Cart <Badge variant="dark">{cartCount}</Badge>
                                </Button>
                            </Link>

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                {/* Navbar end */}

            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shope.cart
    }
}

export default connect(mapStateToProps, null)(HeaderNavbar);