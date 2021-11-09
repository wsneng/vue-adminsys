<template>
  <div id ="header-wrap">
    头部
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
@import "src/styles/config";
#header-wrap{
  position: fixed;
  /*top: 0;*/
  /*left: 250px;*/
  /*right: 0px;*/
  width: 100%;
  height: $header-height;
  padding: 0px;
  margin: 0px;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 3px  16px 0px rgba(0,0,0,.1);

}
</style>
