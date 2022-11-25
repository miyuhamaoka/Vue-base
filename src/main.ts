import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


createApp(App).use(router).mount('#app')


//axiosを使用できるように定義
// App.config.globalProperties.$axios = axios.create({
//     baseURL: 'http://localhost:8080/'
// })
