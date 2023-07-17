<template>
    <swiper :modules="modules" :rtl="true" :slides-per-view="3" :space-between="0" :pagination="{ clickable: true }"
        :navigation="true" :loop="true" :centeredSlides="true"
        :autoplay="{ delay: 2500, disableOnInteraction: false, reverseDirection: true }" @swiper="onSwiper"
        @slideChange="onSlideChange">
        <swiper-slide><img src="@/assets/images/banner/Banner01.png" alt="" class="w-100"></swiper-slide>
        <swiper-slide><img src="@/assets/images/banner/Banner03.png" alt="" class="w-100"></swiper-slide>
        <swiper-slide><img src="@/assets/images/banner/Banner01.png" alt="" class="w-100"></swiper-slide>
        <swiper-slide><img src="@/assets/images/banner/Banner03.png" alt="" class="w-100"></swiper-slide>
        <swiper-slide><img src="@/assets/images/banner/Banner01.png" alt="" class="w-100"></swiper-slide>
        <swiper-slide><img src="@/assets/images/banner/Banner03.png" alt="" class="w-100"></swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';//swiper輪播器
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
    name:'BannerComponent',
    components: {
    Swiper,
    SwiperSlide,
  },
  setup() {//swiper設定
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Autoplay, A11y]
    };
  },
}
</script>

<style></style>
