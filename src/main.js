import { createApp } from "vue";
import "./styles/style.css";
import App from "./App.vue";
import store from "./store/store";
import router from "./router/router";
console.log(store.state.count);

console.log("Hello from main.js");
console.log(import.meta.env.VITE_APP_BASE_URL)

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let qValue = params.team_id || null;

let payload = {
  team_id: qValue,
};
store.dispatch("appBoot", payload);

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
