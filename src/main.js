import { createApp, h } from "vue";

import "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faImages,
  faHotel,
  faShoppingCart,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import router from "./router";
import App from "./App.vue";

const app = createApp({
  render() {
    return h(App);
  },
});

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
library.add(faSpinner, faImages, faHotel, faShoppingCart, faUser);
app.mount("#app");
