import {
  ALL_INSTITUTE_REQUEST,
  ALL_INSTITUTE_SUCCESS,
  ALL_INSTITUTE_FAIL,
  CLEAR_ERRORS,
  INSTITUTE_UPDATE_REQUEST,
  INSTITUTE_UPDATE_SUCCESS,
  INSTITUTE_UPDATE_FAIL,
  INSTITUTE_UPDATE_RESET,
} from "../constants/instituteConstants";

//get all institutes

export const institutesReducer = (state = { institutes: [] }, action) => {
  switch (action.type) {
    case ALL_INSTITUTE_REQUEST:
      return {
        loading: true,
        institutes: [],
      };
    case ALL_INSTITUTE_SUCCESS:
      return {
        loading: false,
        institutes: action.payload,
      };
    case ALL_INSTITUTE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// update institute
export const institute = (state = {}, action) => {
  switch (action.type) {
    case INSTITUTE_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case INSTITUTE_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case INSTITUTE_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case INSTITUTE_UPDATE_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
