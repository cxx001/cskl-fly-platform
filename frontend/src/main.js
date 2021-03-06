import Vue from 'vue'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less';
import App from './App'
import store from './store'
import router from './router'
import { VueAxios } from './utils/request'
import IpcRenderer from '@/utils/ipcRenderer'
import HotKeyInput from '@/utils/shortcut/index.js'

Vue.use(antd)
// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
// 全局注入IPC
Vue.use(IpcRenderer)
// 快捷键框组件
Vue.use(HotKeyInput)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
