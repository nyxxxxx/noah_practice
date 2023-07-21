<template>
<div></div>
</template>

<script>
export default {
  name: 'OpenWeather',
  data() {
    return {
      api_key: process.env.VUE_APP_WEATHER_KEY,
      base_url: 'https://api.openweathermap.org/data/2.5/',
      query: 'Taichung',
      weather: {},
      date: ''
    }
  },
  methods: {
    async fetchWeather() {
      const data = await fetch(`${this.base_url}weather?lat=43.0645&lon=141.3466&APPID=${this.api_key}`)
      console.log(await data.json())
    }
  },
  created() {
    this.fetchWeather()
  }
}

</script>