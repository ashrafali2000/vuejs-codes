<template>
  <h1 ref="user">User Component</h1>
</template>
<script>
export default {
  name: "User3",
  beforeUnmount() {
    console.log("beforeUnmount---", this.$refs["user"]);
  },
  unmounted() {
    console.log("unmounted---", this.$refs["user"]);
  },
};
</script>
<style></style>
