<template>
    <div class="course">
        <div class="topPart">
            课程
            <Dropdown @click="handelChooseWeek">
                <a href="javascript:void(0)">
                    {{week}}
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <template #list>
                    <DropdownMenu>
                        <DropdownItem>第一周</DropdownItem>
                        <DropdownItem>第二周</DropdownItem>
                        <DropdownItem>第三周</DropdownItem>
                        <DropdownItem>第四周</DropdownItem>
                        <DropdownItem>第五周</DropdownItem>
                    </DropdownMenu>
                </template>
            </Dropdown>
        </div>

        <div class="buttonPart">
            <Grid :border="true" :hover="true" :col="5" :square="true" padding="5px">
                <GridItem>星期一</GridItem>
                <GridItem>星期二</GridItem>
                <GridItem>星期三</GridItem>
                <GridItem>星期四</GridItem>
                <GridItem>星期五</GridItem>
                <GridItem>1</GridItem>
                <GridItem>2</GridItem>
                <GridItem>数据挖掘</GridItem>
                <GridItem>4</GridItem>
                <GridItem>5</GridItem>
                <GridItem>1</GridItem>
                <GridItem>2</GridItem>
                <GridItem>3</GridItem>
                <GridItem>多媒体技术原理</GridItem>
                <GridItem>5</GridItem>
                <GridItem>1</GridItem>
                <GridItem>2</GridItem>
                <GridItem>3</GridItem>
                <GridItem>4</GridItem>
                <GridItem>5</GridItem>
                <GridItem>TCP/IP协议</GridItem>
                <GridItem>2</GridItem>
                <GridItem>3</GridItem>
                <GridItem>4</GridItem>
                <GridItem>5</GridItem>
                <GridItem>1</GridItem>
                <GridItem>软件体系结构</GridItem>
                <GridItem>软件测试</GridItem>
                <GridItem>高年级研讨课</GridItem>
                <GridItem>5</GridItem>
            </Grid>
        </div>
    </div>
</template>

<script>
    import {
        computed,
        ref
    } from 'vue';

    export default {
        name: 'Courses',
        props: {
            msg: String
        },
        setup() {
            // ---------------------------
            let week = ref('第一周');

            function handelChooseWeek(item) {
                alert(item);
                week.value = item;
            }
            return {
                handelChooseWeek,
                week
            }
        }
    }
</script>

<style scoped>
    .course {
        height: 100%;
        min-height: 15rem;
        display: flex;
        flex-direction: column;
        background-color: white;
    }

    /* 上 */
    .topPart {}

    /* 下 */
    .buttonPart {
        /* --------------------- */
        font-size: 1px;
    }

    Grad {
        padding: 5px;
    }
</style>
