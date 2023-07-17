<template>
  <NavBar></NavBar>
  <!-- banner-div -->
  <div class="banner-div">
    <Banner></Banner>
  </div>
  <!-- A-div -->
  <div class="container">
    <div class="A-div">
      <div class="A-title title">
        <h1><img src="@/assets/images/logo/title_logo.png" alt="">最新消息</h1>
      </div>
      <div class="A-body">
        <div class="row">

          <div class="col">
            <!-- https://japantravel.navitime.com/zh-tw/area/jp/guide/NTJtrv0485-zh-tw/ -->
            <img src="@/assets/images/home_page/A-body01.png" alt="" class="w-100">
            <h2>【靜岡熱海】全攻略！景點、美食、溫泉24個必去景點</h2>
            <span>2023.06.12</span>
            <p>由東京都心搭乘新幹線就能抵達的人氣觀光勝地「熱海」不僅交通便利還有新鮮的海產美食，在這裡可以享充滿受懷舊風情的沙難和溫泉以及夏日煙火。</p>

            <hr>

            <!-- https://www.japan.travel/tw/tw/news/?page=2 -->
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

          <div class="col">
            <!-- https://japantravel.navitime.com/zh-tw/area/jp/guide/NTJnews0567-zh-tw/ -->
            <img src="@/assets/images/home_page/A-body02.png" alt="" class="w-100">
            <h2>【富山・長野】立山黑部完美解析！必去景點一次告訴你</h2>
            <span>2022.10.06</span>
            <p>前來日本關東旅行時，「立山黑部」絕對是個人氣景點，「立山黑部」又被稱作是日本的阿爾卑斯山，超高雪壁、震撼的景象，是一生中必來的絕景景點。</p>
            <hr>

            <!-- https://www.japan.travel/tw/tw/news/?page=2 -->
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
        </div>
      </div>
    </div>
  </div>
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
$primary-color: #68BE8D; //若竹色
$secondary-color: #98D98E; //若綠
$support-color: #FFA589;

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
    }
  }
}

.B-div {
  margin: 30px 0;
}

.C-div {
  margin: 30px 0;
}</style>
