<template>
    <div>
      <!-- 漢堡選單按鈕 -->
      <button id="toggler-button" type="button" class="position-relative" @click="toggleNavbar">
        <!-- 上方橫線 -->
        <span class="toggler-stick" id="ts-1" :style="{ transform: showNavbar ? 'rotate(45deg)' : '' }"></span>
        <!-- 中間橫線 -->
        <span class="toggler-stick" id="ts-2" v-if="!showNavbar"></span>
        <!-- 下方橫線 -->
        <span class="toggler-stick" id="ts-3" :style="{ transform: showNavbar ? 'rotate(-45deg)' : '' }"></span>
      </button>
  
      <!-- Nav Drawer 內容 -->
      <div class="nav-drawer" v-if="showNavbar">
        <ul>
          <li>選項1</li>
          <li>選項2</li>
          <li>選項3</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showNavbar: false,
      };
    },
    methods: {
      toggleNavbar() {
        this.showNavbar = !this.showNavbar;
      },
    },
  };
  </script>
  
  <style lang="scss">
  #toggler-button {
    height: 27px;
    width: 24px;
    border: none;
    margin-left: 16px;

    .toggler-stick {
      content: '';
      display: inline-block;
      height: 3px;
      width: 24px;
      // padding: 20px 0;
      background-color: black;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  </style>
  