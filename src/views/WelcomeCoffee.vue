<template>
  <div class="toppage">
    <title>商品一覧</title>
    <h1>商品一覧</h1>
    <!--     
    <div v-if="items.length"> -->
    <div class="itemWrapper">
      <div v-for="item in items" :key="item.id" class="item">
        <router-link
          :to="{
            name: 'details',
            params: { id: item.id },
          }"
        >
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
import axios from "axios";
import { Vue } from "vue-class-component";

export default class WelcomeCoffee extends Vue {
  data() {
    return {
      items: [],
    };
  }
  created(){
    axios.get("")
    .then(responce=>{
      this.items = responce.data.documents;
    console.log(responce.data.documents);
    });
  }
  mounted() {
    axios
      .get("http://localhost:3000/items")
      .then((re) => {
        this.items = re.data;
        console.log(re);
        console.log(this.items);
      })
      // eslint-disable-next-line no-undef
      .catch((error) => console.log("fail:",error.message));
  }
}
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
