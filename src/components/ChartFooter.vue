<template>
    <div class="background" flex justify-center items-center>
        <div class="sendIcon1 hvr-grow  justify-center items-center">
            <i class="i-carbon-add-alt text-25  color-#bedaff" icon-btn></i>
        </div>
        <div class="sendIcon1 hvr-grow  justify-center items-center">
            <i class="i-carbon-face-satisfied text-25  color-#bedaff" icon-btn></i>
        </div>
        <a-input :style="{ width: '70%' }" default-value="" placeholder="Please enter something" allow-clear />
        <div class="sendIcon hvr-grow" flex justify-center items-center>
            <i class="i-carbon-send-alt text-30  color-#fff" icon-btn></i>
        </div>


    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.background {
    height: 100%;
    width: 100%;
    background-color: #fff;

    .sendIcon1 {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        // background-color: #bedaff;
    }

    .sendIcon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        background-color: #335eb3;

        .icon-btn:hover,
        [icon-btn=""]:hover {
            color: #6aa1ff;
        }
    }

    .arco-input-wrapper {
        background-color: transparent;
    }
}
</style>