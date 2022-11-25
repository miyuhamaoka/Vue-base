<template>
  <header class="header">
    <router-link to="/">
      <img alt="coffee logo" src="../assets/header_logo.png" class="logo" />
    </router-link>
    <div class="link">
      <router-link to="/pages/cart">ショッピングカート</router-link> |
      <router-link to="/users/register_new">新規登録</router-link> |
      <router-link to="/users/login">ログイン</router-link> |
      <router-link to="/users/logout">ログアウト</router-link>
    </div>
  </header>
</template>

<script>
export default {
  // name: "site-header",
  //   data() {
  //     return {};
  //   },
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
