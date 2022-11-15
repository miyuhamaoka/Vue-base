<template>
  <h1>ログイン</h1>
  <div class="login">
    <div class="form-item">
      <input id="email" type="text" placeholder="Email" v-model="email" />
    </div>
    <div class="login">
      <div class="form-item">
        <input
          id="password"
          type="text"
          placeholder="Password"
          v-model="password"
        />
      </div>

      <!-- <input type="checkbox" name="checkbox" id="check" />
      <label for="ckeckbox">ログイン情報を記憶する</label> -->
      <br />

      <button @click="login">ログイン</button>
      <p>
        <router-link to="/users/register_new">ユーザー登録はこちら</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    postData: {
      email: "",
      password: "",
    },
    remember: false,
  }),
  // mounted:{
  //   this.getCookieArray()
  // },
  methods: {
    login: function () {
      if (this.email.length) {
        return this.$router.push("/");
      } else {
        return this.$router.push("/users/register_new");
      }
    },
    // getCookieArray(){
    //   let arr = []
    //   if(document.cookie ! = ''){
    //     let tmp = document.cookie.split(';')
    //     for (let i = 0; i < tmp.length; i++){
    //       let data = tmp[i].split('=')
    //       arr [data[0]] = decodeURIComponent(data[1])
    //     }
    //     if(arr['email'] && arr['password']!= ''){
    //       this.remember = true
    //       this.postData.email = arr['email']
    //       this.postData.password = arr['password']
    //     }

    //   }
    // },
    // submit(){
    //   if(this.$refs.test_form.validate()){
    //     this.axios.post('/api/login', this.postData)
    //     .then(responce => {
    //       //ログイン成功
    //       this.loggedIn = true;

    //       if(this.remember){
    //         //ログイン情報を保存する場合
    //         document.cookie = 'email=' + this.postData.email
    //         document.cookie = 'password=' + this.postData.password
    //       }else {
    //         //保存しない場合 cookieを削除
    //         document.cookie = 'email=; expires=0'
    //         document.cookie = 'password=; expires=0'
    //       }
    //       this.$router.push('/')
    //     })
    //   }
    // }
  },
};
</script>
