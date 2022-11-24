<script setup>
import { reactive } from "vue";
const options = reactive({
    width: "100#", //播放器高度
    height: "100%", //播放器高度
    color: "#409eff", //主题色
    title: "", //视频名称
    src: "./assets/video/wanxia.mp4", //视频源
    muted: false, //静音
    webFullScreen: false,
    speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
    autoPlay: false, //自动播放
    loop: true, //循环播放
    mirror: false, //镜像画面
    ligthOff: false, //关灯模式
    volume: 0.3, //默认音量大小
    control: true, //是否显示控制
    controlBtns: [
        "audioTrack",
        "quality",
        "speedRate",
        "volume",
        "setting",
        "pip",
        "pageFullScreen",
        "fullScreen",
    ], //显示所有按钮,
});
</script>

<template>
    <div class="background">
        <div class="inputForm">
            <div class="top flexRow">
                <div class="icon" justify-center items-center>
                    <i class="i-carbon-pen-fountain   hvr-grow" icon-btn></i>
                </div>
                <div class="text">Create Post</div>
            </div>

            <div class="middle">
                <div class="input">
                    <a-textarea class="inputarea" :auto-size="{
                        minRows: 3,
                        maxRows: 10
                    }" placeholder="Please enter something" allow-clear show-word-limit />
                </div>
            </div>
            <div class="bottom">
                <div class="icons flexRow ">
                    <div class="item flexRow">
                        <div class="icon item1">
                            <i class="i-carbon-video-chat    hvr-grow" icon-btn></i>
                        </div>
                        <div class="description">Live Viedo</div>
                    </div>
                    <div class="item flexRow">
                        <div class="icon item2">
                            <i class="i-carbon-image-reference    hvr-grow" icon-btn></i>
                        </div>
                        <div class="description">Photo/Video</div>
                    </div>
                    <div class="item flexRow">
                        <div class="icon item3">
                            <i class="i-carbon-camera-action    hvr-grow" icon-btn></i>
                        </div>
                        <div class="description">Feeling/Activity</div>
                    </div>
                    <div class="item flexRow">
                        <div class="icon item4">

                        </div>
                        <div class="description"></div>
                    </div>
                    <div class="item flexRow justify-end">
                        <div class="icon item5 flexRow">
                            <i class="i-carbon-overflow-menu-horizontal   hvr-grow" icon-btn></i>
                        </div>
                    </div>
                </div>
                <div class="more">
                </div>
            </div>
        </div>

        <div class="dyn" v-for="item in 3">
            <div class="top ">
                <div class="title flexRow">
                    <div class="touxiang flexRow">
                        <a-avatar :size="40">
                            <img alt="avatar" src="/src/assets/qingtou1.jpg" />
                        </a-avatar>
                        <div class="name flexColumn">
                            <sapn>Anthony Daugloi</sapn>
                            <span>2 hour ago</span>
                        </div>
                    </div>
                    <div class="more">
                        <div class="icon flexRow">
                            <i class="i-carbon-overflow-menu-horizontal   hvr-grow" icon-btn></i>
                        </div>
                    </div>
                </div>
                <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo
                    non,feugiat non nisi.Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
                    <span>See more</span>
                </div>

            </div>
            <div class="middle">
                <div class="imgs flexColumn">
                    <div class="group1 flexRow">
                        <img src="../../../assets/city1.jpg" alt="" />
                        <img src="../../../assets/city2.jpg" alt="" />
                        <img src="../../../assets/city3.jpg" alt="" />
                    </div>
                    <div class="group2 flexRow">
                        <img src="../../../assets/city1.jpg" alt="" />
                        <img src="../../../assets/city2.jpg" alt="" />

                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="icons flexRow ">
                    <div class="item flexRow">
                        <div class="icon item1 flexRow">
                            <i class="i-carbon-thumbs-up   hvr-grow" icon-btn></i>
                        </div>
                        <div class="icon item2 flexRow">
                            <i class="i-carbon-favorite    hvr-grow" icon-btn></i>
                        </div>
                        <div class="description">2.8K Like</div>


                        <div class="icon item3 flexRow">
                            <i class="i-carbon-closed-caption-alt    hvr-grow" icon-btn></i>
                        </div>
                        <div class="description">22 Comment</div>

                    </div>

                    <div class="item flexRow justify-end">
                        <div class=" item5 flexRow">
                            <i class="i-carbon-overflow-menu-horizontal   hvr-grow" icon-btn></i>
                        </div>
                    </div>
                </div>
                <div class="more">
                </div>
            </div>
        </div>

        <div class="dyn" v-for="item in 1">
            <div class="top ">
                <div class="title flexRow">
                    <div class="touxiang flexRow">
                        <a-avatar :size="40">
                            <img alt="avatar" src="/src/assets/qingtou1.jpg" />
                        </a-avatar>
                        <div class="name flexColumn">
                            <sapn>Anthony Daugloi</sapn>
                            <span>2 hour ago</span>
                        </div>
                    </div>
                    <div class="more">
                        <div class="icon flexRow">
                            <i class="i-carbon-overflow-menu-horizontal   hvr-grow" icon-btn></i>
                        </div>
                    </div>
                </div>


            </div>
            <div class="middle">
                <div class="video flexColumn">
                    <vue3VideoPlay v-bind="options" src="/src/assets/video/wanxia.mp4" />
                </div>
                <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo
                    non,feugiat non nisi.Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
                    <span>See more</span>
                </div>

            </div>
            <div class="bottom">
                <div class="icons flexRow ">
                    <div class="item flexRow">
                        <div class="icon item1 flexRow">
                            <i class="i-carbon-thumbs-up   hvr-grow" icon-btn></i>
                        </div>
                        <div class="icon item2 flexRow">
                            <i class="i-carbon-favorite    hvr-grow" icon-btn></i>
                        </div>
                        <div class="description">2.8K Like</div>


                        <div class="icon item3 flexRow">
                            <i class="i-carbon-closed-caption-alt    hvr-grow" icon-btn></i>
                        </div>
                        <div class="description">22 Comment</div>

                    </div>

                    <div class="item flexRow justify-end">
                        <div class=" item5 flexRow">
                            <i class="i-carbon-overflow-menu-horizontal   hvr-grow" icon-btn></i>
                        </div>
                    </div>
                </div>
                <div class="more">
                </div>
            </div>
        </div>
        <a-back-top target-container="#basic-demo" :style="{ position: 'absolute', zIndex: '999' }" />
    </div>
</template>

<style lang="scss" scoped>
.background {
    height: 100%;
    width: 100%;
    background-color: #f0f8ff;
    position: relative;

    color: #ccc;
    overflow-y: scroll;

    .dyn {
        width: 85%;
        background-color: #fff;
        border-radius: 16px;
        margin: 30px auto;
        padding: 30px;
        position: relative;


        .top {
            .title {
                justify-content: space-between;

                .touxiang {
                    gap: 10px;
                }

                .name {
                    width: 10vw;
                    box-sizing: border-box;
                    padding: 2px 0;
                    align-items: flex-start;
                }

                .name :first-child {
                    color: #495057;
                    font-size: 3rem;
                    font-weight: 600;
                }

                .name :nth-child(2) {
                    font-size: 3rem;
                }

                .more {
                    .icon {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        background-color: #f5f5f5;
                        justify-content: center;
                    }

                    i {
                        color: #495057;
                        font-size: 5rem;
                    }

                    i:hover {
                        color: inherit;
                    }
                }
            }

            .text {
                margin: 10px 0;
                text-align: left;
                font-size: 4rem;
                color: #495057;
            }

            .text :first-child {
                color: #3783fc;
                font-weight: 600;
                font-size: 3rem, ;
            }


        }

        .middle {
            width: 100%;

            .video {
                border-radius: 8px;
                margin-top: 20px;
                width: 100%;



            }

            .text {
                margin: 10px 0;
                text-align: left;
                font-size: 4rem;
                color: #495057;
            }

            .text :first-child {
                color: #3783fc;
                font-weight: 600;
                font-size: 3rem, ;
            }

            .group1 {
                justify-content: space-between;
                margin-bottom: 10px;

                img {
                    width: 32%;
                    object-fit: cover;
                    border-radius: 8px;
                }
            }

            .group2 {
                justify-content: space-between;

                img {
                    width: 49%;
                    object-fit: cover;
                    border-radius: 8px;

                }
            }

        }

        .bottom {
            margin-top: 20px;

            .icons {
                justify-content: space-between;
                width: 100%;
            }

            .item {
                width: 40%;
                height: 3vh;
                margin: 10px 10px;
                gap: 10px;

                .icon {
                    width: 35px;
                    height: 35px;
                    color: #fff;
                    justify-content: center;
                    border-radius: 50%;
                }

                .description {
                    color: #495057;
                    width: max-content;
                    font-weight: 500;
                    font-size: 3.5rem;
                }

                .item1 {
                    // color: #e50202;
                    background-color: #3783fc;

                    i {
                        font-weight: 900;
                    }
                }

                .item2 {
                    background-color: #ed5d28;
                    //color: #10d876;
                }

                .item3 {
                    justify-content: center;
                    background-color: #bedaff;
                    color: #3783fc;
                }

                .item5 {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #f5f5f5;
                    justify-content: center;

                    i {
                        color: #495057;
                    }
                }

                .icon {
                    i {
                        font-size: 5rem;
                    }

                    i:hover {
                        color: inherit;
                    }
                }
            }
        }
    }

    .inputForm {
        width: 85%;
        background-color: #fff;
        border-radius: 16px;
        margin: 30px auto;
        padding: 20px;
        position: relative;

        .top {
            gap: 20px;

            .text {}

            .icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                color: #3783fc;
                background-color: #f5f5f5;

                i {
                    font-size: 5rem;
                }
            }
        }

        .bottom {
            width: 100%;

            .icons {
                justify-content: space-between;
                width: 100%;
            }

            .item {
                width: 20%;
                height: 3vh;
                margin: 10px 10px;
                gap: 10px;

                .description {
                    color: #495057;
                    width: max-content;
                    font-weight: 500;
                    font-size: 3.5rem;
                }

                .item1 {
                    color: #e50202;
                }

                .item2 {
                    color: #10d876;
                }

                .item3 {
                    color: #fe9c40;
                }

                .item5 {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #f5f5f5;
                    justify-content: center;

                    i {
                        color: #495057;
                    }

                }

                .icon {
                    i {
                        font-size: 5rem;
                    }

                    i:hover {
                        color: inherit;
                    }
                }
            }
        }

        .middle {
            margin: 15px 0;

            .input {
                .inputarea {
                    border-radius: 16px;
                    background-color: #fff;
                    border: #f5f5f5 solid 2px;
                }
            }
        }
    }
}
</style>