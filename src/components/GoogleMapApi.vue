<template>
    <div id="map"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'

const loader = new Loader({
  apiKey: process.env.VUE_APP_GOOGLEMAP_KEY,
  version: 'weekly',
//   libraries: ['places']
})

const map = ref([])

onMounted(async () => {
  await loader
    .load()
    .then(google => {
      map.value = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      })
    })
    .catch(error => {
      console.log(error)
    })
    .then(function () {
    // always executed
    })
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //fontcss
#map {
    width: 500px;
    height: 350px;
}
</style>