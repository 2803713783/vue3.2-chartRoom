<template>
    <div class="background">
        <div class="top flex justify-start items-center p-l-10 ">
            <a-badge class="hvr-float-shadow" :count="9" color="#00B42A" :dotStyle="{ width: '10px', height: '10px' }">
                <a-avatar shape="square" :size="50" :style="{ width: '2vw', height: '2vw' }">
                    <img alt="avatar" src="src/assets/touxiang2.png" />
                </a-avatar>
            </a-badge>
            <div flex flex-col justify-center items-start color-dark m-l-10>
                <span class="hvr-underline-from-center">yunxia</span>
                <div>咯噔，咯噔，咯噔~</div>
            </div>
        </div>
        <div class=" mainView ">
            <a-layout style="height: 100%">

                <a-layout-content class="chartBody">
                    <ChartBody />
                </a-layout-content>
                <a-layout-footer class="sendBody">Footer</a-layout-footer>
            </a-layout>
        </div>
    </div>
</template>

<script setup>
import ChartBody from './ChartBody.vue';
</script>

<style lang="scss" scoped>
.background {
    //background-color: #6666FF;
    height: 100%;
    width: 100%;

    .top {
        height: 7%;
        width: 100%;
        background-color: aliceblue;
        box-shadow: 0px 7px 7px -7px #5E5E5E;
    }

    .mainView {
        top: 1%;
        position: relative;
        border-radius: 16px;
        margin: auto;
        height: 91%;
        width: 98%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        :deep(.arco-layout-footer) {
            background-color: var(--color-primary-light-4);
        }

        .chartBody {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }

        .sendBody {
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }

    }
}
</style>