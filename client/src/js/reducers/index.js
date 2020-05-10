import { combineReducers } from "redux";
import authReducer from "./authReducer";
import usersReducer from "./userReducer";

export default combineReducers({
  authReducer,
  usersReducer
});
