<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const index = () => {
    router.push({ name: 'index' }).catch(err => { console.log('err', err) })
}
</script>
<template>
    <div class="background ">

        <div class="search ">
            <div class="ChartName" flex items-center justify-between>
                <!-- <div class="name" font-600 text-left>聊天室</div>
                <div class="Logo"></div> -->
                <img @click="index" src="/src/assets/logo.png" alt="妄想社OA" m-b-20>
            </div>
            <a-space>
                <a-select :options="['Option1', 'Option2', 'Option3']" :style="{ height: '3vh', fontSize: '1rem' }"
                    placeholder="first" />
                <a-input :style="{ height: '3vh' }" placeholder="second" />

            </a-space>
        </div>
        <a-list :size="small" class="list">
            <a-list-item v-for="idx in 40" :key="idx" class="listItem hvr-grow">
                <a-list-item-meta :style="{ fontWeight: '600' }" title="Girl Friend" text-left
                    description="Ltd. is an enterprise located in China.Ltd. ">
                    <template #avatar>
                        <a-badge :count="9" color="#00B42A" :dotStyle="{ width: '10px', height: '10px' }">
                            <a-avatar :size="50">
                                <img alt="avatar" src="/src/assets/qingtou1.jpg" />
                            </a-avatar>
                        </a-badge>
                    </template>
                </a-list-item-meta>
            </a-list-item>
        </a-list>
    </div>
</template>
<style lang="scss" scoped>
.background {
    //background-color: #6666FF;
    height: 100%;
    width: 100%;
    overflow-y: hidden;

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
        height: 14%;
        box-shadow: 0px 2px 5px -2px #5E5E5E;
        // margin: 20px 0;
        padding: 2vh 10px;
        position: relative;
        top: 0;
        background-color: #fff;
        opacity: 1;
        z-index: 2;
        width: 20vw;

    }
}

.list {

    overflow-y: scroll;
    max-height: 86vh;
}

.listItem {

    margin: 4px 0;
    box-sizing: border-box;

    box-shadow: rgb(51, 94, 179) 1px 1px 20px -15px;
    width: 96%;
    border-radius: 8px;
}
</style>