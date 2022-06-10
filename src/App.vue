<template>
  <Header></Header>
  <Main class="home-page">
    <Banner></Banner>
    <section class="home-page__best-products">
      <div class="content-wrapper">Блок с товарами</div>
    </section>
    <section class="home-page__seo">
      <div class="content-wrapper">
        <h1>SEO text</h1>
        <p>SEO текст тестовая часть</p>
      </div>
    </section>
  </Main>
  <Footer></Footer>
</template>

<script>
import styles from "@/css/reset.module.css";

import Header from "@/components/common/Header";
import Main from "@/components/common/Main";
import Footer from "@/components/common/Footer.vue";

import Banner from "@/components/Banner.vue";

export default {
  components: { Header, Main, Footer, Banner },
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
