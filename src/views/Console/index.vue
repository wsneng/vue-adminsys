<template>
  <div>
    console
  </div>
</template>

<script>
import { useRouter,useRoute} from 'vue-router'
import { onMounted} from 'vue';
export default {
  name: "index",
  setup(){
    const router = useRouter()   // 在setup中创建router的变量
    const route = useRoute()
    // const {proxy} = getCurrentInstance()
    // console.log(proxy.$root.$route)
    // console.log(proxy.$root.$router)
    // console.log(proxy.$root.$route.query)
    onMounted(()=>{
      // 获取路由参数
      // console.log(route)
      // console.log(route.query)
      // console.log(route.params)
      // console.log(router.currentRoute.value)
      // console.log(router.currentRoute.value.params.id)
      // 传参是对象，
      // let info = decodeURIComponent(router.currentRoute.value.params.id)
      // let info = decodeURIComponent(route.query.id)
      // let detail = JSON.parse(info)
      // console.log(detail)

    })

    return {

    }
  }

}
</script>

<style scoped>

</style>
