import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue3-cookies'
import  'bootstrap'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner  } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'

const app = createApp({App})

app.use(VueAxios, axios);
app.use(VueCookies);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
library.add( faSpinner);
app.mount('#app');