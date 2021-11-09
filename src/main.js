import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
// import installElementPlus from './plugins/element'
// import elementPlus from 'element-plus'


const app = createApp(App)
// installElementPlus(app)
app.use(store).use(router).use(ElementPlus).mount('#app')
