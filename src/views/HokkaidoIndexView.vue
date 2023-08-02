<template>
  <!-- https://www.tsunagujapan.com/zh-hant/12-local-foods-not-to-be-missed-in-hokkaido/ -->
  <NavBar></NavBar>
  <!-- Banner-div -->
  <div class="container-fluid gx-0">
    <div class="banner-div d-flex align-items-center">
      <div class="container">
        <h1 class="banner-title">北海道</h1>
        <h4 class="fourth-title">在北海道的自然荒野縱情戶外活動，城鎮依傍於山林湖濱之間，盡享眾多特色美食與文化</h4>
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
          <h3 class="third-title" id="A-intro-title">北海道的大自然適合多種戶外活動，而在山岳湖泊圍繞下的北海道各城市，更有多元化的美食與文化。</h3>
          <p class="lh-lg siexth-title">
            北海道地區獨具特色：豐富的自然景觀包括壯麗的山脈、湖泊和海岸線，四季變化明顯，櫻花、薰衣草和紅葉吸引遊客。海鮮美食豐富，尤其以螃蟹、鮭魚和帆立貝聞名。溫泉鄉提供放鬆和保健療程。農業產品優質，乳製品尤為著名。阿伊努族文化是獨特的文化遺產。冬季的銀白世界和冰雪節慶增添活力。北海道的多樣特色吸引遊客體驗獨一無二的魅力。
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
        <div class="col"><area-card event_img="B-region01-01.png" event_title="東藻琴芝櫻花祭" /></div>
        <div class="col"><area-card event_img="B-region01-02.png" event_title="北龍向日葵祭" /></div>
        <div class="col"><area-card event_img="B-region01-03.png" event_title="札幌雪祭" /></div>
        <div class="col"><area-card event_img="B-region01-04.png" event_title="北海肚臍祭" /></div>
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
          <tourist-spot title_type="h4" :folder_name=folder spot_file="C-region01-01.png" spot_title="小樽運河"
            router_name="hokkaido/otaru" />
        </div>
        <!-- 小圖*4 -->
        <div class="col-12 col-md gy-3 gy-md-0">
          <div class="row row-cols-2 gy-3">
            <tourist-spot title_type="h5" :folder_name=folder spot_file="C-region01-02.png" spot_title="白金青池" />
            <tourist-spot title_type="h5" :folder_name=folder spot_file="C-region01-03.png" spot_title="新雪谷格蘭比羅夫滑雪場" />
            <tourist-spot title_type="h5" :folder_name=folder spot_file="C-region01-04.png" spot_title="大通公園" />
            <tourist-spot title_type="h5" :folder_name=folder spot_file="C-region01-05.png" spot_title="安山溪溫泉" />
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
        title: '湯咖哩',
        content: '一般而言，日本的咖哩較為濃稠，不過北海道的當地美食「湯咖哩」，則是一種湯湯水水的咖哩。你可以在日本各地找到湯咖哩的店家，不過說到其起源，其實正是湯咖哩店林立的札幌。北海道的湯咖哩大多採用北海道所生產的新鮮蔬菜，大塊的食材保證會讓你驚嘆不已！而且裡頭還會放進肉類或魚類，例如豬肉角煮、香辣雞肉、牛筋等，吃起來口感十足。',
        imgSrc: 'D-region01-01.png',
        isReverse: false,
      },
      {
        id: 2,
        title: '石狩鍋',
        content: '石狩鍋是將新鮮鮭魚或鱒魚、魚骨以及高麗菜或洋蔥等蔬菜，加入使用味噌調味後的昆布高湯中的火鍋料理。 起源是來自於石狩地區漁夫們的伙食餐，據傳當時將捕獲到的新鮮鮭魚切塊後放進味噌湯中享用，進而演變傳承至今的石狩鍋。',
        imgSrc: 'D-region01-02.png',
        isReverse: true,
      },
      {
        id: 3,
        title: 'ルイベ(Ruibe)',
        content: '這道料理是背負著北海道鮭魚跟愛奴人歷史的一道鄉土料理，將天然鮭魚冷凍後在冷凍狀態下食用的生魚片。據說是過去人們在冬季捕魚後，會將鮭魚埋進厚厚的冰雪裡保存，因低溫有滅菌效果，所以能直接生吃。',
        imgSrc: 'D-region01-03.png',
        isReverse: false,
      },
      {
        id: 4,
        title: '墨魚飯',
        content: '北海道墨魚飯深黑的色澤令人印象深刻，獨特的墨魚風味與糯米飯相融合，帶來濃郁口感和美味。但墨魚飯其實是發源於從前日本人把沒什麼利用價值的小型墨魚填入戰時配給的米糧，做成既節省又能填飽肚子的「小型便當」。',
        imgSrc: 'D-region01-04.png',
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
  background-image: url('@/assets/images/area_page/content/banner-region01.png');
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