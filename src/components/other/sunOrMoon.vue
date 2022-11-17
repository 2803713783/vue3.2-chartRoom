<template>
    <div mt-5 gap-10><i :style="{ width: size, height: size }" @click="changeDark(); toggleDark()" icon-btn
            dark:i-carbon-moon i-carbon-sun />

    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core';

const props = defineProps({
    size: {
        type: String,
        default: '1.5em'
    },
})
const dark = ref(1)
const isDark = useDark()
const toggleDark = useToggle(isDark)
const changeDark = () => {
    // toggleDark()

    if (dark.value == 1) {
        document.body.removeAttribute('arco-theme');
        dark.value = 0
    } else {
        document.body.setAttribute('arco-theme', 'dark');
        dark.value = 1
    }
}
onMounted(() => {
    changeDark()
})

</script>

<style lang="scss" scoped>

</style>