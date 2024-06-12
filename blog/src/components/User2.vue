<template>
  <div>
    <h2>User 2 Component</h2>
    <h3>Ashraf</h3>
    <h3>Ali</h3>
    <h3>Kakozai</h3>
    <!-- <h3 v-bind="$attrs">{{ data }}</h3> -->
    <h3 v-bind:id="id">{{ data }}</h3>
  </div>
</template>
<script>
export default {
  name: "User2",
  //   inheritAttrs: false,
  props: {
    id: String,
    data: String,
  },
};
</script>
<style>
#user-cmp {
  color: #f00;
}
</style>
