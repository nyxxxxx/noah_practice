<template>
  <nav-bar></nav-bar>
  <div class="container">
    <!-- BreadCrumb -->
    <bread-crumb></bread-crumb>
    <div class="A-div">
      <div class="A-title title">
        <h1><img src="@/assets/images/logo/title_logo.png" alt="">區域風景</h1>
      </div>
      <div class="row">
        <div class="col"><japan-map></japan-map></div>
        <div class="col">
          <router-link :to="{name: 'area-hokkaido'}"><h2>北海道</h2></router-link>
          <h2 id="area-1">北海道</h2>
          <h2 id="area-2">東北</h2>
          <h2 id="area-3">關東</h2>
          <h2 id="area-4">中部</h2>
          <h2 id="area-5">關西</h2>
          <h2 id="area-6">中國</h2>
          <h2 id="area-7">四國</h2>
          <h2 id="area-8">九州沖繩</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="about">
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Navbar.vue'
import BreadCrumb from '@/components/BreadCrumb.vue';
import JapanMap from '@/components/JapanMap.vue'
import { onMounted } from 'vue';

import $ from 'jquery';

export default {
  components: {
    NavBar,
    JapanMap,
    BreadCrumb,
  },
  setup() {
    onMounted(() => {
      for (let i = 1; i <= 8; i++) {
        $(`path[data-region="${i}"]`).hover(
          function () {
            $(`#area-${i}`).css('color', 'red');
          },
          function () {
            $(`#area-${i}`).css('color', 'black');
          }
        );
        $(`#area-${i}`).hover(
          function () {
            // console.log($(`path[data-region="${i}"]`).attr('fill'));
            $(`path[data-region="${i}"]`).attr('fill', '#68BE8D');
          },
          function () {
            $(`path[data-region="${i}"]`).attr('fill', '#98D98E');
          }
        );
      }
    });
  }
}

</script>

<style lang="scss">
h2 {
  cursor: pointer;
}
</style>