<script setup>
import Left2 from './listLeft/Left2.vue'
import Middle from './chart/Middle.vue'
import Right from './Dynamic/Right.vue'


</script>


<template>
    <div class="layoutAll">
        <a-layout>
            <!-- <a-layout-header class="layoutHeader">
                <sunOrMoonVue :size="sunOrMoonSize"></sunOrMoonVue>
            </a-layout-header> -->
            <a-layout class="layoutBody">
                <!-- <a-layout-sider style="width: 4vw;">
                    <Left1 />
                </a-layout-sider> -->
                <a-layout-sider style="width: 25vw;">
                    <Left2 />
                </a-layout-sider>
                <a-layout-content style="width: 25vw;">
                    <Middle />
                </a-layout-content>
                <a-layout-sider style="width: 25vw;" :resize-directions="['left']">
                    <Right />

                </a-layout-sider>
            </a-layout>

        </a-layout>
    </div>


</template> 
<style lang="scss" scoped>
.layoutAll {
    height: 100%;
    width: 100%;
}

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

.layoutBody :deep(.arco-layout-sider),
.layoutBody :deep(.arco-layout-content) {
    height: 100vh;
}

.layoutAll :deep(.arco-layout-header) {
    height: 7vh;
    //background-color: var(--color-primary-light-4);
    // background-color: #335eb3;
}




.layoutAll :deep(.arco-layout-sider) {
    //background-color: var(--color-primary-light-3);
    max-width: 25vw;

}

.layoutAll :deep(.arco-layout-content) {
    background-color: aliceblue;

}
</style>




