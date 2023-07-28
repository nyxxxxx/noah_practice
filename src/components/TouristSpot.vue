<template>
  <div class="col position-relative">
    <div class="img-box">
      <router-link to="/" class="overflow-hidden h-100">
        <img :src="require(`@/assets/images/${folder_name}/${spot_file}`)" alt="" class="w-100">
        <h5 v-if="title_type === 'h5'" class="fifth-title position-absolute">{{ spot_title }}</h5>
        <h4 v-if="title_type === 'h4'" class="fourth-title position-absolute">{{ spot_title }}</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TouristSpot',
  props: {
    spot_title: String,
    spot_file: String,
    folder_name: String,
    title_type: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //font css

.img-box {
  overflow: hidden;
  border-radius: 5px;

  img {
    filter: brightness(75%);
    transition: all 0.3s;
    &:hover {
      filter: brightness(95%);
      transform: scale(1.1);      
    }
  }
}

.fifth-title {
  left: 1.5rem;
  bottom: 0;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}

.fourth-title {
  left: 1.5rem;
  bottom: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}
</style>