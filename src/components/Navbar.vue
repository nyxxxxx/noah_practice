<template>
  <nav class="navbar">
    <div class="container-fluid">
      <div class="container d-flex justify-content-between">
        <div class="d-inline-block">
          <router-link to="/"><img src="@/assets/images/logo/logo.png" alt=""></router-link>
        </div>
        <ul class="">
          <li class="nav-item"><router-link to="/area">區域風景</router-link></li>
          <li class="nav-item"><router-link to="/">季節景點</router-link></li>
          <li class="nav-item"><router-link to="/">文化風采</router-link></li>
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
$primary-color: #68BE8D; //若竹色
$secondary-color: #98D98E; //若綠
$support-color: #FFA589;

$navbar-bg-color: $primary-color;
$navlink-color: rgb(255, 255, 255);

.navbar {
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
      color: black;
      font-weight: bold;
      text-decoration: none;
      padding: 30px 15px;
    }
    a:hover{
        background-color: $primary-color;
        color: white;
      }
  }
}


// .router-link-exact-active {
//   // text-decoration: none;
// }
</style>
