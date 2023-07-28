<template>
  <div class="container-fluid gx-0">
    <div class="footer">
      <div class="container">
        <div class="footer-logo-div d-flex justify-content-between">
          <div class="logo-div">
            <img src="@/assets/images/logo/logo3.png" alt="" style="height: 50px;">
          </div>
          <div class="icon-div d-flex align-items-center">
              <a href="#" @click.prevent> <img src="@/assets/images/logo/footer-fb.png" alt="" srcset=""></a>
              <a href="#" @click.prevent> <img src="@/assets/images/logo/footer-ig.png" alt="" srcset=""></a>
              <a href="#" @click.prevent> <img src="@/assets/images/logo/footer-twitter.png" alt="" srcset=""></a>
          </div>
        </div>
        <div class="row">
          <p class="text-center" id="copy-right">Non Copyrighted © 2023 Design and upload by You-Cheng</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //font css

.footer {
  // height: 120px;
  background-color: $primary-color;
  color: white;
  .footer-logo-div {
    padding: 24px 0;
    .icon-div {
      a {
        margin-right: 15px;
        img {
          display: inline-block;
        }
      }
    }
  }
  #copy-right {
    margin-bottom: 24px;

    &::before {
      content: '';
      display: block;
      height: 2px;
      width: 100%;
      background-color: white;
      margin-bottom: 24px;
    }
  }
}</style>