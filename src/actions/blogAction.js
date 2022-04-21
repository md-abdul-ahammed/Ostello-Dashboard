import axios from "axios";
import {
  ALL_BLOG_REQUEST,
  ALL_BLOG_SUCCESS,
  ALL_BLOG_FAIL,
  NEW_BLOG_DATA,
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

export const getBlogData = (data) => async (dispatch) => {
  dispatch({ type: NEW_BLOG_DATA, payload: data });
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
