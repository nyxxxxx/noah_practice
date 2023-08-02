<template>
  <router-link :to="router_name" class="text-decoration-none">
    <div class="card-box">
      <div class="">
        <img :src="require(`@/assets/images/area_page/content/${event_img}`)" alt="" srcset="" class="w-100">
      </div>
      <h4 class="fourth-title">{{ event_title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'AreaCard',
  props: {
    router_name: {
      String,
      default:'',
    },
    event_img: String,
    event_title: String,
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //fontcss

.card-box {
  border-radius: 5px;
  overflow: hidden;
  transition: box-shadow 0.15s;

  //hover卡片 卡片邊框陰影+裡面圖片放大+變色
  &:hover {
    box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.31);
    -webkit-box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.31);
    -moz-box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.31);
    img {
      transform: scale(1.1);
    }

    h4 {
      color: $primary-color;
    }
  }

  div {
    overflow: hidden;

    img {
      transition: all 0.15s;
    }
  }

  h4 {
    font-weight: bold;
    color: $font-color;
  }

  text-align: center;
}
</style>