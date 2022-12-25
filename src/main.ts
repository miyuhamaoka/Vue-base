import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";



// createApp(App).use(router,store).mount("#app");
createApp(App).use(router).mount("#app");
// export default firebase

//axiosを使用できるように定義
// App.config.globalProperties.$axios = axios.create({
//     baseURL: 'http://localhost:8080/'
// })
