<template>
    <nav-bar></nav-bar>
    <div class="container-fluid banner-div">
        <div class="container d-flex align-items-center h-100 flex-row-reverse">
            <h1 class="banner-title">春風和煦 柳條垂下</h1>
        </div>
    </div>
    <div class="container">
        <bread-crumb />
    </div>
    <div class="container logo-div text-center" style="margin: 0 auto;">
        <img src="@/assets/images/season/logo/spring-logo.png" alt="" style="width: 90px;">
        <h1 class="banner-title text-center">春</h1>
    </div>
    <div class="container" style="margin-bottom: 150px;">
        <div class="row position-relative">
            <img src="@/assets/images/season/spring/spring.png" alt="" class="w-100">
            <div class="position-absolute image-card" :style="{ marginTop: -titleHeight - 8 + 'px' }">
                <h2 class="sec-title" ref="titleElement">這是即將到來的 <br> 春天</h2>
                <img src="@/assets/images/season/spring/test-img.png" alt="">
            </div>
        </div>
        <div class="row">
            <div class="col" id="intro-content">
                <p class="lh-lg">
                    春天是日本最迷人的季節之一，因為它擁有櫻花綻放的美景，吸引著來自世界各地的遊客。在春天的日本，您將沉浸在滿目蔚藍的櫻花海洋中。不論是東京的上野公園、京都的哲學之道還是大阪的大阪城公園，無處不見櫻花盛開的景象，為您帶來無盡的賞花樂趣。此外，油菜花、杜鵑花等各式花卉也在春季開滿了整個山野，如同一幅色彩繽紛的畫作。您可以選擇前往富士山腳下、北海道的花海或是四國的名勝古蹟，感受不同地區的花季風情。
                </p>
            </div>
            <div class="col"></div>
        </div>
    </div>
    <div class="container masonry-div">
        <div id="C-title">
            <h1 class="title"><img src="@/assets/images/logo/title_logo.png" alt="">景點預覽</h1>
        </div>
        <masonry-wall :items="files" :ssr-columns="1" :column-width="300" :gap="12">
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
import BreadCrumb from '@/components/BreadCrumb.vue';
import { ref, onMounted, nextTick, } from 'vue';
export default {
    name: 'TestView',
    components: {
        NavBar,
        Footer,
        BreadCrumb,
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

$logo-color: #F787A7;

.banner-div {
    height: 550px;
    background-image: url('@/assets/images/season/spring/spring-banner.png');
    background-repeat: no-repeat;

    // margin-bottom: 50px;
    h1 {
        display: inline-block;
        color: white;
    }
}

.logo-div {
    h1 {
        color: $logo-color;
    }

    &::after {
        content: '';
        width: 4px;
        height: 150px;
        background-color: $logo-color;
        display: inline-block;
        margin-bottom: 0.5rem;
    }
}

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

#intro-content {
    p {
        font-size: 1.1rem;
        padding-left: 100px;
        padding-top: 50px;
        font-weight: 500;
    }
}

.masonry-div {
    margin-bottom: 30px;
}
</style>