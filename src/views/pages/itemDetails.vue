<template>
  <div class="item-detailspage">
    <title>商品詳細</title>
    <h2 class="menu-header">ItemDetail Page</h2>
    <router-link to="/">-> MenuList Page</router-link>
    <div class="itemWrapper">
      <div v-for="item in items" :key="item.id" class="item">
        <!-- <router-link
          :to="{ name: 'itemDetails', query: { item_id: item.id } }"
          @click="goDetails"
        > -->
        <img
          :src="`../../${item.image_path}`"
          alt="{item.name}"
          width="210"
          height="210"
        />
        <div class="text">{{ item.name }}</div>
        <div>{{ item.description }}</div>
        <div>{{ item.price }}円</div>
      </div>
      <div>
        <div class="select">
          <label for="">数量：</label>
          <select name="quantity" v-model="quantity" @change="quantity()">
            <option value="1">1個</option>
            <option value="2">2個</option>
            <option value="3">3個</option>
            <option value="4">4個</option>
            <option value="5">5個</option>
          </select>
        </div>
        <br />
        <div class="price">
          <label for="totalPrice">合計金額：{{}}円</label>
        </div>
        <br />
        <button class="btn" @click="submit">{{ addToCart }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/firebase/firebase";

export default {
  data() {
    return {
      addToCart: "Add To Cart",
    };
  },
  created() {
    this.detailsId = this.$route.query.item_id;
    console.log("詳細:", this.detailsId);

    const detailRef = firebase
      .firestore()
      .collection("items")
      .doc(this.itemsId);

    console.log("チャットれふ:", detailRef);
  },
  mounted() {
    this.goDetails();
  },
  methods: {
    async goDetails() {
      console.log("詳細ページ");

      const detailRef = firebase.firestore().collection("items");
      const snapshot = await detailRef.get();
      console.log("スナップショッと:", snapshot);

      snapshot.forEach((doc) => {
        // this.items.push(doc.data())
        console.log("データ:", doc.data());
      });
    },
    submit() {
      console.log("カゴに入る");
      this.$router.push("/pages/cart");
    },
  },
};
</script>

<style>
/* .select{
  font-size: 20px;
  margin-top: 20px; 
}
.price{
  padding: 5%;
  font-size: 15px;
  font-size: 20px;
  margin-top: 20px; 
} */
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
/* .btn:hover{
  background:#f39213;
  color: black;
  border:none;
} */
</style>
