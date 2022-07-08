<template>
    <div class="stuInfo">
        <div class="stuProf">
            <img alt="Head logo" src="../assets/headPic.jpg" />
            <div>周于斗 </div>
        </div>

        <div class="stuDetail">
            <div>性别：男</div>
            <div>学号：20190602310054</div>
            <div>班级：软件工程4班</div>
            <div>绩点：4.0</div>
        </div>
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
        padding: 1rem;
        display: flex;
    }

    .stuProf {
        display: flex;
        flex-direction: column;
        font-size: 16px;
    }

    .stuDetail {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .stuInfo img {
        width: 100px;
        height: 100px;
        border-radius: 30px;
    }
</style>
