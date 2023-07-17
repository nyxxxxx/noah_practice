<template>
  <NavBar></NavBar>

  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Navbar.vue'

export default {
  components: {
    NavBar,
  }
}
</script>