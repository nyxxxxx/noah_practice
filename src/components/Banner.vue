<template>
  <swiper :modules="modules" :rtl="true" :slides-per-view="3" :space-between="16" :pagination="false"
    :navigation="true" :loop="true" :centeredSlides="false"
    :autoplay="{ delay: 4500, disableOnInteraction: false, reverseDirection: false }" @swiper="onSwiper"
    @slideChange="onSlideChange">
    <swiper-slide>
      <div class="banner-div">
        <div class="position-relative">
          <img src="@/assets/images/banner/banner-01.png" alt="" class="w-100">
        </div>
        <h5 class="fifth-title position-absolute">北海道薰衣草賞花趣～富良野6大花田、最佳賞花期整理</h5>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner-div">
        <div class="position-relative">
          <img src="@/assets/images/banner/banner-02.png" alt="" class="w-100">
        </div>
        <h5 class="fifth-title position-absolute">新宿美食2023懶人包，嚴選30家日本話題必訪餐廳</h5>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner-div">
        <div class="position-relative">
          <img src="@/assets/images/banner/banner-03.png" alt="" class="w-100">
        </div>
        <h5 class="fifth-title position-absolute">日本百大名山、關東區入門山推薦9選</h5>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner-div">
        <div class="position-relative">
          <img src="@/assets/images/banner/banner-04.png" alt="" class="w-100">
        </div>
        <h5 class="fifth-title position-absolute">感受日本歷史之古典藝能能樂＆ 能面展示</h5>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner-div">
        <div class="position-relative">
          <img src="@/assets/images/banner/banner-05.png" alt="" class="w-100">
        </div>
        <h5 class="fifth-title position-absolute">四國88寺朝聖之旅――遍路</h5>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner-div">
        <div class="position-relative">
          <img src="@/assets/images/banner/banner-06.png" alt="" class="w-100">
        </div>
        <h5 class="fifth-title position-absolute">想在日本自駕出遊必看！在日本開車必須知道的10件事情</h5>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';//swiper輪播器
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


export default {
  name: 'BannerComponent',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {//swiper設定
    const onSwiper = () => {
      // console.log(swiper);要使用的話上一行記得補參數swiper
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

<style lang="scss">
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //font css

.banner-div {
  h5 {
    bottom: 0;
    width: 100%;
    margin-bottom: 0;
    color: white;
    font-weight: 400;
    background-color: rgba(50,50,50,0.7);
    padding: 1rem 0;
    text-align: center;
  }
}
</style>
