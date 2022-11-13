<script setup>

</script>
<template>
    <div class="background ">
        <div class="search ">
            <a-space size="large" fill :align="center">
                <a-select :options="['Option1', 'Option2', 'Option3']"
                    :style="{ width: '8vw', height: '3vh', fontSize: '1rem' }" placeholder="first" />
                <a-input :style="{ width: '8vw', height: '3vh' }" placeholder="second" />

            </a-space>
        </div>
        <a-list :size="small" class="list">
            <a-list-item v-for="idx in 40" :key="idx" class=" listItem hvr-underline-reveal">
                <a-list-item-meta title="Girl Friend"
                    description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.">
                    <template #avatar>
                        <a-badge :count="9" color="#00B42A" :dotStyle="{ width: '10px', height: '10px' }">
                            <a-avatar shape="square" :size="50">
                                <img alt="avatar" src="src/assets/touxiang2.png" />
                            </a-avatar>
                        </a-badge>
                    </template>
                </a-list-item-meta>
            </a-list-item>
        </a-list>
    </div>
</template>
<style lang="scss" scoped>
.background {
    //background-color: #6666FF;
    height: 100%;
    width: 100%;

    .search {
        height: 7%;
        box-shadow: 0px 7px 7px -7px #5E5E5E;
        // margin: 20px 0;
        padding: 1% 10px;
        position: fixed;
        top: 0;
        background-color: #fff;
        opacity: 1;
        z-index: 2;
    }
}

.list {
    margin-top: 7vh;
}

.listItem {
    margin: 5px 0;
    box-sizing: border-box;
    overflow: hidden;
}
</style>