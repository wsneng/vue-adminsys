<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li :class="{'current':item.current}" v-for="(item,index) in menuTab" :key="index" @click="toggleMenu(item)">
          {{ item.text }}
        </li>
      </ul>
      <!--      表单-->
      <el-form ref="ruleForm2" :model="ruleForm" status-icon :rules="rules"  class="login-form" size="medium">
        <el-form-item prop="userName" class="item-from">
          <label for="userName">邮箱</label>
          <el-input id="userName" type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="item-from">
          <label for="password">密码</label>
          <el-input id="password" type="password" v-model="ruleForm.password" autocomplete="off" maxlength="20"
                    minlength="6"></el-input>
        </el-form-item>
        <el-form-item prop="passwords" class="item-from" v-if="model === 'register'">
          <label for="passwords">重复密码</label>
          <el-input id="passwords" type="password" v-model="ruleForm.passwords" autocomplete="off" maxlength="20"
                    minlength="6" ></el-input>
        </el-form-item>
        <el-form-item prop="code" class="item-from">
          <label for="code" >验证码</label>
          <el-row :gutter="20">
            <el-col :span="15">
              <el-input id="code" type="text" v-model="ruleForm.code" minlength="6" maxlength="6" :disabled="CodeInputStatus"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button type="success" class="block " id="code-btn" @click="getSms()" :disabled="CodeButtonStatus" :loading="isLoadingStatus">{{codeButtonContext}}</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="submitForm('ruleForm2')" class="login-btn block" :disabled="loginButtonStatus">{{ model === 'login' ? "登录" : "注册" }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
//引入方式
import sha1 from 'js-sha1'
import { stripscript,regPwd,regCode,regEmail } from "../../utils/validate";
import { reactive,ref,isRef,toRefs,onMounted,watch} from 'vue';
import axios from "axios";
import {GetSms,GetRegister,GetLogin} from '../../api/login'
import { useRouter} from 'vue-router'
import {useStore} from 'vuex'     // 引入vuex对象
import { ElMessage,ElNotification } from 'element-plus'


// default直接用名字，只暴露一个
// import {test2} from "../../utils/request"
// import {service} from "../../utils/request"

export default {
  name: "index",
  setup(props, context) {
    // console.log(attrs);
    const router = useRouter()   // 在setup中创建router的变量
    const store = useStore()   // 在setup中创建vuex的对象
    const ruleForm2 = ref(null)
    //验证码按钮禁用状态
    const CodeButtonStatus = ref(false)
    // 登录按钮的禁用状态
    const loginButtonStatus = ref(true)
    // 验证码输入框
    const CodeInputStatus = ref(true)

    // 显示验证码按钮加载
    const isLoadingStatus = ref(false)

    //验证码按钮的文字
    const codeButtonContext = ref('获取验证码')
    /* const codeButtonStatus1 = reactive({
       status:false,
       text:'获取验证码'
     })*/

    //
    const time =ref('')
    // let regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    // let regCode = /^[a-z0-9]{6}$/;
    // let regPwd = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
    //验证邮箱格式
    let validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'));
      } else if (!regEmail(value)) {
        callback(new Error('邮箱格式不正确'));
      } else {
        callback();
      }
    };
    //验证密码格式
    let validatePassWord = (rule, value, callback) => {
      //过滤后的数据
      ruleForm.password  = stripscript(value);
      value = ruleForm.password;
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (!regPwd(value)) {
        callback(new Error("密码为6-20位的数字+字母组合"))
      } else {
        callback();
      }
    };
    //验证重复密码
    let validatePassWords = (rule,value,callback) =>{
      if(model.value === 'login'){
        callback();
      }
      //过滤后的数据
      ruleForm.passwords  = stripscript(value);
      value = ruleForm.passwords;
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value != ruleForm.password) {
        callback(new Error('两次密码输入不一致'));
      } else {
        callback();
      }
    };
    //验证码
    let validateCode = (rule, value, callback) => {
      if (!value) {
        // CodeButtonStatus.value = true;
        callback(new Error('请输入验证码'));
      }
      else if(!regCode(value)){
        // CodeButtonStatus.value = true;
        callback(new Error('验证格式不正确'));
      }
      else {
        // CodeButtonStatus.value = false;
        callback();
      }
    };
    //这里面放置一些data,生命周期、自定义函数
    // context.attrs 父组件的标签可以加各种"属性"，能和props对应上的就变成了子组件的props，对应不上的就都是attrs，不限于函数，各种类型都行。
    // context.slots 插槽，其实就是带有dom的属性。
    // context.parent
    // context.root
    // context.emit 这个是和v-model配合使用的，在子组件内修改props的值用的。
    // context.refs
    //通过reactive声明数组
    const menuTab = reactive([
      {text: '登录', current: true},
      {text: '注册', current: false}
    ])
    // console.log(menuTab)

    //通过ref声明一个常量
    const model = ref("login");
    //ref声明的常量的取值方式：.value
    // console.log(model.value);
    //使用isRef判断当前数据是否一个ref对象（基础数据类型）
    // console.log(isRef(model) ? "是" : "否");
    // console.log(isRef(model));

    //表单的数据
    const ruleForm = reactive({
      // userName: '',
      userName: '2351715@qq.com',
      // password: '',
      password: 'qwe123',
      passwords:'',
      code: ''
    })

    //表单失焦规则验证
    const rules = reactive({
      userName: [
        //触发方式，当失去焦点的时候触发validator(key)验证器对应的value(XXXXXX)值
        {validator: validateUserName, trigger: 'blur'}
      ],
      password: [
        {validator: validatePassWord, trigger: 'blur'}
      ],
      passwords: [
        {validator: validatePassWords, trigger: 'blur'}
      ],
      code: [
        {validator: validateCode, trigger: 'blur'}
      ]
    })
    /**
     * 声明函数
     */

    /**
     * 获取验证码
     */
    const getSms = (()=>{
      if(ruleForm.userName === ''){
        ElMessage({
          message: '邮箱不能为空！！！',
          type: 'error',
        })
        return false;
      }
      if(!regEmail(ruleForm.userName)){
        ElMessage({
          message: '邮箱格式有错误！！！',
          type: 'error',
        })
        return false;
      }

      const requestData = reactive({
        userName:ruleForm.userName,
        module: model.value === 'login' ? 'login' : 'register'
      })
      setTimeout(()=>{
        GetSms(requestData).then((re) =>{
          // isLoadingStatus.value = true
          codeButtonContext.value = '发送中'
          CodeInputStatus.value = false;
          TimeCode()

          // 延迟器
          setTimeout(()=>{
            ElMessage({
              duration:3000,
              message: '邮箱发送成功！！！',
              type: 'success',
            })

            ElNotification({
              title: re.data.message.substring(0,7),
              message:  re.data.message.substring(7,re.data.message.length),
              type:'success',
              duration: 3000,
              offset:250
            })

            CodeButtonStatus.value = true

          },2000)

          CodeInputStatus.value = false
          // console.log(re);
          // if(re.data.length > 8){
          //   loginButtonStatus.value = false;
          // }
        }).catch((error) =>{
          console.log(error);
        });
      },1500)

    });

    // setTimeout：clearTimeout(变量)          只执行一次
    // setInterval :clearInterval(变量)        不断的执行，需要条件才会停止
    /**
     * 验证加载倒计时
     */
    const TimeCode=(()=>{
      let number =10;
      // 定时器
      isLoadingStatus.value = true
      time.value = setInterval(()=>{
        // codeButtonContext.value ='发送中(' + number-- +')'
        codeButtonContext.value =`再次获取${number--}秒`  // ES5的写法
        if(number === 0){
          clearInterval(time.value)
          codeButtonContext.value = '再次获取'
          CodeButtonStatus.value = false
          isLoadingStatus.value = false
        }
      },1000)
    })
    /**
     * 切换菜单
     */
    const toggleMenu = (item => {
      /* 解构  可变形参  不定参数
      const {...a} = toRefs(ruleForm)
       a.userName.value = ''
       a.password.value = ''
       a.passwords.value = ''
       a.code.value = ''*/
      // ruleForm.userName ='';
      // ruleForm.password ='';
      // ruleForm.passwords ='';
      // ruleForm.code ='';
      // element 重置表单
      ruleForm2.value.resetFields()
      // 按钮置灰
      regEmail(ruleForm.userName) ? CodeButtonStatus.value = false : CodeButtonStatus.value = true;
      regCode(ruleForm.code) ? loginButtonStatus.value = false : loginButtonStatus.value = true;
      // 切换菜单验证码的重置
      clearInterval(time.value)
      isLoadingStatus.value = false
      CodeButtonStatus.value = false
      codeButtonContext.value = '获取验证码'
      CodeInputStatus.value = true;
      //遍历对象  表单数据初始化
      for (const itemKey in ruleForm) {
        item[itemKey]  = ''
      }

      menuTab.forEach(item => {
        item.current = false;
      });
      item.text === '登录' ? model.value = 'login' : model.value = 'register';
      item.current = true;
    })
    /**
     *  提交表单
     */
      // 表单的方法
    const submitForm = (formName =>{
        // console.log(ruleForm2.value);
        // context.refs[formName].validate((valid) => {
        // 验证邮箱密码格式
        ruleForm2.value.validate((valid) => {
          if (valid) {
            let RegisterData = {
              userName:ruleForm.userName.toString(),
              password:sha1(ruleForm.password.toString()),
              code: ruleForm.code.toString()
            }
            const obj = model.value == 'login' ?  GetLogin(RegisterData) :  GetRegister(RegisterData);
            obj.then((re)=>{
              ElMessage({
                showClose: true,
                message: re.data.message,
                type: 'success',
              })
              clearInterval(time.value)
              codeButtonContext.value = '获取验证码'
              isLoadingStatus.value = false
              CodeButtonStatus.value = false
              model.value = 'login'
              toggleMenu(menuTab[0]);
              /* ruleForm2.value.resetFields();
               if(model.value === 'register'){
                // 自动跳转登录页面
                for(const menuTabKey in menuTab ){
                  if(menuTab[menuTabKey].text=='登录'){
                    menuTab[menuTabKey].current = true
                  }
                }
              }*/


              if (model.value === 'login') {
                // 路由跳转及传参（传参对象为对象）
                // let obj = {
                //   name:'wsn',
                //   age:21
                // }
                // let strItem = JSON.stringify(obj)
                // router.push({path:'/Console',query:{id:encodeURIComponent(strItem)} } )
                router.push({path:'/Console'})

                // router.push('/Console')
              }
            }).catch((err)=>{
              console.log(err);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      })
    /**
     * 生命周期
     */
    //挂载完成时
    onMounted(() => {
      // console.log(process.env.VUE_APP_ABC);
      // regEmail(ruleForm.userName) ? CodeButtonStatus.value = false : CodeButtonStatus.value = true
      regCode(ruleForm.code) ? loginButtonStatus.value = false : loginButtonStatus.value = true
    })
    watch(ruleForm, (count, prevCount) => {
      if(count.userName.length> 0){
        regEmail(ruleForm.userName) ? CodeButtonStatus.value = false : CodeButtonStatus.value = true
      }
      regCode(ruleForm.code) ? loginButtonStatus.value = false : loginButtonStatus.value = true
    })
    return{
      codeButtonContext,
      isLoadingStatus,
      CodeInputStatus,
      CodeButtonStatus,
      loginButtonStatus,
      getSms,
      ruleForm2,
      menuTab,
      model,
      ruleForm,
      rules,
      toggleMenu,
      submitForm,
    };
  },
}
</script>

<style lang="less" scoped>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #344a5f;
}

.login-wrap {
  width: 330px;
  margin: auto;
}

.menu-tab {
  text-align: center;

  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: white;
    border-radius: 2px;
    cursor: pointer;
  }

  .current {
    background-color: rgba(0, 0, 0, .1);
  }
}

.login-form {
  margin-top: 20px;

  label {
    display: block;
    margin-bottom: 3px;
    font-size: 14px;
    color: #fff;
  }

  .item-from {
    margin-bottom: 13px;
  }

  .block {
    display: block;
    width: 100%;
  }

  .login-btn {
    margin-top: 20px;
  }
  #code-btn  {
    padding: 0;
    margin: 0px 10px 20px 0px !important;
  }
}

</style>

