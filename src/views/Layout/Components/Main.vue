<template>
  <el-card class="box-card" id="main-wrap">
    <router-view/>
  </el-card>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style lang="scss" scoped>
@import "src/styles/config";
#main-wrap{
  /*top: 0;*/
  /*left: 250px;*/
  /*right: 0px;*/
  width: 98%;
  height: 90vh;
  padding: 0px;
  margin:15px 15px 0px 15px;
  border-bottom: none;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 3px  16px 0px rgba(0,0,0,.1);
  -webkit-box-sizing: border-box;
}
</style>
