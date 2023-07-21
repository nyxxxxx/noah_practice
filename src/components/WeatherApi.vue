<template>
  <div>
    <div v-if="weather && Object.keys(weather).length !== 0" class="weather-div">
      <div class="col">
        <img :src="weather.current.condition.icon" alt="">
        <p>室溫: {{ weather.current.temp_c }}度 天氣 {{ weather.current.condition.text }}</p>
        <!-- <p> {{ weather.location.name}}</p> -->
      </div>
    </div>
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
      date: '',
    }
  },
  props: {
    queryCity: String,
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