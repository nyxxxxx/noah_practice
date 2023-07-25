<template>
  <div class="position-relative ind-div">
    <img :src="require(`@/assets/images/area_page/content/${img_file}`)" alt="" class="w-100 ind-img">
    <div class="position-absolute text-center ind-icon">
      <img :src="require(`@/assets/images/area_page/content/${icon_file}`)" alt="">
      <h4 class="fourth-title">{{ icon_title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AreaIcon',
  props: {
    img_file: String,
    icon_file: String,
    icon_title: String,
  },
  setup() {
    // console.log(props);
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //fontcss

.ind-div {
  border-radius: 5px;
  overflow: hidden;
  .ind-img {
    filter: brightness(85%);
    transition: all 0.15s;

  }
  &:hover {
    cursor: pointer;
    .ind-img {
      filter: brightness(100%);
      transform: scale(1.1);
    }
  }

  .ind-icon {
    left: 0;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
      width: 80%;
    }

    .fourth-title {
      color: white;
      font-weight: bold;
    }
  }
}</style>