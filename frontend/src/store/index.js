import Vue from 'vue'
import Vuex from 'vuex'
import model from './modules/model'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userInfo: {
      email: "xxxxxx@qq.com"
    }
  },
  modules: {
    model,
  },
})