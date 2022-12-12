import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

import firebase from "firebase/app";
import "firebase/auth"
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {store} from './store'
import {mapGetters,mapMutations} from 'vuex'

// axios.defaults.baseURL="https://firestore.googleapis.com/v1/projects/[PROJECT_ID]/databases/(default)/documents";


const firebaseConfig = {
  apiKey: "AIzaSyB-qv8KlWZqVR_NA-_O11-HVM2OcpRLSVs",
  authDomain: "miyu-friendlychat.firebaseapp.com",
  projectId: "miyu-friendlychat",
  storageBucket: "miyu-friendlychat.appspot.com",
  messagingSenderId: "357755468027",
  appId: "1:357755468027:web:59fae83357e6dacd7a185e",
  measurementId: "G-HC54JS91DR",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

// const projectAuth = firebase.auth()
// const projectFirestore = firebase.firestore()
// const timestamp = firebase.firestore.FieldValue.serverTimestamp

// createApp(App).use(router,store).mount("#app");
createApp(App).use(router).mount("#app");
// export {projectAuth, projectFirestore, timestamp}

//axiosを使用できるように定義
// App.config.globalProperties.$axios = axios.create({
//     baseURL: 'http://localhost:8080/'
// })
