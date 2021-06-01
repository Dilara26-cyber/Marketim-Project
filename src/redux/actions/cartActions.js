import {
  ADD_TO_CART,
  DECREMENT,
  REMOVE_FROM_CART,
  GET_TOTAL,
} from '../constants/actionTypes';

export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let isInTheCart = false;
  cartItems.map((item) => {
    if (item.added === product.added) {
      isInTheCart = true;
      item.count++;
    }
  });
  if (!isInTheCart) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items
    .slice()
    .filter((item) => item.added !== product.added);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems },
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const decreaseTheCount = (items, product) => (dispatch) => {
  const cartItems = items.slice().map((item) => {
    if (item.added === product.added) {
      item = { ...item, count: item.count - 1 };
    }
    return item;
  });
  dispatch({
    type: DECREMENT,
    payload: { cartItems },
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const calculateTotal = (cartItems) => (dispatch, getState) => {
  let { total, count } = getState().cartItems.reduce(
    (cartTotal, item) => {
      const { price, count } = item;
      const itemTotal = price * count;
      cartTotal.total += itemTotal;
      return cartTotal;
    },
    {
      total: 0,
      count: 0,
    }
  );
  total = parseFloat(total.toFixed(2));
  dispatch({
    type: GET_TOTAL,
    payload: { ...cartItems, total, count },
  });
  return cartItems;
};
