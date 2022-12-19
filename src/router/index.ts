import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import ItemsTop from "../views/WelcomeCoffee.vue";
import ItemDetails from "../views/pages/itemDetails.vue";
import Cart from "../views/pages/cart.vue";
import Order from "../views/pages/order.vue";
import Thankyou from "../views/pages/thankyou.vue";
import Login from "../views/users/login.vue";
import Logout from "../views/users/logout.vue";
import Register_new from "../views/users/register_new.vue";


const routes = [
  {
    path: "/",
    name: "WelcomeCoffee",
    component: ItemsTop,
    meta: { requiresAuth: true }, //認証済みの時のみ閲覧可能となるように定義
  },
  {
    path: "/pages/details",  // "/pages/details/:item_id"
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
    path: "/pages/order",
    name: "order",
    component: Order
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
    component: Logout
  },
  {
    path: "/pages/thankyou",
    name: "thankyou",
    component: Thankyou
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

// //コンポーネントの中身を定数として作成
// const Item = {template:'<p>商品:{{$route.params.id}}</p>'}
// console.log("こんにちは:",Item)

// // params取得するための/:itemId(VueRouterインスタンスの生成)
// const router = createRouter({
//   history: createWebHashHistory(),
//   routes:[
//     {
//       path:"/pages/details/:itemId",
//       component:ItemDetails
//     }
//   ],
// });

//ページ認証の実装(ログインしてない場合はログインしないと入れない)
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth) {
    const user = sessionStorage.getItem("user") || ""; //nullの場合の型解除
    console.log(JSON.parse(user)) 
    if (!user) {
      next({
        path: "/users/Login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
