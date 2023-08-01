<template>
  <nav-bar></nav-bar>
  <!-- A-div -->
  <div class="container-lg">
    <!-- BreadCrumb -->
    <bread-crumb></bread-crumb>
    <div class="A-div">
      <div class="A-title">
        <h1 class="title"><img src="@/assets/images/logo/title_logo.png" alt="">區域風景</h1>
      </div>
      <div class="row flex-column-reverse flex-md-row">
        <div class="col-md col-lg"><japan-map /></div>
        <div class="col-md col-lg mb-5 mb-md-0">
          <div class="row">
            <div class="col">
              <div class="intro-box">
                <area-intro v-bind="show_content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><!-- A-div container end -->
  <!-- B-div -->
  <div class="container-lg">
    <div class="B-div">
      <div class="B-title">
        <h1 class="title"><img src="@/assets/images/logo/title_logo.png" alt="">探索地區</h1>
      </div>

      <div class="row row-cols-2 row-cols-md-4 gy-3 gy-md-4">
        <div v-for="item in areaData" :key="item.id" class="col position-relative">
          <div class="img-box">
            <router-link :to="item.regionLink">
              <img :src="getImgUrl(item.regionImgSrc)" alt="" srcset="" class="w-100">
              <h5 class="position-absolute fifth-title">{{ item.region }}</h5>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- B-div container end -->

  <!-- Footer-div -->
  <div class="footer-div">
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import BreadCrumb from '@/components/BreadCrumb.vue';
import AreaIntro from '@/components/AreaIntro.vue';
import JapanMap from '@/components/JapanMap.vue';
import { onMounted, ref } from 'vue';
import $ from 'jquery';

export default {
  components: {
    NavBar,
    Footer,
    BreadCrumb,
    AreaIntro,
    JapanMap,
  },
  setup() {

    let show_content = ref({
      region: '北海道',
      title: '札幌 | 旭川 | 函館 | 小樽',
      content: '北海道（Hokkaido）位於日本最北部，面積約77,983平方km，人口約547萬人，省會位於札幌市。 北海道瀕臨日本海、鄂霍次克海和太平洋，土地遼闊，自然優美，物產豐富。 北海道冬季冰天雪地，可觀賞冰雪節、流冰，也是冬季旅遊和滑雪的勝地。 夏季原野鮮花盛開，氣候涼爽，是日本著名避暑勝地。',
      ImgSrc1: 'A-region01-01.png',
      ImgSrc2: 'A-region01-02.png',
      ImgSrc3: 'A-region01-03.png',
      ImgSrc4: 'A-region01-04.png',
    });
    let areaData = ref([
      {
        id: 1,
        region: '北海道',
        regionImgSrc: 'B-body01.png',
        regionLink: { name: 'area-hokkaido' },
        title: '札幌 | 旭川 | 函館 | 小樽',
        content: '北海道（Hokkaido）位於日本最北部，面積約77,983平方km，人口約547萬人，省會位於札幌市。 北海道瀕臨日本海、鄂霍次克海和太平洋，土地遼闊，自然優美，物產豐富。 北海道冬季冰天雪地，可觀賞冰雪節、流冰，也是冬季旅遊和滑雪的勝地。 夏季原野鮮花盛開，氣候涼爽，是日本著名避暑勝地。',
        ImgSrc1: 'A-region01-01.png',
        ImgSrc2: 'A-region01-02.png',
        ImgSrc3: 'A-region01-03.png',
        ImgSrc4: 'A-region01-04.png',
      },
      {
        id: 2,
        region: '東北',
        regionImgSrc: 'B-body02.png',
        regionLink: '',
        title: '宮城 | 福島 | 青森 | 山形 | 秋田 | 岩手',
        content: '日本的東北地區位於本州島的東北方，是一處擁有眾多秘境絕景與四季景緻的旅遊寶地，例如擁有東北最大都市仙台的宮城縣、彷彿精靈園地的青森縣奧入瀨溪流、秋楓美不勝收的秋田縣抱返溪谷、吸引全世界前來欣賞的山形藏王樹冰等等，隨便舉例都是傳說級的美景。',
        ImgSrc1: 'A-region02-01.png',
        ImgSrc2: 'A-region02-02.png',
        ImgSrc3: 'A-region02-03.png',
        ImgSrc4: 'A-region02-04.png',
      },
      {
        id: 3,
        region: '關東',
        regionImgSrc: 'B-body03.png',
        regionLink: '',
        title: '東京 | 千葉 | 群馬 | 神奈川 | 栃木 | 埼玉',
        content: '位於本州中部偏東靠太平洋，由茨城縣、栃木縣、群馬縣、埼玉縣、千葉縣、東京都、神奈川縣所構成，有時還會加上山梨縣。其以東京為中心，居住人口超過4千3百萬，聚集超過日本三分之一的人口；以關東地方1都3縣為核心的東京都會區（首都圈），人口逾3千7百萬人，是世界最大都市圈。',
        ImgSrc1: 'A-region03-01.png',
        ImgSrc2: 'A-region03-02.png',
        ImgSrc3: 'A-region03-03.png',
        ImgSrc4: 'A-region03-04.png',
      },
      {
        id: 4,
        region: '中部',
        regionImgSrc: 'B-body04.png',
        regionLink: '',
        title: '石川 | 長野 | 新瀉 | 靜岡 | 愛知 | 富山',
        content: '中部地區是日本旅遊資源的寶庫，風景秀麗且充滿歷史文化，也以溫泉聞名，提供一流的溫泉度假體驗。',
        ImgSrc1: 'A-region04-01.png',
        ImgSrc2: 'A-region04-02.png',
        ImgSrc3: 'A-region04-03.png',
        ImgSrc4: 'A-region04-04.png',
      },
      {
        id: 5,
        region: '關西',
        regionImgSrc: 'B-body05.png',
        regionLink: '',
        title: '石川 | 長野 | 新瀉 | 靜岡 | 愛知 | 富山',
        content: '中部地區是日本旅遊資源的寶庫，風景秀麗且充滿歷史文化，也以溫泉聞名，提供一流的溫泉度假體驗。',
        ImgSrc1: 'A-region04-01.png',
        ImgSrc2: 'A-region04-02.png',
        ImgSrc3: 'A-region04-03.png',
        ImgSrc4: 'A-region04-04.png',
      },
      {
        id: 6,
        region: '中國',
        regionImgSrc: 'B-body06.png',
        regionLink: '',
        title: '石川 | 長野 | 新瀉 | 靜岡 | 愛知 | 富山',
        content: '中部地區是日本旅遊資源的寶庫，風景秀麗且充滿歷史文化，也以溫泉聞名，提供一流的溫泉度假體驗。',
        ImgSrc1: 'A-region04-01.png',
        ImgSrc2: 'A-region04-02.png',
        ImgSrc3: 'A-region04-03.png',
        ImgSrc4: 'A-region04-04.png',
      },
      {
        id: 7,
        region: '四國',
        regionImgSrc: 'B-body07.png',
        regionLink: '',
        title: '石川 | 長野 | 新瀉 | 靜岡 | 愛知 | 富山',
        content: '中部地區是日本旅遊資源的寶庫，風景秀麗且充滿歷史文化，也以溫泉聞名，提供一流的溫泉度假體驗。',
        ImgSrc1: 'A-region04-01.png',
        ImgSrc2: 'A-region04-02.png',
        ImgSrc3: 'A-region04-03.png',
        ImgSrc4: 'A-region04-04.png',
      },
      {
        id: 8,
        region: '九州沖繩',
        regionImgSrc: 'B-body08.png',
        regionLink: '',
        title: '石川 | 長野 | 新瀉 | 靜岡 | 愛知 | 富山',
        content: '中部地區是日本旅遊資源的寶庫，風景秀麗且充滿歷史文化，也以溫泉聞名，提供一流的溫泉度假體驗。',
        ImgSrc1: 'A-region04-01.png',
        ImgSrc2: 'A-region04-02.png',
        ImgSrc3: 'A-region04-03.png',
        ImgSrc4: 'A-region04-04.png',
      },
    ]);
    //取得圖片連結
    function getImgUrl(src) {
      return require(`@/assets/images/area_page/${src}`);
    }
    //改變內容function
    function change_content(id) {
      const area = areaData.value.find(area => area.id === id);
      if (area) {
        show_content.value.region = area.region;
        show_content.value.title = area.title;
        show_content.value.content = area.content;
        show_content.value.ImgSrc1 = area.ImgSrc1;
        show_content.value.ImgSrc2 = area.ImgSrc2;
        show_content.value.ImgSrc3 = area.ImgSrc3;
        show_content.value.ImgSrc4 = area.ImgSrc4;
      }
    }
    onMounted(() => {
      $(document).ready(function () {
        for (let i = 1; i <= 7; i++) {
          //先將標記過的地圖、標題變回原來的顏色
          //再依hover到的地圖將元素變色
          $(`#region-${i}`).hover(
            function () {
              //地圖變回原色
              $('path').filter(function () {
                return $(this).css('fill').replace(/\s/g, '') === 'rgb(255,165,137)';
              }).css('fill', '#98D98E');
              $(`#region-${i}`).css('fill', '#FFA589');
              change_content(i);
            },
          );
        }
        //沖繩and九州
        $('#region-8').hover(function () {
          $('path').filter(function () {
            return $(this).css('fill').replace(/\s/g, '') === 'rgb(255,165,137)';
          }).css('fill', '#98D98E');
          $('#region-8').css('fill', '#FFA589');
          $('#region-8-2').css('fill', '#FFA589');
            change_content(8);
        });
        $('#region-8-2').hover(function () {
          $('path').filter(function () {
            return $(this).css('fill').replace(/\s/g, '') === 'rgb(255,165,137)';
          }).css('fill', '#98D98E');
          $('#region-8').css('fill', '#FFA589');
          $('#region-8-2').css('fill', '#FFA589');
            change_content(8);
        });
        //預設地區顏色
        $('.sec-title').filter(function () {
          return $(this).css('color').replace(/\s/g, '') === 'rgb(255,165,137)';
        }).css('color', 'black');
        $('#region-1').css('fill', '#FFA589');
      });
    });

    return {
      show_content,
      areaData,
      getImgUrl,
    }
  },
}

</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //fontcss

.title {
  color: $primary-color;
  margin-bottom: 30px;

  img {
    vertical-align: initial;
    margin-right: 1rem;
  }
}

.sec-title {
  font-weight: bold;
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

//A-div css
.A-div {
  margin-bottom: 30px;

  .intro-box {
    border-radius: 5px;
    overflow: hidden;
  }

}

//B-body css
.B-div {
  margin-bottom: 30px;

  h5 {
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    font-weight: bold;
    color: white;
  }

}
</style>