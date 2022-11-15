<template>
  <header>
    <div>
      <router-link to="/">
      <img alt="coffee logo" src="../assets/header_logo.png" />
    </router-link>
      <router-link to="/pages/cart">ショッピングカート</router-link> |
      <router-link to="/users/register_new">新規登録</router-link> |
      <router-link to="/users/login">ログイン</router-link> |
      <router-link to="/users/logout">ログアウト</router-link>
    </div>

    <!-- <router-link to="/about">About</router-link> |
    <router-link to="/page1">Page1</router-link> -->
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
  margin-left: auto;
  list-style: none;
  display: flex;
}

.link > li {
  margin-top: 25px;
  padding: 8px;
}

#loginneed {
  color: red;
}
</style>
