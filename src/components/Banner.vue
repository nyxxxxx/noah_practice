<template>
  <swiper :modules="modules" :rtl="true" :slides-per-view="perview" :space-between="16" :pagination="false" :navigation="true"
    :loop="true" :centeredSlides="false" :autoplay="{ delay: 4500, disableOnInteraction: false, reverseDirection: false }"
    @swiper="onSwiper" @slideChange="onSlideChange">

    <swiper-slide v-for="item in items" :key="item.id">
      <div class="banner-div">
        <div class="position-relative">
          <img :src="getImgUrl(item.imageSrc)" alt="" class="w-100">
        </div>
        <h5 class="fifth-title position-absolute">{{ item.content }}</h5>
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
import { onMounted , ref , onBeforeUnmount } from 'vue';


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
    //輪播內容
    const items = [
      {
        id:1,
        imageSrc:'banner-01.png',
        content:'薰衣草賞花趣～富良野6大花田、最佳賞花期整理',
      },
      {
        id:2,
        imageSrc:'banner-02.png',
        content:'新宿美食2023懶人包，嚴選30家話題必訪餐廳',
      },
      {
        id:3,
        imageSrc:'banner-03.png',
        content:'登山客必看！日本百大名岳關東區入門山推薦9選',
      },
      {
        id:4,
        imageSrc:'banner-04.png',
        content:'感受日本歷史之古典藝能能樂＆ 能面展示',
      },
      {
        id:5,
        imageSrc:'banner-05.png',
        content:'四國遍路巡禮：跟著弘海大師走遍四國88寺',
      },
      {
        id:6,
        imageSrc:'banner-06.png',
        content:'日本自駕出遊必看！日本開車必看的10件事情',
      },
    ]
    //輪播v-for取得圖片位置
    function getImgUrl(src){
      return require(`@/assets/images/banner/${src}`);
    }

    const perview = ref(3);
    function getSlideperView(){
      const screenWidth = window.innerWidth;
      if(screenWidth >= 1024){
        perview.value = 3;
      }
      else {
        perview.value = 1;
      }
    }

    onMounted(()=> {
      getSlideperView();
      window.addEventListener('resize' , getSlideperView);
    });

    onBeforeUnmount(()=> {
      window.removeEventListener('resize' , getSlideperView);
    });
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Autoplay, A11y],
      items,
      perview,
      getImgUrl,
      getSlideperView,
    };
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //font css

.banner-div {
  &:hover {
    cursor: pointer;
  }

  h5 {
    bottom: 0;
    width: 100%;
    margin-bottom: 0;
    color: white;
    font-weight: 400;
    background-color: rgba(50, 50, 50, 0.7);
    padding: 1rem 0.5rem;
    text-align: center;
  }
}
</style>
