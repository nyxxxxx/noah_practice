<template>
  <div class="card-box">
    <div class="">
      <img :src="require(`@/assets/images/area_page/content/${event_img}`)" alt="" srcset="" class="w-100">
    </div>
    <h4>{{ event_title }}</h4>
  </div>
</template>

<script>
export default {
  name: 'AreaCard',
  props: {
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
    box-shadow: 0px 0px 13px -2px rgba(94, 94, 94, 0.78);
    -webkit-box-shadow: 0px 0px 13px -2px rgba(94, 94, 94, 0.78);
    -moz-box-shadow: 0px 0px 13px -2px rgba(94, 94, 94, 0.78);

    img {
      transform: scale(1.1);
    }
    h4 {
      color:$primary-color;
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
  }

  text-align: center;
}
</style>