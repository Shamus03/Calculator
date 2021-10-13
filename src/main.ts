import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import fastclick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    fastclick(document.body)
  }, false)
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
