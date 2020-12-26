
import { connect } from 'react-redux';
import { Col, Card, Button } from 'react-bootstrap'
import { addToCart } from '../redux/shope/shope-actions';
import { Link } from 'react-router-dom';


function Product(props) {

    let { productData } = props;

    return (
        < Col md={6} lg={4} style={{ marginBottom: '20px' }
        }>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={productData.image} />
                <Card.Body>
                    <Card.Title>{productData.productName} <span style={{ float: 'right' }}>${productData.price}</span></Card.Title>

                    <Card.Text>
                        {productData.details}
                    </Card.Text>
                    <Link to={`details/${productData.productID}`}><Button variant="warning">Details </Button></Link>&nbsp;
                  <Button variant="warning" onClick={() => { props.addToCartHandler(productData.productID); }} >Add To Cart</Button>
                </Card.Body>
            </Card>
        </Col >
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCartHandler: (productID) => dispatch(addToCart(productID)),
    }
}

export default connect(null, mapDispatchToProps)(Product);