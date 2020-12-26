
import * as actionTypes from './shope-actionTypes';

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const clearCart = () => {
    return {
        type: actionTypes.CLEAR_CART,
        payload: {
            cart: [],
            loadCurrentItem: null
        }
    }
}

export const incrementQty = (itemID) => {
    return {
        type: actionTypes.INCREMENT_QTY,
        payload: {
            id: itemID
        }
    }
}

export const decrementQty = (itemID, qty) => {
    return {
        type: actionTypes.DECREMENT_QTY,
        payload: {
            id: itemID,
            decrementQty: qty
        }
    }
}

