<template>
    <div class="background" flex justify-evenly items-center>
        <div class="sendIcon hvr-grow  justify-center items-center">
            <i class="i-carbon-add-alt text-25  color-#bedaff" icon-btn carbon:send-alt></i>
        </div>
        <a-input :style="{ width: '70%' }" default-value="" placeholder="Please enter something" allow-clear />
        <div class="sendIcon hvr-grow" flex justify-center items-center>
            <i class="i-carbon-send-alt text-40  color-#bedaff" icon-btn carbon:send-alt></i>
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

    .sendIcon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        // background-color: #bedaff;
    }

    .arco-input-wrapper {
        background-color: transparent;
    }
}
</style>