<template>
  <div>
    <h2>User 1 Component {{ nameHandler(userName) }}</h2>
    <button v-on:click="nameHandler('my name is ashraf ali')">Click me</button>
  </div>
</template>
<script>
export default {
  name: "User1",
  props: {
    nameHandler: Function,
  },
  data() {
    return {
      userName: "Ashraf",
    };
  },
};
</script>
<style></style>
