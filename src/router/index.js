import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import JapanAreaView from '@/views/JapanAreaView.vue'
import AreaIndexView from '@/views/AreaIndexView.vue'
import HokkaidoView from '@/views/HokkaidoView.vue'
import SeasonView from '@/views/SeasonView.vue'
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
    children:[{
      path: '',
      name: 'area-index',
      component: AreaIndexView,
    },
    {
      path: 'hokkaido',
      name: 'area-hokkaido',
      component: HokkaidoView,
      meta: { title: '北海道' },
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
