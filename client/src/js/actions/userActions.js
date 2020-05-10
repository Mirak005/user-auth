import axios from "axios";
import {
  GET_USERS,
  LOADING_USERS_FAIL,
  LOAD_USERS_SUCCESS
} from "../const/actionTypes";

//Get USERS
export const getUsers = () => async dispatch => {
  dispatch({
    type: GET_USERS
  });
  try {
    const res = await axios.get("/api/users/");
    dispatch({
      type: LOAD_USERS_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    console.log(error.response);
  }
};



//DELETE USER 