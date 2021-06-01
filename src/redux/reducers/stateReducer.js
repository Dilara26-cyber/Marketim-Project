import {
  FILTERED_TEXT,
  CHECKED_RADIO,
  FILTERED_TEXT_TAGS,
  CHECKED_RADIO_TAGS,
  SET_SORT,
  SET_ORDER,
  SET_PAGE,
  SET_DATE,
  SET_DATE_ORDER,
} from '../constants/actionTypes';

const initialState = {
  filterValue: '',
  checkedRadio: '',
  filterTags: '',
  checkedRadioTags: '',
  sort: '',
  order: '',
  page: 1,
  date: '',
  dateOrder: '',
};

export const setFilteredText = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED_TEXT:
      return {
        ...state,
        filterValue: action.payload,
      };
    default:
      return state;
  }
};

export const setCheckedRadio = (state = initialState, action) => {
  switch (action.type) {
    case CHECKED_RADIO:
      return {
        ...state,
        checkedRadio: action.payload,
      };
    default:
      return state;
  }
};

export const setFilterTags = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED_TEXT_TAGS:
      return {
        ...state,
        filterTags: action.payload,
      };
    default:
      return state;
  }
};

export const setCheckedRadioTags = (state = initialState, action) => {
  switch (action.type) {
    case CHECKED_RADIO_TAGS:
      return {
        ...state,
        checkedRadioTags: action.payload,
      };
    default:
      return state;
  }
};

export const setSort = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};

export const setOrder = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};

export const setPage = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};
