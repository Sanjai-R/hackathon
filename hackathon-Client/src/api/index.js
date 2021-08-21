import axios from "axios";
import { baseurl } from "../utils/baseUrl";



export const fetchbooks =  () => {
  const data =  axios.get(`${baseurl}/api/get-books?limit=all`);
  return data;
};
export const fetchStationary = () => {
  const data = axios.get(`${baseurl}/api/get-stationaries?limit=all`);
  return data;
};
export const fetchSingleBooks = async (id) => {
    const token = localStorage.getItem('token');
    const temp = await axios.get(`${baseurl}/api/get-book-by-id?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(temp.data.data);
    return temp.data.data;
}
export const fetchSingleStationary = async (id) => {
  const token = localStorage.getItem("token");
  const temp = await axios.get(
    `${baseurl}/api/get-stationary-by-id?id=id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  console.log(temp.data.data);
  return temp.data.data;
};