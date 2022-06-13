<template>
  <section class="good-products">
    <div class="app-content-wrapper">
      <h2 class="app-h2-title">Возможно, Вам понравится</h2>
      <product-list :products="products"></product-list>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
};
</script>

<style scoped>
.good-products {
  padding-top: 15px;
}
</style>
