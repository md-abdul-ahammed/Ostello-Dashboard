import axios from "axios";
import {
  ALL_BLOG_REQUEST,
  ALL_BLOG_SUCCESS,
  ALL_BLOG_FAIL,
  CLEAR_ERRORS,
} from "../constants/blogConstants";

export const getAllBlogs = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_BLOG_REQUEST,
    });

    const { data } = await axios.get("https://api.ostello.co.in/blog");

    dispatch({
      type: ALL_BLOG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_BLOG_FAIL,
      error: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
