import axios from 'axios'

const request = axios.create({
    //请求根地址 如果是跨域请求的话set-cookie不会生效
    baseURL: 'http://localhost:3000/',
    withCredentials: true
})


export default request