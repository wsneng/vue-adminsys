<template>
  <el-card class="box-card" id="main-wrap">
    {{bbb}}
    <router-view/>
  </el-card>
</template>


<script>
import {useStore} from "vuex"
export default {
  name: "Main",
  setup(){
    const store = new useStore();
    const bbb = store.state.login.str;

    return{
      bbb
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/config";
#main-wrap{
  width: 98%;
  height: 89vh;
  padding: 0;
  margin:15px 15px 0 15px;
  border-bottom: none;
  background-color: #ffffff;
  @include webkit(box-shadow, 0px 3px  16px 0px rgba(0,0,0,.1));
  -webkit-box-sizing: border-box;
}
</style>
