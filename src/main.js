import App from "@/App";
import { createApp } from "vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.mount("#app");
