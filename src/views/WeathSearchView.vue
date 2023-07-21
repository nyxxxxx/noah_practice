<template>
  <NavBar></NavBar>
  
  <div class="container">
    <bread-crumb></bread-crumb>
    <h1>This is hokkaido page</h1>
    <h4>查詢天氣</h4>
    <input type="text" v-model.lazy="city">
    <h4>當地天氣</h4>
    <weather-api :query-city="city"></weather-api>
    <p>city: {{ city }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Navbar.vue'
import BreadCrumb from '@/components/BreadCrumb.vue';
import WeatherApi from '@/components/WeatherApi.vue';

export default {
  components: {
    NavBar,
    BreadCrumb,
    WeatherApi,
  },
  data(){
    return{
      city:'Taipei'
    }
  },
}
</script>