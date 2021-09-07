import axios from "axios";
import { configToken } from "./authActions";
import {
  GET_USERS,
  LOADING_USERS_FAIL,
  LOAD_USERS_SUCCESS,
  DELETE_USER,
} from "../const/actionTypes";

//Get USERS
export const getUsers = (page_number) => async (dispatch) => {
  dispatch({
    type: GET_USERS,
  });
  try {
    const res = await axios.get("/api/users/?page=" + page_number);
    dispatch({
      type: LOAD_USERS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

//DELETE USER
export const deleteUser = (id) => async (dispatch) => {
  const config = configToken();
  try {
    await axios.delete(`/api/users/${id}`, config);
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  } catch (error) {
    alert(error.response.data);
  }
};
