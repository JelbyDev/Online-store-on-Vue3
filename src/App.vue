<template>
  <app-header></app-header>
  <app-main class="home-page">
    <home-banner></home-banner>
    <goods-products class="home-page__best-products"></goods-products>
    <section class="home-page__seo">
      <div class="app-content-wrapper">
        <h1>SEO text</h1>
        <p>SEO текст тестовая часть</p>
      </div>
    </section>
  </app-main>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppMain from "@/components/AppMain";
import AppFooter from "@/components/AppFooter.vue";

import HomeBanner from "@/components/HomeBanner.vue";
import GoodsProducts from "@/components/GoodsProducts.vue";

export default {
  components: {
    "app-header": AppHeader,
    "app-main": AppMain,
    "app-footer": AppFooter,
    "home-banner": HomeBanner,
    "goods-products": GoodsProducts,
  },
  data() {
    return {};
  },
};
</script>

<style>
html,
body {
  height: 100%;
  font-size: 16px;
}
.app-layout {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.app-content-wrapper {
  width: 1280px;
  margin: 0 auto;
  padding: 0 13px;
}
.app-h2-title {
  font-weight: bold;
  text-align: center;
  font-size: 2rem;
  margin: 20px 0;
}
.app-old-price {
  color: #ccc;
  text-decoration: line-through;
}
.app-btn {
  display: block;
  cursor: pointer;
  transition: background-color, color 0.3s;
  padding: 10px 15px;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 7px;
}
.app-btn-orange {
  background-color: #ff9a56;
  color: #fff;
}
.app-btn-orange:hover {
  background-color: #ffc198;
  color: #000;
}

.app-fl-4 {
  width: 25%;
}
</style>
