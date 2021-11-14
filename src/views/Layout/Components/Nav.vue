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
            <el-icon><location/></el-icon>
            <span style="font-size: 14px">{{item.meta.name}}</span>
          </template>
          <el-menu-item-group v-for="(Childitem,Childindex) in item.children" :key="Childindex">
            <el-menu-item :index="Childitem.path" style="font-size: 8px">
              <div style="width: 16px;height: 16px" > <i  v-html="Childitem.meta.icon"></i> {{Childitem.meta.name}}</div>

            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </template>
    </el-menu>
    <SvgIcon1></SvgIcon1>
  </div>
</template>

<script>
import { reactive,ref,isRef, } from 'vue'
import { Location, } from '@element-plus/icons'
import { useRouter,useRoute} from 'vue-router'
export default {
  name: "Nav",
  components: {
    Location
  },
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
