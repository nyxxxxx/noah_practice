<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar scroll</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">首頁</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#">季節景點</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#">旅遊靈感</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              文化風采
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">藝文探索</a></li>
              <li><a class="dropdown-item" href="#">傳統習俗</a></li>
              <li><a class="dropdown-item" href="#">美食風情</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">關於我們</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponet',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$navbar-bg-color: rgba(45, 101, 255, 0.7);
$navlink-color: rgb(255, 255, 255);

.navbar {
  background-color: $navbar-bg-color;

  .navbar-brand {
    color: $navlink-color;
  }

  .nav-item {
    a {
      color: $navlink-color;
    }
    .dropdown-item{
      color: black;
    }
  }
}
</style>
