// import { createApp } from "vue";
// import { createStore } from "vuex";
// // import firebase from 'firebase'
// // import { getFirestore } from 'firebase/firestore'
// // import firebase from "firebase/compat/app";
// import firebase from "firebase";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// // 新しいストアインスタンスを作成します
// export const store = createStore({
//   state: {
//     login_user: null, //ユーザー情報を保持するため
//     mutations: {
//       setLoginUser(state: any, user: any) {
//         state.Login_user = user; //ログインユーザー情報をstateのlogin_userにセットする
//       },
//       deleteLoginUser(state: any) {
//         state.login_user = null; //ログインユーザー情報(stateのlogin_user)を空にする
//       },
//     },
//     actions: {
//       async setLoginUser({ commit }: any, user: any) {
//         commit("setLoginUser", user); //mutationのログイン情報登録を呼び出し
//       },
//       async login() {
//         const google_auth_provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth().signInWithRedirect(google_auth_provider);
//       },
//       async logout() {
//         firebase.auth().signOut();
//       },
//       deleteLoginUser({ commit }: any) {
//         commit("deleteLoginUser"); //mutationのログインユーザー情報削除の呼び出し
//       },
//     },
//   },

// //   state() {
// //     return {
// //       count: 0,
// //     };
// //   },

// });

// // storeは データを入れるためのところ

// // createdでログイン確認
// // ログインボタン押した際はライフサイクル関係ないからmethods(まずmethodsで確認してみる)
