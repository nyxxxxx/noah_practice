<template>
    <div class="row row-cols-2">
      <div class="col gx-0">
        <img id="intro-img-1" :src="require(`@/assets/images/area_page/${ImgSrc1}`)" alt="" srcset="" class="w-100">
      </div>
      <div class="col gx-0">
        <img id="intro-img-2" :src="require(`@/assets/images/area_page/${ImgSrc2}`)" alt="" srcset="" class="w-100">
      </div>
      <div class="col gx-0">
        <img id="intro-img-3" :src="require(`@/assets/images/area_page/${ImgSrc3}`)" alt="" srcset="" class="w-100">
      </div>
      <div class="col gx-0">
        <img id="intro-img-4" :src="require(`@/assets/images/area_page/${ImgSrc4}`)" alt="" srcset="" class="w-100">
      </div>
    </div>
    <div class="row">
      <div class="intro">
        <h4 id="intro-title" class="fourth-title">{{ title }}</h4>
        <p id="intro-content"> {{ content }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AreaIntro',
  props: {
    ImgSrc1: String,
    ImgSrc2: String,
    ImgSrc3: String,
    ImgSrc4: String,
    title: String,
    content: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //fontcss

.intro {
  background-color: $primary-color;


  .fourth-title {
    padding: 0 12px;
    margin-top: 0.5rem;
    color: white;
    font-weight: bold;
  }

  p {
    padding: 0 12px;
    color: white;
    font-weight: bold;
  }
}
</style>