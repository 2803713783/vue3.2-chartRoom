<template>
    <div class="background">
        <a-layout>
            <!-- <a-layout-header class="layoutHeader">
                <sunOrMoonVue :size="sunOrMoonSize"></sunOrMoonVue>
            </a-layout-header> -->
            <div flex justify-center items-center class="icons">
                <div class="iconItem" justify-center items-center>
                    <i class="i-carbon-ibm-watson-knowledge-catalog text-25   hvr-grow" icon-btn></i>
                </div>
                <div class="iconItem" justify-center items-center>
                    <i class="i-carbon-chart-sunburst text-25   hvr-grow" icon-btn></i>
                </div>
                <div class="iconItem" justify-center items-center>
                    <i class="i-carbon-network-3 text-25   hvr-grow" icon-btn></i>
                </div>
                <div class="iconItem" justify-center items-center>
                    <i class="i-carbon-face-cool text-25   hvr-grow" icon-btn></i>
                </div>
            </div>
            <RightDynamicVue class="rightBody" />
        </a-layout>
    </div>

</template>

<script setup>
import RightDynamicVue from './RightDynamic.vue';

</script>

<style lang="scss" scoped>
.background {
    background-color: #335eb3;
    height: 100%;
    width: 100%;
    overflow-x: hidden;

    .icons {
        gap: 20px;
        height: 7vh;
        width: 100%;

        .iconItem {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;

            i:hover {
                color: #f0f8ff;
            }
        }
    }

    .rightBody {
        height: 93vh;
        background-color: #f0f8ff;
    }
}
</style>