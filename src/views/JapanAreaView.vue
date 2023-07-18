<template>
  <nav-bar></nav-bar>
  <japan-map></japan-map>
  <div class="about">
    <h1>This is an area page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Navbar.vue'
import JapanMap from '@/components/JapanMap.vue'

export default {
  components: {
    NavBar,
    JapanMap,
  }
}
</script>