import { combineReducers } from "redux";
import {authReducer} from "./authReducer";
import bookReducer from "./bookReducer";
import stationaryReducer from "./stationaryReducer"
const allReducers = combineReducers({
  user:authReducer,
  books:bookReducer,
  stationary:stationaryReducer,
});

export default allReducers;
