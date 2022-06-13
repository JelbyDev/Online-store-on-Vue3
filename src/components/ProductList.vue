<template>
  <div class="product-list">
    <product-list-item
      v-for="index of products"
      :key="index"
      class="app-fl-4"
    ></product-list-item>
  </div>
</template>

<script>
export default {
  name: "product-list",
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -13px;
}
</style>
