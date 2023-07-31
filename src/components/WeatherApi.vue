<template>
  <div v-if="weather && Object.keys(weather).length !== 0" class="weather-div rounded-1">
    <div class="row">
      <div class="col">
        <h4 class="fourth-title">及時天氣</h4>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h5 class="fifth-title">地點:{{ queryCity_zh }} </h5>
        <h5 class="fifth-title">溫度:{{ weather.current.temp_c }}°C </h5>
        <h5 class="fifth-title">情況:{{ weather.current.condition.text }}</h5>
      </div>
      <div class="col">
        <img :src="weather.current.condition.icon" alt="" class="w-50">
      </div>
    </div>
    <!-- <p> {{ weather.location.name}}</p> -->
  </div>
</template>

<script>
import { watch } from 'vue';
import { ref, watchEffect } from 'vue';

export default {
  name: 'WeatherApi',
  props: {
    queryCity: String,
    queryCity_zh: String,
  },
  setup(props, { emit }) {
    const api_key = process.env.VUE_APP_WEATHERAPI_KEY;
    const base_url = 'https://api.weatherapi.com/v1/';
    const weather = ref({});
    const query = ref(props.queryCity);
    const emits = ['weatherLocation'];

    async function fetchWeather() {
      const data = await fetch(`${base_url}current.json?key=${api_key}&q=${query.value}&lang=zh_tw&api=no`);
      weather.value = await data.json();
    }

    // Use watchEffect to execute fetchWeather whenever queryCity changes
    watchEffect(() => {
      if (props.queryCity) {
        query.value = props.queryCity;
        fetchWeather();
      }
    });
    watch(
      weather,
      (newWeather) => {
        if (newWeather.location) {
          // console.log('緯度'+newWeather.location.lat);
          // console.log('經度'+newWeather.location.lon);
          emit('weatherLocation', {
            lat: newWeather.location.lat,
            lon: newWeather.location.lon,
          });
        }
      },
      { deep: true },
    );


    return {
      weather,
      emits,
    };
  },
}
</script>


<style lang="scss">
.weather-div {
  box-shadow: 0px 0px 17px 1px rgba(176, 176, 176, 0.73);
  -webkit-box-shadow: 0px 0px 17px 1px rgba(176, 176, 176, 0.73);
  -moz-box-shadow: 0px 0px 17px 1px rgba(176, 176, 176, 0.73);
  padding: 8px 0;

  .fourth-title {
    // font-weight: bold;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .fourth-title::after {
    content: '';
    width: 100%;
    height: 2px;
    margin-top: 8px;
    display: block;
    background-color: rgb(199, 199, 199);
  }

  .fifth-title {
    // font-weight: bold;
    padding-left: 0.75rem;
  }
}</style>