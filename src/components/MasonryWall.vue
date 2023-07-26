<template>
  <masonry-wall :items="items" :ssr-columns="1" :column-width="300" :gap="16">
    <template #default="{ item, index }">
      <div :style="{ height: `${index * 100}px` }">
        <h1>{{ item.title }}</h1>
        <span>{{ item.description }}</span>
      </div>
    </template>
  </masonry-wall>
</template>

<script>
import MasonryWall from '@yeger/vue-masonry-wall'

export default {
  name: 'MasonryWall',
  components: {
    MasonryWall,
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //font css
</style>