<template>
  <NavBar></NavBar>
  
  <div class="container">
    <bread-crumb></bread-crumb>
    <h1>This is hokkaido page</h1>
    <!-- <h4>查詢天氣</h4>
    <input type="text" v-model.lazy="city"> -->
    <h4>當地天氣</h4>
    <weather-api :query-city="city"></weather-api>
    <p>city: {{ city }}</p>
    <hr>
    <h4>GoogleMap</h4>
    <google-map-api></google-map-api>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Navbar.vue'
import BreadCrumb from '@/components/BreadCrumb.vue';
import WeatherApi from '@/components/WeatherApi.vue';
import GoogleMapApi from '@/components/GoogleMapApi.vue';

export default {
  components: {
    NavBar,
    BreadCrumb,
    WeatherApi,
    GoogleMapApi,
  },
  data(){
    return{
      city:'Hokkaido'
    }
  },
}
</script>