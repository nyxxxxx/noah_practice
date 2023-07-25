<template>
  <div v-if="weather && Object.keys(weather).length !== 0" class="weather-div col-2 rounded-1 text-center">
    <h4 class="fourth-title d-flex flex-column align-items-center g-2">{{ queryCity_zh }}</h4>
    <img :src="weather.current.condition.icon" alt="">
    <h5 class="fifth-title">{{ weather.current.temp_c }}°C {{ weather.current.condition.text }} </h5>
    <!-- <p> {{ weather.location.name}}</p> -->
  </div>
</template>

<script>
export default {
  name: 'WeatherApi',
  data() {
    return {
      api_key: process.env.VUE_APP_WEATHERAPI_KEY,
      base_url: 'https://api.weatherapi.com/v1/',
      weather: {},
      query: '',
    }
  },
  props: {
    queryCity: String,
    queryCity_zh: String,
  },
  methods: {
    async fetchWeather() {
      const data = await fetch(`${this.base_url}current.json?key=${this.api_key}&q=${this.query}&lang=zh_tw&api=no`)
      this.weather = await data.json();

    }
  },
  watch: {
    //監聽props value
    queryCity: {
      //進入有套用天氣元件的網站時先執行一次
      immediate: true,
      //如果queryCity值被變更(有進行搜索其他城市的動作)
      handler(newValue) {
        // console.log('query變更');
        if (newValue) {
          //重新改變搜尋的城市並執行function
          this.query = newValue;
          this.fetchWeather();
        }
      }
    }
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
    font-weight: bold;
  }
  .fourth-title::after {
    content: '';
    width: 80%;
    height: 2px;
    margin-top: 8px;
    display: block;
    background-color: rgb(199, 199, 199);
  }
  .fifth-title {
    font-weight: bold;
  }
}
</style>