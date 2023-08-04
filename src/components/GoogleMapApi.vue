<template>
  <div id="map"></div>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
import { Loader } from '@googlemaps/js-api-loader';

export default {
  props: {
    lat: {
      type: Number,
      // default: 43.11,
    },
    lon: {
      type: Number,
      // default: 141.00,
    },
    marker_title: {
      type: String,
      // default: 141.00,
    },
  },
  setup(props) {
    const map = ref(null);
    const marker = ref(null);

    const initMap = (lat, lon) => {
      if (!lat || !lon) return;

      const loader = new Loader({
        apiKey: process.env.VUE_APP_GOOGLEMAP_KEY,
        version: 'weekly',
        libraries: ['maps', 'marker'],
      });

      loader.load().then(async () => {
        const { google } = window;

        if (!google || !google.maps) {
          console.error("Google Maps API 未載入.");
          return;
        }

        map.value = new google.maps.Map(document.getElementById("map"), {
          center: { lat, lng: lon },
          zoom: 16,
        });
        // 在地圖上建立標記
        marker.value = new google.maps.Marker({
          map: map.value,
          position: { lat, lng: lon },
          title: props.marker_title,
        });
      });
    };

    onMounted(() => {
      initMap(props.lat, props.lon);
    });

    watch(() => [props.lat, props.lon], ([newLat, newLon]) => {
      initMap(newLat, newLon);
    });

    return { map };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss';
@import '@/assets/css/font.scss';

#map {
  width: 100%;
  height: 450px;
}
</style>
