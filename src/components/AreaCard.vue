<template>
    <div class="row row-cols-2">
      <div class="col gx-0">
        <img id="intro-img-1" :src="require(`@/assets/images/area_page/${areaImgSrc1}`)" alt="" srcset="" class="w-100">
      </div>
      <div class="col gx-0">
        <img id="intro-img-2" :src="require(`@/assets/images/area_page/${areaImgSrc2}`)" alt="" srcset="" class="w-100">
      </div>
      <div class="col gx-0">
        <img id="intro-img-3" :src="require(`@/assets/images/area_page/${areaImgSrc3}`)" alt="" srcset="" class="w-100">
      </div>
      <div class="col gx-0">
        <img id="intro-img-4" :src="require(`@/assets/images/area_page/${areaImgSrc4}`)" alt="" srcset="" class="w-100">
      </div>
    </div>
    <div class="row">
      <div class="intro">
        <h4 id="intro-title" class="fourth-title">{{ areaTitle }}</h4>
        <p id="intro-content"> {{ areaContent }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AreaCard',
  props: {
    areaImgSrc1: String,
    areaImgSrc2: String,
    areaImgSrc3: String,
    areaImgSrc4: String,
    areaTitle: String,
    areaContent: String,
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