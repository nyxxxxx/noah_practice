<template>
  <div class="sticky-top">
    <div class=" position-relative"></div>
    <nav class="navbar  shadow">
      <div class="container-fluid">
        <div class="container-fluid d-flex justify-content-between">
        </div>

        <div class="container-lg d-flex justify-content-between align-items-center">
          <div class="d-inline-block">
            <router-link to="/"><img src="@/assets/images/logo/logo3.png" alt="" style="height: 40px;"></router-link>
          </div>
          <div class="d-flex">
            <!-- 筆電尺寸以上 -->
            <div class="d-none d-lg-flex">
              <ul class="" id="nav-menu">
                <li class="nav-item"><router-link to="/area" class="first-link">區域風景</router-link></li>
                <li class="nav-item drop-menu">
                  <a href="" @click.prevent="" class="first-link">季節景點</a>
                  <ul class="shadow">
                    <router-link to="/season/spring">
                      <li>春 天</li>
                    </router-link>
                    <router-link to="">
                      <li>夏 天</li>
                    </router-link>
                    <router-link to="">
                      <li>秋 天</li>
                    </router-link>
                    <router-link to="/season/winter">
                      <li>冬 天</li>
                    </router-link>
                  </ul>
                </li>
                <li class="nav-item"><router-link to="/about" class="first-link">關於我們</router-link></li>
              </ul>
            </div>

            <!-- Search bar -->
            <div class="d-flex align-items-center justify-content-end position-relative">
              <form action="" id="search-form" class="position-absolute">
                <input type="text" class="w-100 shadow" id="search-input" placeholder="想去哪裡玩?">
              </form>
              <img :src="getIconUrl(icon_name)" alt="" style="width: 24px;" id="search-button"
                @click="toggle_searchbar()">
            </div>
            <!-- Toggler button -->
            <div class="d-lg-none">
              <button id="toggler-button" type="button" class="position-relative" @click="ToggleNavbar()">
                <span class="toggler-stick" id="ts-1" style="margin-top: 0px;"></span>
                <span class="toggler-stick" id="ts-2" style="margin-top: 9px;"></span>
                <span class="toggler-stick" id="ts-3" style="margin-top: 18px;"></span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </nav>
    <div class="container-fluid position-absolute shadow" style="background-color: white;">
      <div class="d-lg-none">
        <ul id="toggle-menu">
          <li class="nav-item"><router-link to="/area">區域風景</router-link></li>
          <li class="nav-item drop-menu">
            <router-link to="">季節景點</router-link>
            <ul>
              <li><router-link to="/season/spring">春 天</router-link></li>
              <li><router-link to="">夏 天</router-link></li>
              <li><router-link to="">秋 天</router-link></li>
              <li><router-link to="/season/winter">冬 天</router-link></li>
            </ul>
          </li>
          <li class="nav-item"><router-link to="/about">關於我們</router-link></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- <a class="nav-link active" aria-current="page" href="#"><router-link to="/">首頁</router-link></a> -->
</template>

<script>
import { ref, onMounted } from 'vue';
import $ from 'jquery';
export default {
  name: 'NavbarComponet',
  setup() {
    var searchbarIsToggle = false;
    const icon_name = ref('search.png');
    // Search bar Function
    function toggle_searchbar() {
      if (!searchbarIsToggle) {
        $('#nav-menu').fadeOut();
        $('#search-form').css('width', '300px');
        $('#search-input').css('display', 'block').focus();
        searchbarIsToggle = !searchbarIsToggle;
        icon_name.value = 'close.png';
      }
      else {
        $('#nav-menu').fadeIn();
        $('#search-form').css('width', '0px');
        $('#search-input').css('display', 'none');
        searchbarIsToggle = !searchbarIsToggle;
        icon_name.value = 'search.png';

      }
      // document.getElementById('nav-menu').style = "display: none";
    }

    const NavbarIsToggle = ref(false);
    //Toggler Navbar function
    function ToggleNavbar() {
      if (!NavbarIsToggle.value) {
        $('#toggle-menu').slideDown();
        $('#ts-1').css('top', '50%').css('transform', 'rotate(-45deg)');
        $('#ts-2').fadeOut(100);
        $('#ts-3').css('top', '50%').css('transform', 'rotate(45deg)').css('margin-top', '0');
        NavbarIsToggle.value = !NavbarIsToggle.value;
      }
      else {
        $('#toggle-menu').slideUp();
        $('#ts-1').css('top', '0').css('transform', 'initial');
        $('#ts-2').fadeIn(100);
        $('#ts-3').css('top', '0').css('transform', 'initial').css('margin-top', '18px');
        NavbarIsToggle.value = !NavbarIsToggle.value;
      }
    }

    function getIconUrl() {
      return require(`@/assets/images/logo/${icon_name.value}`);
    }

    onMounted(() => {
      getIconUrl();
      //變更底下nav-item ::after
      $('.router-link-exact-active').parent('.nav-item').addClass('active');
      //收合toggle-menu

    });
    return {
      searchbarIsToggle,
      toggle_searchbar,
      NavbarIsToggle,
      ToggleNavbar,
      icon_name,
      getIconUrl,
    }
  },
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
  background-color: white;

  ul {
    display: inline-block;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

  }


  #nav-menu {
    .nav-item {
      list-style: none;
      display: inline-block;

      &::after {
        content: '';
        display: block;
        height: 4px;
        width: 0%;
        background-color: $primary-color;
        transition: all 0.2s;
        margin: 0 auto;
      }

      .first-link {
        color: $nav-font-color;
        font-weight: 500;
        font-size: 1.1rem;
        text-decoration: none;
        padding: 30px 15px;
        transition: all 0.3s;

        &:not(.router-link-exact-active) {

          &:hover {
            background-color: $primary-color;
            color: white;
          }
        }
      }
    }

    .drop-menu {
      position: relative;

      &:hover {
        ul {
          display: block;
        }
      }

      ul {
        top: 55px;
        display: none;
        z-index: 999;
        position: absolute;
        list-style: none;
        flex-direction: column;
        width: 100%;

        a {

          text-decoration: none;
          li {
            padding: 10px;
            background-color: white;
            color: $font-color;
            &:hover {
              background-color: $primary-color;
              color: white;
            }
          }
        }
      }
    }

    .active {
      &::after {
        width: 80%;
      }
    }

  }

  #toggler-button {
    height: 27px;
    width: 24px;
    border: none;
    margin-left: 16px;
    background-color: #FFF;

    .toggler-stick {
      content: '';
      display: inline-block;
      height: 3px;
      width: 24px;
      // padding: 20px 0;
      background-color: $font-color;
      position: absolute;
      right: 0;
      top: 0;
      transition: all 0.3s;
    }
  }



  #search-form {
    right: 30px;
    width: 0;
    transition: all 0.2s;

    #search-input {
      border: 1px solid rgba($color: #dadada, $alpha: 0.8);
      border-radius: 25px;
      padding: 8px 16px;
      display: none;

      &:focus {
        outline: none;
      }
    }
  }

  #search-button {
    margin-left: 30px;

    &:hover {
      cursor: pointer;
    }
  }



}


#toggle-menu {
  list-style: none;
  display: none;
  padding: 0;

  .nav-item {
    padding: 10px 0;

    a {
      text-decoration: none;
      color: $nav-font-color;
      font-weight: 500;
      font-size: 1.1rem;
    }
  }

  .drop-menu {
    ul {
      list-style: none;
    }
  }
}

@media (max-width: 567px) {
  #search-form {
    max-width: 250px;
  }
}</style>


