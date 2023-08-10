<template>
  <NavBar></NavBar>
  <div class="container-lg">
    <div class="row">
      <!-- article -->
      <div class="article col col-md-8" style="background-color: rgba(255, 243, 177, 0); margin-top: 30px;">
        <h2 class="sec-title">首次造訪者必看資料！小樽運河完美指南</h2>
        <p style="color: gray;">發布日期:03/06/2017 最後更新:11/20/2020 <span>*資料來源: <a
              href="https://hokkaido-labo.com/tw/otaru-canal-438">Hokkaido Labo</a></span></p>
        <bread-crumb></bread-crumb>
        <img src="@/assets/images/area_page/region01/otaru-01.png" alt="" class="w-100">
        <!-- intor 前言 -->
        <div class="intro lh-lg mb-5">
          <p>北海道名列前茅的高熱門度觀光區「小樽」，以小樽運河最具代表性。不過，要如何遊覽小樽運河？要預留多久時間？對於第一次造訪此地的人來說，可能有些疑惑吧。<br><br>

            小樽運河於大正12年（1923）完工，可由此感受到支撐起北海道海運的歷史風情，是必去的北海道觀光亮點之一。<br><br>

            本次將針對首次造訪小樽者，大略地介紹景點與餐廳、酒店等，讓您安心地遊覽小樽運河！</p>
        </div>
        <!-- Google Map Api -->
        <google-map-api :lat="43.199" :lon="141.002" marker_title="小樽運河"></google-map-api>
        <!-- 正文 v-for -->
        <div v-for="(item, index) in items" :key="index" class="contents mb-5" :ref="el => sectionRefs[index] = el">
          <h3 class="third-title">{{ item.title }}</h3>
          <div v-for="(contentItem, contentIndex) in item.contents" :key="contentIndex">
            <template v-if="contentItem.type === 'text'">
              <component :is="contentItem.tag" v-html="contentItem.html" :class="contentItem.class" />
            </template>
            <template v-if="contentItem.type === 'image'">
              <img :src="getImageUrl(contentItem.imageSrc)" alt="" class="w-100">
            </template>
          </div>
        </div>
      </div>
      <!-- aside -->
      <div class="aside col-4 d-none d-md-block" style="background-color: rgba(255, 177, 177, 0);">
        <div class="position-sticky" style="top:110px">
          <div class="row mb-5">
            <div class="catalog">
              <h2>目錄</h2>
              <ul class="list-none">
                <li v-for="(item, index) in items" :key="index" :class="{ active: activeSectionIndex === index }"
                  @click="scrollToSection(index)">{{ item.title }}</li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div>
              <weather-api :query-city="city" :query-city_zh="city_zh" @weatherLocation="handleLocation"></weather-api>
            </div>
          </div>
        </div>
      </div>
      <!-- to-top -->
      <div id="top-button" class="position-fixed d-flex justify-content-center align-items-center d-md-none" @click="scrollToTop()">
        <span>Top</span>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Navbar.vue'
import BreadCrumb from '@/components/BreadCrumb.vue';
import GoogleMapApi from '@/components/GoogleMapApi.vue';
import WeatherApi from '@/components/WeatherApi.vue';
import Footer from '@/components/Footer.vue';
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'OtaruView',
  components: {
    NavBar,
    BreadCrumb,
    GoogleMapApi,
    WeatherApi,
    Footer,
  },
  setup() {
    const city = 'otaru'
    const city_zh = '小樽市'
    const map_lat = ref(0)
    const map_lon = ref(0)

    function handleLocation(data) {
      // console.log('收到經緯度數據:', data.lat, data.lon);
      map_lat.value = data.lat;
      map_lon.value = data.lon;
    }
    const items = [
      {
        title: '1. 透過照片來了解小樽運河的魅力！',
        contents: [
          {
            type: 'text',
            tag: 'p',
            html: '<br>在北海道數個觀光地之中，擁有高度人氣的「小樽運河」。它的魅力在於古風盎然、散發懷舊鄉愁般的運河沿岸，建築物林立的美麗景觀。<br><br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: '<strong>藍天和綠意映襯的美景，夏天的小樽運河<strong/>'
          },
          { type: 'image', imageSrc: 'otaru-02.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br><br>小樽運河於大正12年（1923）完工，是支撐著北海道開拓歷史的港灣都市「小樽」海運的水路，水路沿岸有古老的倉庫林立，是一個具有歷史氣息的地方。運河本身的作用已經結束，於昭和61年（1986）掩埋部份區段後，整修成目前看到的散步路線和街景。<br><br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: '<strong>煤氣燈點亮了日落之後的小樽運河<strong/>'
          },
          { type: 'image', imageSrc: 'otaru-03.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br><br>運河沿岸的散步路線，設置了63座煤氣燈，黃昏之後點燈，照亮了運河與石造倉庫群，展現出有別於白天的截然不同氣氛。<br><br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: '<strong>在煤氣燈溫暖色調的圍繞之中，夜間的小樽運河<strong/>'
          },
          { type: 'image', imageSrc: 'otaru-04.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br><br>入冬之後，保留了古代風情的石造倉庫和步道的積雪，呈現出北國特有的風情。<br><br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: '<strong>磚瓦建築被雪所包覆，冬天的小樽運河<strong/>'
          },
          { type: 'image', imageSrc: 'otaru-05.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br><br><strong>煤氣燈的燈光照映著白雪，夜晚的小樽運河<strong/><br>'
          },
          { type: 'image', imageSrc: 'otaru-06.png' },

        ],
      },
      {
        title: '2. 小樽運河觀光的基本形態',
        contents: [
          {
            type: 'text',
            tag: 'p',
            html: '<br>想要一睹小樽運河風采，但還有其他觀光行程，時間有限的旅客，應該最好奇的就是平均停留多久了吧！<br><br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: '一般來說，如果只是簡單地快速參觀小樽運河，只要30分鐘就夠了，下面就跟各位介紹30分鐘看完小樽運河的路線。<br><br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: '在小樽運河地區位於JR小樽車站沿著緩坡道往下步行不到10分鐘的地方，不需開車也能搭乘公共交通工具的方式，算是比較簡單就能展開觀光的區域。<br><br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: '當然，如果開車前往的話，運河周邊也有收費停車場，大致行情為每30分鐘200日圓。此外，小樽市的網站上，也可以下載方便的「<a href="https://www.city.otaru.lg.jp/simin/sumai/tosikei/sonota/07tyusyajyomap.html">小樽停車場地圖</a>」。非常好用哦！<br><br>'
          },
          {
            type: 'text',
            tag: 'h4',
            class: 'fourth-title',
            html: '·中央橋'
          },
          { type: 'image', imageSrc: 'otaru-01.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br><br>由JR小樽車站沿著緩坡道往下步行不到10分鐘。位於小樽運河中心的橋。也是遊船「小樽運河遊河之旅」的起點與終點。<br><br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: '中央橋和旁邊的「淺草橋」之間，走在運河沿岸的「運河散步道路」上，感受懷舊風情，是最佳的散步路線♪對於時間不多的人而言，不妨以這座中央橋為起點，展開運河散步之旅♪<br><br>'
          },
          {
            type: 'text',
            tag: 'h4',
            class: 'fourth-title',
            html: '·淺草橋'
          },
          { type: 'image', imageSrc: 'otaru-07.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br><br>由中央橋沿著散步道路步行約4～5分鐘處。橋上有小型廣場，在此以小樽運河為背景攝紀念照，是標準觀光客模式！這裏也有附設觀光服務處。<br><br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: '如果時間不多的人，可以由淺草橋折返，回到中央橋。（圖為由淺草橋位置拍攝到的小樽運河與散步道路）'
          },
        ],
      },
      {
        title: '3. 深入感受小樽運河風情的方式！',
        contents: [
          {
            type: 'text',
            tag: 'p',
            html: '<br>前段已介紹過小樽運河觀光的中心區域，接下來要介紹的是，想要一併欣賞的風景與觀光景點、交通工具等！此外，小樽運河的日間、黃昏、夜晚的氣氛都不一樣，如果可以的話，一面展開其他的小樽觀光行程，利用不同的時段，在運河旁散步與觀光，也是不錯的方式♪・<br><br>'
          },
          {
            type: 'text',
            tag: 'h4',
            class: 'fourth-title',
            html: '·租借自行車'
          },
          {
            type: 'text',
            tag: 'p',
            html: '<br>騎乘自行車可以輕鬆地遊覽小樽市內的觀光景點。適合想要走遍小樽運河與北運河等廣大範圍的人。<br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: `<br>
            <a href="http://otaru-kankousen.jp/parking_bike/"> レンタサイクル（小樽観光振興公社）</a><br>
            費用：2小時內 500日圓(延長費 300日圓/每小時)<br>
            1天 2,000日圓<br>
            期間：4～10月（9:00～17:00，最後接待時間為14:30）。<br>
            停車場：1日600日圓（推薦長時間滯留的使用）<br><br>`
          },
          {
            type: 'text',
            tag: 'h4',
            class: 'fourth-title',
            html: '·人力車'
          },
          {
            type: 'text',
            tag: 'p',
            html: '<br>在車伕的帶領之下，由帥哥（？）詳細地介紹小樽運河與周邊的觀光景點！他們通常會在淺草橋與中央橋旁邊等待客人。<br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: `<br> 
            <a href="http://ebisuya.com/branch/otaru/"> 小樽｜惠比壽屋人力車</a><br>
            1人3,000日圓起（依路線和時間而異）<br>
            地&#12288;&#12288;址： 北海道小樽市色内2-8-7（JR小樽站徒步約15分鐘）)<br>
            電&#12288;&#12288;話：+81134-27-7771<br>
            期&#12288;&#12288;間：4～10月（9:00～17:00，最後接待時間為14:30）。<br>
            營業時間：9:30～傍晚<br><br>`
          },
        ],
      },
      {
        title: '4. 精選4個餐飲設施及餐廳',
        contents: [
          {
            type: 'text',
            tag: 'p',
            html: '<br>接下來，為了想要更加深入感受小樽運河的人，以及對於尋找用餐地點感到不安的人，介紹4個可以一邊欣賞小樽運河象徵的古早時期的倉庫、小樽運河，一邊用餐的地方！<br><br>'
          },
          { type: 'image', imageSrc: 'otaru-08.png' },
          //店家介紹
          {
            type: 'text',
            tag: 'h4',
            class: 'fourth-title',
            html: '<br><br>·小樽倉庫No.1'
          },
          { type: 'image', imageSrc: 'otaru-09.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br>位於運河沿岸石造倉庫之一的內部，供應地方特產「小樽啤酒」的啤酒餐廳。<br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: `<br>
            地&#12288;&#12288;址：北海道小樽市港町５－４<br>
            電&#12288;&#12288;話：+81134-21-2323<br>
            營業時間：11:00～23:00（最後點餐時間：餐點/22:00 飲料/22:30，根據季節或每日活動會有所異動，依照現場為準）<br>
            定休日：年終無休<br>`
          },
          {
            type: 'text',
            tag: 'h4',
            class: 'fourth-title',
            html: '<br><br>·小樽運河食堂'
          },
          { type: 'image', imageSrc: 'otaru-10.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br>位於淺草橋旁，運河沿岸的石造倉庫內，重新呈現小樽街景，提供自助餐、拉麵、海鮮丼、湯咖哩等北海道知名美食，合計11家店匯集於此的複合型餐廳。<br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: `<br>
            地&#12288;&#12288;址：北海道小樽市港町6-5<br>
            電&#12288;&#12288;話：+8150-5798-9387<br>
            營業時間：新冠肺炎疫情影響，暫停營業<br>`
          },
          {
            type: 'text',
            tag: 'h4',
            class: 'fourth-title',
            html: '<br><br>·小樽政壽司Zen庵'
          },
          { type: 'image', imageSrc: 'otaru-11.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br>擁有20年以上的歷史，在當地壽司店中相當有名的小樽政壽司分店之一，由二樓的吧台區座位，一邊品嚐小樽特有的新鮮且正統的壽司，一邊欣賞小樽運河的景色，相當具有魅力。<br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: `<br>
            地&#12288;&#12288;址：北海道小樽市色内１丁目２－１<br>
            電&#12288;&#12288;話：+81134-22-0011<br>
            午餐時段：11:00～15:00(14:30最後點餐)<br>
            晚餐時段：17:00～20:30(20:00最後點餐)<br>`
          },
        ],
      },
      {
        title: '5. 有3小時就能滿足的觀光行程',
        contents: [
          {
            type: 'text',
            tag: 'p',
            html: '<br>最後，針對時間不多，卻想要有效率地展開小樽觀光行程的人，介紹集結小樽觀光亮點的「小樽停留3小時路線」。依此流程展開觀光的話，總算可以驕傲的說，「我來過小樽了！」♪<br>'
          },
          {
            type: 'text',
            tag: 'h4',
            class: 'fourth-title',
            html: '<br>·堺町通（約90分鐘）'
          },
          { type: 'image', imageSrc: 'otaru-12.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br>歷史建築與倉庫林立的道路上，知名的「北一硝子」等玻璃工藝店和雜貨店、「LeTAO總店」等西點舖雲集，與小樽運河同為高熱門度的區域。喜歡雜貨的人，以及想要盡情採購特產品的人，在這裏時間流逝得特別快，可要注意一下時間哦！<br><br>'
          },
          {
            type: 'text',
            tag: 'h4',
            class: 'fourth-title',
            html: '·小樽運河（約30分鐘）'
          },
          { type: 'image', imageSrc: 'otaru-02.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br>不妨在位於小樽運河中心的「中央橋」、「淺草橋」以及運河沿岸，享受散步與拍照的樂趣。此外，各處都未設置屋簷，遇到可能會下雨的日子，請先準備好雨傘♪<br><br>'
          },
          {
            type: 'text',
            tag: 'h4',
            class: 'fourth-title',
            html: '<br>·享用壽司或在市場購物（約45分鐘）'
          },
          { type: 'image', imageSrc: 'otaru-13.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br>在壽司店雲集的「壽司屋通」裏，享用新鮮食材的壽司，或是前往分布於市區的市場，購買螃蟹和扇貝、海膽等海鮮類，以及夏季的蘆筍、櫻桃、哈蜜瓜等蔬菜水果也很不錯！（圖為小樽車站旁的「三角市場」。全年無休。）<br><br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: '<hr><br>以上為您介紹了小樽運河的魅力與情報，您覺得如何呢？此外，小樽運河周邊還有許多歷史建築等觀光景點，以及可愛雜貨商店等！請務必親臨小樽運河，尋找專屬於您的推薦景點哦！<br>'
          },
        ],
      },
    ];

    // 取得圖片
    const folder = 'area_page/region01';
    function getImageUrl(src) {
      return require(`@/assets/images/${folder}/${src}`);
    }
    //目錄滾動
    const sectionRefs = ref([]);
    function scrollToSection(index) {
      const navbarHeight = 80;
      const sectionRef = sectionRefs.value[index];
      if (sectionRef) {
        window.scrollTo({ top: sectionRef.offsetTop - navbarHeight, behavior: 'smooth' });
      }
    }

    //監聽滾動事件
    const activeSectionIndex = ref(0);
    function onScroll() {
      const navbarHeight = 80;
      const scrollY = window.scrollY + navbarHeight;
      for (let i = 0; i < sectionRefs.value.length; i++) {
        const sectionRef = sectionRefs.value[i];
        if (sectionRef) {
          const topOffset = sectionRef.offsetTop;
          const bottomOffset = topOffset + sectionRef.clientHeight;

          if (scrollY >= (topOffset - 10) && scrollY < (bottomOffset - 10)) {
            activeSectionIndex.value = i;
            break;
          }
        }
      }
    }
    //Scroll to Top
    function scrollToTop(){
      window.scrollTo({top:0 , behavior: 'smooth'});
    }
    //Top-button hide&show function
    function topButtonToggle (){
      const topButton = document.getElementById('top-button')
      if(window.scrollY > this.prevScrollY){
        topButton.classList.remove('show');
      }
      else {
        topButton.classList.add('show');
      }
      this.prevScrollY = window.scrollY ; 
    }
    onMounted(() => {
      window.addEventListener('scroll', onScroll);
      window.addEventListener('scroll', topButtonToggle);
    });
    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', topButtonToggle);
    });


    return {
      city,
      city_zh,
      map_lat,
      map_lon,
      handleLocation,
      items,//網頁內容
      folder,
      getImageUrl,
      sectionRefs,
      scrollToSection,
      activeSectionIndex,
      onScroll,
      scrollToTop,
      topButtonToggle,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //font css

p {
  font-size: 1.1rem;
}

.contents {
  .third-title {
    &::after {
      content: '';
      display: block;
      height: 4px;
      width: 100%;
      background-color: $primary-color;
      margin: 1rem 0;
    }
  }

}

.aside {
  ul {
    list-style: none;
    padding-left: 0;

    li {
      cursor: pointer;
      font-size: 1.1rem;
      padding: 0.5rem 0;
      padding-left: 1rem;
      border: 1px solid white;
      transition: all 0.2s;

      &.active {
        // background-color: $primary-color;
        border: 1px solid $support-color;
        color: $support-color;
      }

      &:hover {
        color: $support-color;
      }
    }
  }
}

#top-button {
  width: 55px;
  height: 55px;
  bottom: 15px;
  right: 5px;
  border-radius: 100%;
  background-color: $primary-color;
  opacity: 0;
  transition: opacity 0.3s;
  &.show {
    opacity: 0.8;
  }
  &:hover {
    cursor: pointer;
  }
  span {
    padding: 10px;
    color: white;
    font-size: 1.1rem;
  }
}
</style>