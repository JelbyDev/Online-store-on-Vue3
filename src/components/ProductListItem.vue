<template>
  <div class="product-item">
    <div class="product-item__wrapper">
      <div class="product-item__image">
        <img
          src="@/assets/product-list-item.webp"
          alt="Описание картинки товара"
        />
      </div>
      <div class="product-item__price">
        <span>3 000 ₽</span> / <span class="app-old-price">7 000 ₽</span>
      </div>
      <div class="product-item__name">Название товара</div>
      <div class="product-item__btns">
        <button class="app-btn app-btn-orange">В корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-list-item",
};
</script>

<style scoped>
.product-item {
  padding: 0 13px 26px 13px;
}
.product-item__wrapper {
  border-radius: 10px;
  padding: 17px;
  transition-property: box-shadow, cursor;
  transition-duration: 0.3s;
}
.product-item__wrapper:hover {
  box-shadow: 0px 0px 3px 2px rgb(171 171 171 / 30%);
  cursor: pointer;
}
.product-item__image img {
  width: 100%;
  display: block;
}
.product-item__price {
  margin: 10px 0;
  font-size: 1.3rem;
  font-weight: bold;
}
.product-item__name {
  margin: 10px 0;
  font-size: 1.1rem;
  font-weight: bold;
  color: #8b8b8b;
}
</style>
