import { createApp } from "vue";
import "@/style/style.scss";
import App from "@/App.vue";
// 引入 pinia
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// swiper
import "swiper/css";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.mount("#app");

const script = document.createElement("script");
script.src = "https://tianji.catnl.eu.org/check.js";
script.setAttribute("async", "");
script.setAttribute("defer", "");
script.setAttribute("data-website-id", "cm29m8akc0e056ba0p6etbs2i");
document.head.appendChild(script);

// PWA
navigator.serviceWorker.addEventListener("controllerchange", () => {
  // 弹出更新提醒
  console.log("站点已更新，刷新后生效");
  ElMessage("站点已更新，刷新后生效");
});
