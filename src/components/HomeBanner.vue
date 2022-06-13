<template>
  <section class="home-page__banner banner">
    <div class="app-content-wrapper">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        navigation
        :pagination="{ clickable: true, dynamicBullets: true }"
      >
        <swiper-slide>
          <picture>
            <img src="@/assets/banner-slide.webp" alt="Описание слайда" />
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <img src="@/assets/banner-slide.webp" alt="Описание слайда" />
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <img src="@/assets/banner-slide.webp" alt="Описание слайда" />
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <img src="@/assets/banner-slide.webp" alt="Описание слайда" />
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <img src="@/assets/banner-slide.webp" alt="Описание слайда" />
          </picture>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
// Import Swiper Vue.js components
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style scoped>
.swiper-pagination-bullet {
  padding: 7px;
}
</style>
