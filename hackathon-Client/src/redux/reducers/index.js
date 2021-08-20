import { combineReducers } from "redux";
import userReducer from "./userReducer";
import bookReducer from "./bookReducer";
const allReducers = combineReducers({
  userReducer,
  books:bookReducer
});

export default allReducers;
