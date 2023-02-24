import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import * as te from "tw-elements";

createApp(App).use(router).mount("#app");
