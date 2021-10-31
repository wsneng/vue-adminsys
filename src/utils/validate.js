// let regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
// 邮箱
export function regEmail(str) {
 const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
 return reg.test(str);
}
// let regCode = /^[a-z0-9]{6}$/;
//验证码
export function regCode(str) {
  // const reg = /^[a-z0-9]{6}$/;
  const reg = /^[a-z0-9]{6}$/;
  return  reg.test(str);
}

// let regPwd = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
// 密码
export function regPwd(str) {
  const reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
  return  reg.test(str);
}
/**
 * 过滤特殊字符的函数
 */
//因为在vue是中无法直接访问js文件中的函数的
//所以需要使用export将这个函数暴露出去
export function stripscript(str) {
  let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]");
  let rs = "";
  for (let i = 0; i < str.length; i++) {
    rs = rs + str.substr(i, 1).replace(pattern, '');
  }
  return rs;
}


