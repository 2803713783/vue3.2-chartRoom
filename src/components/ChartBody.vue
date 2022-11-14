<script setup>
import { ref, reactive } from 'vue'


</script>

<template>
    <div class="background ">

        <div v-for="idx in 1" :key="idx" class="messageLeft flex justify-start m-10">
            <div class="ltouxiang  flex items-end ">
                <a-avatar class="hvr-grow" :size="50" :style="{ width: '2vw', height: '2vw' }">
                    <img alt="avatar" src="/src/assets/touxiang2.png" />
                </a-avatar>
            </div>
            <div class="lmessage" font-bold>
                <span>I have to give a presentation on global warming on Friday, and I am so nervous.</span>
                <span class="lmessageBodyBottom">9:12am</span>
            </div>
        </div>

        <div v-for="idx in 1" :key="idx" class="messageRight flex justify-end m-10">
            <div class="rtouxiang  flex items-end ">
                <a-avatar class="hvr-grow" :size="50" :style="{ width: '2vw', height: '2vw' }">
                    <img alt="avatar" src="/src/assets/touxiang2.png" />
                </a-avatar>
            </div>
            <div class="rmessage">
                <span>I have to give a presentation on global warming on Friday, and I am so nervous.</span>
                <span class="rmessageBodyBottom">9:12am</span>
            </div>
        </div>
        <div v-for="idx in 1" :key="idx" class="messageLeft flex justify-start m-10">
            <div class="ltouxiang  flex items-end ">
                <a-avatar class="hvr-grow" :size="50" :style="{ width: '2vw', height: '2vw' }">
                    <img alt="avatar" src="/src/assets/touxiang2.png" />
                </a-avatar>
            </div>
            <div class="lmessage" font-bold>
                <span>I have to give a presentation on global warming on Friday, and I am so nervous.</span>
                <span class="lmessageBodyBottom">9:12am</span>
            </div>
        </div>

        <div v-for="idx in 20" :key="idx" class="messageRight flex justify-end m-10">
            <div class="rtouxiang  flex items-end ">
                <a-avatar class="hvr-grow" :size="50" :style="{ width: '2vw', height: '2vw' }">
                    <img alt="avatar" src="/src/assets/touxiang2.png" />
                </a-avatar>
            </div>
            <div class="rmessage">
                <span>I have to give a presentation on global warming on Friday, and I am so nervous.</span>
                <span class="rmessageBodyBottom">9:12am</span>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.background {
    height: 100%;
    width: 100%;
    max-height: 85vh;
    //   background-color: var(--color-primary-light-1);
    background-color: #e9f1f8;
    overflow: scroll;
    overflow-x: hidden;

    .messageLeft {
        min-height: 6vh;
        position: relative;

        .ltouxiang {
            z-index: 3;
            margin-left: 10px;
            position: absolute;
            bottom: 0;
            border-right-style: solid;
            border-top-style: solid;
            border-color: #ffffff;
            border-width: 10px;
            border-radius: 50%;
            // box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

        }

        .lmessage {
            width: max-content;
            max-width: 45%;
            padding: 20px 30px 10px 30px;
            text-align: left;
            margin-left: 40px;
            margin-bottom: 20px;
            background-color: #bedaff;
            color: #335eb3;
            border-radius: 8px;
            height: max-content;
            box-shadow: rgb(51, 94, 179) 5px 5px 20px -10px;

            .lmessageBodyBottom {
                font-size: .8rem;
                margin-top: 5px;
                color: #335eb3;
                display: block;
                width: max-content;
                border-top: 1px solid #335eb3;
            }
        }
    }

    .messageRight {
        min-height: 6vh;
        position: relative;

        .rtouxiang {

            margin-left: 10px;
            position: absolute;
            bottom: 0;
            border-right-style: solid;
            border-top-style: solid;
            border-color: #ffffff;
            border-width: 10px;
            border-radius: 50%;
            //  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        }

        .rmessage {
            width: max-content;
            max-width: 45%;
            padding: 20px 30px 10px 30px;
            text-align: left;
            margin-right: 20px;
            margin-bottom: 20px;
            background-color: #335eb3;
            color: #fff;
            border-radius: 8px;
            height: max-content;
            display: flex;
            flex-direction: column;
            align-items: end;
            box-shadow: rgb(51, 94, 179) 5px 5px 20px -10px;

            .rmessageBodyBottom {
                font-size: .8rem;
                margin: 5px 10px 0 0;
                color: #fff;
                right: 0;
                display: block;
                width: max-content;
                border-top: 1px solid #c9cdd4;
            }
        }
    }
}
</style>