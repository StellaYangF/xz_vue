import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
// 默认axios不带cookie
axios.defaults.withCredentials=true;
// 让axios在发送请求时携带cookie
Vue.prototype.axios=axios;
// 子组件中：this.axios.get(...)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
