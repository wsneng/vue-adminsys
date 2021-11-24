<template>
  <div id="nav-wrap">
    <el-menu
      default-active="1"
      unique-opened
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      text-color="#fff"
      active-text-color="#fff"
      background-color="transparent"
      router
    >
      <template v-for="(item,index) in rooters" >
        <el-sub-menu :key="index" :index="item.path" v-if="item.hidden">
          <template #title>
            <SvgIcon1 :iconClass="item.meta.icon" :className="item.meta.icon"></SvgIcon1>
            <span style="font-size: 14px">{{item.meta.name}}</span>
          </template>
          <el-menu-item-group v-for="(Childitem,Childindex) in item.children" :key="Childindex">
            <el-menu-item :index="Childitem.path" style="font-size: 8px">
              <SvgIcon1 :iconClass="Childitem.meta.icon" :className="Childitem.meta.icon"></SvgIcon1> {{Childitem.meta.name}}
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { reactive,ref } from 'vue'
import { useRouter,useRoute} from 'vue-router'
export default {
  name: "Nav",
  setup(props,context) {
    const rooter = new useRouter()
    const rooters = reactive(rooter.options.routes);
    const root = new useRoute()
    const isCollapse = ref(false)
    // console.log(rooter.options.routes)

    const handleOpen = (key, keyPath) => {
      // console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      // console.log(key, keyPath)
    }
    return {
      rooters,
      isCollapse,
      handleOpen,
      handleClose,
    }
  },
}
</script>
<style lang="scss">
@import "src/styles/config";
@import "src/styles/elementUi";
#nav-wrap{
  width: $navMenu;
  height: 100vh;
  background-color: #344a5f;
}


</style>
