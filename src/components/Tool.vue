<template>
    <div class="tool">
        <div class="toolTitle">工 具 栏</div>
        <div class="search">
            <Poptip trigger="hover" title="不知道怎么使用？试着输入:" content="电费充值">
                <Input search enter-button placeholder="请在此输入要查找的功能..." />
            </Poptip>
        </div>
        <div class="buttons">
            <div class="buttonCol1">
                <button type="primary" @click="chargePower()">电费充值</button>
                <button type="primary" @click="grade()">成绩查询</button>
                <button type="primary" @click="action(false)">教学校历</button>
                <button type="primary" @click="action(false)">选课中心</button>
            </div>
            <div class="buttonCol2">
                <button type="primary" @click="applyfor(false)">不挂申请</button>
                <button type="primary" @click="applyfor(false)">交流申请</button>
                <button type="primary" @click="applyfor(false)">缓考申请</button>
                <button type="primary" @click="applyfor(false)">离校申请</button>

            </div>
            <div class="buttonCol3">
                <button type="primary" @click="testing(false)">兼职全职</button>
                <button type="primary" @click="testing(false)">二手夜市</button>
                <button type="primary" @click="testing(false)">校图书馆</button>
                <button type="primary" @click="testing(false)">论文检测</button>
            </div>
        </div>

    </div>
</template>

<script>
    import {
        Input
    } from 'view-ui-plus';
    export default {
        name: 'Tool',
        methods: {
            grade() {
                alert('您考了100分！哇塞，太牛了。')
            },
            action(a) {
                this.$Notice.success({
                    title: '操作成功',
                    desc: '恭喜您操作成功，相关事项已发送至您的邮箱，请查收！'
                });
            },
            applyfor(a) {
                this.$Notice.success({
                    title: '申请成功',
                    desc: '恭喜您申请成功，相关事项已发送至您的邮箱，请查收！'
                });
            },
            testing(a) {
                this.$Notice.warning({
                    title: '正在测试',
                    desc: '功能正在测试中，敬请期待。'
                });
            },
            chargePower() {
                this.$Modal.confirm({
                    render: (h) => {
                        return h(Input, {
                            size: "large",
                            modelValue: this.value,
                            autofocus: true,
                            placeholder: '请输入您要充值的数额'
                        })
                    },
                    onOk: () => {
                        this.$Notice.success({
                            title: '充值成功'
                        });
                    },
                })
            }

        },
        setup() {

        }
    }
</script>

<style scoped>
    .tool {
        height: 15rem;
        /* width: 100%; */
        padding: 0.5rem;

        font-size: 17px;
        margin: 1rem;
        background-color: white;

        border-radius: 10px;

        background: #004098 url(../assets/topright.jpg) no-repeat center bottom;
    }

    .toolTitle {
        color: white;
        margin-bottom: 0.2rem;
    }

    .buttons {
        width: 100%;
        display: flex;
        /* flex-wrap: wrap; */
        justify-content: space-between;
    }

    .buttons button {
        width: 30%;
        height: 2rem;
        margin-top: 0.4rem;

        border: 2px solid gray;
        border-radius: 10px;
    }

    .buttonCol1 .buttonCol2 .buttonCol3 {
        display: flex;
        flex-direction: column;
    }

    .buttonCol1 button {
        width: 90%;
        height: 2rem;
        margin-top: 0.4rem;

        border: 2px solid gray;
        border-radius: 10px;
        background: linear-gradient(315deg, #42d392 25%, #647eff);
    }

    .buttonCol2 button {
        width: 90%;
        height: 2rem;
        margin-top: 0.4rem;

        border: 2px solid gray;
        border-radius: 10px;
        background: #42d392;
    }

    .buttonCol3 button {
        width: 90%;
        height: 2rem;
        margin-top: 0.4rem;

        border: 2px solid gray;
        border-radius: 10px;

        background: linear-gradient(315deg, #647eff 25%, #42d392);
    }

    button {
        cursor: pointer;
    }

    button:hover {
        opacity: .8;
    }
</style>
