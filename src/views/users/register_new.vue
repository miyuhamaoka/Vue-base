<template>
  <h1>ユーザー登録</h1>

  <form action="">
    <fieldset>
      <label for="name">お名前:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        v-model="name"
      />
      <br />

      <label for="email">メールアドレス:</label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="~@~"
        v-model="email"
      />
      <br />

      <label for="zipcode">郵便番号:</label>
      <input
        type="text"
        name="zipcode"
        id="zipcode"
        placeholder="000-0000"
        v-model="zipcode"
      />
      <br />

      <label for="prefecture">住所</label>
      <input
        type="text"
        name="prefecture"
        id="prefecture"
        placeholder="adress"
        v-model="prefecture"
      />
      <br />

      <label for="tel">電話番号:</label>
      <input
        type="text"
        name="telephone"
        id="tel"
        placeholder="telephone number"
        v-model="tel"
      />
      <br />

      <span :class="iconType" @click="onClick"></span>
      <label for="pass">パスワード:</label>
      <input
        :type="pass"
        name="password"
        id="pass"
        placeholder="More than 6 characters"
        v-model="pass"
        class="input"
      />
      
      <br />

      <span :class="iconType" @click="onClick"></span>
      <label for="confirmPass">確認用パスワード:</label>
      <input
        :type="pass"
        name="confirmationPassword"
        id="pass"
        placeholder="Same password"
        v-model="confirmpass"
        class="input"
      />
      <br />
      <p>
        <button @click="submit">Submit</button>
      </p>
    </fieldset>
  </form>
</template>

<script>
import firebase from "@/main"


export default {
  data() {
    return {
      valid: true,
      name: "",
      email: "",
      // emailRules: [
      //   (v) => !!v || "メールアドレスを入力してください",
      //   (v) => /.+@.+\..+/.test(v) || "メールアドレスが不正です",
      // ],
      password: "",
      message: "",
      errorMessage: "",
    };
  },
  computed:{
    isValid(){
      console.log("isValid:", this.valid);
      return !this.valid  //validがtrueの時はfalseを返す
    }
  },
  methods: {
    validate(){
      this.$refs.form.validate();
    },
    submit() {
      console.log("registernew call");
      firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(async(result) => {
          console.log("success:", result);
          // await result.user.updateProfile{{displayName: this.name}}
          console.log("update user:", result.user)

          // const auth = {
          //   name: result.user.name,
          //   email: result.user.email,
          //   password: result.user.password,
          // };
          // sessionStorage.setItem("user", JSON.stringify(auth));

          this.$router.push("/");
        })
        .catch((error) => {
          console.log("fail:", error);
          // alert("ログインに失敗しました")
          // this.errorMessage = "ログインに失敗しました";
        });
    },
  },
};

</script>
