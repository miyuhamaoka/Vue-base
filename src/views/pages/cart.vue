<template>
  <div class="cartpage">
    <title>カート</title>
    <h2 class="menu-header">Cart Page</h2>
    <router-link to="/">-> MenuList Page</router-link>
    <p v-show="inCart">カートに商品がありません</p>
    <div v-show="!inCart"></div>
  </div>
</template>

<script>
import firebase from "@/firebase/firebase";

export default {
  mounted() {
    this.getCart();
  },
  methods: {
    async getCart() {
      console.log("ゲットかーと");
      const cartRef = firebase.firestore().collection("cartItems");
      const snapshot = await cartRef.get()
      console.log("スナップショット:",snapshot);
      
    },
  },
};
</script>
