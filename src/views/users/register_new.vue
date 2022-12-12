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
        required />
      </p>
      <p>
        <input
          type="email"
          v-model="email"
          placeholder="Email address"
          required/>
      </p>
      <p>
        <input 
        type="password" 
        v-model="password" 
        placeholder="Password" />
      </p>
      <p>
        <input 
        type="submit" 
        value="Sign Up" 
        @click="submit" />
      </p>
    </form>
  </div>
  <router-link to="/user/login">-> Login</router-link>
</template>

<script>
import firebase from "@/firebase/firebase";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
      console.log("SUBMITでーす");
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          console.log("サクセス！", result);
          // result.user.updateProfile(
          //   profile:{displayName : this.name}
          // )
        })
        .catch((err) => {
          console.log("エラーー", err);
        });
    },
  },
};
</script>
