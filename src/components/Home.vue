<script setup>
import Left1 from './navLeft/Left1.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
onMounted(() => {

    router.push({ name: 'chart' }).catch(err => { console.log('err', err) })


})
</script>

<template>
    <div class="layoutAll">
        <a-layout>
            <!-- <a-layout-header class="layoutHeader">
                <sunOrMoonVue :size="sunOrMoonSize"></sunOrMoonVue>
            </a-layout-header> -->
            <a-layout class="layoutBody">
                <a-layout-sider style="width: 4vw;">
                    <Left1 />
                </a-layout-sider>
                <a-layout-sider :style="{ width: '96vw' }">
                    <router-view v-slot="{ Component }">
                        <transition name="slide-right">
                            <component :is="Component" />
                        </transition>
                    </router-view>
                    <!-- <Chart /> -->
                </a-layout-sider>
            </a-layout>

        </a-layout>
    </div>


</template> 
<style lang="scss" scoped>
.layoutAll :deep(.arco-layout-header),
.layoutAll :deep(.arco-layout-footer),
.layoutAll :deep(.arco-layout-sider-children),
.layoutAll :deep(.arco-layout-content) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--color-white);
    font-size: 1em;
    font-stretch: condensed;
    text-align: center;
}

.layoutAll :deep(.arco-layout-sider-children) {}

.layoutBody :deep(.arco-layout-sider),
.layoutBody :deep(.arco-layout-content) {
    height: 100vh;
}

.layoutAll :deep(.arco-layout-header) {
    height: 7vh;
    //background-color: var(--color-primary-light-4);
    // background-color: #335eb3;
}

.layoutAll :deep(.arco-layout-content) {
    background-color: aliceblue;

}
</style>




