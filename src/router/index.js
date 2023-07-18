import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import JapanAreaView from '@/views/JapanAreaView.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{title:'日本旅遊'},
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta:{title:'關於我們'},
  },
  {
    path: '/area',
    name: 'area',
    component: JapanAreaView,
    meta:{title:'區域景點'},
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to , from , next) => {
  console.log(to);
  document.title =  to.meta.title;
  next();
});

export default router
