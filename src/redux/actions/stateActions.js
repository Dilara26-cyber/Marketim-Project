import {
  FILTERED_TEXT,
  CHECKED_RADIO,
  FILTERED_TEXT_TAGS,
  CHECKED_RADIO_TAGS,
  SET_DATE_ORDER,
  SET_SORT,
  SET_ORDER,
  SET_PAGE,
  SET_DATE,
} from '../constants/actionTypes';

export const filteredText = (text) => {
  return {
    type: FILTERED_TEXT,
    payload: text,
  };
};

export const checkedRadio = (value) => {
  return {
    type: CHECKED_RADIO,
    payload: value,
  };
};

export const filterTags = (text) => {
  return {
    type: FILTERED_TEXT_TAGS,
    payload: text,
  };
};

export const checkedRadioTags = (value) => {
  return {
    type: CHECKED_RADIO_TAGS,
    payload: value,
  };
};

export const sorting = (sort) => {
  return {
    type: SET_SORT,
    payload: sort,
  };
};

export const setOrder = (order) => {
  return {
    type: SET_ORDER,
    payload: order,
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};
