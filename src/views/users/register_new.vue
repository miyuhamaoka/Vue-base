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
        <button @click="register_new">Submit</button>
      </p>
      <p>
        <button @click="signInWithGoogle">Sign In With Google</button>
      </p>
    </fieldset>
  </form>
</template>


<script>

import { ref } from "vue";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,} from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("")
const password = ref("")
const router = useRouter()

const register = () => {
  const auth = getAuth() //from firebase/auth
  createUserWithEmailAndPassword(getAuth(),email.value,password.value)
  .then((data) => {
    console.log("Successfully registered!")
    console.log(auth.currentUser)
    router.push("/")
  })
  .catch((error) =>{
    console.log(error.code)
    alert(error.message)
  })
}
const signInWithGoogle = () => {
  return

}

import { User } from "../../../types";
import axios from "../../axios-auth";


export default {
  name: "register_new",
  data() {
    return {
      id: 0,
      name: "",
      email: "",
      zipcode: "",
      prefecture: "",
      telephone: "",
      password: "",
      confirmationPassword: "",
    };
  },

  // password目隠し
  // methods:{
  //   onClick: function(){
  //     this.isChecked = !this.isChecked;
  //   }
  // },
  // computed: {
  //   pass: function(){
  //     return this.isChecked ? "text" : "password";
  //   }
  // }
  // methods: {
  //   register() {
  //     const auth = getAuth();
  //     createUserWithEmailAndPassword(getAuth()) // <= email.value,password.value
  //       .then((userCredential) => {
  //         //Signed in
  //         const user = userCredential.user;
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //       });
  //     signOut(auth)
  //       .then(() => {
  //         //Sign-out successful
  //       })
  //       .catch((error) => {
  //         //An error happened
  //       });

      // axios.post(
      //   '/accounts:signUp?key=[AIzaSyB-qv8KlWZqVR_NA-_O11-HVM2OcpRLSVs]',
      //   {
      //     name: this.name,
      //     email: this.email,
      //     zipcode: this.zipcode,
      //     adress: this.prefecture,
      //     telephone: this.telephone,
      //     password: this.password,
      //     returnSecureToken:true
      //   }).then(responce=>{
      //     console.log(responce);
      //   })
    //     this.$router.push("users/login")
    }
//   }
// };
</script>
