<template>
  <div class="ParallaxContainer" ref="parallaxContainerRef">
    <slot/>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'ParallaxContainer',
  setup() {
    const parallaxContainerRef = ref(null);
    const data = {
      height: 0,
      scrollFactor: 0,
      width: 0,
    };

    const calcParallax = () => {
      const containerRect = parallaxContainerRef.value.getBoundingClientRect();

      data.height = containerRect.height;
      data.width = containerRect.width;

      const viewportOffsetTop = containerRect.top;
      const viewportOffsetBottom = window.innerHeight - viewportOffsetTop;

      data.scrollFactor = viewportOffsetBottom / (window.innerHeight + data.height);
    };

    const eventHandler = () => requestAnimationFrame(calcParallax);

    onMounted(() => {
      calcParallax();
      window.addEventListener('resize', eventHandler);
      window.addEventListener('scroll', eventHandler);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', eventHandler);
      window.removeEventListener('scroll', eventHandler);
    });

    return {
      parallaxContainerRef,
      data,
    };
  },
};
</script>

<style lang="scss">
.ParallaxContainer {
  overflow: hidden;
}
</style>
