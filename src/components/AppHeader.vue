<template>
  <header class="header">
    <div class="header__wrapper content-wrapper">
      <img class="header__logo" src="@/assets/logo.svg" alt="Логотип сайта" />
      <div class="search">
        <input type="text" placeholder="Поиск по сайту..." />
      </div>
      <div>Корзина</div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  padding: 15px 0;
  box-shadow: 0px 3px 5px rgb(181 181 181 / 30%);
  position: relative;
  z-index: 1;
}
.header__wrapper {
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.header__logo {
  display: block;
  width: 90px;
}
</style>
