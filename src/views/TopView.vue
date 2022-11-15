<template>
    <div class="top">
      <!-- <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    </div>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import WelcomeCoffee from '@/components/Page1.vue'; // @ is an alias to /src
  
  @Options({
    components: {
      WelcomeCoffee,
    },
  })
  export default class ItemsTop extends Vue {}
  </script>
  