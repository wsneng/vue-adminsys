<template>
  <div id="nav-wrap">
    <h1 class="logo"><img src="../../../assets/logo.png" alt=""/></h1>
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
            <SvgIcon :iconClass="item.meta.icon" :className="item.meta.icon"></SvgIcon>
            <span style="font-size: 14px">{{item.meta.name}}</span>
          </template>
          <el-menu-item-group v-for="(Childitem,Childindex) in item.children" :key="Childindex">
            <el-menu-item :index="Childitem.path" style="font-size: 8px">
              <SvgIcon :iconClass="Childitem.meta.icon" :className="Childitem.meta.icon"></SvgIcon> {{Childitem.meta.name}}
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { reactive,ref,computed } from 'vue'
import { useRouter,useRoute} from 'vue-router'
import {useStore} from 'vuex'
export default {
  name: "Nav",
  setup(props,context) {
    const rooter = new useRouter()
    const rooters = reactive(rooter.options.routes);
    // 取参数
    const root = new useRoute()

    // vuex
    const store = new useStore();
    // const isCollapse = ref(false)

    /**
     * computed 监听值变化
     * @param key
     * @param keyPath
     */
    const isCollapse = computed(() => store.state.isCollapse);
    const handleOpen = (key, keyPath) => {
      // console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      // console.log(key, keyPath)
    }

    // 打印store
    console.log(store.state.isCollapse);
    console.log(store.getters.count);
    store.commit("SET_COUNT",110);
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
.logo{
  text-align: center;
  img{
    margin: 28px auto 25px;
    width: 92px;
  }
}


</style>
