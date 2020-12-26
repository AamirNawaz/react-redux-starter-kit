import * as actionTypes from './shope-actionTypes';
import product1 from '../../assets/images/1.jpg';
import product2 from '../../assets/images/2.jpg';
import product3 from '../../assets/images/3.jpg';
import product4 from '../../assets/images/4.jpg';
import product5 from '../../assets/images/5.jpg';
import product6 from '../../assets/images/6.jpg';
import product7 from '../../assets/images/7.jpg';
import product8 from '../../assets/images/8.jpg';
import product9 from '../../assets/images/9.png';

const INITIAL_STATE = {
    products: [
        {
            productID: 1,
            productName: 'Naik',
            price: 25,
            details: 'Naik shoes for sport jugger type',
            image: product1,
            qty: 1
        },
        {
            productID: 2,
            productName: 'Hussh puppies',
            price: 590,
            details: 'hussh puppies jogger sports shoe',
            image: product2,
            qty: 1

        },
        {
            productID: 3,
            productName: 'Cat woker',
            price: 350,
            details: 'Cat A hilly area super climber shoe',
            image: product3,
            qty: 1

        },


        {
            productID: 4,
            productName: 'Burjan shoes W',
            price: 24,
            details: 'Burjan shoes Juggar details description',
            image: product4,
            qty: 1
        },
        {
            productID: 5,
            productName: 'Burjan shoes Juggar',
            price: 150,
            details: 'Burjan shoes Juggar details description',
            image: product5,
            qty: 1

        },
        {
            productID: 6,
            productName: 'Uneaza shoes',
            price: 500,
            details: 'A supper climber unezay',
            image: product6,
            qty: 1

        },
        {
            productID: 7,
            productName: 'NEw Brand shoes',
            price: 340,
            details: 'Naik shoes for sport jugger type',
            image: product7,
            qty: 1
        },
        {
            productID: 8,
            productName: 'Bata shoes for causal',
            price: 780,
            details: 'hussh puppies jogger sports shoe',
            image: product8,
            qty: 1

        },
        {
            productID: 9,
            productName: 'Cat woker',
            price: 134,
            details: 'Cat A hilly area super climber shoe',
            image: product9,
            qty: 1

        }
    ],
    cart: [],

}
const shopeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Add to cart
        case actionTypes.ADD_TO_CART:
            //get the item data from  Initial state products array
            const item = state.products.find((prod) => prod.productID === action.payload.id);

            //check item in cart is it already added if yes then just increase its qty.
            const itemInCart = state.cart.find((item) => item.productID === action.payload.id ? true : false);

            return {
                ...state,
                cart: itemInCart ?
                    state.cart.map(item => item.productID === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
                    : [...state.cart, { ...item, qty: 1 }]
            }


        // Remove from cart
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.productID !== action.payload.id),
            }


        //increment Qty 
        case actionTypes.INCREMENT_QTY:
            let tempCart = state.cart.map((cartItem) => {
                if (cartItem.productID === action.payload.id) {
                    cartItem = { ...cartItem, qty: cartItem.qty + 1 };
                }
                return cartItem;
            });
            return { ...state, cart: tempCart };


        // Decrement Qty
        case actionTypes.DECREMENT_QTY:
            let tempCartNew = [];

            if (action.payload.decrementQty === 1) {
                tempCartNew = state.cart.filter(
                    (cartItem) => cartItem.productID !== action.payload.id
                );
            } else {
                tempCartNew = state.cart.map((cartItem) => {
                    if (cartItem.productID === action.payload.id) {
                        cartItem = { ...cartItem, qty: cartItem.qty - 1 };
                    }
                    return cartItem;
                });
            }
            return { ...state, cart: tempCartNew };

        // Clear the Cart
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cart: [],
            }


        // default case
        default:
            return state;

    }

}

export default shopeReducer;