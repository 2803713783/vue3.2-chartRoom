<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const login = () => {
    router.push({ name: 'login' }).catch(err => { console.log('err', err) })
}
const handleMouseEnter = (e) => {
    if (!e.target.dataset.expand) {
        return;
    }

    navsVisited += 1;

    if (navsVisited === 1) {
        expandMenu.value.classList.add("new--expand");
        menus.forEach((menu) => menu.classList.add("first"));
        indicator.value.classList.add("first");
    } else {
        expandMenu.value.classList.remove("new--expand");
        menus.forEach((menu) => menu.classList.remove("first"));
        indicator.value.classList.remove("first");
    }

    navLinks.forEach((navLink) => {
        if (navLink === e.target) {
            navLink.classList.add("hover");
            currentNav = navLink;
        } else {
            navLink.classList.remove("hover");
        }
    });

    const navLinkCenter = Math.floor(
        e.target.offsetLeft + e.target.clientWidth / 2
    );

    indicator.value.style.transform = `translateX(${navLinkCenter}px)`;
    indicator.value.style.opacity = "1";

    const targetMenu = document.querySelector(`#${e.target.dataset.expand}`);
    const targetCoords = targetMenu.getBoundingClientRect();
    const { width: targetWidth, height: targetHeight } = targetCoords;

    expandMenu.value.style.width = targetWidth + "px";
    expandMenu.value.style.height = targetHeight + "px";

    const prevMenu = targetMenu.previousElementSibling;

    targetMenu.classList.remove("prev");

    if (prevMenu) {
        prevMenu.classList.add("prev");
    }

    menus.forEach((menu) => {
        if (menu.id === targetMenu.id) {
            menu.classList.add("active");
        } else {
            menu.classList.remove("active");
        }
    });

    expandMenu.value.classList.add("expand");
};

const handleMouseLeave = (e) => {
    if (isMouseOnMenu || e.y > 50) {
        return;
    }

    forceInitialState();
};

const forceInitialState = () => {
    expandMenu.value.classList.remove("expand", "active");
    currentNav.classList.remove("hover");
    menus.forEach((menu) => menu.removeAttribute("class"));
    indicator.value.style.opacity = "0";
    currentNav = null;
    navsVisited = 0;
};

const expandMenu = ref();
const menu1 = ref();
const menu2 = ref();
const menu3 = ref();
const menu4 = ref();
const navLink1 = ref();
const navLink2 = ref();
const navLink3 = ref();
const navLink4 = ref();
let menus = []
let navLinks = [];
const indicator = ref();
const links = ref();
let isMouseOnMenu = false;
let currentNav;
let navsVisited = 0;
const init = () => {
    links.value.addEventListener("mouseleave", handleMouseLeave)

    navLinks.forEach((navLink) => {
        navLink.addEventListener("mouseenter", handleMouseEnter);
    });

    expandMenu.value.addEventListener("mouseenter", () => {
        if (expandMenu.value.style.opacity === "1") {
            isMouseOnMenu = true;
        }
    });


    expandMenu.value.addEventListener("mouseleave", (e) => {
        if (e.y > 70) {
            isMouseOnMenu = false;
            forceInitialState();
        }
    });
}
onMounted(() => {
    menus.push(menu1.value)
    menus.push(menu2.value)
    menus.push(menu3.value)
    menus.push(menu4.value)
    navLinks.push(navLink1.value)
    navLinks.push(navLink2.value)
    navLinks.push(navLink3.value)
    navLinks.push(navLink4.value)
    console.log('expandMenu', expandMenu.value)
    console.log('menus', menus)
    console.log('navLinks', navLinks)
    console.log('links', links.value)
    console.log('indicator', indicator.value)
    init()
})

</script>

<template>
    <div class="background">
        <header>
            <img class="logo hvr-grow" src="/src/assets/logoBlackNoBackgroung.png" alt="妄想社OA" />
            <nav class="navbar">
                <ul class="nav__links" ref="links">
                    <li data-expand="products" class="nav--link" ref="navLink1">公司产品</li>
                    <li data-expand="use-cases" class="nav--link" ref="navLink2">用户画象</li>
                    <li data-expand="developers" class="nav--link" ref="navLink3">开发团队</li>
                    <li data-expand="company" class="nav--link" ref="navLink4">其他资讯</li>
                </ul>
            </nav>
            <div flex gap-20>
                <button @click="login" class="btn btn--primary">
                    <span>登录</span>
                    <div class="arrow">
                        <div class="line arrow--sideUp"></div>
                        <div class="line arrow--sideDown"></div>
                        <div class="line arrow--hoverLine"></div>
                    </div>
                </button>
                <button class="btn btn--primary">
                    <span>咨询</span>
                    <div class="arrow">
                        <div class="line arrow--sideUp"></div>
                        <div class="line arrow--sideDown"></div>
                        <div class="line arrow--hoverLine"></div>
                    </div>
                </button>
                <button class="btn btn--primary">
                    <span m-r-5>关于</span>
                    <icon-menu-unfold :size="23" />
                </button>
            </div>


            <div class="tip" ref="indicator"></div>
            <section class="header__expandMenu" ref="expandMenu">
                <div class="menu__container">
                    <div id="products" ref="menu1">
                        <div class="sub__menu">
                            <h3 class="title">PAYMENTS</h3>
                            <ul class="subMenu__items">
                                <li class="subMenu--item">
                                    <img src="./images/payment.svg" alt="" />
                                    <span class="label__container">
                                        <div class="label">
                                            Payments
                                            <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                        </div>
                                        <div class="label--desc">Online payments</div>
                                    </span>
                                </li>

                                <li class="subMenu--item">
                                    <img src="./images/terminal.svg" alt="" />
                                    <span class="label__container">
                                        <div class="label">
                                            Terminal
                                            <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                        </div>
                                        <div class="label--desc">In-person payments</div>
                                    </span>
                                </li>

                                <li class="subMenu--item">
                                    <img src="./images/connect.svg" alt="" />
                                    <span class="label__container">
                                        <div class="label">
                                            Connect
                                            <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                        </div>
                                        <div class="label--desc">Payments for platforms</div>
                                    </span>
                                </li>

                                <li class="subMenu--item">
                                    <img src="./images/billing.svg" alt="" />
                                    <span class="label__container">
                                        <div class="label">
                                            Billing
                                            <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                        </div>
                                        <div class="label--desc">Subscriptions & invoicing</div>
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div class="sub__menu">
                            <h3 class="title">PAYOUTS</h3>
                            <ul class="subMenu__items">
                                <li class="subMenu--item">
                                    <img src="./images/payouts.svg" alt="" />
                                    <span class="label__container">
                                        <div class="label">
                                            Payouts
                                            <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                        </div>
                                        <div class="label--desc">Programmatic payouts</div>
                                    </span>
                                </li>

                                <li class="subMenu--item">
                                    <img src="./images/issuing.svg" alt="" />
                                    <span class="label__container">
                                        <div class="label">
                                            Issuing
                                            <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                        </div>
                                        <div class="label--desc">Card creation</div>
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div class="sub__menu">
                            <h3 class="title">BUISNESS OPERATIONS</h3>
                            <ul class="subMenu__items">
                                <li class="subMenu--item">
                                    <img src="./images/radar.svg" alt="" />
                                    <span class="label__container">
                                        <div class="label">
                                            Radar
                                            <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                        </div>
                                        <div class="label--desc">Fraud & risk management</div>
                                    </span>
                                </li>

                                <li class="subMenu--item">
                                    <img src="./images/sigma.svg" alt="" />
                                    <span class="label__container">
                                        <div class="label">
                                            Sigma
                                            <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                        </div>
                                        <div class="label--desc">Custom reports</div>
                                    </span>
                                </li>

                                <li class="subMenu--item">
                                    <img src="./images/atlas.svg" alt="" />
                                    <span class="label__container">
                                        <div class="label">
                                            Atlas
                                            <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                        </div>
                                        <div class="label--desc">Start-up incorporation</div>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="use-cases" ref="menu2">
                        <ul class="subMenu__items">
                            <li class="subMenu--item">
                                <img class="icon--production" src="./images/saas.svg" alt="" />
                                <span class="label__container">
                                    <div class="label">
                                        SaaS
                                        <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                    </div>
                                    <div class="label--desc">
                                        Manage recurring bills and subscriptions
                                    </div>
                                </span>
                            </li>

                            <li class="subMenu--item">
                                <img class="icon--production" src="./images/marketplace.svg" alt="" />
                                <span class="label__container">
                                    <div class="label">
                                        Marketplaces
                                        <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                    </div>
                                    <div class="label--desc">
                                        Pay out globally and facilitate multi-party payments
                                    </div>
                                </span>
                            </li>

                            <li class="subMenu--item">
                                <img class="icon--production" src="./images/platform.svg" alt="" />
                                <span class="label__container">
                                    <div class="label">
                                        Platform
                                        <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                    </div>
                                    <div class="label--desc">
                                        Let customers accept payments within your platform
                                    </div>
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div id="developers" ref="menu3">
                        <div class="subMenu--item item--one">
                            <img class="icon--production" src="./images/documentation.svg" alt="" />
                            <span class="label__container">
                                <div class="label">
                                    Documentation
                                    <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                </div>
                                <div class="label--desc">
                                    Start integrating stripe's products and tools
                                </div>
                            </span>
                        </div>

                        <div class="sec__links--container">
                            <h4 class="sec__title">GET STARTED</h4>

                            <ul class="sec__links">
                                <li class="sec__link">Prebuilt checkout</li>
                                <li class="sec__link">Liberaries and SDKs</li>
                                <li class="sec__link">Plugins</li>
                                <li class="sec__link">Code samples</li>
                            </ul>
                        </div>

                        <div class="sec__links--container">
                            <h4 class="sec__title">GET STARTED</h4>

                            <ul class="sec__links">
                                <li class="sec__link">Accept online payments</li>
                                <li class="sec__link">Manage subscriptions</li>
                                <li class="sec__link">Send payments</li>
                                <li class="sec__link">Set up in-person payments</li>
                            </ul>
                        </div>

                        <ul class="subMenu__items sec--menu">
                            <li class="subMenu--item">
                                <img src="./images/reference.svg" alt="" />
                                <span class="label__container">
                                    <div class="label">
                                        Full API reference
                                        <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                    </div>
                                </span>
                            </li>

                            <li class="subMenu--item">
                                <img src="./images/support.svg" alt="" />
                                <span class="label__container">
                                    <div class="label">
                                        Support
                                        <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                    </div>
                                </span>
                            </li>
                        </ul>

                        <ul class="subMenu__items sec--menu">
                            <li class="subMenu--item">
                                <img src="./images/status.svg" alt="" />
                                <span class="label__container">
                                    <div class="label">
                                        API status
                                        <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                    </div>
                                </span>
                            </li>

                            <li class="subMenu--item">
                                <img src="./images/changelog.svg" alt="" />
                                <span class="label__container">
                                    <div class="label">
                                        Changelog
                                        <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                    </div>
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div id="company" ref="menu4">
                        <ul class="subMenu__items sec--menu">
                            <li class="subMenu--item">
                                <img src="./images/about.svg" alt="" />
                                <span class="label__container">
                                    <div class="label">
                                        About stripe
                                        <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                    </div>
                                </span>
                            </li>

                            <li class="subMenu--item">
                                <img src="./images/customers.svg" alt="" />
                                <span class="label__container">
                                    <div class="label">
                                        Customers
                                        <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                    </div>
                                </span>
                            </li>

                            <li class="subMenu--item">
                                <img src="./images/enterprise.svg" alt="" />
                                <span class="label__container">
                                    <div class="label">
                                        Enterprise
                                        <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                    </div>
                                </span>
                            </li>
                        </ul>

                        <ul class="subMenu__items sec--menu">
                            <li class="subMenu--item">
                                <img src="./images/jobs.svg" alt="" />
                                <span class="label__container">
                                    <div class="label">
                                        Jobs
                                        <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                    </div>
                                </span>
                            </li>

                            <li class="subMenu--item">
                                <img src="./images/newsroom.svg" alt="" />
                                <span class="label__container">
                                    <div class="label">
                                        Newsroom
                                        <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                    </div>
                                </span>
                            </li>

                            <li class="subMenu--item">
                                <img src="./images/partners.svg" alt="" />
                                <span class="label__container">
                                    <div class="label">
                                        Partners
                                        <img class="right--arrow" src="./images/right-arrow.svg" alt="" />
                                    </div>
                                </span>
                            </li>
                        </ul>

                        <div class="more__info">
                            <h4 class="sec__title">From the blog</h4>
                            <div class="more__links">
                                <a href="#">European payment methods available worldwide</a>
                                <a href="#">We built Checkout so you don't have to</a>
                                <a href="#">To design and develop an interactive globe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>

        <div class="page page1 flexRow justify-center">
            <div class="box box" flex items-center>
                <div class="text" flex>
                    <div class="title1">ALL IN ONE SOLUTION FOR YOU</div>
                    <div class="title2">Build Your Business Easy Solution</div>
                    <div class="description">Enim luctus sociis cum quam cubilia penatibus sodales neque tristique
                        tempor dignissim aptent sollicitudin mattis
                        integer magnis</div>
                    <div class="buttons flexRow">
                        <button class="button">Get Started</button>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div class="svg"></div>
            </div>
        </div>

        <div class="page page2">
            <div class="flexColumn box">
                <div class="title">How We Work</div>
                <div class="brief">Our Work Process</div>
                <div class="containerCard flexRow">
                    <div class="Item flexColumn">
                        <div class="svg svg1"></div>
                        <div class="title">#1 Design</div>
                        <div class="description">Tempor lacus sodaleset conub accumsan ornare life</div>
                    </div>
                    <div class="Item flexColumn">
                        <div class="svg svg2"></div>
                        <div class="title">#2 Branding</div>
                        <div class="description">Tempor lacus sodaleset conub accumsan ornare life</div>
                    </div>
                    <div class="Item flexColumn">
                        <div class="svg svg3"></div>
                        <div class="title">#3 Marketing</div>
                        <div class="description">Tempor lacus sodaleset conub accumsan ornare life</div>
                    </div>
                    <div class="Item flexColumn">
                        <div class="svg svg4"></div>
                        <div class="title">#4 Solution</div>
                        <div class="description">Tempor lacus sodaleset conub accumsan ornare life</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page page3">
            <div class="flexRow box">
                <div class="Item flexColumn">
                    <div class="title"></div>
                    <div class="brief"></div>
                </div>
            </div>
        </div>
        <div class="page page4">
            <div class="box">
                <div class="img"></div>
                <div class="description">
                    <div class="about"></div>
                    <div class="title"></div>
                    <div class="description"></div>
                    <div class="button"></div>
                </div>
            </div>

        </div>
        <div class="page page5">
            <div class="flexColumn box">
                <div class="brief"></div>
                <div class="title"></div>
                <div class="Item">
                    <div class="oneColumm flexRow">
                        <div class="item flex items-start ">
                            <div class="img"></div>
                            <div class="title"></div>
                            <div class="description"></div>
                            <div class="link"></div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Andika+New+Basic:wght@400;700&display=swap");

::-webkit-scrollbar {
    width: 0 !important
}



.background {
    // background-image: linear-gradient(30deg, #ef008f, #6ec3f4, #7038ff, #ffba27);
    //background-image: url('/src/assets/index/header.jpg');
    // background-color: #333;
    background-size: cover;

    letter-spacing: 2px;
    position: relative;



    .page1 {

        width: 100vw;
        height: 100vh;
        background: linear-gradient(135deg, #fff 0%, #bedaff 10%, rgba(51,
                    94,
                    179, 0.7) 60%, #335eb3 100%);

        .box {
            width: 76%;
            height: 80%;
            justify-content: space-between;

            .text {
                width: 50%;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                gap: 30px;

                .title1 {
                    padding: 10px 20px;
                    border-radius: 16px;
                    width: max-content;
                    color: #335eb3;
                    font-weight: 600;
                    background-color: #bedaff;
                    border: 1px solid rgba(0, 0, 73, 0.2);
                }

                .title2 {
                    // width: 70%;
                    font-size: 15rem;
                    font-weight: 1000;
                    color: #111;
                }

                .description {
                    width: 80%;
                    color: #222;
                }

                .buttons {
                    width: 100%;
                    justify-content: flex-start;

                    .button {
                        width: 150px;
                        height: 45px;
                        background-color: #3783fc;
                        border-radius: 16px;
                        color: #fff;
                        font-weight: 600;
                    }
                }
            }

            .svg {
                background-image: url('/src/assets/index/page1-1.png');
                width: 50%;
                height: 100%;
                background-size: contain;
                background-repeat: no-repeat;
            }
        }


    }

    .page2 {

        height: 70vh;
        width: 100vw;

        .box {
            margin: auto;
            height: 100%;
            width: 76%;
            justify-content: center;

            .title {
                font-weight: 600;
                color: #335eb3;
            }

            .brief {
                font-size: 12rem;
                font-weight: 1000;
                color: #111;
            }

            .containerCard {
                width: 100%;
                height: 60%;
                gap: 30px;
                justify-content: space-between;

                .Item {
                    height: 80%;
                    width: 22%;
                    padding: 20px;
                    justify-content: center;
                    gap: 30px;
                    // background-color: #3783fc;
                    border-radius: 16px;
                    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

                    .svg {
                        width: 40%;
                        height: 40%;
                        background-repeat: no-repeat;
                        background-size: contain;
                    }

                    .title {
                        font-size: 6rem;
                        font-weight: 600;
                    }

                    .description {
                        text-align: center;
                        color: #444;
                        font-size: 4rem;
                    }

                    .svg1 {
                        background-image: url('/src/assets/index/01.svg');
                    }

                    .svg2 {
                        background-image: url('/src/assets/index/02.svg');
                    }

                    .svg3 {
                        background-image: url('/src/assets/index/03.svg');
                    }

                    .svg4 {
                        background-image: url('/src/assets/index/04.svg');
                    }



                }

            }


        }

    }

    .page3 {
        height: 30vh;

        .Item.flexColumn {
            .title {}

            .brief {}
        }

    }

    .page4 {
        .img {}

        .description {
            .about {}

            .title {}

            .description {}

            .button {}
        }
    }

    .page5 {
        .brief {}

        .title {}

        .Item {
            .oneColumm {
                .item {
                    .img {}

                    .title {}

                    .description {}

                    .link {}
                }
            }



        }
    }


    header {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;

        display: flex;
        padding: .5vh 12vw;
        justify-content: space-between;
        align-items: center;
        //background: rgba(55, 131, 252, 0.2);
        backdrop-filter: blur(20px);

        .logo {
            height: 8vh;
            color: #333;
            filter: drop-shadow(0 0 2px #fff);
        }

        .logo:hover {
            filter: drop-shadow(-5 -5 10px #3783fc);
        }

        .navbar {
            .nav__links {
                display: flex;
                list-style: none;
                color: #fff;
                font-weight: 700;
                height: 8vh;
                text-align: center;
                justify-content: center;
                align-items: center;
            }

            .nav--link {
                padding: 0 4rem;
                transition: opacity 100ms linear;
                cursor: pointer;
            }

        }


        .btn {
            padding: 2rem 4rem;
            display: flex;
            align-items: center;
            font-family: inherit;
            font-weight: 700;
            color: #fff;
            outline: none;
            border: none;
            background-color: #ffffff35;
            border-radius: 16px;
            transition: background-color 100ms linear;
            cursor: pointer;

        }

        .arrow {
            width: 20px;
            height: 10px;
            position: relative;
            transform: translateX(-4px);
        }

        .line {
            position: absolute;
            top: 46%;
            right: 0;
            height: 2px;
            width: 7px;
            background-color: #fff;
            transform-origin: 100% 50%;
        }

        .arrow--sideUp {
            transform: rotate(45deg);
        }

        .arrow--sideDown {
            transform: rotate(-45deg);
        }

        .arrow--hoverLine {
            width: 12px;
            transform: scale(0);
        }

        .arrow,
        .line {
            transition: transform 100ms ease-in;
        }

        .btn--primary:hover {
            background-color: #ffffff65;
        }

        .btn:hover .arrow {
            transform: none;
        }

        .btn:hover .arrow--hoverLine {
            transform: scale(1);
        }

        .tip {
            width: 5rem;
            height: 5rem;
            background-color: #fff;
            position: absolute;
            top: 18rem;
            left: 0;
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
            transition: transform 100ms linear;
            opacity: 0;
        }

        .header__expandMenu {
            position: absolute;
            top: 20rem;
            left: 55%;
            width: 95%;
            height: 90%;
            transform-origin: 0%;
            transform: translateX(-50%) rotate3d(1, 0, 0, -15deg);
            // background-color: white;
            border-radius: 16px;
            perspective: 100px;
            transition: width 250ms ease, height 250ms ease, opacity 150ms ease,
                transform 200ms ease-in;
            overflow: hidden;
            opacity: 0;
            pointer-events: none;
        }

        .menu__container {
            width: 100%;
            height: 100%;
            background-color: #fff;
        }

        .menu__container>* {
            position: absolute;
            top: 0;
            left: 50%;
            padding: 8rem;
            overflow: hidden;
            transform: translateX(-35%);
            transition: transform 250ms linear, opacity 250ms ease;
            opacity: 0;
        }

        #products {
            display: grid;
            grid-template-columns: repeat(3, 300px);
        }

        #developers,
        #company {
            display: grid;
            grid-template-columns: repeat(2, 225px);
            row-gap: 8rem;
        }

        .item--one {
            grid-column: span 2;
        }

        #use-cases {
            width: 450px;
        }

        .subMenu__items {
            list-style: none;
        }

        .title {
            font-size: 3.4rem;
            margin-bottom: 7rem;
        }

        .subMenu--item {
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        .label__container {
            margin-left: 3rem;
        }

        .label {
            font-size: 3.6rem;
            font-weight: 700;
            color: rgba(0, 0, 73, 0.644);
            display: flex;
        }

        .label--desc {
            font-size: 3.6rem;
            color: rgb(83, 83, 83);
            transform: translateY(-3px);
            transition: color 100ms ease;
        }

        .subMenu--item+.subMenu--item {
            margin-top: 3.6rem;
        }

        .icon--production {
            transform: translateY(-55%) scale(1.1);
        }

        .right--arrow {
            width: 12px;
            transform: translateY(1px) scale(0, 1);
            transition: transform 150ms ease-in-out;
        }

        .subMenu--item:hover .right--arrow {
            transform: translateY(1.75px) scale(1);
        }

        .subMenu--item:hover .label--desc {
            color: black;
        }

        .active {
            z-index: 1;
            opacity: 1;
            transform: translatex(-50%);
        }

        .prev {
            transform: translateX(-65%);
        }

        .expand {
            opacity: 1;
            pointer-events: all;
            transform: translateX(-50%) rotateX(0);
        }

        .hover {
            opacity: 0.5;
        }

        .new--expand {
            transition: opacity 150ms ease, transform 150ms ease-in;
        }

        .first {
            transition: none;
        }

        .sec--menu .subMenu--item+.subMenu--item {
            margin-top: 2rem;
        }

        .sec__title {
            color: grey;
            margin-bottom: 2.6rem;
        }

        .sec__links {
            list-style: none;
            padding: 0 0 0.8rem 0;
        }

        .sec__links>li {
            cursor: pointer;
            font-size: 3.4rem;
            font-weight: 400;
        }

        .sec__links--container {
            padding-left: 8rem;
        }

        .more__info {
            grid-column: span 2;
        }

        .more__links {
            padding-left: 6rem;
        }

        a {
            text-decoration: none;
            display: block;
            color: rgb(0, 0, 73);
        }

        a:hover {
            text-decoration: underline dotted;
        }
    }
}
</style>