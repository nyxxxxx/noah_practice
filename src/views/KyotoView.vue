<template>
  <NavBar></NavBar>
  <div class="container-lg">
    <div class="row">
      <!-- article -->
      <div class="article col col-md-8" style="background-color: rgba(255, 243, 177, 0); margin-top: 30px;">
        <h2 class="sec-title">伏見稻荷大社景點、狐狸與傳說介紹</h2>
        <p style="color: gray;">發布日期:01/22/2023 最後更新:03/15/2023 <span>*資料來源: <a
              href="https://www.bring-you.info/zh-tw/inari">Bring-you</a></span></p>
        <bread-crumb></bread-crumb>
        <img src="@/assets/images/area_page/region05/kyoto-01.png" alt="" class="w-100">
        <!-- intor 前言 -->
        <div class="intro lh-lg mb-5">
          <p>伏見稻荷大社算是各大京都必去景點中最經典的之一，縱使遊客多又喧囂，飄兒仍很喜歡的這個京都景點，走進伏見稻荷大社整排的紅色鳥居時，真的會覺得很震撼，覺得剛剛爬這麼久的階梯都值得了！</p>
        </div>
        <!-- Google Map Api -->
        <google-map-api :lat="34.96715" :lon="135.77266" marker_title="伏見稻荷大社"></google-map-api>
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
      <div id="top-button" class="position-fixed d-flex justify-content-center align-items-center d-md-none"
        @click="scrollToTop()">
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
    const city = 'kyoto'
    const city_zh = '京都'
    const map_lat = ref(0)
    const map_lon = ref(0)

    function handleLocation(data) {
      // console.log('收到經緯度數據:', data.lat, data.lon);
      map_lat.value = data.lat;
      map_lon.value = data.lon;
    }
    const items = [
      {
        title: '1. 伏見稻荷大社重點介紹',
        contents: [
          { type: 'image', imageSrc: 'kyoto-02.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br>'
          },
          { type: 'image', imageSrc: 'kyoto-03.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br>從JR奈良線稻荷站下車後，馬上就到目的地了，伏見稻荷大社開放時間為24小時，門票又免費，非常便民。不過晚上除了御守販售處打烊，部分路段還黑漆漆的，要帶手電筒外，還有不少恐怖鬼故事，大家自己斟酌阿...一樣先送上波比後製過的伏見稻荷大社地圖，必看重點都放大在圖上囉，認真逛的話停留時間2-3小時跑不掉。。<br><br>'
          },
          {
            type: 'text',
            tag: 'h4',
            class: 'fourth-title',
            html: '·伏見稻荷大社樓門'
          },
          { type: 'image', imageSrc: 'kyoto-04.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br><br>伏見稻荷大社建於西元711年，長達1,300多年歷史，祭奉神明──稻荷大神 (注意祂不是狐狸喔，狐狸是使者)。稻荷大神掌管的是農作豐收、生意興隆、家庭安全等，被視為是諸願望皆得實現之神，每年遊客數以萬計。<br><br>'
          },
          { type: 'image', imageSrc: 'kyoto-05.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br><br>首先遇上「樓門」，豐臣秀吉於西元1589年，為祈求母親病癒而建，並允諾還願捐獻一萬石，左右兩旁有神像。前方還有兩隻狐狸，仔細看整個神社中的狐狸們，口中有時含著象徵豐收的稻穗；有時含著象徵財富糧倉鑰匙，和稻荷大神的掌管的事務相呼應呢～這裡是最大規模的神社樓門，大家可千萬別錯過留影的機會喔。<br><br>'
          },
          {
            type: 'text',
            tag: 'h4',
            class: 'fourth-title',
            html: '·伏見稻荷大社正殿'
          },
          { type: 'image', imageSrc: 'kyoto-06.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br>'
          },
          { type: 'image', imageSrc: 'kyoto-07.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br><br>西元1468年在戰火燒毀，西元1499年重建。神殿「懸魚」的金覆輪 (貼於邊緣的金箔裝飾)、「椽木前端」金屬裝飾特別亮眼，目前是為日本重要文化財。。<br><br>'
          },
        ],
      },
      {
        title: '2. 伏見稻荷大社和服',
        contents: [
          { type: 'image', imageSrc: 'kyoto-08.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br><br>來點輕鬆的，清水寺是京都和服體驗最大宗首選，不過也有不少人會選在伏見稻荷大社穿和服，拍起來美啊！「京都愛和服」出稻荷車站就看到了，會中文、和服款式多、髮型又專業，最多人推薦No.1同時分享給你們。<br><br>'
          },
        ],
      },
      {
        title: '3. 伏見稻荷大社美食',
        contents: [
          {
            type: 'text',
            tag: 'h4',
            class: 'fourth-title',
            html: '·伏見稻荷參道茶屋'
          },
          { type: 'image', imageSrc: 'kyoto-09.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br>伏見稻荷大社美食中，伏見稻荷參道茶屋一定要知道，評分超級高的，紅豆烤麻糬湯、宇治抹茶冰都熱賣，歇歇腳夏天消暑、冬天暖伙的好地方。<br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: `<br>
            地&#12288;&#12288;址：京都府京都市伏見區深草開土町1-10 <br>
            營業時間：10:00-17:30 (周一至周日)<br><br>`
          },
          {
            type: 'text',
            tag: 'h4',
            class: 'fourth-title',
            html: '·寶玉堂稻荷煎餅'
          },
          { type: 'image', imageSrc: 'kyoto-10.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br>80年歷史老店，也在伏見稻荷大社附近，兩位親切老夫妻開的，狐狸造型煎餅有沒有可愛！餅香鮮明好酥脆，精緻盒裝包封，完全不怕破掉，買回台灣當伴手禮超合適<br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: `<br>
            地&#12288;&#12288;址：京都府京都市伏見區深草一ノ坪町27 <br>
            營業時間：07:30-18:00 (周一至周日)<br><br>`
          },
          {
            type: 'text',
            tag: 'h4',
            class: 'fourth-title',
            html: '·陽はまた昇る拉麵'
          },
          { type: 'image', imageSrc: 'kyoto-11.png' },
          {
            type: 'text',
            tag: 'p',
            html: '<br>最後一家伏見稻荷大社美食來介紹拉麵，雞豚骨拉麵、魚雞豚骨拉麵都是人氣餐點，湯頭爆濃郁有夠好吃的。完勝什麼一蘭拉麵、金龍拉麵都有人說，總之正餐吃這家，點心吃上面兩家，全部一網打盡剛剛好，完美。<br>'
          },
          {
            type: 'text',
            tag: 'p',
            html: `<br>
            地&#12288;&#12288;址：京都市伏見區深草一ノ坪町38-15 <br>
            營業時間：11:00–15:00；18:00–21:00 (周四公休)<br>`
          },
        ],
      },
      {
        title: '4. 伏見稻荷大社交通',
        contents: [
          { type: 'image', imageSrc: 'kyoto-12.png' },
          {
            type: 'text',
            tag: 'p',
            html: `<br>伏見稻荷大社怎麼去，下面是最常見三種方式：<br><br>
                1. JR奈良線，於「稻荷站」下車即達。<br>
                2. 京阪本線，於「伏見稻荷站」下車，向東步行5分鐘。<br>
                3. 京都市營巴士，南5系統到「稻荷大社前」下車，向東步行7分鐘。<br><br>`
          },
        ],
      },
      {
        title: '5. 伏見稻荷大社附近景點',
        contents: [
          { type: 'image', imageSrc: 'kyoto-13.png' },
          {
            type: 'text',
            tag: 'p',
            html: `<br>從波比後製的京都景點地圖發現，伏見稻荷大社位於「No.2伏見稻荷周邊」紅色區塊。伏見稻荷大社附近景點，最知名的只有去東福寺賞楓，其他可說是幾乎沒有熱門景點。<br><br>
            在規劃伏見稻荷大社一日遊時，很多人會想再去No.1清水寺區塊、No.6金閣寺區塊、No.3嵐山區塊三大重點。
            除了清水寺稍微近一點外，另兩個都有點遠，直接參加熱門京都熱門一日遊行程會方便很多，一併介紹給大家`
          },
        
        ],
      },
    ];

    // 取得圖片
    const folder = 'area_page/region05';
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
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    //Top-button hide&show function
    function topButtonToggle() {
      const topButton = document.getElementById('top-button')
      if (window.scrollY > this.prevScrollY) {
        topButton.classList.remove('show');
      }
      else {
        topButton.classList.add('show');
      }
      this.prevScrollY = window.scrollY;
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