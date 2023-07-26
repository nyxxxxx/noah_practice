<template>
    <div class="container">
        <masonry-wall :items="files" :ssr-columns="1" :column-width="300" :gap="16">
            <template #default="{ item }">
                <div>
                    <img :src="getImageUrl(item)" alt="Image" style="width: 100%; height: 100%;" />
                    <!-- <h1>{{ item }}</h1> -->
                </div>
            </template>
        </masonry-wall>
    </div>

    <!-- <p v-for="(item, key, index) in files" v-bind:key="index">
        第{{ key }}筆,{{ item }}
    </p> -->
</template>
  
<script>
import { ref, onMounted } from 'vue';

export default {
    name: 'TestView',
    setup() {
        var files = ref([]);

        onMounted(() => {
            fetchfiles();
        });

        async function fetchfiles() {
            try {
                const response = await fetch('http://localhost:3000/files');
                if (!response.ok) {
                    throw new Error('獲取檔案清單失敗！');
                }

                files.value = await response.json();
                console.log(files);
            } catch (error) {
                console.error(error.message);
            }
        }

        function getImageUrl(filename) {
            return require(`@/assets/images/season/spring/${filename}`);
        }
        return {
            files,
            getImageUrl,
        }
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //font css
</style>