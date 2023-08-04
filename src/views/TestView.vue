<template>
  <div v-for="(item,index) in files" :key="index" class="data-div">
    <h5> {{ item.MainSystem }}</h5>
    <ul>
      <li v-for="(SubsystemItem , index) in item.Subsystem" :key="index" > {{ SubsystemItem }}</li>
    </ul>
  </div>
</template>

<script>
// import { json } from 'express';
import { ref } from 'vue';
import { onMounted } from 'vue';

export default {
  name: 'TestView',
  setup(){
    const files = ref([]);
    // const base_rul = 'http://192.168.0.176:7005';
    async function fetchData() {
      // const API = 'BIM/GetAllSystems';
      try {
        const response = await fetch(`http://192.168.0.176:7005/BIM/GetAllSystems`,{
          method: 'POST',
        });
        if(!response.ok){
          throw new Error('请求出错：' + response.statusText);
        }
        files.value = await response.json();
        console.log(files.value);
      }
      catch(error){
        console.error(error.message)
      }
    }
    onMounted(()=>{
      fetchData();
    });
    return {
      files,
    }
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //font css

</style>