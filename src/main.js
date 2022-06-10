import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components/export";

//import router from './router'
//import store from './store'

import styles from "@/css/reset.module.css";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app
  //.use(store)
  //.use(router)
  .mount("#app");
