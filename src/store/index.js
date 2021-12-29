import { createStore } from 'vuex'
import app from "./app"
import login from "./login"
export default createStore({
  modules: {
    app,
    login
  }
})
