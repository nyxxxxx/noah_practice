import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

// import jquery
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

import MasonryWall from '@yeger/vue-masonry-wall'



createApp(App).use(router).use(MasonryWall).mount('#app');
