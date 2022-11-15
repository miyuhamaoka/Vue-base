<template>
  <div class="page1">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>  -->
    <title>商品一覧</title>
    <h1>商品一覧</h1>
    <!-- 
    <div v-if="items.length"> -->
    <div v-for="item in items" :key="item.id">
      <!-- <router-link :to="{name: 'itemDetails', params:{id: item.id}}">
      <h2>{{item.title}}</h2>
    </router-link> -->
      <div class="item">
        <img
          class="img"
          :src="`../../${item.image_path}`"
          alt="{item.name}"
          width="210"
          height="210"
        />
        <p class="name">{{ item.name }}</p>
        <p class="price">価格: {{ item.price }}円</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class WelcomeCoffee extends Vue {
  // msg: String
  data() {
    return {
      items: [],
    };
  }
  mounted() {
    axios
      .get("/db.json")
      .then((re) => {
        this.items = re.data.items;
        console.log(re);
      })
      // eslint-disable-next-line no-undef
      .catch(() => console.log(error.message));
  }
}
</script>

<style>
item {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 20px;
  text-align: center;
}
</style>
