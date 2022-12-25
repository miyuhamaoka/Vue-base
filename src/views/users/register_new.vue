<template>
  <div class="signup">
    <div class="login-triangle"></div>
    <h2 class="login-header">Sign Up Page</h2>
    <form class="login-container">
      <p>
        <input 
        type="text" 
        v-model="name" 
        placeholder="Name" 
        autofocus
        required />
      </p>
      <div class="error-message">*入力必須</div>
      <p>
        <input
          type="email"
          v-model="email"
          placeholder="Email address"
          pattern="/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/"
          required
        />
      </p>
      <div class="error-message">*入力必須</div>
      <p>
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          pattern="[a-zA-Z0-9._%+-]{8, 15}"
          required
        />
      </p>
      <div class="error-message">*入力必須</div>
      <p>
        <input type="submit" value="Sign Up" @click="submit" />
      </p>
      <p v-if="errorMessage" >{{errorMessage}}</p>
    </form>
  </div>
  <router-link to="/users/login">-> Login</router-link>
</template>

<script>
import firebase from "@/firebase/firebase";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errorMessage:""
    };
  },
  methods: {
    submit() {
      console.log("SUBMITでーす");
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(async (result) => {
          console.log("サクセス:", result);
          // displayNameがnullなのでnameを代入
          await result.user.updateProfile({ displayName: this.name });
          console.log("アップデートユーザー:", result.user);
          //ローカルメッセージに保管
          localStorage.message = "新規作成に成功しました"

          this.$router.push("/users/login");
        })
        .catch((error) => {
          console.log("エラーー", error);
          alert("ユーザーの新規作成に失敗しました");
          this.errorMessage = "ユーザーの新規作成に失敗しました"
        });
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
