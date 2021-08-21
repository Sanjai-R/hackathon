import { combineReducers } from "redux";
import {authReducer} from "./authReducer";
import bookReducer from "./bookReducer";
const allReducers = combineReducers({
  user:authReducer,
  books:bookReducer
});

export default allReducers;
