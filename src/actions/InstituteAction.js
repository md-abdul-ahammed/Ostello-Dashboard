import axios from "axios";
import {
  ALL_INSTITUTE_REQUEST,
  ALL_INSTITUTE_SUCCESS,
  ALL_INSTITUTE_FAIL,
  CLEAR_ERRORS,
  INSTITUTE_UPDATE_REQUEST,
  INSTITUTE_UPDATE_SUCCESS,
  INSTITUTE_UPDATE_FAIL,
  INSTITUTE_DETAILS_REQUEST,
  INSTITUTE_DETAILS_SUCCESS,
  INSTITUTE_DETAILS_FAIL,
  ADD_NEW_LOCATION,
  ADD_NEW_FACULTY,
  ADD_NEW_ACHIEVEMENT,
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

// Update Institute
export const updateInstitute = (instituteData) => async (dispatch) => {
  try {
    dispatch({ type: INSTITUTE_UPDATE_REQUEST, payload: "processing" });
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
      payload: data.message,
    });
    dispatch({ type: ALL_INSTITUTE_REQUEST });
    const fatchData = await axios.get("https://api.ostello.co.in/institute/");
    dispatch({
      type: ALL_INSTITUTE_SUCCESS,
      payload: fatchData.data.message,
    });
  } catch (error) {
    dispatch({
      type: INSTITUTE_UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Single
export const getInstituteDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: INSTITUTE_DETAILS_REQUEST });
    const { data } = await axios.get(
      `https://api.ostello.co.in/institute?id=${id}`
    );
    dispatch({ type: INSTITUTE_DETAILS_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: INSTITUTE_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// add new location
export const addNewLocation = (data) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_NEW_LOCATION,
      payload: data,
    });
  } catch (error) {}
};

// add new faculty
export const addNewFaculty = (data) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_NEW_FACULTY,
      payload: data,
    });
  } catch (error) {}
};

// add new achievement
export const addNewAchievement = (data) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_NEW_ACHIEVEMENT,
      payload: data,
    });
  } catch (error) {}
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
