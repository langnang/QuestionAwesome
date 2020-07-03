import Vue from 'vue'
import './plugins/axios'
import './plugins/fontawesome'
import App from './App.vue'
import router from './routes'
import store from './store'
import './plugins/element.js'
import 'particles.js';

Vue.config.productionTip = false
Vue.use(require('vue-wechat-title'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.axios
  .get("https://langnang.github.io/src/json/particles.js/index.json")
  .then(res => {
    if (res.status === 200) {
      window.particlesJS('app', res.data);
    }
  })
