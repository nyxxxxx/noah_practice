<template>
  <!-- https://www.tsunagujapan.com/zh-hant/12-local-foods-not-to-be-missed-in-hokkaido/ -->
  <NavBar></NavBar>
  <!-- Banner-div -->
  <div class="container-fluid gx-0">
    <div class="banner-div d-flex align-items-center">
      <div class="container">
        <h1 class="banner-title">關西</h1>
        <h4 class="fourth-title">在關西的歷史古都漫遊著千年文化，城市融合於現代與傳統之間，品味著多樣美食與藝術精髓</h4>
      </div>
    </div>
  </div>
  <!-- A-div -->
  <div class="container-lg">
    <!-- BreadCrumb -->
    <bread-crumb></bread-crumb>
    <div class="A-div">
      <div class="row">
        <!-- A-div-left -->
        <div class="col-12 col-lg-8 A-div-left">
          <div id="A-title">
            <h1 class="title"><img src="@/assets/images/logo/title_logo.png" alt="">區域特色</h1>
          </div>
          <h3 class="third-title" id="A-intro-title">關西地區蘊藏豐富的歷史文化，古都遺跡彷彿穿越時空，城市現代風情與古典韻味交相輝映。漫遊關西，品味多元美食與藝術之美。</h3>
          <p class="lh-lg siexth-title">
            關西地區充滿著令人著迷的多樣魅力：這片土地承載著悠久的歷史和文化遺產，讓您彷彿時光倒流穿越古城古跡，感受著千年傳承的古老智慧。四季交替帶來著不同的景觀，春季滿山遍野的櫻花綻放，秋季楓紅如火點綴山林，冬季白雪覆蓋整個大地，呈現出各自獨有的風情。
          </p>
        </div>
        <!-- A-div-right -->
        <div class="col-12 col-lg-4">
          <div class="A-div-right">
            <h2 class="sec-title mb-3">夢想起飛</h2>
            <form>
              <div class="mb-3">
                <label for="departure" class="form-label siexth-title">出發地</label>
                <input type="text" class="form-control" id="departure" name="departure">
              </div>
              <div class="mb-3">
                <label for="destination" class="form-label siexth-title">目的地</label>
                <input type="text" class="form-control" id="destination" name="destination">
              </div>
              <div class="mb-3 d-flex">
                <div class="form-check d-flex align-items-center" style="padding-right: 15px;">
                  <input type="radio" class="form-check-input" id="one-way" name="ticket-type" style="margin-right: 5px;"
                    checked>
                  <label class="form-check-label siexth-title" for="one-way">往返</label>
                </div>
                <div class="form-check d-flex align-items-center">
                  <input type="radio" class="form-check-input" id="round-trip" name="ticket-type"
                    style="margin-right: 5px;">
                  <label class="form-check-label siexth-title" for="round-trip">單程</label>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col mb-3">
                  <label for="startDate" class="form-label siexth-title">出發</label>
                  <input type="date" class="form-control" id="startDate" name="startDate" :value="todayDate">
                </div>
                <div class="col mb-3">
                  <label for="endDate" class="form-label siexth-title">回程</label>
                  <input type="date" class="form-control" id="endDate" name="endDate">
                </div>
              </div>
              <button type="submit" class="siexth-title" id="trip-search-btn">搜尋航班 <img
                  src="@/assets/images/area_page/content/airplane-icon.png" alt="" srcset=""> </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  </div>
  <!-- A-div end -->
  <!-- B-div start -->
  <div class="container-lg">
    <div class="B-div">
      <div id="B-title" ref="B-title">
        <h1 class="title"><img src="@/assets/images/logo/title_logo.png" alt="">地方活動</h1>
      </div>
      <div class="row row-cols-2 row-cols-md-4 gy-3 gy-md-0">
        <div class="col"><area-card event_img="B-region05-01.png" event_title="祇園祭" /></div>
        <div class="col"><area-card event_img="B-region05-02.png" event_title="薪能" /></div>
        <div class="col"><area-card event_img="B-region05-03.png" event_title="那智扇祭" /></div>
        <div class="col"><area-card event_img="B-region05-04.png" event_title="十日戎" /></div>
      </div>
    </div>
  </div>
  <!-- B-div end -->
  <!-- C-div start -->
  <div class="container-lg">
    <div class="C-div">
      <div id="C-title" ref="C-title">
        <h1 class="title"><img src="@/assets/images/logo/title_logo.png" alt="">景點推薦</h1>
      </div>
      <!-- 景點圖片 -->
      <div class="row mb-4">
        <!-- 大圖*1 -->
        <div class="col-12 col-md gy-3 gy-md-0">
          <tourist-spot title_type="h4" :folder_name=folder spot_file="C-region05-01.png" spot_title="伏見稻荷大社"
            router_name="kansai/kyoto" />
        </div>
        <!-- 小圖*4 -->
        <div class="col-12 col-md gy-3 gy-md-0">
          <div class="row row-cols-2 gy-3">
            <tourist-spot title_type="h5" :folder_name=folder spot_file="C-region05-02.png" spot_title="夕日浦海岸" />
            <tourist-spot title_type="h5" :folder_name=folder spot_file="C-region05-03.png" spot_title="蘭島" />
            <tourist-spot title_type="h5" :folder_name=folder spot_file="C-region05-04.png" spot_title="姬路城" />
            <tourist-spot title_type="h5" :folder_name=folder spot_file="C-region05-05.png" spot_title="竹田成跡" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- C-div end -->
  <!-- D-div start -->
  <div class="container-lg">
    <div class="D-div">
      <div id="D-title" ref="D-title">
        <h1 class="title"><img src="@/assets/images/logo/title_logo.png" alt="">老饕美食</h1>
      </div>
      <!-- 介紹1 -->
      <div v-for="item in food_contents" :key="item.id" class="row mb-4"
        :class="{ 'flex-md-row-reverse': item.isReverse }">
        <!-- 美食介紹 -->
        <div class="col-12 col-md-7">
          <div>
            <h2 class="sec-title">{{ item.title }}</h2>
          </div>
          <div class="d-flex">
            <p class="lh-lg">
              {{ item.content }}
            </p>
          </div>
        </div>
        <!-- 美食圖片 -->
        <div class="col-12 col-md-5"><img :src="getImageUrl(item.imgSrc)" alt="" class="w-100"></div>
      </div>


    </div>
  </div>
  <!-- D-div end -->
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue';
import BreadCrumb from '@/components/BreadCrumb.vue';
// import AreaIcon from '@/components/AreaIcon.vue';
import AreaCard from '@/components/AreaCard.vue';
import TouristSpot from '@/components/TouristSpot.vue';
import { onMounted } from 'vue';
import { ref } from 'vue';

export default {
  components: {
    NavBar,
    Footer,
    BreadCrumb,
    // AreaIcon,
    AreaCard,
    TouristSpot,
  },
  setup() {
    //A-div-right get TodayDate
    var todayDate =ref('');
    onMounted(()=>{
      var today = new Date();
      const year = today.getFullYear();
      //月份0~11 +1補正後 padStart補零
      const month = String(today.getMonth()+1).padStart(2,'0');
      const day = String(today.getDate()).padStart(2,'0');
      todayDate.value = `${year}-${month}-${day}`;
      // console.log('今日日期'+todayDate.value);
    });
    //C-div component & D-div need folder name
    const folder = 'area_page/content';

    function getImageUrl(src) {
      return require(`@/assets/images/${folder}/${src}`);
    }
    //D-div food contents
    const food_contents = [
      {
        id: 1,
        title: '近江牛',
        content: '日本歷史最久的肉用牛，與松阪牛、神戶牛並稱為日本三大和牛之一。擁有細緻、光滑的肉質，還有不油膩的甘美脂肪，以及芳醇的香味。 一年只能出產6,000頭的認定近江牛，目前的流通極其有限，高品質控管，直接反應在牛肉的纖細美味上。 在沒有食肉習慣的江戶時代，以藥的名義獻給將軍的近江牛味噌漬已經為人認識。',
        imgSrc: 'D-region05-01.png',
        isReverse: false,
      },
      {
        id: 2,
        title: '湯豆腐',
        content: '日式傳統的京都湯豆腐，食材有豆腐、柴魚湯、昆布、醬油、沾料。 湯豆腐的煮器相當的考究，使用檜木包覆，醬油壺與湯頭一同加熱，在烹煮過程中，由圖片中的小煙囪冒出香氣，會有淡淡的檜木香氣。 現在現在煮器逐漸被其它簡易的容器所取代。',
        imgSrc: 'D-region05-02.png',
        isReverse: true,
      },
      {
        id: 3,
        title: '鯡魚蕎麥麵',
        content: '把鯡魚內臟清理乾淨後將魚肉乾燥而成，經過泡軟後再用醬油、砂糖、味醂、清酒等等來燉煮，放入溫熱的蕎麥麵後完成的食物。 古早時期的京都因為很難取得新鮮的漁獲，因此從北海道運來的身欠鯡魚就成為很重要的蛋白質來源。',
        imgSrc: 'D-region05-03.png',
        isReverse: false,
      },
      {
        id: 4,
        title: '生八橋',
        content: '特徵 做為煎餅的一種，主要作法是將米粉、砂糖、錫蘭肉桂混和蒸煮，接著將做薄、長方形的麵糊煎烤。 形狀像日本古箏，長軸中心部位向上凸起彎曲。 至於「生八橋」是食材在蒸煮過後直接以一定尺寸分切，於1960年代開始販賣的新產品，也有切成正方形、對角線折起將餡料包入的生八橋，特別是後者的類型有相當多變化。',
        imgSrc: 'D-region05-04.png',
        isReverse: true,
      },
    ];
    return {
      todayDate,
      folder,
      getImageUrl,
      food_contents,
    }
  },
}

</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //font scss

.container-fluid {
  background-image: url('@/assets/images/area_page/content/banner-region05.png');
  background-repeat: no-repeat;
  background-position: center center;

  .banner-div {
    backdrop-filter: brightness(45%);
    width: 100%;
    height: 500px;
    color: white;
  }
}

.title {
  color: $primary-color;
  margin-bottom: 30px;

  img {
    vertical-align: initial;
    margin-right: 1rem;
  }
}

.A-div {
  margin-bottom: 100px;

  #A-intro-title {
    margin-bottom: 30px;
    font-weight: bold;
  }

  .A-div-right {

    border: 1px solid $primary-color;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 10px;
    padding: 16px 12px;

    .form-check-input {
      &:not(:checked) {
        border-color: gray;
      }
    }

    #trip-search-btn {
      background-color: $primary-color;
      color: white;
      padding: 5px 8px;
      border: none;
      border-radius: 5px;
    }
  }
}

.B-div,
.C-div {
  margin-bottom: 100px;
}

.D-div {
  .sec-title {
    &::after {
      content: '';
      height: 2px;
      width: 100%;
      display: block;
      background-color: $primary-color;
    }
  }
}
</style>