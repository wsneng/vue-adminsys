<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="IconName"></use>
  </svg>
</template>

<script>
import {ref,computed} from "vue";
export default {
  name: "SvgIcon",
  // props:['iconClass','className'],
  props:{
    iconClass:{
      type:String,   // 定义接受值的类型
      required: true
    },
    className:{
      type: Array,
      default: () => []
    }
  },
  setup(props){
    const msg = ref('123456')
    /**
     * 监听属性变化，并计算属性
     */
    const IconName = computed(() => `#icon-${props.iconClass}`)
    const svgClass = computed(()=> {
      if (props.className) {
        return `svg-icon ${props.className}`
      }else {
        return `svg-icon`
      }
    })
    return{
      msg,
      IconName,
      svgClass
    }
  }

}
</script>
<style lang="scss">
.svg-icon{
  width: 1em;
  height: 1em;
  fill: currentColor;
  font-size: 20px;
  margin-right: 10px;
}
</style>
