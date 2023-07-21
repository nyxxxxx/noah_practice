import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import JapanAreaView from '@/views/JapanAreaView.vue'
import AreaIndexView from '@/views/AreaIndexView.vue'
import HokkaidoView from '@/views/HokkaidoView.vue'
import FontView from '@/views/FontView.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '日本旅遊' },
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
