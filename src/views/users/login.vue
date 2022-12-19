<template>
  <div class="login">
    <div class="login-triangle"></div>
    <h2 class="login-header">Login Page</h2>
    <form class="login-container">
      <p>
        <input
          type="email"
          v-model="email"
          placeholder="Email address"
          autofocus
          required
        />
      </p>
      <!-- pattern="/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/" -->
      <p>
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
        />
      </p>
      <!-- pattern="[a-zA-Z0-9._%+-]{8, 15}" -->
      <p>
        <input type="submit" value="Login" @click="submit" />
        {{}}
      </p>
      <p v-if="message">{{ message }}</p>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import firebase from "@/firebase/firebase";

export default {
  data() {
    return {
      valid: true,
      email: "",
      password: "",
      message: "",
      errorMessage: "",
    };
  },
  //  新規作成画面で成功したらmessageを表示
  mounted() {
    if (localStorage.message) {
      this.message = localStorage.message;
      localStorage.message = ""; //リロードした際に空にする
    }
  },

  computed: {
    isValid() {
      console.log("isValid:", this.valid);
      return !this.valid; //validがtrueの時はfalseを返す
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    submit() {
      console.log("login call");
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          console.log("サクセス");
          console.log("user:", result.user);

          // ログインしたuser情報をsettionのsetItemに保存
          const auth = {
            displayName: result.user.displayName,
            email: result.user.email,
            uid: result.user.uid,
            refreshToken: result.user.refreshToken,
          };
          sessionStorage.setItem("user", JSON.stringify(auth));

          this.$router.push("/");
        })
        .catch((error) => {
          console.log("fail:", error);
          alert("ログインに失敗しました");
          this.errorMessage = "ログインに失敗しました";
        });
    },
    logout() {
      firebase.auth().signOut();
    },
  },
};
</script>

<style>
.error-message {
  font-size: 12px;
  color: red;
  display: none;
}
input:invalid + .error-message {
  display: block;
}
</style>
