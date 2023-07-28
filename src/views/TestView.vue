<template>
  {{ width }}
</template>

<script>
import { onMounted, watch } from 'vue';
import { ref } from 'vue';

export default {
  name: 'TestView',
  setup() {
    const width = ref(0);

    // 監聽視窗大小的變化，並更新 width
    watch(
      () => window.innerWidth,
      (newWidth) => {
        console.log('視窗寬度變了');
        width.value = newWidth;
      }
    );

    onMounted(() => {
      width.value = window.innerWidth;
    });

    return {
      width,
    };
  },
};
</script>

<style lang="scss">
/* 這裡可以添加樣式，如果不需要，可以保持空白 */
</style>
