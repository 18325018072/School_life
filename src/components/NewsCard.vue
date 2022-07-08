<template>
    <div class="root-news">

    </div>
    <Tabs value="name1">
        <TabPane label="标签一" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs>
</template>

<script>
    export default {
        name: 'NewsCard',
        props: {
            msg: String
        },
        setup() {

        }
    }
</script>

<style scoped>
</style>
