<template>
    <a-layout>
        <a-layout-header class="layoutHeader">
            <sunOrMoonVue :size="sunOrMoonSize"></sunOrMoonVue>
        </a-layout-header>
        <RightDynamicVue />
    </a-layout>
</template>

<script setup>
import sunOrMoonVue from './sunOrMoon.vue';
import RightDynamicVue from './RightDynamic.vue';
const sunOrMoonSize = '1.5em'
</script>

<style lang="scss" scoped>

</style>