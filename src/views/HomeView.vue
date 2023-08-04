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
          <!-- A-div 左邊、右邊 v-for -->
          <div class="col-md col-lg-6" v-for="item in contentA" :key="item.id">
            <!-- https://japantravel.navitime.com/zh-tw/area/jp/guide/NTJtrv0485-zh-tw/ -->
            <!-- 大圖 -->
            <div class="img-box rounded">
              <router-link to="">
                <img :src="getImgUrl(item.bigImgSrc)" alt="" class="news-img w-100 rounded">
              </router-link>
            </div>
            <h4 class="fourth-title news-title" style="margin-top: 0.5rem;">{{ item.bigTitle }}</h4>
            <span class="news-date">{{ item.bigDate }}</span>
            <p>{{ item.bigContent }}</p>

            <hr class="d-none d-sm-block">
            <!-- https://www.japan.travel/tw/tw/news/?page=2 -->
            <!-- 小圖*2 -->
            <div class="row">
              <div v-for="(smallItem, smallIndex) in item.smallContents" :key="smallIndex" class="col-sm-12 col-md-6 col-lg-12"
                style="margin-top:30px; margin-bottom: 30px;">
                <div class="row">
                  <div class="col-12 col-sm-4 col-lg-3 d-flex align-items-center">
                    <router-link to="">
                      <div class="img-box rounded">
                        <img :src="getImgUrl(smallItem.smallImgSrc)" alt="" class="news-img w-100 rounded">
                      </div>
                    </router-link>
                  </div>
                  <div class="col-12 col-sm-8 col-lg-9 ">
                    <h5 class="fifth-title news-title">{{ smallItem.smallTitle }}</h5>
                    <span class="news-date">{{ smallItem.smallDate }}</span>
                    <p class="text-truncate">{{ smallItem.smallContent }}</p>

                  </div>
                </div>

              </div>
            </div>

          </div>

        </div><!-- A-div row end -->
      </div><!-- A-div body end -->
    </div><!-- A-div end -->
  </div><!-- A-div container end -->

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
          <div class="col-sm-12 col-md mb-3">
            <tourist-spot title_type="h4" :folder_name=folder spot_file="C-body06.png" spot_title="伏見稻荷大社" router_name="/area/kansai/kyoto" />
          </div>
          <!-- 小圖*4 -->
          <div class="col-sm-12 col-md">
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
    const folder = 'home_page';
    const contentA = [
      {
        id: 'left',
        bigImgSrc: 'A-body-01.png',
        bigTitle: '【靜岡熱海】全攻略！景點、美食、溫泉24個必去景點',
        bigDate: '2023.06.12',
        bigContent: '由東京都心搭乘新幹線就能抵達的人氣觀光勝地「熱海」不僅交通便利還有新鮮的海產美食，在這裡可以享充滿受懷舊風情的沙難和溫泉以及夏日煙火。',
        smallContents: [
          {
            smallImgSrc: 'A-body-03.png',
            smallTitle: '#下次的日本旅行 我想去〇〇！贈獎活動',
            smallDate: '2023.03.01',
            smallContent: '分享 #下次的日本旅行 想再度造訪的景點，或是沒去過但想去的地方',
          },
          {
            smallImgSrc: 'A-body-04.png',
            smallTitle: '#參加九州魅力地點大投票！抽小禮物！',
            smallDate: '2023.05.15',
            smallContent: '請上我們的「玩出屬於我的日本-九州/北海道 我的心日常」網頁，選出你認為最有魅力的景點！',
          },
        ],
      },
      {
        id: 'right',
        bigImgSrc: 'A-body-02.png',
        bigTitle: '【富山・長野】立山黑部完美解析！必去景點一次告訴你',
        bigDate: '2023.07.02',
        bigContent: '前來日本關東旅行時，「立山黑部」絕對是個人氣景點，「立山黑部」又被稱作是日本的阿爾卑斯山，超高雪壁、震撼的景象，是一生中必來的絕景景點。',
        smallContents: [
          {
            smallImgSrc: 'A-body-05.png',
            smallTitle: '#繪馬許願 數位繪馬線上祈福活動抽好禮',
            smallDate: '2023.03.01',
            smallContent: '從活動網站下載數位繪馬，寫下你的願望，將圖片上傳到個人的Instagram或在指定Facebook貼文中留',
          },
          {
            smallImgSrc: 'A-body-06.png',
            smallTitle: '#日本東北魅力大！玩出屬於「你」的東北',
            smallDate: '2023.01.22',
            smallContent: '歡迎到「玩出屬於我的東北」專設網頁，與東北代表秋太郎一起線上瀏覽最新東北景色！',
          },
        ],
      },
    ];
    function getImgUrl(src) {
      return require(`@/assets/images/home_page/${src}`);
    }
    return {
      folder,
      contentA,
      getImgUrl,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //fontcss

//banner-div css
.banner-div {
  margin-bottom: 100px;
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
  margin-bottom: 100px;

  .A-body {
    .img-box {
      overflow: hidden;

      .news-img {
        transition: all 0.2s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .news-title {
      &:hover {
        color: $support-color;
        cursor: pointer;
      }
    }

    .news-date {
      color: gray;
    }

    .fourth-title {
      font-weight: bold;
    }
  }
}

// C-div css
.C-div {
  margin-bottom: 100px;
}
</style>
