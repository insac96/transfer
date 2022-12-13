import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Import Util
import * as util from './util'
import * as bank from './util/bank'
import * as meta from './util/meta'
import * as history from './util/history'

// Import Component
import Banks from './components/banks.vue'
import Money from './components/money.vue'

// Config
Vue.config.productionTip = false

// Init Util
Vue.prototype.$util = util
Vue.prototype.$bank = bank
Vue.prototype.$meta = meta
Vue.prototype.$history = history

// Init Component
Vue.component('UiBanks', Banks)
Vue.component('UiMoney', Money)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
