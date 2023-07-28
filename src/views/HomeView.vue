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
      <div class="A-title">
        <h1 class="title"><img src="@/assets/images/logo/title_logo.png" alt="">最新消息</h1>
      </div>
      <div class="A-body">
        <div class="row">
          <!-- A-div 左邊 -->
          <div class="col">
            <!-- https://japantravel.navitime.com/zh-tw/area/jp/guide/NTJtrv0485-zh-tw/ -->
            <!-- 大圖 -->
            <img src="@/assets/images/home_page/A-body01.png" alt="" class="w-100">
            <h4 class="fourth-title">【靜岡熱海】全攻略！景點、美食、溫泉24個必去景點</h4>
            <span class="content-little">2023.06.12</span>
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
                <span class="content-little">2023.03.16</span>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <img src="@/assets/images/home_page/A-body01.png" alt="" class="w-100">
              </div>
              <div class="col-9">
                <h5>參加九州魅力地點大投票！有機會抽中日本空運來台小禮物！</h5>
                <span class="content-little">2023.03.16</span>
              </div>
            </div>
          </div>
          <!-- A-div 右邊 -->
          <div class="col">
            <!-- https://japantravel.navitime.com/zh-tw/area/jp/guide/NTJnews0567-zh-tw/ -->
            <!-- 大圖 -->
            <img src="@/assets/images/home_page/A-body02.png" alt="" class="w-100">
            <h4 class="fourth-title">【富山・長野】立山黑部完美解析！必去景點一次告訴你</h4>
            <span class="content-little">2022.10.06</span>
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
                <span class="content-little">2023.03.16</span>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <img src="@/assets/images/home_page/A-body01.png" alt="" class="w-100">
              </div>
              <div class="col-9">
                <h5>參加九州魅力地點大投票！有機會抽中日本空運來台小禮物！</h5>
                <span class="content-little">2023.03.16</span>
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
  </div><!-- B-div container end -->
  <!-- C-div -->
  <div class="container">
    <div class="C-div">
      <div class="C-title">
        <h1 class="title"><img src="@/assets/images/logo/title_logo.png" alt="">熱門景點</h1>
      </div>
      <div class="C-body">
        <!-- C-第一區 -->
        <div class="row mb-4">
          <!-- 大圖 -->
          <div class="col">
            <tourist-spot title_type="h4" :folder_name=folder spot_file="C-body06.png" spot_title="伏見稻荷大社" />
          </div>
          <!-- 小圖*4 -->
          <div class="col">
            <div class="row row-cols-2 gy-3">
              <tourist-spot title_type="h5" :folder_name=folder spot_file="C-body02.png" spot_title="忠靈塔" />
              <tourist-spot title_type="h5" :folder_name=folder spot_file="C-body05.png" spot_title="大阪" />
              <tourist-spot title_type="h5" :folder_name=folder spot_file="C-body03.png" spot_title="神通町" />
              <tourist-spot title_type="h5" :folder_name=folder spot_file="C-body04.png" spot_title="平等院" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div><!-- C-div container end -->
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
import TouristSpot from '@/components/TouristSpot.vue';

export default {
  components: {
    NavBar,
    Banner,
    Footer,
    TouristSpot,
  },
  setup() {
    const folder = 'home_page'
    return {
      folder,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //fontcss

//banner-div css
.banner-div {
  margin: 30px 0;
}

//title-cumtom css
.title {
  margin-bottom: 30px;
  color: $primary-color;

  img {
    vertical-align: initial;
    margin-right: 1rem;
  }

}

// A-div css
.A-div {
  margin: 30px 0;

  .A-body {
    .content-little {
      color: gray;
    }

    .fourth-title {
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
}
</style>
