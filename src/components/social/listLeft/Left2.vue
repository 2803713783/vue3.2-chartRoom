<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()


const names = ['Socrates', 'Balzac', 'Plato'];
const avatarSrc = [
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp',
];
const imageSrc = [
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/29c1f9d7d17c503c5d7bf4e538cb7c4f.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/04d7bc31dd67dcdf380bc3f6aa07599f.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/1f61854a849a076318ed527c8fca1bbf.png~tplv-uwbnlip3yd-webp.webp',
];
const dataSource = new Array(15).fill(null).map((_, index) => {
    return {
        index: index,
        avatar: avatarSrc[index % avatarSrc.length],
        title: names[index % names.length],
        description:
            'Beijing ByteDance Technology Co., Ltd. .',
        imageSrc: imageSrc[index % imageSrc.length],
    };
});

const index = () => {
    router.push({ name: 'index' }).catch(err => { console.log('err', err) })
}
</script>
<template>
    <div class="background ">

        <div class="search " flex flex-col items-center justify-between>
            <div class="ChartName">
                <!-- <div class="name" font-600 text-left>聊天室</div>
                <div class="Logo"></div> -->
                <img @click="index" src="/src/assets/logo.png" alt="妄想社OA" m-b-20>
            </div>
            <!-- <div class="redian" flex justify-start gap-20 items-center>
                <icon-fire class="hvr-grow icon" :size="20" :strokeLinecap="round" />
                <span text-20>热点动态</span>
            </div> -->
        </div>
        <div class="all hvr-grow">
            <span>全部动态</span>
            <div class="redian" flex justify-start gap-20 items-center>
                <icon-fire class="hvr-bounce-in icon" :size="50" :strokeLinecap="round" />

            </div>
        </div>
        <a-list class="list-demo-action-layout" :bordered="false" :data="dataSource"
            :pagination-props="paginationProps">
            <template #item="{ item }">
                <div class="hvr-grow">
                    <a-list-item class="list-demo-item " action-layout="vertical">

                        <template #actions>
                            <span>
                                <icon-heart />83
                            </span>
                            <span>
                                <icon-star />{{ item.index }}
                            </span>
                        </template>
                        <template #extra>
                            <div className="image-area">
                                <img alt="arco-design" :src="item.imageSrc" />
                            </div>
                        </template>
                        <a-list-item-meta text-left :title="item.title" :description="item.description">
                            <template #avatar>
                                <a-avatar>
                                    <img alt="avatar" :src="item.avatar" />
                                </a-avatar>
                            </template>
                        </a-list-item-meta>

                    </a-list-item>
                </div>
            </template>
        </a-list>
    </div>
</template>
<style lang="scss" scoped>
.background {
    //background-color: #6666FF;
    height: 100%;
    width: 100%;
    overflow-y: hidden;
    color: #4e5969;
    font-weight: 600;
    position: relative;
    background-color: #f0f8ff;

    .all {
        width: 100%;
        height: 8vh;
        color: #4e5969;
        padding: 10px 30px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
        margin: 10px auto;
        width: 90%;
        border-radius: 16px;
        display: flex;
        justify-content: start;
        align-items: center;
        border-left-width: 20px;
        border-color: #e07b51;
        background: #fff;

        span {
            width: 20vw;
            font-size: 6rem;
            line-height: 100%;
            text-align: left;
        }
    }

    .redian {
        width: 100%;
    }

    .list-demo-action-layout {
        overflow-y: scroll;
        max-height: 86vh;

    }

    .list-demo-item {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

        margin: 0 auto 20px;
        width: 90%;
        background: #fff;
        border-radius: 16px;
        border-left-width: 20px;
        border-left-color: #00b42a;
    }

    .list-demo-action-layout .image-area {


        img {
            border-radius: 16px;
            object-fit: cover;
            object-position: center;
            max-width: 100%;
        }
    }

    .list-demo-action-layout .list-demo-item {
        padding: 10px;

    }

    .list-demo-action-layout .image-area img {
        width: 100%;
    }

    .list-demo-action-layout .arco-list-item-action .arco-icon {
        margin: 0 4px;
    }

    .eac {
        color: rgba(255,
                255,
                255, 0.5);
        filter: drop-shadow(0 0 2px #fff);
        transform: scale(1.2);
    }

    .icon {
        height: 80%;
        color: coral;
    }

    .ChartName {
        height: 7vh;
        width: 100%;
        color: #333;

        img {
            height: 100%;
            margin-bottom: 10px;
        }
    }

    .search {
        height: 10%;
        //  box-shadow: 0px 2px 5px -2px #5E5E5E;
        // margin: 20px 0;
        padding: 2vh 10px;

        top: 0;
        background-color: #f0f8ff;
        opacity: 1;
        z-index: 2;

    }
}
</style>