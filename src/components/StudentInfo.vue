<template>
    <div class="stuInfo">
        <div class="stuProf">
            <img alt="Head logo" src="../assets/headPic.jpg" />
        </div>

        <div class="stuDetail">
            <div>姓名：周于斗</div>
            <div>性别：男</div>
            <div>学号：20190602310054</div>
            <div>班级：软件工程4班</div>
            <div>
                绩点：4.0<span class="grade">优异</span>
            </div>
        </div>

        <div class="more"><a>详细信息></a></div>
    </div>
</template>

<script>
    export default {
        name: 'StudentInfo',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
    .stuInfo {
        margin-bottom: 1rem;
        padding: 0.5rem;
        font-size: 18px;
        border: 2px solid gray;
        border-radius: 10px;

        background-color: white;

        display: flex;
        align-items: center;
        /* justify-content: space-between; */
    }

    /* 
    .stuProf {
        display: flex;
        flex-direction: column;
    } */

    .stuDetail {

        margin-left: 1rem;
        margin-right: 1rem;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .stuInfo img {
        width: 100px;
        height: 100px;
        border-radius: 40px;
    }

    .grade {
        margin-left: 0.5rem;
        letter-spacing: 1px;
        text-align: center;
        border: 2px solid rgba(0, 0, 200, 0.6);
        background: rgba(0, 0, 200, 0.3);
        color: rgba(0, 0, 200, 0.6);
        box-shadow: 1px 1px 2px rgba(0, 0, 200, 0.4);
        border-radius: 10px;
        padding: 3px 10px;
        /* display: inline-block; */
        /* cursor: pointer; */
    }

    .more {
        align-self: flex-end;
    }
</style>
