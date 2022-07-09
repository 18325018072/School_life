<template>
    <div class="studyRoom">
        <div class="roomtitle">
            <div>
                暑期自习室开放情况
            </div>
            <Dropdown @on-click="cc">
                <a href="javascript:void(0)">
                    <span>{{index}}</span>
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <template #list>
                    <DropdownMenu>
                        <DropdownItem :name='buildName.l1'>1号教学楼</DropdownItem>
                        <DropdownItem :name='buildName.l2'>2号教学楼</DropdownItem>
                        <DropdownItem :name='buildName.l3'>3号教学楼</DropdownItem>
                        <DropdownItem :name='buildName.l4'>4号教学楼</DropdownItem>
                        <DropdownItem :name='buildName.l5' disabled>5号教学楼</DropdownItem>
                    </DropdownMenu>
                </template>
            </Dropdown>
        </div>

        <Table border :columns="tabeldata.columns" :show-header="false" :data="tabeldata.coursedata"></Table>
    </div>
</template>

<script>
    import {
        computed,
        ref,
        reactive
    } from 'vue';

    export default {
        name: 'StudyRoom',
        setup() {
            //TODO---------------------------------------------
            const buildName = {
                l1: '1号教学楼',
                l2: '2号教学楼',
                l3: '3号教学楼',
                l4: '4号教学楼',
                l5: '5号教学楼'
            };

            let coursedata = {
                nowdata: 1,
                coursedata1: [{
                    w1: '1F',
                    w2: '106',
                    w3: '107',
                    w4: '',
                    w5: ''
                }, {
                    w1: '2F',
                    w2: '203',
                    w3: '201',
                    w4: '225',
                    w5: ''
                }, {
                    w1: '3F',
                    w2: '301',
                    w3: '307',
                    w4: '',
                    w5: ''
                }, {
                    w1: '4F',
                    w2: '401',
                    w3: '404',
                    w4: '',
                    w5: ''
                }],
                coursedata2: [{
                    w1: '1F',
                    w2: '106',
                    w3: '',
                    w4: '',
                    w5: ''
                }, {
                    w1: '2F',
                    w2: '203',
                    w3: '201',
                    w4: '',
                    w5: ''
                }, {
                    w1: '3F',
                    w2: '305',
                    w3: '',
                    w4: '',
                    w5: ''
                }, {
                    w1: '4F',
                    w2: '401',
                    w3: '404',
                    w4: '405',
                    w5: ''
                }, {
                    w1: '5F',
                    w2: '502',
                    w3: '504',
                    w4: '',
                    w5: ''
                }]
            }

            let tabeldata = reactive({
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
                coursedata: coursedata.coursedata1
            });

            let index = ref(buildName.l1);

            function cc(name) {
                // debugger
                if (coursedata.nowdata == 1) {
                    tabeldata.coursedata = coursedata.coursedata2;
                    coursedata.nowdata = 2;
                } else {
                    tabeldata.coursedata = coursedata.coursedata1;
                    coursedata.nowdata = 1;
                }
                index.value = name;
                // debugger;
            }
            return {
                index,
                cc,
                buildName,
                tabeldata
            }
        }
    }
</script>

<style scoped>
    .studyRoom {
        width: 17rem;
        height: 15rem;
        margin: 1rem;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;

        /* border: 5px solid lightseagreen; */
        border-radius: 10px;

        /* background-color: #004098; */
        background-color: lightseagreen;
    }

    .roomtitle {
        font-size: 17px;
        color: white;

        margin-bottom: 0.2rem;
        display: flex;
        justify-content: space-between;

    }
</style>
