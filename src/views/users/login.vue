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
          pattern="/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/"
          autofocus
          required/>
      </p>
      <p>
        <input 
        type="password" 
        v-model="password" 
        placeholder="Password" 
        pattern="[a-zA-Z0-9._%+-]{8, 15}"
        required/>
      </p>
      <p>
        <input 
        type="submit" 
        value="Login" 
        @click="submit" />
      </p>
    </form>
  </div>
</template>

const regex =
/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
<script>
import firebase from "@/main";

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
          console.log("success");
          console.log("user:", result.user);

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
          alert("ログインに失敗しました");
          this.errorMessage = "ログインに失敗しました";
        });
    },
  },
};
</script>

<!-- <script lang="ts"> //lang="ts"書いたらエラー消えた(なんで)
// import { mapActions } from 'vuex';
import firebase from "firebase/compat";
// import {auth} from "./main.ts"
import {ref} from "vue";
import {getAuth,signInWithEmailAndPassword,signOut,} from "firebase/auth";
// import { createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import { useRouter } from "vue-router";
import { useStore } from "vuex";


// const ui = new firebaseui.auth.AuthUI(auth)
const email = ref("")
const password = ref("")
const errMsg = ref("") //error message
const router = useRouter()
const login = () => {
  const auth = getAuth() //from firebase/auth
// eslint-disable-next-line no-undef
signInWithEmailAndPassword(getAuth(), email.value, password.value)
.then((data)=>{
  console.log("Successfully signed in!")
  console.log(auth.currentUser)
  router.push('/')
})
.catch((error)=>{
  console.log(error.code);
  // swich (error.code){
  //   case "auth/invalid-email":
  //     errMsg.value = "Invalid email";
  //     break;
  //     case "auth/user-not-found":
  //       errMsg.value = "No account with that email was found";
  //       break;
  //     case "aith/wrong-password":
  //       errMsg.value = "Incorrect password";
  //       break;
  //       default:
  // }
  alert(error.message)
})

const signInWithGoogle = () => {
  return

}
}


export default{
  setup(){
    const login_form = ref({})
    const register_form = ref({})
    const store= useStore()
  },
  data(){
    return{
      email:"",
      password:"",
    }
  },
  methods:{
    login(){
      return this.$router.push("/");
    }
  }
}

</script> -->
