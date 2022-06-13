<template>
  <app-header></app-header>
  <app-main class="home-page">
    <home-banner></home-banner>
    <goods-products class="home-page__best-products"></goods-products>
    <section class="home-page__seo">
      <div class="content-wrapper">
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
import GoodsProducts from "@/components/HomeGoodsProducts.vue";

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
}
.app-layout {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content-wrapper {
  width: 1280px;
  margin: 0 auto;
  padding: 0 13px;
}
</style>
