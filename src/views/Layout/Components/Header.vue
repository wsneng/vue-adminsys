<template>
  <div id ="header-wrap">
    <div class="pull_left header-icon" @click="navMenuState()"> <svg-icon iconClass="list" className="list"></svg-icon></div>
    <div class="pull-right">
      <img :src="User_Img" class="pull_left user-img" alt=""/>
      <div class="userInfo pull_left"> {{ userName }} </div>
      <div class="header-icon pull_left"><svg-icon iconClass="quit" className="quit" @click="quitLogin()"></svg-icon></div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "../../../Icons/SvgIcon";
import userImg from "../../../Icons/svg/1.png"
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {computed} from "vue";
export default {
  name: "Header",
  components: {SvgIcon},

  setup(){
    const User_Img = userImg;
    // vuex
    const store = new useStore();
    const router = new useRouter();
    const navMenuState = () =>{
      store.commit('app/SET_Collapse');
      // store.dispatch("setMenuStatus","222");
    };

    const userName = computed(() => store.state.login.userName);

    const quitLogin = (()=>{
      router.push({path:'/login'})
    })
    return {
      User_Img,
      navMenuState,
      userName,
      quitLogin
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/config";
@import "src/styles/main";
.user-img{
  border-radius: 30px;
  width: 45px;
  height: 45px;
  padding: 8px;
}
.userInfo{
  padding: 0 22px;
  border-right: 1px solid #ededed;
  height: $header-height;
  + .header-icon{
    padding: 0 28px;
  }
}
.header-icon{
  padding: 0 32px;
  svg{
    margin-bottom: -5px;
    cursor: pointer;
    font-size: 25px;
    fill: #8A8A8A;
  }
}

#header-wrap{
  //position: fixed;
  width: 100%;
  height: $header-height;
  padding: 0;
  margin: 0;
  background-color: #ffffff;
  -webkit-box-shadow: 0 3px  16px 0 rgba(0,0,0,.1);
  @include webkit(box-shadow, 0 3px  16px 0 rgba(0,0,0,.1));
  line-height: 60px;
}
</style>
