<template>
  <h1>ユーザー登録</h1>

  <form action="">
    <fieldset>
      <label for="fistName">お名前</label>
      <input type="text" name="firstName" id="firstName" placeholder="姓" />
      <br>
      <input type="text" name="lastName" id="lastName" placeholder="名" />
      <br>

      <label for="email">メールアドレス</label>
      <input type="text" name="email" id="email" placeholder="メールアドレス" />
      <br>

      <label for="zipcpde">郵便番号</label>
      <input type="text" name="zipcode" id="zipcode" placeholder="郵便番号" />
      <br>


      <label for="prefecture">都道府県</label>
      <input type="text" name="prefecture" id="prefecture" placeholder="都道府県" />
      <br>

      <label for="city">市区町村</label>
      <input type="text" name="city" id="city" placeholder="市区町村" />
      <br>


      <label for="aza">字丁目</label>
      <input type="text" name="aza" id="aza" placeholder="字丁目" />
      <br>


      <label for="building">建物名</label>
      <input type="text" name="building" id="building" placeholder="建物名" />
      <br>

      <label for="tel">電話番号</label>
      <input type="text" name="telephone" id="tel" placeholder="電話番号" />
      <br>

      <label for="pass">パスワード</label>
      <input type="pass" name="password" id="pass" placeholder="パスワード" />
      <br>

      <label for="confirmPass">建物名</label>
      <input type="pass" name="confirmationPassword" id="confirmPass" placeholder="確認用パスワード" />
      <br>

      <button @click="register_new">登録</button>
      <button>クリア</button>

    </fieldset>
  </form>
</template>

<script>
export default {
  name: "register_new",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    register_new: function () {
      this.$router.push("/user/login");
    },
  },
};
</script>
