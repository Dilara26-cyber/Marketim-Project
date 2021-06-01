import {
  FETCH_ONE_PRODUCT,
  FETCH_PRODUCTS,
  FILTER_PRODUCTS,
  FILTER_PRODUCTS_BY_TAGS,
} from '../constants/actionTypes';

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case FETCH_PRODUCTS:
      return { products: action.payload };
    case FILTER_PRODUCTS_BY_TAGS:
      return {
        ...state,
        filteredProducts: action.payload,
      };
    default:
      return state;
  }
};
