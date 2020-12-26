import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap'
import Product from './Product';

function Home(props) {

    return (
        <div>
            <Container>
                <h2>Shoes</h2>
                <Row>

                    {props.productsData.map((productData, index) => {
                        return (
                            <Product key={productData.productID} productData={productData} />
                        );
                    })}
                </Row>
            </Container>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        productsData: state.shope.products
    }
}

export default connect(mapStateToProps)(Home);