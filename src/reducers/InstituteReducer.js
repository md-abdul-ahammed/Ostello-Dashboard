import {
  ALL_INSTITUTE_REQUEST,
  ALL_INSTITUTE_SUCCESS,
  ALL_INSTITUTE_FAIL,
  CLEAR_ERRORS,
  INSTITUTE_UPDATE_REQUEST,
  INSTITUTE_UPDATE_SUCCESS,
  INSTITUTE_UPDATE_FAIL,
  INSTITUTE_UPDATE_RESET,
  INSTITUTE_DATA_UPDATE_REQUEST,
  INSTITUTE_DATA_UPDATE_SUCCESS,
  INSTITUTE_DATA_UPDATE_FAIL,
  INSTITUTE_DATA_UPDATE_RESET,
  INSTITUTE_DETAILS_REQUEST,
  INSTITUTE_DETAILS_SUCCESS,
  INSTITUTE_DETAILS_FAIL,
  ADD_NEW_LOCATION,
  ADD_NEW_ACHIEVEMENT,
  ADD_NEW_FACULTY,
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
    case INSTITUTE_DATA_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case INSTITUTE_UPDATE_SUCCESS:
    case INSTITUTE_DATA_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case INSTITUTE_UPDATE_FAIL:
    case INSTITUTE_DATA_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case INSTITUTE_UPDATE_RESET:
    case INSTITUTE_DATA_UPDATE_RESET:
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

// get single institute
export const instituteDetailsReducer = (state = { institute: [] }, action) => {
  switch (action.type) {
    case INSTITUTE_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case INSTITUTE_DETAILS_SUCCESS:
      return {
        loading: false,
        institute: action.payload,
      };
    case INSTITUTE_DETAILS_FAIL:
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
// for adding new location
export const addNewLocationReducer = (state = { location: [] }, action) => {
  switch (action.type) {
    case ADD_NEW_LOCATION:
      return {
        location: action.payload,
      };
    default:
      return state;
  }
};

// for adding new faculty
export const addNewFacultyReducer = (state = { faculty: [] }, action) => {
  switch (action.type) {
    case ADD_NEW_FACULTY:
      return {
        faculty: action.payload,
      };
    default:
      return state;
  }
};

// for adding new faculty
export const addNewAchievementReducer = (
  state = { achievement: [] },
  action
) => {
  switch (action.type) {
    case ADD_NEW_ACHIEVEMENT:
      return {
        achievement: action.payload,
      };
    default:
      return state;
  }
};
