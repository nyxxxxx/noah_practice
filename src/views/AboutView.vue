<template>
  <NavBar></NavBar>
  <!-- banner start -->
  <div class="container-fluid gx-0">
    <div class="banner-div">
      <div class="container-lg d-flex justify-content-center align-items-center h-100">
        <h1 class="banner-title" data-aos="fade-up" data-aos-duration="800">關於我們</h1>
      </div>
    </div>
  </div>
  <!-- banner end -->
  <div class="container-lg">
    <bread-crumb></bread-crumb>
  </div>
  <!-- A-div start -->
  <div class="container-lg mb-5">
    <div class="A-div">
      <h2 class="sec-title text-center">Tabiru</h2>
      <p class="siexth-title lh-lg text-center">走進Tabiru，探索旅行的真諦，將旅程視為一種賞心悅目的待遇，將旅行視為一份禮遇。<br>
        我們對待每段旅程用心呵護，而旅行也將成為回憶中的珍藏。<br><br>
        Tabiru展現景點的全貌，包容優點和缺點，發掘其中的趣味和無窮可能。我們助您選擇，留下難忘的足跡，讓您走進精彩之旅！<br>
        架起旅人與景點的橋樑，這座橋寬度與深度將因每位曾駐足的您我共同塑造。歡迎來Tabiru，與我們一同創造屬於您的旅行奇蹟。<br></p>
    </div>
  </div>
  <!-- A-div end -->
  <!-- B-div start -->
  <div class="container-lg">
    <h2 class="sec-title text-center mb-5">我們有</h2>
    <div class="B-div position-relative">
      <div class="B-sign col-3" id="sign-1">
        <div class="sign-card" data-aos="fade-down">
          <img src="@/assets/images/about_page/B-sign-01.png" alt="" class="w-100">
          <h2 class="text-center sec-title">景<br>點</h2>
        </div>
      </div>
      <div class="B-sign col-3" id="sign-2">
        <div class="sign-card" data-aos="fade-down" data-aos-delay="400">
          <img src="@/assets/images/about_page/B-sign-02.png" alt="" class="w-100">
          <h2 class="text-center sec-title">美<br>食</h2>
        </div>
      </div>
      <div class="B-sign col-3" id="sign-3">
        <div class="sign-card" data-aos="fade-down" data-aos-delay="800">
          <img src="@/assets/images/about_page/B-sign-03.png" alt="" class="w-100">
          <h2 class="text-center sec-title">祭<br>典</h2>
        </div>
      </div>
    </div>
  </div>
  <!-- B-div end -->
  <!-- C-div start -->
  <div class="container-lg">
    <div class="C-div">
      <div class="row justify-content-center ">
        <div class="col-12 col-md">
          <img src="@/assets/images/about_page/C-body-01.png" alt="" srcset="" class="w-100" data-aos="flip-right">
        </div>
        <div class="col d-flex align-items-center">
          <p class="lh-lg siexth-title">我們期許Tabiru能成為旅行者心中的指南針，帶領他們踏上一段驚奇與探索的旅程、為您提供更多全面且有趣的旅遊資訊。<br><br>
            未來，Tabiru不僅是一個旅行資訊平台，更是一種旅行態度的代表。我們希望能激發每一位旅人的熱情，將旅程視為獨一無二的體驗，創造充滿回憶與意義的旅行。<br><br>
            透過Tabiru，我們將持續努力，呈現更深入、更真實的旅行內容，幫助旅人做出更明智的選擇，並留下美好的足跡，成為後人追尋的目標。<br>
          </p>
        </div>
      </div>
      <div class="row mb-5 justify-content-center flex-row-reverse ">
        <div class="col-12 col-md">
          <img src="@/assets/images/about_page/C-body-02.png" alt="" srcset="" class="w-100" data-aos="flip-right" data-aos-delay="200">
        </div>
        <div class="col d-flex align-items-center">
          <p class="lh-lg siexth-title">
            Tabiru的全球視野將不斷擴展，我們將規劃更多國家和地區的旅遊資訊，讓每一位旅行者都能找到屬於自己的夢幻旅程。<br><br>
            我們矢志將Tabiru打造成一個跨越國界的旅遊平台，讓每位旅行者可以透過我們的網站，輕鬆探索世界各地的美景與文化。<br><br>
            這是我們Tabiru的承諾，陪伴您跨越國界，尋覓世界的美好。讓我們一同開展這場跨越時空的奇幻旅程，探索未知的世界，留下難忘的回憶！<br><br>
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- C-div end -->
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Navbar.vue'
import BreadCrumb from '@/components/BreadCrumb.vue';
import Footer from '@/components/Footer.vue';
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from 'vue';

export default {
  components: {
    NavBar,
    BreadCrumb,
    Footer,
  },
  setup(){
    onMounted(()=>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      AOS.init({
        duration: 800,
        once: true,
      });
    });
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss';
@import '@/assets/css/font.scss';

.container-fluid {
  background-image: url('@/assets/images/about_page/about-banner.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  .banner-div {
    height: 500px;
    width: 100%;

    .banner-title {
      &:hover {
        cursor: default;
      }
      color: white;
    }
  }
}

.B-div {
  height: 650px;
  margin-bottom: 150px;

  // background-color: rgb(175, 255, 255);
  .B-sign {
    position: absolute;

    .sign-card {
      position: relative;
      overflow: hidden;
      border-radius: 5px;

      h2 {
        &:hover {
          cursor: default;
        }

        position: absolute;
        top: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%);
        color: white;
        border: 1px solid white;
        border-radius: 5px;
      }
    }
  }

  #sign-1 {
    left: 20%;
    transform: translateX(-50%);
  }

  #sign-2 {
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  #sign-3 {
    top: 20%;
    left: 80%;
    transform: translateX(-50%);
  }
}

.C-div {
  margin-bottom: 150px;
}

//RWD CSS
@media (max-width: 3000px) {
  .sign-card {
    h2 {
      padding: 20px 40px;
    }
  }
}

@media (max-width: 1399px) {
  .sign-card {
    h2 {
      padding: 10px 20px;
    }
  }
}

@media(max-width: 991px) {
  .B-div {
    height: 500px;
    margin-bottom: 75px;

    .sign-card {
      h2 {
        font-size: 1.5rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .B-div {
    height: 300px;

    .sign-card {
      h2 {
        font-size: 1.25rem;
        padding: 5px 10px;
      }
    }
  }
}

@media (max-width: 575px) {
  .B-div {
    height: 300px;
    margin-bottom: 0;
    .sign-card {
      h2 {
        font-size: 1.25rem;
        padding: 5px 10px;
      }
    }
  }
}</style>