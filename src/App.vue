<template>
    <div class="appvue">
        <header>
            <div class="appHeader">
                <a href="../public/index.html">
                    <img alt="hn_log" src="./assets/schoolLog.png" style="width:150px" />
                </a>
                <nav>
                    <router-link to="/home">首 页</router-link>
                    <span class="line" />
                    <router-link to="/studentSystem">教务系统</router-link>
                    <span class="line" />
                    <router-link to="/schoolServe">校园服务</router-link>
                </nav>
            </div>
        </header>

        <div class="mid">
            <router-view />
        </div>

        <div class="footer">
            <div>
                © 2022 海大校园 计算机科学与技术学院 编号：570228<br>
                <a href="javascript:void(0);">版权条款</a> <a href="javascript:void(0);">隐私条款</a>
            </div>
        </div>
    </div>
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    * {
        margin: 0;
        padding: 0;
    }

    html,
    body {
        width: 100%;
        height: 100%;
    }

    .appvue {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    /* 上 */
    header {
        height: 3.6rem;
        background-color: #004098;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }



    .appHeader {
        padding: 0.7rem;

        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;
    }

    nav a {
        font-size: .9rem;
        color: gray;
    }

    nav a.router-link-exact-active {
        color: white;
    }

    .line {
        display: inline-block;
        width: 1rem;
        position: relative;
        top: 50%;
    }

    /* 中间内容 */
    .mid {
        margin-top: 3.6rem;
        flex-grow: 1;
    }


    /* 尾部 */
    .footer {
        width: 100%;
        height: 60px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer div {
        font-size: 12px;
        color: #9499A0;
    }

    .footer a {
        color: #9499A0;
    }
</style>
