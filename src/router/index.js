import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SeasonView from '@/views/SeasonView.vue'
import JapanAreaView from '@/views/JapanAreaView.vue'
import AreaIndexView from '@/views/AreaIndexView.vue'
import HokkaidoIndexView from '@/views/HokkaidoIndexView.vue'
import HokkaidoView from '@/views/HokkaidoView.vue'
import OtaruView from '@/views/OtaruView.vue'
import AboutView from '@/views/AboutView.vue'

import FontView from '@/views/FontView.vue'
import TestView from '@/views/TestView.vue'





const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '日本旅遊' },
  },
  {
    path: '/season',
    name: 'season',
    component: SeasonView,
    meta: { title: '季節景點' },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: '關於我們' },
  },
  {
    path: '/area',
    name: 'area',
    component: JapanAreaView,
    meta: { title: '區域風景' },
    redirect: { name: 'area-index' },
    children: [{
      path: '',
      name: 'area-index',
      component: AreaIndexView,

    },
    {
      path: 'hokkaido',
      name: 'area-hokkaido',
      component: HokkaidoView,
      meta: { title: '北海道' },
      redirect: { name: 'hokkaido-index' },
      children: [{
        path: '',
        name: 'hokkaido-index',
        component: HokkaidoIndexView,
      },
      {
        path: 'otaru',
        name: 'otaru',
        component: OtaruView,
        meta: { title: '小樽市' },
      }]
    }]
  },
  {
    path: '/font',
    name: 'font',
    component: FontView,
    meta: { title: '字體' },
  },
  {
    path: '/test',
    name: 'test',
    component: TestView,
    meta: { title: '測試' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  // console.log(to);
  document.title = to.meta.title;
  next();
});

export default router
