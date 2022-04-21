import {
  ALL_BLOG_REQUEST,
  ALL_BLOG_SUCCESS,
  ALL_BLOG_FAIL,
  NEW_BLOG_DATA,
  CLEAR_ERRORS,
} from "../constants/blogConstants";

//get all blogs
export const blogReducer = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case ALL_BLOG_REQUEST:
      return {
        loading: true,
        blogs: [],
      };
    case ALL_BLOG_SUCCESS:
      return {
        loading: false,
        blogs: action.payload,
      };
    case ALL_BLOG_FAIL:
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

//new blog data
export const blogDataReducer = (state = { blogData: {} }, action) => {
  switch (action.type) {
    case NEW_BLOG_DATA:
      return {
        blogData: action.payload,
      };

    default:
      return state;
  }
};
