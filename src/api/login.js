import request from "../utils/request"
/**
 * 获取验证码
 */
export function GetSms(data){
  return request.request({
    method: 'post',
    url: '/getSms/',    // 接口名
    // ES6写法  key=value   data
    data:
      {
      "username":data.userName,
      "module":data.module
    }
  })
}

/**
 * 获取用户角色
 */

/**
 * 登录
 */
export function GetLogin(data){
  return request.request({
    method: 'post',
    url: '/token/login/',    // 接口名
    // ES6写法  key=value   data
    data:{
      "username":data.userName,
      "password":data.password,
      "code":data.code
    }
  })
}

/**
 * 注册
 */
export function GetRegister(data){
  return request.request({
    method: 'post',
    url: '/register/',    // 接口名
    // ES6写法  key=value   data
    data:{
      "username":data.userName,
      "password":data.password,
      "code":data.code
    }
  })
}
