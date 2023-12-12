import axios from "axios";

const apiInstance = axios.create({
  baseURL: `${process.env.REACT_APP_URL}/`,
});

apiInstance.defaults.headers.common.token = localStorage.getItem("token");

export default apiInstance;
