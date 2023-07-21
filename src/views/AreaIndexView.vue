<template>
  <nav-bar></nav-bar>
  <!-- A-div -->
  <div class="container">
    <!-- BreadCrumb -->
    <bread-crumb></bread-crumb>
    <div class="A-div">
      <div class="A-title">
        <h1 class="title"><img src="@/assets/images/logo/title_logo.png" alt="">區域風景</h1>
      </div>
      <div class="row">
        <div class="col"><japan-map></japan-map></div>
        <div class="col">
          <div class="intro-box">

            <div class="row">
              <!-- 左半部 -->
              <div class="col-9">
                <area-card areaImgSrc1="B-body01.png" areaImgSrc2="B-body02.png" areaImgSrc3="B-body03.png"
                  areaImgSrc4="B-body04.png" :areaTitle="show_content.title" :areaContent="show_content.content" />
              </div>
              <!-- 右半部 -->
              <div class="col-3">
                <h2 class="sec-title" id="area-1" @mouseenter="change_content(1)">北海道</h2>
                <h2 class="sec-title" id="area-2" @mouseenter="change_content(2)">東北</h2>
                <h2 class="sec-title" id="area-3">關東</h2>
                <h2 class="sec-title" id="area-4">中部</h2>
                <h2 class="sec-title" id="area-5">關西</h2>
                <h2 class="sec-title" id="area-6">中國</h2>
                <h2 class="sec-title" id="area-7">四國</h2>
                <h2 class="sec-title" id="area-8">九州沖繩</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><!-- A-div container end -->
  <!-- B-div -->
  <div class="container">
    <div class="B-div">
      <div class="B-title">
        <h1 class="title"><img src="@/assets/images/logo/title_logo.png" alt="">暢玩指南</h1>
      </div>

      <div class="row row-cols-4 gy-4">
        <div class="col position-relative">
          <div class="img-box">
            <router-link :to="{ name: 'area-hokkaido' }">
              <img src="@/assets/images/area_page/B-body01.png" alt="" srcset="" class="w-100">
              <h5 class="position-absolute">北海道</h5>
            </router-link>
          </div>
        </div>
        <div class="col position-relative">
          <div class="img-box">
            <img src="@/assets/images/area_page/B-body02.png" alt="" srcset="" class="w-100">
            <h5 class="position-absolute">東北</h5>
          </div>
        </div>
        <div class="col position-relative">
          <div class="img-box">
            <img src="@/assets/images/area_page/B-body03.png" alt="" srcset="" class="w-100">
            <h5 class="position-absolute">關東</h5>
          </div>
        </div>
        <div class="col position-relative">
          <div class="img-box">
            <img src="@/assets/images/area_page/B-body04.png" alt="" srcset="" class="w-100">
            <h5 class="position-absolute">中部</h5>
          </div>
        </div>
        <div class="col position-relative">
          <div class="img-box">
            <img src="@/assets/images/area_page/B-body05.png" alt="" srcset="" class="w-100">
            <h5 class="position-absolute">關西</h5>
          </div>
        </div>
        <div class="col position-relative">
          <div class="img-box">
            <img src="@/assets/images/area_page/B-body06.png" alt="" srcset="" class="w-100">
            <h5 class="position-absolute">中國</h5>
          </div>
        </div>
        <div class="col position-relative">
          <div class="img-box">
            <img src="@/assets/images/area_page/B-body07.png" alt="" srcset="" class="w-100">
            <h5 class="position-absolute">四國</h5>
          </div>
        </div>
        <div class="col position-relative">
          <div class="img-box">
            <img src="@/assets/images/area_page/B-body08.png" alt="" srcset="" class="w-100">
            <h5 class="position-absolute">九州沖繩</h5>
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
import JapanMap from '@/components/JapanMap.vue';
import AreaCard from '@/components/AreaCard.vue';
import { onMounted } from 'vue';

import $ from 'jquery';

export default {
  data() {
    return {
      show_content: {
        title: '北海道',
        content: '北海道（Hokkaido）位於日本最北部，面積約77,983平方km，人口約547萬人，省會位於札幌市。 北海道瀕臨日本海、鄂霍次克海和太平洋，土地遼闊，自然優美，物產豐富。 北海道冬季冰天雪地，可觀賞冰雪節、流冰，也是冬季旅遊和滑雪的勝地。 夏季原野鮮花盛開，氣候涼爽，是日本著名避暑勝地。',
      },
      areaData: [
        {
          id: 1,
          title: '北海道',
          content: '北海道（Hokkaido）位於日本最北部，面積約77,983平方km，人口約547萬人，省會位於札幌市。 北海道瀕臨日本海、鄂霍次克海和太平洋，土地遼闊，自然優美，物產豐富。 北海道冬季冰天雪地，可觀賞冰雪節、流冰，也是冬季旅遊和滑雪的勝地。 夏季原野鮮花盛開，氣候涼爽，是日本著名避暑勝地。',
        },
        {
          id: 2,
          title: '東北',
          content: '日本的東北地區位於本州島的東北方，是一處擁有眾多秘境絕景與四季景緻的旅遊寶地，例如擁有東北最大都市仙台的宮城縣、彷彿精靈園地的青森縣奧入瀨溪流、秋楓美不勝收的秋田縣抱返溪谷、吸引全世界前來欣賞的山形藏王樹冰等等，隨便舉例都是傳說級的美景。',
        }
      ]
    }
  },
  components: {
    NavBar,
    Footer,
    JapanMap,
    BreadCrumb,
    AreaCard,
  },
  methods: {
    change_content(id) {
      const area = this.areaData.find(area => area.id === id);
      if (area) {
        this.show_content.title = area.title;
        this.show_content.content = area.content;

      }
    }
  },
  setup() {
    onMounted(() => {
      var intro_data = {
        jq_area_data: [
          {
            id: 1,
            title: '北海道',
            content: '北海道（Hokkaido）位於日本最北部，面積約77,983平方km，人口約547萬人，省會位於札幌市。 北海道瀕臨日本海、鄂霍次克海和太平洋，土地遼闊，自然優美，物產豐富。 北海道冬季冰天雪地，可觀賞冰雪節、流冰，也是冬季旅遊和滑雪的勝地。 夏季原野鮮花盛開，氣候涼爽，是日本著名避暑勝地。',
          },
          {
            id: 2,
            title: '東北',
            content: '日本的東北地區位於本州島的東北方，是一處擁有眾多秘境絕景與四季景緻的旅遊寶地，例如擁有東北最大都市仙台的宮城縣、彷彿精靈園地的青森縣奧入瀨溪流、秋楓美不勝收的秋田縣抱返溪谷、吸引全世界前來欣賞的山形藏王樹冰等等，隨便舉例都是傳說級的美景。',
          },
        ]
      }
      //由Map控制 intro-box
      function change_content_from_map(id) {
        const jq_area = intro_data.jq_area_data.find(jq_area => jq_area.id === id)
        if (jq_area) {
          $('#intro-title').html(jq_area.title);
          $('#intro-content').html(jq_area.content);
        }
      }



      for (let i = 1; i <= 8; i++) {
        //先將標記過的地圖、標題變回原來的顏色
        //再依hover到的地圖將元素變色
        $(`path[data-region="${i}"]`).hover(
          function () {
            $('.sec-title').filter(function () {
              return $(this).css('color').replace(/\s/g, '') === 'rgb(255,165,137)';
            }).css('color', 'black');
            //地圖變回原色
            $('path').filter(function () {
              return $(this).attr('fill') === '#FFA589';
            }).attr('fill', '#98D98E');

            change_content_from_map(i);
          },
        );
        //先將標記過的地圖、標題變回原來的顏色
        //再依hover到的標題將元素變色
        $(`#area-${i}`).hover(
          function () {
            //標題變回原色
            $('.sec-title').filter(function () {
              return $(this).css('color').replace(/\s/g, '') === 'rgb(255,165,137)';
            }).css('color', 'black');
            //地圖變回原色
            $('path').filter(function () {
              return $(this).attr('fill') === '#FFA589';
            }).attr('fill', '#98D98E');
            //標題、地圖變色
            $(`#area-${i}`).css('color', '#FFA589');
            $(`path[data-region="${i}"]`).attr('fill', '#FFA589');

            change_content_from_map(i);

          },
        );
      }
    });
  }
}

</script>

<style lang="scss">
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
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }

}
</style>