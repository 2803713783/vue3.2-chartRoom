<script setup>
import { ref } from 'vue';
const props = defineProps({
    src: {
        type: String,
        default: 'src/assets/touxiang1.jpg'
    },
})
const src1 = ref(props.src)

</script>

<template>
    <div class="background">
        <a-avatar shape="square" mt>
            <img alt="avatar" :src="src1" />
        </a-avatar>
    </div>
</template>
<style lang="scss" scoped>
.background {
    background-color: #655dfe;
    height: 100%;
    width: 100%;
}
</style>