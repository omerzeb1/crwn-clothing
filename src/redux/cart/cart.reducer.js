import CartActionTypes from './cart.types';
import {addItemToCart} from './cart.util';

const INITIAL_STATE = {
    hidden1:true,
    cartItems:[]
}

const cartReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden1: !state.hidden1
            };
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems : addItemToCart(state.cartItems,action.payload)
            };
        default:
                return state;
    }
};

export default cartReducer;