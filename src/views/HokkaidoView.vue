<template>
  <NavBar></NavBar>
  <bread-crumb></bread-crumb>
  <div>
    <h1>This is hokkaido page</h1>
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