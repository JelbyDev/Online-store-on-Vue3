<template>
  <Header></Header>
  <Main></Main>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer.vue";

import styles from "@/css/reset.module.css";

export default {
  components: { Header, Main, Footer },
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
  display: flex;
}
</style>
