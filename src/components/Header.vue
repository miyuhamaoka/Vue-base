<template>
  <header class="header">
    <router-link to="/">
      <img alt="coffee logo" src="../assets/header_logo.png" class="logo" />
    </router-link>
    <!-- ログインしていればユーザー名を表示 -->
    <div class="username">ようこそ
      <span>{{ auth && auth.displayName }}様</span></div>

    <div class="link">
      <router-link to="/pages/cart">Cart</router-link> |
      <router-link to="/users/register_new">Sign Up</router-link> |
      <router-link to="/users/login">Login</router-link>
      <!-- <router-link to="/users/logout">Logout</router-link> -->
      <button @click="logout">Logout</button>
      <!-- <p v-if="successLogout">{{successLogout}}</p> -->
    </div>
  </header>
</template>

<script>
import firebase from "@/firebase/firebase";

export default {
  data() {
    return {
      auth: null,
    };
  },
  mounted() {
    this.auth = JSON.parse(sessionStorage.getItem("user") || ""); //文字列をオブジェクトに変換
  },
  methods: {
    logout() {
      console.log("ログアウト");
      firebase
        .auth()
        .signOut()
        .then(() => {
          // this.successLogout = "ログアウトしました"
          localStorage.message = "ログアウトしました";
          this.$router.push("/users/login");
        })
        .catch((error) => {
          console.log("fail:", error);
        });
    },
  },
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.7rem 1rem;
  margin-bottom: 0.2rem;
  background-image: repeating-linear-gradient(
    45deg,
    transparent 0 3px,
    #f7af58 3px 6px
  );
  background-repeat: no-repeat;
  background-size: 100% 15px;
  background-position: left 0 bottom 7px;
  font-family: "Kosugi Maru", sans-serif;
}
.logo {
  padding: 13px;
  align-items: center;
}
.link {
  text-align: left;
  margin-left: auto;
  list-style: none;
  display: flex;
}
</style>
