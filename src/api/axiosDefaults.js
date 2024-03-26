import axios from "axios";

axios.defaults.baseURL = "https://only-cute-api-2dbb94224813.herokuapp.com/"
axios.defaults.headers.post["Content-Type"] = "multipart/form-data"
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = acios.create();
