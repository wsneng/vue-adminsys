import cookie from "cookie_js";


export function getToken(){
  return cookie.get('admin_token');
}
export function setToken(token){
  return cookie.set('admin_token',token);
}
export function removeToken(){
  return cookie.remove('admin_token');
}

export function setUserName(userName){
  return cookie.set('userName',userName);
}

export function getUserName(){
  return cookie.get('userName');
}

export function removeUserName(){
  return cookie.remove('userName');
}
