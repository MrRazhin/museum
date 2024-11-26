import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./index.css";
import "./assets/tailwind.css";
import PrimeVue from "primevue/config";
import store from "./store";
import Aura from "@primevue/themes/aura";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.mount("#app");
