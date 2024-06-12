<template>
  <h1>Teacher Name is : {{ name }}</h1>
</template>
<script>
export default {
  name: "Teacher",
  props: {
    name: String,
  },
};
</script>
<style></style>
