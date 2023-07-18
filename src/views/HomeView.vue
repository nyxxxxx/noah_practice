<template>
  <NavBar></NavBar>
  <!-- banner-div -->
  <div class="banner-div">
    <Banner></Banner>
  </div>
  <!-- A-div -->
  <div class="container">
    <div class="A-div">
      <!-- A-標題 -->
      <div class="A-title title">
        <h1><img src="@/assets/images/logo/title_logo.png" alt="">最新消息</h1>
      </div>
      <div class="A-body">
        <div class="row">
          <!-- A-div 左邊 -->
          <div class="col">
            <!-- https://japantravel.navitime.com/zh-tw/area/jp/guide/NTJtrv0485-zh-tw/ -->
            <!-- 大圖 -->
            <img src="@/assets/images/home_page/A-body01.png" alt="" class="w-100">
            <h2>【靜岡熱海】全攻略！景點、美食、溫泉24個必去景點</h2>
            <span>2023.06.12</span>
            <p>由東京都心搭乘新幹線就能抵達的人氣觀光勝地「熱海」不僅交通便利還有新鮮的海產美食，在這裡可以享充滿受懷舊風情的沙難和溫泉以及夏日煙火。</p>

            <hr>
            <!-- https://www.japan.travel/tw/tw/news/?page=2 -->
            <!-- 小圖*2 -->
            <div class="row" style="margin-top:30px; margin-bottom: 30px;">
              <div class="col-3">
                <img src="@/assets/images/home_page/A-body01.png" alt="" class="w-100">
              </div>
              <div class="col-9">
                <h5>參加九州魅力地點大投票！有機會抽中日本空運來台小禮物！</h5>
                <span>2023.03.16</span>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <img src="@/assets/images/home_page/A-body01.png" alt="" class="w-100">
              </div>
              <div class="col-9">
                <h5>參加九州魅力地點大投票！有機會抽中日本空運來台小禮物！</h5>
                <span>2023.03.16</span>
              </div>
            </div>
          </div>
          <!-- A-div 右邊 -->
          <div class="col">
            <!-- https://japantravel.navitime.com/zh-tw/area/jp/guide/NTJnews0567-zh-tw/ -->
            <!-- 大圖 -->
            <img src="@/assets/images/home_page/A-body02.png" alt="" class="w-100">
            <h2>【富山・長野】立山黑部完美解析！必去景點一次告訴你</h2>
            <span>2022.10.06</span>
            <p>前來日本關東旅行時，「立山黑部」絕對是個人氣景點，「立山黑部」又被稱作是日本的阿爾卑斯山，超高雪壁、震撼的景象，是一生中必來的絕景景點。</p>
            <hr>

            <!-- https://www.japan.travel/tw/tw/news/?page=2 -->
            <!-- 小圖*2 -->
            <div class="row" style="margin-top:30px; margin-bottom: 30px;">
              <div class="col-3">
                <img src="@/assets/images/home_page/A-body01.png" alt="" class="w-100">
              </div>
              <div class="col-9">
                <h5>參加九州魅力地點大投票！有機會抽中日本空運來台小禮物！</h5>
                <span>2023.03.16</span>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <img src="@/assets/images/home_page/A-body01.png" alt="" class="w-100">
              </div>
              <div class="col-9">
                <h5>參加九州魅力地點大投票！有機會抽中日本空運來台小禮物！</h5>
                <span>2023.03.16</span>
              </div>
            </div>

          </div>
        </div><!-- A-div row end -->
      </div><!-- A-div body end -->
    </div><!-- A-div end -->
  </div><!-- A-div container end -->

  <!-- B-div -->
  <div class="container">
    <div class="B-div">
      <h1>B-div思考中之後再補</h1>
    </div>
  </div>
  <!-- C-div -->
  <div class="container">
    <div class="C-div">
      <div class="C-title title">
        <h1><img src="@/assets/images/logo/title_logo.png" alt="">熱門景點</h1>
      </div>
      <div class="C-body">
        <!-- C-第一區 -->
        <div class="row mb-4">
          <!-- 大圖 -->
          <div class="col position-relative">
            <div class="img-box">
              <router-link to="/" class="overflow-hidden h-100">
                <img src="@/assets/images/home_page/C-body06.png" alt="" class="w-100">
                <h5 class="position-absolute">伏見稻荷大社</h5>
              </router-link>
            </div>
          </div>
          <!-- 小圖*4 -->
          <div class="col">
            <div class="row row-cols-2 gy-3">
              <!-- 小圖start -->
              <div class="col position-relative">
                <div class="img-box">
                  <router-link to="/" class="overflow-hidden h-100">
                    <img src="@/assets/images/home_page/C-body01.png" alt="" class="w-100">
                    <p class="position-absolute">忠靈塔</p>
                  </router-link>
                </div>
              </div>
              <div class="col position-relative">
                <div class="img-box">
                  <router-link to="/" class="overflow-hidden h-100">
                    <img src="@/assets/images/home_page/C-body05.png" alt="" class="w-100">
                    <p class="position-absolute">大阪</p>
                  </router-link>
                </div>
              </div>
              <div class="col position-relative">
                <div class="img-box">
                  <router-link to="/" class="overflow-hidden h-100">
                    <img src="@/assets/images/home_page/C-body03.png" alt="" class="w-100">
                    <p class="position-absolute">神通町</p>
                  </router-link>
                </div>
              </div>
              <div class="col position-relative">
                <div class="img-box">
                  <router-link to="/" class="overflow-hidden h-100">
                    <img src="@/assets/images/home_page/C-body04.png" alt="" class="w-100">
                    <p class="position-absolute">平等院</p>
                  </router-link>
                </div>
              </div>
              <!-- 小圖end -->
            </div>
          </div>
        </div>
        <!-- C-第二區 -->
        <div class="row mb-4 flex-row-reverse">
          <!-- 大圖 -->
          <div class="col position-relative">
            <div class="img-box">
              <router-link to="/" class="overflow-hidden h-100">
                <img src="@/assets/images/home_page/C-body06.png" alt="" class="w-100">
                <h5 class="position-absolute">伏見稻荷大社</h5>
              </router-link>
            </div>
          </div>
          <!-- 小圖*4 -->
          <div class="col">
            <div class="row row-cols-2 gy-3">
              <!-- 小圖start -->
              <div class="col position-relative">
                <div class="img-box">
                  <router-link to="/" class="overflow-hidden h-100">
                    <img src="@/assets/images/home_page/C-body01.png" alt="" class="w-100">
                    <p class="position-absolute">忠靈塔</p>
                  </router-link>
                </div>
              </div>
              <div class="col position-relative">
                <div class="img-box">
                  <router-link to="/" class="overflow-hidden h-100">
                    <img src="@/assets/images/home_page/C-body05.png" alt="" class="w-100">
                    <p class="position-absolute">大阪</p>
                  </router-link>
                </div>
              </div>
              <div class="col position-relative">
                <div class="img-box">
                  <router-link to="/" class="overflow-hidden h-100">
                    <img src="@/assets/images/home_page/C-body03.png" alt="" class="w-100">
                    <p class="position-absolute">神通町</p>
                  </router-link>
                </div>
              </div>
              <div class="col position-relative">
                <div class="img-box">
                  <router-link to="/" class="overflow-hidden h-100">
                    <img src="@/assets/images/home_page/C-body04.png" alt="" class="w-100">
                    <p class="position-absolute">平等院</p>
                  </router-link>
                </div>
              </div>
              <!-- 小圖end -->
            </div>
          </div>
        </div>
        <!-- C-第三區 -->
        <div class="row mb-4">
          <!-- 大圖 -->
          <div class="col position-relative">
            <div class="img-box">
              <router-link to="/" class="overflow-hidden h-100">
                <img src="@/assets/images/home_page/C-body06.png" alt="" class="w-100">
                <h5 class="position-absolute">伏見稻荷大社</h5>
              </router-link>
            </div>
          </div>
          <!-- 小圖*4 -->
          <div class="col">
            <div class="row row-cols-2 gy-3">
              <!-- 小圖start -->
              <div class="col position-relative">
                <div class="img-box">
                  <router-link to="/" class="overflow-hidden h-100">
                    <img src="@/assets/images/home_page/C-body01.png" alt="" class="w-100">
                    <p class="position-absolute">忠靈塔</p>
                  </router-link>
                </div>
              </div>
              <div class="col position-relative">
                <div class="img-box">
                  <router-link to="/" class="overflow-hidden h-100">
                    <img src="@/assets/images/home_page/C-body05.png" alt="" class="w-100">
                    <p class="position-absolute">大阪</p>
                  </router-link>
                </div>
              </div>
              <div class="col position-relative">
                <div class="img-box">
                  <router-link to="/" class="overflow-hidden h-100">
                    <img src="@/assets/images/home_page/C-body03.png" alt="" class="w-100">
                    <p class="position-absolute">神通町</p>
                  </router-link>
                </div>
              </div>
              <div class="col position-relative">
                <div class="img-box">
                  <router-link to="/" class="overflow-hidden h-100">
                    <img src="@/assets/images/home_page/C-body04.png" alt="" class="w-100">
                    <p class="position-absolute">平等院</p>
                  </router-link>
                </div>
              </div>
              <!-- 小圖end -->
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <!-- Footer-div -->
  <div class="footer-div">
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Navbar.vue';//navbar
import Banner from '@/components/Banner.vue';//banner
import Footer from '@/components/Footer.vue';//footer

export default {
  components: {
    NavBar,
    Banner,
    Footer,
  },

}
</script>

<style lang="scss">
@import '@/assets/css/color.scss'; //color css

//banner-div css
.banner-div {
  margin-bottom: 30px;
}

//title css
.title {
  margin-bottom: 30px;

  h1 {
    img {
      vertical-align: initial;
      margin-right: 1rem;
    }

    font-size: 2.5rem;
    font-weight: bold;
    color: $primary-color;
  }
}
//img-box css
.img-box {
      overflow: hidden;
      border-radius: 5px;

      img {
        filter: brightness(75%);
        transition: all 0.3s;
      }

      img:hover {
        filter: brightness(95%);
        transform: scale(1.1);
      }
    }
    
// A-div css
.A-div {
  margin: 30px 0;

  .A-body {
    span {
      font-size: 0.8rem;
      color: gray;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
}

// B-div css
.B-div {
  margin: 30px 0;
}

// C-div css
.C-div {
  margin: 30px 0;

  .C-body {
    p {
      left: 1.5rem;
      bottom: 0;
      font-size: 1.1rem;
      font-weight: bold;
      color: white;
    }

    h5 {
      left: 2.5rem;
      bottom: 1rem;
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
    }



  }
}
</style>
