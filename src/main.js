import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Cookie from 'vue-cookies'
import  'bootstrap'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner  } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp({
  store,
  render: h => h(App)
}).$mount('#app')

app.config.productionTip = false;
app.use(VueAxios, axios);
app.use(Cookie);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
library.add( faSpinner);