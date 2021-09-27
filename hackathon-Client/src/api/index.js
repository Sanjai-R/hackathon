import axios from "axios";
import { baseUrl } from "../utils/baseUrl";

export const fetchbooks = () => {
  const data = axios.get(`${baseUrl}/api/get-books?limit=all`);
  return data;
};
export const fetchStationary = () => {
  const data = axios.get(`${baseUrl}/api/get-stationaries?limit=all`);
  return data;
};
export const fetchSingleBooks = async (id) => {
  const token = localStorage.getItem("token");
  const temp = await axios.get(`${baseUrl}/api/get-book-by-id?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(temp.data.data);
  return temp.data.data;
};
export const fetchSingleStationary = async (id) => {
  const token = localStorage.getItem("token");
  const temp = await axios.get(
    `${baseUrl}/api/get-stationary-by-id?id=id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(temp.data.data);
  return temp.data.data;
};
