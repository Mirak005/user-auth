import {
  GET_USERS,
  LOAD_USERS_SUCCESS,
  LOADING_USERS_FAIL
} from "../const/actionTypes";

const initialState = {
  usersList: [],
  isLoading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, isLoading: true };
    case LOAD_USERS_SUCCESS:
      return { ...state, isLoading: false, usersList: action.payload };
    default:
      return state;
  }
}
