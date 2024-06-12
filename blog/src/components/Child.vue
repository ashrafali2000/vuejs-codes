<template>
  <div>
    <h2>{{ name }}</h2>
    <h3>
      User Name is :{{ userDetails.name }} and User email is :{{
        userDetails.email
      }}
    </h3>
    <button v-on:click="getDataFuc()">Click me</button>
  </div>
</template>
<script>
export default {
  name: "Child",
  props: {
    name: String,
    userDetails: Object,
    getDataFuc: Function,
  },
};
</script>
<style></style>
