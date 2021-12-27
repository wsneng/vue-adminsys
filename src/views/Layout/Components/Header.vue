<template>
  <div id ="header-wrap">
    <div class="pull_left header-icon" @click="navMenuState()"> <svg-icon iconClass="list" className="list"></svg-icon></div>
    <div class="pull-right">
      <img :src="User_Img" class="pull_left user-img"/>
      <div class="userInfo pull_left"> 管理员 </div>
      <div class="header-icon pull_left"><svg-icon iconClass="quit" className="quit"></svg-icon></div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "../../../Icons/SvgIcon";
import userImg from "../../../Icons/svg/1.png"
import {useStore} from 'vuex'
export default {
  name: "Header",
  components: {SvgIcon},

  setup(){
    const User_Img = userImg;
    // vuex
    const store = new useStore();

    const navMenuState = () =>{
      store.commit('SET_Collapse');
    };
    return {
      User_Img,
      navMenuState
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/config";
@import "src/styles/main";
.user-img{
  border-radius: 30px;
  width: 45PX;
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
  position: fixed;
  /*top: 0;*/
  /*left: 250px;*/
  width: 84%;
  height: $header-height;
  padding: 0px;
  margin: 0px;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 3px  16px 0px rgba(0,0,0,.1);
  line-height: 60px;
}
</style>
