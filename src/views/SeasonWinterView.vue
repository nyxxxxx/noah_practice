<template>
  <nav-bar></nav-bar>
  <div class="container-fluid banner-div">
    <div class="container d-flex align-items-center h-100">
      <h1 class="banner-title">雪舞冬日 梅花盛放</h1>
    </div>
  </div>
  <div class="container-lg">
    <bread-crumb />
  </div>
  <div class="container-lg logo-div text-center" style="margin: 0 auto;">
    <img src="@/assets/images/season/logo/winter-logo.png" alt="" style="width: 90px;">
    <h1 class="banner-title text-center">冬</h1>
  </div>
  <div class="container-xl" style="margin-bottom: 150px;">
    <div class="row position-relative">
      <img src="@/assets/images/season/winter/winter.png" alt="" class="w-100">
      <div class="position-absolute image-card" :style="{ marginTop: -titleHeight - 8 + 'px' }">
        <h2 class="sec-title" ref="titleElement">瑞雪飄揚的 <br> 冬日</h2>
        <img src="@/assets/images/season/winter/winter1.png" ref="imgElement" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-7" id="intro-content" :style="{ marginTop: imgHeight + 'px' }">
        <p class="lh-lg siexth-title">
          冬季是日本四季中獨具魅力的一段時光。當初雪飄落，大地被覆蓋著銀白色的絨毯，仿佛是一幅冰雪王國的畫卷。北海道的冬季特別值得一遊，您可以探索被白雪覆蓋的森林，享受冰雕節的奇妙體驗。而東京的迪士尼度假區在冬天也展現了獨特的魅力，用燈光點綴的冬日夜晚更顯得繽紛夢幻。
        </p>
      </div>
    </div>
  </div>
  <div class="container-lg masonry-div">
    <div id="C-title">
      <h1 class="title"><img src="@/assets/images/logo/title_logo.png" alt="">景點預覽</h1>
    </div>
    <masonry-wall :items="files" :ssr-columns="1" :column-width="300" :gap="12">
      <template #default="{ item }">
        <div>
          <img :src="getImageUrl(item)" alt="Image" style="width: 100%;" />
          <!-- <h1>{{ item }}</h1> -->
        </div>
      </template>
    </masonry-wall>
  </div>
  <Footer></Footer>
</template>

<script>
import NavBar from '@/components/Navbar.vue';//navbar
import Footer from '@/components/Footer.vue';//footer
import BreadCrumb from '@/components/BreadCrumb.vue';
import { ref, onMounted, nextTick, } from 'vue';
export default {
  name: 'TestView',
  components: {
    NavBar,
    Footer,
    BreadCrumb,
  },
  setup() {
    //A-div區塊調整
    const titleElement = ref(null);
    const titleHeight = ref(0);
    const imgElement = ref(null);
    const imgHeight = ref(0);

    const updateHeight = () => {
      if (titleElement.value) {
        titleHeight.value = titleElement.value.scrollHeight;
      }
      if (imgElement.value) {
        const pageWidth = window.window.innerWidth;
        if (pageWidth >= 992) {
          imgHeight.value = 0;
        }
        else {
          imgHeight.value = imgElement.value.scrollHeight;
        }
      }

    };

    onMounted(() => {
      nextTick(() => {
        updateHeight();
      });

      window.addEventListener('resize', updateHeight);
    });

    //瀑布流部分
    var files = ref([]);

    onMounted(() => {

      fetchfiles();
    });
    //讀取資料夾內圖片檔案名稱
    const season = 'winter';
    async function fetchfiles() {
      try {
        const response = await fetch(`http://localhost:3000/files?season=${season}`);
        if (!response.ok) {
          throw new Error('獲取檔案清單失敗！');
        }

        files.value = await response.json();
      } catch (error) {
        console.error(error.message);
      }
    }
    //img src
    function getImageUrl(filename) {
      return require(`@/assets/images/season/${season}/${filename}`);
    }
    return {
      titleElement,
      titleHeight,
      imgElement,
      imgHeight,
      getImageUrl,
      files,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //font css

$logo-color: #4294FF;

.banner-div {
  height: 550px;
  background-image: url('@/assets/images/season/winter/winter-banner.png');
  background-repeat: no-repeat;
  background-position: center center;

  // margin-bottom: 50px;
  h1 {
    display: inline-block;
    color: $logo-color;
    padding-bottom: 175px;
  }
}

.logo-div {
  h1 {
    color: $logo-color;
  }

  &::after {
    content: '';
    width: 4px;
    height: 150px;
    background-color: $logo-color;
    display: inline-block;
    margin-bottom: 0.5rem;
  }
}

.image-card {
  background-image: linear-gradient(180deg, #3c3ed0 0%, #74bcec 100%);
  color: white;
  width: 40%;
  right: 0;
  right: 12px;
  top: 100%;
  // margin-top: -5.25rem;
  padding: 0;

  h2 {
    padding: 50px 20px;
  }

  img {
    max-width: 80%;
  }
}

#intro-content {
  p {
    padding-left: 25px;
    font-weight: 500;
  }
}

.masonry-div {
  margin-top: 200px;
  margin-bottom: 100px;
}

@media(max-width: 991px) {
  #intro-content {
    p {
      padding-left: 0;
      // padding-top: 300px;
    }
  }
}
</style>