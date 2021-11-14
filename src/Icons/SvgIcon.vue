<template>
  <svg :class="svgClass" aria-hidden="true">
  <use :xlink:href="name"></use>
  </svg>

  <div>{{msg}}</div>
</template>

<script>
import {ref} from "vue";
export default {
  name: "SvgIcon",
  setup(){
   const msg = ref('123456')


    return{
      msg
    }
  }

}
</script>
<style scoped>

</style>
