import { createApp } from "vue";
import App from "./App.vue";
//import router from './router'
//import store from './store'

const createdApp = createApp(App);

createdApp
  //.use(store)
  //.use(router)
  .mount("#app");
