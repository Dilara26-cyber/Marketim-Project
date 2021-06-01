import axios from 'axios';
import { FETCH_COMPANIES } from '../constants/actionTypes';

export const fetchCompanies = (searchTerm) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3004/companies?q=${searchTerm}`
    );
    dispatch({ type: FETCH_COMPANIES, payload: response.data });
  };
};
