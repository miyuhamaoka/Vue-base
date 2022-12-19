<template>
  <div class="cartpage">
    <title>カート</title>
    <h2 class="cart">Cart Page</h2>
    <router-link to="/">-> MenuList Page</router-link>
    <div v-show="!inCart"></div>
    <div v-if="cartItems.length > 0">
      <div v-for="cartItem in cartItems" :key="cartItem" class="cartItem">
        <img
          :src="`../../${cartItem.image_path}`"
          alt="{item.name}"
          width="210"
          height="210"
        />
        <div class="text">{{ cartItem.name }}</div>
        <div>{{ cartItem.price }}円</div>
      </div>
      <div>合計金額:{{ totalPrice }}円</div>

     <router-link to="/pages/order" class="btn">注文に進む</router-link>

      <!-- <div v-else-if="cartItems.length === 0">カートに商品がありません</div> -->
    </div>
  </div>
</template>

<script>
import firebase from "@/firebase/firebase";

export default {
  data() {
    return {
      cartItems: [],
      total: 0,
    };
  },
  async created() {
    const cartItemsRef = firebase.firestore().collection("cartItems");
    console.log("カートアイテム:", cartItemsRef);

    const snapshot = await cartItemsRef.get();
    console.log("スナップ:", snapshot);

    snapshot.forEach((doc) => {
      const data = { ...doc.data() };
      data.id = doc.id;
      console.log("データ:", data);
      this.cartItems.push(data);
    });
    console.log("中身:", this.cartItems);
  },
  // computed: {
  //   totalPrice() {
  //     console.log("金額:", this.cartItems);

  //     this.cartItems.map((data) => {
  //       this.total += data.price;
  //     });
  //     return this.total;
  //   },
  // },

  // mounted() {
  //   this.getCart();
  // },
  // methods: {
  //   async getCart() {
  //     console.log("ゲットかーと");
  //     const cartRef = firebase.firestore().collection("cartItems");
  //     const snapshot = await cartRef.get()
  //     console.log("スナップショット:",snapshot);

  //   },
  // },
};
</script>

<style>
.btn {
  width: 180px;
  display: block;
  height: auto;
  padding: 15px;
  color: #fff;
  background: #edac56;
  border: none;
  border-radius: 3px;
  outline: none;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  margin: auto;
  box-shadow: 0px 1px 4px rgb(61, 66, 9);
  -moz-box-shadow: 0px 1px 4px rgb(81, 70, 18);
  -webkit-box-shadow: 0px 1px 4px rgb(76, 78, 16);
  margin-bottom: 50px;
}
</style>
