import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import MeLibUi from "@peachfull/me-lib-ui";
import "@peachfull/me-lib-ui/dist/style.css";

createApp(App).use(MeLibUi).mount("#app");
