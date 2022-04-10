import axios from "axios";
import {
  ALL_INSTITUTE_REQUEST,
  ALL_INSTITUTE_SUCCESS,
  ALL_INSTITUTE_FAIL,
  CLEAR_ERRORS,
  INSTITUTE_UPDATE_REQUEST,
  INSTITUTE_UPDATE_SUCCESS,
  INSTITUTE_UPDATE_FAIL,
} from "../constants/instituteConstants";

export const getInstitutes = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_INSTITUTE_REQUEST });
    const { data } = await axios.get("https://api.ostello.co.in/institute/");
    dispatch({ type: ALL_INSTITUTE_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: ALL_INSTITUTE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Product
export const updateInstitute = (id, instituteData) => async (dispatch) => {
  try {
    dispatch({ type: INSTITUTE_UPDATE_REQUEST });
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${window.localStorage.getItem("access_token")}`,
      },
    };
    const url = "https://api.ostello.co.in/institute/approve";
    const { data } = await axios.patch(url, instituteData, config);
    dispatch({
      type: INSTITUTE_UPDATE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: INSTITUTE_UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
