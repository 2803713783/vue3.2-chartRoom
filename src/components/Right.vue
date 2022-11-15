<template>
    <div class="background">
        <a-layout>
            <a-layout-header class="layoutHeader">
                <sunOrMoonVue :size="sunOrMoonSize"></sunOrMoonVue>
            </a-layout-header>
            <RightDynamicVue class="rightBody" />
        </a-layout>
    </div>

</template>

<script setup>
import sunOrMoonVue from './sunOrMoon.vue';
import RightDynamicVue from './RightDynamic.vue';
const sunOrMoonSize = '1.5em'
</script>

<style lang="scss" scoped>
.background {
    background-color: #bedaff;
    height: 100%;
    width: 100%;

    .rightBody {
        height: 93vh;
        background-color: #f0f8ff;
    }
}
</style>