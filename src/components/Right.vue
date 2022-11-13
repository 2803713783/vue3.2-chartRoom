<template>
    <a-layout>
        <a-layout-header class="layoutHeader">
            <sunOrMoonVue :size="sunOrMoonSize"></sunOrMoonVue>
        </a-layout-header>
    </a-layout>
</template>

<script setup>
import sunOrMoonVue from './sunOrMoon.vue';
const sunOrMoonSize = '1.5em'
</script>

<style lang="scss" scoped>

</style>