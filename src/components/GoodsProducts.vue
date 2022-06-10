<template>
  <section class="best-products">
    <div class="content-wrapper">
      <h2>Возможно, Вам понравится</h2>
      <div class="best-products__list">
        <product-item v-for="index of productItems" :key="index"></product-item>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      productItems: [1, 2, 3, 4, 5, 6, 7],
    };
  },
};
</script>

<style scoped>
.best-products__list {
  display: flex;
  flex-wrap: wrap;
}
</style>
