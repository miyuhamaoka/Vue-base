<template>
  <h1>ログイン</h1>
  <div class="login">
    <div class="form-item">
      <input id="email" type="text" placeholder="Email" v-model="email" />
    </div>
    <div class="login">
      <div class="form-item">
        <input
          id="password" type="text" placeholder="Password" v-model="password" />
      </div>

      <!-- <input type="checkbox" name="checkbox" id="check" />
      <label for="ckeckbox">ログイン情報を記憶する</label> -->
      <br />

      <button @click="login">ログイン</button>
      <button @click="logout">ログアウト</button>
      <p>
        <router-link to="/users/register_new">ユーザー登録はこちら</router-link>
      </p>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
import {auth} from "./main.ts"
import {ref} from "vue";
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import { useRouter } from "vue-router";

// const ui = new firebaseui.auth.AuthUI(auth)

const email = ref("")
const password = ref("")
const router = useRouter()
const login = () => {
  const auth = getAuth() //from firebase/auth
// eslint-disable-next-line no-undef
createUserWithEmailAndPassword(getAuth(), email.value, password.value)
.then((data)=>{
  console.log("Successfully registered!")
  router.push('/')
})
.catch((error)=>{
  console.log(error.code);
  alert(error.message)
})

}

export default{
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

// export default {
//   name: "login",
//   data: () => ({
//     postData: {
//       email: "",
//       password: "",
//     },
//     remember: false,
//   }),
//   // mounted:{
//   //   this.getCookieArray()
//   // },
//   methods: {
//     login(){}
//     // ...mapActions(["login"])
//   },
// };
</script>

    <!-- // login: function () {
    //   if (this.email.length) {
    //     return this.$router.push("/");
    //   } else {
    //     return this.$router.push("/users/register_new");
    // } -->
