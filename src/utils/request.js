import axios from 'axios'

const request = axios.create({
    //请求根地址 如果是跨域请求的话set-cookie不会生效
    baseURL: 'http://www.yiwai.xyz:4000/',
    withCredentials: true
})


export default request