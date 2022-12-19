<template>
  <div class="orderpage">
    <title>注文</title>
    <h2 class="order">Order Page</h2>
  </div>
  <form class="login-container">
    <div>お届け先情報</div>

    <p>
      <input type="text" v-model="name" placeholder="Name" autofocus required />
    </p>
    <div class="error-message">*入力必須</div>
    <p>
      <input
        type="tel"
        v-model="phone"
        placeholder="Phone number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
      />
    </p>
    <div class="error-message">*入力必須</div>
    <p>
      <input
        type="text"
        v-model="zipcode"
        placeholder="zipcode"
        pattern="\d{3}-?\d{4}"
        required
      />
    </p>
    <div class="error-message">*入力必須</div>
    <p>
      <input
        type="text"
        v-model="adress"
        placeholder="address"
        pattern=".*\S+.*"
        required
      />
    </p>
    <label for="text">配達日時(9:00～21:00): </label>
    <!-- <input type="datetime-local" name="example" step="1800"> -->
    <input type="date" />
    <!-- chromeは効かない？ -->
    <input type="time" name="data-time" value="09:00" min="09:00" max="21:00" step="1800" />
  </form>

  <button class="btn" @click="submit">注文完了！</button>
</template>

<script>


export default {
  mounted() {
    this.getOrder();
  },
  methods: {
    getOrder() {
      console.log("オーダー:");
    },
    submit() {
      console.log("終わり");

      this.$router.push("/pages/thankyou");
    },
  },
};
</script>
