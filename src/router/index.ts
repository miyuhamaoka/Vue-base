import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ItemsTop from '../views/WelcomeCoffee.vue'
// import Home from './views/Home.vue'
// import Login from '../views/users/Login'
// import Register_new from '../views/users/register_new'

const routes = [
  {
    path: '/',
    name: 'WelcomeCoffee',
    component: ItemsTop,
  },
  {
    path: '/pages/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/cart.vue'),
    // meta:{
    //   requiresAuth: true  認証済みの時のみ閲覧可能となるように定義
    // }
  },
  {
    path: '/users/register_new',
    name: 'register_new',
    component: () => import(/* webpackChunkName: "about" */ '../views/users/register_new.vue')
  },
  {
    path: '/users/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/users/login.vue')
  },
  {
    path: '/users/logout',
    name: 'logout',
    component: () => import(/* webpackChunkName: "about" */ '../views/users/logout.vue')
  },
  {
    path: '/pages/details/:id',
    name: 'details',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/details.vue')
  },
  // {
  //   path: '/',
  //   name: '',
  //   component: () => import(/* webpackChunkName: "about" */ '../.vue')
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) =>{
//   if(to.matched.some(record => record.meta.requiresAuth)){
//     if(!Store.state.isLogin){
//       next({
//         path: '/Login',
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     }
//   }
// })


export default router
