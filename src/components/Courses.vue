<template>
    <div class="course">
        本周课程表
        <Table border :columns="tabeltada.columns" :data="tabeltada.coursedata"></Table>
    </div>
</template>

<script>
    import {
        computed,
        ref
    } from 'vue';

    export default {
        name: 'Courses',
        setup() {
            const tabeltada = {
                columns: [{
                        title: '星期一',
                        key: 'w1'
                    },
                    {
                        title: '星期二',
                        key: 'w2'
                    },
                    {
                        title: '星期三',
                        key: 'w3'
                    },
                    {
                        title: '星期四',
                        key: 'w4'
                    },
                    {
                        title: '星期五',
                        key: 'w5'
                    }
                ],
                coursedata: [{
                    w1: 'TCP/IP',
                    w2: '',
                    w3: '数据挖掘',
                    w4: '',
                    w5: ''
                }, {
                    w1: '',
                    w2: '',
                    w3: '',
                    w4: '多媒体',
                    w5: ''
                }, {
                    w1: '',
                    w2: '多媒体',
                    w3: '',
                    w4: '',
                    w5: ''
                }, {
                    w1: 'TCP/IP',
                    w2: '',
                    w3: '',
                    w4: '',
                    w5: ''
                }, {
                    w1: '',
                    w2: '软件体系结构',
                    w3: '软件测试',
                    w4: '',
                    w5: ''
                }, {
                    w1: '',
                    w2: '',
                    w3: '',
                    w4: '高年级研讨课',
                    w5: ''
                }, {
                    w1: '软件测试',
                    w2: '',
                    w3: '',
                    w4: '',
                    w5: ''
                }, ]
            };

            function handelChooseWeek(item) {
                alert(item);
            }
            return {
                handelChooseWeek,
                tabeltada
            }
        }
    }
</script>

<style scoped>
    .course {
        padding: 0.5rem;

        font-size: 17px;

        background-color: darkgrey;

        border: 2px solid gray;
        border-radius: 10px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<style>
    .ivu-table {
        font-size: 12px !important;
    }
</style>
