import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOAD_USER,
  SET_LOADING,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL
} from "../const/actionTypes";

//Login User
export const login = ({ email, password }) => async dispatch => {
  dispatch({
    type: SET_LOADING
  });

  try {
    const res = await axios.post("/api/auth/login", { email, password });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: { errors: err.response.data, status: err.response.status }
    });
  }
};

//Loading User
export const loadUser = () => async dispatch => {
  dispatch({
    type: LOAD_USER
  });
  const token = localStorage.getItem("token");
  if (!token) {
    return dispatch({
      type: LOAD_USER_FAIL,
      payload: { errors: "No Token " }
    });
  }

  const config = {
    headers: {
      Authorization: token
    }
  };

  try {
    const res = await axios.get("/api/auth/current", config);
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: res.data // {name , email , _id  }
    });
  } catch (err) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: { errors: err.response.data, status: err.response.status }
    });
  }
};
