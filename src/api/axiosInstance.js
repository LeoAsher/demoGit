import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://6307924546372013f56c4595.mockapi.io/todos",
  timeout: 5000,
  headers: {
    "content-type": "application/json",
  },
});

export default axiosInstance;
