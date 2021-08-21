import { fetchstationary } from "../Actions/Actiontype";
const stationaryReducer = (state = null, action) => {
  switch (action.type) {
    case fetchstationary:
      return action.payload;
    default:
      return state;
  }
};

export default stationaryReducer;
