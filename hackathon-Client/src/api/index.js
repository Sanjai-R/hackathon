import axios from "axios";
import { baseurl } from "../../utils/baseUrl";



export const fetchbooks =  () => {
  const data =  axios.get(`${baseurl}/api/get-books?limit=all`).then((res) => res.json());
  return data.data;
};

