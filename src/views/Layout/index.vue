<template>
  <div>
    <el-container id="layout">
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

export default {
  name: "index",
  components:{
    Nav,
    Header,
    Main
  },
  setup(){

  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/config";
#layout{
  background-color: #ffffff;
}
.el-header{
  padding: 0px;
  //width: ;
  //padding-left: 0px;
  //padding-right: 0px;
}
.el-aside{
  width: $navMenu;
}
.el-main{
  padding: 0px;
  margin: 0;
}
</style>
