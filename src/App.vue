<template>
  <header-website></header-website>
  <main-website class="home-page">
    <banner></banner>
    <goods-products class="home-page__best-products"></goods-products>
    <section class="home-page__seo">
      <div class="content-wrapper">
        <h1>SEO text</h1>
        <p>SEO текст тестовая часть</p>
      </div>
    </section>
  </main-website>
  <footer-website></footer-website>
</template>

<script>
import Header from "@/components/common/Header";
import Main from "@/components/common/Main";
import Footer from "@/components/common/Footer.vue";

import Banner from "@/components/Banner.vue";
import GoodsProducts from "@/components/GoodsProducts.vue";

export default {
  components: {
    "header-website": Header,
    "main-website": Main,
    "footer-website": Footer,
    banner: Banner,
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
