<template>
  <h1>ログイン</h1>
  <div class="login">
    <div class="form-item">
      <input id="email" type="text" placeholder="Email address" v-model="email" />
    </div>
    <div class="login">
      <div class="form-item">
        <input
          id="password" type="text" placeholder="Password" v-model="password" />
          <!-- <p v-if="errMsg">{{errMsg}}</p> -->
      </div>
      <br />

      <button @click="login">ログイン</button>
      <!-- <button @click="logout">ログアウト</button> -->
      <p>
        <router-link to="/users/register_new">ユーザー登録はこちら</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts"> //lang="ts"書いたらエラー消えた(なんで)
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

</script>
