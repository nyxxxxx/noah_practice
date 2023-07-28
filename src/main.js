import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

// import google-font
import './assets/css/font-family.css'; // 導入全局 CSS 文件
// import jquery
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

import MasonryWall from '@yeger/vue-masonry-wall'



createApp(App).use(router).use(MasonryWall).mount('#app');
