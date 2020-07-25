import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store}  from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSocialSharing from 'vue-social-sharing'


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueSocialSharing)
// Vue.use(vsPopup)


new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>',
}).$mount('#app')
