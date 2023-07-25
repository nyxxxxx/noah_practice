<template>
  <nav class="navbar  shadow">
    <div class="container-fluid">
      <div class="container d-flex justify-content-between">
        <div class="d-inline-block">
          <router-link to="/"><img src="@/assets/images/logo/logo.png" alt=""></router-link>
        </div>
        <ul class="">
          <li class="nav-item"><router-link to="/area">區域風景</router-link></li>
          <li class="nav-item"><router-link to="/">季節景點</router-link></li>
          <!-- <li class="nav-item"><router-link to="/">文化風采</router-link></li> -->
          <li class="nav-item"><router-link to="/about">關於我們</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- <a class="nav-link active" aria-current="page" href="#"><router-link to="/">首頁</router-link></a> -->
</template>

<script>
export default {
  name: 'NavbarComponet',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //fontcss

$navbar-bg-color: $primary-color;
$navlink-color: rgb(255, 255, 255);

.navbar {
  z-index: 999;
  height: 80px;
  ul {
    display: inline-block;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  .nav-item {
    list-style: none;
    display: inline-block;
  
    a {
      color: $nav-font-color;
      font-weight: bold;
      text-decoration: none;
      padding: 30px 15px;
      transition: all 0.3s;
      &:hover {
        background-color: $primary-color;
        color: white;
      }
    }
  }
}


// .router-link-exact-active {
//   // text-decoration: none;
// }
</style>
