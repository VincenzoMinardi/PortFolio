import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Importa il router
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import "./assets/main.css";

const app = createApp(App);

app.use(router); // Usa Vue Router
app.mount("#app");
