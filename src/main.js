import { createApp,h } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import  'bootstrap'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faImages, faHotel, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import router from './router'
import App from './App.vue'

const app = createApp({
    render() {
    return h(App)
  }
})


app.use(VueAxios, axios);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
library.add(faSpinner, faImages, faHotel, faShoppingCart);
app.mount('#app');