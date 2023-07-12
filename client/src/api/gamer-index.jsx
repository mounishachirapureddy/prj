import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_GAMER_MODULE_URL}/api`,
});
console.log(process.env.REACT_APP_GAMER_MODULE_URL)
export default api;