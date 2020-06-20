import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

// css files
// import './assets/css/base/variables.scss'
import './assets/css/base/reset.scss'
import './assets/css/base/common.scss'
import './assets/css/base/mixins.scss'
import './assets/css/base/function.scss'

import './assets/css/layout/views.scss'
import './assets/css/layout/sub.scss'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
