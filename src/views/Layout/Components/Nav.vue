<template>
  <div id="nav-wrap">
    <h1 class="logo"><img src="../../../assets/logo.png" alt=""/></h1>
    <el-menu
      default-active="console"
      unique-opened
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      text-color="#fff"
      active-text-color="#ffd04b"
      background-color="transparent"
      router
    >
      <!-- router  是否启用 vue-router 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转-->
      <template v-for="(item,index) in routers" >
        <el-sub-menu :key="index" :index="item.path" v-if="item.hidden">
          <template #title>
            <svg-icon :iconClass="item.meta.icon" :className="item.meta.icon"></svg-icon>
            <span style="font-size: 14px">{{item.meta.name}}</span>
          </template>
          <el-menu-item-group v-for="(Childitem,Childindex) in item.children" :key="Childindex">
            <el-menu-item :index="Childitem.path" style="font-size: 8px">
              <svg-icon :iconClass="Childitem.meta.icon" :className="Childitem.meta.icon"></svg-icon> {{Childitem.meta.name}}
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { reactive,computed } from 'vue'
import { useRouter,useRoute} from 'vue-router'
import {useStore} from 'vuex'
import SvgIcon from "../../../Icons/SvgIcon";
export default {
  name: "Nav",
  components: {SvgIcon},
  setup() {
    const rooter = new useRouter();
    const routers = reactive(rooter.options.routes);
    // 取参数
    const root = new useRoute();
    // vuex
    const store = new useStore();

    /**
     * computed 监听值变化
     * @param key
     * @param keyPath
     */
    // const isCollapse = ref(false)
    const isCollapse = computed(() => store.state.app.isCollapse);
    return {
      routers,
      isCollapse,
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
  @include webkit(transition,all .3s ease 0s)
}
.el-menu-vertical-demo{
  border-right: 0;
}
.logo{
  text-align: center;
  img{
    margin: 28px auto 25px;
    width: 92px;
  }
}

.close{
  #nav-wrap{ width: $navMenuMin; }
  .logo img{
    width: 70%;
    margin: 16px auto;
    @include webkit(transition,all .3s ease 0s)
  }
}

</style>
