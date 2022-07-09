<template>
    <div class="home">
        <div class="add">
            <Ad />
        </div>
        <div class="inner">
            <div class="leftPart">
                <StudentInfo msg="Welcome to Your Vue.js App" />
                <Courses />
            </div>

            <div class="rightPart">
                <div class="news">
                    <NewsCard />
                </div>
                <div class="rightButtonPart">
                    <div class="studyRoom">
                        <StudyRoom />
                    </div>
                    <div class="tool">
                        <Tool />
                    </div>
                </div>
            </div>

            <div class="contact">
                <button><img alt="Head logo" src="../assets/contact.png" />联系我们</button>

            </div>

        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import StudentInfo from '@/components/StudentInfo.vue'
    import NewsCard from '@/components/NewsCard.vue'
    import Courses from '@/components/Courses.vue'
    import Ad from '@/components/Ad.vue'
    import StudyRoom from '@/components/StudyRoom.vue'
    import Tool from '@/components/Tool.vue'

    export default {
        name: 'HomeView',
        components: {
            StudentInfo,
            NewsCard,
            Courses,
            Ad,
            StudyRoom,
            Tool
        }
    }
</script>

<style scoped>
    .home {
        width: 1690 px;
        min-height: 30rem;
        /* height: 100%; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    /* 上 */
    .add {
        width: 80%;
    }

    /* 下 */
    .inner {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        width: 1300px;
        display: flex;
    }



    /* 左 */
    .leftPart {

        width: 460px;
        height: 650px;

        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
    }

    StudentInfo {
        height: 38.2%;
    }

    Courses {
        height: 63%;
    }

    /* 右 */
    .rightPart {
        margin-left: 1rem;
        margin-right: 0.3rem;
        padding: 0.1rem;
        width: 750px;
        /* height: 100%;1.618 */

        border: 1px solid gray;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .rightButtonPart {
        margin: 0.5rem;
        display: flex;
    }

    .contact {
        padding: 0.2rem;
        width: 3rem;
        height: 4rem;
        font-size: 9px;
        border-radius: 3px;

        position: fixed;
        right: 170px;
        bottom: 80px;
    }

    button {
        background-color: lightgray;
        height: 100%;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }

    img {
        width: 79%;
    }

    button:hover {
        opacity: .8;
        background-color: lightblue;
    }
</style>
