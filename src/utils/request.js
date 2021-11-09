import axios from "axios";
import {ElMessage} from 'element-plus'

const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/api'

//创建axios
const service = axios.create({
  baseURL: BASEURL + '/vue_admin_api/',   //微服务名    http://192.168.31.112:8080/api/vue_admin_api/getSms == http://old.web-jshtml.cn/vue_admin_api/getSms
  timeout: 10000,
});

// console.log(process.env.NODE_ENV);
// console.log(process.env.VUE_APP_ABC);

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // console.log(config);

  // 在发送请求之前做些什么
  // 后台需要前端这边传相关的参数  (在请求头添加参数)
  // tokey  userid sui
  // console.log(config.headers);
  //业务需求

  //
  config.headers['Tokey'] = '1111111'
  // config.headers.Tokey = '1111111'  //第二种写法

  config.headers['userid'] = '333'
  config.headers['sui'] = '88'

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
/**
 * 请求接口后 ，返回数据进行拦截（响应拦截器）
 */
service.interceptors.response.use(function (response) {


  let data = response.data;
  if (data.resCode !== 0) {
    ElMessage({
      message: data.message,
      type: 'error',
    })
    return Promise.reject(data);
  } else {
    // 对响应数据做点什么
    return response;
    // return Promise.resolve()
  }

}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


/**
 * 没有使用export default时，可以存在多个export
 * 文件xxx import 不需要花括号
 */
// 暴露此对象，default只返回一个  暴露后引用直接调用
export default service;
// const test2 = '222'
// export function  test2(){
//   return "222"
// }
