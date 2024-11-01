import axios from "axios";
import { ip_apiUrl, ip_apiKey} from "../config/IpKey";

export async function ipRequest(ip) {
    const response = await axios.get(ip_apiUrl, {params: {key: ip_apiKey, ip: ip}})
    const responseResult = response.data;
    // 网络请求成功。可依据业务逻辑和接口文档说明自行处理。
    // console.log(responseResult);
    return responseResult
}

export async function my_ip() {
    return await axios.get('https://ipinfo.io/json')
}