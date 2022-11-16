<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const container = ref(null)

const signUpClick = () => {
    container._value.classList.add("sign-up-mode");
}

const signInClick = () => {
    container._value.classList.remove("sign-up-mode");
}

const login = () => {
    router.push({ name: 'home' }).catch(err => { console.log('err', err) })
}

</script>

<template>
    <div class="container" ref="container">
        <div class="forms-container">
            <div class="signin-signup">
                <form action="#" class="sign-in-form">
                    <div class="title ">登录</div>
                    <div class="input-field " flex justify-start items-center>
                        <i class="i-carbon-user-avatar text-20  color-#335eb3 hvr-grow" icon-btn></i>
                        <input type="text" value="admin" placeholder="用户名" />
                    </div>
                    <div class="input-field" flex justify-start items-center>
                        <i class="i-carbon-password text-20  color-#335eb3 hvr-grow" icon-btn></i>
                        <input type="password" value="zx149257" placeholder="密码" />
                    </div>
                    <input type="button" autocomplete @click="login" value="登录" class="btn solid hvr-grow" />
                    <p class="social-text">或者使用第三方账号登录</p>
                    <div flex justify-center items-center class="icons">
                        <div class="iconItem" justify-center items-center>
                            <i class="i-carbon-logo-github text-20  color-#335eb3 hvr-grow" icon-btn></i>
                        </div>
                        <div class="iconItem" justify-center items-center>
                            <i class="i-carbon-logo-wechat text-20  color-#335eb3 hvr-grow" icon-btn></i>
                        </div>
                        <div class="iconItem" justify-center items-center>
                            <i class="i-carbon-logo-twitter text-20  color-#335eb3 hvr-grow" icon-btn></i>
                        </div>
                        <div class="iconItem" justify-center items-center>
                            <i class="i-carbon-logo-vue text-20  color-#335eb3 hvr-grow" icon-btn></i>
                        </div>
                    </div>
                </form>
                <form action="#" class="sign-up-form">
                    <div class="title">注册</div>
                    <div class="input-field  flex justify-start items-center ">
                        <i class="i-carbon-user-avatar text-20  color-#335eb3 hvr-grow" icon-btn></i>
                        <input type="text" placeholder="用户名" />
                    </div>
                    <div class="input-field " flex justify-start items-center>
                        <i class="i-carbon-email text-20  color-#335eb3 hvr-grow" icon-btn></i>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div class="input-field " flex justify-start items-center>
                        <i class="i-carbon-password text-20  color-#335eb3 hvr-grow" icon-btn></i>
                        <input type="password" autocomplete placeholder="密码" />
                    </div>
                    <input type="submit" class="btn hvr-grow" value="注册" />
                    <p class="social-text">或者使用第三方账号登录</p>

                    <div flex justify-center items-center class="icons">
                        <div class="iconItem" justify-center items-center>
                            <i class="i-carbon-logo-github text-20  color-#335eb3 hvr-grow" icon-btn></i>
                        </div>
                        <div class="iconItem" justify-center items-center>
                            <i class="i-carbon-logo-wechat text-20  color-#335eb3 hvr-grow" icon-btn></i>
                        </div>
                        <div class="iconItem" justify-center items-center>
                            <i class="i-carbon-logo-twitter text-20  color-#335eb3 hvr-grow" icon-btn></i>
                        </div>
                        <div class="iconItem" justify-center items-center>
                            <i class="i-carbon-logo-vue text-20  color-#335eb3 hvr-grow" icon-btn></i>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <img class=" logo1 hvr-grow" src="/src/assets/logo.png" alt="妄想社OA">
                    <h3>“ 新来的 ? ”</h3>
                    <p>
                        “ 想要成为我们的一员吗？ ”
                    </p>
                    <button class="hvr-grow transparent" @click="signUpClick" ref="sign_up_btn" id="sign-up-btn">
                        注册
                    </button>
                </div>

            </div>
            <div class="panel right-panel">
                <div class="content">
                    <img class="logo hvr-grow" src="/src/assets/logo.png" alt="妄想社OA">
                    <h3>“ 我们的一员 ? ”</h3>
                    <p text-20>
                        " 欢迎回来！"
                    </p>
                    <button class="hvr-grow transparent" @click="signInClick" ref="sign_in_btn" id="sign-in-btn">
                        登录
                    </button>
                </div>

            </div>
        </div>
        <div class="videoContainer">
            <video class="fullscreenVideo" id="bgVid" playsinline="" autoplay="" muted="" loop="">
                <source src="/src/assets/video/work2.mp4" type="video/mp4">
            </video>
        </div>
    </div>



</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

img,
video {
    max-width: inherit;
}

body,
input {
    font-family: "Poppins", sans-serif;
}

.logo {
    height: 8vh;
    color: #333;
    margin: auto;
}

.logo:hover {
    filter: drop-shadow(0 0 2px #335eb3);
}

.logo1 {
    height: 8vh;
    color: #333;
    margin: auto;
    filter: drop-shadow(0 0 2px #fff);
}

.logo1:hover {}

.icons {
    gap: 20px;
    margin-top: 5px;
    width: 100%;

    .iconItem {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #fff;
        display: flex;

    }
}

.iconItem:hover {
    background-color: #335eb3;

    i {
        color: #fff;
        opacity: 1;
    }
}

.videoContainer {
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

}

.videoContainer:before {
    content: "";
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: block;
    z-index: -1;
    top: 0;
    left: 0;
    background: rgba(25, 29, 34, .65);
}

.container {
    position: relative;
    width: 100%;
    background-color: #f0f8ff;
    min-height: 100vh;
    overflow: hidden;
}

.forms-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.signin-signup {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 75%;
    width: 50%;
    transition: 1s 0.7s ease-in-out;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
}

form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0rem 5rem;
    transition: all 0.2s 0.7s;
    overflow: hidden;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}

form.sign-up-form {
    opacity: 0;
    z-index: 1;
}

form.sign-in-form {
    z-index: 2;
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 10rem;
    font-weight: 600;
    letter-spacing: 50px;
    padding-left: 50px;
    color: #fff;
    margin-bottom: 10px;
    width: max-content;
}

.input-field {
    max-width: 380px;
    width: 100%;
    background-color: #fff;
    margin: 10px 0;
    height: 55px;
    border-radius: 8px;
    padding-left: 20px;
    gap: 20px;

    input {
        margin-left: 5px;
        background: none;
        outline: none;
        border: none;
        line-height: 1;
        font-weight: 600;
        font-size: 1.1rem;
        color: #333;
    }
}

.input-field:hover {
    box-shadow: rgb(38, 57, 77) 1px 1px 10px -5px;
}

.input-field input::placeholder {
    color: #aaa;
    font-weight: 500;
}

.social-text {
    padding: 0.7rem 0;
    font-size: 1rem;
    color: #fff;
}

.social-media {
    display: flex;
    justify-content: center;
}

.social-icon {
    height: 46px;
    width: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.45rem;
    color: #333;
    border-radius: 50%;
    border: 1px solid #333;
    text-decoration: none;
    font-size: 1.1rem;
    transition: 0.3s;
}

.social-icon:hover {
    color: #4481eb;
    border-color: #4481eb;
}

.btn {
    width: 150px;
    background-color: #5995fd;
    border: none;
    outline: none;
    height: 49px;
    border-radius: 8px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    cursor: pointer;
    transition: 0.5s;
    letter-spacing: 15px;
    padding-left: 15px;
}

.btn:hover {
    background-color: #4d84e2;
}

.transparent {
    margin: 0;
    background: none;
    border: 2px solid #fff;
    width: 130px;
    height: 41px;
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 15px;
    padding-left: 15px;
    border-radius: 8px;
}

.panels-container {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.container:before {
    content: "";
    position: absolute;
    height: 3000px;

    width: 4000px;
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    background-image: linear-gradient(-45deg, rgba(77,
                132,
                226, 0.5) 0%, rgba(12, 30, 85, 0.1) 100%);
    backdrop-filter: blur(20px);
    transition: 1.8s ease-in-out;
    border-radius: 50%;
    z-index: 6;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 22px 70px 4px;
}

.image {
    width: 100%;
    transition: transform 1.1s ease-in-out;
    transition-delay: 0.4s;
}

.panel {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    z-index: 6;
}

.left-panel {
    pointer-events: all;
    padding: 3rem 50% 2rem 12%;
}

.right-panel {
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
}

.panel .content {
    color: #fff;

    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
    padding-bottom: 200px;
}

.panel h3 {
    margin-top: 30px;
    font-weight: 600;
    line-height: 1;
    font-size: 10rem;
}

.panel p {
    font-size: 5rem;
    padding: 0.7rem 0;
    margin: 20px;
}



.right-panel .image,
.right-panel .content {
    transform: translateX(800px);
}

/* ANIMATION */

.container.sign-up-mode:before {
    transform: translate(100%, -50%);
    right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
    transform: translateX(-800px);
}

.container.sign-up-mode .signin-signup {
    left: 25%;
}

.container.sign-up-mode form.sign-up-form {
    opacity: 1;
    z-index: 2;
}

.container.sign-up-mode form.sign-in-form {
    opacity: 0;
    z-index: 1;
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
    transform: translateX(0%);
}

.container.sign-up-mode .left-panel {
    pointer-events: none;
}

.container.sign-up-mode .right-panel {
    pointer-events: all;
}

@media (min-width:800px) {
    .container {
        max-width: 100vw;
    }

}
</style>