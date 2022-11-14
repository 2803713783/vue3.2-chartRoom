<script setup>
import { ref } from 'vue';
const props = defineProps({
    src: {
        type: String,
        default: '/src/assets/touxiang1.jpg'
    },
    size: {
        type: Number,
        default: 30
    }

})
const src1 = ref(props.src)
const size1 = ref(props.size)
</script>

<template>
    <div class="background" arcoblue-6>
        <a-avatar shape="square" class="hvr-grow" :size="40" mt-10 :style="{ width: '3vw', height: '3vw' }">
            <img alt="avatar" src="/src/assets/touxiang1.jpg" />
        </a-avatar>
        <div class="icons" flex flex-col justify-center>
            <a-space direction="vertical" fill size="large">
                <icon-message class="hvr-bounce-in" :size="size1" :strokeLinecap="round" />
                <icon-thumb-up class="hvr-bounce-in" :size="size1" :strokeLinecap="round" />
                <icon-live-broadcast class="hvr-bounce-in" :size="size1" :strokeLinecap="round" />
                <icon-settings class="hvr-bounce-in" :size="size1" :strokeLinecap="round" />
            </a-space>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.background {
    //background-color: #6666FF;
    background-color: #335eb3;
    height: 100%;
    width: 100%;
}

.icons {
    height: 60%;
}
</style>