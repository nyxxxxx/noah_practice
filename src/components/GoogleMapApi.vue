<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted, ref , defineProps, watch } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'

const loader = new Loader({
  apiKey: process.env.VUE_APP_GOOGLEMAP_KEY,
  version: 'weekly',
  //   libraries: ['places']
})

const props = defineProps({
  lat: String,
  lon: String,
});

const map = ref([])

const initMap = (lat, lon) => {
  if (!lat || !lon) return;

  loader
    .load()
    .then(google => {
      map.value = new google.maps.Map(document.getElementById('map'), {
        center: { lat: parseFloat(lat), lng: parseFloat(lon) },
        zoom: 8
      })
    })
    .catch(error => {
      console.log(error)
    })
}

onMounted(() => {
  initMap(props.lat, props.lon);
})

watch(() => [props.lat, props.lon], ([newLat, newLon]) => {
  console.log('有近來過');
  initMap(newLat, newLon);
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //fontcss

#map {
  width: 100%;
  height: 450px;
}
</style>
