<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li :class="{'current':item.current}" v-for="(item,index) in menuTab" :key="index" @click="toggleMenu(item)">
          {{ item.text }}
        </li>
      </ul>
      <!--      表单-->
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form" size="medium">
        <el-form-item prop="userName" class="item-from">
          <label>邮箱</label>
          <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="item-from">
          <label>密码</label>
          <el-input type="password" v-model="ruleForm.password" autocomplete="off" maxlength="20"
                    minlength="6"></el-input>
        </el-form-item>
        <el-form-item prop="passwords" class="item-from" v-if="model === 'register'">
          <label>重复密码</label>
          <el-input type="passwords" v-model="ruleForm.passwords" autocomplete="off" maxlength="20"
                    minlength="6"></el-input>
        </el-form-item>
        <el-form-item prop="code" class="item-from">
          <label>验证码</label>
          <el-row :gutter="20">
            <el-col :span="15">
              <el-input v-model.number="ruleForm.code" minlength="6" maxlength="6"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button type="success" class="block">获取验证码</el-button>
            </el-col>
          </el-row>

        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
//引入方式
import { stripscript } from "../../utils/validate";
// import  {  ref ,  react  }  from  '@vue/composition-api'

export default {
  name: "index",

  data() {
    //验证邮箱格式
    let validateUserName = (rule, value, callback) => {
      let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (value === '') {
        callback(new Error('请输入邮箱'));
      } else if (!reg.test(value)) {
        callback(new Error('邮箱格式不正确'));
      } else {
        callback();
      }
    };
    //验证密码格式
    let validatePassWord = (rule, value, callback) => {
      //过滤后的数据
      this.ruleForm.password  = stripscript(value);
      value = this.ruleForm.password;
      let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (!reg.test(value)) {
        callback(new Error("密码为6-20位的数字+字母组合"))
      } else {
        callback();
      }
    };
    //验证重复密码
    let validatePassWords = (rule,value,callback) =>{
      //过滤后的数据
      this.ruleForm.passwords  = stripscript(value);
      value = this.ruleForm.passwords;
      let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value != this.ruleForm.password) {
        callback(new Error('两次密码输入不一致'));
      } else {
        callback();
      }
    }
    //验证码
    let validateCode = (rule, value, callback) => {
      let reg = /^[a-z0-9]{6}$/;
      if (!value) {
        callback(new Error('请输入验证码'));
      } else if(!reg.test(value)){
        callback(new Error('验证格式不正确'));
      } else {
        callback();
      }
    };
    return {
      model:'login',
      menuTab: [
        {text: '登录', current: true},
        {text: '注册', current: false}
      ],
      //表单的数据
      ruleForm: {
        userName: '',
        password: '',
        passwords:'',
        code: ''

      },
      rules: {
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
      }
    };
  },
  //创建完成时，此时已经创建好了数据
  created() {

  },
  //挂载完成时，自动执行，此时的数据跟样式都已经挂载完成
  mounted() {
    //基本数据类型，按值来访问：
    // 基本数据类型复制的时改变量的副本，这个两个变量可以参与任何操作而不会相互影响
    let a = 11;
    let b = a;
    console.log(`b:${b}`);//11
    b = 20;
    console.log(`a:${a}`);//11
    console.log(`b:${b}`);//20

    //引用数据类型，按引用来访问：
    // 复制的是该变量的指针，该指针指向存储在堆中的一个对象。复制操作结束后，两个变量
    // 实际上将引用同一个对象，因此，改变其中一个变量，就会影响另外一个变量
    let aArr = [11, 22];
    let bArr = aArr;
    let cArr = bArr;
    cArr[0] = 33;
    console.log(`aArr:${bArr}`);//33,22
    console.log(`bArr:${aArr}`);//33,22
    console.log(`cArr:${bArr}`);//33,22
  },
  methods: {
    toggleMenu(item) {
      this.menuTab.forEach(item => {
        item.current = false;
      });
      item.text === '登录' ?  this.model = 'login' :  this.model = 'register';
      item.current = true;
    },
    //表单的方法
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
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
}

</style>
