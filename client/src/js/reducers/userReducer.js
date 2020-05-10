import {
  GET_USERS,
  LOAD_USERS_SUCCESS,
  LOADING_USERS_FAIL,
  DELETE_USER
} from "../const/actionTypes";

const initialState = {
  usersList: [],
  isLoading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, isLoading: true };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(user => user._id !== action.payload)
      };
    case LOAD_USERS_SUCCESS:
      return { ...state, isLoading: false, usersList: action.payload };
    default:
      return state;
  }
}
