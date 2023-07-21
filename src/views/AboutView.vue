<template>
  <NavBar></NavBar>
  <div class="container">
    <bread-crumb></bread-crumb>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Navbar.vue'
import BreadCrumb from '@/components/BreadCrumb.vue';

export default {
  components: {
    NavBar,
    BreadCrumb,
  }
}
</script>