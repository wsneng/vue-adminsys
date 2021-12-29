<template>
  <div>
    <el-container id="layout" :class="[menuStatus ? 'close' : 'open']">
      <el-aside width="250px">
        <Nav/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <Main/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import Nav from './Components/Nav'
import Header from './Components/Header'
import Main from './Components/Main'
import {useStore} from 'vuex'
import {computed} from "vue";
import app from "../../store/app";
export default {
  name: "index",
  components:{
    Nav,
    Header,
    Main
  },
  setup(){
    const store = new useStore();
    const menuStatus = computed(()  => store.state.app.isCollapse );
    return {
      menuStatus,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/config";
#layout{
  background-color: #ffffff;
}
.el-header{
  padding: 0;
}
.el-aside{
  width: $navMenu;
}
.el-main {
  padding: 0;
  margin: 0;
}
.close{
  .el-aside{
    @include webkit(transition,all .3s ease 0s);
    width: $navMenuMin;
  }
}
</style>
