import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import ItemsTop from "../views/WelcomeCoffee.vue";
import ItemDetails from "../views/pages/itemDetails.vue";
import Cart from "../views/pages/cart.vue";
// import Home from './views/Home.vue'
import Login from "../views/users/login.vue";
import Register_new from "../views/users/register_new.vue";
// import firebase from "@/firebase/firebase";

const routes = [
  {
    path: "/",
    name: "WelcomeCoffee",
    component: ItemsTop,
    meta: { requiresAuth: true }, //認証済みの時のみ閲覧可能となるように定義
  },
  {
    path: "/pages/details",
    name: "itemDetails",
    component: ItemDetails,
  },
  {
    path: "/pages/cart",
    name: "cart",
    component: Cart
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/pages/cart.vue"),
  },
  {
    path: "/users/register_new",
    name: "register_new",
    component: Register_new,
    // component: () => import(/* webpackChunkName: "about" */ '../views/users/register_new.vue')
  },
  {
    path: "/users/login",
    name: "login",
    component: Login,
    // component: () => import(/* webpackChunkName: "about" */ '../views/users/login.vue')
  },
  {
    path: "/users/logout",
    name: "logout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/users/logout.vue"),
  },
  // {
  //   path: "/pages/details/:id",
  //   name: "details",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/pages/details.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//ページ認証の実装(ログインしてない場合はログインしないと入れない)
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth) {
    const user = sessionStorage.getItem("user") || "";
    console.log(JSON.parse(user)) 
    if (!user) {
      next({
        path: "/users/Login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }

    // firebase.auth().onAuthStateChanged((user:any) => {
    //   if (!user) {
    //     next({
    //       path: "/users/Login",
    //       query: {redirect: to.fullPath},
    //     });
    //   } else {
    //     next();
    //   }
    // });
  } else {
    next();
  }
});

export default router;
