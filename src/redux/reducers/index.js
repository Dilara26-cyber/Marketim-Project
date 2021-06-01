import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import {
  setFilteredText,
  setCheckedRadio,
  setFilterTags,
  setCheckedRadioTags,
  setSort,
  setOrder,
  setPage,
} from './stateReducer';
import { brandReducer } from './brandReducers';
import { cartReducer } from './cartReducers';

const reducers = combineReducers({
  productReducer: productReducer,
  stateReducer: setFilteredText,
  setCheckedRadio: setCheckedRadio,
  brandReducer: brandReducer,
  setFilterTags: setFilterTags,
  setCheckedRadioTags: setCheckedRadioTags,
  setSort: setSort,
  setOrder: setOrder,
  setPage: setPage,
  cartReducer: cartReducer,
});

export default reducers;
