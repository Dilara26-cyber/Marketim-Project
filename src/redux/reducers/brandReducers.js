import { FETCH_COMPANIES } from '../constants/actionTypes';

export const brandReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COMPANIES:
      return { companies: action.payload };
    default:
      return state;
  }
};
