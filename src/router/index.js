import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SeasonWinterView from '@/views/SeasonWinterView.vue'
import SeasonSpringView from '@/views/SeasonSpringView.vue'
import JapanAreaView from '@/views/JapanAreaView.vue'
import AreaIndexView from '@/views/AreaIndexView.vue'
import HokkaidoView from '@/views/HokkaidoView.vue'
import HokkaidoIndexView from '@/views/HokkaidoIndexView.vue'
import KansaiIndexView from '@/views/KansaiIndexView.vue'
import KyotoView from '@/views/KyotoView.vue'
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
    meta: { title: '季節景點' },
    children: [
    {
      path: 'spring',
      name: 'season-spring',
      component: SeasonSpringView,
      meta: { title: '春天' },
    },
    {
      path: 'winter',
      name: 'season-winter',
      component: SeasonWinterView,
      meta: { title: '冬天' },
    }],
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
    },
    {
      path: 'kansai',
      name: 'area-kansai',
      component: HokkaidoView,
      meta: { title: '關西' },
      redirect: { name: 'kansai-index' },
      children: [{
        path: '',
        name: 'kansai-index',
        component: KansaiIndexView,
      },
      {
        path: 'kyoto',
        name: 'kyoto',
        component: KyotoView,
        meta: { title: '京都' },
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
  window.scrollTo({ top: 0 , behavior: 'smooth' });
  next();
});

export default router
