import axios from "axios";

// axios.defaults.baseURL = "";
axios.defaults.headers.get["Content-Type"] = 'application/x-www-form-urlencoded'

export default axios;