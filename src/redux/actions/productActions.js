import axios from 'axios';
import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS,
  FILTER_PRODUCTS_BY_TAGS,
  FETCH_ONE_PRODUCT,
} from '../constants/actionTypes';

export const fetchProducts = (productCategory, sort, order, page, date) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3004/items?_limit=16&_page=${page}&itemType=${productCategory}&_sort=${sort},${date}&_order=${order}`
    );
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  };
};

export const filterProducts = (
  filterTerm,
  productCategory,
  sort,
  order,
  page,
  date
) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3004/items?_limit=16&_page=${page}&q=${filterTerm}&itemType=${productCategory}&_sort=${sort},${date}&_order=${order}`
    );
    dispatch({
      type: FILTER_PRODUCTS,
      payload: response.data,
    });
  };
};

export const filterProductsByTag = (
  productCategory,
  tag,
  sort,
  order,
  page,
  date
) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3004/items?_limit=16&_page=${page}itemType=${productCategory}&tags_like=${tag}&_sort=${sort},${date}&_order=${order}`
    );
    dispatch({
      type: FILTER_PRODUCTS_BY_TAGS,
      payload: response.data,
    });
  };
};
