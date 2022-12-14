<template>
  <div class="toppage">
    <title>商品一覧</title>
    <h2 class="menu-header">MenuList Page</h2>
    <div class="itemWrapper">
      <div v-for="item in items" :key="item.id" class="item">
        <router-link
          :to="{ name: 'itemDetails', query: { item_id: item.id } }"
          @click="goDetails"
        >
          <!-- @click="goDetails(item.id)" -->
          <img
            :src="`../../${item.image_path}`"
            alt="{item.name}"
            width="210"
            height="210"
          />
          <div class="text">{{ item.name }}</div>
          <div>価格: {{ item.price }}円</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/firebase/firebase";

export default {
  data() {
    return {
      items: [],
      detailsId: "",
      id: "",
      name: "",
    };
  },

  mounted() {
    this.getItems();
    // const itemRef = firebase.firestore().collection("items").doc(this.id)
    this.goDetails();
  },
  methods: {
    async getItems() {
      console.log("getItemコール");
      //呼び出すたびに追加にならないよう、データを初期化してから配列に詰める
      this.items = [];

      const itemRef = firebase.firestore().collection("items");
      const snapshot = await itemRef.get();
      console.log("スナップショット:", snapshot);
      //データを取得
      snapshot.forEach((doc) => {
        // const data = {
        //   name: doc.data().name,
        //   price: doc.data().price,
        //   type: doc.data().type,
        //   image_path: doc.data().image_path,
        //   description: doc.data().description,
        //   deleted: doc.data().deleted,
        // };
        const data = { ...doc.data() };
        data.id = doc.id;
        console.log("データ:", data);

        this.items.push(data);
        console.log(this.items);
      });
    },

    async goDetails() {
      console.log("ゴ-詳細:", this.item_id);
      console.log("これ:", this.items.name);

      const detailRef = firebase.firestore().collection("cartItems");

      // const db = firebase.firestore();
      // db.collection("cartItems").add({
      //     // id: this.id,
      //     // name: this.name,
      //     items:this.items
      //   })
      //   .then((result) => {
      //     console.log("できた:", result);
      //     this.body = "";
      //   })
      //   .catch((error) => {
      //     console.log("失敗:", error);
      //   });

      // this.$router.push({
      //   name:"Items",
      //   params:{
      //     id:this.items.id,
      //     name:this.items.name,
      //     description:this.items.description,
      //     price:this.items.price,
      //     image_path:this.items.image_oath
      //   }
      // })

      // const detailRef = firebase.firestore().collection("items");
      // const id = await detailRef.doc().id;
      // console.log("ゲット詳細:", id); //なんのid?

      // const detailRef = firebase.firestore().collection("items")
      // const snapshot = await detailRef.get()
      // console.log("ゲット詳細:",snapshot)
      // snapshot.forEach(doc =>{
      //   console.log(doc.data())})

      //   const data = {...doc.data()}
      //   data.id = doc.id
      //   console.log("データ？",data)
      // })

      //   const detailRef = firebase.firestore().collection("cartItems").doc(this.detailId);
      //   detailRef.collection("cart").add({
      //       item: this.body,
      //       id: this.auth.id,
      //       name: this.auth.displayName,
      //       price: this.auth.price,
      //       image_path: this.auth.image_path,
      //     })
      //     .then((result) => {
      //       console.log("できた:", result);
      //       this.body = "";
      //     })
      //     .catch((error) => {
      //       console.log("失敗:", error);
      //     });
    },
  },
};
</script>

<style>
.itemWrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 20px;
  text-align: center;
}
.item {
  border: #f0a169 2px solid;
  padding: 10px;
  width: 350px;
  margin: 15px auto;
}
.name {
  position: relative;
  margin-bottom: 0.2rem;
  border-bottom: 5px solid #f0a169;
  color: #353535;
  font-size: 15px;
  font-weight: bold;
  display: block;
  font-family: "Kosugi Maru", sans-serif;
}
</style>
