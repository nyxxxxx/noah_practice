<template>
  <div class="scroll-container">
    <div class="sidebar">
      <ul>
        <li v-for="(item, index) in sections" :key="index">
          <button @click="scrollToSection(index)">{{ item }}</button>
        </li>
      </ul>
    </div>
    <div class="content">
      <div v-for="(item, index) in sections" :key="index" :ref="el => sectionRefs[index] = el">
        <h2>{{ item }}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur, eros eu dictum tristique, ex tellus venenatis mauris, sit amet pulvinar magna neque quis risus.</p>
        <br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ScrollDemo',
  setup() {
    const sections = ref(['Section 1', 'Section 2', 'Section 3']);
    const sectionRefs = ref([]);

    function scrollToSection(index) {
      const sectionRef = sectionRefs.value[index];
      if (sectionRef) {
        sectionRef.scrollIntoView({ behavior: 'smooth' });
      }
    }

    return {
      sections,
      sectionRefs,
      scrollToSection,
    };
  },
};
</script>

<style>
.scroll-container {
  display: flex;
  gap: 20px;
}

.sidebar {
  flex: 0 0 200px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 10px;
}

.content {
  flex: 1;
}

h2 {
  margin-top: 0;
}

p {
  margin-bottom: 20px;
}
</style>
