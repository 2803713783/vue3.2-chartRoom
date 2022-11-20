<template>
    <div class="background">
        <div class="top flex justify-start items-center p-l-10 ">
            <a-badge class="hvr-float-shadow" :count="9" color="#00B42A" :dotStyle="{ width: '10px', height: '10px' }">
                <a-avatar :size="50" :style="{ width: '2vw', height: '2vw' }">
                    <img alt="avatar" src="/src/assets/touxiang2.png" />
                </a-avatar>
            </a-badge>
            <div class="nameAndSign" flex flex-col justify-between items-start color-dark m-l-10>
                <span class="nickName hvr-shadow" font-bold>yunxia</span>
                <span text-sm class="hvr-shadow">咯噔，咯噔，咯噔~</span>
            </div>
        </div>
        <div class=" mainView ">
            <a-layout style="height: 100%">
                <a-layout-content class="chartBody">
                    <ChartBody />
                </a-layout-content>
                <a-layout-footer class="sendBody">
                    <ChartFooter />
                </a-layout-footer>
            </a-layout>
        </div>
    </div>
</template>

<script setup>
import ChartBody from './ChartBody.vue';
import ChartFooter from './ChartFooter.vue';
</script>

<style lang="scss" scoped>
.background {
    //background-color: #6666FF;
    height: 100%;
    width: 100%;
    background-color: #fff;
    position: relative;

    .top {
        height: 7%;
        width: 100%;
        background-color: aliceblue;
        box-shadow: 0px 7px 7px -7px #5E5E5E;
    }

    .nameAndSign {
        height: 2vw;
        color: #6aa1ff;

        .nickName {
            line-height: 100%;
        }
    }

    .mainView {
        top: 1%;
        position: relative;
        border-radius: 16px;
        margin: auto;
        height: 91.5%;
        width: 99%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        :deep(.arco-layout-footer) {
            border-top: 1px solid #ddd;
        }

        .chartBody {
            position: relative;
            top: 0;
            height: 90%;
            box-sizing: border-box;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }

        .sendBody {
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            bottom: 0;
            height: 10%;
        }

    }
}
</style>