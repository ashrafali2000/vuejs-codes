<template>
  <div>
    <div class="card">
      <!-- <slot>Default Child 1 Component</slot> -->
      <header>
        <slot name="header"></slot>
      </header>
      <content>
        <slot name="main"></slot>
      </content>
      <footer>
        <slot name="footer"> <button>Click Me</button></slot>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "Child1",
};
</script>
<style scoped>
.card {
  width: 170px;
  border: 2px solid red;
  padding: 20px;
  text-align: center;
}
</style>
