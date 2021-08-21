import { fetchbooks, fetchstationary } from "./Actiontype";
import * as api from "../../api/index.js";
export const getBooks = () => async (dispatch) => {
  try {
    const data = await api.fetchbooks();
    const action = { type: fetchbooks, payload: data.data };
    return dispatch(action);
  } catch (error) {
    console.error(error.message);
  }
};

export const getStationary = () => async (dispatch) => {
  try {
    const data = await api.fetchStationary();
    const action = { type: fetchstationary, payload: data.data };
    return dispatch(action);
  } catch (error) {
    console.error(error.message);
  }
};