// 导入axios
import axios from 'axios'
// 基础路径
const request = axios.create({
  baseURL: 'http://localhost:8080/'
})

export default request
