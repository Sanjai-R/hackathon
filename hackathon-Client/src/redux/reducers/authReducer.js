import { logout,auth } from "../Actions/Actiontype";
export const authReducer = (state = { authData: null }, action) => {
  
  switch (action.type) {
    case auth:
      return { ...state, authData: action.data, loading: false, errors: null };
    case logout:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};
