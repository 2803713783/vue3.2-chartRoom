<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

const login = () => {
    router.push({ name: 'login' }).catch(err => { console.log('err', err) })
}
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
    <div class="background">
        <a-avatar class="hvr-grow touxiang" :size="40" mt-10 :style="{ width: '3vw', height: '3vw' }">
            <img alt="avatar" src="/src/assets/touxiang1.jpg" />
        </a-avatar>
        <div class="icons" flex flex-col justify-center>
            <a-space direction="vertical" fill size="large">
                <a-tooltip content="Conversation" position="rt" :content-style="{ color: '#335eb3' }"
                    background-color="#fff">
                    <router-link exact-active-class="eac" active-class="active" to="/chart">
                        <icon-message class="hvr-bounce-in icon" :size="size1" :strokeLinecap="round" />
                    </router-link>
                </a-tooltip>
                <a-tooltip content="Social Space" position="rt" :content-style="{ color: '#335eb3' }"
                    background-color="#fff">
                    <router-link exact-active-class="eac" active-class="active" to="/social">
                        <icon-thumb-up class="hvr-bounce-in icon" :size="size1" :strokeLinecap="round" />
                    </router-link>
                </a-tooltip>
                <a-tooltip content="Work Space" position="rt" :content-style="{ color: '#335eb3' }"
                    background-color="#fff">
                    <icon-apps exact-active-class="eac" class="hvr-bounce-in icon" :size="size1"
                        :strokeLinecap="round" />
                </a-tooltip>
                <a-tooltip content="Setting" position="rt" :content-style="{ color: '#335eb3' }"
                    background-color="#fff">
                    <icon-settings spin class="hvr-bounce-in icon" :size="size1" :strokeLinecap="round" />
                </a-tooltip>

                <a-tooltip content="Log out" position="rt" :content-style="{ color: '#335eb3' }"
                    background-color="#fff">
                    <icon-export @click="login" class="hvr-bounce-in icon" :size="size1" :strokeLinecap="round" />
                </a-tooltip>
            </a-space>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.background {
    width: 100%;
    height: 100%;
}


.touxiang {
    filter: drop-shadow(0 0 2px #fff);
}

.eac {
    color: rgba(255,
            255,
            255, 0.5);
    filter: drop-shadow(0 0 2px #fff);
    transform: scale(1.3);
}


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