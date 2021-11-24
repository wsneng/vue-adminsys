import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from "./Icons/SvgIcon";
// import installElementPlus from './plugins/element'
// import elementPlus from 'element-plus'

const app = createApp(App)
// installElementPlus(app)
// 自定义全局组件  param1:组件名称   p2:组件代码
app.component("SvgIcon1",SvgIcon)
// 解析
/**
 * require.context 读取指定目录的所有文件
 * 第一个： 目录
 * 第二个： 是否遍历子级目录
 * 第三个：定义遍历文件规则
 */

const requireAll= (requireContext)=>{
  return requireContext.keys().map(requireContext)
}
const req = require.context('./Icons/svg', false, /\.svg$/)
requireAll(req)

app.use(store).use(router).use(ElementPlus).mount('#app')
