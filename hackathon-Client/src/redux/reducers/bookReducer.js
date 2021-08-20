import {fetchbooks} from '../Actions/Actiontype'
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case fetchbooks:
      return action.payload;
    default:
      return state;
  }
};

export default bookReducer;
