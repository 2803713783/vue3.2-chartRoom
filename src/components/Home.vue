<script setup>
import Right from './Right/Right.vue'
import Left1 from './navLeft/Left1.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
onMounted(() => {

    // router.push({ name: 'chart' }).catch(err => { console.log('err', err) })


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
                <a-layout-content :style="{ width: '73vw' }" :resize-directions="['right']">
                    <router-view v-slot="{ Component }">
                        <transition name="fade" mode="out-in">
                            <keep-alive>
                                <component :is="Component" />
                            </keep-alive>
                        </transition>
                    </router-view>

                    <!-- <router-view></router-view> -->
                    <!-- <Chart /> -->
                </a-layout-content>
                <a-layout-sider :style="{ width: '20vw', minWidth: '0', maxWidth: '20vw' }"
                    :resize-directions="['left']">

                    <Right />
                </a-layout-sider>
            </a-layout>


        </a-layout>
    </div>


</template> 
<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
    /*定义进入开始和离开结束的透明度为0*/
    opacity: 0;
}

.fade-leave-to {
    transform: translateX(20px);
}

.fade-enter-to {
    transform: translateX(0px);
}

.fade-enter-to,
.fade-leave-from {
    /*定义进入结束和离开开始的透明度为1*/
    opacity: 1;
}

.fade-leave-active,
.fade-enter-active {
    transition: all 0.6s ease-out;
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
    background-color: #f0f8ff;
}

.layoutAll :deep(.arco-layout-sider-children) {}

.layoutBody :deep(.arco-layout-sider),
.layoutBody :deep(.arco-layout-content) {}

.layoutAll :deep(.arco-layout-header) {
    height: 7vh;
    //background-color: var(--color-primary-light-4);
    // background-color: #335eb3;
}



.layoutAll :deep(.arco-layout-content) {
    background-color: aliceblue;
}
</style>




