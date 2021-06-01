import {
  ADD_TO_CART,
  DECREMENT,
  REMOVE_FROM_CART,
  GET_TOTAL,
} from '../constants/actionTypes';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]'),
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { cartItems: action.payload.cartItems };
    case DECREMENT:
      return { cartItems: action.payload.cartItems };
    case GET_TOTAL:
      return {
        total: action.payload.total,
        count: action.payload.count,
      };
    default:
      return state;
  }
};
