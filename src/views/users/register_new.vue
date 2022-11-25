<template>
  <h1>ユーザー登録</h1>

  <form action="">
    <fieldset>
      <label for="fistName">お名前:</label>
      <span>(性)</span>
      <input type="text" name="firstName" id="firstName" placeholder="姓" />
      <span>(名)</span>
      <input type="text" name="lastName" id="lastName" placeholder="名" />
      <br />

      <label for="email">メールアドレス:</label>
      <input type="text" name="email" id="email" placeholder="メールアドレス" />
      <br />

      <label for="zipcpde">郵便番号:</label>
      <input type="text" name="zipcode" id="zipcode" placeholder="郵便番号" />
      <br />

      <label for="prefecture">住所１(都道府県):</label>
      <input
        type="text"
        name="prefecture"
        id="prefecture"
        placeholder="都道府県"
      />
      <br />

      <label for="city">住所２(市区町村):</label>
      <input type="text" name="city" id="city" placeholder="市区町村" />
      <br />

      <label for="aza">住所３(字丁目):</label>
      <input type="text" name="aza" id="aza" placeholder="字丁目" />
      <br />

      <label for="building">住所４(建物名):</label>
      <input type="text" name="building" id="building" placeholder="建物名" />
      <br />

      <label for="tel">電話番号:</label>
      <input type="text" name="telephone" id="tel" placeholder="電話番号" />
      <br />

      <label for="pass">パスワード:</label>
      <input type="pass" name="password" id="pass" placeholder="パスワード" />
      <br />

      <label for="confirmPass">確認用パスワード:</label>
      <input
        type="pass"
        name="confirmationPassword"
        id="confirmPass"
        placeholder="確認用パスワード"
      />
      <br />

      <button @click="registerData">登録</button>
    </fieldset>
  </form>
</template>

<script>
// import { ref } from "vue";
// import { User } from "../../../types";
// import axios from "axios";

export default {
  name: "register_new",
  data() {
    return {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      zipcode: "",
      prefecture: "",
      city: "",
      aza: "",
      building: "",
      telephone: "",
      password: "",
      confirmationPassword: "",
      logined: false,
    };
  },

  methods: {
    async registerData() {
      await fetch("http://localhost:3000/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.firstName + " " + this.lastName,
          email: this.email,
          zipcode: this.zipcode,
          adress: this.prefecture + this.city + this.aza + this.building,
          telephone: this.telephone,
          password: this.password,
        }),
      });
      this.$router.push("/users/login");
    },
  },
};
</script>
