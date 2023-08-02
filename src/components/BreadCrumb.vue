<template>
  <div>
    <ul>
      <li v-for="(item, i) in breadcrumbList" :key="i">
        <router-link :to="item.path" class="content-little">{{ item.meta.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
  
<script>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'BreadCrumb',
  setup() {
    const route = useRoute()
    const breadcrumbList = ref([])
    const isHome = () => {
      return route.name === 'home'
    }
    const getBreadcrumbs = () => {
      let matched = route.matched
      if (!isHome(matched[0])) {
        matched = [{ path: '/', meta: { title: '首頁' } }].concat(matched)
      }
      breadcrumbList.value = matched
      // console.log(breadcrumbList.value);
    }
    watch(route, () => {
      getBreadcrumbs()
    })
    onMounted(() => {
      getBreadcrumbs()
    })
    return {
      breadcrumbList, getBreadcrumbs
    };
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss';

ul {
  list-style: none;
  margin:30px 0;
  padding: 0;
  li {
    display: inline-block;

    a {
      color: $primary-color;
      // font-size: 0.9rem;
      font-weight: 600;
      text-decoration: none;
    }

    a:hover {
      color: $support-color;
    }
  }

  li::after {
    content: '/';
    display: inline-block;
    color: $primary-color;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  li:last-child::after {
    content: '';
  }
}</style>