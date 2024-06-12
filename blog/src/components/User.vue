<template>
  <div>
    <!-- <h2>User Component</h2> -->
    <div class="user">
      <p>
        {{ data.name }}
      </p>
      <p>
        {{ data.email }}
      </p>
      <button v-on:click="getData(data.name)">Alert Name</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "User",
  props: {
    data: Object,
    getData: Function,
  },
};
</script>
<style>
.user {
  background-color: #8c7950;
  padding: 8px;
  color: wheat;
  margin-bottom: 10px;
}
</style>
