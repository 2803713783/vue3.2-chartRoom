<script setup>

</script>

<template>
    <div class="background">
        <div class="messageLeft flex justify-start m-10">
            <div class="ltouxiang hvr-grow flex items-end ">
                <a-avatar :size="50" :style="{ width: '2vw', height: '2vw' }">
                    <img alt="avatar" src="src/assets/touxiang2.png" />
                </a-avatar>
            </div>
            <div class="lmessage">
                <span>I have to give a presentation on global warming on Friday, and I am so nervous.</span>
                <span>I have to give a presentation on global warming on Friday, and I am so nervous.</span>
                <span>I have to give a presentation on global warming on Friday, and I am so nervous.</span>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.background {
    height: 100%;
    width: 100%;
    background-color: var(--color-primary-light-1);

    .messageLeft {
        min-height: 8vh;
        position: relative;

        .ltouxiang {
            z-index: 3;
            margin-left: 10px;
            position: absolute;
            bottom: 0;
            border-right-style: solid;
            border-top-style: solid;
            border-top-color: #e8f3ff;
            border-right-color: #e8f3ff;
            border-top-width: 10px;
            border-right-width: 10px;
            border-radius: 40%;
        }

        .lmessage {
            width: 45%;
            padding: 30px 40px;
            text-align: left;
            margin-left: 30px;
            margin-bottom: 10px;
            background-color: #f5f6fa;
            color: #8097b7;
            border-radius: 16px;
            height: max-content;

        }
    }
}
</style>