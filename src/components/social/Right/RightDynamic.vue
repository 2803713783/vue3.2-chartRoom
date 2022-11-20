<script setup>
import { reactive } from 'vue';

const images = reactive([
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
])
</script>
<template>
    <div class="background" flex flex-col>

        <div class="zoneTop " flex flex-col>
            <a-avatar class="hvr-grow touxiang" :size="20" mt-50 mb-20 :style="{ width: '3vw', height: '3vw' }">
                <img alt="avatar" src="/src/assets/touxiang1.jpg" />
            </a-avatar>
            <div class="name color-#fff" font-600>妄想社成员</div>
            <div class="addressIcon">
                <i class="i-carbon-location color-#fff text-18   hvr-grow" icon-btn></i>
                <div class="address color-#fff">San Fransisco, CA</div>
            </div>
            <div class="imgs ">
                <a-carousel :autoPlay="true" animation-name="fade" show-arrow="never" indicator-position="outer"
                    move-speed="500" indicator-type="never" :style="{
                        height: '100%',
                        width: '95%',
                        margin: 'auto',
                    }">
                    <a-carousel-item v-for="image in images" :style="{
                        height: '100%',
                        width: '100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }">
                        <img class="imgLunbo" :src="image" :style="{
                            height: '100%',
                            width: '100%',
                        
                        
                        }" />
                    </a-carousel-item>
                </a-carousel>
            </div>
        </div>
        <div flex justify-center items-center class="icons">
            <div class="iconItem" justify-center items-center>
                <i class="i-carbon-airline-passenger-care text-20  color-#335eb3 hvr-grow" icon-btn></i>
            </div>
            <div class="iconItem" justify-center items-center>
                <i class="i-carbon-logo-wechat text-20  color-#335eb3 hvr-grow" icon-btn></i>
            </div>
            <div class="iconItem" justify-center items-center>
                <i class="i-carbon-user-follow text-20  color-#335eb3 hvr-grow" icon-btn></i>
            </div>
            <div class="iconItem" justify-center items-center>
                <i class="i-carbon-email text-20  color-#335eb3 hvr-grow" icon-btn></i>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.background {
    height: 100%;
    width: 100%;
    color: #222;
    align-items: center;
    z-index: 1;

    .zoneTop {
        margin-top: 1%;
        height: 25%;
        width: 100%;
        align-items: center;
        position: relative;
        background-color: rgba(0, 0, 0, 0);
        margin-bottom: 5px;
        color: #fff;
    }

    .imgs {
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: -1;

        .imgLunbo {
            border-radius: 8px;
            object-fit: cover;
            object-position: center;
            max-width: 100%;
        }
    }

    .touxiang {
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }

    .icons {
        gap: 20px;
        margin-top: 5px;
        width: 20vw;

        .iconItem {
            width: 5vh;
            height: 5vh;
            flex-wrap: wrap;
            border-radius: 50%;
            background-color: #fff;
            display: flex;
            box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
        }
    }

    .iconItem:hover {
        background-color: #335eb3;

        i {
            color: #fff;
            opacity: 1;
        }
    }

    .addressIcon {
        border-radius: 50%;
        display: flex;
        color: #333;
        font-weight: 500;
        gap: 5px;


    }
}

.icon-btn:hover,
[icon-btn=""]:hover {
    color: #fff;
}
</style>