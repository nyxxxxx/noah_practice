<template>
    <nav-bar></nav-bar>
    <div class="container" style="margin-bottom: 500px;">
        <div class="row position-relative">
            <img src="@/assets/images/season/spring/spring.png" alt="" class="w-100">
            <div class="position-absolute image-card" :style="{ marginTop: -titleHeight - 8 + 'px' }">
                <h2 class="sec-title" ref="titleElement">這是即將到來的 <br> 春天</h2>
                <img src="@/assets/images/season/spring/test-img.png" alt="">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <p>
                    這是假文章
                </p>
            </div>
            <div class="col"></div>
        </div>
    </div>
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
    <Footer></Footer>
</template>
  
<script>
import NavBar from '@/components/Navbar.vue';//navbar
import Footer from '@/components/Footer.vue';//footer
import { ref, onMounted, nextTick, } from 'vue';
export default {
    name: 'TestView',
    components: {
        NavBar,
        Footer,
    },
    setup() {
        //A-div區塊調整
        const titleElement = ref(null);
        const titleHeight = ref(0);

        const updateTitleHeight = () => {
            if (titleElement.value) {
                titleHeight.value = titleElement.value.scrollHeight;
            }
        };

        onMounted(() => {
            nextTick(() => {
                updateTitleHeight();
            });

            window.addEventListener('resize', updateTitleHeight);
        });

        //瀑布流部分
        var files = ref([]);

        onMounted(() => {

            fetchfiles();
        });
        //讀取資料夾內圖片檔案名稱
        async function fetchfiles() {
            try {
                const response = await fetch('http://localhost:3000/files');
                if (!response.ok) {
                    throw new Error('獲取檔案清單失敗！');
                }

                files.value = await response.json();
            } catch (error) {
                console.error(error.message);
            }
        }
        //img src
        function getImageUrl(filename) {
            console.log('123');
            return require(`@/assets/images/season/spring/${filename}`);
        }
        return {
            titleElement,
            titleHeight,
            getImageUrl,
            files,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/color.scss'; //color css
@import '@/assets/css/font.scss'; //font css

.image-card {
    background-image: linear-gradient(180deg, #d03c62 0%, #ec74c1 100%);
    color: white;
    width: 40%;
    right: 0;
    right: 12px;
    top: 100%;
    // margin-top: -5.25rem;
    padding: 0;

    h2 {
        padding: 50px 20px;
    }

    img {
        max-width: 80%;
    }
}
</style>